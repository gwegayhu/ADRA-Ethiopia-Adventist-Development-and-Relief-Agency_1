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
      whereWeWork: 'የምንሰራባቸው ቦታዎች',
      ourImpact: 'ውጤታችን',
      stories: 'ታሪኮች',
      aiForGood: 'ቴክኖሎጂ ለበጎ',
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
      subtitle: 'አደጋዎችን ለመከላከል፣ ምግብ ለማምረት፣ ንጹህ ውሃ ለማቅረብ፣ ጤናን ለማሻሻል እና በትምህርትና ስራ እድል በሮች ለመክፈት ከመላው ኢትዮጵያ ማህበረሰቦች ጋር በጋራ እንሰራለን።',
      exploreBtn: 'ስራችንን ይመልከቱ',
      partnerBtn: 'አጋር ይሁኑ'
    },
    donate: {
      portalTitle: 'የእርዳታ መዋጮ ገጽ',
      heading: 'አድራ ኢትዮጵያን ይደግፉ',
      subtitle: 'በስካን QR ኮድ፣ በቴሌብር፣ በንግድ ባንክ (CBE) እና በStripe ይክፈሉ',
      ctaDonate: 'አሁን ይለግሱ',
      completeTitle: 'ይፋዊ የእርዳታ ደረሰኝ'
    },
    common: {
      countryOffice: 'የኢትዮጵያ ቢሮ',
      readMore: 'ሙሉውን ያንብቡ',
      close: 'ዝጋ',
      allStories: 'ሁሉንም ታሪኮች ይመልከቱ'
    }
  },
  om: {
    nav: {
      whoWeAre: 'Eenyummaa Keenya',
      whatWeDo: 'Hojiiwwan Keenya',
      whereWeWork: 'Bakkeewwan Hojii Keenyaa',
      ourImpact: 'Bu\'aa Keenya',
      stories: 'Seenaawwan Dirree',
      aiForGood: 'AI Faayidaa Namoomaatiif',
      programs: 'Sagantaalee',
      workWithUs: 'Nu Waliin Hojjedhaa',
      getInvolved: 'Nu Waliin Hojjedhaa',
      contact: 'Nu Qunnamaa',
      donate: 'Gumaachaa',
      exploreOurWork: 'Hojii Keenya Daawwadhaa',
      connectWithUs: 'Nu Waliin Qindaa\'aa',
      aboutUs: 'Waa\'ee Keenya',
      education: 'Barnoota',
      health: 'Fayyaa',
      livelihoods: 'Wabii Jireenyaa',
      disasterResponse: 'Deebii Balaa',
      language: 'Afaan',
      blog: 'Biloogii'
    },
    whoWeAreSub: {
      aboutUs: 'Waa\'ee Keenya',
      ourHistory: 'Seenaa Keenya',
      leadership: 'Hoggansa',
      governance: 'Bulchiinsa fi Eegumsa'
    },
    hero: {
      kicker: 'ADRA ITOOPHIYAA',
      title1: 'Haqa, gara-laafina',
      title2: 'fi jaalala',
      title3: 'hawaasa hundaaf',
      subtitle: 'Balaawwan qolachuu, wabii nyaataa mirkaneessuu, bishaan dhugaatii qulqulluu dhiyeessuu, fayyaa bu\'uuraa fooyyessuu fi carraa barnootaa uumuuf hawaasa Itoophiyaa waliin kutannoon hojjanna.',
      exploreBtn: 'Hojii keenya daawwadhaa',
      partnerBtn: 'Nu waliin qindaa\'aa'
    },
    donate: {
      portalTitle: 'Waltajjii Gumaata Kallattii',
      heading: 'ADRA Itoophiyaa Deeggaraa',
      subtitle: 'Koodii QR Scan gochuun kaffalaa · TeleBirr, Baankii Daldala Itoophiyaa (CBE) fi Stripe',
      ctaDonate: 'Amma Gumaachaa',
      completeTitle: 'Nagahee Gumaata Seera Qabeessa'
    },
    common: {
      countryOffice: 'WAAJJIRA BIYYOOLESSA ITOOPHIYAA',
      readMore: 'Bal\'inaan dubbisaa',
      close: 'Cufaa',
      allStories: 'Seenaawwan hunda ilaalaa'
    }
  },
  ti: {
    nav: {
      whoWeAre: 'ንሕና መን ኢና',
      whatWeDo: 'እንታይ ንሰርሕ',
      whereWeWork: 'እንሰርሓሎም ቦታታት',
      ourImpact: 'ጽልዋና',
      stories: 'ዛንታታት',
      aiForGood: 'AI ንሰናይ',
      programs: 'ፕሮግራማት',
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
      title3: 'እንተላይ ፍቕሪ',
      subtitle: 'ሓደጋታት ንምክልኻል፣ ምግቢ ንምፍራይ፣ ጽሩይ ማይ ንምቕራብ፣ ጥዕና ንምምሕያሽን ብትምህርትን ስራሕን ዕድላት ንምኽፋት ምስ ማሕበረሰብ ኢትዮጵያ ብሓባር ንሰርሕ።',
      exploreBtn: 'ስራሕና ርኸቡ',
      partnerBtn: 'መሻርኽቲ ኩኑ'
    },
    donate: {
      portalTitle: 'ቀጥታዊ መዋጮ ፖርታል',
      heading: 'ንኣድራ ኢትዮጵያ ደግፉ',
      subtitle: 'ብQR ኮድ ስካን፣ ቴሌብር፣ ንግዲ ባንክ ኢትዮጵያን Stripeን ይኽፈሉ',
      ctaDonate: 'ሕጂ ለግሱ',
      completeTitle: 'ወግዓዊ ደረሰኝ መዋጮ'
    },
    common: {
      countryOffice: 'ቤት ጽሕፈት ኢትዮጵያ',
      readMore: 'ሙሉእ ኣንብብ',
      close: 'ዕጾ',
      allStories: 'ኩሎም ዛንታታት ርኣይ'
    }
  }
};
