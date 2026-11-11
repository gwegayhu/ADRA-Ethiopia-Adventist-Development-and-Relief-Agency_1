import { GISProject, Language, Opportunity, Project, Publication, RegionData, Story } from '../types';

export type LangMap<T = string> = Record<Language, T>;

const STATUS_MAP: Record<string, LangMap> = {
  'Active / Ongoing': {
    en: 'Active / Ongoing',
    am: 'ንቁ / በሂደት ላይ',
    om: 'Hojii Irra',
    ti: 'ንጡፍ / ዝካየድ'
  },
  Ongoing: {
    en: 'Ongoing',
    am: 'በሂደት ላይ',
    om: 'Adeema',
    ti: 'ዝካየድ'
  },
  Active: {
    en: 'Active',
    am: 'ንቁ',
    om: 'Hojii',
    ti: 'ንጡፍ'
  },
  'Recently Completed': {
    en: 'Recently Completed',
    am: 'በቅርቡ የተጠናቀቀ',
    om: 'Dhihoo Xumurame',
    ti: 'ኣብ ቀረባ ዝተዛዘመ'
  },
  Completed: {
    en: 'Completed',
    am: 'የተጠናቀቀ',
    om: 'Xumurame',
    ti: 'ዝተዛዘመ'
  },
  Scaling: {
    en: 'Scaling',
    am: 'በመስፋፋት ላይ',
    om: 'Babaldhataa',
    ti: 'ኣብ ምስፍሕፋሕ'
  }
};

const SECTOR_MAP: Record<string, LangMap> = {
  All: { en: 'All', am: 'ሁሉም', om: 'Hunda', ti: 'ኩሉ' },
  Education: { en: 'Education', am: 'ትምህርት', om: 'Barnoota', ti: 'ትምህርቲ' },
  WASH: { en: 'WASH', am: 'ውሃ', om: 'WASH', ti: 'WASH' },
  Health: { en: 'Health', am: 'ጤና', om: 'Fayyaa', ti: 'ጥዕና' },
  Livelihood: { en: 'Livelihood', am: 'ኑሮ ማሻሻል', om: 'Jireenya', ti: 'መነባብሮ' },
  Agriculture: { en: 'Agriculture', am: 'ግብርና', om: 'Qonna', ti: 'ሕርሻ' },
  Emergency: { en: 'Emergency', am: 'አደጋ ምላሽ', om: 'Balaa', ti: 'ህጹጽ ምላሽ' },
  Nutrition: { en: 'Nutrition', am: 'ስነ-ምግብ', om: 'Nyaata', ti: 'ኣመጋግባ' },
  'Education / Livelihood': {
    en: 'Education / Livelihood',
    am: 'ትምህርት / ኑሮ',
    om: 'Barnoota / Jireenya',
    ti: 'ትምህርቲ / መነባብሮ'
  },
  'Integrated Agriculture & Health': {
    en: 'Integrated Agriculture & Health',
    am: 'ግብርና እና ጤና',
    om: 'Qonnaa fi Fayyaa',
    ti: 'ውሁድ ሕርሻን ጥዕናን'
  },
  'Integrated Agriculture and Health': {
    en: 'Integrated Agriculture and Health',
    am: 'የተቀናጀ ግብርና እና ጤና',
    om: 'Qonnaa fi Fayyaa Walitti Hidhame',
    ti: 'ውሁድ ሕርሻን ጥዕናን'
  },
  'WASH / Livelihood': {
    en: 'WASH / Livelihood',
    am: 'ውሃ / ኑሮ',
    om: 'WASH / Jireenya',
    ti: 'WASH / መነባብሮ'
  },
  'Health (Psycho-social Support)': {
    en: 'Health (Psycho-social Support)',
    am: 'ጤና (የስነ-ልቦና ድጋፍ)',
    om: 'Fayyaa (Deeggarsa Xiin-sammuu)',
    ti: 'ጥዕና (ስነ-ኣእምሮኣዊ ድጋፍ)'
  },
  'Emergency Food Assistance': {
    en: 'Emergency Food Assistance',
    am: 'አስቸኳይ የምግብ እርዳታ',
    om: 'Gargaarsa Nyaataa Balaa',
    ti: 'ህጹጽ ሓገዝ መግቢ'
  },
  'Emergency Food Assistant': {
    en: 'Emergency Food Assistant',
    am: 'አስቸኳይ የምግብ እርዳታ',
    om: 'Gargaarsa Nyaataa Balaa',
    ti: 'ህጹጽ ሓገዝ መግቢ'
  },
  'Emergency Food Assistance / Livelihood': {
    en: 'Emergency Food Assistance / Livelihood',
    am: 'የምግብ እርዳታ / ኑሮ',
    om: 'Gargaarsa Nyaataa / Jireenya',
    ti: 'ሓገዝ መግቢ / መነባብሮ'
  },
  'Emergency Food Assistant / Livelihood': {
    en: 'Emergency Food Assistant / Livelihood',
    am: 'የምግብ እርዳታ / ኑሮ',
    om: 'Gargaarsa Nyaataa / Jireenya',
    ti: 'ሓገዝ መግቢ / መነባብሮ'
  }
};

const REGION_NAME_MAP: Record<string, LangMap> = {
  'Somali Region': { en: 'Somali Region', am: 'የሶማሌ ክልል', om: 'Naannoo Somaalee', ti: 'ክልል ሶማሌ' },
  Somali: { en: 'Somali', am: 'ሶማሌ', om: 'Somaalee', ti: 'ሶማሌ' },
  'Oromia Region': { en: 'Oromia Region', am: 'የኦሮሚያ ክልል', om: 'Naannoo Oromiyaa', ti: 'ክልል ኦሮሚያ' },
  Oromia: { en: 'Oromia', am: 'ኦሮሚያ', om: 'Oromiyaa', ti: 'ኦሮሚያ' },
  'Amhara Region': { en: 'Amhara Region', am: 'የአማራ ክልል', om: 'Naannoo Amaaraa', ti: 'ክልል ኣምሓራ' },
  Amhara: { en: 'Amhara', am: 'አማራ', om: 'Amaaraa', ti: 'ኣምሓራ' },
  'Afar Region': { en: 'Afar Region', am: 'የአፋር ክልል', om: 'Naannoo Affaar', ti: 'ክልል ዓፋር' },
  Afar: { en: 'Afar', am: 'አፋር', om: 'Affaar', ti: 'ዓፋር' },
  'Tigray Region': { en: 'Tigray Region', am: 'የትግራይ ክልል', om: 'Naannoo Tigraay', ti: 'ክልል ትግራይ' },
  Tigray: { en: 'Tigray', am: 'ትግራይ', om: 'Tigraay', ti: 'ትግራይ' },
  'Gambella Region': { en: 'Gambella Region', am: 'የጋምቤላ ክልል', om: 'Naannoo Gambeellaa', ti: 'ክልል ጋምቤላ' },
  Gambella: { en: 'Gambella', am: 'ጋምቤላ', om: 'Gambeellaa', ti: 'ጋምቤላ' },
  Ethiopia: { en: 'Ethiopia', am: 'ኢትዮጵያ', om: 'Itoophiyaa', ti: 'ኢትዮጵያ' },
  'Multi-Region / National': {
    en: 'Multi-Region / National',
    am: 'ሀገራዊ / ባለብዙ ክልል',
    om: 'Naannoolee / Biyyoolessaa',
    ti: 'ሃገራዊ / ብዙሕ ክልላት'
  },
  'Dire Dawa / Multi-Region': {
    en: 'Dire Dawa / Multi-Region',
    am: 'ድሬዳዋ / ባለብዙ ክልል',
    om: 'Dirree Dawaa / Naannoolee',
    ti: 'ድሬዳዋ / ብዙሕ ክልላት'
  },
  'National & Multi-Regional HQ': {
    en: 'National & Multi-Regional HQ',
    am: 'ሀገራዊና ባለብዙ ክልል',
    om: 'Muummee Biyyoolessaa',
    ti: 'ሃገራውን ባለብዙ ክልልን'
  }
};

export function getLocalizedStatus(status: string, lang: Language): string {
  return STATUS_MAP[status]?.[lang] ?? status;
}

export function getLocalizedSectorName(sector: string, lang: Language): string {
  return SECTOR_MAP[sector]?.[lang] ?? sector;
}

export function getLocalizedRegionName(region: string, lang: Language): string {
  return REGION_NAME_MAP[region]?.[lang] ?? region;
}

export interface ProjectLocaleEntry {
  title: LangMap;
  summary: LangMap;
  objective: LangMap;
  location: LangMap;
  beneficiaries: LangMap;
  duration: LangMap;
  goals?: LangMap<string[]>;
  hardComponents?: LangMap<string[]>;
  materialsProvisions?: LangMap<string[]>;
  softComponents?: LangMap<string[]>;
}

