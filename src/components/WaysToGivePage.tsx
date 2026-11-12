import React from 'react';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { ImpactCalculator } from './ImpactCalculator';
import { UI_COPY } from '../data/uiCopy';

interface WaysToGivePageProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string, presetAmount?: number) => void;
  focusAnchor?: string;
}

interface GiftItem {
  id: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  desc: Record<Language, string>;
  amountUsd: number;
  sector: string;
  image: string;
}

const GIFT_CATALOG_ITEMS: GiftItem[] = [
  {
    id: 'solar-water-share',
    category: {
      en: 'WASH | SOLAR WATER',
      am: 'ንጹህ ውሃ | ሶላር',
      om: 'WASH | BISHAAN SOOLAARII',
      ti: 'WASH | ጸሓያዊ ማይ',
    },
    title: {
      en: 'Safe Drinking Water for a Rural Household ($50)',
      am: 'ለገጠር ቤተሰብ ንጹህ የመጠጥ ውሃ ($50)',
      om: 'Bishaan Qulqulluu Maatii Baadiyyaaf ($50)',
      ti: 'ንስድራ ገጠር ጽሩይ ዝስተ ማይ ($50)',
    },
    desc: {
      en: 'Supports solar-powered borehole maintenance and clean water storage filtration for pastoralist and highland families.',
      am: 'በፀሐይ ኃይል የሚሰሩ ጉድጓዶችን ጥገና እና የንጹህ ውሃ አቅርቦትን ይደግፋል።',
      om: 'Suphaa boolla bishaanii aduu fi qulqullina bishaanii maatiiwwaniif deeggara.',
      ti: 'ጽገና ጸሓያዊ ዒላታት ማይን ጽሩይ ኣቕርቦት ማይን ይድግፍ።',
    },
    amountUsd: 50,
    sector: 'WASH',
    image: '/assets/images/solar_water_desert_1792618997738.jpg',
  },
  {
    id: 'girls-education-kit',
    category: {
      en: 'EDUCATION | PROTECTION',
      am: 'ትምህርት | ጥበቃ',
      om: 'BARNOOTA | EEGUMSA',
      ti: 'ትምህርቲ | ሓለዋ',
    },
    title: {
      en: 'Scholastic & Dignity Kit for Three Girls ($35)',
      am: 'ለሶስት ሴት ተማሪዎች የትምህርት እና የንጽህና ፓክ ($35)',
      om: 'Meeshaa Barnootaa fi Qulqullinaa Shamarran 3f ($35)',
      ti: 'ንሰለስተ ተምሃሮ ኣዋልድ ናውቲ ትምህርትን ጽሬትን ($35)',
    },
    desc: {
      en: 'Provides textbooks, exercise supplies, and menstrual hygiene dignity packs so adolescent girls stay in school year-round.',
      am: 'ሴት ተማሪዎች ትምህርታቸውን በተሟላ ሁኔታ እንዲከታተሉ መጽሐፍት እና የንጽህና መጠበቂያ ቁሳቁሶችን ያሟላል።',
      om: 'Kitaabilee fi paakkii qulqullinaa shamarran barnoota isaanii itti fufaniif dhiyeessa.',
      ti: 'ኣዋልድ ተምሃሮ ትምህርተን ከይተቋረጸ ንኽከታተላ መጻሕፍትን ናውቲ ጽሬትን የዳሉ።',
    },
    amountUsd: 35,
    sector: 'Education',
    image: '/assets/images/adra_education_girls_1792612496863.jpg',
  },
  {
    id: 'maternal-health-pack',
    category: {
      en: 'HEALTH | NUTRITION',
      am: 'ጤና | ስነ-ምግብ',
      om: 'FAYYAA | NYAATA',
      ti: 'ጥዕና | ኣመጋግባ',
    },
    title: {
      en: 'Maternal Care & Child Nutrition Care ($75)',
      am: 'የእናቶች እንክብካቤ እና የህጻናት ስነ-ምግብ ($75)',
      om: 'Kunuunsa Haadholii fi Nyaata Daa’immanii ($75)',
      ti: 'ክንክን ኣዴታትን ኣመጋግባ ህጻናትን ($75)',
    },
    desc: {
      en: 'Equips mobile clinics and community health workers with therapeutic nutrition and safe delivery kits.',
      am: 'ተንቀሳቃሽ ክሊኒኮችን በተመጣጠነ ምግብ እና በእናቶች ወሊድ እንክብካቤ ቁሳቁሶች ያግዛል።',
      om: 'Kiliniika sochoo’aa nyaata yaalaa fi tajaajila dahumsaaf gargaara.',
      ti: 'ንተንቀሳቀስቲ ክሊኒካት ብሕክምናዊ መግብን ድሕነት ሕርስን ይድግፍ።',
    },
    amountUsd: 75,
    sector: 'Health',
    image: '/assets/images/adra_emergency_health_1792612497133.jpg',
  },
  {
    id: 'livelihood-seed-grant',
    category: {
      en: 'LIVELIHOODS | AGRICULTURE',
      am: 'የኑሮ ዋስትና | ግብርና',
      om: 'JIREENYA | QONNA',
      ti: 'መነባብሮ | ሕርሻ',
    },
    title: {
      en: 'Drought-Resistant Seeds & Women’s Cooperative ($120)',
      am: 'ድርቅን የሚቋቋሙ ዘሮች እና የሴቶች ማህበር ($120)',
      om: 'Sanyii Hongee Dandamatu & Waldaa Dubartootaa ($120)',
      ti: 'ደርቂ ዝጻወር ዘርእን ማሕበር ደቂ-ኣንስትዮን ($120)',
    },
    desc: {
      en: 'Supplies smallholder farmers with certified resilient seeds, drip-irrigation tools, and village savings support.',
      am: 'ለአነስተኛ አርሶ አደሮች የተሻሻሉ ዘሮችን፣ የጠብታ መስኖ እና የቁጠባ ማህበራትን ድጋፍ ያቀርባል።',
      om: 'Qonnaan bultootaaf sanyii filatamaa, jallisii cophaa fi waldaa qusannoo deeggara.',
      ti: 'ንኣሽቱ ሓረስቶት ምሩጽ ዘርእን ናውቲ መስኖን የበርክት።',
    },
    amountUsd: 120,
    sector: 'Livelihoods',
    image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
  },
];

