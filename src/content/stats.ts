/**
 * ADRA Ethiopia & Global Statistics
 * NOTE: VERIFY BEFORE PUBLISHING - Do not hard-code stats across UI components.
 * Keep numbers up-to-date with annual reports and official monitoring data.
 */

export interface StatItem {
  id: string;
  value: string;
  captionEn: string;
  captionAm: string;
  captionOm: string;
  captionTi: string;
  subtextEn: string;
  subtextAm: string;
  subtextOm: string;
  subtextTi: string;
  sourceVerification: string;
}

export const ADRA_STATS: Record<string, StatItem> = {
  activeCountries: {
    id: 'activeCountries',
    value: '130+',
    captionEn: 'Countries in Global Network',
    captionAm: 'ዓለም አቀፍ ተደራሽ አገሮች',
    captionOm: 'Biyyoota Networkii Addunyaa',
    captionTi: 'ኣብ መላእ ዓለም ዘለዋ ሃገራት',
    subtextEn: 'Worldwide humanitarian coordination network [verify before publishing]',
    subtextAm: 'ዓለም አቀፍ የሰብዓዊ አገልግሎት መረብ [ከህትመት በፊት ይረጋገጥ]',
    subtextOm: 'Networkii gargaarsa namoomaa addunyaa [maxxansuu dura mirkaneessi]',
    subtextTi: 'ዓለምለኻዊ መርበብ ሰብኣዊ ረድኤት [ቅድሚ ሕትመት ይረጋገጽ]',
    sourceVerification: 'ADRA International Network Directory 2025/2026'
  },
  yearsInEthiopia: {
    id: 'yearsInEthiopia',
    value: '42+',
    captionEn: 'Years in Ethiopia (Since 1982)',
    captionAm: 'ዓመታት በኢትዮጵያ (ከ1982 ጀምሮ)',
    captionOm: 'Waggoota Itoophiyaa Keessatti (1982 eegalee)',
    captionTi: 'ዓመታት ኣብ ኢትዮጵያ (ካብ 1982 ጀሚሩ)',
    subtextEn: 'Continuous relief, water, education, and health operations',
    subtextAm: 'ቀጣይነት ያለው የውሃ፣ ትምህርት፣ ጤና እና የአደጋ ምላሽ አገልግሎት',
    subtextOm: 'Tajaajila bishaanii, barnootaa, fayyaa fi balaa yeroo ariifachiisaa',
    subtextTi: 'ቀጻሊ ናይ ማይ፣ ትምህርቲ፣ ጥዕናን ህጹጽ ረድኤትን ኣገልግሎት',
    sourceVerification: 'ACSO Registration Certificate #2049'
  },
  peopleServedYearly: {
    id: 'peopleServedYearly',
    value: '850K+',
    captionEn: 'Lives Impacted Annually in Ethiopia',
    captionAm: 'በዓመት በኢትዮጵያ ተጠቃሚ የሆኑ ወገኖች',
    captionOm: 'Hawaasa Waggaatti Fayyadamaa Ta\'e',
    captionTi: 'ኣብ ዓመት ተጠቃሚ ዝኾነ ህዝቢ',
    subtextEn: 'Across 8 regional states [verify before publishing]',
    subtextAm: 'በ8 የኢትዮጵያ ክልሎች ውስጥ [ከህትመት በፊት ይረጋገጥ]',
    subtextOm: 'Naannolee 8 keessatti [maxxansuu dura mirkaneessi]',
    subtextTi: 'ኣብ 8 ክልላት ኢትዮጵያ [ቅድሚ ሕትመት ይረጋገጽ]',
    sourceVerification: 'ADRA Ethiopia Annual Country Report 2025'
  },
  solarWaterBoreholes: {
    id: 'solarWaterBoreholes',
    value: '288+',
    captionEn: 'Clean Solar Water Stations',
    captionAm: 'በፀሐይ ኃይል የሚሰሩ ንጹህ የውሃ ጣቢያዎች',
    captionOm: 'Buufataalee Bishaan Soolaaraa',
    captionTi: 'ብፀሓይ ኃይሊ ዝሰርሑ ናይ ጽሩይ ማይ መደበራት',
    subtextEn: 'Providing zero-carbon potable water in arid woredas',
    subtextAm: 'በድርቅ በተጎዱ አካባቢዎች ንጹህ የመጠጥ ውሃ ማቅረብ',
    subtextOm: 'Bishaan dhugaatii qulqulluu naannolee ongeetiif dhiyeessuu',
    subtextTi: 'ኣብ ደረቕ ወረዳታት ጽሩይ ማይ መስተ ምቕራብ',
    sourceVerification: 'WASH Engineering Portfolio 2004-2025'
  },
  educationGirlsSupported: {
    id: 'educationGirlsSupported',
    value: '85,000+',
    captionEn: 'Students & TVET Trainees',
    captionAm: 'ተማሪዎችና የቴክኒክና ሙያ ሰልጣኞች',
    captionOm: 'Barattoota fi Leenjifamtoota TVET',
    captionTi: 'ተመሃሮን ናይ TVET ሰልጠንትን',
    subtextEn: 'Inclusive schools and renewable energy technicians',
    subtextAm: 'አካታች ትምህርት ቤቶችና የታዳሽ ኃይል ቴክኒሻኖች',
    subtextOm: 'Mana barumsaa hunda-hammataa fi ogeeyyii soolaaraa',
    subtextTi: 'ሓቛፊ ኣብያተ-ትምህርትን ቴክኒሽያናት ተሓዳሲ ኃይልን',
    sourceVerification: 'SEAQE II & VQEP Project Reports'
  },
  healthMalnutritionCare: {
    id: 'healthMalnutritionCare',
    value: '310,000+',
    captionEn: 'Mothers & Infants Treated',
    captionAm: 'ህክምና ያገኙ እናቶችና ህፃናት',
    captionOm: 'Haadholii fi Daa\'imman Yaalaman',
    captionTi: 'ሕክምና ዝረኸባ ኣዴታትን ቍልዑን',
    subtextEn: 'CMAM nutrition, maternal care, and mobile clinics',
    subtextAm: 'የተመጣጠነ ምግብ እጥረት ህክምናና የእናቶች እንክብካቤ',
    subtextOm: 'Nyaata madaalawaa CMAM fi yaala haadholii',
    subtextTi: 'ሕክምና ስነ-ምግቢ CMAMን ምክንኻን ኣዴታትን',
    sourceVerification: 'Health Sector Monitoring Database'
  }
};