const PROJECT_LOCALE_BY_NO: Record<number, ProjectLocaleEntry> = {
  1: {
    title: {
      en: 'Integrated formal and TVET education in ATJK and SEAQE II Project in Oromia',
      am: 'በATJK እና ኦሮሚያ የተቀናጀ መደበኛና የቴክኒክ ትምህርት (SEAQE II)',
      om: 'Barnoota Idilee fi TVET ATJK fi Pirojektii SEAQE II Oromiyaa',
      ti: 'ውሁድ ስሩዕን TVETን ትምህርቲ ኣብ ATJKን SEAQE II ኦሮሚያን'
    },
    summary: {
      en: 'Improved management of formal & TVET education, infrastructure expansion, and inclusive skills training.',
      am: 'የመደበኛና የሙያ ትምህርት አስተዳደር፣ የመሰረተ ልማት ግንባታ እና ሁሉን አቀፍ የክህሎት ስልጠና።',
      om: 'Bulchiinsa barnoota idilee fi TVET, babal’ina bu’uuraa fi leenjii ogummaa hunda hammataa fooyyessuu.',
      ti: 'ምሕደራ ስሩዕን TVETን ትምህርቲ፣ ምስፍሕፋሕ ትሕተ-ቅርጽን ሓቛፊ ስልጠና ክእለትን ምምሕያሽ።'
    },
    objective: {
      en: 'Improved management of formal and TVET education & infrastructure so all learners access inclusive, quality schools across target woredas.',
      am: 'ሁሉም ተማሪዎች ያለ አድልዎ ጥራት ያለው መደበኛና የቴክኒክ ትምህርት እንዲያገኙ ትምህርት ቤቶችን እና መሰረተ ልማቶችን ማሻሻል።',
      om: 'Barattoonni hundi carraa walqixaan barnoota idilee fi TVET qulqullina qabu akka argatan bu’uura barnootaa cimsuu.',
      ti: 'ኩሎም ተምሃሮ ብዘይ ኣፈላላይ ጽሩይ ትምህርቲ ክረኽቡ ኣብያተ-ትምህርትን ትሕተ-ቅርጺ TVETን ምምሕያሽ።'
    },
    location: {
      en: 'Negelle Arsi, ATJK, Modjo, Bora, Meki, Bulbula (Oromia)',
      am: 'ነገሌ አርሲ፣ ATJK፣ ሞጆ፣ ቦራ፣ መቂ፣ ቡልቡላ (ኦሮሚያ)',
      om: 'Nageellee Arsii, ATJK, Mojoo, Booraa, Maqii, Bulbulaa',
      ti: 'ነገሌ ኣርሲ፣ ATJK፣ ሞጆ፣ ቦራ፣ መቂ፣ ቡልቡላ (ኦሮሚያ)'
    },
    beneficiaries: {
      en: '8,921 (5,293 M, 3,628 F)',
      am: '8,921 (5,293 ወ, 3,628 ሴ)',
      om: '8,921 (Dhiira 5,293, Dub. 3,628)',
      ti: '8,921 (5,293 ተባ, 3,628 ኣን)'
    },
    duration: {
      en: 'March 1, 2019 – Feb 2024',
      am: 'መጋቢት 2019 – የካቲት 2024',
      om: 'Bitootessa 2019 – Gurraandhala 2024',
      ti: 'መጋቢት 2019 – ለካቲት 2024'
    },
    goals: {
      en: [
        '1 Complete Preparatory school construction at Negelle Arsi Woreda',
        '1 Complete Secondary school construction at Adami Tulu Jido Kombolcha (ATJK)',
        'Classroom expansion blocks across Modjo, Bora, Meki, and Bulbula towns',
        'Sanitation facilities, water extensions, solar power, and school garden plots',
        'Learning equipment, TVET machinery, dignity kits, and assistive mobility devices',
        'Educator, PTSA, and inclusive governance capacity-building trainings'
      ],
      am: [
        'በነገሌ አርሲ ወረዳ ሙሉ የመሰናዶ ትምህርት ቤት ግንባታ',
        'በአዳሚ ቱሉ ጂዶ ኮምቦልቻ ሙሉ ሁለተኛ ደረጃ ትምህርት ቤት ግንባታ',
        'በሞጆ፣ ቦራ፣ መቂ እና ቡልቡላ የመማሪያ ክፍሎች ማስፋፊያ',
        'መጸዳጃ ቤቶች፣ የውሃ ዝርጋታ፣ የሶላር ኃይል እና የትምህርት ቤት አትክልት ስፍራ',
        'የመማሪያ ቁሳቁስ፣ የTVET ማሽኖች፣ የሴቶች ንጽህና እና የአካል ጉዳተኞች ድጋፍ',
        'ለመምህራንና ለወላጅ-መምህር ኮሚቴዎች የአቅም ግንባታ ስልጠና'
      ],
      om: [
        'Ijaarsa Mana Barumsaa Qophaa’inaa guutuu Aanaa Nageellee Arsiitti',
        'Ijaarsa Mana Barumsaa Sadarkaa 2ffaa guutuu ATJKtti',
        'Babal’ina kutaawwan barumsaa Mojoo, Booraa, Maqii fi Bulbulaatti',
        'Manneen fincaanii, bishaan, anniisaa aduu fi iddoo biqiltuu manneen barumsaa',
        'Meeshaalee barumsaa, maashinoota TVET fi deeggarsa shamarraniif barattoota qaama miidhamaniif',
        'Leenjii cimsaa barsiisotaa fi koree PTSA'
      ],
      ti: [
        'ህንጸት ምሉእ መዳለዊ ቤት-ትምህርቲ ኣብ ወረዳ ነገሌ ኣርሲ',
        'ህንጸት ምሉእ ካልኣይ ደረጃ ቤት-ትምህርቲ ኣብ ATJK',
        'ምስፍሕፋሕ ክፍልታት ትምህርቲ ኣብ ሞጆ፣ ቦራ፣ መቂን ቡልቡላን',
        'ህንጸት ዓይኒ-ምድሪ፣ ማይ፣ ጸሓያዊ ጸዓትን መራብሒ ኣሕምልትን',
        'መሳርሒ TVET፣ ናውቲ ጽሬት ደቂ-ኣንስትዮን ናይ ኣካል ጉድኣት ደገፍን',
        'ንመምህራንን ወለዲን ስልጠና ምሕደራ'
      ]
    },
    hardComponents: {
      en: [
        'Preparatory & Secondary school buildings at Negelle Arsi & ATJK',
        '4-classroom expansion blocks at Modjo, Bora, Meki & Bulbula',
        'Sanitary blocks, clean water extensions & solar installations',
        'School gardening plots'
      ],
      am: [
        'በነገሌ አርሲ እና ATJK የመሰናዶና ሁለተኛ ደረጃ ት/ቤቶች ግንባታ',
        'በሞጆ፣ ቦራ፣ መቂ እና ቡልቡላ 4-ክፍል ማስፋፊያዎች',
        'መጸዳጃ ቤቶች፣ የውሃ መስመር እና የሶላር ኃይል ዝርጋታ',
        'የትምህርት ቤት የጓሮ አትክልት ስፍራ'
      ],
      om: [
        'Ijaarsa manneen barumsaa Nageellee Arsii fi ATJK',
        'Babal’ina daree 4 Mojoo, Booraa, Maqii fi Bulbulaatti',
        'Manneen fincaanii, sarara bishaanii fi ibsaa aduu',
        'Qonna biqiltuu mana barumsaa'
      ],
      ti: [
        'ህንጸት ኣብያተ-ትምህርቲ ኣብ ነገሌ ኣርስን ATJKን',
        'ምስፍሕፋሕ 4 ክፍልታት ኣብ ሞጆ፣ ቦራ፣ መቂን ቡልቡላን',
        'ህንጸት ሽቓቓት፣ መስመር ማይን ጸሓያዊ ጸዓትን',
        'መፍረዪ ኣሕምልቲ ኣብያተ-ትምህርቲ'
      ]
    },
    materialsProvisions: {
      en: [
        'Reference books, lab equipment, computers & TVET machinery',
        'Stationery supplies & girls dignity materials',
        'Medical care & mobility assistive devices for learners with disabilities'
      ],
      am: [
        'ማጣቀሻ መጻሕፍት፣ የላቦራቶሪ እቃዎች፣ ኮምፒውተሮች እና የTVET ማሽኖች',
        'የጽሕፈት መሳሪያዎች እና የሴቶች ንጽህና መጠበቂያ ቁሳቁስ',
        'ለአካል ጉዳተኛ ተማሪዎች የህክምናና የመንቀሳቀሻ መሳሪያ ድጋፍ'
      ],
      om: [
        'Kitaabota, meeshaalee laabii, kompiitarootaa fi maashinoota TVET',
        'Meeshaalee barreessaa fi qulqullina shamarranii',
        'Yaalaa fi meeshaalee gargaarsaa barattoota miidhaa qaamaa qabaniif'
      ],
      ti: [
        'መጻሕፍቲ፣ መሳርሒ ላቦራቶሪ፣ ኮምፒዩተራትን ማሽናት TVETን',
        'ናውቲ ጽሕፈትን ናውቲ ጽሬት ደቂ-ኣንስትዮን',
        'ሕክምናን መሳርሒ ምንቅስቓስን ንስንኩላን ተምሃሮ'
      ]
    },
    softComponents: {
      en: [
        'Training for principals, teachers, TVET trainers & PTSA/SMCs',
        '21st-century skills, e-learning & girls club leadership',
        'Inclusive education, gender advocacy & health protection campaigns'
      ],
      am: [
        'ለርዕሳነ መምህራን፣ አሰልጣኞች እና የወላጅ ኮሚቴዎች ስልጠና',
        'ዲጂታል ትምህርት፣ የህይወት ክህሎት እና የሴቶች ክበብ አመራር',
        'ሁሉን አቀፍ ትምህርት እና የስርዓተ-ፆታ ግንዛቤ ማስጨበጫ'
      ],
      om: [
        'Leenjii hoggantootaa, barsiisotaa fi koree PTSA/SMCf',
        'Dandeettii jaarraa 21ffaa, barnoota dijitaalaa fi kilabii shamarranii',
        'Duula hirmaannaa hunda hammataa fi koorniyaa'
      ],
      ti: [
        'ስልጠና ንርእሳነ-መምህራን፣ መምህራንን ኮሚቴታት ወለድን',
        'ክእለት መበል 21 ክፍለ-ዘመንን ዲጂታል ትምህርትን',
        'ሓቛፊ ትምህርትን ጎስጓስ ማዕርነት ጾታን'
      ]
    }
  },
  2: {
    title: {
      en: 'Building Opportunity for Livelihood Development & Enhanced Resilience (BOLDER/RIHA II)',
      am: 'የአርብቶ አደሮች ኑሮ ማሻሻል እና ጽናት ግንባታ (BOLDER / RIHA II)',
      om: 'Carraa Misooma Jireenyaa fi Dandamannaa Cimsaa (BOLDER/RIHA II)',
      ti: 'ምህናጽ ዕድል መነባብሮን ጽንዓትን ኣብ ክልል ሶማሌ (BOLDER/RIHA II)'
    },
    summary: {
      en: 'Resilience building and livelihood strengthening for pastoralists via CAP, VSLA, and Field Schools.',
      am: 'ለአርብቶ አደሮችና ከፊል አርሶ አደሮች የማህበረሰብ እቅድ (CAP)፣ ቁጠባ (VSLA) እና የመስክ ትምህርት።',
      om: 'Horsiisee bultootaaf dandamannaa fi jireenya cimsuu karaa CAP, VSLA fi Manneen Barumsaa Dirreetiin.',
      ti: 'ንሰብ-ከብትን ሓረስቶትን ብCAP፣ VSLAን ቤት-ትምህርቲ መስክን ጽንዓትን መነባብሮን ምሕያል።'
    },
    objective: {
      en: 'Strengthen resilience and livelihoods of 48,000 pastoralists and agro-pastoralists through CAP, VSLA, and PSF/FFS.',
      am: '48,000 አርብቶ አደሮችን በCAP፣ በሴቶች የቁጠባ ማህበራት እና በአርብቶ አደር ት/ቤቶች ማብቃት።',
      om: 'Horsiisee bultoota 48,000f karaa CAP, VSLA fi PFS/FFS jireenyaa fi dandamannaa isaanii cimsuu.',
      ti: '48,000 ሰብ-ከብቲ ብCAP፣ ማሕበራት ዕቋር VSLAን ቤት-ትምህርቲ መስክን ምብቃዕ።'
    },
    location: { en: 'Somali Region', am: 'የሶማሌ ክልል', om: 'Naannoo Somaalee', ti: 'ክልል ሶማሌ' },
    beneficiaries: {
      en: '48,000 direct persons',
      am: '48,000 ቀጥተኛ ተጠቃሚዎች',
      om: 'Namoota 48,000 kallattiin',
      ti: '48,000 ቀጥታውያን ተጠቀምቲ'
    },
    duration: {
      en: '01/01/2022 to 31/12/2025',
      am: 'ጥር 2022 – ታህሳስ 2025',
      om: '01/01/2022 hanga 31/12/2025',
      ti: '01/01/2022 ክሳብ 31/12/2025'
    },
    goals: {
      en: [
        'Resilience building and rangeland protection for 48,000 pastoralists',
        'Community Action Planning (CAP) participatory implementation',
        'Village Savings and Loan Associations (VSLA) micro-enterprise development',
        'Pastoral & Farmer Field Schools (PFS/FFS)'
      ],
      am: [
        'ለ48,000 አርብቶ አደሮች የጽናት ግንባታና የግጦሽ መሬት ጥበቃ',
        'አሳታፊ የማህበረሰብ የድርጊት መርሃ-ግብር (CAP) ትግበራ',
        'የመንደር ቁጠባና ብድር ማህበራት (VSLA) አነስተኛ ንግድ ልማት',
        'የአርብቶ አደር እና አርሶ አደር የመስክ ትምህርት ቤቶች'
      ],
      om: [
        'Horsiisee bultoota 48,000f dandamannaa fi eegumsa margaa',
        'Karoora Tarkaanfii Hawaasaa (CAP) hirmaannaa qabu',
        'Misooma daldala xiqqaa gareewwan qusannaa VSLA',
        'Manneen Barumsaa Dirree Horsiisee Bulaa fi Qonnaan Bulaa'
      ],
      ti: [
        'ን48,000 ሰብ-ከብቲ ምህናጽ ጽንዓትን ሓለዋ መጋሃጫን',
        'ኣሳታፊ መደብ ተግባር ሕብረተሰብ (CAP)',
        'ምምዕባል ንኣሽቱ ንግድታት ብማሕበራት ዕቋር VSLA',
        'ኣብያተ-ትምህርቲ መስኪ ሓረስቶትን ሰብ-ከብትን'
      ]
    }
  },
  3: {
    title: {
      en: 'Vocational Qualification & Employment Perspectives (VQEP) in Solar Energy',
      am: 'በሶላር ኃይል ዘርፍ የወጣቶችና የሴቶች የሙያ ስልጠና እና ስራ ዕድል (VQEP)',
      om: 'Leenjii Ogummaa fi Carraa Hojii Anniisaa Aduu Dargaggootaa fi Dubartootaaf (VQEP)',
      ti: 'ሞያዊ ብቕዓትን ዕድል ስራሕን ንመናእሰይን ኣንስትን ኣብ ጸሓያዊ ጸዓት (VQEP)'
    },
    summary: {
      en: 'Accredited solar TVET training and protection for unemployed youth, women, and conflict-affected girls.',
      am: 'ለስራ አጥ ወጣቶችና ሴቶች የታዳሽ ኃይል የሙያ ስልጠና እና በአዳአር ወረዳ ለተጎዱ ሴቶች የደህንነት ድጋፍ።',
      om: 'Dargaggootaa fi dubartootaaf leenjii ogummaa anniisaa aduu fi eegumsa shamarran Ada’aar fooyyessuu.',
      ti: 'ንስራሕ-ኣልቦ መናእሰይን ኣንስትን ስልጠና ጸሓያዊ ጸዓትን ሓለዋ ደቂ-ኣንስትዮ ኣብ ኣዳዓርን።'
    },
    objective: {
      en: 'Improve youth and women livelihoods via solar TVET across Dire Dawa, Afar Zone 3, Arba Minch, and Wolkete, plus support in Ada’ar.',
      am: 'በድሬዳዋ፣ አፋር ዞን 3፣ አርባ ምንጭና ወልቂጤ በሶላር ኃይል የስራ እድል መፍጠርና በአዳአር ወረዳ የሴቶችን ደህንነት መጠበቅ።',
      om: 'Dirree Dawaa, Affaar Zoonii 3, Arbaa Minch fi Walqixxeetti carraa hojii anniisaa aduu uumuu fi nagaa shamarran Ada’aar eeguu.',
      ti: 'ኣብ ድሬዳዋ፣ ዓፋር ዞባ 3፣ ኣርባ ምንጭን ወልቂጤን ብጸሓያዊ TVET ዕድል ስራሕ ምፍጣርን ኣብ ኣዳዓር ደገፍ ምሃብን።'
    },
    location: {
      en: 'Dire Dawa, Afar Zone 3, Arba Minch, Wolkete',
      am: 'ድሬዳዋ፣ አፋር ዞን 3፣ አርባ ምንጭ፣ ወልቂጤ',
      om: 'Dirree Dawaa, Affaar Zoonii 3, Arbaa Minch, Walqixxee',
      ti: 'ድሬዳዋ፣ ዓፋር ዞባ 3፣ ኣርባ ምንጭ፣ ወልቂጤ'
    },
    beneficiaries: {
      en: '12,500+ Youth & Women',
      am: '12,500+ ወጣቶች እና ሴቶች',
      om: 'Dargaggootaa fi Dubartoota 12,500+',
      ti: '12,500+ መናእሰይን ኣንስትን'
    },
    duration: {
      en: 'Oct 01, 2022 – Dec 31, 2025',
      am: 'ጥቅምት 2022 – ታህሳስ 2025',
      om: 'Onkoloolessa 2022 – Muddee 2025',
      ti: 'ጥቅምቲ 2022 – ታሕሳስ 2025'
    },
    goals: {
      en: [
        'Accredited vocational qualification in solar PV technology',
        'Upgrading TVET colleges with solar demonstration labs',
        'Green job placement & entrepreneurship for youth and women',
        'Safety & dignity support for conflict-affected girls in Ada’ar'
      ],
      am: [
        'በሶላር ፎቶቮልታይክ ቴክኖሎጂ እውቅና ያለው የሙያ ስልጠና',
        'የቴክኒክና ሙያ ኮሌጆችን በሶላር ላቦራቶሪ መሳሪያዎች ማደራጀት',
        'ለወጣቶችና ሴቶች አረንጓዴ ስራ ዕድል እና ስራ ፈጠራ ድጋፍ',
        'በአዳአር ወረዳ ለተጎዱ ሴቶች የክብርና ደህንነት ድጋፍ'
      ],
      om: [
        'Mirkaneeffannaa ogummaa teeknooloojii anniisaa aduu',
        'Koollejjiiwwan TVET laabii agarsiisaa aduun cimsuu',
        'Carraa hojii magariisaa dargaggootaa fi dubartootaaf uumuu',
        'Eegumsaa fi deeggarsa shamarran Aanaa Ada’aariif kennuu'
      ],
      ti: [
        'ኣፍልጦ ዘለዎ ሞያዊ ስልጠና ቴክኖሎጂ ጸሓያዊ ጸዓት',
        'ምምላእ ኮሌጃት TVET ብላቦራቶሪታት ጸሓያዊ ጸዓት',
        'ንመናእሰይን ኣንስትን ምፍጣር ሓምለዋይ ዕድል ስራሕ',
        'ንግዳያት ደቂ-ኣንስትዮ ወረዳ ኣዳዓር ሓለዋን ደገፍን'
      ]
    }
  },
  4: {
    title: {
      en: 'Integrated multi-sector emergency response for acute malnutrition (Adadle Woreda)',
      am: 'በአዳድሌ ወረዳ ለከባድ የምግብ እጥረት የተቀናጀ የአደጋ ጊዜ ምላሽ',
      om: 'Deebii Balaa Hanqina Nyaataa Cimaa Dameewwan Hedduu (Aanaa Adaadilee)',
      ti: 'ውሁድ ህጹጽ ምላሽ ንብርቱዕ ሕጽረት መግቢ (ወረዳ ኣዳድሌ)'
    },
    summary: {
      en: 'Save lives and reduce acute malnutrition and disease across agriculture, food, health, nutrition, and WASH.',
      am: 'በግብርና፣ ምግብ፣ ጤና፣ ስነ-ምግብና ውሃ ዘርፎች ህይወትን ማዳን እና የህጻናትን ሞት መቀነስ።',
      om: 'Qonna, nyaata, fayyaa fi WASH walitti qabuun lubbuu baraaruu fi hanqina nyaataa hir’isuu.',
      ti: 'ብሕርሻ፣ መግቢ፣ ጥዕናን WASHን ህይወት ምድሓንን ሕጽረት መግቢ ምንካይን።'
    },
    objective: {
      en: 'Prevent mortality and reduce acute malnutrition and disease across drought-affected IDP sites in Adadle Woreda.',
      am: 'በድርቅ በተጎዱ የአዳድሌ ወረዳ ተፈናቃዮች መካከል ከባድ የምግብ እጥረትን እና በሽታን በመቀነስ ህይወትን ማትረፍ።',
      om: 'Buufataalee buqqaatotaa Aanaa Adaadilee keessatti du’aa fi hanqina nyaataa cimaa hir’isuu.',
      ti: 'ኣብ ተመዛበልቲ ወረዳ ኣዳድሌ ሞት፣ ሕጽረት መግብን ሕማምን ምንካይ።'
    },
    location: { en: 'Adadle Woreda (Shebele Zone, Somali)', am: 'አዳድሌ ወረዳ (ሸበሌ ዞን)', om: 'Aanaa Adaadilee (Zoonii Shabalee)', ti: 'ወረዳ ኣዳድሌ (ዞባ ሸበሌ)' },
    beneficiaries: { en: '7,500 Households', am: '7,500 አባወራዎች', om: 'Maatii 7,500', ti: '7,500 ስድራቤታት' },
    duration: { en: '01/02/2023 - 31/01/2024', am: 'የካቲት 2023 – ጥር 2024', om: '01/02/2023 - 31/01/2024', ti: '01/02/2023 - 31/01/2024' },
    goals: {
      en: [
        'Save lives and prevent mortality across drought-hit IDP sites',
        'Decentralized OTP clinics & screening for acute malnutrition',
        'Emergency WASH services in displacement camps & host areas',
        'Emergency seeds & food assistance to affected households'
      ],
      am: [
        'በድርቅ ለተጎዱ ተፈናቃዮች ህይወት አድን የአደጋ ጊዜ ምላሽ',
        'የተመጣጠነ ምግብ እጥረት ምርመራ እና ህክምና ጣቢያዎች (OTP)',
        'በመጠለያ ጣቢያዎች አስቸኳይ የንጹህ ውሃና ንጽህና አገልግሎት',
        'በድርቅ ለተጎዱ ቤተሰቦች አስቸኳይ የዘርና የምግብ ድጋፍ'
      ],
      om: [
        'Buqqaatota hongeen miidhamaniif lubbuu baraaruufi du’a ittisuu',
        'Sagantaa yaala hanqina nyaataa cimaa (OTP) fi qorannoo',
        'Buufataalee keessatti tajaajila bishaanii fi qulqullinaa (WASH)',
        'Maatiiwwan hongeen miidhamaniif gargaarsa qonnaa fi nyaataa'
      ],
      ti: [
        'ንብደርቂ ዝተጎድኡ ተመዛበልቲ ህይወት ምድሓንን ሞት ምክልኻልን',
        'ሕክምና ብርቱዕ ሕጽረት መግቢ (OTP)ን መርመራን',
        'ኣብ መዓስከራት ህጹጽ ኣገልግሎት ማይን ጽሬትን (WASH)',
        'ንብደርቂ ዝተጠቕዓ ስድራታት ሓገዝ መግብን ዘርእን'
      ]
    }
  },
  5: {
    title: {
      en: 'WASH Emergency response in communities affected by drought (Shebelle Zone)',
      am: 'በሸበሌ ዞን በድርቅ ለተጎዱ ማህበረሰቦች አስቸኳይ የውሃ እና ንጽህና (WASH) ምላሽ',
      om: 'Deebii Balaa WASH Hawaasa Hongeen Miidhamanif (Zoonii Shabalee)',
      ti: 'ህጹጽ ምላሽ ማይን ጽሬትን (WASH) ንብደርቂ ዝተጎድኡ (ዞባ ሸበሌ)'
    },
    summary: {
      en: 'Life-saving WASH assistance including water trucking, borehole repairs, and sanitation for drought-hit IDPs.',
      am: 'በድርቅ ለተጎዱ ተፈናቃዮች በቦቴ ውሃ ማቅረብ፣ የውሃ ጉድጓድ ጥገና እና የንጽህና አገልግሎት መስጠት።',
      om: 'Namoota hongeen miidhamanif bishaan geejjibuu, boolla suphuu fi qulqullina dhiyeessuu.',
      ti: 'ንብደርቂ ዝተጎድኡ ተመዛበልቲ ብቦቴ ማይ ምቕራብ፣ ጽገና ዒላታትን ጽሬትን።'
    },
    objective: {
      en: 'Provide life-saving humanitarian assistance to improve emergency WASH access in Adadle and Gode Woredas.',
      am: 'በአዳድሌ እና ጎዴ ወረዳዎች ለሚገኙ ተጋላጭ ወገኖች ህይወት አድን አስቸኳይ የንጹህ ውሃና ንጽህና አገልግሎት መስጠት።',
      om: 'Aanaalee Adaadilee fi Goodee keessatti tajaajila WASH yeroo balaa fooyyessuun lubbuu baraaruu.',
      ti: 'ኣብ ወረዳታት ኣዳድሌን ጎዴን ህይወት ዘድሕን ህጹጽ ኣገልግሎት WASH ምሃብ።'
    },
    location: { en: 'Adadle & Gode (Shebelle Zone)', am: 'አዳድሌ እና ጎዴ (ሸበሌ ዞን)', om: 'Adaadilee fi Goodee (Shabalee)', ti: 'ኣዳድሌን ጎዴን (ዞባ ሸበሌ)' },
    beneficiaries: { en: '45,480 IDPs', am: '45,480 ተፈናቃዮች', om: 'Buqqaatota 45,480', ti: '45,480 ተመዛበልቲ' },
    duration: { en: 'Oct 2022 – Nov 2023', am: 'ጥቅምት 2022 – ህዳር 2023', om: 'Onk. 2022 – Sad. 2023', ti: 'ጥቅምቲ 2022 – ሕዳር 2023' },
    goals: {
      en: [
        'Emergency water trucking & rehabilitation of solar boreholes',
        'Emergency latrines and handwashing stations in IDP sites',
        'WASH NFI distribution: jerrycans, soap & water treatment',
        'Community hygiene promotion preventing AWD outbreaks'
      ],
      am: [
        'አስቸኳይ የቦቴ ውሃ አቅርቦትና የሶላር ጉድጓዶች ጥገና',
        'በመጠለያ ጣቢያዎች አስቸኳይ መጸዳጃ ቤቶችና መታጠቢያዎች',
        'ጀሪካን፣ ሳሙና እና የውሃ ማጣሪያ ክሎሪን ስርጭት',
        'ተላላፊ በሽታዎችን ለመከላከል የማህበረሰብ ንጽህና ትምህርት'
      ],
      om: [
        'Bishaan konkolaataan dhiyeessuu fi boolla aduu suphuu',
        'Ijaarsa manneen fincaanii yeroo balaa fi iddoo dhiqannaa',
        'Jaarkaanii, saamunaa fi qoricha qulqulleessa bishaanii raabsuu',
        'Eegumsa qulqullinaa hawaasaa dhukkuba ittisuuf kennuu'
      ],
      ti: [
        'ህጹጽ ቀረብ ማይ ብቦቴን ጽገና ጸሓያዊ ዒላታትን',
        'ህንጸት ህጹጽ ሽቓቓትን መሕጸቢ ኢድን ኣብ መዓስከራት',
        'ምዕዳል ጀሪካን፣ ሳሙናን መጻረዪ ማይን',
        'ተላጋቢ ሕማማት ንምክልኻል ጎስጓስ ጽሬት ሕብረተሰብ'
      ]
    }
  },
  6: {
    title: {
      en: 'Together for the Inclusion (National Inclusive Education)',
      am: 'አብሮ ለማካተት (ሀገራዊ ሁሉን አቀፍ ትምህርት)',
      om: 'Waliin Hirmaannaa Barnootaaf (TOFI)',
      ti: 'ብሓባር ንምሕቋፍ (ሃገራዊ ሓቛፊ ትምህርቲ)'
    },
    summary: {
      en: 'Assistive devices, accessible classrooms, and teacher training supporting inclusion for 7,000 children.',
      am: 'ለአካል ጉዳተኛ ህጻናት አጋዥ መሳሪያዎችን፣ ምቹ ክፍሎችን እና የመምህራን ስልጠና ማቅረብ።',
      om: 'Daa’imman 7,000f meeshaalee gargaarsaa, daree mijataa fi leenjii barsiisotaa kennuu.',
      ti: 'ን7,000 ህጻናት መሳርሒ ደገፍ፣ ምቹእ ክፍልታትን ስልጠና መምህራንን ምሃብ።'
    },
    objective: {
      en: 'Support inclusive access and assistive devices for children with disabilities in the Ethiopian education sector.',
      am: 'በትምህርት ዘርፍ የአካል ጉዳተኛ ህጻናትን እኩል ተሳትፎ እና ተደራሽነት ማረጋገጥ።',
      om: 'Damee barnootaa keessatti daa’imman qaama miidhamaniif deeggarsa hunda hammataa kennuu.',
      ti: 'ኣብ ዓውዲ ትምህርቲ ንስንኩላን ህጻናት ማዕረ ተሳትፎን ደገፍን ምሃብ።'
    },
    location: { en: 'National / Multi-Region', am: 'ሀገራዊ / ባለብዙ ክልል', om: 'Biyyoolessaa / Naannoolee', ti: 'ሃገራዊ / ብዙሕ ክልላት' },
    beneficiaries: { en: '7,000 persons', am: '7,000 ተጠቃሚዎች', om: 'Namoota 7,000', ti: '7,000 ተጠቀምቲ' },
    duration: { en: 'Oct 2020 – Dec 2023', am: 'ጥቅምት 2020 – ታህሳስ 2023', om: 'Onk. 2020 – Mud. 2023', ti: 'ጥቅምቲ 2020 – ታሕሳስ 2023' },
    goals: {
      en: [
        'Educational inclusion for 7,000 children with disabilities',
        'Mobility devices, hearing aids & accessible learning kits',
        'Inclusive classroom instruction training for teachers',
        'Advocacy reducing stigma against children with disabilities'
      ],
      am: [
        'ለ7,000 አካል ጉዳተኛ ህጻናት የትምህርት አካታችነት ድጋፍ',
        'ዊልቸር፣ የመስሚያ መርጃ እና ልዩ መማሪያ ቁሳቁስ አቅርቦት',
        'ለመምህራን አካታች የማስተማር ስነ-ዘዴ ስልጠና',
        'አድልዎን ለማስቀረት የማህበረሰብ ግንዛቤ ማስጨበጫ ዘመቻ'
      ],
      om: [
        'Daa’imman qaama miidhaman 7,000f barnoota hunda hammataa',
        'Meeshaalee deeggarsaa, gargaarsa dhageettii fi kitaabota addaa',
        'Leenjii barsiisotaa barnoota hunda hammataarratti',
        'Duula hubannoo qoodinsa hir’isuu fi mirga daa’immanii'
      ],
      ti: [
        'ን7,000 ስንኩላን ህጻናት ተበጻሕነት ሓቛፊ ትምህርቲ',
        'መሳርሒ ምንቅስቓስ፣ መስምዕን ፍሉይ መምሃሪ ናውትን',
        'ንመምህራን ስልጠና ሓቛፊ ኣመሃህራ',
        'መድልዎ ንምውጋድ ጎስጓስ መሰል ስንኩላን ህጻናት'
      ]
    }
  },
  7: {
    title: {
      en: 'WASH assistance for conflict crisis response in North Wollo, Amhara',
      am: 'በሰሜን ወሎ አማራ ክልል ለግጭት ጉዳተኞች የውሃና ንጽህና (WASH) እርዳታ',
      om: 'Deeggarsa WASH Deebii Balaa Walitti Bu’iinsaa Walloo Kaabaa',
      ti: 'ሓገዝ ማይን ጽሬትን (WASH) ንግዳያት ግጭት ሰሜን ወሎ፣ ኣምሓራ'
    },
    summary: {
      en: 'Restore water systems, school sanitation, and community hygiene for IDPs and host families in North Wollo.',
      am: 'በግጭት የወደሙ የውሃ መስመሮችን መጠገን፣ መጸዳጃ ቤቶችን መገንባትና የንጽህና ግንዛቤ መፍጠር።',
      om: 'Sirna bishaanii suphuu, qulqullina mana barumsaa fi eegumsa fayyaa Walloo Kaabaatti hojjechuu.',
      ti: 'ዝዓነዉ መስመራት ማይ ምጽጋን፣ ጽሬት ኣብያተ-ትምህርትን ጎስጓስ ጽሬትን ኣብ ሰሜን ወሎ።'
    },
    objective: {
      en: 'Rebuild conflict-damaged water and sanitary infrastructure and promote hygiene to prevent disease.',
      am: 'በግጭቱ የወደሙ የውሃ እና የንጽህና ተቋማትን መልሶ በመገንባት ተላላፊ በሽታዎችን መከላከል።',
      om: 'Bu’uuraalee bishaanii fi qulqullinaa walitti bu’iinsaan miidhaman ijaaruu fi dhukkuba ittisuun.',
      ti: 'ብግጭት ዝዓነወ ትሕተ-ቅርጺ ማይን ጽሬትን ምህናጽን ተላጋቢ ሕማማት ምክልኻልን።'
    },
    location: { en: 'North Wollo Zone, Amhara', am: 'ሰሜን ወሎ ዞን፣ አማራ', om: 'Zoonii Walloo Kaabaa, Amaaraa', ti: 'ዞባ ሰሜን ወሎ፣ ኣምሓራ' },
    beneficiaries: { en: '18,300 persons', am: '18,300 ተጠቃሚዎች', om: 'Namoota 18,300', ti: '18,300 ተጠቀምቲ' },
    duration: { en: 'Nov 2022 – Sep 2023', am: 'ህዳር 2022 – መስከረም 2023', om: 'Sad. 2022 – Ful. 2023', ti: 'ሕዳር 2022 – መስከረም 2023' },
    goals: {
      en: [
        'Rebuilding conflict-damaged piped water & maintenance systems',
        'School & emergency toilet rooms for IDPs and hosts',
        'Distribution of household WASH & sanitation hygiene kits',
        'Hygiene promotion preventing infectious disease transmission'
      ],
      am: [
        'በግጭት የወደሙ የውሃ ተቋማትን መገንባትና ጥገና ኮሚቴ ማቋቋም',
        'በት/ቤቶች እና በመጠለያ ጣቢያዎች አስቸኳይ መጸዳጃ ቤቶች',
        'ለተፈናቃዮችና አስተናጋጅ ቤተሰቦች የንጽህና እቃዎች ስርጭት',
        'ተላላፊ በሽታዎችን ለመከላከል የንጽህና ግንዛቤ ትምህርት'
      ],
      om: [
        'Sarara bishaanii walitti bu’iinsaan manca’e deebisanii ijaaruu',
        'Manneen barumsaa fi buufataaleetti manneen fincaanii ijaaruu',
        'Meeshaalee qulqullinaa dhuunfaa fi maatii raabsuu',
        'Dhukkuboota daddarboo ittisuuf hubannoo qulqullinaa uumuu'
      ],
      ti: [
        'ዝዓነወ መስመር ማይ ምህናጽን ኮሚቴ ጽገና ምምስራትን',
        'ኣብ ኣብያተ-ትምህርትን መዓስከራትን ህጹጽ ሽቓቓት ምህናጽ',
        'ኣገዳሲ ናውቲ ጽሬትን ውልቃዊ ምክልኻልን ምዕዳል',
        'ተላጋቢ ሕማማት ዝከላኸል ጎስጓስ ጽሬት ምክያድ'
      ]
    }
  },
  8: {
    title: {
      en: 'Post-war recovery for conflict-affected populations in Afar (Ada’ar Woreda)',
      am: 'በአፋር ክልል አዳአር ወረዳ ከግጭት በኋላ የማገገምና መልሶ ግንባታ ፕሮጀክት',
      om: 'Bayyanannaa Hawaasa Walitti Bu’iinsaan Miidhamee (Ada’aar, Affaar)',
      ti: 'ድሕረ-ኲናት ምሕዋይ ንብግጭት ዝተጎድኡ ህዝቢ ዓፋር (ወረዳ ኣዳዓር)'
    },
    summary: {
      en: 'Restore livestock livelihoods, drinking water systems, and schooling across 5 kebeles in Ada’ar.',
      am: 'በአዳአር ወረዳ በ5 ቀበሌዎች የእንስሳት እርባታን፣ የመጠጥ ውሃን እና ትምህርትን መልሶ ማቋቋም።',
      om: 'Gandaalee 5 Aanaa Ada’aar keessatti horsiisa beeladaa, bishaan dhugaatii fi barnoota deebisuu.',
      ti: 'ኣብ 5 ጣብያታት ኣዳዓር ምርባሕ ከብቲ፣ ዝስተ ማይን ትምህርትን ምምላስ።'
    },
    objective: {
      en: 'Deliver targeted post-conflict reconstruction, livestock recovery, drinking water, and education across 5 kebeles.',
      am: 'ከግጭት በኋላ የማህበረሰብ ኑሮን፣ የንጹህ መጠጥ ውሃ አቅርቦትን እና የትምህርት አገልግሎትን መልሶ መገንባት።',
      om: 'Bakkeewwan walitti bu’iinsaan miidhaman 5 keessatti jireenya, bishaanii fi barnoota deebisanii ijaaruu.',
      ti: 'ኣብ 5 ጣብያታት ኣዳዓር መነባብሮ፣ ዝስተ ማይን ትምህርትን ዳግም ምህናጽ።'
    },
    location: { en: "Ada'ar Woreda (5 Kebeles), Afar", am: 'አዳአር ወረዳ (5 ቀበሌዎች)፣ አፋር', om: "Aanaa Ada'aar (Ganda 5), Affaar", ti: 'ወረዳ ኣዳዓር (5 ጣብያታት)፣ ዓፋር' },
    beneficiaries: { en: '6,000 people', am: '6,000 ተጠቃሚዎች', om: 'Namoota 6,000', ti: '6,000 ተጠቀምቲ' },
    duration: { en: '01/05/2023 - 31/12/2023', am: 'ግንቦት 2023 – ታህሳስ 2023', om: '01/05/2023 - 31/12/2023', ti: '01/05/2023 - 31/12/2023' },
    goals: {
      en: [
        'Kebele-specific post-war reconstruction & recovery',
        'Restoring pastoral livelihoods & livestock health',
        'Securing safe drinking water for families and herds',
        'Re-establishing education across 5 kebeles of Ada’ar'
      ],
      am: [
        'እንደየቀበሌው ፍላጎት የተቃኘ የድህረ-ግጭት መልሶ ግንባታ',
        'የእንስሳት እርባታና ህክምና አገልግሎቶችን መመለስ',
        'ለአርብቶ አደር ቤተሰቦችና ከብቶች ዘላቂ የመጠጥ ውሃ ማቅረብ',
        'በአዳአር 5 ቀበሌዎች የትምህርት አገልግሎትን ዳግም መጀመር'
      ],
      om: [
        'Karoora bayyanannaa fedhii gandaalee irratti hundaa’e',
        'Horsiisa beeladaa fi yaala loonii deebisanii cimsuu',
        'Maatii fi beeladootaf bishaan dhugaatii itti fufaa dhiyeessuu',
        'Gandaalee Ada’aar 5 keessatti tajaajila barnootaa jalqabuu'
      ],
      ti: [
        'ኣብ ድሌት ጣብያታት ዝተመስረተ ድሕረ-ኲናት መልሶ ግንባታ',
        'ምርባሕ ከብትን ሕክምና እንስሳትን ዳግም ምጅማር',
        'ንስድራታትን ከብትን ዘላቒ ዝስተ ማይ ምርግጋጽ',
        'ኣብ 5 ጣብያታት ኣዳዓር ትምህርቲ ዳግም ምኽፋት'
      ]
    }
  },
  9: {
    title: {
      en: 'Psycho-social Support and Employment Opportunities (PSSEO) in Tigray',
      am: 'በትግራይ የስነ-ልቦና ድጋፍ እና የስራ እድል ፈጠራ ፕሮጀክት (PSSEO)',
      om: 'Deeggarsa Xiin-sammuu fi Carraa Hojii Tigraayitti (PSSEO)',
      ti: 'ስነ-ኣእምሮኣዊ ድጋፍን ዕድል ስራሕን ኣብ ትግራይ (PSSEO)'
    },
    summary: {
      en: 'Comprehensive MHPSS counseling (20,000 individuals) and IGA skills/grants for 700 survivors (67% women).',
      am: 'ለ20,000 ሰዎች የስነ-ልቦና ምክር እና ለ700 ተጎጂዎች (67% ሴቶች) የገቢ ማስገኛ ክህሎትና ድጋፍ።',
      om: 'Namoota 20,000f gorsa xiin-sammuu fi namoota 700f (%67 dubartoota) leenjii IGA fi deeggarsa kennuu.',
      ti: 'ን20,000 ሰባት ስነ-ኣእምሮኣዊ ምኽርን ን700 ተጠቀምቲ (67% ኣንስቲ) ስልጠና ስራሕን ካፒታልን።'
    },
    objective: {
      en: 'Improve psychosocial wellbeing and sustainable income generation for IDPs and host communities in Mekelle and Shire.',
      am: 'በመቀሌና ሽሬ ለሚገኙ ተፈናቃዮች የአእምሮ ጤናና የስነ-ልቦና ድጋፍ እና ዘላቂ የገቢ ማስገኛ ስልጠና መስጠት።',
      om: 'Maqalee fi Shireetti fayyaa sammuu fi galii itti-fufiinsa qabu buqqaatotaaf fooyyessuu.',
      ti: 'ኣብ መቐለን ሽረን ንተመዛበልቲ ጥዕና ኣእምሮን ዘላቒ እቶትን ምምሕያሽ።'
    },
    location: { en: 'Mekelle & Shire, Tigray', am: 'መቀሌ እና ሽሬ፣ ትግራይ', om: 'Maqalee fi Shiree, Tigraay', ti: 'መቐለን ሽረን፣ ትግራይ' },
    beneficiaries: { en: '20,000 People (67% women)', am: '20,000 ሰዎች (67% ሴቶች)', om: 'Namoota 20,000 (%67 dub.)', ti: '20,000 ሰባት (67% ኣንስቲ)' },
    duration: { en: 'Oct 2022 – Aug 2023', am: 'ጥቅምት 2022 – ነሐሴ 2023', om: 'Onk. 2022 – Hag. 2023', ti: 'ጥቅምቲ 2022 – ነሓሰ 2023' },
    goals: {
      en: [
        'Comprehensive MHPSS care reaching 20,000 individuals',
        'IGA business & life skills training for 700 survivors (67% women)',
        'Startup toolkits and grants for female-headed households',
        'Community peer support networks in Mekelle & Shire'
      ],
      am: [
        'ለ20,000 ሰዎች የተሟላ የአእምሮና የስነ-ልቦና ድጋፍ (MHPSS)',
        'ለ700 ተጎጂዎች (67% ሴቶች) የገቢ ማስገኛ ሙያና ክህሎት ስልጠና',
        'ለሴት የቤተሰብ አስተዳዳሪዎች የንግድ መነሻ ቁሳቁስና ድጋፍ',
        'በመቀሌ እና ሽሬ የማህበረሰብ የእርስ በርስ ድጋፍ መረቦች'
      ],
      om: [
        'Namoota 20,000f tajaajila fayyaa sammuu fi xiin-sammuu (MHPSS)',
        'Namoota 700f (%67 dubartoota) leenjii IGA fi ogummaa jireenyaa',
        'Haadholii maatii bulchaniif meeshaa hojii fi gargaarsa ka’umsaa',
        'Maqalee fi Shireetti cimina hawaasaa fi deeggarsa walii ijaaruu'
      ],
      ti: [
        'ን20,000 ሰባት ኣገልግሎት ስነ-ኣእምሮ (MHPSS)',
        'ን700 ሰባት (67% ኣንስቲ) ስልጠና መነባብሮን ንግድን (IGA)',
        'ንኣመሓደርቲ ስድራ ደቂ-ኣንስትዮ መበገሲ መሳርሕን ገንዘብን',
        'ኣብ መቐለን ሽረን ማሕበረሰብ-መሰረት ናይ ደገፍ መርበባት'
      ]
    }
  },
  10: {
    title: {
      en: 'Emergency response for conflict-affected IDPs & host families in Mekelle',
      am: 'በመቀሌ እና አካባቢው ለተፈናቃዮች እና አስተናጋጅ ቤተሰቦች የአደጋ ጊዜ ምላሽ',
      om: 'Deebii Balaa Buqqaatotaa fi Maatii Simattootaa Maqalee',
      ti: 'ህጹጽ ምላሽ ንተመዛበልትን ተቀበልቲ ስድራታትን ኣብ መቐለን ከባቢኣን'
    },
    summary: {
      en: 'Emergency food & NFIs, solar radios for children’s distance learning, and medical kits in Tigray.',
      am: 'የምግብና የቁሳቁስ ድጋፍ፣ ለተማሪዎች የሶላር ሬዲዮ የርቀት ትምህርት እና የህክምና መድሃኒቶች።',
      om: 'Nyaata, meeshaalee manaa, raadiyoo barnoota aduu fi qoricha yeroo balaa dhiyeessuu.',
      ti: 'ሓገዝ መግብን ናውትን፣ ጸሓያዊ ሬድዮ ትምህርትን መድሓኒትን ኣብ ትግራይ።'
    },
    objective: {
      en: 'Deliver food/NFI rations, solar-powered distance-learning radios for 292 children, and pediatric/maternal medical supplies.',
      am: 'የምግብ እርዳታ፣ በሶላር የሚሰሩ የትምህርት ሬዲዮኖችን ለ292 ህጻናት እና የህክምና ቁሳቁሶችን ማቅረብ።',
      om: 'Maatii 300f nyaata, ijoollee 292f raadiyoo aduu fi haadholiif qoricha dhiyeessuun lubbuu baraaruu.',
      ti: 'ን300 ስድራታት መግቢ፣ ን292 ህጻናት ጸሓያዊ ሬድዮ ትምህርትን ሕክምናዊ ናውትን ምቕራብ።'
    },
    location: { en: 'Mekelle & Surroundings, Tigray', am: 'መቀሌ እና አካባቢው፣ ትግራይ', om: 'Maqalee fi Naannoo Ishee', ti: 'መቐለን ከባቢኣን፣ ትግራይ' },
    beneficiaries: { en: '300 IDP & Host Households', am: '300 ተፈናቃይ/አስተናጋጅ ቤተሰብ', om: 'Maatii 300 (IDP & HC)', ti: '300 ስድራቤታት' },
    duration: { en: 'Nov 2022 – Aug 2023', am: 'ህዳር 2022 – ነሐሴ 2023', om: 'Sad. 2022 – Hag. 2023', ti: 'ሕዳር 2022 – ነሓሰ 2023' },
    goals: {
      en: [
        'Food & NFI relief for 300 IDP and host households',
        'Solar radio sets for 292 distance-learning children',
        'Pediatric & maternal medicaments preventing illness'
      ],
      am: [
        'ለ300 ተፈናቃይና አስተናጋጅ ቤተሰቦች የምግብና የቁሳቁስ ድጋፍ',
        'ለ292 ተማሪዎች በሶላር የሚሰሩ የርቀት ትምህርት ሬዲዮኖች',
        'ከ14 ዓመት በታች ህጻናትንና እናቶችን የሚታደጉ መድሃኒቶች'
      ],
      om: [
        'Maatii 300f nyaataa fi meeshaalee manaa (NFIs) raabsuu',
        'Barattoota 292f raadiyoo aduu barnoota fageenyaaf kennuu',
        'Ijoollee waggaa 14 gadii fi haadholiif qoricha dhiyeessuu'
      ],
      ti: [
        'ን300 ተመዛበልትን ተቀበልቲ ስድራታትን ሓገዝ መግብን ናውትን',
        'ን292 ህጻናት ብጸሓይ ዝሰርሕ ሬድዮ ትምህርቲ ምዕዳል',
        'ንትሕቲ 14 ዓመት ህጻናትን ኣዴታትን ሕክምናዊ መድሓኒት'
      ]
    }
  },
  11: {
    title: {
      en: 'Emergency food assistance to conflict-displaced IDPs in Afar',
      am: 'በአፋር ክልል በግጭት ለተፈናቀሉ ወገኖች አስቸኳይ የምግብ እርዳታ',
      om: 'Gargaarsa Nyaataa Yeroo Balaa Buqqaatota Affaarf',
      ti: 'ህጹጽ ሓገዝ መግቢ ንብግጭት ዝተመዛበሉ ወገናት ዓፋር'
    },
    summary: {
      en: 'Rapid distribution of fortified flour, cooking oil, and high-energy biscuits for 600 displaced families.',
      am: 'በሁለት ቀበሌዎች ለሚገኙ 600 ተፈናቃይ ቤተሰቦች የስንዴ ዱቄት፣ ዘይት እና ብስኩት አቅርቦት።',
      om: 'Maatii buqqa’an 600f daakuu, zayitaa fi biskutiin humna kennuu raabsuu.',
      ti: 'ን600 ተመዛበልቲ ስድራታት ሓሪጭ፣ ዘይትን ሓይሊ ዝህብ ብስኩትን ምዕዳል።'
    },
    objective: {
      en: 'Provide essential emergency food rations (white flour, oil, high-energy biscuits) for 600 IDP households across 2 kebeles.',
      am: 'በአፋር ክልል በሁለት ቀበሌዎች ለተፈናቀሉ 600 አባወራዎች አስቸኳይ የምግብ ራሽን ማቅረብ።',
      om: 'Gandaalee Affaar lama keessatti maatii buqqa’an 600f nyaata hatattamaa dhiyeessuu.',
      ti: 'ኣብ ክልተ ጣብያታት ዓፋር ን600 ተመዛበልቲ ስድራታት ህጹጽ መግቢ ምቕራብ።'
    },
    location: { en: '2 Kebeles, Afar Region', am: '2 ቀበሌዎች፣ አፋር ክልል', om: 'Ganda 2, Naannoo Affaar', ti: '2 ጣብያታት፣ ክልል ዓፋር' },
    beneficiaries: { en: '600 IDP Households', am: '600 ተፈናቃይ ቤተሰቦች', om: 'Maatii Buqqa’an 600', ti: '600 ተመዛበልቲ ስድራ' },
    duration: { en: 'Dec 2021 – Feb 2022', am: 'ታህሳስ 2021 – የካቲት 2022', om: 'Mud. 2021 – Gur. 2022', ti: 'ታሕሳስ 2021 – ለካቲት 2022' },
    goals: {
      en: [
        'Delivery of flour, cooking oil & high-energy biscuits',
        'Immediate hunger relief for 600 displaced families',
        'Nutrition support for mothers and young infants'
      ],
      am: [
        'የስንዴ ዱቄት፣ የምግብ ዘይት እና ኃይል ሰጪ ብስኩቶች አቅርቦት',
        'በ2 ቀበሌዎች ለተፈናቀሉ 600 ቤተሰቦች አስቸኳይ ምግብ',
        'የነፍሰ ጡር፣ የሚያጠቡ እናቶችንና የህጻናትን ስነ-ምግብ መጠበቅ'
      ],
      om: [
        'Daakuu, zayitaa fi biskutii humnaa yeroon dhiyeessuu',
        'Maatiiwwan 600f gargaarsa nyaataa ariifachiisaa kennuu',
        'Haadholii ulfaa, harma hoosisanii fi daa’imman eeguu'
      ],
      ti: [
        'ቀረብ ሓሪጭ፣ ዘይትን ሓይሊ ዝህብ ብስኩትን',
        'ኣብ 2 ጣብያታት ን600 ተመዛበልቲ ስድራ ህጹጽ መግቢ',
        'ሓለዋ ኣመጋግባ ህጻናትን ነፍሰ-ጾር/መጥበውቲ ኣዴታትን'
      ]
    }
  },
  12: {
    title: {
      en: 'Livelihood-based Emergency Response in Mustahil, Fer-Fer & Higloley',
      am: 'በሙስታሂል፣ ፈርፈር እና ሂግሎሌይ በድርቅ ለተጎዱ ወገኖች የምግብና ኑሮ ምላሽ',
      om: 'Deebii Balaa Jireenyaarratti Hundaa’e (Mustaahil, Fer-Fer, Higloley)',
      ti: 'ኣብ መነባብሮ ዝተመስረተ ህጹጽ ምላሽ ኣብ ሙስታሂል፣ ፈርፈርን ሂግሎለይን'
    },
    summary: {
      en: 'Improve agriculture output and cut mortality among infants, children under five, and mothers.',
      am: 'ለ7,500 ቤተሰቦች የግብርና ምርትን በማሳደግ የህጻናትና የነፍሰ ጡር እናቶችን ሞት መቀነስ።',
      om: 'Oomisha qonnaa fooyyessuu fi du’a daa’imman waggaa 5 gadii fi haadholii hir’isuu.',
      ti: 'ፍርያት ሕርሻ ብምምሕያሽ ሞት ዕሸላት፣ ትሕቲ 5 ዓመት ህጻናትን ኣዴታትን ምንካይ።'
    },
    objective: {
      en: 'Restore riverine cultivation and safeguard maternal and under-five health across drought-hit IDP sites in Somali Region.',
      am: 'በሸበሌ እና ቆራሄ ዞኖች በድርቅ ለተጎዱ ተፈናቃዮች የግብርና እና የጤና ድጋፍ ማድረግ።',
      om: 'Zoonii Shabalee fi Korahee keessatti qonnaa fi fayyaa haadholii fi daa’immanii eeguu.',
      ti: 'ኣብ ዞባታት ሸበሌን ቆራሄን ሕርሻ ምምላስን ጥዕና ኣዴታትን ህጻናትን ምሕላውን።'
    },
    location: { en: 'Mustahil, Fer-Fer & Higloley (Somali)', am: 'ሙስታሂል፣ ፈርፈር እና ሂግሎሌይ', om: 'Mustaahil, Fer-Fer fi Higloley', ti: 'ሙስታሂል፣ ፈርፈርን ሂግሎለይን' },
    beneficiaries: { en: '7,500 Households', am: '7,500 አባወራዎች', om: 'Maatii 7,500', ti: '7,500 ስድራቤታት' },
    duration: { en: 'Apr 2022 – Oct 2022', am: 'ሚያዝያ 2022 – ጥቅምት 2022', om: 'Eb. 2022 – Onk. 2022', ti: 'ሚያዝያ 2022 – ጥቅምቲ 2022' },
    goals: {
      en: [
        'Restoring agriculture for 7,500 drought-hit IDP families',
        'Cutting morbidity among infants, children <5 & mothers',
        'Distributing drought-resilient early seeds along rivers'
      ],
      am: [
        'ለ7,500 በድርቅ የተጎዱ ቤተሰቦች የግብርና ምርትን መመለስ',
        'ከ5 ዓመት በታች ህጻናትና ነፍሰ ጡር እናቶች ሞትን መቀነስ',
        'በወንዝ ዳርቻ ለሚገኙ አርሶ አደሮች ድርቅ ተቋቋሚ ዘር ማቅረብ'
      ],
      om: [
        'Maatii buqqa’an 7,500f oomisha qonnaa fooyyessuu',
        'Du’a daa’immanii fi haadholii ulfaa/hoosistootaa hir’isuu',
        'Sanyii hongee dandamatu naannoo lagaatti dhiyeessuu'
      ],
      ti: [
        'ን7,500 ብደርቂ ዝተጎድኡ ስድራታት ምርቲ ሕርሻ ምምላስ',
        'ሞት ዕሸላት፣ ትሕቲ 5 ዓመት ህጻናትን ኣዴታትን ምንካይ',
        'ደርቂ ዝጻወር ቀልጢፉ ዝበጽሕ ዘርኢ ሕርሻ ምቕራብ'
      ]
    }
  },
  13: {
    title: {
      en: 'Integrated Drought Response and Recovery (IDRR)',
      am: 'የተቀናጀ የድርቅ ምላሽ እና መልሶ ማገገሚያ (IDRR)',
      om: 'Deebii fi Bayyanannaa Hongee Walitti Hidhame (IDRR)',
      ti: 'ውሁድ ምላሽ ደርቅን ምሕዋይን (IDRR)'
    },
    summary: {
      en: 'Multi-sector humanitarian partnership with VSF Suisse protecting livelihoods for 106,000 pastoralists.',
      am: 'ከVSF Suisse ጋር በመተባበር ለ106,000 አርብቶ አደሮች ህይወት አድን የእንስሳትና የውሃ ድጋፍ።',
      om: 'VSF Suisse waliin hawaasa horsiisee bulaa 106,000f lubbuu baraaruu fi jireenya deebisuu.',
      ti: 'ምስ VSF Suisse ብምትሕብባር ን106,000 ሰብ-ከብቲ መነባብሮ ምድሓንን ምምላስን።'
    },
    objective: {
      en: 'Save lives and protect pastoralist livelihoods through animal feed, paravet care, water rehabilitation, and recovery grants in Shebele Zone.',
      am: 'በሸበሌ ዞን የእንስሳት መኖ፣ ህክምና፣ የውሃ ተቋማት ጥገና እና የገንዘብ ድጋፍ በማድረግ ህይወትን መታደግ።',
      om: 'Zoonii Shabaleetti nyaata beeladaa, yaala, suphaa bishaanii fi gargaarsa maallaqaatiin lubbuu baraaruu.',
      ti: 'ኣብ ዞባ ሸበሌ መግቢ ከብቲ፣ ሕክምና፣ ጽገና ማይን ሓገዝ ገንዘብን ምቕራብ።'
    },
    location: { en: 'Shebele Zone (2 Woredas)', am: 'ሸበሌ ዞን (2 ወረዳዎች)', om: 'Zoonii Shabalee (Aanaa 2)', ti: 'ዞባ ሸበሌ (2 ወረዳታት)' },
    beneficiaries: { en: '106,000 people', am: '106,000 ተጠቃሚዎች', om: 'Namoota 106,000', ti: '106,000 ተጠቀምቲ' },
    duration: { en: 'July 2022 – Apr 2023', am: 'ሐምሌ 2022 – ሚያዝያ 2023', om: 'Ado. 2022 – Eb. 2023', ti: 'ሓምለ 2022 – ሚያዝያ 2023' },
    goals: {
      en: [
        'Multi-sector humanitarian relief reaching 106,000 persons',
        'Emergency livestock survival feed & paravet veterinary care',
        'Strategic community water rehabilitation & recovery grants'
      ],
      am: [
        'ለ106,000 በድርቅ ለተጎዱ ሰዎች የተቀናጀ ሰብአዊ ድጋፍ',
        'አስቸኳይ የእንስሳት መኖ እና የእንስሳት ህክምና አገልግሎት',
        'ቁልፍ የውሃ ተቋማት ጥገና እና የማገገሚያ የገንዘብ ድጋፍ'
      ],
      om: [
        'Deeggarsa namoomaa namoota hongeen miidhaman 106,000f',
        'Nyaata beeladaa yeroo balaa fi yaala beeladaa kennuu',
        'Suphaa buufataalee bishaanii fi gargaarsa maallaqaa'
      ],
      ti: [
        'ን106,000 ብደርቂ ዝተጎድኡ ሰባት ውሁድ ሰብኣዊ ረድኤት',
        'ህጹጽ መግቢ ከብትን ኣገልግሎት ሕክምና እንስሳትን',
        'ጽገና ኣገደስቲ ነቑጣታት ማይን ሓገዝ ገንዘብን'
      ]
    }
  },
  14: {
    title: {
      en: 'School Feeding Project for Drought-Affected ADRA Target School',
      am: 'በድርቅ ለተጎዱ ትምህርት ቤቶች የተማሪዎች ምገባ ፕሮጀክት',
      om: 'Pirojektii Nyaata Mana Barumsaa Ijoollee Hongeen Miidhamanii',
      ti: 'መደብ ምገባ ተምሃሮ ንብደርቂ ዝተጠቕዓ ኣብያተ-ትምህርቲ'
    },
    summary: {
      en: 'Daily hot school meals cutting dropouts for 300 students while empowering 30 mothers in catering.',
      am: 'ለ300 ተማሪዎች ዕለታዊ ምግብ በማቅረብ የትምህርት ማቋረጥን መቀነስ እና 30 እናቶችን በስራ ማብቃት።',
      om: 'Barattoota 300f nyaata guyyaa kennuun harcaatii hir’isuu fi haadholii 30 humneessuu.',
      ti: 'ን300 ተምሃሮ መዓልታዊ መግቢ ብምቕራብ ምቁራጽ ትምህርቲ ምንካይን 30 ኣዴታት ምብቃዕን።'
    },
    objective: {
      en: 'Reduce absenteeism, boost child nutrition, and empower 30 organized mothers through school meals and school garden activities.',
      am: 'የተማሪዎችን መቅረትና ስነ-ምግብ እጥረት መቀነስ እንዲሁም 30 የተደራጁ እናቶችን ገቢ ማሳደግ።',
      om: 'Harcaatii barumsaa hir’isuu, nyaata barattootaa fooyyessuu fi haadholii 30 gurmeessuun galii uumuu.',
      ti: 'ምትራፍ ተምሃሮ ምንካይ፣ ኣመጋግባ ምምሕያሽን 30 ኣዴታት ብማሕበር ምብቃዕን።'
    },
    location: { en: 'Target School, Somali Region', am: 'የተመረጠ ት/ቤት፣ ሶማሌ ክልል', om: 'Mana Barumsaa Somaalee', ti: 'ተጠቃሚ ቤት-ትምህርቲ፣ ሶማሌ' },
    beneficiaries: { en: '30 mothers & 300 students', am: '30 እናቶች እና 300 ተማሪዎች', om: 'Haadholii 30 & Barattoota 300', ti: '30 ኣዴታትን 300 ተምሃሮን' },
    duration: { en: 'Sept 2021 – June 2022', am: 'መስከረም 2021 – ሰኔ 2022', om: 'Ful. 2021 – Wax. 2022', ti: 'መስከረም 2021 – ሰነ 2022' },
    goals: {
      en: [
        'Daily school meals cutting absenteeism among 300 students',
        'Organizing 30 mothers in catering & kitchen livelihoods',
        'School garden plots fostering practical student farming'
      ],
      am: [
        'ለ300 ተማሪዎች በየቀኑ ትኩስ ምግብ በማቅረብ መቅረትን መቀነስ',
        '30 እናቶችን በምግብ ዝግጅት ስራ በማደራጀት ገቢ መፍጠር',
        'ተግባራዊ የግብርና እውቀት የሚገኝበት የት/ቤት አትክልት ስፍራ'
      ],
      om: [
        'Barattoota 300f nyaata ho’aa guyyaa kennuun harcaatii hir’isuu',
        'Haadholii 30 gurmeessuun hojii nyaata qopheessuun galii uumuu',
        'Iddoo qonnaa mana barumsaa dandeettii qonnaa guddisu'
      ],
      ti: [
        'ን300 ተምሃሮ መዓልታዊ መግቢ ብምቕራብ ምትራፍ ምንካይ',
        'ን30 ዝተወደባ ኣዴታት ብምግቢ ምድላው እቶት ምፍጣር',
        'ክእለት ሕርሻ ዘዕቢ መራብሒ ኣሕምልቲ ቤት-ትምህርቲ'
      ]
    }
  },
  15: {
    title: {
      en: 'Strengthening WASH capability for South Sudanese refugees (Kule Camp)',
      am: 'በጋምቤላ ኩሌ ካምፕ ለደቡብ ሱዳን ስደተኞች የውሃና ንጽህና አቅም ግንባታ',
      om: 'Dandeettii WASH Baqattoota Sudaan Kibbaa Cimsuu (Kaampii Kulee)',
      ti: 'ምሕያል ዓቕሚ WASH ንስደተኛታት ደቡብ ሱዳን (ካምፕ ኩሌ፣ ጋምቤላ)'
    },
    summary: {
      en: 'Self-reliant water systems, sanitation latrines, and peer hygiene training for 37,000 refugees in Gambella.',
      am: 'በኩሌ ካምፕ ለሚገኙ 37,000 ስደተኞች ዘላቂ የውሃ ጣቢያዎች፣ መጸዳጃ ቤቶች እና የንጽህና ስልጠና።',
      om: 'Gambeellaa Kaampii Kuleetti baqattoota 37,000f bishaan, qulqullinaa fi leenjii kennuu.',
      ti: 'ኣብ ካምፕ ኩሌ ን37,000 ስደተኛታት ዘላቒ ነቑጣታት ማይ፣ ሽቓቓትን ስልጠና ጽሬትን።'
    },
    objective: {
      en: 'Build community capacity to manage water, sanitation, and hygiene infrastructure independently in Kule Refugee Camp.',
      am: 'ስደተኞች የውሃ እና የንጽህና ተቋማትን በራሳቸው እንዲያስተዳድሩ አቅም መገንባትና የንጽህና ልምዶችን ማሻሻል።',
      om: 'Baqattoonni rakkoo bishaanii fi qulqullinaa ofumaan furuu akka danda’an dandeettii isaanii cimsuu.',
      ti: 'ስደተኛታት ጸገማት ማይን ጽሬትን ብርእሶም ክፈትሑ ዓቕሞም ምህናጽን ልምዲ ጽሬት ምምሕያሽን።'
    },
    location: { en: 'Kule Refugee Camp, Gambella', am: 'ኩሌ ስደተኞች ካምፕ፣ ጋምቤላ', om: 'Kaampii Kulee, Gambeellaa', ti: 'ካምፕ ስደተኛታት ኩሌ፣ ጋምቤላ' },
    beneficiaries: { en: '37,000 persons', am: '37,000 ተጠቃሚዎች', om: 'Namoota 37,000', ti: '37,000 ተጠቀምቲ' },
    duration: { en: 'Sep 2022 – Mar 2023', am: 'መስከረም 2022 – መጋቢት 2023', om: 'Ful. 2022 – Bit. 2023', ti: 'መስከረም 2022 – መጋቢት 2023' },
    goals: {
      en: [
        'WASH self-reliance training for 37,000 refugees',
        'Constructing water points, washing slabs & sanitary latrines',
        'Peer-to-peer hygiene promotion across Kule Refugee Camp'
      ],
      am: [
        'ለ37,000 ስደተኞች ዘላቂ የውሃና ንጽህና አስተዳደር ስልጠና',
        'የማህበረሰብ የውሃ ቦኖዎችን፣ መታጠቢያዎችን እና መጸዳጃ ቤቶችን መገንባት',
        'በኩሌ ካምፕ ውስጥ የእርስ በርስ የንጽህና ግንዛቤ ትምህርት'
      ],
      om: [
        'Baqattoota 37,000f dandeettii bulchiinsa WASH of danda’e',
        'Buufataalee bishaanii fi manneen fincaanii ijaaruu',
        'Kaampii Kulee keessatti barnoota qulqullinaa hawaasaa kennuu'
      ],
      ti: [
        'ን37,000 ስደተኛታት ዓቕሚ ምሕደራ ማይን ጽሬትን',
        'ህንጸትን ጽገናን ነቑጣታት ማይ፣ መሕጸብን ሽቓቓትን',
        'ኣብ ካምፕ ኩሌ ጎስጓስ ጽሬት ሕብረተሰብ ምክያድ'
      ]
    }
  }
};