const COPY: Record<
  Language,
  {
    heroTitle: string;
    heroSub: string;
    heroCta: string;
    appealTab: string;
    appealTitle: string;
    appealDesc: string;
    appealCta: string;
    catalogTab: string;
    giveGift: string;
    howTab: string;
    howTitle: string;
    howDesc: string;
  }
> = {
  en: {
    heroTitle: 'Ways to Give',
    heroSub:
      'Partner with ADRA Ethiopia through TeleBirr, CBE Birr, or international giving to deliver clean water, healthcare, education, and emergency relief.',
    heroCta: 'DONATE NOW',
    appealTab: 'CURRENT APPEAL',
    appealTitle: '2026 Ethiopia Drought & Solar Water Appeal',
    appealDesc:
      'Climate shocks across pastoralist lowlands require urgent solar borehole rehabilitation, mobile health clinics, and 72-hour emergency relief.',
    appealCta: 'GIVE TO CURRENT APPEAL',
    catalogTab: 'GIFT CATALOG',
    giveGift: 'GIVE THIS GIFT',
    howTab: 'HOW IT WORKS',
    howTitle: 'Stewardship You Can Verify',
    howDesc:
      '88%+ of every contribution funds direct field programs across 7 Ethiopian regional hubs under FDRE ACSO License #2049.',
  },
  am: {
    heroTitle: 'የድጋፍ መንገዶች',
    heroSub:
      'በቴሌብር፣ CBE ብር ወይም በዓለም አቀፍ ካርድ ንጹህ ውሃ፣ ጤና፣ ትምህርት እና የአደጋ ምላሽን ለማድረስ ከADRA ኢትዮጵያ ጋር ይተባበሩ።',
    heroCta: 'አሁን ይለግሱ',
    appealTab: 'ወቅታዊ ጥሪ',
    appealTitle: '2026 የኢትዮጵያ የድርቅ እና የፀሐይ ኃይል ውሃ ጥሪ',
    appealDesc:
      'በአርብቶ አደር አካባቢዎች የሚከሰተውን የአየር ንብረት ጫና ለመቋቋም የሶላር ውሃ ጉድጓዶች፣ ተንቀሳቃሽ ክሊኒኮች እና ፈጣን እርዳታ ያስፈልጋል።',
    appealCta: 'ለወቅታዊው ጥሪ ይለግሱ',
    catalogTab: 'የስጦታ ካታሎግ',
    giveGift: 'ይህን ስጦታ ይስጡ',
    howTab: 'እንዴት እንደሚሰራ',
    howTitle: 'ሊረጋገጥ የሚችል ግልጽነት',
    howDesc:
      'ከእያንዳንዱ ልገሳ ከ88% በላይ የሚሆነው በ7 የክልል ማዕከላት በቀጥታ ለመስክ ፕሮግራሞች ይውላል።',
  },
  om: {
    heroTitle: 'Karaa Kenna',
    heroSub:
      'TeleBirr, CBE Birr yookiin kaffaltii idil-addunyaatiin bishaan qulqulluu, fayyaa fi barnootaaf ADRA Itoophiyaa waliin dhaabadhaa.',
    heroCta: 'AMMA KENNI',
    appealTab: 'WAAMICHA AMMAA',
    appealTitle: 'Waamicha Hongee fi Bishaan Soolaarii Itoophiyaa 2026',
    appealDesc:
      'Hawaasa horsiisee bulaaf boolla bishaanii soolaarii, kiliniika sochoo’aa fi gargaarsa ariifataa sa’aatii 72 dhiyeessuu.',
    appealCta: 'WAAMICHA DEEGGARI',
    catalogTab: 'KAATAALOOGII KENNA',
    giveGift: 'KENNA KANA KENNI',
    howTab: 'AKKAATA HOJII',
    howTitle: 'Itti Gaafatamummaa Mirkanaa’aa',
    howDesc:
      'Deeggarsa keessan keessaa %88+ kallattiin sagantaalee dirree naannoo 7 keessatti hojjetamaniif oola.',
  },
  ti: {
    heroTitle: 'መንገድታት ሓገዝ',
    heroSub:
      'ብTeleBirr፣ CBE ብር ወይ ዓለምለኻዊ ካርድ ጽሩይ ማይ፣ ጥዕናን ትምህርትን ንምብጻሕ ምስ ADRA ኢትዮጵያ ተሓባበሩ።',
    heroCta: 'ሕጂ ለግሱ',
    appealTab: 'እዋናዊ ጻውዒት',
    appealTitle: '2026 ጻውዒት ደርቅን ጸሓያዊ ማይን ኢትዮጵያ',
    appealDesc:
      'ኣብ ከባቢታት ሰብ-ከብቲ ጸሓያዊ ዒላታት ማይ፣ ተንቀሳቀስቲ ክሊኒካትን ህጹጽ ረድኤትን ምቕራብ።',
    appealCta: 'ንእዋናዊ ጻውዒት ለግሱ',
    catalogTab: 'ካታሎግ ህያብ',
    giveGift: 'ነዚ ህያብ ለግሱ',
    howTab: 'ከመይ ይሰርሕ',
    howTitle: 'ዝተረጋገጸ ተሓታትነት',
    howDesc:
      'ካብ ነፍሲ-ወከፍ ሓገዝ ልዕሊ 88% ብቐጥታ ኣብ 7 ማእከላት ክልል ንመስካዊ መደባት ይውዕል።',
  },
};

