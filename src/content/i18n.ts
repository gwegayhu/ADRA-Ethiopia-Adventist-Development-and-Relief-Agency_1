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
      purpose: 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ በቅንነት ማገልገል።',
      readMore: 'ተጨማሪ ያንብቡ',
      learnMore: 'ዝርዝር ይመልከቱ',
      donateNow: 'አድራን ይደግፉ',
      contactUs: 'አድራሻችን',
      close: 'ዝጋ',
      verifiedConsent: 'የምስል ፈቃድ የተረጋገጠ',
      offlineMode: 'ከመስመር ውጭ (ኦፍላይን) ሁነታ',
      offlineMessage: 'በአሁኑ ጊዜ ከመስመር ውጭ የተቀመጡ ገጾችን እያዩ ነው። ቅጾች መስመር ሲገኝ ይላካሉ።',
      dataSaverActive: 'ዳታ ቆጣቢ ሁነታ ነቅቷል',
      dataSaverToggle: 'ዳታ ቆጣቢን ቀይር',
      needsTranslation: ''
    },
    nav: {
      home: 'መነሻ',
      whoWeAre: 'ስለ እኛ',
      whatWeDo: 'ምን እንሰራለን',
      whereWeWork: 'የምንሰራባቸው ክልሎች',
      ourImpact: 'ተፅዕኖ',
      stories: 'ታሪኮች',
      aiForGood: 'ቴክኖሎጂ ለበጎ',
      workWithUs: 'አብረውን ይስሩ',
      brandGuide: 'የብራንድ መመሪያ',
      brandTest: 'የብራንድ ፍተሻ',
      education: 'ትምህርት',
      health: 'ጤና',
      livelihoods: 'ዘላቂ ኑሮ',
      disasterResponse: 'የአደጋ ምላሽ',
      language: 'ቋንቋ',
      menu: 'ማውጫ'
    },
    hero: {
      eyebrow: 'አድራ ኢትዮጵያ · ሰብዓዊ አገልግሎት እና ልማት',
      title: 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ ማገልገል።',
      subtitle: 'በ8 የኢትዮጵያ ክልሎች ከህብረተሰቡ ጋር በመሆን ንጹህ ውሃን፣ ጥራት ያለው ትምህርትን፣ ዘላቂ የኑሮ ማሻሻልን እና ፈጣን የአደጋ ምላሽን ማድረስ።',
      ctaPrimary: 'ፕሮግራሞችን ይመልከቱ',
      ctaSecondary: 'አድራን ይደግፉ'
    },
    wellbeing: {
      title: 'የደህንነትና ማህበራዊ ሁለንተናዊ ትሪያንግል',
      subtitle: 'ዋነኛ የልማት ግባችን በሶስት መሰረታዊ ምሰሶዎች አማካኝነት የግለሰብ እና የማህበረሰብ ሁለንተናዊ ደህንነትን ማረጋገጥ ነው።',
      centerLabel: 'ሁለንተናዊ ደህንነት',
      educationTitle: 'ትምህርት',
      educationDesc: 'የአእምሮ እና የወደፊት ተስፋ፡ አካታች ትምህርት ቤቶች፣ የብሬል መጽሐፍት እና የታዳሽ ኃይል ቴክኒክና ሙያ ስልጠና።',
      healthTitle: 'ጤናና ስነ-ምግብ',
      healthDesc: 'አካላዊ ህይወትና ጤንነት፡ የተመጣጠነ ምግብ እጥረት ህክምና (CMAM)፣ ንጹህ የሶላር ውሃ እና የእናቶች ማቆያ ማዕከላት።',
      livelihoodsTitle: 'ዘላቂ ኑሮ',
      livelihoodsDesc: 'ክብርና ራስን መቻል፡ ዘመናዊ መስኖ፣ የሴቶች የቁጠባ ማህበራት (VSLA) እና የአየር ንብረት ተከላካይ ግብርና።'
    },
    strengths: {
      title: 'አራት ዋና ዋና ጥንካሬዎች',
      s1Title: 'በእምነት የተመሰረተ',
      s1Desc: 'የሰውን ልጅ ያለምንም ልዩነት በፍቅር እና በርህራሄ የማገልገል የክርስትና መርህ።',
      s2Title: 'ዓለም አቀፍ ኔትወርክ',
      s2Desc: 'በዓለም ዙሪያ ካሉ ከ130 በላይ የአድራ ቢሮዎች ጋር የተሳሰረ ፈጣን የሎጂስቲክስ ቅንጅት።',
      s3Title: 'በአገር በቀል እውቀት የሚመራ',
      s3Desc: 'በኢትዮጵያ ወረዳዎችና ቀበሌዎች ውስጥ ከሽማግሌዎችና ከአካባቢው አስተዳደር ጋር በቅርበት መስራት።',
      s4Title: 'ታማኝ እና አስተማማኝ',
      s4Desc: 'ከ42 ዓመታት በላይ የካበተ የህግ ተገዢነት፣ ኦዲት የተደረገ አሰራር እና ጥብቅ የደህንነት ጥበቃ።'
    },
    footer: {
      aboutText: 'አድራ በዓለም አቀፍ ደረጃ በሰባተኛው ቀን አድቬንቲስት ቤተክርስቲያን ስር የሚንቀሳቀስ ሰብዓዊ የእርዳታና ልማት ድርጅት ነው።',
      accreditation: 'በሲቪል ማህበረሰብ ድርጅቶች አዋጅ ቁጥር 1113/2019 የተመዘገበ · የምስክር ወረቀት #2049',
      quickLinks: 'የስራ ዘርፎች',
      governance: 'አስተዳደር እና ኦዲት',
      safeguarding: 'የደህንነት እና ስነ-ምግባር ፖሊሲ',
      privacyPolicy: 'የመረጃ ደህንነት ጥበቃ',
      rightsReserved: 'መብቱ በህግ የተጠበቀ ነው።'
    }
  },

  om: {
    common: {
      countryOffice: 'Waajjira Biyyoolessaa',
      agencyName: 'ADRA Itoophiyaa',
      motto: 'Haqa. Gara-laafina. Jaalala.',
      purpose: 'Namni hundi akkuma Waaqayyo itti yaade akka jiraatuuf namooma tajaajiluu.',
      readMore: 'Dabalata Dubbisaa',
      learnMore: 'Bal\'inaan Ilaalaa',
      donateNow: 'ADRA Deeggaraa',
      contactUs: 'Nu Qunnamaa',
      close: 'Cufaa',
      verifiedConsent: 'Hayyama Suuraa Mirkanaa\'e',
      offlineMode: 'Haala Toora-ala (Offline)',
      offlineMessage: 'Fuulawwan kuufaman ilaalaa jirtu. Unkaaleen yeroo toorri deebi\'u ergamu.',
      dataSaverActive: 'Haala Daataa Qusatu Hojjetaa Jira',
      dataSaverToggle: 'Daataa Qusadhu',
      needsTranslation: ''
    },
    nav: {
      home: 'Fuula Duraa',
      whoWeAre: 'Eenyu Nu\'i',
      whatWeDo: 'Wanta Hojjennu',
      whereWeWork: 'Bakka Hojjennu',
      ourImpact: 'Dhiibbaa Keenya',
      stories: 'Seenaawwan',
      aiForGood: 'Teknolojii Gaariif',
      workWithUs: 'Waliin Hojjanna',
      brandGuide: 'Qajeelfama Biraandii',
      brandTest: 'Qormaata Biraandii',
      education: 'Barnoota',
      health: 'Fayyaa',
      livelihoods: 'Jireenya Itti-fufaa',
      disasterResponse: 'Gargaarsa Ariifachiisaa',
      language: 'Afaan',
      menu: 'Baafata'
    },
    hero: {
      eyebrow: 'ADRA ITOOPHIYAA · MISOMA FI GARGAARSA NAMOOMAA',
      title: 'Namni hundi akkuma Waaqayyo itti yaade akka jiraatuuf namooma tajaajiluu.',
      subtitle: 'Bishaan qulqulluu, barnoota hunda-hammataa, jireenya wabii qabu fi gargaarsa yeroo ariifachiisaa dhiyeessuuf maatiiwwan Itoophiyaa waliin hojjenna.',
      ctaPrimary: 'Sagantaalee Keenya',
      ctaSecondary: 'ADRA Deeggaraa'
    },
    wellbeing: {
      title: 'Tiri\'aangilii Nageenya fi Qananii Hawaasaa',
      subtitle: 'Kaayyoon misoomaa bu\'uuraa keenya utubaalee sadiin nageenya fi guddina nama dhuunfaa fi hawaasaa mirkaneessuudha.',
      centerLabel: 'Nageenya Hawaasaa',
      educationTitle: 'Barnoota',
      educationDesc: 'Maanneen barnootaa hunda-hammatoo, kitaabota qaro-dhabeeyyii fi leenjii teeknikaa annisaa haaromfamaa.',
      healthTitle: 'Fayyaa',
      healthDesc: 'Yaala hanqina nyaataa (CMAM), bishaan soolaaraa qulqulluu fi giddugala tursiisa haadholii.',
      livelihoodsTitle: 'Jireenya Itti-fufiinsa Qabu',
      livelihoodsDesc: 'Jallisi ammayyaa, waldaalee qusannoo dubartootaa (VSLA) fi qonna jijjiirama qilleensaa damdamatu.'
    },
    strengths: {
      title: 'Ciminaalee Bu\'uuraa Afur',
      s1Title: 'Amantiin Kan Geggeeffamu',
      s1Desc: 'Jaalala fi gara-laafinaan namoota hunda tajaajiluu amantii kiristaanummaa irraa madde.',
      s2Title: 'Networkii Addunyaa Bal\'aa',
      s2Desc: 'Waajjiraalee ADRA biyyoota 130+ waliin qindoomina saffisaa uumuuf kan gargaaru.',
      s3Title: 'Hoggansa Naannoo',
      s3Desc: 'Aanaalee fi gandoota Itoophiyaa keessatti jaarsolii fi bulchiinsa naannoo waliin walitti-dhiyeenyaan hojjechuu.',
      s4Title: 'Amanamidha',
      s4Desc: 'Waggoota 42+ seera kabajuu, odiitii qulqulluu fi eegumsa seera qabeessummaa.'
    },
    footer: {
      aboutText: 'ADRA dhaabbata misoomaa fi gargaarsa namoomaa addunyaa Waldaa Sabatawiyyii Guyyaa Torfaffaati.',
      accreditation: 'Labsii CSOs #1113/2019 jalatti galmaa\'e · Waraqaa Ragaa #2049',
      quickLinks: 'Kallattii Hojii',
      governance: 'Bulchiinsa fi Odiitii',
      safeguarding: 'Eegumsa fi Naamusa',
      privacyPolicy: 'Eegumsa Odeeffannoo',
      rightsReserved: 'Mirgi hundi seeraan kan eegame.'
    }
  },

  ti: {
    common: {
      countryOffice: 'ናይ ኢትዮጵያ ቤት ጽሕፈት',
      agencyName: 'ኣድራ ኢትዮጵያ',
      motto: 'ፍትሒ። ርሕራሐ። ፍቕሪ።',
      purpose: 'ንኹሉ ደቂ ሰባት ፈጣሪ ከም ዝደለዮ ኰይኖም ምእንቲ ክነብሩ ብቕንዕና ምግልጋል።',
      readMore: 'ተወሳኺ ኣንብቡ',
      learnMore: 'ብዝርዝር ርኣዩ',
      donateNow: 'ንኣድራ ደግፉ',
      contactUs: 'ተወከሱና',
      close: 'ዕጾ',
      verifiedConsent: 'ፍቓድ ስእሊ ዝተረጋገጸ',
      offlineMode: 'ካብ ኢንተርኔት ወጻኢ (ኦፍላይን) ኩነታት',
      offlineMessage: 'ኣብዚ ሕጂ እዋን ዝተዓቀበ ገጻት ትርእዩ ኣለኹም። ፎርማት ኢንተርኔት ምስ መጸ ክለኣኽ እዩ።',
      dataSaverActive: 'ዳታ ቆጣቢ ኩነታት በርሁ ኣሎ',
      dataSaverToggle: 'ዳታ ቆጥብ',
      needsTranslation: '[TODO: Needs professional verification]'
    },
    nav: {
      home: 'መበገሲ',
      whoWeAre: 'መን ኢና',
      whatWeDo: 'እንታይ ንሰርሕ',
      whereWeWork: 'እንሰርሓሎም ክልላት',
      ourImpact: 'ተፅዕኖና',
      stories: 'ዛንታታት',
      aiForGood: 'ቴክኖሎጂ ንሰናይ',
      workWithUs: 'ምሳና ስርሑ',
      brandGuide: 'መምርሒ ብራንድ',
      brandTest: 'ፍተሻ ብራንድ',
      education: 'ትምህርቲ',
      health: 'ጥዕና',
      livelihoods: 'ዘላቒ ናብራ',
      disasterResponse: 'ምላሽ ሓደጋ',
      language: 'ቋንቋ',
      menu: 'ዝርዝር'
    },
    hero: {
      eyebrow: 'ኣድራ ኢትዮጵያ · ሰብኣዊ ኣገልግሎትን ልምዓትን',
      title: 'ንኹሉ ደቂ ሰባት ፈጣሪ ከም ዝደለዮ ኰይኖም ምእንቲ ክነብሩ ምግልጋል።',
      subtitle: 'ኣብ 8 ክልላት ኢትዮጵያ ምስ ሕብረተሰብ ብምዃን ጽሩይ ማይ፣ ሓቛፊ ትምህርቲ፣ ዘላቒ ናብራን ህጹጽ ረድኤትን ምቕራብ።',
      ctaPrimary: 'መደባትና ርኣዩ',
      ctaSecondary: 'ንኣድራ ደግፉ'
    },
    wellbeing: {
      title: 'ናይ ህይወታዊ ሰናይ-ደሕንነት ትሪያንግል',
      subtitle: 'ቀንዲ ናይ ልምዓት መዋቕርና ኣብ ሰለስተ ዓንዴታት ተመርኲሱ ሓፈሻዊ ሰናይ-ደሕንነት ማሕበረሰብ ምርግጋጽ እዩ።',
      centerLabel: 'ሰናይ-ደሕንነት',
      educationTitle: 'ትምህርቲ',
      educationDesc: 'ሓቛፊ ኣብያተ-ትምህርቲ፣ መጻሕፍቲ ብሬል ንዓይነ-ስውራንን ስልጠና ተሓዳሲ ኃይሊ TVETን።',
      healthTitle: 'ጥዕናን ስነ-ምግብን',
      healthDesc: 'ሕክምና ሕጽረት መግቢ (CMAM)፣ ብፀሓይ ዝሰርሕ ጽሩይ ማይን መዕቆቢ ኣዴታትን።',
      livelihoodsTitle: 'ዘላቒ ናብራ',
      livelihoodsDesc: 'ዘመናዊ መስኖ፣ ማሕበራት ቍጠባ ደቂ-ኣንስትዮ (VSLA) ከምኡ’ውን ተጻዋሪ ሕርሻ።'
    },
    strengths: {
      title: 'ኣርባዕተ ቀንዲ ጥንካረታት',
      s1Title: 'ብእምነት ዝምራሕ',
      s1Desc: 'ንኹሉ ሰብ ብዘይ ኣድልዎ ብፍቕርን ርሕራሐን ናይ ምግልጋል ክርስትያናዊ መትከል።',
      s2Title: 'ዓለምለኻዊ መርበብ',
      s2Desc: 'ኣብ ልዕሊ 130 ሃገራት ምስ ዘለዉ ናይ ኣድራ ቢሮታት ብቕልጡፍ ምትእስሳር።',
      s3Title: 'ብናይ ከባቢ ፍልጠት ዝምራሕ',
      s3Desc: 'ኣብ ወረዳታት ኢትዮጵያ ምስ ዓበይቲ ዓድን ምምሕዳርን ብቐረባ ምስራሕ።',
      s4Title: 'ተኣማኒን ውሑስን',
      s4Desc: 'ልዕሊ 42 ዓመታት ሕጋዊ ተገዛእነት፣ ዝተረጋገጸ ኦዲትን ውሑስ ድሕንነትን።'
    },
    footer: {
      aboutText: 'ኣድራ ኣካል ዓለምለኻዊ ሰብኣዊ ረድኤት ቤተ-ክርስትያን ሰባተይቲ መዓልቲ ኣድቬንቲስት እዩ።',
      accreditation: 'ብኣዋጅ ሲቪል ማሕበራት #1113/2019 ዝተመዝገበ · ሰርቲፊኬት #2049',
      quickLinks: 'ዘፈራት ስራሕ',
      governance: 'ምሕደራን ኦዲትን',
      safeguarding: 'ፖሊሲ ድሕንነትን ስነ-ምግባርን',
      privacyPolicy: 'ምዕቃብ ውልቃዊ መረዳእታ',
      rightsReserved: 'ኩሉ መሰል ብሕጊ ዝተሓለወ እዩ።'
    }
  }
};