export function getLocalizedRegion(r: RegionData, lang: Language) {
  return {
    name:
      lang === 'am' ? r.nameAm :
      lang === 'om' ? (r.nameOm || r.name) :
      lang === 'ti' ? (r.nameTi || r.name) :
      r.name,
    capital:
      lang === 'am' ? (r.capitalAm || r.capital) :
      lang === 'om' ? (r.capitalOm || r.capital) :
      lang === 'ti' ? (r.capitalTi || r.capital) :
      r.capital,
    fieldHub:
      lang === 'am' ? (r.fieldHubAm || r.fieldHub) :
      lang === 'om' ? (r.fieldHubOm || r.fieldHub) :
      lang === 'ti' ? (r.fieldHubTi || r.fieldHub) :
      r.fieldHub,
    summary:
      lang === 'am' ? (r.summaryAm || r.summary) :
      lang === 'om' ? (r.summaryOm || r.summary) :
      lang === 'ti' ? (r.summaryTi || r.summary) :
      r.summary,
    activeProjects:
      lang === 'am' ? (r.activeProjectsAm || r.activeProjects) :
      lang === 'om' ? (r.activeProjectsOm || r.activeProjects) :
      lang === 'ti' ? (r.activeProjectsTi || r.activeProjects) :
      r.activeProjects,
    primaryInterventions:
      lang === 'am' ? (r.primaryInterventionsAm || r.primaryInterventions) :
      lang === 'om' ? (r.primaryInterventionsOm || r.primaryInterventions) :
      lang === 'ti' ? (r.primaryInterventionsTi || r.primaryInterventions) :
      r.primaryInterventions,
    beneficiaries:
      lang === 'en' ? r.beneficiaries : r.beneficiaries
  };
}