export const WaysToGivePage: React.FC<WaysToGivePageProps> = ({
  currentLang,
  onOpenDonate,
}) => {
  const c = COPY[currentLang] || COPY.en;
  const common = (UI_COPY[currentLang] || UI_COPY.en).common;
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  return (
    <div>
      {/* Page Hero Banner */}
      <section className="relative min-h-[380px] sm:min-h-[420px] flex items-center bg-[#231F20] overflow-hidden">
        <img
          src="/assets/images/adra_wash_water_1792612496655.jpg"
          alt={c.heroTitle}
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/85 via-[#231F20]/55 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 w-full text-left">
          <div className="max-w-xl space-y-5">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-sans leading-tight">
              {c.heroTitle}
            </h1>
            <p className="text-base sm:text-lg text-white/95 font-serif leading-relaxed">
              {c.heroSub}
            </p>
            <div>
              <button
                type="button"
                onClick={() => onOpenDonate()}
                className={`inline-flex items-center gap-2 px-8 py-3.5 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-sm rounded-full transition-colors cursor-pointer font-sans ${
                  isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>{c.heroCta}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 right-4 text-[11px] font-sans text-white/80">
          {common.photoCredit}
        </div>
      </section>

      {/* Current Appeal Band with Overlapping Solid Green Tab */}
      <section id="current-appeal" className="bg-white pb-16 scroll-mt-24">
        <div className="w-full bg-[#007B5F] h-5" />
        <div className="flex justify-center -mt-px">
          <div
            className={`bg-[#007B5F] text-white font-bold text-sm px-10 py-2.5 rounded-b-lg font-sans ${
              isEthiopic ? '' : 'uppercase tracking-[0.05em]'
            }`}
          >
            {c.appealTab}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center space-y-5">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#007B5F] font-sans text-center"
            style={{ textAlign: 'center' }}
          >
            {c.appealTitle}
          </h2>
          <p
            className="text-base sm:text-lg text-[#231F20] font-serif leading-relaxed max-w-2xl mx-auto text-center"
            style={{ textAlign: 'center' }}
          >
            {c.appealDesc}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenDonate('Emergency Response', 100)}
              className={`px-9 py-3.5 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold text-xs sm:text-sm rounded-full transition-colors cursor-pointer font-sans ${
                isEthiopic ? '' : 'uppercase tracking-[0.05em]'
              }`}
            >
              {c.appealCta}
            </button>
          </div>
        </div>
      </section>

      {/* Gift Catalog Grid on #E2E4E0 Warm Grey with Overlapping White Tab */}
      <section id="gift-catalog" className="bg-[#E2E4E0] pb-16 sm:pb-20 scroll-mt-24">
        <div className="flex justify-center">
          <div
            className={`bg-white text-[#007B5F] font-bold text-sm px-10 py-2.5 rounded-b-lg shadow-2xs font-sans ${
              isEthiopic ? '' : 'uppercase tracking-[0.05em]'
            }`}
          >
            {c.catalogTab}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GIFT_CATALOG_ITEMS.map((item) => {
              const catText = item.category[currentLang] || item.category.en;
              const titleText = item.title[currentLang] || item.title.en;
              const descText = item.desc[currentLang] || item.desc.en;

              return (
                <article
                  key={item.id}
                  onClick={() => onOpenDonate(item.sector, item.amountUsd)}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="aspect-[16/9] w-full overflow-hidden bg-stone-200">
                      <img
                        src={item.image}
                        alt={titleText}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-6 sm:p-7 space-y-2.5 text-left">
                      <div
                        className={`text-[11px] font-bold text-[#54585A] font-sans ${
                          isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                        }`}
                      >
                        {catText}
                      </div>
                      <h3 className="text-xl font-bold text-[#231F20] group-hover:text-[#007B5F] transition-colors font-sans leading-snug">
                        {titleText}
                      </h3>
                      <p className="text-sm sm:text-base text-[#54585A] font-serif leading-relaxed">
                        {descText}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#007B5F] group-hover:bg-[#00614A] transition-colors px-6 py-3 flex items-center justify-end gap-2">
                    <span
                      className={`text-white font-bold text-xs font-sans ${
                        isEthiopic ? '' : 'uppercase tracking-[0.05em]'
                      }`}
                    >
                      {c.giveGift}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works / Impact Calculator */}
      <section id="how-it-works" className="bg-white scroll-mt-24">
        <div className="w-full bg-[#007B5F] h-5" />
        <div className="flex justify-center -mt-px">
          <div
            className={`bg-[#007B5F] text-white font-bold text-sm px-10 py-2.5 rounded-b-lg font-sans ${
              isEthiopic ? '' : 'uppercase tracking-[0.05em]'
            }`}
          >
            {c.howTab}
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#007B5F] font-sans">
            <ShieldCheck className="w-4 h-4" />
            <span>ACSO #2049</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#231F20] font-sans text-center"
            style={{ textAlign: 'center' }}
          >
            {c.howTitle}
          </h2>
          <p
            className="text-base text-[#54585A] font-serif max-w-2xl mx-auto text-center"
            style={{ textAlign: 'center' }}
          >
            {c.howDesc}
          </p>
        </div>

        <ImpactCalculator
          currentLang={currentLang}
          onDonateAmount={(amount) => onOpenDonate(undefined, amount)}
        />
      </section>
    </div>
  );
};
