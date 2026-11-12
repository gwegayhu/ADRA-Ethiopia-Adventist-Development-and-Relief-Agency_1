import React, { useState } from 'react';
import { ArrowRight, X, Heart, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';
import { TRANSLATIONS, pickLang } from '../data/translations';

interface StoriesFromFieldProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

type StoryCategoryKey = 'Field story' | 'News' | 'Press release';

interface FieldStoryItem {
  id: string;
  category: StoryCategoryKey;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  fullContent: Record<Language, string>;
  photoDirection: Record<Language, string>;
  location: Record<Language, string>;
  date: Record<Language, string>;
  image: string;
}

const CATEGORY_LABELS: Record<StoryCategoryKey, Record<Language, string>> = {
  'Field story': { en: 'Field story', am: 'የመስክ ታሪክ', om: 'Seenaa Dirree', ti: 'ዛንታ መስኪ' },
  News: { en: 'News', am: 'ዜና', om: 'Oduu', ti: 'ዜና' },
  'Press release': { en: 'Press release', am: 'ጋዜጣዊ መግለጫ', om: 'Ibsa Gaazexaa', ti: 'ጋዜጣዊ መግለጺ' }
};

const FIELD_STORIES: FieldStoryItem[] = [
  {
    id: 'water-story',
    category: 'Field story',
    title: {
      en: 'A new water point changes the morning routine in Oromia',
      am: 'በኦሮሚያ የተተከለው አዲስ የውሃ ነጥብ የንጋት ጉዞን ቀየረ',
      om: 'Buufanni bishaanii haaraan haala ganamaa Oromiyaatti jijjiire',
      ti: 'ኣብ ኦሮሚያ ዝተተኽለ ሓድሽ ነቑጣ ማይ ንግሆኣዊ ጉዕዞ ቀዪሩ'
    },
    excerpt: {
      en: 'How a solar-powered community water point shortened the 4-hour daily walk for women and girls, and what the local water management committee does to maintain zero-downtime reliability.',
      am: 'የሶላር ውሃ መታጠቢያ ጣቢያ ከመሰራቱ በፊት ሴቶችና ልጆች በየቀኑ አራት ሰዓት ውሃ ፍለጋ ይጓዙ ነበር። ዛሬ ንጹህ ውሃ በደጃቸው ደርሷል።',
      om: 'Buufanni bishaanii anniisaa aduu akkamitti deemsa sa’aatii 4 dubartootaa fi shamarranii akka gabaabseefi koreen WASHCo akka eegu ilaalaa.',
      ti: 'ብጸሓይ ዝሰርሕ ነቑጣ ማይ ንኣርባዕተ ሰዓታት ዝወስድ ዝነበረ ጉዕዞ ኣዴታትን ኣዋልድን ከመይ ከም ዘሕጸረ።'
    },
    fullContent: {
      en: 'In rural East Hararghe, water collection historically occupied up to four hours of a girl’s day. After ADRA Ethiopia drilled a 180-meter solar borehole, over 6,500 villagers gained reliable potable water. The community water committee (WASHCo), led by 50% women, collects nominal monthly tariffs that fund maintenance spare parts and routine sanitation testing.',
      am: 'በምስራቅ ሐረርጌ ገጠራማ አካባቢዎች ውሃ መቅዳት የልጃገረዶችን ቀን እስከ አራት ሰዓት ይወስድ ነበር። አድራ ኢትዮጵያ 180 ሜትር ጥልቀት ያለው የሶላር ጉድጓድ ከቆፈረ በኋላ ከ6,500 በላይ ነዋሪዎች ንጹህ የመጠጥ ውሃ አግኝተዋል። 50% በሴቶች የሚመራው የውሃ ኮሚቴ (WASHCo) ለጥገናና ምርመራ መጠነኛ ክፍያ ይሰበስባል።',
      om: 'Harargee Bahaa keessatti bishaan waraabuun yeroo shamarranii sa’aatii 4 fudhata ture. Erga ADRAn boolla aduu meetira 180 qotee booda jiraattonni 6,500+ bishaan qulqulluu argataniiru. Koreen WASHCo dubartoota %50 qabu suphaa yeroo hunda to’ata.',
      ti: 'ኣብ ገጠር ምብራቕ ሐረርጌ ማይ ምቕዳሕ ክሳብ ኣርባዕተ ሰዓት ይወስድ ነይሩ። ኣድራ 180 ሜትሮ ጸሓያዊ ዒላ ምስ ኩዓተ ልዕሊ 6,500 ነበርቲ ጽሩይ ማይ ረኺቦም። ብ50% ደቂ-ኣንስትዮ ዝምራሕ ኮሚቴ WASHCo ቀጻሊ ጽገና የካይድ።'
    },
    photoDirection: {
      en: 'Photo direction: community members at a solar water point, documented with informed consent.',
      am: 'ፎቶ፡ የማህበረሰቡ አባላት በሶላር የውሃ ነጥብ ላይ (በፈቃድ የተቀረጸ)።',
      om: 'Suuraa: miseensota hawaasaa buufata bishaanii aduu biratti hayyamaan ka’e.',
      ti: 'ስእሊ፡ ኣባላት ሕብረተሰብ ኣብ ጸሓያዊ ነቑጣ ማይ (ብፍቓድ ዝተሰኣለ)።'
    },
    location: { en: 'East Hararghe, Oromia', am: 'ምስራቅ ሐረርጌ፣ ኦሮሚያ', om: 'Harargee Bahaa, Oromiyaa', ti: 'ምብራቕ ሐረርጌ፣ ኦሮሚያ' },
    date: { en: 'March 2026', am: 'መጋቢት 2026', om: 'Bitootessa 2026', ti: 'መጋቢት 2026' },
    image: '/assets/images/adra_wash_water_1792612496655.jpg'
  },
  {
    id: 'farming-story',
    category: 'News',
    title: {
      en: 'Farmers adopt climate-smart practices across highland basins',
      am: 'በደጋማ አካባቢዎች አርሶ አደሮች የአየር ንብረት ተስማሚ ቴክኖሎጂን ተቀበሉ',
      om: 'Qonnaan bultoonni tooftaa qonnaa qilleensaaf mijaa’aa hojiirra oolchan',
      ti: 'ሓረስቶት ንክሊማ ዝምችእ ዘመናዊ ኣሰራርሓ ሕርሻ ተቐቢሎም'
    },
    excerpt: {
      en: 'Smallholder farming cooperatives in North Shewa transition to drip micro-irrigation and drought-resistant seed varieties, securing reliable harvest yields despite shifting rainfall patterns.',
      am: 'በሰሜን ሸዋ የሚገኙ አርሶ አደሮች የጠብታ መስኖ እና ድርቅን የሚቋቋሙ ዘሮችን በመጠቀም አስተማማኝ ምርት ማግኘት ጀመሩ።',
      om: 'Waldaaleen qonnaan bultootaa Shawaa Kaabaa jallisii cophaa fi sanyii hongee dandamatuun oomisha amansiisaa argachaa jiru.',
      ti: 'ኣብ ሰሜን ሸዋ ዝርከቡ ሓረስቶት መስኖ ነጠብጣብን ደርቂ ዝጻወር ዘርእን ብምጥቃም ውሑስ ምህርቲ ይረኽቡ ኣለዉ።'
    },
    fullContent: {
      en: 'Through ADRA Ethiopia’s food security interventions, over 1,200 hectares of farmland have been equipped with river-lift solar pump systems. Farmers received certified rust-resistant wheat and teff seeds, accompanied by training on biological composting, soil moisture retention, and direct market linkage.',
      am: 'በአድራ ኢትዮጵያ የምግብ ዋስትና ፕሮጀክቶች ከ1,200 ሄክታር በላይ መሬት በሶላር መስኖ ተሸፍኗል። አርሶ አደሮች የተሻሻለ የስንዴና የጤፍ ዘር፣ የተፈጥሮ ማዳበሪያ ዝግጅት ስልጠና እና የገበያ ትስስር አግኝተዋል።',
      om: 'Sagantaa wabii nyaataa ADRA Itoophiyaatiin lafti heektaara 1,200 ol jallisii paampii aduutiin misoomaniiru. Qonnaan bultoonni sanyii qamadii fi xaaffii fooyya’aa, leenjii kompoostii fi hidhata gabaa argataniiru.',
      ti: 'ብመደባት ውሕስነት መግቢ ኣድራ ልዕሊ 1,200 ሄክታር መሬት ብጸሓያዊ መስኖ ለሚዑ። ሓረስቶት ምሩጽ ዘርኢ ስርናይን ጣፍን፣ ስልጠና ተፈጥሮኣዊ ድኹዕን ምትእስሳር ዕዳጋን ረኺቦም።'
    },
    photoDirection: {
      en: 'Photo direction: smallholder farmers inspecting flourishing produce in field.',
      am: 'ፎቶ፡ አርሶ አደሮች በማሳቸው ላይ የበቀለውን ሰብል ሲመለከቱ።',
      om: 'Suuraa: qonnaan bultoota oyiruu isaanii irratti oomisha qoratan.',
      ti: 'ስእሊ፡ ሓረስቶት ኣብ ግራቶም ዝፈረየ እኽሊ ክዕዘቡ።'
    },
    location: { en: 'North Shewa & Gambela', am: 'ሰሜን ሸዋ እና ጋምቤላ', om: 'Shawaa Kaabaa & Gambeellaa', ti: 'ሰሜን ሸዋን ጋምቤላን' },
    date: { en: 'February 2026', am: 'የካቲት 2026', om: 'Gurraandhala 2026', ti: 'ለካቲት 2026' },
    image: '/assets/images/adra_agriculture_food_1792612497905.jpg'
  },
  {
    id: 'health-story',
    category: 'Press release',
    title: {
      en: 'Strengthening maternal and child health services in Somali Region',
      am: 'በሶማሌ ክልል የእናቶችና ህጻናት ጤና አገልግሎት ተጠናከረ',
      om: 'Tajaajilli fayyaa haadholii fi daa’immanii Naannoo Somaaleetti cime',
      ti: 'ኣብ ክልል ሶማሌ ኣገልግሎት ጥዕና ኣዴታትን ህጻናትን ተጠናኺሩ'
    },
    excerpt: {
      en: 'In partnership with USAID and Regional Health Bureaus, ADRA scales Community Therapeutic Care (CTC) to treat severe acute malnutrition across remote communities.',
      am: 'አድራ ኢትዮጵያ ከዩኤስኤአይዲ (USAID) ጋር በመተባበር ከባድ የተመጣጠነ ምግብ እጥረትን በመንደር ደረጃ የማከም ስራውን አስፋፋ።',
      om: 'USAID fi Biiroo Fayyaa Naannoo waliin ADRAn yaala CTC hanqina nyaataa cimaa hawaasa fagoo keessatti bal’iseera.',
      ti: 'ኣድራ ኢትዮጵያ ምስ USAIDን ቢሮ ጥዕና ክልልን ብምትሕብባር ኣብ ገጠራት ሕክምና CTC ኣስፊሑ።'
    },
    fullContent: {
      en: 'Pioneered in Ethiopia by ADRA in 2006, Community Therapeutic Care decentralizes the treatment of severe acute childhood malnutrition, delivering Ready-to-Use Therapeutic Food (RUTF) directly into homes. Recent regional audits confirm a 94.2% recovery cure rate among treated children under five.',
      am: 'በ2006 በአድራ የተጀመረው የማህበረሰብ ስነ-ምግብ ህክምና (CTC) የተመጣጠነ ምግብ (RUTF) ቀጥታ ወደ ቤተሰብ በማድረስ ከ5 ዓመት በታች የሆኑ ህጻናትን 94.2% የመዳን ውጤት አስመዝግቧል።',
      om: 'Bara 2006 ADRAn kan jalqabame kunuunsi CTC nyaata yaalaa (RUTF) manatti geessuun daa’imman waggaa 5 gadii %94.2 fayyisuu mirkaneesseera.',
      ti: 'ብ2006 ብኣድራ ዝተጀመረ ማሕበረሰባዊ ክንክን (CTC) ሕክምናዊ መግቢ RUTF ናብ ገዛውቲ ብምብጻሕ ኣብ ትሕቲ 5 ዓመት ህጻናት 94.2% ምሕዋይ ኣመዝጊቡ።'
    },
    photoDirection: {
      en: 'Photo direction: health extension worker with mother and child, with documented consent.',
      am: 'ፎቶ፡ የጤና ኤክስቴንሽን ሰራተኛ ከእናትና ልጅ ጋር (በፈቃድ የተቀረጸ)።',
      om: 'Suuraa: hojjetaa fayyaa haadhaa fi daa’ima waliin hayyamaan ka’e.',
      ti: 'ስእሊ፡ ሰራሕተኛ ጥዕና ምስ ኣደን ህጻንን (ብፍቓድ ዝተሰኣለ)።'
    },
    location: { en: 'Somali Region', am: 'የሶማሌ ክልል', om: 'Naannoo Somaalee', ti: 'ክልል ሶማሌ' },
    date: { en: 'January 2026', am: 'ጥር 2026', om: 'Amajjii 2026', ti: 'ጥሪ 2026' },
    image: '/assets/images/adra_emergency_health_1792612497133.jpg'
  },
  {
    id: 'girls-education-story',
    category: 'Field story',
    title: {
      en: 'A girl’s dream of civil engineering begins in a solar-lit Sidama classroom',
      am: 'በሲዳማ በሶላር መብራት የተሟላለት የመማሪያ ክፍል የሴት ተማሪዎችን ህልም አሳካ',
      om: 'Abjuun barattuu Sidaamaa daree ibsaa aduu qabu keessatti jalqabe',
      ti: 'ኣብ ሲዳማ ብጸሓያዊ መብራህቲ ዝማዕረገ ክፍሊ ሕልሚ ኣዋልድ ኣግሂዱ'
    },
    excerpt: {
      en: 'Marta Girma, 14, was on the brink of dropping out before ADRA’s SEAQE II project built gender-segregated sanitation blocks and a digital library at Bensa Primary School.',
      am: 'በቤንሳ አንደኛ ደረጃ ት/ቤት የሴቶች የክብር መጠበቂያ ክፍልና የዲጂታል ቤተ-መጻሕፍት በመገንባቱ የማርታ የትምህርት ህይወት ታደገ።',
      om: 'Maartaa Girmaa barnoota addaan kutuuf osoo jettu ijaarsi kutaa qulqullinaa fi mana kitaabaa SEAQE II Baansaa barnoota ishee baraare.',
      ti: 'ኣብ ቤት-ትምህርቲ ቤንሳ መደብ SEAQE II ክፍሊ ጽሬትን ዲጂታል ቤተ-መጻሕፍትን ብምህናጹ ትምህርቲ ማርታ ድሒኑ።'
    },
    fullContent: {
      en: 'At Bensa primary school in Sidama, girls absenteeism dropped by 64% after ADRA constructed gender-responsive sanitation facilities with running water, alongside distributing dignity hygiene packs and textbooks. Today, Marta is president of the school science club and maintains top honors in mathematics.',
      am: 'በሲዳማ ቤንሳ አንደኛ ደረጃ ት/ቤት የሴቶች መጸዳጃ ቤቶች በውሃ ተሟልተው ከተገነቡና የንጽህና ፓኮች ከተከፋፈሉ በኋላ የሴቶች መቅረት በ64% ቀንሷል። ዛሬ ማርታ የሳይንስ ክበብ መሪ እና በሂሳብ ከፍተኛ ውጤት አምጪ ናት።',
      om: 'Mana barumsaa Baansaa Sidaamaatti manneen fincaanii bishaan qabanii fi paakkiin qulqullinaa erga hojjetamee hafuun shamarranii %64 hir’ate. Maartaan amma dura-teessuu kilabii saayinsii taateetti.',
      ti: 'ኣብ ቤት-ትምህርቲ ቤንሳ ሲዳማ ብማይ ዝተማልኡ ሽቓቓትን ናውቲ ጽሬትን ምስ ተዳለዉ ምትራፍ ኣዋልድ ብ64% ነኪዩ። ሎሚ ማርታ ፕረዚደንት ክለብ ሳይንስ እያ።'
    },
    photoDirection: {
      en: 'Photo direction: adolescent girl student reading textbook in solar classroom.',
      am: 'ፎቶ፡ ሴት ተማሪ በሶላር ብርሃን ክፍል ውስጥ መጽሐፍ ስታነብ።',
      om: 'Suuraa: barattuu shamarranii daree ibsaa aduu keessatti kitaaba dubbistu.',
      ti: 'ስእሊ፡ ተምሃሪት ኣብ ብጸሓይ ዝበርህ ክፍሊ መጽሓፍ ከተንብብ።'
    },
    location: { en: 'Sidama Region', am: 'የሲዳማ ክልል', om: 'Naannoo Sidaamaa', ti: 'ክልል ሲዳማ' },
    date: { en: 'April 2026', am: 'ሚያዝያ 2026', om: 'Ebla 2026', ti: 'ሚያዝያ 2026' },
    image: '/assets/images/adra_education_girls_1792612496863.jpg'
  },
  {
    id: 'youth-tvet-story',
    category: 'News',
    title: {
      en: 'From job seeking to solar enterprise: Youth technicians electrifying rural health clinics',
      am: 'ወጣት የቴክኒክና ሙያ ተመራቂዎች የገጠር ጤና ኬላዎችን በሶላር ኃይል እያበሩ ነው',
      om: 'Dargaggoonni ogummaa soolaarii buufataalee fayyaa baadiyyaatti ibsaa galchan',
      ti: 'መንእሰያት ክኢላታት ጸሓይ ንገጠር ክሊኒካት ብጸሓያዊ ጸዓት የብርሁ'
    },
    excerpt: {
      en: 'How Dawit and his 4-person certified solar technician cooperative launched their enterprise in Kirkos and have already wired 22 remote clinics and water stations across Oromia.',
      am: 'በአዲስ አበባ በአድራ አረንጓዴ ኃይል ማዕከል የሰለጠኑ ወጣቶች የራሳቸውን ማህበር በማቋቋም በገጠር ክልሎች የሶላር ተከላ ስራዎችን እያከናወኑ ይገኛሉ።',
      om: 'Daawitii fi waldaan isaa Qirqoositti dhaabatan akkamitti kiliniikota baadiyyaa fi buufata bishaanii 22 soolaariin akka walqabsiisan.',
      ti: 'ዳዊትን 4 ኣባላት ማሕበሩን ኣብ ቂርቆስ ስልጠና ወሲዶም ኣብ ኦሮሚያ 22 ገጠር ክሊኒካትን ጣብያታት ማይን ብጸሓይ ኣብሪሆም።'
    },
    fullContent: {
      en: 'After graduating from ADRA’s Green Energy TVET II Coordination Hub with national Level III accreditation, Dawit received a catalytic toolkit grant. His youth-led cooperative now holds maintenance contracts with regional water and health bureaus, maintaining zero down-time for rural vaccine refrigerators.',
      am: 'ዳዊት በአድራ አረንጓዴ ኃይል ቲቪኢቲ ማዕከል የደረጃ 3 ስልጠናን ካጠናቀቀ በኋላ የመነሻ መሳሪያ ድጋፍ አግኝቷል። ዛሬ ማህበሩ ከክልል ውሃና ጤና ቢሮዎች ጋር በመስራት የክትባት ማቀዝቀዣዎች ያለማቋረጥ እንዲሰሩ ያደርጋል።',
      om: 'Wiirtuu TVET Anniisaa Magariisaa II ADRA irraa sadarkaa III eebbifamee booda Daawit deeggarsa meeshaa argate. Waldaan isaa biiroolee fayyaa fi bishaanii waliin waliigaltee suphaa qaba.',
      ti: 'ዳዊት ካብ ማእከል ሓምለዋይ ጸዓት TVET II ኣድራ ብደረጃ III ምስ ተመረቐ መበገሲ መሳርሒ ተዋሂብዎ። ሎሚ ማሕበሩ መዝሓሊ ክታበት ገጠር ብዘይ ምቁራጽ የገልግል ኣሎ።'
    },
    photoDirection: {
      en: 'Photo direction: certified young solar technician calibrating photovoltaic panel.',
      am: 'ፎቶ፡ የሰለጠነ ወጣት የሶላር ቴክኒሻን ፓኔል ሲያስተካክል።',
      om: 'Suuraa: teeknishaanii dargaggeessa paanaalii aduu sirreessu.',
      ti: 'ስእሊ፡ ብቕዓት ዘለዎ መንእሰይ ክኢላ ጸሓይ ፓነል ክገጥም።'
    },
    location: { en: 'Addis Ababa & North Shewa', am: 'አዲስ አበባ እና ሰሜን ሸዋ', om: 'Finfinnee & Shawaa Kaabaa', ti: 'ኣዲስ ኣበባን ሰሜን ሸዋን' },
    date: { en: 'March 2026', am: 'መጋቢት 2026', om: 'Bitootessa 2026', ti: 'መጋቢት 2026' },
    image: '/assets/images/adra_hero_community_1792612495148.jpg'
  },
  {
    id: 'emergency-cash-story',
    category: 'Press release',
    title: {
      en: 'Dignity in disaster: How mobile TeleBirr cash helped a flood-hit family rebuild',
      am: 'በአደጋ ጊዜ የተደረገ ፈጣን የሞባይል ገንዘብ ድጋፍ የጎርፍ ተጎጂዎችን መልሶ አቋቋመ',
      om: 'Kabaja yeroo balaa: Maallaqni TeleBirr maatii lolaan miidhaman deebisee ijaare',
      ti: 'ክብሪ ኣብ ግዜ ሓደጋ፡ ቅልጡፍ ሓገዝ TeleBirr ንግዳያት ውሕጅ ዳግም ኣጣዪሱ'
    },
    excerpt: {
      en: 'When seasonal flash floods struck the Awash river basin, ADRA delivered Multi-Purpose Cash Assistance (MPCA) directly into displaced mothers’ mobile accounts within 48 hours.',
      am: 'በአዋሽ ወንዝ ዳርቻ በተከሰተው የጎርፍ አደጋ ለተፈናቀሉ ቤተሰቦች በቴሌብር አማካኝነት በ48 ሰዓት ውስጥ ቀጥታ የገንዘብ እርዳታ ደረሰ።',
      om: 'Yeroo lolaan sulula Awaash mudatetti ADRAn sa’aatii 48 keessatti gargaarsa maallaqaa (MPCA) kallattiin haadholiif ergeera.',
      ti: 'ኣብ ተፋሰስ ኣዋሽ ድንገተኛ ውሕጅ ምስ ኣጋጠመ ኣድራ ኣብ 48 ሰዓታት ብTeleBirr ብቐጥታ ናብ ተመዛበልቲ ኣዴታት ገንዘብ ልኢኹ።'
    },
    fullContent: {
      en: 'Partnering with the Ethiopian Disaster Risk Management Commission (EDRMC), ADRA disbursed unconditional digital cash transfers of 12,000 ETB to each affected family. Beneficiaries chose how to spend their funds—purchasing staple food, replacing lost livestock, and procuring timber for dryland shelter reconstruction.',
      am: 'አድራ ከኢትዮጵያ አደጋ ስጋት አመራር ኮሚሽን (EDRMC) ጋር በመተባበር ለእያንዳንዱ የተጎዳ ቤተሰብ 12,000 ብር በሞባይል አስተላልፏል። ተጠቃሚዎች ምግብ፣ ከብት እና መጠለያ መገንቢያ በነጻነት ገዝተውበታል።',
      om: 'Komishinii Sodaa Balaa (EDRMC) waliin ADRAn maatii tokkoof qarshii 12,000 karaa moobaayilaan kenne. Maatiiwwan nyaata, beeladaa fi meeshaa dawoo fedhii isaaniitiin bitataniiru.',
      ti: 'ኣድራ ምስ ኮሚሽን ምሕደራ ሓደጋ ኢትዮጵያ (EDRMC) ንነፍሲ-ወከፍ ስድራ 12,000 ብር ብሞባይል ኣመሓላሊፉ። ተጠቀምቲ መግቢ፣ ከብትን መዕቆብን ብናጽነት ዓዲጎም።'
    },
    photoDirection: {
      en: 'Photo direction: mother receiving digital SMS transfer notification with relief staff.',
      am: 'ፎቶ፡ እናት የሞባይል ገንዘብ ማሳወቂያ SMS ስትቀበል።',
      om: 'Suuraa: haadha ergaa SMS dabarsa maallaqaa argattu hojjettoota waliin.',
      ti: 'ስእሊ፡ ኣደ መልእኽቲ ሓገዝ ገንዘብ SMS ክትቅበል ከላ።'
    },
    location: { en: 'Afar Region', am: 'የአፋር ክልል', om: 'Naannoo Affaar', ti: 'ክልል ዓፋር' },
    date: { en: 'February 2026', am: 'የካቲት 2026', om: 'Gurraandhala 2026', ti: 'ለካቲት 2026' },
    image: '/assets/images/solar_water_desert_1792618997738.jpg'
  }
];

export const StoriesFromField: React.FC<StoriesFromFieldProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  const ui = UI_COPY[currentLang].stories;
  const common = UI_COPY[currentLang].common;
  const nav = TRANSLATIONS[currentLang].nav;

  const selectedStory = selectedStoryId
    ? FIELD_STORIES.find((s) => s.id === selectedStoryId) ?? null
    : null;

  return (
    <section id="stories" className="border-b border-stone-200 scroll-mt-20">

      {/* Top Emerald Banner */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_education_girls_1792612496863.jpg"
            alt={nav.stories}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            {common.home} &gt; {nav.stories}
          </div>

          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {ui.kicker}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {ui.bannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {ui.bannerSubtitle}
          </p>

          <div className="pt-2">
            <a
              href="#featured-field-stories"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('featured-field-stories')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>{ui.readBtn}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="featured-field-stories" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#006643] uppercase mb-2">
                {ui.featuredEyebrow}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-editorial">
                {ui.latestHeading}
              </h3>
            </div>

            <button
              onClick={() => setSelectedStoryId(FIELD_STORIES[0].id)}
              className="text-sm font-semibold text-[#006643] hover:text-[#073826] flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>{ui.allStoriesBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FIELD_STORIES.map((story) => {
              const title = pickLang(currentLang, story.title);
              const excerpt = pickLang(currentLang, story.excerpt);
              const photoDir = pickLang(currentLang, story.photoDirection);
              const catLabel = pickLang(currentLang, CATEGORY_LABELS[story.category]);

              return (
                <div
                  key={story.id}
                  onClick={() => setSelectedStoryId(story.id)}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={story.image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="inline-block px-3 py-1 bg-emerald-50 text-[#006643] text-xs font-semibold rounded-full border border-emerald-100">
                        {catLabel}
                      </div>

                      <h3 className="text-lg font-bold text-stone-900 font-editorial leading-snug group-hover:text-[#006643] transition-colors">
                        {title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans line-clamp-3">
                        {excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[11px] text-stone-400 italic font-sans border-t border-stone-100 pt-3">
                      {photoDir}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Story Reading Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto"
          onClick={() => setSelectedStoryId(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="px-3 py-1 bg-emerald-50 text-[#006643] text-xs font-semibold rounded-full">
                {pickLang(currentLang, CATEGORY_LABELS[selectedStory.category])}
              </span>
              <button
                onClick={() => setSelectedStoryId(null)}
                aria-label={common.close}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedStory.image}
                alt={pickLang(currentLang, selectedStory.title)}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-stone-500 font-sans">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {pickLang(currentLang, selectedStory.location)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {pickLang(currentLang, selectedStory.date)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 font-editorial">
                {pickLang(currentLang, selectedStory.title)}
              </h3>

              <p className="text-stone-700 text-sm leading-relaxed font-sans">
                {pickLang(currentLang, selectedStory.fullContent)}
              </p>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-500 italic">
                {pickLang(currentLang, selectedStory.photoDirection)}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setSelectedStoryId(null);
                  onOpenDonate();
                }}
                className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>{ui.supportResilienceBtn}</span>
              </button>

              <button
                onClick={() => setSelectedStoryId(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer"
              >
                {common.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