export function getLocalizedGisProject(p: GISProject, lang: Language) {
  const loc = PROJECT_LOCALE_BY_NO[p.id];
  return {
    name: lang === 'en' ? p.name : (loc?.title[lang] ?? p.name),
    objective: lang === 'en' ? p.objective : (loc?.objective[lang] ?? p.objective),
    location: lang === 'en' ? p.location : (loc?.location[lang] ?? p.location),
    beneficiaries: lang === 'en' ? p.beneficiaries : (loc?.beneficiaries[lang] ?? p.beneficiaries),
    duration: lang === 'en' ? p.duration : (loc?.duration[lang] ?? p.duration),
    sector: getLocalizedSectorName(p.sector, lang),
    status: getLocalizedStatus(p.status, lang),
    region: getLocalizedRegionName(p.region, lang)
  };
}

export function getLocalizedProject(p: Project, lang: Language) {
  const no = p.projectNo ?? (Number(p.id.replace('proj-', '')) || 0);
  const loc = PROJECT_LOCALE_BY_NO[no];
  return {
    title: lang === 'en' ? p.title : (loc?.title[lang] ?? p.title),
    summary: lang === 'en' ? p.summary : (loc?.summary[lang] ?? p.summary),
    objective: lang === 'en' ? (p.objective ?? p.summary) : (loc?.objective[lang] ?? p.objective ?? p.summary),
    woredas_towns: lang === 'en' ? (p.woredas_towns ?? p.region) : (loc?.location[lang] ?? p.woredas_towns ?? p.region),
    beneficiaries: lang === 'en' ? p.beneficiaries : (loc?.beneficiaries[lang] ?? p.beneficiaries),
    duration: lang === 'en' ? p.duration : (loc?.duration[lang] ?? p.duration),
    sector: getLocalizedSectorName(p.sector, lang),
    status: getLocalizedStatus(p.status, lang),
    region: getLocalizedRegionName(p.region, lang),
    goals: lang === 'en' ? p.goals : (loc?.goals?.[lang] ?? p.goals),
    hardComponents: lang === 'en' ? p.hardComponents : (loc?.hardComponents?.[lang] ?? p.hardComponents),
    materialsProvisions: lang === 'en' ? p.materialsProvisions : (loc?.materialsProvisions?.[lang] ?? p.materialsProvisions),
    softComponents: lang === 'en' ? p.softComponents : (loc?.softComponents?.[lang] ?? p.softComponents)
  };
}

