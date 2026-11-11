import { Language } from '../types';

export interface NavTranslations {
  whoWeAre: string;
  whatWeDo: string;
  whereWeWork: string;
  ourImpact: string;
  stories: string;
  aiForGood: string;
  programs: string;
  workWithUs: string;
  getInvolved: string;
  contact: string;
  donate: string;
  exploreOurWork: string;
  connectWithUs: string;
  aboutUs: string;
  education: string;
  health: string;
  livelihoods: string;
  disasterResponse: string;
  language: string;
  blog: string;
}

export interface WhoWeAreSubTranslations {
  aboutUs: string;
  ourHistory: string;
  leadership: string;
  governance: string;
}

export interface HeroTranslations {
  kicker: string;
  title1: string;
  title2: string;
  title3: string;
  subtitle: string;
  exploreBtn: string;
  partnerBtn: string;
}

export const TRANSLATIONS: Record<Language, {
  nav: NavTranslations;
  whoWeAreSub: WhoWeAreSubTranslations;
  hero: HeroTranslations;
  donate: {
    portalTitle: string;
    heading: string;
    subtitle: string;
    ctaDonate: string;
    completeTitle: string;
  };
  common: {
    countryOffice: string;
    readMore: string;
    close: string;
    allStories: string;
  };
}> = {
  en: {
    nav: {
      whoWeAre: 'Who We Are',
      whatWeDo: 'What We Do',
      whereWeWork: 'Where We Work',
      ourImpact: 'Our Impact',
      stories: 'Stories',
      aiForGood: 'AI for Good',
      programs: 'Programs',
      workWithUs: 'Work with Us',
      getInvolved: 'Get Involved',
      contact: 'Contact',
      donate: 'Donate',
      exploreOurWork: 'Explore Our Work',
      connectWithUs: 'Connect with Us',
      aboutUs: 'About Us',
      education: 'Education',
      health: 'Health',
      livelihoods: 'Livelihoods',
      disasterResponse: 'Disaster Response',
      language: 'Language',
      blog: 'Blog'
    },
    whoWeAreSub: {
      aboutUs: 'About us',
      ourHistory: 'Our history',
      leadership: 'Leadership',
      governance: 'Governance'
    },
    hero: {
      kicker: 'ADRA ETHIOPIA',
      title1: 'Justice, compassion',
      title2: 'and love for',
      title3: 'every community',
      subtitle: 'We work alongside communities across Ethiopia to respond to emergencies, grow food, bring clean water, improve health, and open doors through education and enterprise.',
      exploreBtn: 'Explore our work',
      partnerBtn: 'Partner with us'
    },
    donate: {
      portalTitle: 'Direct Contribution Portal',
      heading: 'Donate to ADRA Ethiopia',
      subtitle: 'Enabled with Scan Code for Pay · TeleBirr, CBE Birr & Stripe',
      ctaDonate: 'Donate Now',
      completeTitle: 'Official Contribution Acknowledgment'
    },
    common: {
      countryOffice: 'COUNTRY OFFICE',
      readMore: 'Read more',
      close: 'Close',
      allStories: 'All stories'
    }
  },
  am: {
    nav: {
      whoWeAre: 'እኛ ማን ነን',
      whatWeDo: 'ምን እንሰራለን',
      whereWeWork: 'የስራ ቦታዎች',
      ourImpact: 'ውጤታችን',
      stories: 'ታሪኮች',
      aiForGood: 'AI ለበጎ',
      programs: 'ፕሮግራሞች',
      workWithUs: 'ከእኛ ጋር ይስሩ',
      getInvolved: 'ይተባበሩን',
      contact: 'አድራሻ',
      donate: 'ይለግሱ',
      exploreOurWork: 'ስራችንን ያስሱ',
      connectWithUs: 'ከእኛ ጋር ይገናኙ',
      aboutUs: 'ስለ እኛ',
      education: 'ትምህርት',
      health: 'ጤና',
      livelihoods: 'የኑሮ ማሻሻል',
      disasterResponse: 'የአደጋ ምላሽ',
      language: 'ቋንቋ',
      blog: 'ጦማር'
    },
    whoWeAreSub: {
      aboutUs: 'ስለ እኛ',
      ourHistory: 'ታሪካችን',
      leadership: 'አመራር',
      governance: 'አስተዳደር'
    },
    hero: {
      kicker: 'አድራ ኢትዮጵያ',
      title1: 'ለሁሉም ማህበረሰብ',
      title2: 'ፍትህ፣ ርህራሄ',
      title3: 'እና ፍቅር',
      subtitle: 'አደጋዎችን ለመቋቋም፣ ምግብ ለማምረት፣ ንጹህ ውሃ ለማቅረብ፣ ጤናን ለማሻሻል እና በትምህርት እድል ለመክፈት ከማህበረሰቦች ጋር እንሰራለን።',
      exploreBtn: 'ስራችንን ይመልከቱ',
      partnerBtn: 'አጋር ይሁኑ'
    },
    donate: {
      portalTitle: 'ቀጥታ መዋጮ ገጽ',
      heading: 'አድራ ኢትዮጵያን ይደግፉ',
      subtitle: 'በQR ስካን ይክፈሉ · TeleBirr፣ CBE Birr እና Stripe',
      ctaDonate: 'አሁን ይለግሱ',
      completeTitle: 'ይፋዊ የእርዳታ ደረሰኝ'
    },
    common: {
      countryOffice: 'የኢትዮጵያ ቢሮ',
      readMore: 'ተጨማሪ',
      close: 'ዝጋ',
      allStories: 'ሁሉም ታሪኮች'
    }
  },
  om: {
    nav: {
      whoWeAre: "Eenyu Nu'i",
      whatWeDo: 'Hojiiwwan',
      whereWeWork: 'Bakka Hojii',
      ourImpact: 'Dhiibbaa',
      stories: 'Seenaa',
      aiForGood: 'AI Gaariif',
      programs: 'Sagantaa',
      workWithUs: 'Waliin Hojii',
      getInvolved: 'Hirmaadhaa',
      contact: 'Qunnami',
      donate: 'Kennaa',
      exploreOurWork: 'Hojii Keenya',
      connectWithUs: 'Nu Qunnamaa',
      aboutUs: 'Nu Eenyu',
      education: 'Barnoota',
      health: 'Fayyaa',
      livelihoods: 'Jireenya',
      disasterResponse: 'Deebii Balaa',
      language: 'Afaan',
      blog: 'Blog'
    },
    whoWeAreSub: {
      aboutUs: "Waa'ee",
      ourHistory: 'Seenaa ADRA',
      leadership: 'Hoggansa',
      governance: 'Bulchiinsa'
    },
    hero: {
      kicker: 'ADRA ETHIOPIA',
      title1: 'Haqa, gara-laafina',
      title2: 'fi jaalala',
      title3: 'hawaasa hundaaf',
      subtitle: 'Balaa qolachuu, wabii nyaataa, bishaan qulqulluu, fayyaa buʼuuraa fi carraa barnootaa babalʼisuuf hawaasa Itoophiyaa waliin hojjenna.',
      exploreBtn: 'Hojii keenya',
      partnerBtn: 'Nu waliin hojii'
    },
    donate: {
      portalTitle: 'Waltajjii Gumaataa',
      heading: 'ADRA Itoophiyaa Gargaari',
      subtitle: 'Koodii QRn kaffalaa · TeleBirr, CBE Birr fi Stripe',
      ctaDonate: 'Kennaa',
      completeTitle: 'Nagahee Gumaata Seera Qabeessa'
    },
    common: {
      countryOffice: 'WAAJJIRA BIYYAA',
      readMore: 'Dubbisaa',
      close: 'Cufaa',
      allStories: 'Seenaa Hunda'
    }
  },
  ti: {
    nav: {
      whoWeAre: 'ንሕና መን ኢና',
      whatWeDo: 'እንታይ ንሰርሕ',
      whereWeWork: 'ቦታታት ስራሕና',
      ourImpact: 'ጽልዋና',
      stories: 'ዛንታታት',
      aiForGood: 'AI ንሰናይ',
      programs: 'መደባት',
      workWithUs: 'ምሳና ስርሑ',
      getInvolved: 'ተሳተፉ',
      contact: 'ርክብ',
      donate: 'ለግሱ',
      exploreOurWork: 'ስራሕና ዳህስሱ',
      connectWithUs: 'ምሳና ተራኸቡ',
      aboutUs: 'ብዛዕባና',
      education: 'ትምህርቲ',
      health: 'ጥዕና',
      livelihoods: 'መነባብሮ',
      disasterResponse: 'ምላሽ ሓደጋ',
      language: 'ቋንቋ',
      blog: 'ብሎግ'
    },
    whoWeAreSub: {
      aboutUs: 'ብዛዕባና',
      ourHistory: 'ታሪኽና',
      leadership: 'መርሕነት',
      governance: 'ምሕደራ'
    },
    hero: {
      kicker: 'ኣድራ ኢትዮጵያ',
      title1: 'ንኹሉ ማሕበረሰብ',
      title2: 'ፍትሒ፣ ርሕራሐ',
      title3: 'ከምኡውን ፍቕሪ',
      subtitle: 'ሓደጋታት ንምክልኻል፣ ምግቢ ንምፍራይ፣ ጽሩይ ማይ ንምቕራብ፣ ጥዕና ንምምሕያሽን ብትምህርቲ ዕድላት ንምኽፋትን ምስ ሕብረተሰብ ንሰርሕ።',
      exploreBtn: 'ስራሕና ዳህስሱ',
      partnerBtn: 'መሻርኽቲ ኩኑ'
    },
    donate: {
      portalTitle: 'ቀጥታዊ መዋጮ ገጽ',
      heading: 'ንኣድራ ኢትዮጵያ ደግፉ',
      subtitle: 'ብQR ስካን ይኽፈሉ · TeleBirr፣ CBE Birrን Stripeን',
      ctaDonate: 'ሕጂ ለግሱ',
      completeTitle: 'ወግዓዊ ደረሰኝ መዋጮ'
    },
    common: {
      countryOffice: 'ቤት ጽሕፈት ሃገር',
      readMore: 'ተወሳኺ',
      close: 'ዕጾ',
      allStories: 'ኩሎም ዛንታታት'
    }
  }
};

export function pickLang<T>(lang: Language, map: { en: T; am: T; om: T; ti: T }): T {
  return map[lang] ?? map.en;
}
