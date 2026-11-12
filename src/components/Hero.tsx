import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';
import { pickLang } from '../data/translations';

import solarWaterImg from '../assets/images/solar_water_desert_1792618997738.jpg';
import healthImg from '../assets/images/adra_emergency_health_1792612497133.jpg';
import educationImg from '../assets/images/adra_education_girls_1792612496863.jpg';
import livelihoodImg from '../assets/images/adra_agriculture_food_1792612497905.jpg';
import emergencyImg from '../assets/images/adra_wash_water_1792612496655.jpg';

interface HeroProps {
  currentLang: Language;
  onExploreImpact: (pillarId?: string) => void;
  onOpenDonate: (sector?: string) => void;
}

interface SlideData {
  id: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  cta: Record<Language, string>;
  image: string;
  fallbackImage: string;
  actionType: 'impact' | 'donate';
  pillarId?: string;
  donateSector?: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'solar-water',
    title: {
      en: 'Clean Water. Lasting Dignity.',
      am: 'ንጹህ ውሃ፣ ዘላቂ ክብር',
      om: 'Bishaan Qulqulluu. Kabaja Itti-fufaa.',
      ti: 'ጽሩይ ማይ፣ ዘላቒ ክብሪ',
    },
    subtitle: {
      en: 'Solar-powered boreholes bringing safe water and resilient futures to pastoralist and rural communities across Ethiopia.',
      am: 'በፀሐይ ኃይል የሚሰሩ የከርሰ ምድር ውሃ ጉድጓዶች በኢትዮጵያ ገጠራማ እና አርብቶ አደር አካባቢዎች ንጹህ ውሃ ያደርሳሉ።',
      om: 'Boolla bishaanii anniisaa aduun hojjetuun hawaasa baadiyyaa fi horsiisee bulaa Itoophiyaaf bishaan qulqulluu dhiyeessuu.',
      ti: 'ብጸሓያዊ ጸዓት ዝሰርሑ ዒላታት ማይ ንገጠራትን ሰብ-ከብትን ኢትዮጵያ ጽሩይ ማይ የብጽሑ።',
    },
    cta: {
      en: 'EXPLORE IMPACT',
      am: 'ውጤታችንን ይመልከቱ',
      om: 'DHIIBBAA ILAALI',
      ti: 'ጽልዋና ርኣዩ',
    },
    image: solarWaterImg,
    fallbackImage: '/assets/images/solar_water_desert_1792618997738.jpg',
    actionType: 'impact',
    pillarId: 'wash',
  },
  {
    id: 'healthcare',
    title: {
      en: 'Maternal Health & Care',
      am: 'የእናቶች እና የህጻናት ጤና',
      om: 'Fayyaa Haadholii fi Daa’immanii',
      ti: 'ጥዕና ኣዴታትን ህጻናትን',
    },
    subtitle: {
      en: 'Mobile clinics and community nutrition programs reaching mothers and young children in remote regions.',
      am: 'ተንቀሳቃሽ ክሊኒኮች እና የማህበረሰብ ስነ-ምግብ ፕሮግራሞች እናቶችን እና ህጻናትን ይታደጋሉ።',
      om: 'Kiliniika sochoo’aa fi sagantaalee nyaataan haadholii fi daa’imman naannoo fagoo bira ga’uu.',
      ti: 'ተንቀሳቀስቲ ክሊኒካትን መደባት ኣመጋግባን ኣብ ርሑቕ ከባቢታት ንዝርከባ ኣዴታትን ህጻናትን ይበጽሑ።',
    },
    cta: {
      en: 'HEALTH PROGRAMS',
      am: 'የጤና ፕሮግራሞች',
      om: 'SAGANTAA FAYYAA',
      ti: 'መደባት ጥዕና',
    },
    image: healthImg,
    fallbackImage: '/assets/images/adra_emergency_health_1792612497133.jpg',
    actionType: 'impact',
    pillarId: 'health',
  },
  {
    id: 'education',
    title: {
      en: 'Empowering Young Learners',
      am: 'ወጣት ተማሪዎችን ማብቃት',
      om: 'Barattoota Dargaggoota Humneessuu',
      ti: 'መንእሰያት ተምሃሮ ምብቃዕ',
    },
    subtitle: {
      en: 'Rehabilitating classrooms, solar-lit libraries, and girls’ sanitation facilities for 85,000+ students.',
      am: 'የመማሪያ ክፍሎችን፣ የሶላር ቤተ-መጻሕፍትን እና የሴት ተማሪዎች መገልገያዎችን ለ85,000+ ተማሪዎች ማሟላት።',
      om: 'Daree barumsaa, mana kitaabaa soolaarii fi tajaajila qulqullinaa barattoota 85,000+f guutuu.',
      ti: 'ክፍልታት ትምህርቲ፣ ጸሓያዊ ቤተ-መጻሕፍትን ናውቲ ጽሬትን ን85,000+ ተምሃሮ ምምላእ።',
    },
    cta: {
      en: 'EDUCATION IMPACT',
      am: 'የትምህርት ተፅዕኖ',
      om: 'BARNOOTA ILAALI',
      ti: 'ጽልዋ ትምህርቲ',
    },
    image: educationImg,
    fallbackImage: '/assets/images/adra_education_girls_1792612496863.jpg',
    actionType: 'impact',
    pillarId: 'education',
  },
  {
    id: 'livelihood',
    title: {
      en: 'Resilient Rural Livelihoods',
      am: 'ዘላቂ የገጠር ኑሮ ማሻሻያ',
      om: 'Jireenya Baadiyyaa Cimaa',
      ti: 'ጽኑዕ መነባብሮ ገጠር',
    },
    subtitle: {
      en: 'Climate-smart agribusiness and women’s savings cooperatives strengthening household food security.',
      am: 'የአየር ንብረት ተስማሚ ግብርና እና የሴቶች የቁጠባ ማህበራት የቤተሰብ የምግብ ዋስትናን ያጠናክራሉ።',
      om: 'Qonna ammayyaa fi waldaalee qusannoo dubartootaan wabii nyaataa maatii cimsuu.',
      ti: 'ብዘመናዊ ሕርሻን ማሕበራት ዕቋር ደቂ-ኣንስትዮን ውሕስነት መግቢ ስድራቤታት ምጥንኻር።',
    },
    cta: {
      en: 'GIVE TODAY',
      am: 'ዛሬ ይለግሱ',
      om: 'HAR’A KENNI',
      ti: 'ሎሚ ለግሱ',
    },
    image: livelihoodImg,
    fallbackImage: '/assets/images/adra_agriculture_food_1792612497905.jpg',
    actionType: 'donate',
    donateSector: 'Livelihoods',
  },
  {
    id: 'emergency-relief',
    title: {
      en: 'Rapid Humanitarian Response',
      am: 'ፈጣን የሰብዓዊ ምላሽ',
      om: 'Deebii Namoomaa Ariifataa',
      ti: 'ቅልጡፍ ሰብኣዊ ምላሽ',
    },
    subtitle: {
      en: 'Delivering emergency water, cash transfers, and life-saving relief within 72 hours of crisis.',
      am: 'አደጋ ሲከሰት በ72 ሰዓታት ውስጥ አስቸኳይ ውሃ፣ የገንዘብ ድጋፍ እና የህይወት አድን እርዳታ ማድረስ።',
      om: 'Yeroo balaan uumamu sa’aatii 72 keessatti bishaan, maallaqa fi gargaarsa lubbuu baraaru geessuu.',
      ti: 'ሓደጋ ኣብ ዘጋጥመሉ ኣብ ውሽጢ 72 ሰዓታት ህጹጽ ማይ፣ ገንዘብን ረድኤትን ምብጻሕ።',
    },
    cta: {
      en: 'EMERGENCY APPEAL',
      am: 'የአደጋ ጥሪ',
      om: 'GARGAARSA BALAA',
      ti: 'ህጹጽ ጻውዒት',
    },
    image: emergencyImg,
    fallbackImage: '/assets/images/adra_wash_water_1792612496655.jpg',
    actionType: 'donate',
    donateSector: 'Emergency Response',
  },
];

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onExploreImpact,
  onOpenDonate,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = HERO_SLIDES.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ui = UI_COPY[currentLang] || UI_COPY.en;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideCount]);

  const activeSlide = HERO_SLIDES[currentSlideIndex];
  const currentTitle = pickLang(currentLang, activeSlide.title);
  const currentSubtitle = pickLang(currentLang, activeSlide.subtitle);
  const currentCta = pickLang(currentLang, activeSlide.cta);

  const handlePrimaryClick = () => {
    if (activeSlide.actionType === 'donate') {
      onOpenDonate(activeSlide.donateSector);
    } else {
      onExploreImpact(activeSlide.pillarId);
    }
  };

  return (
    <section
      className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden bg-[#54585A] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label={ui.hero.carouselAria}
    >
      {/* Full-Bleed Slide Background Photography */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        const slideTitle = pickLang(currentLang, slide.title);
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-1' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = slide.fallbackImage;
              }}
              alt={slideTitle}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
            />
            {/* Measured Contrast Scrim for WCAG AA white text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/80 via-[#231F20]/45 to-black/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
          </div>
        );
      })}

      {/* Left-Aligned Hero Content Container matching ADRA Web Template */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24 w-full text-left">
        <div className="max-w-xl space-y-5">
          <h1
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.1] font-sans text-left"
            style={{ textWrap: 'balance' }}
          >
            {currentTitle}
          </h1>

          <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-serif text-left max-w-lg">
            {currentSubtitle}
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={handlePrimaryClick}
              className={`px-9 py-3.5 bg-[#007B5F] hover:bg-[#00614A] active:bg-[#004D3A] text-white font-bold text-sm rounded-full shadow-md transition-colors cursor-pointer font-sans whitespace-nowrap ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {currentCta}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Photo Credit per ADRA Graphic Standards Manual Section 5 */}
      <div className="absolute bottom-3 right-4 sm:right-6 z-20 text-[11px] font-sans text-white/80 select-none">
        {ui.common.photoCredit}
      </div>

      {/* Subtle Slide Arrows */}
      <button
        type="button"
        onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + slideCount) % slideCount)}
        aria-label={ui.hero.prevSlideAria}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/35 hover:bg-[#007B5F] text-white items-center justify-center transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % slideCount)}
        aria-label={ui.hero.nextSlideAria}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/35 hover:bg-[#007B5F] text-white items-center justify-center transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Clean Minimalist Carousel Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlideIndex(idx)}
            aria-label={`${ui.hero.goToSlidePrefix} ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              idx === currentSlideIndex ? 'w-6 bg-[#007B5F] ring-1 ring-white/80' : 'w-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? ui.hero.resumeAria : ui.hero.pauseAria}
          className="ml-1.5 text-white/80 hover:text-white cursor-pointer"
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
};