const STORY_META: Record<string, { role: LangMap; location: LangMap; sector: LangMap; fullStory: LangMap }> = {
  'story-1': {
    role: {
      en: 'Mother of four & Water Committee Chair',
      am: 'የአራት ልጆች እናት እና የውሃ ኮሚቴ ሊቀመንበር',
      om: 'Haadha ijoollee 4 & Dura-teessuu Koree Bishaanii',
      ti: 'ኣደ 4 ህጻናትን ኣቦ-መንበር ኮሚቴ ማይን'
    },
    location: { en: 'East Hararghe, Oromia', am: 'ምስራቅ ሐረርጌ፣ ኦሮሚያ', om: 'Harargee Bahaa, Oromiyaa', ti: 'ምብራቕ ሐረርጌ፣ ኦሮሚያ' },
    sector: { en: 'Clean Water (WASH)', am: 'ንጹህ ውሃ (WASH)', om: 'Bishaan Qulqulluu', ti: 'ጽሩይ ማይ (WASH)' },
    fullStory: {
      en: 'In the hills of East Hararghe, water collection historically claimed up to a third of a rural woman’s day, exposing young girls to physical risks along treacherous paths. When ADRA Ethiopia partnered with the community to drill a 180-meter solar borehole, Ayantu was elected to lead the 7-person WASHCo committee. Under her supervision, the water point maintains a zero-downtime record, generating modest community tariffs to sustain preventative repairs.',
      am: 'በምስራቅ ሐረርጌ ተራራማ አካባቢዎች ውሃ መቅዳት የሴቶችን ቀን አንድ ሶስተኛ ይወስድ ነበር። አድራ ኢትዮጵያ 180 ሜትር ጥልቀት ያለው የሶላር ጉድጓድ ከቆፈረ በኋላ አያንቱ የ7 አባላት WASHCo ኮሚቴ መሪ ሆና ተመርጣ ጣቢያው ያለማቋረጥ እንዲሰራ እያደረገች ነው።',
      om: 'Gaarreen Harargee Bahaatti bishaan waraabuun yeroo dubartootaa hedduu fudhata ture. Erga ADRAn boolla aduu meetira 180 qotee booda, Ayyantuun koree WASHCo nama 7 hogganuun buufatichi citiinsa tokko malee akka tajaajilu gooteetti.',
      ti: 'ኣብ ጎቦታት ምብራቕ ሐረርጌ ማይ ምቕዳሕ ሲሶ መዓልቲ ኣንስቲ ይወስድ ነይሩ። ኣድራ 180 ሜትሮ ብጸሓይ ዝሰርሕ ዒላ ምስ ኩዓተ፣ ኣያንቱ ንኮሚቴ WASHCo ብምምራሕ ብዘይ ምቁራጽ የገልግል ኣሎ።'
    }
  },
  'story-2': {
    role: { en: 'Pastoralist Mother', am: 'አርብቶ አደር እናት', om: 'Haadha Horsiisee Bultuu', ti: 'ሰብ-ከብቲ ኣደ' },
    location: { en: 'Kelafo District, Somali Region', am: 'ቀላፎ ወረዳ፣ ሶማሌ ክልል', om: 'Aanaa Qalaafoo, Somaalee', ti: 'ወረዳ ቀላፎ፣ ክልል ሶማሌ' },
    sector: { en: 'Nutrition & Health', am: 'ስነ-ምግብ እና ጤና', om: 'Nyaataa fi Fayyaa', ti: 'ኣመጋግባን ጥዕናን' },
    fullStory: {
      en: 'During the prolonged regional drought in the Somali lowlands, family livestock perished, eliminating household milk supplies. Fatima lived over 60 kilometers from the nearest hospital. Through ADRA Ethiopia’s decentralized Community Therapeutic Care (CTC) network, local outreach health workers brought ready-to-use therapeutic food (RUTF) directly to Fatima’s settlement, conducting weekly health check-ups until Hassan surpassed healthy weight percentiles.',
      am: 'በሶማሌ ክልል በተከሰተው ረጅም ድርቅ ምክንያት ከብቶች በሞቱበት ወቅት ፋጡማ ከሆስፒታል 60 ኪ.ሜ ርቀት ላይ ትኖር ነበር። የአድራ የማህበረሰብ ጤና ሰራተኞች RUTF ወደ መንደሯ በማድረስ የሃሰን ጤና ሙሉ በሙሉ እንዲመለስ አድርገዋል።',
      om: 'Hongee dheeraa Somaaleetti beeladoonni dhumanii aannan bade. Faaxumaan hospitaala irraa km 60 fagaattus, hojjettoonni CTC ADRA nyaata yaalaa RUTF kallattiin ganda isheetti fidanii fayyaa Hasaan deebisaniiru.',
      ti: 'ኣብ ነዊሕ ደርቂ ሶማሌ ከብቲ ምስ ሞታ ፋጡማ ካብ ሆስፒታል 60 ኪ.ሜ ርሒቓ ትነብር ነይራ። ሰራሕተኛታት ኣድራ ሕክምናዊ መግቢ RUTF ናብ ጎደቦኣ ብምብጻሕ ሓሰን ሙሉእ ብሙሉእ ሓውዩ።'
    }
  },
  'story-3': {
    role: { en: 'Solar Technician & Coop Founder', am: 'የሶላር ቴክኒሻንና መስራች', om: 'Teeknishaanii Aduu', ti: 'ክኢላ ጸሓይን መስራትን' },
    location: { en: 'Addis Ababa & North Shewa', am: 'አዲስ አበባ እና ሰሜን ሸዋ', om: 'Finfinnee & Shawaa Kaabaa', ti: 'ኣዲስ ኣበባን ሰሜን ሸዋን' },
    sector: { en: 'Green Energy TVET', am: 'አረንጓዴ ኃይል ስልጠና', om: 'TVET Anniisaa Magariisaa', ti: 'ሓምለዋይ ጸዓት TVET' },
    fullStory: {
      en: 'Dawit enrolled in the intensive 6-month Green Energy TVET II cohort at ADRA Ethiopia’s Addis Ababa coordination campus in Kirkos. After passing the Level III national certification exams, Dawit received an incubation starter kit containing specialized photovoltaic meters and safety gear. His cooperative has already installed 22 solar water pumping stations across Oromia and Amhara.',
      am: 'ዳዊት በአድራ ኢትዮጵያ የ6 ወር የአረንጓዴ ኃይል ስልጠና ወስዶ የደረጃ 3 ማረጋገጫ አግኝቷል። በተሰጠው የመነሻ መሳሪያ ድጋፍ ማህበሩ በኦሮሚያና አማራ 22 የሶላር ውሃ ፓምፖችን ገጥሟል።',
      om: 'Daawit leenjii ji’a 6 Anniisaa Aduu ADRA Finfinneetti fudhatee sadarkaa III mirkaneesse. Meeshaa ka’umsaa argateen waldaan isaa Oromiyaa fi Amaaraa keessatti paampii aduu 22 dhaabeera.',
      ti: 'ዳዊት ኣብ ኣዲስ ኣበባ ናይ 6 ወርሒ ስልጠና ሓምለዋይ ጸዓት ወሲዱ ብደረጃ III ምስ ተመረቐ፣ ብዝተዋህቦ መሳርሒ ኣብ ኦሮሚያን ኣምሓራን 22 ጸሓያዊ ፓምፕታት ተኺሉ።'
    }
  },
  'story-4': {
    role: { en: 'Grade 8 Student & Science Chair', am: 'የ8ኛ ክፍል ተማሪ እና ክበብ መሪ', om: 'Barattuu Kutaa 8 & Hoggantuu', ti: 'ተምሃሪት 8ይ ክፍልን መራሒትን' },
    location: { en: 'Sidama Region', am: 'የሲዳማ ክልል', om: 'Naannoo Sidaamaa', ti: 'ክልል ሲዳማ' },
    sector: { en: 'Girls Education (SEAQE)', am: 'የሴቶች ትምህርት (SEAQE)', om: 'Barnoota Shamarranii', ti: 'ትምህርቲ ኣዋልድ (SEAQE)' },
    fullStory: {
      en: 'At the rural Bensa primary school in Sidama, girls absenteeism dropped by 64% after ADRA Ethiopia’s SEAQE II project completed gender-segregated sanitation blocks equipped with running water, alongside distributing dignity hygiene packs and textbooks in Sidama and English languages.',
      am: 'በሲዳማ ቤንሳ ትምህርት ቤት የSEAQE II ፕሮጀክት ውሃ ያላቸው መጸዳጃ ቤቶችን፣ የንጽህና ፓኮችን እና መጽሐፍትን ካቀረበ በኋላ የሴቶች ከትምህርት መቅረት በ64% ቀንሷል።',
      om: 'Mana barumsaa Baansaa keessatti erga SEAQE II manneen fincaanii addaa, meeshaa qulqullinaa fi kitaabota Afaan Sidaamaa fi Ingiliiziin dhiyeessee booda, hafuun shamarranii %64 hir’ateera.',
      ti: 'ኣብ ገጠር ቤት-ትምህርቲ ቤንሳ ሲዳማ መደብ SEAQE II ብማይ ዝተማልኡ ሽቓቓትን መጻሕፍትን ምስ ኣዳለወ፣ ምትራፍ ኣዋልድ ብ64% ነኪዩ።'
    }
  },
  'story-5': {
    role: { en: 'Pastoralist Community Elder', am: 'የአርብቶ አደር የሀገር ሽማግሌ', om: 'Jaarsa Hawaasa Horsiisee Bulaa', ti: 'ዓቢ ሰብ-ከብቲ ሽማግለ' },
    location: { en: 'Gode Woreda, Somali Region', am: 'ጎዴ ወረዳ፣ ሶማሌ ክልል', om: 'Aanaa Goodee, Somaalee', ti: 'ወረዳ ጎዴ፣ ክልል ሶማሌ' },
    sector: { en: 'Emergency Cash (MPCA)', am: 'አስቸኳይ የገንዘብ ድጋፍ', om: 'Deeggarsa Maallaqaa (MPCA)', ti: 'ህጹጽ ሓገዝ ገንዘብ' },
    fullStory: {
      en: 'During severe pastoral droughts in the Shabelle zone, market-based cash assistance proved far more dignifying than bulky food rations. Gedi received 12,000 ETB via digital mobile banking, enabling his household to buy locally produced sorghum, animal fodder, and medicine.',
      am: 'በሸበሌ ዞን ድርቅ ወቅት በሞባይል ገንዘብ የተሰጠው 12,000 ብር ድጋፍ ጌዲ ለቤተሰቡ ማሽላ፣ ለከብቶቹ መኖና መድሃኒት በክብር እንዲገዛ አስችሎታል።',
      om: 'Hongee Shabaleetti Geediin baankii moobaayilaatiin qarshii 12,000 argatee bishingaa, nyaata loonii fi qoricha kabajaan bitateera.',
      ti: 'ኣብ ደርቂ ዞባ ሸበሌ ጌዲ ብሞባይል ባንኪ 12,000 ብር ብምቕባል መሸላ፣ መግቢ ከብትን መድሓኒትን ብኽብሪ ክዕድግ ክኢሉ።'
    }
  },
  'story-6': {
    role: { en: 'Coop Chair & VSLA Founder', am: 'የህብረት ስራ እና VSLA መሪ', om: 'Dura-teessuu Waldaa & VSLA', ti: 'መራሒት ማሕበርን VSLAን' },
    location: { en: 'North Shewa, Amhara Region', am: 'ሰሜን ሸዋ፣ አማራ ክልል', om: 'Shawaa Kaabaa, Amaaraa', ti: 'ሰሜን ሸዋ፣ ክልል ኣምሓራ' },
    sector: { en: 'Climate-Smart Agriculture', am: 'ዘመናዊ ግብርና', om: 'Qonna Qilleensaaf Mijaawaa', ti: 'ንክሊማ ዝምችእ ሕርሻ' },
    fullStory: {
      en: 'Leading 42 female smallholders along the Jemma river valley, Wubit helped oversee the installation of a community solar pump funded by ADRA. With earnings from multi-season horticulture, every woman in the group has opened a personal commercial bank account.',
      am: 'ውቢት በጀማ ወንዝ ዳር 42 ሴት አርሶ አደሮችን በመምራት የሶላር መስኖ ፓምፕ አስተክላለች። በአሁኑ ወቅት ሁሉም የቡድኑ አባላት የራሳቸውን የንግድ ባንክ ሂሳብ ከፍተዋል።',
      om: 'Wubiit dubartoota 42 Laga Jammaa biratti hogganuun paampii jallisii aduu dhaabsifte. Miseensonni hundi herrega baankii dhuunfaa banataniiru.',
      ti: 'ውቢት ኣብ ሩባ ጀማ 42 ሓረስቶት ደቂ-ኣንስትዮ ብምምራሕ ጸሓያዊ ፓምፕ መስኖ ተኺላ፣ ኩለን ኣባላት ድማ ውልቃዊ ሕሳብ ባንኪ ከፊተን።'
    }
  },
  'story-7': {
    role: { en: 'Health Extension Leader', am: 'የጤና ኤክስቴንሽን መሪ', om: 'Hogganaa Ekisteenshinii Fayyaa', ti: 'መራሒት ኤክስተንሽን ጥዕና' },
    location: { en: 'Berhale, Afar Region', am: 'በርሃሌ፣ አፋር ክልል', om: 'Barhaalee, Affaar', ti: 'በርሃለ፣ ክልል ዓፋር' },
    sector: { en: 'Maternal & Child Health', am: 'የእናቶች እና ህጻናት ጤና', om: 'Fayyaa Haadholii fi Daa’immanii', ti: 'ጥዕና ኣዴታትን ህጻናትን' },
    fullStory: {
      en: 'Fatuma leads a 5-person mobile nutrition team across salt plains in Afar. By training mothers to recognize danger signs with color-coded MUAC tapes, her team reduced severe acute malnutrition mortality across 14 kebeles to less than 1.5%.',
      am: 'ፋጡማ በአፋር የ5 አባላት ተንቀሳቃሽ የስነ-ምግብ ቡድን ትመራለች። እናቶች የMUAC መለኪያን እንዲጠቀሙ በማሰልጠን በ14 ቀበሌዎች የህጻናትን ሞት ከ1.5% በታች ቀንሳለች።',
      om: 'Faaxumaan garee nyaataa nama 5 Affaar keessatti hoogganuun haadholiin MUAC fayyadamuu barsiistee du’a hanqina nyaataa %1.5 gadi buustetti.',
      ti: 'ፋጡማ ኣብ ዓፋር 5 ኣባላት ዘለውዋ ጉጅለ ብምምራሕ፣ ኣዴታት MUAC ክጥቀማ ብምስልጣን ሞት ህጻናት ኣብ 14 ጣብያታት ትሕቲ 1.5% ኣውሪዳ።'
    }
  },
  'story-8': {
    role: { en: 'Solar & WASH Lead Engineer', am: 'የሶላር እና ውሃ መሪ መሀንዲስ', om: 'Injiinera Aduu fi WASH', ti: 'መራሒ መሃንዲስ ጸሓይን WASHን' },
    location: { en: 'Gambella & South Ethiopia', am: 'ጋምቤላ እና ደቡብ ኢትዮጵያ', om: 'Gambeellaa & Itoophiyaa Kibbaa', ti: 'ጋምቤላን ደቡብ ኢትዮጵያን' },
    sector: { en: 'Clean Water & Energy', am: 'ንጹህ ውሃ እና ኃይል', om: 'Bishaan Qulqulluu fi Anniisaa', ti: 'ጽሩይ ማይን ጸዓትን' },
    fullStory: {
      en: 'Solomon has supervised the electro-mechanical installation of over 45 solar pumping stations across Ethiopia with ADRA. His focus on training local youth mechanics ensures that every installation maintains a 99% operational uptime year-round.',
      am: 'ሰለሞን ከአድራ ጋር በመላው ኢትዮጵያ ከ45 በላይ የሶላር ውሃ ፓምፕ ጣቢያዎችን ገንብቷል። የአካባቢ ወጣት ባለሙያዎችን በማሰልጠኑ ጣቢያዎቹ 99% ያለማቋረጥ ይሰራሉ።',
      om: 'Solomoon Itoophiyaa keessatti buufataalee paampii aduu 45+ ijaareera. Dargaggoota naannoo leenjisuun hojii itti fufiinsa %99 mirkaneesseera.',
      ti: 'ሰለሞን ምስ ኣድራ ልዕሊ 45 ጸሓያዊ ፓምፕታት ማይ ተኺሉ። ናይቲ ከባቢ መናእሰይ ብምስልጣን 99% ቀጻሊ ስራሕ ኣረጋጊጹ።'
    }
  }
};

