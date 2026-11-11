import { Language } from '../types';

export type LangMap<T = string> = Record<Language, T>;

export interface FocusAreaStat {
  value: LangMap;
  label: LangMap;
}

export interface FocusAreaData {
  id: 'education' | 'health' | 'livelihood' | 'disaster-response' | 'wash' | 'economic-growth' | 'peace-building';
  tagline: LangMap;
  title: LangMap;
  description: LangMap;
  fullNarrative: LangMap;
  image: string;
  secondaryImage?: string;
  metrics: LangMap;
  stats: FocusAreaStat[];
  details: LangMap<string[]>;
  spotlightStory: {
    quote: LangMap;
    author: LangMap;
    location: LangMap;
  };
  activeWoredas: LangMap;
  partners: LangMap<string[]>;
}

export const FOCUS_AREAS_DATA: FocusAreaData[] = [
  {
    id: 'education',
    tagline: {
      en: 'SEAQE II, Inclusive Schools & Green Energy TVET',
      am: 'ፍትሃዊና አካታች ጥራት ያለው ትምህርት እና የሙያ ስልጠና',
      om: 'SEAQE II, Manneen Barumsaa fi TVET Anniisaa Aduu',
      ti: 'SEAQE II፣ ሓቛፊ ትምህርትን ሓምለዋይ TVETን'
    },
    title: {
      en: 'Education & Green Energy TVET',
      am: 'ትምህርት እና ታዳሽ ኃይል ቴክኒክና ሙያ',
      om: 'Barnootaa fi TVET Anniisaa Aduu',
      ti: 'ትምህርትን ሓምለዋይ ጸዓት TVETን'
    },
    description: {
      en: 'Inclusive access to quality schooling, complete secondary/preparatory construction, solar PV training, and MoWE curriculum handover.',
      am: 'ለሁሉም ተደራሽ የሆነ ጥራት ያለው ትምህርት፣ የትምህርት ቤት ግንባታ፣ የሶላር ቴክኖሎጂ ስልጠና እና የካሪኩለም ርክክብ።',
      om: 'Carraa barnootaa hunda hammataa, ijaarsa mana barumsaa, leenjii PV soolaarii fi kaarikulamii MoWE waliin qophaaʼe.',
      ti: 'ተበጻሕነት ጽሩይ ትምህርቲ፣ ህንጸት ካልኣይ ደረጃ ኣብያተ-ትምህርቲ፣ ስልጠና ጸሓይን ካሪኩለም MoWEን።'
    },
    fullNarrative: {
      en: 'Through ADRA Ethiopia’s flagship SEAQE II initiative and vocational programs, we construct complete secondary and preparatory schools, expand classrooms, supply braille and assistive learning aids, and build girls dignity washrooms. In green TVET, we pioneer solar PV qualifications with curricula handed over to the Ministry of Water & Energy (MoWE).',
      am: 'አድራ ኢትዮጵያ በSEAQE II ፕሮጀክት እና በቴክኒክና ሙያ ዘርፍ ሙሉ ሁለተኛና መሰናዶ ትምህርት ቤቶችን ይገነባል፤ ለሴት ተማሪዎች የንጽህና ክፍሎችን ያሟላል፤ ከውሃና ኢነርጂ ሚኒስቴር ጋር በመተባበር የሶላር ስልጠና ካሪኩለም አስረክቧል።',
      om: 'Sagantaa SEAQE II fi leenjii ogummaatiin manneen barumsaa qophaaʼinaa fi sadarkaa 2ffaa guutuu ijaarra; kitaabota bireeyilii fi kutaa qulqullinaa shamarraniif dhiyeessina; kaarikulamii teeknooloojii soolaarii MoWE waliin qopheessine.',
      ti: 'ብፕሮጀክት SEAQE IIን ስልጠና ሞያን ምሉእ ካልኣይን መዳለውን ኣብያተ-ትምህርቲ ይሃንጽ፣ ንኣዋልድ ሽቓቓት ጽሬት የዳሉ፣ ምስ ሚኒስትሪ ማይን ጸዓትን (MoWE) ብምትሕብባር ካሪኩለም ጸሓይ የረክብ።'
    },
    image: '/assets/images/adra_education_girls_1792612496863.jpg',
    secondaryImage: '/assets/images/adra_hero_community_1792612495148.jpg',
    metrics: {
      en: '85,000+ students & TVET trainees',
      am: '85,000+ ተማሪዎችና ሰልጣኞች',
      om: 'Barattootaa & leenjitoota 85,000+',
      ti: '85,000+ ተምሃሮን ሰልጠንትን'
    },
    stats: [
      {
        value: { en: '85,000+', am: '85,000+', om: '85,000+', ti: '85,000+' },
        label: {
          en: 'Students & Trainees',
          am: 'ተማሪዎችና ሰልጣኞች',
          om: 'Barattoota Deeggaraman',
          ti: 'ተምሃሮን ሰልጠንትን'
        }
      },
      {
        value: { en: '182', am: '182', om: '182', ti: '182' },
        label: {
          en: 'Classrooms & Labs Built',
          am: 'ክፍሎችና ላቦራቶሪዎች',
          om: 'Daree fi Laabii Ijaaram.',
          ti: 'ዝተሃንጹ ክፍልታት'
        }
      },
      {
        value: { en: '2 Full', am: '2 ሙሉ', om: '2 Guutuu', ti: '2 ምሉእ' },
        label: {
          en: 'Secondary / Prep Schools',
          am: 'ሙሉ ሁለተኛ ደረጃ ት/ቤቶች',
          om: 'M/B Qophaaʼinaa & 2ffaa',
          ti: 'ካልኣይ/መዳለዊ ት/ቲ'
        }
      },
      {
        value: { en: 'MoWE', am: 'MoWE', om: 'MoWE', ti: 'MoWE' },
        label: {
          en: 'Curriculum Partner',
          am: 'የካሪኩለም አጋር',
          om: 'Waltaʼiinsa Kaarikulamii',
          ti: 'መሻርኽቲ ካሪኩለም'
        }
      }
    ],
    details: {
      en: [
        'SEAQE II: 1 Complete Preparatory School (Negelle Arsi) and 1 Complete Secondary School (ATJK)',
        'Classroom expansion blocks across Modjo, Bora, Meki, and Bulbula towns in Oromia',
        'Accredited Solar PV Technician curriculum handed over to Ministry of Water & Energy (MoWE)',
        'VQEP solar employment skills across Dire Dawa, Afar Zone 3, Arba Minch, and Wolkite',
        'Menstrual dignity washrooms keeping adolescent girls enrolled through graduation',
        'Braille textbooks, ramps, and inclusive pedagogy across 32 cluster schools'
      ],
      am: [
        'SEAQE II: በነገሌ አርሲ ሙሉ መሰናዶ ት/ቤት እና በአዳሚ ቱሉ ሙሉ ሁለተኛ ደረጃ ት/ቤት ግንባታ',
        'በሞጆ፣ ቦራ፣ መቂ እና ቡልቡላ የመማሪያ ክፍሎች ማስፋፊያ ግንባታ',
        'ከውሃና ኢነርጂ ሚኒስቴር (MoWE) ጋር እውቅና ያለው የሶላር ቴክኖሎጂ ካሪኩለም ርክክብ',
        'በድሬዳዋ፣ አፋር ዞን 3፣ አርባ ምንጭ እና ወልቂጤ የወጣቶች የሶላር ሙያ ስልጠና',
        'የሴት ተማሪዎችን መቅረት ለመቀነስ የተገነቡ የንጽህና መጠበቂያ ክፍሎች',
        'በ32 ክላስተር ት/ቤቶች የብሬል መጻሕፍት እና የአካል ጉዳተኞች አጋዥ መሳሪያዎች'
      ],
      om: [
        'SEAQE II: Mana barumsaa qophaaʼinaa guutuu Nageellee Arsii fi sadarkaa 2ffaa ATJKtti',
        'Babalʼina daree barumsaa Mojoo, Booraa, Maqii fi Bulbulaatti',
        'Kaarikulamii ogummaa Solar PV mirkanaaʼe Ministeera Bishaan fi Anniisaa (MoWE)f kenname',
        'Sagantaa hojii soolaarii VQEP Dirree Dawaa, Affaar, Arbaa Minch fi Walqixxeetti',
        'Manneen fincaanii fi tajaajila qulqullinaa harcaatii shamarranii hirʼisan',
        'Kitaabota bireeyilii, meeshaalee qaama miidhamtootaa fi leenjii barsiisotaa M/B 32 keessatti'
      ],
      ti: [
        'SEAQE II: 1 ምሉእ መዳለዊ ቤት-ትምህርቲ (ነገሌ ኣርሲ)ን 1 ካልኣይ ደረጃ (ATJK)ን',
        'ምስፍሕፋሕ ክፍልታት ትምህርቲ ኣብ ሞጆ፣ ቦራ፣ መቂን ቡልቡላን ኦሮሚያ',
        'ንሚኒስትሪ ማይን ጸዓትን (MoWE) ዝተረከበ ፍቓድ ዘለዎ ካሪኩለም ቴክኖሎጂ ጸሓይ',
        'ስልጠና ስራሕ VQEP ኣብ ድሬዳዋ፣ ዓፋር ዞባ 3፣ ኣርባ ምንጭን ወልቂጤን',
        'ኣዋልድ ትምህርተን ከየቋርጻ ዝሕግዝ ንጹህ መጸዳድዒታት',
        'ኣብ 32 ኣብያተ-ትምህርቲ መጻሕፍቲ ብሬልን ሓቛፊ መሳርሕን'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'Before ADRA built the complete secondary school in our woreda, children had to walk miles or leave school after grade 8. Today we have science labs, solar power, and girls excelling nationwide.',
        am: 'አድራ በወረዳችን ሙሉ ሁለተኛ ደረጃ ትምህርት ቤት ከመገንባቱ በፊት ልጆች ረጅም ርቀት ይጓዙ ነበር። ዛሬ ግን የሳይንስ ላቦራቶሪና የሶላር መብራት አግኝተን ልጆቻችን በብቃት እየተማሩ ነው።',
        om: 'Osoomaa ADRAn mana barumsaa sadarkaa 2ffaa aanaa keenyatti hin ijaarin, ijoolleen kutaa 8 booda addaan kutu turan. Harʼa laabii saayinsii fi ibsaa aduu qabna.',
        ti: 'ኣድራ ኣብ ወረዳና ምሉእ ካልኣይ ደረጃ ቤት-ትምህርቲ ቅድሚ ምህናጹ ህጻናት ነዊሕ ይጓዓዙ ነይሮም። ሎሚ ላቦራቶሪን መብራህቲ ፀሓይን ኣለና።'
      },
      author: {
        en: 'Dibaba, PTSA Chair',
        am: 'ዲባባ፣ የወላጅ-መምህር ኮሚቴ መሪ',
        om: 'Dibaabaa, Dura-taaʼaa PTSA',
        ti: 'ዲባባ፣ ኣቦ-መንበር PTSA'
      },
      location: {
        en: 'ATJK Woreda, Oromia',
        am: 'አዳሚ ቱሉ (ATJK)፣ ኦሮሚያ',
        om: 'Aanaa ATJK, Oromiyaa',
        ti: 'ወረዳ ATJK፣ ኦሮሚያ'
      }
    },
    activeWoredas: {
      en: 'Negelle Arsi, ATJK, Modjo, Bora, Meki, Bulbula, Dire Dawa, Wolkite',
      am: 'ነገሌ አርሲ፣ ATJK፣ ሞጆ፣ ቦራ፣ መቂ፣ ቡልቡላ፣ ድሬዳዋ፣ ወልቂጤ',
      om: 'Nageellee Arsii, ATJK, Mojoo, Booraa, Maqii, Bulbulaa, Dirree Dawaa, Walqixxee',
      ti: 'ነገሌ ኣርሲ፣ ATJK፣ ሞጆ፣ ቦራ፣ መቂ፣ ቡልቡላ፣ ድሬዳዋ፣ ወልቂጤ'
    },
    partners: {
      en: ['Ministry of Water & Energy', 'Ministry of Education', 'NORAD', 'ADRA Norway', 'GIZ'],
      am: ['የውሃና ኢነርጂ ሚኒስቴር', 'ትምህርት ሚኒስቴር', 'NORAD', 'አድራ ኖርዌይ', 'GIZ'],
      om: ['Ministeera Bishaan & Anniisaa', 'Ministeera Barnootaa', 'NORAD', 'ADRA Norway', 'GIZ'],
      ti: ['ሚኒስትሪ ማይን ጸዓትን', 'ሚኒስትሪ ትምህርቲ', 'NORAD', 'ኣድራ ኖርዌይ', 'GIZ']
    }
  },
  {
    id: 'health',
    tagline: {
      en: 'CMAM, TSFP, Maternal Care & Yirgalem Medical College',
      am: 'የማህበረሰብ ጤና፣ ስነ-ምግብ፣ የእናቶች ክብካቤ እና የይርጋለም ሜዲካል ኮሌጅ',
      om: 'CMAM, TSFP, Fayyaa Haadholii & Kolleejjii Yaalaa Yirgaalam',
      ti: 'CMAM፣ TSFP፣ ክንክን ኣዴታትን ኮሌጅ ሕክምና ይርጋለምን'
    },
    title: {
      en: 'Health & Nutrition',
      am: 'ጤና እና ስነ-ምግብ',
      om: 'Fayyaa fi Nyaata Madaalawaa',
      ti: 'ጥዕናን ኣመጋግባን'
    },
    description: {
      en: 'CMAM/TSFP acute malnutrition treatment, pregnant goat transfers for child protein, HIV/AIDS awareness, and Yirgalem Medical College support.',
      am: 'የተመጣጠነ ምግብ እጥረት ህክምና (CMAM/TSFP)፣ ለእናቶች የእርጉዝ ፍየሎች ድጋፍ እና ለይርጋለም ሜዲካል ኮሌጅ የ65 መቀመጫ አውቶቡስና ላቦራቶሪ።',
      om: 'Yaala hanqina nyaataa CMAM/TSFP, deeggarsa reʼoota rimaa haadholiif fi baasii teessoo 65 & laabii Yirgaalamiif kenname.',
      ti: 'ሕክምና ሕጽረት መግቢ CMAM/TSFP፣ ንኣዴታት ሓገዝ ጥንስቲ ኣጣል፣ ከምኡውን ንኮሌጅ ይርጋለም 65-መንበር ኣውቶቡስን ላቦራቶርን።'
    },
    fullNarrative: {
      en: 'ADRA Ethiopia leads community health interventions across pastoralist and conflict-affected zones via CMAM and TSFP clinics, RUTF nutrition therapy, and pregnant goat transfers for household milk protein. We also donated a 65-seater clinical rotation bus and advanced microbiology lab equipment to Yirgalem Medical College.',
      am: 'አድራ ኢትዮጵያ በCMAM እና TSFP አማካኝነት አጣዳፊ የተመጣጠነ ምግብ እጥረትን ያክማል፤ ለሚያጠቡ እናቶች እርጉዝ ፍየሎችን በመስጠት የህጻናትን የወተት ፍላጎት ያሟላል። ለይርጋለም ሜዲካል ኮሌጅ የ65 መቀመጫ አውቶቡስ እና የማይክሮባዮሎጂ ላቦራቶሪ መሳሪያዎችን ሰጥቷል።',
      om: 'ADRA Itoophiyaan karaa CMAM fi TSFP hanqina nyaataa cimaa yaala; haadholiif reʼoota rimaa kennee aannan daaʼimmanii mirkaneessa. Kolleejjii Yaalaa Yirgaalamiifis baasii barattootaa 65 fi laabii maayikiroobaayooloojii arjoomeera.',
      ti: 'ኣድራ ኢትዮጵያ ብCMAMን TSFPን ብርቱዕ ሕጽረት መግቢ የሕክም፤ ንመጥበውቲ ኣዴታት ጥንስቲ ኣጣል ብምዕዳል ጸባ ህጻናት የረጋግጽ። ንኮሌጅ ሕክምና ይርጋለም ድማ 65-መንበር ኣውቶቡስን ዘመናዊ ላቦራቶርን ወፍዩ።'
    },
    image: '/assets/images/adra_emergency_health_1792612497133.jpg',
    secondaryImage: '/assets/images/humanitarian_tech_dignity_1792616605305.jpg',
    metrics: {
      en: '310,000+ mothers & infants',
      am: '310,000+ እናቶችና ህፃናት',
      om: 'Haadholii & ijoollee 310,000+',
      ti: '310,000+ ኣዴታትን ህጻናትን'
    },
    stats: [
      {
        value: { en: '310,000+', am: '310,000+', om: '310,000+', ti: '310,000+' },
        label: {
          en: 'Mothers & Children',
          am: 'እናቶችና ህፃናት',
          om: 'Haadholii & Daaʼimman',
          ti: 'ኣዴታትን ህጻናትን'
        }
      },
      {
        value: { en: '65-Seat', am: '65-መቀመጫ', om: 'Teessoo 65', ti: '65-መንበር' },
        label: {
          en: 'Yirgalem Clinical Bus',
          am: 'ለይርጋለም የተሰጠ አውቶቡስ',
          om: 'Baasii Yirgaalamiif',
          ti: 'ንይርጋለም ዝተዋህበ ኣውቶቡስ'
        }
      },
      {
        value: { en: '94.2%', am: '94.2%', om: '94.2%', ti: '94.2%' },
        label: {
          en: 'CMAM Recovery Rate',
          am: 'የCMAM የማዳን ምጣኔ',
          om: 'Fayyina CMAM',
          ti: 'ምድሓን CMAM'
        }
      },
      {
        value: { en: '1,500+', am: '1,500+', om: '1,500+', ti: '1,500+' },
        label: {
          en: 'Pregnant Goats Gifted',
          am: 'የተከፋፈሉ እርጉዝ ፍየሎች',
          om: 'Reʼoota Rimaa Raabsaman',
          ti: 'ዝተዓደላ ጥንስቲ ኣጣል'
        }
      }
    ],
    details: {
      en: [
        'CMAM and Targeted Supplementary Feeding Programs (TSFP) for SAM & MAM malnutrition',
        'Distribution of healthy pregnant goats to lactating mothers for household dairy protein',
        'Institutional grant to Yirgalem Medical College: 65-seater outreach bus & microbiology lab',
        'Maternal & Child Health (MCH), antenatal care, and rural health post upgrades',
        'HIV/AIDS awareness, voluntary testing, and psychosocial support (PSSEO in Tigray)'
      ],
      am: [
        'ለህጻናት እና ለእናቶች የማህበረሰብ አጣዳፊ የተመጣጠነ ምግብ እጥረት ህክምና (CMAM/TSFP)',
        'ለሚያጠቡ እናቶች የእርጉዝ ፍየሎች ስርጭት ለልጆች ዕለታዊ የወተትና የፕሮቲን ምግብ',
        'ለይርጋለም ሜዲካል ኮሌጅ የ65 መቀመጫ የክሊኒክ አውቶቡስ እና የማይክሮባዮሎጂ ላቦራቶሪ ድጋፍ',
        'የእናቶች እና ህጻናት ጤና (MCH) እንዲሁም የቅድመ ወሊድ ክትትል',
        'የኤችአይቪ/ኤድስ ግንዛቤ፣ በፈቃደኝነት ምርመራ እና የስነ-ልቦና ድጋፍ (PSSEO በትግራይ)'
      ],
      om: [
        'Yaala hanqina nyaataa cimaa hawaasa keessatti (CMAM & TSFP)',
        'Haadholii harma hoosisaniif reʼoota rimaa aannan manaatiif kennuu',
        'Kolleejjii Yaalaa Yirgaalamiif baasii barattootaa 65 fi laabii maayikiroobaayooloojii',
        'Fayyaa haadholii fi daaʼimmanii (MCH) buufataalee baadiyyaatti cimsuu',
        'Hubannoo HIV/AIDS fi deeggarsa xiin-sammuu (PSSEO Tigraayitti)'
      ],
      ti: [
        'ሕክምና ብርቱዕ ሕጽረት መግቢ ኣብ ማሕበረሰብ (CMAM & TSFP)',
        'ንመጥበውቲ ኣዴታት ንጸባ ህጻናት ጥንስቲ ኣጣል ምዕዳል',
        'ንኮሌጅ ሕክምና ይርጋለም 65-መንበር ኣውቶቡስን መሳርሒ ላቦራቶርን ምብርካት',
        'ጥዕና ኣዴታትን ህጻናትን (MCH) ኣብ ገጠራት ምሕያል',
        'ግንዛበ HIV/AIDSን ስነ-ኣእምሮኣዊ ድጋፍን (PSSEO ኣብ ትግራይ)'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'The microbiology lab and 65-seater bus donated by ADRA enabled our medical students and doctors to run rural outreach rotations and diagnose diseases across remote clinics.',
        am: 'አድራ ለይርጋለም ሜዲካል ኮሌጅ የሰጠን የ65 መቀመጫ አውቶቡስና የላቦራቶሪ መሣሪያዎች ተማሪዎቻችን ወደ ገጠር በመሄድ ፈጣን ምርመራ እንዲያደርጉና ህይወት እንዲያድኑ አግዞናል።',
        om: 'Laabiin maayikiroobaayooloojii fi baasiin teessoo 65 ADRAn arjoome barattoonni keenya baadiyyaatti tajaajila yaalaa akka kennan gargaareera.',
        ti: 'ኣድራ ዝወፈየና ላቦራቶርን 65-መንበር ኣውቶቡስን ተምሃሮና ናብ ገጠር ወፊሮም መርመራ ከካይዱን ህይወት ከድሕኑን ኣኽኢሉዎም።'
      },
      author: {
        en: 'Clinical Faculty Director',
        am: 'የክሊኒካል ትምህርት ዳይሬክተር',
        om: 'Daarektara Yaalaa Kolleejjichaa',
        ti: 'ዳይሬክተር ክሊኒካል ትምህርቲ'
      },
      location: {
        en: 'Yirgalem Medical College, Sidama',
        am: 'ይርጋለም ሜዲካል ኮሌጅ፣ ሲዳማ',
        om: 'Kolleejjii Yaalaa Yirgaalam, Sidaamaa',
        ti: 'ኮሌጅ ሕክምና ይርጋለም፣ ሲዳማ'
      }
    },
    activeWoredas: {
      en: 'Yirgalem, Adadle, Mekelle, Shire, Dollo Ado, Kelafo, Berhale',
      am: 'ይርጋለም፣ አዳድሌ፣ መቀሌ፣ ሽሬ፣ ዶሎ አዶ፣ ቀላፎ፣ በርሃሌ',
      om: 'Yirgaalam, Adaadilee, Maqalee, Shiree, Doolloo Addoo, Qalaafoo, Barhaalee',
      ti: 'ይርጋለም፣ ኣዳድሌ፣ መቐለ፣ ሽረ፣ ዶሎ ኣዶ፣ ቀላፎ፣ በርሃለ'
    },
    partners: {
      en: ['Ministry of Health', 'Yirgalem Medical College', 'USAID / BHA', 'WFP', 'SDC'],
      am: ['የጤና ሚኒስቴር', 'ይርጋለም ሜዲካል ኮሌጅ', 'USAID / BHA', 'WFP', 'SDC'],
      om: ['Ministeera Fayyaa', 'Kolleejjii Yirgaalam', 'USAID / BHA', 'WFP', 'SDC'],
      ti: ['ሚኒስትሪ ጥዕና', 'ኮሌጅ ይርጋለም', 'USAID / BHA', 'WFP', 'SDC']
    }
  },
  {
    id: 'livelihood',
    tagline: {
      en: 'PSNP Synergy, Beekeeping, Poultry & Bilateral Grants',
      am: 'የሴፍቲኔት (PSNP) ማሟያ፣ ንብ ማነብ፣ የዶሮ እርባታ እና ዘመናዊ ግብርና',
      om: 'Qindoomina PSNP, Horsiisa Kanniisaa, Lukkuu & Qonna',
      ti: 'ምትእስሳር PSNP፣ መፍረ ንህቢ፣ ደርሁን ዘመናዊ ሕርሻን'
    },
    title: {
      en: 'Food Security & Livelihoods',
      am: 'የምግብ ዋስትና እና ኑሮ ማሻሻል',
      om: 'Wabii Nyaataa fi Jireenya',
      ti: 'ውሕስነት መግብን መነባብሮን'
    },
    description: {
      en: 'Community resilience via PSNP complementary programs, demonstration plots, beekeeping, poultry, and funds from Spain, USA, Germany, and Denmark.',
      am: 'የሴፍቲኔት (PSNP) ማሟያ ስራዎች፣ የማሳያ ማሳዎች፣ ዘመናዊ ንብ ማነብ፣ ዶሮ እርባታ እና ከአድራ ስፔን፣ አሜሪካ፣ ጀርመን እና ዴንማርክ የተገኘ ድጋፍ።',
      om: 'Dandamannaa hawaasaa karaa PSNP, iddoo agarsiisaa qonnaa, kanniisa fi deeggarsa Ispeen, Ameerikaa, Jarman fi Deenmaarki.',
      ti: 'ምትእስሳር ሴፍቲኔት PSNP፣ መርኣዪ ግራውቲ፣ ንህቢ፣ ደርሁን ካብ ስፔን፣ ኣሜሪካ፣ ጀርመንን ዴንማርክን ዝተረኽበ ደገፍን።'
    },
    fullNarrative: {
      en: 'Aligned with Ethiopia’s Productive Safety Net Program (PSNP), ADRA establishes climate-smart demonstration farms, distributes modern transitional beehives and poultry starter kits, and installs solar river-lift irrigation co-financed by ADRA Spain, ADRA USA, ADRA Germany, and ADRA Denmark.',
      am: 'አድራ ኢትዮጵያ ከብሔራዊ የሴፍቲኔት ፕሮግራም (PSNP) ጋር በመቀናጀት ዘመናዊ የንብ ቀፎዎችን፣ የዶሮ እርባታ ፓኬጆችንና የማሳያ እርሻዎችን ያቋቁማል። ይህ ስራ በአድራ ስፔን፣ አሜሪካ፣ ጀርመን እና ዴንማርክ ድጋፍ ይከናወናል።',
      om: 'Sagantaa PSNP Itoophiyaa waliin taʼuun lafa agarsiisaa qonnaa, gaagura kanniisaa ammayyaa, lukkuu fi paampii jallisii aduu deeggarsa ADRA Ispeen, Ameerikaa, Jarman fi Deenmaarkiin ni dhiyeessina.',
      ti: 'ምስ ፕሮግራም PSNP ብምትእስሳር ዘመናዊ መፍረ ንህቢ፣ ፓኬጃት ደርሁን ጸሓያዊ መስኖን ብደገፍ ኣድራ ስፔን፣ ኣሜሪካ፣ ጀርመንን ዴንማርክን የካይድ።'
    },
    image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
    secondaryImage: '/assets/images/hero_ethiopia_market_1792616573603.jpg',
    metrics: {
      en: '68,000+ farming households',
      am: '68,000+ አርሶ አደር ቤተሰቦች',
      om: 'Maatii qonnaa 68,000+',
      ti: '68,000+ ስድራ ሓረስቶት'
    },
    stats: [
      {
        value: { en: '68,000+', am: '68,000+', om: '68,000+', ti: '68,000+' },
        label: {
          en: 'Households Reached',
          am: 'የተደገፉ አባወራዎች',
          om: 'Maatiiwwan Deeggaraman',
          ti: 'ዝተሓገዛ ስድራቤታት'
        }
      },
      {
        value: { en: '4 Partners', am: '4 አጋሮች', om: 'Waltaʼa 4', ti: '4 መሻርኽቲ' },
        label: {
          en: 'ES, US, DE & DK Support',
          am: 'ስፔን፣ አሜሪካ፣ ጀርመን፣ ዴንማርክ',
          om: 'Ispeen, USA, Jarman & DK',
          ti: 'ስፔን፣ US፣ ጀርመን፣ ዴንማርክ'
        }
      },
      {
        value: { en: '450+', am: '450+', om: '450+', ti: '450+' },
        label: {
          en: 'Apiary & Poultry Units',
          am: 'የንብና የዶሮ ክፍሎች',
          om: 'Kanniisaa & Lukkuu',
          ti: 'ክፍልታት ንህብን ደርሁን'
        }
      },
      {
        value: { en: '1,200 ha', am: '1,200 ሄ/ር', om: '1,200 ha', ti: '1,200 ሄ/ር' },
        label: {
          en: 'Solar Irrigated Farmland',
          am: 'በሶላር የለማ መሬት',
          om: 'Jallisii Soolaarii',
          ti: 'ብፀሓይ ዝለምዐ መሬት'
        }
      }
    ],
    details: {
      en: [
        'Livelihood graduation programs complementing Ethiopia’s Productive Safety Net Program (PSNP)',
        'Demonstration plots growing drought-resilient sorghum, teff, and rust-resistant wheat',
        'Modern beekeeping training and transitional Kenya top-bar / Langstroth beehive kits',
        'Commercial poultry starter packages for vulnerable female-headed households',
        'Co-financed with ADRA Spain, ADRA USA, ADRA Germany, and ADRA Denmark',
        'Women-led Village Savings and Loan Associations (VSLA) microfinance cooperatives'
      ],
      am: [
        'ከብሔራዊው የምርታማ ሴፍቲኔት ፕሮግራም (PSNP) ጋር የተቀናጀ የኑሮ መቋቋሚያ ድጋፍ',
        'ድርቅን የሚቋቋም ማሽላ፣ ጤፍ እና ስንዴ የሚለማባቸው የማሳያ ማሳዎች',
        'ዘመናዊ የንብ ማነብ ስልጠና እና የዘመናዊ ቀፎዎች አቅርቦት',
        'ለሴት የቤተሰብ አስተዳዳሪዎች የዶሮ እርባታ የመነሻ ፓኬጆች',
        'በአድራ ስፔን፣ አድራ አሜሪካ፣ አድራ ጀርመን እና አድራ ዴንማርክ የገንዘብ አጋርነት',
        'ለገጠር ሴቶች የመንደር ቁጠባና ብድር ማህበራት (VSLA) ማቋቋም'
      ],
      om: [
        'Sagantaalee jireenyaa PSNP Itoophiyaa waliin qindaaʼanii gargaaran',
        'Iddoowwan agarsiisaa qonnaa sanyii bishingaa fi qamadii hongee dandamatanii',
        'Leenjii horsiisa kanniisaa ammayyaa fi gaagura kanniisaa raabsuu',
        'Deeggarsa lukkuu haadholii maatii bulchaniif kennuu',
        'Deeggarsa ADRA Ispeen, Ameerikaa, Jarman fi Deenmaarkiin hojjetamu',
        'Gareewwan qusannaa fi liqii dubartootaa (VSLA) cimsuu'
      ],
      ti: [
        'ምስ ሴፍቲኔት PSNP ዝተኣሳሰረ መደባት ምድላው መነባብሮ',
        'ደርቂ ዝጻወር መሸላ፣ ጣፍን ስርናይን ዘፍርዩ መርኣዪ ግራውቲ',
        'ስልጠና ዘመናዊ መፍረ ንህብን ምዕዳል ዘመናዊ ቆፎን',
        'ንኣመሓደርቲ ስድራ ደቂ-ኣንስትዮ መበገሲ ፓኬጅ ደርሁ',
        'ብምትሕብባር ኣድራ ስፔን፣ ኣሜሪካ፣ ጀርመንን ዴንማርክን',
        'ማሕበራት ዕቋርን ልቓሕን ደቂ-ኣንስትዮ (VSLA)'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'With modern beehives and training supported by ADRA Spain and Germany, our women cooperative harvested pure honey, bought oxen, and paid school fees for our children.',
        am: 'በአድራ ስፔን እና ጀርመን ድጋፍ በተሰጠን ዘመናዊ የንብ ቀፎ ንጹህ ማር አምርተን ለገበያ አቅርበናል። ባገኘነው ገቢ በሬ ገዝተን የልጆቻችንን የትምህርት ወጪ ሸፍነናል።',
        om: 'Gaagura kanniisaa deeggarsa ADRA Ispeen fi Jarmaniin arganneen damma qulqulluu oomishnee sangaa bitanne, ijoollee keenyas barsiifanneerra.',
        ti: 'ብደገፍ ኣድራ ስፔንን ጀርመንን ዝተዋህበና ዘመናዊ ቆፎ ንህቢ ጽሩይ መዓር ኣፍሪና፤ ብዕራይ ዓዲግና ወጻኢ ትምህርቲ ደቅና ከፊልና።'
      },
      author: {
        en: 'Fatuma, Coop Chair',
        am: 'ፋጡማ፣ የንብ አናቢ ህብረት መሪ',
        om: 'Faaxumaa, Hoggantuu Waldaa',
        ti: 'ፋጡማ፣ መራሒት ማሕበር'
      },
      location: {
        en: 'Somali Region',
        am: 'የሶማሌ ክልል',
        om: 'Naannoo Somaalee',
        ti: 'ክልል ሶማሌ'
      }
    },
    activeWoredas: {
      en: 'Mustahil, Fer-Fer, Higloley, Shebelle Zone, Bule Hora, Efrata Gidim',
      am: 'ሙስታሂል፣ ፈርፈር፣ ሂግሎሌይ፣ ሸበሌ ዞን፣ ቡሌ ሆራ፣ ኤፍራታ ግድም',
      om: 'Mustaahil, Fer-Fer, Higloley, Shabalee, Bulee Horaa, Efraataa Gidim',
      ti: 'ሙስታሂል፣ ፈርፈር፣ ሂግሎለይ፣ ዞባ ሸበሌ፣ ቡሌ ሆራ፣ ኤፍራታ ግድም'
    },
    partners: {
      en: ['ADRA Spain', 'ADRA USA', 'ADRA Germany', 'ADRA Denmark', 'Ministry of Agriculture', 'FAO'],
      am: ['አድራ ስፔን', 'አድራ አሜሪካ', 'አድራ ጀርመን', 'አድራ ዴንማርክ', 'ግብርና ሚኒስቴር', 'FAO'],
      om: ['ADRA Spain', 'ADRA USA', 'ADRA Germany', 'ADRA Denmark', 'Ministeera Qonnaa', 'FAO'],
      ti: ['ኣድራ ስፔን', 'ኣድራ ኣሜሪካ', 'ኣድራ ጀርመን', 'ኣድራ ዴንማርክ', 'ሚኒስትሪ ሕርሻ', 'FAO']
    }
  },
  {
    id: 'disaster-response',
    tagline: {
      en: '72-Hour Rapid Response & Kule Refugee Camp Support',
      am: 'የ72 ሰዓታት ፈጣን ምላሽ እና የስደተኞች ካምፕ ድጋፍ',
      om: 'Deebii Saʼaatii 72 & Deeggarsa Kaampii Kulee',
      ti: 'ናይ 72-ሰዓት ቅልጡፍ ምላሽን ካምፕ ስደተኛታት ኩሌን'
    },
    title: {
      en: 'Emergency Response & Preparedness',
      am: 'የአደጋ ጊዜ ምላሽ እና ዝግጁነት',
      om: 'Deebii Balaa fi Qophii',
      ti: 'ምላሽ ሓደጋን ድልውነትን'
    },
    description: {
      en: '72-hour flood and drought deployment, mobile Multi-Purpose Cash Assistance, and refugee support in Kule Camp (Gambella) and Kelafo.',
      am: 'በጎርፍ እና በድርቅ አደጋዎች በ72 ሰዓታት ውስጥ ፈጣን ምላሽ፣ የሞባይል ገንዘብ ድጋፍ እና በኩሌ (ጋምቤላ) እና በቀላፎ የስደተኞች ድጋፍ።',
      om: 'Saʼaatii 72 keessatti deebii lolaa fi hongee, qarshii MPCA fi gargaarsa baqattoota Kaampii Kulee fi Qalaafoo.',
      ti: 'ኣብ ውሽጢ 72 ሰዓት ቅልጡፍ ምላሽ ውሕጅን ደርቅን፣ ሓገዝ ገንዘብ ሞባይልን ደገፍ ስደተኛታት ኣብ ኩሌ (ጋምቤላ)ን ቀላፎን።'
    },
    fullNarrative: {
      en: 'When floods, droughts, or conflict disrupt communities, ADRA Ethiopia deploys within 72 hours with emergency water trucking, shelter kits, solar distance-learning radios, and digital cash transfers. We serve 37,000 refugees in Kule Refugee Camp (Gambella) and drought-affected families in Kelafo.',
      am: 'አድራ ኢትዮጵያ በጎርፍና ድርቅ አደጋዎች በ72 ሰዓታት ውስጥ ፈጣን የነፍስ አድን እርዳታ ያደርሳል። በጋምቤላ ኩሌ ካምፕ ለ37,000 የደቡብ ሱዳን ስደተኞች እንዲሁም በሶማሌ ቀላፎ ወረዳ ውሃ፣ መጠለያና የገንዘብ እርዳታ ያቀርባል።',
      om: 'Yeroo balaa uumamaa ykn walitti buʼiinsaa saʼaatii 72 keessatti bishaan konkolaataan, dawoo, raadiyoo barnootaa fi qarshii baankii moobaayilaan ni geessina; Gambeellaa Kaampii Kuleetti baqattoota 37,000 tajaajilla.',
      ti: 'ውሕጅ ወይ ደርቂ ምስ ዘጋጥም ኣድራ ኣብ 72 ሰዓት ብቦቴ ማይ፣ መዕቆቢ፣ ጸሓያዊ ሬድዮ ትምህርትን ገንዘብ ሞባይልን ይበጽሕ፤ ኣብ ኩሌ (ጋምቤላ) 37,000 ስደተኛታትን ኣብ ቀላፎን የገልግል።'
    },
    image: '/assets/images/solar_water_desert_1792618997738.jpg',
    secondaryImage: '/assets/images/adra_hero_community_1792612495148.jpg',
    metrics: {
      en: '550,000+ crisis-hit & refugees aided',
      am: '550,000+ ተጎጂዎችና ስደተኞች',
      om: 'Buqqaatota & baqattoota 550,000+',
      ti: '550,000+ ግዳያትን ስደተኛታትን'
    },
    stats: [
      {
        value: { en: '550,000+', am: '550,000+', om: '550,000+', ti: '550,000+' },
        label: {
          en: 'Refugees & IDPs Aided',
          am: 'ተጎጂዎችና ስደተኞች',
          om: 'Namoota Deeggaraman',
          ti: 'ስደተኛታትን ተመዛበልትን'
        }
      },
      {
        value: { en: '< 72 hrs', am: '< 72 ሰዓት', om: '< Saʼaatii 72', ti: '< 72 ሰዓት' },
        label: {
          en: 'Rapid Deployment Time',
          am: 'የፈጣን ምላሽ ሰዓት',
          om: 'Ariitii Deebii Balaa',
          ti: 'ፍጥነት ምላሽ ሓደጋ'
        }
      },
      {
        value: { en: '37,000', am: '37,000', om: '37,000', ti: '37,000' },
        label: {
          en: 'Kule Refugee Camp (Gambella)',
          am: 'በኩሌ ካምፕ (ጋምቤላ)',
          om: 'Baqattoota Kaampii Kulee',
          ti: 'ስደተኛታት ካምፕ ኩሌ'
        }
      },
      {
        value: { en: '48,000+', am: '48,000+', om: '48,000+', ti: '48,000+' },
        label: {
          en: 'Mobile Cash Transfers',
          am: 'የሞባይል ገንዘብ ድጋፍ',
          om: 'Deeggarsa Maallaqaa',
          ti: 'ሓገዝ ገንዘብ ሞባይል'
        }
      }
    ],
    details: {
      en: [
        'Rapid emergency mobilization within 72 hours for floods, drought, and displacement',
        'Kule Camp (Gambella) WASH & VIP latrines for 37,000 South Sudanese refugees',
        'Flood & drought relief in Kelafo and Shebelle Zone with water trucking and hygiene kits',
        'Multi-Purpose Cash Assistance (MPCA) via TeleBirr and CBE Birr for dignified choice',
        'Solar-powered distance-learning radios for conflict-displaced children in Tigray',
        'Active cluster coordination with EDRMC Ethiopia and UN-OCHA'
      ],
      am: [
        'በድርቅ፣ በጎርፍ እና በመፈናቀል ወቅት በ72 ሰዓታት ውስጥ ፈጣን ምላሽ መስጠት',
        'በጋምቤላ ኩሌ ካምፕ ለ37,000 የደቡብ ሱዳን ስደተኞች የንጹህ ውሃና ንጽህና አገልግሎት',
        'በቀላፎ እና ሸበሌ ዞን ለተጎዱ ወገኖች የቦቴ ውሃ እና የንጽህና ቁሳቁስ አቅርቦት',
        'ክብርን በጠበቀ መልኩ በቴሌብርና CBE Birr የሚላክ የገንዘብ ድጋፍ (MPCA)',
        'በትግራይ ለተፈናቀሉ ተማሪዎች በሶላር የሚሰሩ የርቀት ትምህርት ሬዲዮኖች',
        'ከብሔራዊ የአደጋ ስጋት አመራር ኮሚሽን (EDRMC) እና UN-OCHA ጋር ቅንጅት'
      ],
      om: [
        'Deebii ariifataa saʼaatii 72 keessatti yeroo lolaa, hongee fi buqqaatii',
        'Kaampii Kulee (Gambeellaa) keessatti baqattoota 37,000f tajaajila WASH kennuu',
        'Aanaa Qalaafoo fi Zoonii Shabaleetti bishaan konkolaataan dhiyeessuu',
        'Deeggarsa maallaqaa (MPCA) karaa TeleBirr fi CBE Birr maatiiwwaniif kennuu',
        'Tigraayitti barattoota buqqaʼaniif raadiyoo barnootaa anniisaa aduu kennuu',
        'EDRMC Itoophiyaa fi UN-OCHA waliin qindoominaan hojjechuu'
      ],
      ti: [
        'ቅልጡፍ ህጹጽ ምላሽ ኣብ ውሽጢ 72 ሰዓት ንውሕጅ፣ ደርቅን ምዝንባልን',
        'ኣብ ካምፕ ኩሌ (ጋምቤላ) ን37,000 ስደተኛታት ደቡብ ሱዳን ኣገልግሎት WASH',
        'ኣብ ቀላፎን ዞባ ሸበሌን ብቦቴ ማይን ናውቲ ጽሬትን ምቕራብ',
        'ብTeleBirrን CBE Birrን ክብሪ ስድራቤታት ዝሕሉ ቀጥታዊ ሓገዝ ገንዘብ (MPCA)',
        'ኣብ ትግራይ ንተመዛበልቲ ተምሃሮ ብፀሓይ ዝሰርሕ ሬድዮ ትምህርቲ',
        'ምስ EDRMC ኢትዮጵያን UN-OCHAን ብምውህሃድ ምስራሕ'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'In Kule camp, clean running water and sanitary stations built by ADRA halted disease outbreaks when thousands crossed the border seeking safety.',
        am: 'በኩሌ ስደተኞች ካምፕ አድራ የዘረጋው የንጹህ ውሃ መስመር እና የንፅህና መጠበቂያዎች ድንበር ተሻግረው የመጡ ወገኖቻችን ከተላላፊ በሽታዎች እንዲጠበቁ አድርጓል።',
        om: 'Kaampii Kuleetti bishaan qulqulluu fi tajaajilli qulqullinaa ADRAn ijaare dhibeewwan daddarboo baqattoota keessaa dhaabsiseera.',
        ti: 'ኣብ ካምፕ ኩሌ ኣድራ ዝተኸሎ ጽሩይ ማይን መጸዳድዒታትን ተላጋቢ ሕማማት ከይላባዕ ኣድሒኑና።'
      },
      author: {
        en: 'Refugee Camp Elder',
        am: 'የስደተኞች ካምፕ የሀገር ሽማግሌ',
        om: 'Jaarsa Kaampii Baqattootaa',
        ti: 'ሽማግለ ካምፕ ስደተኛታት'
      },
      location: {
        en: 'Kule Camp, Gambella',
        am: 'ኩሌ ካምፕ፣ ጋምቤላ',
        om: 'Kaampii Kulee, Gambeellaa',
        ti: 'ካምፕ ኩሌ፣ ጋምቤላ'
      }
    },
    activeWoredas: {
      en: 'Kule Camp (Gambella), Kelafo, Mustahil, Adadle, Mekelle, Shire, Ada’ar',
      am: 'ኩሌ ካምፕ (ጋምቤላ)፣ ቀላፎ፣ ሙስታሂል፣ አዳድሌ፣ መቀሌ፣ ሽሬ፣ አዳአር',
      om: 'Kaampii Kulee (Gambeellaa), Qalaafoo, Mustaahil, Adaadilee, Maqalee, Shiree, Adaʼaar',
      ti: 'ካምፕ ኩሌ (ጋምቤላ)፣ ቀላፎ፣ ሙስታሂል፣ ኣዳድሌ፣ መቐለ፣ ሽረ፣ ኣዳዓር'
    },
    partners: {
      en: ['EDRMC Ethiopia', 'UN-OCHA / EHF', 'UNHCR', 'USAID / BHA', 'ADRA International'],
      am: ['EDRMC ኢትዮጵያ', 'UN-OCHA / EHF', 'UNHCR', 'USAID / BHA', 'ADRA International'],
      om: ['EDRMC Itoophiyaa', 'UN-OCHA / EHF', 'UNHCR', 'USAID / BHA', 'ADRA International'],
      ti: ['EDRMC ኢትዮጵያ', 'UN-OCHA / EHF', 'UNHCR', 'USAID / BHA', 'ADRA International']
    }
  },
  {
    id: 'wash',
    tagline: {
      en: '20+ Years Expertise, Deep Solar Boreholes & WASHCos',
      am: 'ከ20 ዓመታት በላይ ልምድ፣ የሶላር ጉድጓዶች እና የWASHCo ኮሚቴዎች',
      om: 'Muuxannoo Wag. 20+, Boolla Soolaarii & Koree WASHCo',
      ti: 'ልዕሊ 20 ዓመት ተመኩሮ፣ ጸሓያዊ ዒላታትን WASHCoን'
    },
    title: {
      en: 'Water, Sanitation & Hygiene (WASH)',
      am: 'ውሃ፣ ንፅህናና ሳኒቴሽን (WASH)',
      om: 'Bishaan, Qulqullinaa fi Saaniteeshinii (WASH)',
      ti: 'ማይ፣ ንጽህናን ጽሬትን (WASH)'
    },
    description: {
      en: 'Over 20 years of clean water engineering: emergency water trucking, deep solar boreholes, VIP latrines, and women-led WASHCos.',
      am: 'ከ20 ዓመታት በላይ ልምድ፣ አስቸኳይ የቦቴ ውሃ፣ በሶላር የሚሰሩ ጥልቅ ጉድጓዶች፣ የላትሪን ግንባታ እና በሴቶች የሚመሩ የውሃ ኮሚቴዎች።',
      om: 'Injiinariingii waggaa 20+: bishaan geejjibuu, boolla aduu gadi-fagoo, manneen fincaanii VIP fi koree dubartootaa WASHCo.',
      ti: 'ልዕሊ 20 ዓመት ተመኩሮ ምህንድስና ማይ: ህጹጽ ቦቴ ማይ፣ ዓሚቕ ጸሓያዊ ዒላታት፣ ሽቓቓት VIPን ብኣንስቲ ዝምራሕ WASHCoን።'
    },
    fullNarrative: {
      en: 'With 20+ years of continuous water engineering across arid regions, ADRA Ethiopia drills deep boreholes up to 200m powered by zero-emission solar arrays, delivers emergency water trucking during severe drought, constructs school VIP latrines, and empowers WASHCos with 50%+ female leadership.',
      am: 'አድራ ኢትዮጵያ በውሃና ሳኒቴሽን ዘርፍ ከ20 ዓመታት በላይ እስከ 200 ሜትር ጥልቀት ያላቸውን ጉድጓዶች በፀሐይ ኃይል አገልግሎት እንዲሰጡ አድርጓል፤ በድርቅ ወቅት በቦቴ ውሃ ያደርሳል፤ እንዲሁም 50%+ ሴቶች የሚመሯቸውን የውሃ ኮሚቴዎች ያሰለጥናል።',
      om: 'Muuxannoo waggaa 20 oliin boolla bishaanii hanga meetira 200 anniisaa aduutiin hojjetu qota; yeroo hongee bishaan konkolaataan dhiyeessa; manneen fincaanii ijaaree koree bishaanii hoggansa dubartootaa %50+ qabu leenjisa.',
      ti: 'ኣድራ ኢትዮጵያ ልዕሊ 20 ዓመት ተመኩሮ ብምጥቃም ክሳብ 200 ሜትሮ ዕምቆት ዘለዎም ጸሓያዊ ዒላታት ይኹዕት፣ ኣብ ደርቂ ብቦቴ ማይ የቕርብ፣ ከምኡውን 50%+ ብኣንስቲ ዝምርሑ ኮሚቴታት WASHCo የሰልጥን።'
    },
    image: '/assets/images/adra_wash_water_1792612496655.jpg',
    metrics: {
      en: '420,000+ citizens gained clean water',
      am: '420,000+ ዜጎች ንጹህ ውሃ አግኝተዋል',
      om: 'Lammiileen 420,000+ bishaan argatan',
      ti: '420,000+ ዜጋታት ጽሩይ ማይ ረኺቦም'
    },
    stats: [
      {
        value: { en: '20+ Yrs', am: '20+ ዓመት', om: 'Wag. 20+', ti: '20+ ዓመት' },
        label: {
          en: 'WASH Engineering Record',
          am: 'የውሃ ምህንድስና ልምድ',
          om: 'Muuxannoo Injiinariingii',
          ti: 'ተመኩሮ ምህንድስና ማይ'
        }
      },
      {
        value: { en: '420,000+', am: '420,000+', om: '420,000+', ti: '420,000+' },
        label: {
          en: 'Clean Water Access',
          am: 'ንጹህ ውሃ ያገኙ ዜጎች',
          om: 'Bishaan Dhugaatii Qulqulluu',
          ti: 'ተጠቀምቲ ጽሩይ ማይ'
        }
      },
      {
        value: { en: '288+', am: '288+', om: '288+', ti: '288+' },
        label: {
          en: 'Solar Water Schemes',
          am: 'የሶላር ውሃ ጣቢያዎች',
          om: 'Buufata Bishaan Soolaarii',
          ti: 'ጸሓያዊ ነቑጣታት ማይ'
        }
      },
      {
        value: { en: '50%+', am: '50%+', om: '50%+', ti: '50%+' },
        label: {
          en: 'Women WASHCo Leaders',
          am: 'የሴቶች አመራር በWASHCo',
          om: 'Hoggansa Dubartootaa',
          ti: 'መርሕነት ደቂ ኣንስትዮ'
        }
      }
    ],
    details: {
      en: [
        '20+ years of geophysical borehole surveys and deep water engineering nationwide',
        'Emergency drought water trucking across Somali and Afar displacement sites',
        'Converting high-cost diesel generators to zero-emission solar water pumping arrays',
        'VIP school and health clinic latrines paired with handwashing stations',
        'WASHCo maintenance and tariff governance with mandatory 50%+ women leaders',
        'Rehabilitating conflict-damaged rural water pipes in North Wollo, Tigray, and Afar'
      ],
      am: [
        'ከ20 ዓመታት በላይ የከርሰ ምድር ውሃ ጥናት እና ጥልቅ ጉድጓድ ቁፋሮ ልምድ',
        'በሶማሌ እና አፋር የድርቅ ወቅት አስቸኳይ የቦቴ ውሃ አቅርቦት',
        'ከፍተኛ የነዳጅ ወጪ የሚጠይቁ ጀነሬተሮችን ወደ ንጹህ የሶላር ፓምፖች መቀየር',
        'በት/ቤቶች እና ጤና ጣቢያዎች ዘመናዊ የመጸዳጃና የእጅ መታጠቢያ ግንባታ',
        '50%+ በሴቶች የሚመሩ የማህበረሰብ የውሃ ኮሚቴዎች (WASHCos) ስልጠና',
        'በሰሜን ወሎ፣ ትግራይ እና አፋር በግጭት የወደሙ የውሃ መስመሮችን መጠገን'
      ],
      om: [
        'Muuxannoo waggaa 20+ qorannoo bishaan lafa jalaa fi boolla qotuu',
        'Yeroo hongee naannoo Somaalee fi Affaaritti bishaan konkolaataan dhiyeessuu',
        'Motoora diizilii gara paampii bishaanii anniisaa aduu qulqullootti jijjiiruu',
        'Manneen fincaanii VIP manneen barumsaa fi buufata fayyaa ijaaruu',
        'Koree bishaanii (WASHCo) hirmaannaa dubartootaa %50+ qabu leenjisuu',
        'Walloo Kaabaa, Tigraay fi Affaaritti sarara bishaanii mancaʼe suphuu'
      ],
      ti: [
        'ልዕሊ 20 ዓመት ተመኩሮ መጽናዕቲ ማይ ከርሲ መሬትን ኩዕቲ ዒላታትን',
        'ኣብ እዋን ደርቂ ሶማሌን ዓፋርን ህጹጽ ቀረብ ማይ ብቦቴ',
        'ካብ ናፍታ ናብ ጽሩይ ጸሓያዊ ፓምፕታት ማይ ምስግጋር',
        'ኣብ ኣብያተ-ትምህርትን ክሊኒካትን ሽቓቓት VIPን መሕጸቢ ኢድን ምህናጽ',
        '50%+ ብኣንስቲ ዝምርሑ ኮሚቴታት ምሕደራ ማይ (WASHCo) ምስልጣን',
        'ኣብ ሰሜን ወሎ፣ ትግራይን ዓፋርን ብግጭት ዝዓነዉ መስመራት ማይ ምጽጋን'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'Before ADRA drilled our 180-meter solar borehole, women walked 6 hours daily to fetch water. Today clean water flows in our village square and daughters attend school.',
        am: 'አድራ በፀሐይ ኃይል የሚሰራውን የ180 ሜትር ጥልቅ ጉድጓድ ከመቆፈሩ በፊት ሴቶች ለ6 ሰዓታት በእግር ተጉዘው ውሃ ይቀዱ ነበር። አሁን ንጹህ ውሃ መንደራችን ደርሷል፤ ሴት ልጆቻችንም በየቀኑ ይማራሉ።',
        om: 'Osoomaa ADRAn boolla aduu meetira 180 hin qotin dubartoonni saʼaatii 6 deemu turan. Harʼa bishaan qulqulluun ganda keenya keessa jira.',
        ti: 'ኣድራ 180 ሜትሮ ጸሓያዊ ዒላ ቅድሚ ምኹዓቱ ኣንስቲ 6 ሰዓት ብእግረን ማይ የምጽኣ ነይረን። ሎሚ ኣብ ዓድና ጽሩይ ማይ ኣሎ፣ ኣዋልድና ድማ ይምሃራ።'
      },
      author: {
        en: 'Amina, WASHCo Chair',
        am: 'አሚና፣ የWASHCo ኮሚቴ መሪ',
        om: 'Amiinaa, Dura-teessuu WASHCo',
        ti: 'ኣሚና፣ መራሒት WASHCo'
      },
      location: {
        en: 'Shebelle Zone, Somali Region',
        am: 'ሸበሌ ዞን፣ ሶማሌ ክልል',
        om: 'Zoonii Shabalee, Somaalee',
        ti: 'ዞባ ሸበሌ፣ ክልል ሶማሌ'
      }
    },
    activeWoredas: {
      en: 'Adadle, Gode, Mustahil, Kelafo, North Wollo, Ada’ar, Chinaksen, Kule',
      am: 'አዳድሌ፣ ጎዴ፣ ሙስታሂል፣ ቀላፎ፣ ሰሜን ወሎ፣ አዳአር፣ ጭናቅሰን፣ ኩሌ',
      om: 'Adaadilee, Goodee, Mustaahil, Qalaafoo, Walloo Kaabaa, Adaʼaar, Cinaaksen, Kulee',
      ti: 'ኣዳድሌ፣ ጎዴ፣ ሙስታሂል፣ ቀላፎ፣ ሰሜን ወሎ፣ ኣዳዓር፣ ጭናቅሰን፣ ኩሌ'
    },
    partners: {
      en: ['Charity: Water', 'ADRA Austria', 'Regional Water Bureaus', 'UNICEF'],
      am: ['Charity: Water', 'አድራ ኦስትሪያ', 'የክልል ውሃ ቢሮዎች', 'UNICEF'],
      om: ['Charity: Water', 'ADRA Austria', 'Biiroo Bishaanii Naannoo', 'UNICEF'],
      ti: ['Charity: Water', 'ኣድራ ኦስትሪያ', 'ክልላዊ ቢሮ ማይ', 'UNICEF']
    }
  },
  {
    id: 'economic-growth',
    tagline: {
      en: 'Green Energy TVET Hub & Solar Micro-Enterprises',
      am: 'የታዳሽ ኃይል ቴክኒክና ሙያ ማዕከል እና የሶላር ኢንተርፕራይዞች',
      om: 'Wiirtuu TVET Soolaarii & Daldala Dargaggoo',
      ti: 'ማእከል ሓምለዋይ ጸዓት TVETን ትካላት መናእሰይን'
    },
    title: {
      en: 'Renewable Energy & Economic Growth',
      am: 'ታዳሽ ኃይል እና ኢኮኖሚ እድገት',
      om: 'Anniisaa Haaromaa fi Guddina Dinagdee',
      ti: 'ዝሕደስ ጸዓትን ዕብየት ቁጠባን'
    },
    description: {
      en: 'Level I–IV accredited solar certifications, MoWE technical curriculum handover, and green youth and women entrepreneurship.',
      am: 'ከደረጃ I–IV እውቅና ያለው የሶላር ሙያ ሰርተፍኬት፣ ከMoWE ጋር የተደረገ የካሪኩለም ሽግግር እና የወጣቶች አረንጓዴ ስራ ፈጠራ።',
      om: 'Mirkaneeffannaa soolaarii Sadarkaa I–IV, waltaʼiinsa kaarikulamii MoWE fi carraa hojii magariisaa dargaggootaa.',
      ti: 'ደረጃ I–IV ፍቓድ ዘለዎ ስልጠና ጸሓይ፣ ምስ MoWE ዝተገብረ ርክብ ካሪኩለምን ሓምለዋይ ስራሕ መናእሰይን።'
    },
    fullNarrative: {
      en: 'At the National Green Energy TVET Hub in Kirkos (Addis Ababa) and regional colleges, ADRA equips youth and women with accredited Level I–IV certifications in solar PV installation and pumping mechanics, co-developed with the Ministry of Water & Energy (MoWE), plus startup toolkits for green repair cooperatives.',
      am: 'በአዲስ አበባ ቂርቆስ በሚገኘው የታዳሽ ኃይል ቲቪኢቲ ማዕከል ወጣቶችንና ሴቶችን በሶላር ተከላና ጥገና ከደረጃ I እስከ IV እናሰለጥናለን። ከMoWE ጋር በጋራ በተዘጋጀው ስርዓተ-ትምህርት ሰልጣኞች እውቅናና የስራ መነሻ ቁሳቁስ ያገኛሉ።',
      om: 'Wiirtuu Green Energy TVET Qirqoos (Finfinnee) fi kolleejjiwwan naannoo keessatti dargaggootaa fi dubartootaaf leenjii Sadarkaa I–IV soolaarii MoWE waliin qophaaʼe fi meeshaa hojii ni kennina.',
      ti: 'ኣብ ማእከል ሓምለዋይ ጸዓት ቂርቆስን ክልላዊ ኮሌጃትን ንመናእሰይን ኣንስትን ብምትሕብባር MoWE ደረጃ I–IV ስልጠና ተኸላን ጽገናን ጸሓይ ምስ መበገሲ መሳርሒ የረክብ።'
    },
    image: '/assets/images/adra_hero_community_1792612495148.jpg',
    metrics: {
      en: '4,500+ certified in solar energy',
      am: '4,500+ ወጣቶች በሶላር ሰልጥነዋል',
      om: 'Dargaggoo 4,500+ mirkanaaʼan',
      ti: '4,500+ መናእሰይ ተመሪቖም'
    },
    stats: [
      {
        value: { en: '4,500+', am: '4,500+', om: '4,500+', ti: '4,500+' },
        label: {
          en: 'Certified Solar Technicians',
          am: 'በሶላር የሰለጠኑ ወጣቶች',
          om: 'Ogeeyyii Soolaarii',
          ti: 'ዝተመረቑ ክኢላታት ጸሓይ'
        }
      },
      {
        value: { en: 'Level I–IV', am: 'ደረጃ I–IV', om: 'Sad. I–IV', ti: 'ደረጃ I–IV' },
        label: {
          en: 'National TVET Standards',
          am: 'ብሔራዊ የሙያ ደረጃ',
          om: 'Ulaagaa TVET Biyyaa',
          ti: 'ሃገራዊ ደረጃ TVET'
        }
      },
      {
        value: { en: '68%', am: '68%', om: '68%', ti: '68%' },
        label: {
          en: 'Job Placement Rate',
          am: 'የስራ ቅጥር ምጣኔ',
          om: 'Carraa Qacarrii Hojii',
          ti: 'መጠን ምርካብ ስራሕ'
        }
      },
      {
        value: { en: '120+', am: '120+', om: '120+', ti: '120+' },
        label: {
          en: 'Youth Green Enterprises',
          am: 'አረንጓዴ ኢንተርፕራይዞች',
          om: 'Daldala Magariisaa',
          ti: 'ሓምለዎት ትካላት መናእሰይ'
        }
      }
    ],
    details: {
      en: [
        'National Green Energy TVET II Hub operational in Kirkos Sub-City, Addis Ababa',
        'Curriculum handed over to Ministry of Water & Energy (MoWE) and Ministry of Labor & Skills',
        'Hands-on training in PV sizing, inverter maintenance, and submersible solar pumps',
        'Equal pathways advancing women technicians across electrical & solar engineering',
        'Startup toolkits and incubation funds empowering youth-owned rural repair teams'
      ],
      am: [
        'በአዲስ አበባ ቂርቆስ ክፍለ ከተማ የሚገኝ ብሔራዊ አረንጓዴ ኃይል TVET II ማዕከል',
        'ከውሃና ኢነርጂ ሚኒስቴር (MoWE) እና ከስራና ክህሎት ሚኒስቴር ጋር የተዘጋጀ ካሪኩለም ርክክብ',
        'በሶላር ፓነል፣ ኢንቨርተር እና ጥልቅ የውሃ ፓምፕ ጥገና የተግባር ስልጠና',
        'ሴቶች በኤሌክትሪክ እና ሶላር ምህንድስና ዘርፍ እንዲሰማሩ የሚያበረታታ መርሃ-ግብር',
        'ለወጣት ቴክኒሻኖች የሙያ መነሻ መሳሪያዎች እና የገንዘብ ድጋፍ'
      ],
      om: [
        'Wiirtuu Biyyoolessaa Green Energy TVET II Qirqoos, Finfinnee',
        'Kaarikulamii Ministeera Bishaan & Anniisaa (MoWE) waliin qindaaʼee kenname',
        'Leenjii qabatamaa saayizingii PV, invartarii fi paampii bishaan soolaarii',
        'Carraa walqixaa shamarran teekniishaanii soolaarii akka taʼaniif kennuu',
        'Meeshaalee kaʼumsaa fi gargaarsa maallaqaa waldaalee dargaggootaatiif'
      ],
      ti: [
        'ሃገራዊ ማእከል ሓምለዋይ ጸዓት TVET II ኣብ ቂርቆስ፣ ኣዲስ ኣበባ',
        'ንሚኒስትሪ ማይን ጸዓትን (MoWE) ዝተረከበ ሃገራዊ ካሪኩለም',
        'ተግባራዊ ስልጠና ምትካል ሶላር ፓነል፣ ኢንቨርተርን ፓምፕ ማይን',
        'ደቂ-ኣንስትዮ ኣብ ቴክኖሎጂ ጸሓይ ክዋፈራ ዝተዳለወ ማዕረ ዕድል',
        'ንማሕበራት መናእሰይ መበገሲ መሳርሕን ፋይናንሳዊ ደገፍን'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'Completing the Level III solar qualification changed my life. Today our 4-person youth cooperative repairs solar water pumps across 12 rural kebeles.',
        am: 'የደረጃ III የሶላር ሙያ ሰርተፍኬት ማግኘቴ ህይወቴን ቀይሮታል። ዛሬ የአራት ወጣቶች ማህበራችን በ12 የገጠር ቀበሌዎች የሶላር ፓምፖችን እየጠገነ ህዝቡን እያገለገለ ነው።',
        om: 'Mirkaneessa soolaarii Sadarkaa III argachuun jireenya koo jijjiire. Waldaan keenya namoota 4 qabu gandoota 12 keessatti paampii aduu suphaa jira.',
        ti: 'ምስክር ወረቐት ደረጃ III ምርካበይ ህይወተይ ቀይሩዎ። ሎሚ 4 መናእሰይ ዘለናዮ ማሕበር ኣብ 12 ጣብያታት ገጠር ፓምፕታት ጸሓይ ይጽግን ኣሎ።'
      },
      author: {
        en: 'Ephrem, Solar Technician',
        am: 'ኤፍሬም፣ የተመሰከረለት የሶላር ባለሙያ',
        om: 'Efrem, Teeknishaanii Soolaarii',
        ti: 'ኤፍሬም፣ ክኢላ ጸሓያዊ ጸዓት'
      },
      location: {
        en: 'Addis Ababa / Wolkite Hub',
        am: 'አዲስ አበባ / ወልቂጤ ማዕከል',
        om: 'Finfinnee / Walqixxee',
        ti: 'ኣዲስ ኣበባ / ማእከል ወልቂጤ'
      }
    },
    activeWoredas: {
      en: 'Kirkos (Addis Ababa), Dire Dawa, Afar Zone 3, Arba Minch, Wolkite',
      am: 'ቂርቆስ (አዲስ አበባ)፣ ድሬዳዋ፣ አፋር ዞን 3፣ አርባ ምንጭ፣ ወልቂጤ',
      om: 'Qirqoos (Finfinnee), Dirree Dawaa, Affaar Zoonii 3, Arbaa Minch, Walqixxee',
      ti: 'ቂርቆስ (ኣዲስ ኣበባ)፣ ድሬዳዋ፣ ዓፋር ዞባ 3፣ ኣርባ ምንጭ፣ ወልቂጤ'
    },
    partners: {
      en: ['Ministry of Water & Energy', 'Ministry of Labor and Skills', 'ADRA Germany', 'GIZ'],
      am: ['የውሃና ኢነርጂ ሚኒስቴር', 'ስራና ክህሎት ሚኒስቴር', 'አድራ ጀርመን', 'GIZ'],
      om: ['Ministeera Bishaan & Anniisaa', 'Ministeera Hojii & Ogummaa', 'ADRA Germany', 'GIZ'],
      ti: ['ሚኒስትሪ ማይን ጸዓትን', 'ሚኒስትሪ ስራሕን ክእለትን', 'ኣድራ ጀርመን', 'GIZ']
    }
  },
  {
    id: 'peace-building',
    tagline: {
      en: 'Post-Conflict Healing, Resource Dialogue & Social Cohesion',
      am: 'ከግጭት በኋላ ማገገም፣ የጋራ ሀብት ውይይት እና የማህበረሰብ ሰላም',
      om: 'Bayyanannaa Walitti Buʼiinsaa, Marii fi Tokkummaa Hawaasaa',
      ti: 'ድሕረ-ግጭት ምሕዋይ፣ ሓባራዊ ዘተ ጸጋታትን ሰላም ሕብረተሰብን'
    },
    title: {
      en: 'Peace Building & Social Cohesion',
      am: 'የሰላም ግንባታ እና ማህበራዊ ትስስር',
      om: 'Ijaarsa Nagaa fi Tokkummaa Hawaasaa',
      ti: 'ህንጸት ሰላምን ማሕበራዊ ምትእስሳርን'
    },
    description: {
      en: 'Community reconciliation, trauma healing (MHPSS), shared water and pasture governance, and post-war recovery across conflict-affected woredas.',
      am: 'በግጭት በተጎዱ ወረዳዎች የማህበረሰብ እርቅ፣ የስነ-ልቦና ፈውስ (MHPSS)፣ የጋራ ውሃና ግጦሽ አስተዳደር እንዲሁም የድህረ-ግጭት መልሶ ግንባታ።',
      om: 'Aanaalee walitti buʼiinsaan miidhaman keessatti araara hawaasaa, yaala xiin-sammuu (MHPSS), bulchiinsa bishaanii waliinii fi bayyanannaa.',
      ti: 'ኣብ ብግጭት ዝተጎድኣ ወረዳታት ዕርቂ ሕብረተሰብ፣ ስነ-ኣእምሮኣዊ ሕውየት (MHPSS)፣ ሓባራዊ ምሕደራ ማይን መጋሃጫን ዳግመ-ህንጸትን።'
    },
    fullNarrative: {
      en: 'True human dignity depends on lasting peace. Across post-conflict communities in Tigray (Mekelle, Shire), Afar (Ada’ar), Amhara (North Wollo), and shared pastoralist borderlands, ADRA Ethiopia facilitates locally led peace committees, equitable water and grazing agreements between host and displaced families, trauma healing (MHPSS), and youth livelihoods that rebuild trust.',
      am: 'ዘላቂ ሰብአዊ ክብር የሚረጋገጠው በሰላም ነው። አድራ ኢትዮጵያ በትግራይ (መቀሌና ሽሬ)፣ በአፋር (አዳአር)፣ በአማራ (ሰሜን ወሎ) እና በአርብቶ አደር አዋሳኝ ወረዳዎች በሀገር ሽማግሌዎችና ሴቶች የሚመሩ የሰላም ኮሚቴዎችን፣ የጋራ ውሃና ግጦሽ ስምምነቶችን፣ የስነ-ልቦና ህክምናን (MHPSS) እና የወጣቶች የስራ እድሎችን ያመቻቻል።',
      om: 'Kabajni namoomaa nagaa itti-fufaa irratti hundaaʼa. Naannolee walitti buʼiinsa boodaa kanneen akka Tigraay (Maqalee & Shiree), Affaar (Adaʼaar), Amaaraa (Walloo Kaabaa) fi daangaa horsiisee bultootaatti ADRAn koreewwan nagaa hawaasaa, waliigaltee bishaanii fi margaa qixaa, yaala xiin-sammuu (MHPSS) fi hojii dargaggootaa ni ijaara.',
      ti: 'ዘላቒ ሰብኣዊ ክብሪ ብሰላም ይረጋገጽ። ኣብ ድሕረ-ግጭት ከባቢታት ትግራይ (መቐለን ሽረን)፣ ዓፋር (ኣዳዓር)፣ ኣምሓራ (ሰሜን ወሎ)ን ኣብ ሰብ-ከብቲ ወሰናትን፣ ኣድራ ብሽማግለታትን ኣንስትን ዝምርሑ ኮሚቴታት ሰላም፣ ፍትሓዊ ስምምዕ ማይን መጋሃጫን፣ ስነ-ኣእምሮኣዊ ሕውየት (MHPSS)ን ዕድል ስራሕ መናእሰይን የሳልጥ።'
    },
    image: '/assets/images/ethiopia_highland_landscape_1792616589925.jpg',
    secondaryImage: '/assets/images/adra_hero_community_1792612495148.jpg',
    metrics: {
      en: '26,000+ reached via healing & peace',
      am: '26,000+ በሰላምና ስነ-ልቦና ድጋፍ',
      om: 'Namoota 26,000+ nagaa fi yaala',
      ti: '26,000+ ብሰላምን ምሕዋይን'
    },
    stats: [
      {
        value: { en: '26,000+', am: '26,000+', om: '26,000+', ti: '26,000+' },
        label: {
          en: 'Survivors & Hosts Reached',
          am: 'ተጎጂዎችና አስተናጋጅ ቤተሰቦች',
          om: 'Namoota Deeggaraman',
          ti: 'ተመዛበልትን ተቀበልትን'
        }
      },
      {
        value: { en: '20,000', am: '20,000', om: '20,000', ti: '20,000' },
        label: {
          en: 'MHPSS Healing Sessions',
          am: 'የስነ-ልቦና ፈውስ (MHPSS)',
          om: 'Gorsa Xiin-sammuu (MHPSS)',
          ti: 'ኣገልግሎት MHPSS'
        }
      },
      {
        value: { en: '67%', am: '67%', om: '67%', ti: '67%' },
        label: {
          en: 'Women Peace Participants',
          am: 'የሴቶች የሰላም ተሳትፎ',
          om: 'Hirmaannaa Dubartootaa',
          ti: 'ተሳትፎ ደቂ-ኣንስትዮ'
        }
      },
      {
        value: { en: '3 Regions', am: '3 ክልሎች', om: 'Naannoo 3', ti: '3 ክልላት' },
        label: {
          en: 'Tigray, Afar & Amhara Hubs',
          am: 'ትግራይ፣ አፋር እና አማራ',
          om: 'Tigraay, Affaar & Amaaraa',
          ti: 'ትግራይ፣ ዓፋርን ኣምሓራን'
        }
      }
    ],
    details: {
      en: [
        'Multi-stakeholder dialogue over shared solar water points & pastoral rangelands preventing resource conflict',
        'Comprehensive Mental Health and Psychosocial Support (MHPSS) reaching 20,000 people in Mekelle & Shire',
        'Women-led and elder peace committees mediating host-IDP social cohesion',
        'Post-war community asset reconstruction across 5 kebeles in Ada’ar (Afar) and North Wollo (Amhara)',
        'Joint youth-and-women IGA livelihoods replacing economic despair with shared community enterprises',
        'Do-No-Harm conflict sensitivity screening embedded across every humanitarian intervention'
      ],
      am: [
        'በጋራ የሶላር ውሃ ጣቢያዎችና የግጦሽ መሬቶች ዙሪያ ግጭትን የሚከላከል የማህበረሰብ ውይይት',
        'በመቀሌና ሽሬ ለ20,000 ሰዎች የተሟላ የአእምሮና የስነ-ልቦና ድጋፍ (MHPSS)',
        'በአስተናጋጅ ማህበረሰቦችና ተፈናቃዮች መካከል በሴቶችና ሽማግሌዎች የሚመራ የእርቅና የሰላም ኮሚቴ',
        'በአዳአር (አፋር) 5 ቀበሌዎችና በሰሜን ወሎ (አማራ) ከግጭት በኋላ የማህበረሰብ መልሶ ግንባታ',
        'ለወጣቶችና ሴቶች የጋራ ገቢ ማስገኛ (IGA) ስራዎችን በመፍጠር ማህበራዊ መተማመንን ማጠናከር',
        'በሁሉም የእርዳታ ስራዎች ላይ የግጭት ስሜታዊነት (Do-No-Harm) ጥበቃን ማካተት'
      ],
      om: [
        'Marii hawaasaa buufata bishaan soolaarii fi margaa waliinii irratti walitti buʼiinsa ittisuu',
        'Maqalee fi Shireetti namoota 20,000f gorsa fayyaa sammuu fi xiin-sammuu (MHPSS) kennuu',
        'Koreewwan nagaa dubartootaa fi jaarsoliin hogganaman kan buqqaatotaa fi hawaasa walitti araarsan',
        'Gandaalee Adaʼaar 5 (Affaar) fi Walloo Kaabaa (Amaaraa) keessatti bayyanannaa walitti buʼiinsaa',
        'Carraa hojii waliinii (IGA) dargaggootaa fi dubartootaaf uumuun wal-amanamummaa deebisuu',
        'Sagantaalee hunda keessatti qajeeltoo miidhaa hin geessisne (Do-No-Harm) hojiirra oolchuu'
      ],
      ti: [
        'ኣብ ሓባራዊ ጸሓያዊ ነጥብታት ማይን መጋሃጫን ግጭት ዝከላኸል ዘተ ሕብረተሰብ',
        'ኣብ መቐለን ሽረን ን20,000 ሰባት ምሉእ ስነ-ኣእምሮኣዊ ድጋፍ (MHPSS)',
        'ኣብ መንጎ ተመዛበልትን ተቀበልትን ብኣንስትን ሽማግለታትን ዝምራሕ ኮሚቴ ዕርቅን ሰላምን',
        'ኣብ 5 ጣብያታት ኣዳዓር (ዓፋር)ን ሰሜን ወሎ (ኣምሓራ)ን ድሕረ-ግጭት ዳግመ-ህንጸት',
        'ንመናእሰይን ኣንስትን ሓባራዊ ዕድል እቶት (IGA) ብምፍጣር ማሕበራዊ ምትእምማን ምሕያል',
        'ኣብ ኩሉ ሰብኣዊ ጣልቃ-ምእታው ፖሊሲ ጉድኣት ዘየብጽሕ (Do-No-Harm) ምርግጋጽ'
      ]
    },
    spotlightStory: {
      quote: {
        en: 'When our village water point and sewing cooperative brought displaced mothers and host neighbors into the same circle, shared daily work turned fear back into solidarity.',
        am: 'የመንደራችን የጋራ ውሃ ነጥብና የልብስ ስፌት ማህበር ተፈናቃይና አስተናጋጅ እናቶችን በአንድነት ሲያሰባስብ ፍርሃት ወደ ወንድማማችነትና ሰላም ተቀየረ።',
        om: 'Yeroo buufanni bishaanii fi waldaan hojii keenya haadholii buqqaʼanii fi hawaasa naannoo tokko godhu, sodaa irraa gara jaalalaafi nagaatti deebine.',
        ti: 'ናይ መንደርና ሓባራዊ ነጥቢ ማይን ማሕበር ስራሕን ንተመዛበልትን ተቀበልትን ኣዴታት ብሓባር ምስ ኣተኣሳሰረን፣ ፍርሒ ናብ ሓባራዊ ፍቕርን ሰላምን ተቐየረ።'
      },
      author: {
        en: 'Letebrhan & Halima, Joint Peace Co-Chairs',
        am: 'ለተብርሃን እና ሃሊማ፣ የሰላም ኮሚቴ መሪዎች',
        om: 'Letebrhan & Haliimaa, Hoggantoota Koree Nagaa',
        ti: 'ለተብርሃንን ሓሊማን፣ መራሕቲ ኮሚቴ ሰላም'
      },
      location: {
        en: 'Mekelle & Ada’ar Recovery Hubs',
        am: 'መቀሌ እና አዳአር የማገገሚያ ማዕከላት',
        om: 'Wiirtuu Maqalee & Adaʼaar',
        ti: 'ማእከላት ምሕዋይ መቐለን ኣዳዓርን'
      }
    },
    activeWoredas: {
      en: 'Mekelle & Shire (Tigray), Ada’ar 5 Kebeles (Afar), North Wollo (Amhara)',
      am: 'መቀሌ እና ሽሬ (ትግራይ)፣ አዳአር 5 ቀበሌዎች (አፋር)፣ ሰሜን ወሎ (አማራ)',
      om: 'Maqalee fi Shiree (Tigraay), Ganda Adaʼaar 5 (Affaar), Walloo Kaabaa (Amaaraa)',
      ti: 'መቐለን ሽረን (ትግራይ)፣ 5 ጣብያታት ኣዳዓር (ዓፋር)፣ ሰሜን ወሎ (ኣምሓራ)'
    },
    partners: {
      en: ['SDC / ADRA Switzerland', 'ADRA International', 'Regional Peace & DRM Commissions', 'Community Elders & Women Associations'],
      am: ['SDC / አድራ ስዊዘርላንድ', 'አድራ ኢንተርናሽናል', 'የክልል ሰላምና አደጋ ስጋት ኮሚሽኖች', 'የሀገር ሽማግሌዎችና የሴቶች ማህበራት'],
      om: ['SDC / ADRA Switzerland', 'ADRA International', 'Komishinii Nagaa & DRM Naannoo', 'Jaarsolii fi Waldaalee Dubartootaa'],
      ti: ['SDC / ኣድራ ስዊዘርላንድ', 'ኣድራ ኢንተርናሽናል', 'ክልላዊ ኮሚሽናት ሰላምን DRMን', 'ሽማግለታትን ማሕበራት ደቂ-ኣንስትዮን']
    }
  }
];
