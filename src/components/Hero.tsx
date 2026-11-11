import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';
import { pickLang } from '../data/translations';

// Real ADRA Ethiopia field photos
import solarWaterImg from '../assets/images/solar_water_desert_1792618997738.jpg';
import healthImg from '../assets/images/adra_emergency_health_1792612497133.jpg';
import educationImg from '../assets/images/adra_education_girls_1792612496863.jpg';
import livelihoodImg from '../assets/images/adra_agriculture_food_1792612497905.jpg';
import emergencyImg from '../assets/images/adra_wash_water_1792612496655.jpg';
import techAiImg from '../assets/images/humanitarian_tech_dignity_1792616605305.jpg';

interface HeroProps {
  currentLang: Language;
  onOpenDonate: (sector?: string) => void;
  onExploreClick: () => void;
  onPartnerClick: () => void;
  onOpenChatbot?: () => void;
}

interface SlideData {
  id: string;
  kickerEn: string;
  kickerAm: string;
  kickerOm: string;
  kickerTi: string;
  titleEn: string;
  titleAm: string;
  titleOm: string;
  titleTi: string;
  subtitleEn: string;
  subtitleAm: string;
  subtitleOm: string;
  subtitleTi: string;
  ctaEn: string;
  ctaAm: string;
  ctaOm: string;
  ctaTi: string;
  secondaryCtaEn: string;
  secondaryCtaAm: string;
  secondaryCtaOm: string;
  secondaryCtaTi: string;
  image: string;
  fallbackImage: string;
  targetId: string;
  donateSector?: string;
}