export function getLocalizedStory(story: Story, lang: Language) {
  const meta = STORY_META[story.id];
  const quote =
    lang === 'am' ? story.quoteAm :
    lang === 'om' ? (story.quoteOm || story.quote) :
    lang === 'ti' ? (story.quoteTi || story.quote) :
    story.quote;
  return {
    role: meta?.role[lang] ?? story.role,
    location: meta?.location[lang] ?? story.location,
    sector: meta?.sector[lang] ?? story.sector,
    quote,
    fullStory: meta?.fullStory[lang] ?? story.fullStory
  };
}

const OPP_EXTRA_MAP: Record<string, { location: LangMap; deadline: LangMap }> = {
  'tender-01': {
    location: { en: 'Somali Region & Afar Region', am: 'ሶማሌ እና አፋር ክልሎች', om: 'Naannoo Somaalee & Affaar', ti: 'ክልላት ሶማሌን ዓፋርን' },
    deadline: { en: 'November 15, 2026', am: 'ህዳር 15, 2026', om: 'Sad. 15, 2026', ti: 'ሕዳር 15, 2026' }
  },
  'tender-02': {
    location: { en: 'Sidama & Oromia (Field based)', am: 'ሲዳማ እና ኦሮሚያ (መስክ)', om: 'Sidaamaa & Oromiyaa (Dirree)', ti: 'ሲዳማን ኦሮሚያን (መስኪ)' },
    deadline: { en: 'November 28, 2026', am: 'ህዳር 28, 2026', om: 'Sad. 28, 2026', ti: 'ሕዳር 28, 2026' }
  },
  'career-01': {
    location: { en: 'Gode, Somali (travel to Kelafo)', am: 'ጎዴ፣ ሶማሌ (ወደ ቀላፎ ጉዞ)', om: 'Goodee, Somaalee', ti: 'ጎዴ፣ ሶማሌ (ጉዕዞ ቀላፎ)' },
    deadline: { en: 'November 10, 2026', am: 'ህዳር 10, 2026', om: 'Sad. 10, 2026', ti: 'ሕዳር 10, 2026' }
  },
  'career-02': {
    location: { en: 'Hawassa / Field Coordination', am: 'ሀዋሳ / የመስክ ማስተባበሪያ', om: 'Hawaasaa / Qindoomina', ti: 'ሀዋሳ / ምውህሃድ መስኪ' },
    deadline: { en: 'November 20, 2026', am: 'ህዳር 20, 2026', om: 'Sad. 20, 2026', ti: 'ሕዳር 20, 2026' }
  },
  'tender-03': {
    location: { en: 'Oromia, Amhara & Somali', am: 'ኦሮሚያ፣ አማራ እና ሶማሌ', om: 'Oromiyaa, Amaaraa & Somaalee', ti: 'ኦሮሚያ፣ ኣምሓራን ሶማሌን' },
    deadline: { en: 'December 05, 2026', am: 'ታህሳስ 05, 2026', om: 'Mud. 05, 2026', ti: 'ታሕሳስ 05, 2026' }
  },
  'tender-04': {
    location: { en: 'Afar (Berhale) & Somali (Dollo Ado)', am: 'አፋር (በርሃሌ) እና ሶማሌ (ዶሎ አዶ)', om: 'Affaar (Barhaalee) & Somaalee', ti: 'ዓፋር (በርሃለ)ን ሶማሌ (ዶሎ ኣዶ)ን' },
    deadline: { en: 'December 12, 2026', am: 'ታህሳስ 12, 2026', om: 'Mud. 12, 2026', ti: 'ታሕሳስ 12, 2026' }
  },
  'career-03': {
    location: { en: 'Addis Ababa (30% Field Travel)', am: 'አዲስ አበባ (30% የመስክ ጉዞ)', om: 'Finfinnee (Imala Dirree %30)', ti: 'ኣዲስ ኣበባ (30% ጉዕዞ መስኪ)' },
    deadline: { en: 'December 01, 2026', am: 'ታህሳስ 01, 2026', om: 'Mud. 01, 2026', ti: 'ታሕሳስ 01, 2026' }
  },
  'career-04': {
    location: { en: 'Dire Dawa / Eastern Operations', am: 'ድሬዳዋ / ምስራቅ ኦፕሬሽን', om: 'Dirree Dawaa / Baha', ti: 'ድሬዳዋ / ስርሒት ምብራቕ' },
    deadline: { en: 'December 08, 2026', am: 'ታህሳስ 08, 2026', om: 'Mud. 08, 2026', ti: 'ታሕሳስ 08, 2026' }
  }
};

