import { Language } from '../types';

export interface TranslationSchema {
  common: {
    countryOffice: string;
    agencyName: string;
    motto: string;
    purpose: string;
    readMore: string;
    learnMore: string;
    donateNow: string;
    contactUs: string;
    close: string;
    verifiedConsent: string;
    offlineMode: string;
    offlineMessage: string;
    dataSaverActive: string;
    dataSaverToggle: string;
    needsTranslation: string;
  };
  nav: {
    home: string;
    whoWeAre: string;
    whatWeDo: string;
    whereWeWork: string;
    ourImpact: string;
    stories: string;
    aiForGood: string;
    workWithUs: string;
    brandGuide: string;
    brandTest: string;
    education: string;
    health: string;
    livelihoods: string;
    disasterResponse: string;
    language: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  wellbeing: {
    title: string;
    subtitle: string;
    centerLabel: string;
    educationTitle: string;
    educationDesc: string;
    healthTitle: string;
    healthDesc: string;
    livelihoodsTitle: string;
    livelihoodsDesc: string;
  };
  strengths: {
    title: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
  };
  footer: {
    aboutText: string;
    accreditation: string;
    quickLinks: string;
    governance: string;
    safeguarding: string;
    privacyPolicy: string;
    rightsReserved: string;
  };
}

export const I18N_RESOURCES: Record<Language, TranslationSchema> = {
  en: {
    common: {
      countryOffice: 'Country Office',
      agencyName: 'ADRA Ethiopia',
      motto: 'Justice. Compassion. Love.',
      purpose: 'To serve humanity so all may live as God intended.',
      readMore: 'Read More',
      learnMore: 'Learn More',
      donateNow: 'Support ADRA',
      contactUs: 'Contact Us',
      close: 'Close',
      verifiedConsent: 'Consent Verified',
      offlineMode: 'Offline Mode Active',
      offlineMessage: 'You are currently viewing cached pages. Form submissions will be safely queued.',
      dataSaverActive: 'Data Saver Active (Low Bandwidth Mode)',
      dataSaverToggle: 'Toggle Data Saver',
      needsTranslation: ''
    },
    nav: {
      home: 'Home',
      whoWeAre: 'Who We Are',
      whatWeDo: 'What We Do',
      whereWeWork: 'Where We Work',
      ourImpact: 'Our Impact',
      stories: 'Stories',
      aiForGood: 'AI for Good',
      workWithUs: 'Work with Us',
      brandGuide: 'Brand Standards',
      brandTest: 'Brand Test Route',
      education: 'Education',
      health: 'Health',
      livelihoods: 'Sustainable Livelihoods',
      disasterResponse: 'Disaster Relief',
      language: 'Language',
      menu: 'Menu'
    },
    hero: {
      eyebrow: 'ADRA ETHIOPIA · HUMANITARIAN & DEVELOPMENT',
      title: 'Serving humanity so all may live as God intended.',
      subtitle: 'Working alongside Ethiopian families across 8 regions to deliver clean water, inclusive education, climate-smart livelihoods, and rapid emergency response.',
      ctaPrimary: 'Explore Programmes',
      ctaSecondary: 'Support Our Work'
    },
    wellbeing: {
      title: 'The Well-Being Triangle',
      subtitle: 'Our core development framework focuses on holistic individual and community well-being, supported by three essential pillars.',
      centerLabel: 'Well-Being',
      educationTitle: 'Education',
      educationDesc: 'Mind & lifelong potential: inclusive secondary schools, braille learning, and accredited green energy TVET.',
      healthTitle: 'Health',
      healthDesc: 'Body & life: Community-based malnutrition treatment (CMAM), clean solar water, and maternal waiting centers.',
      livelihoodsTitle: 'Sustainable Livelihoods',
      livelihoodsDesc: 'Dignity & self-reliance: micro-drip irrigation, women savings cooperatives (VSLA), and climate-smart farming.'
    },
    strengths: {
      title: 'Four Core Strengths',
      s1Title: 'Fueled by Faith',
      s1Desc: 'Driven by Christian heritage to act with unconditional love and empathy for every human being, regardless of background.',
      s2Title: 'Extensive Network',
      s2Desc: 'Seamlessly connected with ADRA offices in over 130 countries for rapid international supply and crisis logistics.',
      s3Title: 'Locally Led',
      s3Desc: 'Rooted directly within Ethiopian woredas and kebeles, working hand-in-hand with elders, clans, and regional bureaus.',
      s4Title: 'Reputation Assured',
      s4Desc: 'Trusted over 42+ years with strict ACSO statutory compliance, certified audits, and zero-tolerance safeguarding.'
    },
    footer: {
      aboutText: 'ADRA is the global humanitarian arm of the Seventh-day Adventist Church, delivering individual and community development in Ethiopia since 1982.',
      accreditation: 'Registered under ACSO Proclamation #1113/2019 · Certificate #2049',
      quickLinks: 'Programme Areas',
      governance: 'Governance & Audits',
      safeguarding: 'Safeguarding & Ethics',
      privacyPolicy: 'Privacy & Data Protection',
      rightsReserved: 'All rights reserved.'
    }
  },

  am: {
    common: {
      countryOffice: 'የኢትዮጵያ ቢሮ',
      agencyName: 'አድራ ኢትዮጵያ',
      motto: 'ፍትህ። ርህራሄ። ፍቅር።',
      purpose: 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር ሰውን በቅንነት ማገልገል።',
      readMore: 'ተጨማሪ',
      learnMore: 'ዝርዝር ይዩ',
      donateNow: 'አድራን ይደግፉ',
      contactUs: 'አድራሻችን',
      close: 'ዝጋ',
      verifiedConsent: 'ፈቃድ ተረጋግጧል',
      offlineMode: 'ከመስመር ውጭ',
      offlineMessage: 'የተቀመጡ ገጾችን እያዩ ነው። ቅጾች መስመር ሲገኝ ይላካሉ።',
      dataSaverActive: 'ዳታ ቆጣቢ ሁነታ ነቅቷል',
      dataSaverToggle: 'ዳታ ቆጣቢ ቀይር',
      needsTranslation: ''
    },
    nav: {
      home: 'መነሻ',
      whoWeAre: 'ስለ እኛ',
      whatWeDo: 'ምን እንሰራለን',
      whereWeWork: 'የስራ አካባቢ',
      ourImpact: 'ውጤታችን',
      stories: 'ታሪኮች',
      aiForGood: 'AI ለበጎ',
      workWithUs: 'ከእኛ ጋር ይስሩ',
      brandGuide: 'የብራንድ መመሪያ',
      brandTest: 'የብራንድ ፍተሻ',
      education: 'ትምህርት',
      health: 'ጤና',
      livelihoods: 'ዘላቂ የኑሮ ዋስትና',
      disasterResponse: 'የአደጋ ምላሽ',
      language: 'ቋንቋ',
      menu: 'ማውጫ'
    },
    hero: {
      eyebrow: 'አድራ ኢትዮጵያ · ሰብዓዊ አገልግሎት እና ልማት',
      title: 'ሁሉም ሰው በክብር እንዲኖር ሰውን በቅንነት ማገልገል።',
      subtitle: 'በ8 ክልሎች ከማህበረሰቡ ጋር ንጹህ ውሃ፣ አካታች ትምህርት፣ ዘላቂ ኑሮ እና ፈጣን የአደጋ ምላሽ እናቀርባለን።',
      ctaPrimary: 'ፕሮግራሞችን ይዩ',
      ctaSecondary: 'ስራችንን ይደግፉ'
    },
    wellbeing: {
      title: 'የደህንነት ትሪያንግል',
      subtitle: 'ዋነኛ የልማት ግባችን በሶስት መሰረታዊ ምሰሶዎች የግለሰብና የማህበረሰብ ደህንነትን ማረጋገጥ ነው።',
      centerLabel: 'ደህንነት',
      educationTitle: 'ትምህርት',
      educationDesc: 'አካታች ት/ቤቶች፣ የብሬል መጽሐፍት እና የታዳሽ ኃይል የሙያ ስልጠና።',
      healthTitle: 'ጤና',
      healthDesc: 'የምግብ እጥረት ህክምና (CMAM)፣ ንጹህ የሶላር ውሃ እና የእናቶች ማረፊያ።',
      livelihoodsTitle: 'ዘላቂ ኑሮ',
      livelihoodsDesc: 'ዘመናዊ መስኖ፣ የሴቶች ቁጠባ ማህበራት (VSLA) እና ድርቅ ተቋቋሚ ግብርና።'
    },
    strengths: {
      title: 'አራት ዋና ጥንካሬዎች',
      s1Title: 'በእምነት የተመሰረተ',
      s1Desc: 'ሰውን ያለልዩነት በፍቅርና በርህራሄ የማገልገል ክርስቲያናዊ መርህ።',
      s2Title: 'ሰፊ ኔትወርክ',
      s2Desc: 'ከ130+ ሀገራት የአድራ ቢሮዎች ጋር የተሳሰረ ፈጣን የአቅርቦት ቅንጅት።',
      s3Title: 'በሀገር በቀል አመራር',
      s3Desc: 'በኢትዮጵያ ወረዳዎችና ቀበሌዎች ከአካባቢ አመራር ጋር በቅርበት መስራት።',
      s4Title: 'ታማኝነትና አስተማማኝ',
      s4Desc: 'ለ42+ ዓመታት የህግ ተገዢነት፣ ኦዲት የተደረገ አሰራር እና የደህንነት ጥበቃ።'
    },
    footer: {
      aboutText: 'አድራ የሰባተኛው ቀን አድቬንቲስት ቤተክርስቲያን ዓለም አቀፍ ሰብዓዊ ድርጅት ሆኖ ከ1982 ጀምሮ ኢትዮጵያ ውስጥ ይሰራል።',
      accreditation: 'በACSO አዋጅ #1113/2019 የተመዘገበ · የምስክር ወረቀት #2049',
      quickLinks: 'የስራ ዘርፎች',
      governance: 'አስተዳደርና ኦዲት',
      safeguarding: 'ደህንነትና ስነ-ምግባር',
      privacyPolicy: 'የመረጃ ደህንነት ጥበቃ',
      rightsReserved: 'መብቱ በህግ የተጠበቀ ነው።'
    }
  },

  om: {
    common: {
      countryOffice: 'Waajjira Biyyaa',
      agencyName: 'ADRA Itoophiyaa',
      motto: 'Haqa. Gara-laafina. Jaalala.',
      purpose: 'Namni hundi akkuma Waaqayyo yaadetti akka jiraatu tajaajiluu.',
      readMore: 'Dubbisi',
      learnMore: 'Dabalata',
      donateNow: 'ADRA Gargaari',
      contactUs: 'Nu Qunnami',
      close: 'Cufaa',
      verifiedConsent: 'Hayyamni Mirkan.',
      offlineMode: 'Haala Toora-ala',
      offlineMessage: 'Fuula kuufame ilaalaa jirtu. Unki yeroo toorri dhufu ergama.',
      dataSaverActive: 'Haala Daataa Qusatu Hojjetaa Jira',
      dataSaverToggle: 'Daataa Qusadhu',
      needsTranslation: ''
    },
    nav: {
      home: 'Mana',
      whoWeAre: "Eenyu Nu'i",
      whatWeDo: 'Hojiiwwan',
      whereWeWork: 'Bakka Hojii',
      ourImpact: 'Dhiibbaa',
      stories: 'Seenaa',
      aiForGood: 'AI Gaariif',
      workWithUs: 'Waliin Hojii',
      brandGuide: 'Seera Biraandii',
      brandTest: 'Qormaata Biraandii',
      education: 'Barnoota',
      health: 'Fayyaa',
      livelihoods: 'Jireenya Itti-fufaa',
      disasterResponse: 'Deebii Balaa',
      language: 'Afaan',
      menu: 'Menu'
    },
    hero: {
      eyebrow: 'ADRA ITOOPHIYAA · GARGAARSA FI MISOMA',
      title: 'Namni hundi akkuma Waaqayyo yaadetti akka jiraatu tajaajiluu.',
      subtitle: 'Bishaan qulqulluu, barnoota hunda-hammataa, jireenya wabii fi deebii balaa ariifataa naannolee 8 keessatti hojjenna.',
      ctaPrimary: 'Sagantaa Ilaali',
      ctaSecondary: 'Hojii Deeggari'
    },
    wellbeing: {
      title: "Tiri'aangilii Qananii",
      subtitle: 'Kaayyoon keenya utubaalee sadiin nageenya nama dhuunfaa fi hawaasaa eeguudha.',
      centerLabel: 'Nageenya',
      educationTitle: 'Barnoota',
      educationDesc: 'M/B hunda-hammatoo, kitaaba qaro-dhabeeyyii fi leenjii anniisaa haaromfamaa.',
      healthTitle: 'Fayyaa',
      healthDesc: 'Yaala hanqina nyaataa (CMAM), bishaan soolaarii fi giddugala haadholii.',
      livelihoodsTitle: 'Jireenya Itti-fufaa',
      livelihoodsDesc: 'Jallisi xixiqqoo, qusannaa dubartootaa (VSLA) fi qonna ammayyaa.'
    },
    strengths: {
      title: 'Ciminaalee Afur',
      s1Title: 'Amantiin Kan Kaʼe',
      s1Desc: 'Jaalalaa fi gara-laafina guutuun namoota hunda addaan osoo hin qoodin tajaajiluu.',
      s2Title: 'Networkii Bal’aa',
      s2Desc: 'Waajjiraalee ADRA biyyoota 130+ waliin dhiyeessii ariifataaf wal-qunnameera.',
      s3Title: 'Hoggansa Naannoo',
      s3Desc: 'Aanaalee fi gandoota keessatti jaarsolii fi biiroo naannoo waliin hojjechuu.',
      s4Title: 'Maqaa Amanamaa',
      s4Desc: 'Waggoota 42+ seera ACSO kabajuu, odiitii qulqulluu fi eegumsa mirkanaaʼe.'
    },
    footer: {
      aboutText: 'ADRAan damee gargaarsa addunyaa Waldaa Adiveentistiiti; bara 1982 irraa Itoophiyaa tajaajila.',
      accreditation: 'Labsii ACSO #1113/2019 jalatti galmaaʼe · Ragaa #2049',
      quickLinks: 'Kallattii Hojii',
      governance: 'Bulchiinsa & Odiitii',
      safeguarding: 'Eegumsa & Naamusa',
      privacyPolicy: 'Eegumsa Iccitii Odeeffannoo',
      rightsReserved: 'Mirgi seeraan eegame.'
    }
  },

  ti: {
    common: {
      countryOffice: 'ቤት ጽሕፈት ሃገር',
      agencyName: 'ኣድራ ኢትዮጵያ',
      motto: 'ፍትሒ። ርሕራሐ። ፍቕሪ።',
      purpose: 'ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ክነብር ንሰባት ብቕንዕና ምግልጋል።',
      readMore: 'ተወሳኺ',
      learnMore: 'ብዝርዝር ርኣይ',
      donateNow: 'ንኣድራ ደግፉ',
      contactUs: 'ተወከሱና',
      close: 'ዕጾ',
      verifiedConsent: 'ፍቓድ ተረጋጊጹ',
      offlineMode: 'ካብ መስመር ወጻኢ',
      offlineMessage: 'ዝተዓቀበ ገጻት ትርእዩ ኣለኹም። ፎርማት መስመር ምስ መጸ ክለኣኽ እዩ።',
      dataSaverActive: 'ዳታ ቆጣቢ ኩነታት በርሁ',
      dataSaverToggle: 'ዳታ ቆጥብ',
      needsTranslation: ''
    },
    nav: {
      home: 'መነሻ',
      whoWeAre: 'መን ኢና',
      whatWeDo: 'እንታይ ንሰርሕ',
      whereWeWork: 'ቦታታት ስራሕና',
      ourImpact: 'ጽልዋና',
      stories: 'ዛንታታት',
      aiForGood: 'AI ንሰናይ',
      workWithUs: 'ምሳና ስርሑ',
      brandGuide: 'መምርሒ ብራንድ',
      brandTest: 'ፍተሻ ብራንድ',
      education: 'ትምህርቲ',
      health: 'ጥዕና',
      livelihoods: 'ዘላቒ መነባብሮ',
      disasterResponse: 'ምላሽ ሓደጋ',
      language: 'ቋንቋ',
      menu: 'ዝርዝር'
    },
    hero: {
      eyebrow: 'ኣድራ ኢትዮጵያ · ሰብኣዊ ኣገልግሎትን ልምዓትን',
      title: 'ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ክነብር ንሰባት ምግልጋል።',
      subtitle: 'ኣብ 8 ክልላት ምስ ማሕበረሰብ ጽሩይ ማይ፣ ሓቛፊ ትምህርቲ፣ ዘላቒ ናብራን ቅልጡፍ ረድኤትን ነቕርብ።',
      ctaPrimary: 'መደባት ርኣዩ',
      ctaSecondary: 'ስራሕና ደግፉ'
    },
    wellbeing: {
      title: 'ትሪያንግል ሰናይ-ደሕንነት',
      subtitle: 'ቀንዲ ናይ ልምዓት መዋቕርና ብሰለስተ ዓንዴታት ሰናይ-ደሕንነት ግለሰብን ማሕበረሰብን ምዕባይ እዩ።',
      centerLabel: 'ደሕንነት',
      educationTitle: 'ትምህርቲ',
      educationDesc: 'ሓቛፊ ኣብያተ-ትምህርቲ፣ መጻሕፍቲ ብሬልን ስልጠና ሓምለዋይ ጸዓትን።',
      healthTitle: 'ጥዕና',
      healthDesc: 'ሕክምና ሕጽረት መግቢ (CMAM)፣ ማይ ፀሓይን መዕቆቢ ኣዴታትን።',
      livelihoodsTitle: 'ዘላቒ ናብራ',
      livelihoodsDesc: 'ዘመናዊ መስኖ፣ ማሕበራት ቍጠባ ደቂ-ኣንስትዮ (VSLA)ን ሕርሻን።'
    },
    strengths: {
      title: 'ኣርባዕተ ጥንካረታት',
      s1Title: 'ብእምነት ዝምራሕ',
      s1Desc: 'ንኹሉ ሰብ ብዘይ ኣድልዎ ብፍቕርን ርሕራሐን ናይ ምግልጋል ክርስትያናዊ መትከል።',
      s2Title: 'ሰፊሕ መርበብ',
      s2Desc: 'ኣብ ልዕሊ 130 ሃገራት ምስ ዘለዉ ቢሮታት ኣድራ ንቕልጡፍ ሎጂስቲክስ ይተኣሳሰር።',
      s3Title: 'ብናይ ከባቢ መርሕነት',
      s3Desc: 'ኣብ ወረዳታትን ቀበሌታትን ምስ ዓበይቲ ዓድን ምምሕዳርን ብቐረባ ምስራሕ።',
      s4Title: 'ርግጽ ተኣማንነት',
      s4Desc: 'ልዕሊ 42 ዓመታት ሕጋዊ ተገዛእነት፣ ዝተረጋገጸ ኦዲትን ድሕንነትን።'
    },
    footer: {
      aboutText: 'ኣድራ ዓለምለኻዊ ሰብኣዊ ኣካል ቤተ-ክርስትያን ሰባተይቲ መዓልቲ ኣድቬንቲስት ኮይኑ ካብ 1982 ይሰርሕ።',
      accreditation: 'ብኣዋጅ ACSO #1113/2019 ዝተመዝገበ · ሰርቲፊኬት #2049',
      quickLinks: 'ዘፈራት ስራሕ',
      governance: 'ምሕደራን ኦዲትን',
      safeguarding: 'ድሕንነትን ስነ-ምግባርን',
      privacyPolicy: 'ምዕቃብ ውልቃዊ መረዳእታ',
      rightsReserved: 'ኩሉ መሰል ብሕጊ ዝተሓለወ እዩ።'
    }
  }
};