const HERO_SLIDES: SlideData[] = [
  {
    id: 'solar-water',
    kickerEn: 'Clean Energy & Solar Water · Sustainability Pillar',
    kickerAm: 'ንጹህ የፀሐይ ኃይል እና የከርሰ ምድር ውሃ',
    kickerOm: 'Anniisaa Qulqulluu fi Bishaan Soolaarii',
    kickerTi: 'ጽሩይ ጸሓያዊ ጸዓትን ማይን · ዓንዲ ዘላቕነት',
    titleEn: 'Solar-Powered Underground Water for Arid Lands',
    titleAm: 'በፀሐይ ኃይል የከርሰ ምድር ውሃን ለድርቅ አከባቢዎች ማውጣት',
    titleOm: 'Bishaan Lafa Jalaa Anniisaa Aduun Bakkeewwan Gogaaf',
    titleTi: 'ብጸሓያዊ ጸዓት ዝስሕብ ማይ ንደረቕቲ ከባቢታት',
    subtitleEn: 'Harnessing solar panel arrays to power deep borehole pumps, bringing clean, abundant underground water to off-grid communities and pastoralists.',
    subtitleAm: 'በፀሐይ ኃይል የሚሰሩ ዘመናዊ ፓምፖችን በመጠቀም ንጹህ የከርሰ ምድር ውሃን ወደ በርሃማ እና የገጠር መንደሮች በዘላቂነት ማድረስ።',
    subtitleOm: 'Paampii soolaarii cimaan boolla gadi-fagoo keessaa bishaan qulqulluu gara hawaasa horsiisee bulaa fi baadiyyaatti dhiyeessuu.',
    subtitleTi: 'ብጸሓያዊ ፓምፕታት ካብ ዓሚቝ ዒላታት ጽሩይ ማይ ብምውጻእ ንሰብ-ከብትን ገጠራትን ብዘላቕነት ምቕራብ።',
    ctaEn: 'Explore Solar Water Systems',
    ctaAm: 'የፀሐይ ኃይል ውሃ ፕሮጀክቶችን ይመልከቱ',
    ctaOm: 'Bishaan Soolaarii Ilaali',
    ctaTi: 'ፕሮጀክትታት ማይ ፀሓይ ዳህስሱ',
    secondaryCtaEn: 'Calculate Clean Impact',
    secondaryCtaAm: 'የንጹህ ኃይል ተፅእኖን አስላ',
    secondaryCtaOm: 'Dhiibbaa Shallagi',
    secondaryCtaTi: 'ጽልዋ ኣስልጡ',
    image: solarWaterImg,
    fallbackImage: '/assets/images/solar_water_desert_1792618997738.jpg',
    targetId: 'impact-calculator',
    donateSector: 'WASH'
  },
  {
    id: 'healthcare',
    kickerEn: 'Health & Maternal Care · Health Pillar',
    kickerAm: 'ጤና፣ የእናቶች እንክብካቤ እና ስነ-ምግብ',
    kickerOm: 'Fayyaa & Kunuunsa Haadholii · Utubaa Fayyaa',
    kickerTi: 'ጥዕናን ክንክን ኣዴታትን · ዓንዲ ጥዕና',
    titleEn: 'Transforming Healthcare Access',
    titleAm: 'የጤና አገልግሎት ተደራሽነትን ማሳደግ',
    titleOm: 'Tajaajila Fayyaa Babalʼisuu',
    titleTi: 'ተበጻሕነት ኣገልግሎት ጥዕና ምዕባይ',
    subtitleEn: 'Deploying frontline mobile clinics, maternal waiting homes, and community nutrition to provide life-saving care to remote and vulnerable families.',
    subtitleAm: 'በተንቀሳቃሽ ክሊኒኮች፣ የእናቶች ማቆያ ማዕከላት እና የማህበረሰብ ጤና ሰራተኞች አማካኝነት ጥራት ያለው የህክምና አገልግሎት ማዳረስ።',
    subtitleOm: 'Kiliniika sochooʼaa, mana turtii haadholii fi nyaata hawaasaan maatii fagoo jiraniif tajaajila lubbuu baraaru kennuu.',
    subtitleTi: 'ብተንቀሳቀስቲ ክሊኒካት፣ ማእከላት ኣዴታትን ማሕበረሰባዊ ኣመጋግባን ህይወት ዘድሕን ሕክምና ምብጻሕ።',
    ctaEn: 'Our Health Programs',
    ctaAm: 'የጤና ፕሮግራሞችን ይመልከቱ',
    ctaOm: 'Sagantaa Fayyaa',
    ctaTi: 'መደባት ጥዕናና ርኣዩ',
    secondaryCtaEn: 'Support Health Fund',
    secondaryCtaAm: 'ለጤና ፈንድ ይለግሱ',
    secondaryCtaOm: 'Fandii Fayyaa Deeggari',
    secondaryCtaTi: 'ንፋንድ ጥዕና ደግፉ',
    image: healthImg,
    fallbackImage: '/assets/images/adra_emergency_health_1792612497133.jpg',
    targetId: 'what-we-do',
    donateSector: 'Health'
  },
  {
    id: 'education',
    kickerEn: 'Inclusive Education · Education Pillar',
    kickerAm: 'አሳታፊ ትምህርት እና የሴቶች ተሳትፎ',
    kickerOm: 'Barnoota Hammatamaa · Utubaa Barnootaa',
    kickerTi: 'ሓቛፊ ትምህርቲ · ዓንዲ ትምህርቲ',
    titleEn: 'Empowering Next-Gen Learners',
    titleAm: 'ቀጣዩን ትውልድ በትምህርት ማብቃት',
    titleOm: 'Dhaloota Itti Aanu Humneessuu',
    titleTi: 'ዝመጽእ ወለዶ ብትምህርቲ ምብቃዕ',
    subtitleEn: 'Breaking barriers for vulnerable girls, rehabilitating school infrastructure, and equipping classrooms with scholastic materials for 85,000+ students.',
    subtitleAm: 'ለሴት ተማሪዎች ድጋፍ በማድረግ፣ ትምህርት ቤቶችን በማደስ እና ዘመናዊ የመማሪያ ቁሳቁሶችን በማቅረብ የተማሪዎችን የወደፊት ተስፋ ማብራት።',
    subtitleOm: 'Danqaa shamarranii cabsuun, manneen barumsaa haaromsuu fi barattoota 85,000+f meeshaa barnootaa guutuu.',
    subtitleTi: 'ንኣዋልድ ተምሃሮ ዕንቅፋታት ብምስባር፣ ኣብያተ-ትምህርቲ ብምሕዳስን ን85,000+ ተምሃሮ ናውቲ ብምምላእን ተስፋ ምብራህ።',
    ctaEn: 'Support Youth Education',
    ctaAm: 'የትምህርት ድጋፍ ያድርጉ',
    ctaOm: 'Barnoota Deeggari',
    ctaTi: 'ትምህርቲ መንእሰያት ደግፉ',
    secondaryCtaEn: 'View Results',
    secondaryCtaAm: 'የትምህርት ውጤቶችን ይመልከቱ',
    secondaryCtaOm: 'Buʼaa Ilaali',
    secondaryCtaTi: 'ውጽኢት ርኣዩ',
    image: educationImg,
    fallbackImage: '/assets/images/adra_education_girls_1792612496863.jpg',
    targetId: 'what-we-do',
    donateSector: 'Education'
  },
  {
    id: 'livelihood',
    kickerEn: 'Food Security & Agribusiness · Livelihood Pillar',
    kickerAm: 'የምግብ ዋስትና እና ዘላቂ የኑሮ ማሻሻያ',
    kickerOm: 'Wabii Nyaataa fi Qonna · Utubaa Jireenyaa',
    kickerTi: 'ውሕስነት መግብን ሕርሻን · ዓንዲ ናብራ',
    titleEn: 'Building Sustainable Livelihoods',
    titleAm: 'ዘላቂ የኑሮ ዋስትናን መገንባት',
    titleOm: 'Jireenya Itti-fufaa Ijaaruu',
    titleTi: 'ዘላቒ መነባብሮ ምህናጽ',
    subtitleEn: 'Equipping smallholder farmers and female entrepreneurs with climate-smart farming, modern beekeeping, and 1,280+ community savings cooperatives.',
    subtitleAm: 'አነስተኛ አርሶ አደሮችን እና ሴት ስራ ፈጣሪዎችን በአየር ንብረት ተከላካይ ግብርና፣ በዘመናዊ ንብ ማነብ እና በቁጠባ ማህበራት ማብቃት።',
    subtitleOm: 'Qonnaan bultootaa fi dubartoota daldalaa qonna ammayyaa, kanniisaa fi waldaalee qusannoo 1,280+n cimsuu.',
    subtitleTi: 'ንኣሽቱ ሓረስቶትን ደቂ-ኣንስትዮን ብዘመናዊ ሕርሻ፣ መዓርን ልዕሊ 1,280 ማሕበራት ዕቋርን ምብቃዕ።',
    ctaEn: 'Discover Livelihood Projects',
    ctaAm: 'የኑሮ ፕሮጀክቶችን ይመልከቱ',
    ctaOm: 'Hojii Jireenyaa',
    ctaTi: 'ፕሮጀክትታት ናብራ ዳህስሱ',
    secondaryCtaEn: 'Fund Cooperatives',
    secondaryCtaAm: 'ህብረት ስራ ማህበራትን ይደግፉ',
    secondaryCtaOm: 'Waldaa Deeggari',
    secondaryCtaTi: 'ማሕበራት ደግፉ',
    image: livelihoodImg,
    fallbackImage: '/assets/images/adra_agriculture_food_1792612497905.jpg',
    targetId: 'what-we-do',
    donateSector: 'Livelihoods'
  },
  {
    id: 'emergency-relief',
    kickerEn: 'Emergency Response & WASH · Relief Pillar',
    kickerAm: 'ፈጣን የአደጋ ምላሽ እና የውሃ አቅርቦት',
    kickerOm: 'Deebii Balaa & WASH · Utubaa Gargaarsaa',
    kickerTi: 'ቅልጡፍ ምላሽ ሓደጋን WASHን · ዓንዲ ረድኤት',
    titleEn: 'Rapid Crisis & Disaster Response',
    titleAm: 'ፈጣን የአደጋ እና የችግር ምላሽ',
    titleOm: 'Deebii Balaa Ariifataa',
    titleTi: 'ቅልጡፍ ምላሽ ቅልውላውን ሓደጋን',
    subtitleEn: 'Delivering life-saving emergency water trucking, multi-purpose cash grants, and emergency non-food relief within 72 hours of climate shocks.',
    subtitleAm: 'ድርቅ እና የተፈጥሮ አደጋዎች ሲያጋጥሙ በ72 ሰዓታት ውስጥ የህይወት አድን ውሃ፣ ቀጥታ የገንዘብ ድጋፍ እና አጣዳፊ እቃዎችን ማድረስ።',
    subtitleOm: 'Balaan yoo mudate saʼaatii 72 keessatti bishaan qulqulluu, gargaarsa maallaqaa fi meeshaalee buʼuuraa geessuu.',
    subtitleTi: 'ሓደጋ ኣብ ዝበጽሓሉ ኣብ ውሽጢ 72 ሰዓታት ህይወት ዘድሕን ማይ፣ ቀጥታዊ ገንዘብን ህጹጽ ናውትን ምቕራብ።',
    ctaEn: 'Support Emergency Relief',
    ctaAm: 'የአደጋ ምላሽን ይደግፉ',
    ctaOm: 'Gargaarsa Deeggari',
    ctaTi: 'ህጹጽ ረድኤት ደግፉ',
    secondaryCtaEn: 'View Relief Hubs',
    secondaryCtaAm: 'የእርዳታ ጣቢያዎች',
    secondaryCtaOm: 'Buufata Ilaali',
    secondaryCtaTi: 'ማእከላት ረድኤት ርኣዩ',
    image: emergencyImg,
    fallbackImage: '/assets/images/adra_wash_water_1792612496655.jpg',
    targetId: 'where-we-work',
    donateSector: 'Emergency Response'
  },
  {
    id: 'ai-impact',
    kickerEn: 'AI & Digital Innovation · Social Transformation',
    kickerAm: 'AI እና ዲጂታል ፈጠራ ለሰብአዊ አገልግሎት',
    kickerOm: 'AI fi Kalaqa Dijitaalaa · Jijjiirama Hawaasaa',
    kickerTi: 'AIን ዲጂታል ምህዞን · ማሕበራዊ ለውጢ',
    titleEn: 'AI & Digital Solutions for Social Services',
    titleAm: 'ሰው ሰራሽ አስተውሎት ለሰብአዊ አገልግሎት እና ፈጣን ምላሽ',
    titleOm: 'Furmaata AI fi Dijitaalaa Tajaajila Hawaasaaf',
    titleTi: 'ፍታሕ AIን ዲጂታልን ንማሕበራዊ ኣገልግሎት',
    subtitleEn: 'Leveraging predictive AI satellite drought forecasting, offline mobile field intake, and real-time response analytics to maximize impact.',
    subtitleAm: 'የሳተላይት መረጃዎችን እና የAI ትንታኔዎችን በመጠቀም የድርቅ አደጋዎችን አስቀድሞ መተንበይ እና ፈጣን የመስክ እርዳታን ማረጋገጥ።',
    subtitleOm: 'Tilmaama ongea saatelaayitii AI, odeeffannoo toora-alaa fi xiinxala yeroodhaa yerootti dhiibbaa guddisuuf fayyadamuu.',
    subtitleTi: 'ናይ ሳተላይት ትንበያ ደርቂ AI፣ ካብ መስመር ወጻኢ ዳታን ቀጥታዊ ትንታነን ብምጥቃም ጽልዋና ምዕባይ።',
    ctaEn: 'Explore Digital Innovation',
    ctaAm: 'ዲጂታል ፈጠራዎችን ይመልከቱ',
    ctaOm: 'Kalaqa Dijitaalaa',
    ctaTi: 'ዲጂታል ምህዞ ዳህስሱ',
    secondaryCtaEn: 'Open ADRA AI',
    secondaryCtaAm: 'ADRA AI ን ይክፈቱ',
    secondaryCtaOm: 'ADRA AI Bani',
    secondaryCtaTi: 'ADRA AI ክፈቱ',
    image: techAiImg,
    fallbackImage: '/assets/images/humanitarian_tech_dignity_1792616605305.jpg',
    targetId: 'ai-for-good'
  }
];