export function getLocalizedOpportunity(o: Opportunity, lang: Language) {
  const extra = OPP_EXTRA_MAP[o.id];
  return {
    title:
      lang === 'am' ? (o.titleAm || o.title) :
      lang === 'om' ? (o.titleOm || o.title) :
      lang === 'ti' ? (o.titleTi || o.title) :
      o.title,
    category:
      lang === 'am' ? (o.categoryAm || o.category) :
      lang === 'om' ? (o.categoryOm || o.category) :
      lang === 'ti' ? (o.categoryTi || o.category) :
      o.category,
    location: extra?.location[lang] ?? o.location,
    deadline: extra?.deadline[lang] ?? o.deadline,
    description:
      lang === 'am' ? (o.descriptionAm || o.description) :
      lang === 'om' ? (o.descriptionOm || o.description) :
      lang === 'ti' ? (o.descriptionTi || o.description) :
      o.description,
    requirements:
      lang === 'am' ? (o.requirementsAm || o.requirements) :
      lang === 'om' ? (o.requirementsOm || o.requirements) :
      lang === 'ti' ? (o.requirementsTi || o.requirements) :
      o.requirements
  };
}

export function getLocalizedPublication(pub: Publication, lang: Language) {
  return {
    title:
      lang === 'am' ? (pub.titleAm || pub.title) :
      lang === 'om' ? (pub.titleOm || pub.title) :
      lang === 'ti' ? (pub.titleTi || pub.title) :
      pub.title,
    category:
      lang === 'am' ? (pub.categoryAm || pub.category) :
      lang === 'om' ? (pub.categoryOm || pub.category) :
      lang === 'ti' ? (pub.categoryTi || pub.category) :
      pub.category,
    summary:
      lang === 'am' ? (pub.summaryAm || pub.summary) :
      lang === 'om' ? (pub.summaryOm || pub.summary) :
      lang === 'ti' ? (pub.summaryTi || pub.summary) :
      pub.summary
  };
}
