import React, { useState } from 'react';
import { X, Calendar, User, Heart, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { SAMPLE_BLOGS, getLocalizedBlog, BlogItem } from '../data/blogsData';
import { pickLang } from '../data/translations';
import { UI_COPY } from '../data/uiCopy';
import {
  HealthPillarIcon,
  EducationPillarIcon,
  LivelihoodsPillarIcon,
  EmergencyPillarIcon,
} from './ImpactPillarIcons';
import { CorePageId } from './SearchModal';

interface HomeTemplateProps {
  currentLang: Language;
  onNavigatePage: (page: CorePageId, options?: { subSection?: string; pillarId?: string }) => void;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
}

const HOME_COPY: Record<
  Language,
  {
    mottoTitle: string;
    mottoSubtitle: string;
    aboutUsBtn: string;
    featuredTab: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDesc: string;
    featuredCta: string;
    impactTab: string;
    impactIntro: string;
    healthLabel: string;
    educationLabel: string;
    livelihoodsLabel: string;
    emergencyLabel: string;
    sevenPillarsLink: string;
    latestTab: string;
    readMore: string;
    viewAllMedia: string;
  }
> = {
  en: {
    mottoTitle: 'Justice. Compassion. Love.',
    mottoSubtitle: 'Serving humanity so all may live as God intended',
    aboutUsBtn: 'ABOUT US',
    featuredTab: 'FEATURED',
    featuredEyebrow: 'ETHIOPIA REGIONAL APPEAL · 2026',
    featuredTitle: 'Solar Water & Resilience Across Seven Regional Hubs',
    featuredDesc:
      'Delivering deep solar-powered boreholes, girls’ education, and emergency relief across Oromia, Somali, Afar, Tigray, Amhara, Sidama, and Gambella.',
    featuredCta: 'EXPLORE REGIONAL IMPACT',
    impactTab: 'IMPACT',
    impactIntro:
      'ADRA is changing the world through a range of programs and initiatives in four key impact areas',
    healthLabel: 'HEALTH',
    educationLabel: 'EDUCATION',
    livelihoodsLabel: 'LIVELIHOODS',
    emergencyLabel: 'EMERGENCY',
    sevenPillarsLink: 'Explore all 7 ADRA Ethiopia Technical Pillars (including WASH, Clean Energy & Peace Building)',
    latestTab: 'LATEST',
    readMore: 'READ MORE',
    viewAllMedia: 'VIEW ALL NEWS & BLOG',
  },
  am: {
    mottoTitle: 'ፍትህ። ርህራሄ። ፍቅር።',
    mottoSubtitle: 'ሁሉም እንደ እግዚአብሔር ፈቃድ እንዲኖር ሰብአዊነትን ማገልገል',
    aboutUsBtn: 'ስለ እኛ',
    featuredTab: 'ተለይቶ የቀረበ',
    featuredEyebrow: 'የኢትዮጵያ ክልላዊ ጥሪ · 2026',
    featuredTitle: 'በሰባት ክልላዊ ማዕከላት የፀሐይ ኃይል ውሃ እና የጽናት ግንባታ',
    featuredDesc:
      'በኦሮሚያ፣ ሶማሌ፣ አፋር፣ ትግራይ፣ አማራ፣ ሲዳማ እና ጋምቤላ ንጹህ ውሃ፣ ትምህርት እና ፈጣን የአደጋ ምላሽ ማድረስ።',
    featuredCta: 'ክልላዊ ተፅዕኖን ይመልከቱ',
    impactTab: 'ተፅዕኖ',
    impactIntro:
      'ADRA በአራት ቁልፍ የትኩረት መስኮች በሚተገብራቸው ፕሮግራሞች ዓለምን እየለወጠ ይገኛል',
    healthLabel: 'ጤና',
    educationLabel: 'ትምህርት',
    livelihoodsLabel: 'የኑሮ ዋስትና',
    emergencyLabel: 'አስቸኳይ ምላሽ',
    sevenPillarsLink: 'ሁሉንም 7 የADRA ኢትዮጵያ ቴክኒካዊ ምሰሶዎች (WASH፣ ንጹህ ኃይል እና ሰላም ግንባታን ጨምሮ) ይመልከቱ',
    latestTab: 'የቅርብ ጊዜ',
    readMore: 'ተጨማሪ ያንብቡ',
    viewAllMedia: 'ሁሉንም ዜናዎች እና ጦማሮች ይመልከቱ',
  },
  om: {
    mottoTitle: 'Haqa. Gara-laafina. Jaalala.',
    mottoSubtitle: 'Namni hundi akka fedha Waaqayyootti akka jiraatuuf namooma tajaajiluu',
    aboutUsBtn: 'WAA’EE KEENYA',
    featuredTab: 'FILATAMAA',
    featuredEyebrow: 'WAAMICHA NAANNOO ITOOPHIYAA · 2026',
    featuredTitle: 'Bishaan Soolaarii fi Dandamannaa Damee Naannoo 7 Keessatti',
    featuredDesc:
      'Oromiyaa, Somaalee, Affaar, Tigraay, Amaaraa, Sidaamaa fi Gambeellaatti bishaan qulqulluu, barnootaa fi gargaarsa ariifataa geessuu.',
    featuredCta: 'DHIIBBAA NAANNOO ILAALI',
    impactTab: 'DHIIBBAA',
    impactIntro:
      'ADRAn sagantaalee gurguddoo dameewwan dhiibbaa afur keessatti hojjetuun addunyaa jijjiiraa jira',
    healthLabel: 'FAYYAA',
    educationLabel: 'BARNOOTA',
    livelihoodsLabel: 'JIREENYA',
    emergencyLabel: 'BALAA TASAA',
    sevenPillarsLink: 'Utubaalee Teeknikaa ADRA Itoophiyaa 7 (WASH, Anniisaa fi Ijaarsa Nagaa dabalatee) ilaali',
    latestTab: 'HAARAA',
    readMore: 'BAL’INAA DUBBISI',
    viewAllMedia: 'ODUU FI BILOOGII HUNDAA ILAALI',
  },
  ti: {
    mottoTitle: 'ፍትሒ። ርሕራሐ። ፍቕሪ።',
    mottoSubtitle: 'ኩሉ ከም ፍቓድ ኣምላኽ ምእንቲ ክነብር ንሰብኣዊነት ምግልጋል',
    aboutUsBtn: 'ብዛዕባና',
    featuredTab: 'ፍሉይ',
    featuredEyebrow: 'ክልላዊ ጻውዒት ኢትዮጵያ · 2026',
    featuredTitle: 'ብጸሓያዊ ጸዓት ዝሰርሕ ማይን ጽንዓትን ኣብ 7 ማእከላት ክልል',
    featuredDesc:
      'ኣብ ኦሮሚያ፣ ሶማሌ፣ ዓፋር፣ ትግራይ፣ ኣምሓራ፣ ሲዳማን ጋምቤላን ጽሩይ ማይ፣ ትምህርትን ቅልጡፍ ምላሽን ምብጻሕ።',
    featuredCta: 'ክልላዊ ጽልዋ ዳህስሱ',
    impactTab: 'ጽልዋ',
    impactIntro:
      'ADRA በዞም ኣርባዕተ ቁልፊ ዓውድታት ጽልዋ ብዘካይዶም መደባት ንዓለም ይቕይር ኣሎ',
    healthLabel: 'ጥዕና',
    educationLabel: 'ትምህርቲ',
    livelihoodsLabel: 'መነባብሮ',
    emergencyLabel: 'ህጹጽ ምላሽ',
    sevenPillarsLink: 'ኩሎም 7 ቴክኒካዊ ዓንድታት ADRA ኢትዮጵያ (WASH፣ ጸዓትን ህንጸት ሰላምን ሓዊሱ) ርኣዩ',
    latestTab: 'እዋናዊ',
    readMore: 'ተወሳኺ ኣንብቡ',
    viewAllMedia: 'ኩሎም ዜናታትን ብሎግን ርኣዩ',
  },
};

export const MissionMottoSection: React.FC<{
  currentLang: Language;
  onAboutClick: () => void;
}> = ({ currentLang, onAboutClick }) => {
  const copy = HOME_COPY[currentLang] || HOME_COPY.en;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-4">
        <h2
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#007B5F] font-sans leading-tight text-center"
          style={{ textAlign: 'center' }}
        >
          {copy.mottoTitle}
        </h2>

        <p
          className="text-base sm:text-lg lg:text-xl text-[#231F20] font-serif leading-relaxed text-center max-w-2xl"
          style={{ textAlign: 'center' }}
        >
          {copy.mottoSubtitle}
        </p>

        <div className="pt-3">
          <button
            type="button"
            onClick={onAboutClick}
            className={`px-9 py-3 bg-[#007B5F] hover:bg-[#00614A] active:bg-[#004D3A] text-white font-bold text-xs sm:text-sm rounded-full transition-colors cursor-pointer font-sans ${
              isEthiopic ? '' : 'uppercase tracking-[0.05em]'
            }`}
          >
            {copy.aboutUsBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export const FeaturedBandSection: React.FC<HomeTemplateProps> = ({
  currentLang,
  onNavigatePage,
}) => {
  const copy = HOME_COPY[currentLang] || HOME_COPY.en;
  const common = (UI_COPY[currentLang] || UI_COPY.en).common;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  return (
    <section className="relative bg-[#54585A] overflow-hidden">
      {/* Overlapping White Rectangular Tab Header */}
      <div className="relative z-20 flex justify-center">
        <div
          className={`bg-white text-[#007B5F] font-bold text-sm sm:text-base px-10 py-2.5 rounded-b-lg shadow-xs font-sans ${
            isEthiopic ? '' : 'uppercase tracking-[0.05em]'
          }`}
        >
          {copy.featuredTab}
        </div>
      </div>

      {/* Full-bleed Photo Background with Official <PhotoPanel> Bottom-Left Overlay */}
      <div className="relative min-h-[380px] sm:min-h-[430px] flex items-end">
        <img
          src="/assets/images/adra_hero_community_1792612495148.jpg"
          alt={copy.featuredTitle}
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/15" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 pb-10 sm:pb-14">
          {/* Official ADRA Graphic Standards Manual PhotoPanel: rgba(0, 123, 95, 0.88) bottom-left */}
          <div className="max-w-xl bg-[#007B5F]/90 backdrop-blur-xs p-6 sm:p-8 text-white space-y-3 shadow-xl">
            <div
              className={`text-[11px] font-bold text-white/90 font-sans ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {copy.featuredEyebrow}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans leading-snug">
              {copy.featuredTitle}
            </h3>
            <p className="text-sm sm:text-base text-white/95 font-serif leading-relaxed">
              {copy.featuredDesc}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigatePage('impact', { subSection: 'where-we-work' })}
                className={`inline-flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-[#E5F2EF] text-[#007B5F] font-bold text-xs rounded-full transition-colors cursor-pointer font-sans ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                }`}
              >
                <span>{copy.featuredCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 sm:right-6 z-10 text-[11px] font-sans text-white/85">
          {common.photoCredit}
        </div>
      </div>
    </section>
  );
};

export const ImpactFourPillarsBand: React.FC<{
  currentLang: Language;
  onSelectPillar: (pillarId: string) => void;
  onViewAllPillars: () => void;
  activePillarId?: string;
}> = ({ currentLang, onSelectPillar, onViewAllPillars, activePillarId }) => {
  const copy = HOME_COPY[currentLang] || HOME_COPY.en;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  const pillars = [
    {
      id: 'health',
      label: copy.healthLabel,
      Icon: HealthPillarIcon,
    },
    {
      id: 'education',
      label: copy.educationLabel,
      Icon: EducationPillarIcon,
    },
    {
      id: 'livelihood',
      label: copy.livelihoodsLabel,
      Icon: LivelihoodsPillarIcon,
    },
    {
      id: 'disaster-response',
      label: copy.emergencyLabel,
      Icon: EmergencyPillarIcon,
    },
  ];

  return (
    <section className="bg-white">
      {/* Full-Width ADRA Green Top Band + Overlapping Solid Green IMPACT Tab */}
      <div className="w-full bg-[#007B5F] h-6" />
      <div className="flex justify-center -mt-px">
        <div
          className={`bg-[#007B5F] text-white font-bold text-sm sm:text-base px-12 py-2.5 rounded-b-lg font-sans ${
            isEthiopic ? '' : 'uppercase tracking-[0.05em]'
          }`}
        >
          {copy.impactTab}
        </div>
      </div>

      {/* Centered Intro & 4 Key Impact Pillars Icon Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center space-y-10">
        <p
          className="text-base sm:text-lg text-[#231F20] font-serif leading-relaxed max-w-xl mx-auto text-center"
          style={{ textAlign: 'center' }}
        >
          {copy.impactIntro}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 items-start">
          {pillars.map(({ id, label, Icon }) => {
            const isSelected = activePillarId === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectPillar(id)}
                className={`group flex flex-col items-center gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                  isSelected ? 'bg-[#E5F2EF]' : 'hover:bg-[#E5F2EF]/50'
                }`}
              >
                <Icon className="w-20 h-20 text-[#007B5F] transition-transform duration-200 group-hover:scale-105" />
                <span
                  className={`text-sm sm:text-[15px] font-bold text-[#231F20] group-hover:text-[#007B5F] font-sans ${
                    isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onViewAllPillars}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#007B5F] hover:text-[#00614A] hover:underline font-sans cursor-pointer"
          >
            <span>{copy.sevenPillarsLink}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const LatestNewsGridSection: React.FC<{
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
  onViewAllMedia?: () => void;
  maxCards?: number;
}> = ({ currentLang, onOpenDonate, onViewAllMedia, maxCards = 2 }) => {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const copy = HOME_COPY[currentLang] || HOME_COPY.en;
  const common = (UI_COPY[currentLang] || UI_COPY.en).common;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  const displayedBlogs: BlogItem[] = SAMPLE_BLOGS.slice(0, maxCards);
  const selectedBlog = selectedBlogId
    ? SAMPLE_BLOGS.find((b) => b.id === selectedBlogId) ?? null
    : null;
  const selectedLoc = selectedBlog ? getLocalizedBlog(selectedBlog, currentLang) : null;

  const formatCategoryLine = (blog: BlogItem, locCat: string) => {
    const tagUpper = blog.tags.slice(0, 1)[0] || 'ETHIOPIA';
    return `${locCat} | ${tagUpper}`;
  };

  return (
    <section className="bg-[#E2E4E0] pb-16 sm:pb-20">
      {/* Overlapping White Rectangular Tab Header */}
      <div className="flex justify-center">
        <div
          className={`bg-white text-[#007B5F] font-bold text-sm sm:text-base px-10 py-2.5 rounded-b-lg shadow-2xs font-sans ${
            isEthiopic ? '' : 'uppercase tracking-[0.05em]'
          }`}
        >
          {copy.latestTab}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedBlogs.map((blog) => {
            const loc = getLocalizedBlog(blog, currentLang);
            return (
              <article
                key={blog.id}
                onClick={() => setSelectedBlogId(blog.id)}
                className="bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Top 16:9 Image Area */}
                  <div className="aspect-[16/9] w-full overflow-hidden bg-stone-200">
                    <img
                      src={blog.image}
                      alt={loc.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* White Content Body */}
                  <div className="p-6 sm:p-7 space-y-2.5 text-left">
                    <div
                      className={`text-[11px] font-bold text-[#54585A] font-sans ${
                        isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                      }`}
                    >
                      {formatCategoryLine(blog, loc.category)}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#231F20] group-hover:text-[#007B5F] transition-colors font-sans leading-snug">
                      {loc.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#54585A] font-serif leading-relaxed line-clamp-3">
                      {loc.summary}
                    </p>
                  </div>
                </div>

                {/* Full-Width ADRA Green Bottom Action Bar with Right-Aligned READ MORE */}
                <div className="bg-[#007B5F] group-hover:bg-[#00614A] transition-colors px-6 py-3 flex items-center justify-end">
                  <span
                    className={`text-white font-bold text-xs font-sans ${
                      isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                    }`}
                  >
                    {copy.readMore}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {onViewAllMedia && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={onViewAllMedia}
              className={`px-8 py-3 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs rounded-full transition-colors cursor-pointer font-sans ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {copy.viewAllMedia}
            </button>
          </div>
        )}
      </div>

      {/* Article Reader Modal */}
      {selectedBlog && selectedLoc && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedBlogId(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-t-4 border-[#007B5F]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white px-6 py-4 border-b border-stone-200 flex items-center justify-between z-10">
              <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#007B5F] font-sans">
                {selectedLoc.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedBlogId(null)}
                aria-label={common.close}
                className="p-1.5 text-[#54585A] hover:text-[#231F20] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src={selectedBlog.image}
                alt={selectedLoc.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-5 text-left">
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#54585A] font-sans">
                <span className="flex items-center gap-1.5 font-semibold text-[#231F20]">
                  <User className="w-3.5 h-3.5 text-[#007B5F]" />
                  <span>{selectedBlog.author.name}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#007B5F]" />
                  <span>{selectedLoc.date}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#231F20] font-sans leading-tight">
                {selectedLoc.title}
              </h3>

              <div className="space-y-4 text-[#231F20] font-serif text-base leading-relaxed">
                {selectedLoc.content.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const cat = selectedBlog.category;
                    setSelectedBlogId(null);
                    onOpenDonate(cat);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs uppercase tracking-[0.05em] rounded-full cursor-pointer font-sans"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>{UI_COPY[currentLang].blogs.ctaBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedBlogId(null)}
                  className="px-5 py-2 border border-stone-300 text-[#54585A] hover:bg-stone-100 text-xs font-bold uppercase tracking-[0.05em] rounded-full cursor-pointer font-sans"
                >
                  {common.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