export const Hero: React.FC<HeroProps> = ({ 
  currentLang, 
  onOpenDonate, 
  onExploreClick, 
  onPartnerClick,
  onOpenChatbot 
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideCount = HERO_SLIDES.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const ui = UI_COPY[currentLang] || UI_COPY.en;

  // Auto-slide every 3000ms (3 seconds)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slideCount]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slideCount);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slideCount) % slideCount);
  };

  const handleCtaClick = (slide: SlideData) => {
    if (slide.targetId === 'impact-calculator') {
      const el = document.getElementById('impact-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (slide.targetId === 'ai-for-good') {
      const el = document.getElementById('ai-for-good');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (slide.targetId === 'where-we-work') {
      const el = document.getElementById('where-we-work');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onExploreClick();
    }
  };

  const handleSecondaryCtaClick = (slide: SlideData) => {
    if (slide.donateSector) {
      onOpenDonate(slide.donateSector);
    } else if (slide.id === 'ai-impact' && onOpenChatbot) {
      onOpenChatbot();
    } else {
      onPartnerClick();
    }
  };

  const activeSlide = HERO_SLIDES[currentSlideIndex];
  const currentKicker = pickLang(currentLang, {
    en: activeSlide.kickerEn,
    am: activeSlide.kickerAm,
    om: activeSlide.kickerOm,
    ti: activeSlide.kickerTi
  });
  const currentTitle = pickLang(currentLang, {
    en: activeSlide.titleEn,
    am: activeSlide.titleAm,
    om: activeSlide.titleOm,
    ti: activeSlide.titleTi
  });
  const currentSubtitle = pickLang(currentLang, {
    en: activeSlide.subtitleEn,
    am: activeSlide.subtitleAm,
    om: activeSlide.subtitleOm,
    ti: activeSlide.subtitleTi
  });
  const currentCta = pickLang(currentLang, {
    en: activeSlide.ctaEn,
    am: activeSlide.ctaAm,
    om: activeSlide.ctaOm,
    ti: activeSlide.ctaTi
  });
  const currentSecondaryCta = pickLang(currentLang, {
    en: activeSlide.secondaryCtaEn,
    am: activeSlide.secondaryCtaAm,
    om: activeSlide.secondaryCtaOm,
    ti: activeSlide.secondaryCtaTi
  });

  return (
    <section 
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden bg-[#073826] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label={ui.hero.carouselAria}
    >
      {/* Slides with Authentic Field Photographs */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        const slideTitle = pickLang(currentLang, {
          en: slide.titleEn,
          am: slide.titleAm,
          om: slide.titleOm,
          ti: slide.titleTi
        });
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-750 ease-in-out ${
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
              className={`w-full h-full object-cover object-center transition-transform duration-[6500ms] ease-out ${
                isActive ? 'scale-100' : 'scale-108'
              } brightness-90`}
              loading={idx === 0 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
            />

            {/* Dark emerald gradient scrim for high-contrast legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#004D3A]/95 via-[#004D3A]/85 to-transparent lg:w-3/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00261c]/95 via-[#004D3A]/40 to-transparent" />

            {/* Photo Credit format per Section 5: <= 6 pt type in white / contrast scrim */}
            <div className="absolute bottom-14 right-4 sm:right-8 z-10 px-2.5 py-1 rounded bg-black/65 backdrop-blur-xs text-[9px] tracking-wide font-sans text-white/90 select-none">
              {ui.common.photoCredit}
            </div>
          </div>
        );
      })}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-left">
        <div className="max-w-2xl space-y-6">
          
          {/* Brand Kicker + Kaushan Motto Accent */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-[#f59e0b] text-xs font-bold tracking-widest uppercase font-sans backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse" />
              <span>{currentKicker}</span>
            </div>

            {/* Official ADRA Motto in Kaushan Script at 3-10 degree angle */}
            <span className="font-motto text-sm sm:text-base text-emerald-200 font-normal">
              {ui.common.motto}
            </span>
          </div>

          {/* Headline with Montserrat Bold, sentence-cased per ADRA Digital Standards */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.12] font-sans text-left min-h-[1.2em]">
            {currentTitle}
          </h1>

          {/* Subtitle adhering to Zilla Slab Regular body copy */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-serif text-left max-w-xl min-h-[3.6em]">
            {currentSubtitle}
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary Action Button */}
            <button
              onClick={() => handleCtaClick(activeSlide)}
              className="px-6 py-3.5 bg-[#f59e0b] hover:bg-[#d97706] active:bg-[#b45309] text-stone-950 font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer group/btn"
            >
              <span>{currentCta}</span>
              <ArrowRight className="w-4 h-4 text-stone-950 transition-transform group-hover/btn:translate-x-1" />
            </button>

            {/* Secondary Action Button */}
            <button
              onClick={() => handleSecondaryCtaClick(activeSlide)}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-semibold text-sm rounded-lg border border-white/20 transition-all cursor-pointer backdrop-blur-xs"
            >
              {currentSecondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label={ui.hero.prevSlideAria}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#073826]/75 hover:bg-[#f59e0b] text-white hover:text-stone-950 border border-white/20 hover:border-[#f59e0b] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md opacity-80 group-hover:opacity-100 shadow-lg hover:scale-105"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        aria-label={ui.hero.nextSlideAria}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#073826]/75 hover:bg-[#f59e0b] text-white hover:text-stone-950 border border-white/20 hover:border-[#f59e0b] flex items-center justify-center transition-all cursor-pointer backdrop-blur-md opacity-80 group-hover:opacity-100 shadow-lg hover:scale-105"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dynamic Slide Indicators (Dots) & Play/Pause Status */}
      <div className="absolute bottom-6 left-1/2 -translate-y-0 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 border border-white/15 backdrop-blur-md">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`${ui.hero.goToSlidePrefix} ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'w-7 bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]' 
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          );
        })}

        <div className="w-px h-3 bg-white/20 mx-1" />

        <button
          onClick={() => setIsPaused((prev) => !prev)}
          className="text-stone-300 hover:text-[#f59e0b] transition-colors cursor-pointer"
          aria-label={isPaused ? ui.hero.resumeAria : ui.hero.pauseAria}
          title={isPaused ? ui.hero.resumeAria : ui.hero.pauseAria}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/10 z-20">
        <div 
          key={currentSlideIndex} 
          className={`h-full bg-[#f59e0b] transition-all ${
            isPaused ? 'opacity-50' : 'animate-[progressBar_3000ms_linear]'
          }`} 
          style={{ width: isPaused ? '100%' : undefined }}
        />
      </div>
    </section>
  );
};
