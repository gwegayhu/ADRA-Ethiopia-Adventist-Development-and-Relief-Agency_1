import { Language } from '../types';

export interface ChatKnowledgeItem {
  id: string;
  topic: string;
  keywords: string[];
  title: string;
  titleAm: string;
  titleOm: string;
  titleTi: string;
  content: string;
  contentAm: string;
  contentOm: string;
  contentTi: string;
  sourceSection: string;
  sourceSectionAm: string;
  sourceSectionOm: string;
  sourceSectionTi: string;
  sourceLink: string;
}

export const WEBSITE_KNOWLEDGE: ChatKnowledgeItem[] = [
  {
    id: 'who-we-are',
    topic: 'About ADRA Ethiopia & Brand Identity',
    keywords: [
      'about', 'who we are', 'what is adra', 'adra', 'background', 'mission', 'purpose', 'motto', 'values',
      'faith', 'church', 'seventh-day adventist', 'well-being triangle', 'justice', 'compassion', 'love', '2049', 'acso', '1113/2019',
      'ስለ እኛ', 'አላማ', 'መፈክር', 'ፍትህ', 'ርህራሄ', 'ፍቅር', 'አድራ',
      'eenyu', 'kaayyoo', 'dhaadannoo', 'haqa', 'jaalala',
      'ብዛዕባና', 'ዕላማ', 'መርሖ', 'ፍትሒ', 'ርሕራሐ', 'ፍቕሪ', 'ኣድራ'
    ],
    title: 'Who We Are, Brand Purpose & Motto',
    titleAm: 'እኛ ማን ነን፣ አላማችን እና መፈክራችን',
    titleOm: "Eenyu Nu'i, Kaayyoo fi Dhaadannoo",
    titleTi: 'ንሕና መን ኢና፣ ዕላማናን መርሖናን',
    content: 'ADRA Ethiopia is the country office of the Adventist Development and Relief Agency (ADRA), the global humanitarian arm of the Seventh-day Adventist Church operating in over 130 countries worldwide. Registered under Proclamation No. 1113/2019 (ACSO Certificate No. 2049), our purpose is "To serve humanity so all may live as God intended" and our motto is "Justice. Compassion. Love."',
    contentAm: 'አድራ ኢትዮጵያ በዓለም አቀፍ ደረጃ በ130+ አገሮች የሚንቀሳቀሰው የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) የኢትዮጵያ ቢሮ ነው። በአዋጅ 1113/2019 (የACSO ሰርተፊኬት ቁጥር 2049) የተመዘገበ ሲሆን አላማችን "ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ በቅንነት ማገልገል" መፈክራችንም "ፍትህ · ርህራሄ · ፍቅር" ነው።',
    contentOm: 'ADRA Itoophiyaan waajjira biyyoolessaa ADRA addunyaa biyyoota 130+ keessatti hojjetuuti. Labsii #1113/2019 (Ragaa ACSO #2049) jalatti galmaa\'ee kaayyoon keenya "Namni hundi akkuma Waaqayyo yaadetti akka jiraatu tajaajiluu", dhaadannoon keenya "Haqa. Gara-laafina. Jaalala." jedha.',
    contentTi: 'ኣድራ ኢትዮጵያ ኣካል ኣብ 130+ ሃገራት ዝሰርሕ ዓለምለኻዊ መርበብ ኣድራ እዩ። ብኣዋጅ #1113/2019 (ምስክር ወረቐት ACSO #2049) ዝተመዝገበ ኮይኑ፣ ዕላማና "ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ክነብር ምግልጋል"፣ መርሖና "ፍትሒ · ርሕራሐ · ፍቕሪ" እዩ።',
    sourceSection: 'Who We Are',
    sourceSectionAm: 'እኛ ማን ነን',
    sourceSectionOm: "Eenyu Nu'i",
    sourceSectionTi: 'ንሕና መን ኢና',
    sourceLink: '#who-we-are'
  },
  {
    id: 'leadership',
    topic: 'Leadership & Team Structure',
    keywords: [
      'leadership', 'team', 'director', 'country director', 'board', 'management', 'staff', 'executive',
      'dima saba', 'tadesse', 'zerihun', 'hana', 'addisu',
      'አመራር', 'ቦርድ', 'ዳይሬክተር', 'ሰራተኞች',
      'hoggansa', 'boordii', 'daarektara', 'hojjettoota',
      'መርሕነት', 'ጉጅለ', 'ዳይሬክተር', 'ቦርድ'
    ],
    title: 'Organizational Leadership in 5 Tiers',
    titleAm: 'በ5 እርከኖች የተዋቀረ አመራር',
    titleOm: 'Hoggansa Dhaabbataa Sadarkaa 5n',
    titleTi: 'ብ5 ብርክታት ዝተወደበ መርሕነት',
    content: 'ADRA Ethiopia is organized into 5 specialized categories of 4 members each: 1) Board of Directors (chaired by Dr. Tadesse Kebede), 2) Executive Leadership (Interim Country Director Dima Saba, Program Director Dr. Zerihun Awano, Finance Director Hana Denbi, HR Manager Addisu Mengistu), 3) Department Heads, 4) Program Managers, and 5) Regional Field Coordinators.',
    contentAm: 'የአድራ ኢትዮጵያ አመራር በ5 ዋና ዘርፎች የተዋቀረ ሲሆን 20 አባላትን ያቀፈ ነው (ቦርድ፣ ስራ አመራር፣ መምሪያ ኃላፊዎች፣ የፕሮግራም ስራ አስኪያጆች እና የመስክ ቡድን)። ጊዜያዊ የሀገር ዳይሬክተር ዲማ ሳባ ናቸው።',
    contentOm: 'Hoggansi ADRA Itoophiyaa ramaddii 5 (Boordii, Hoggansa Olaanaa, Itti-gaafatamtoota Kutaa, Maanajjaroota Sagantaa fi Qindeessitoota Dirree) jalatti miseensota 20n ijaarameera. Daarektarri Biyyoolessaa Yeroo Dima Sabaati.',
    contentTi: 'መርሕነት ኣድራ ኢትዮጵያ ብ5 ዘፈራት (ቦርድ፣ ፈጻሚ መርሕነት፣ ሓለፍቲ ክፍሊ፣ ኣመሓደርቲ መደብን ጉጅለ መስክን) ብ20 ኣባላት ዝቖመ እዩ። ግዝያዊ ሃገራዊ ዳይሬክተር ዲማ ሳባ እዮም።',
    sourceSection: 'Leadership',
    sourceSectionAm: 'አመራር',
    sourceSectionOm: 'Hoggansa',
    sourceSectionTi: 'መርሕነት',
    sourceLink: '#who-we-are'
  },
  {
    id: 'history',
    topic: 'History of ADRA Ethiopia',
    keywords: [
      'history', 'started', 'founded', '1982', '1992', '2006', 'famine', 'drought', 'legetaffo', 'kirkos', 'wello', 'timeline',
      'ታሪክ', 'ታሪኽ', 'ድርቅ', 'ለገጣፎ',
      'seenaa', 'hongee', 'leegexaafoo',
      'ታሪኽና', 'ደርቂ'
    ],
    title: 'Four Decades of Service in Ethiopia',
    titleAm: 'በኢትዮጵያ ከ4 አስርት ዓመታት በላይ አገልግሎት',
    titleOm: 'Tajaajila Waggoota 42+ Itoophiyaa Keessatti',
    titleTi: 'ልዕሊ 4 ዓሰርተ-ዓመታት ኣገልግሎት ኣብ ኢትዮጵያ',
    content: 'ADRA commenced operations in Ethiopia in 1982 in response to the severe drought in Wello and Asaita, establishing an emergency shelter in Legetaffo. In 1992, the Ethiopian government allocated land in Kirkos Sub-City, Addis Ababa, in recognition of ADRA\'s drought relief efforts. In 2006, ADRA pioneered Community Therapeutic Care (CTC) with USAID.',
    contentAm: 'አድራ ኢትዮጵያ በ1982 በወሎና አሳይታ የተከሰተውን ድርቅ ተከትሎ በለገጣፎ መጠለያ በመክፈት ስራ ጀመረ። በ1992 በአዲስ አበባ ቂርቆስ መሬት ተሰጠው። በ2006 የማህበረሰብ ስነ-ምግብ ህክምና (CTC) ጀመረ።',
    contentOm: 'ADRAn bara 1982 hongee Walloo fi Asayitaaf Leegexaafoo keessatti jalqabe. Bara 1992 mootummaan Finfinnee Qirqoositti lafa kenneef. Bara 2006 USAID waliin yaala hanqina nyaataa (CTC) jalqabsiise.',
    contentTi: 'ኣድራ ኣብ 1982 ንደርቂ ወሎን ኣሳይታን ኣብ ለገጣፎ መዕቆቢ ብምኽፋት ስራሕ ጀሚሩ። ብ1992 መንግስቲ ኣብ ኣዲስ ኣበባ ቂርቆስ መሬት ሂብዎ። ብ2006 ሕክምና ሕጽረት መግቢ (CTC) ጀሚሩ።',
    sourceSection: 'Our History',
    sourceSectionAm: 'ታሪካችን',
    sourceSectionOm: 'Seenaa ADRA',
    sourceSectionTi: 'ታሪኽና',
    sourceLink: '#who-we-are'
  },
  {
    id: 'seven-areas',
    topic: 'What We Do - 7 Technical Pillars',
    keywords: [
      'what we do', 'sectors', 'programs', 'pillars', 'areas of work', 'wash', 'water', 'clean water', 'borehole', 'boreholes', 'solar',
      'emergency', 'food', 'food security', 'agriculture', 'nutrition', 'health', 'education', 'seaqe', 'livelihood', 'tvet', 'energy',
      'peace', 'peace building', 'peacebuilding', 'reconciliation', 'social cohesion', 'dialogue', 'conflict', 'mhpss',
      'ምን እንሰራለን', 'ንጹህ ውሃ', 'ውሃ', 'ትምህርት', 'ጤና', 'ምግብ', 'ታዳሽ ኃይል', 'ሰላም', 'የሰላም ግንባታ',
      'hojiiwwan', 'bishaan', 'barnoota', 'fayyaa', 'nyaata', 'anniisaa', 'nagaa', 'ijaarsa nagaa', 'tokkummaa',
      'እንታይ ንሰርሕ', 'ጽሩይ ማይ', 'ማይ', 'ትምህርቲ', 'ጥዕና', 'መግቢ', 'ጸዓት', 'ሰላም', 'ህንጸት ሰላም'
    ],
    title: 'Seven Technical Pillars, One Commitment to Dignity',
    titleAm: 'ሰባት ቴክኒካዊ ምሰሶዎች፣ አንድ የክብር ቁርጠኝነት',
    titleOm: 'Utubaalee Teeknikaa 7, Kutannoo Tokko Kabajaaf',
    titleTi: 'ሸውዓተ ቴክኒካዊ ዓውድታት፣ ሓደ ቃል-ኪዳን ክብሪ',
    content: 'ADRA Ethiopia operates across seven technical pillars: 1) Emergency Management, 2) Food Security & Livelihoods, 3) Water, Sanitation & Hygiene (WASH & solar boreholes), 4) Health & Nutrition (CTC), 5) Education (SEAQE II), 6) Renewable Energy & Green TVET, and 7) Peace Building & Social Cohesion (post-conflict MHPSS healing & shared resource dialogue).',
    contentAm: 'አድራ ኢትዮጵያ በ7 ዋና ምሰሶዎች ይሰራል፡ 1) የአደጋ ጊዜ አስተዳደር 2) የምግብ ዋስትናና ኑሮ 3) ንጹህ ውሃና ንፅህና (WASH) 4) ጤናና ስነ-ምግብ (CTC) 5) ትምህርት (SEAQE II) 6) ታዳሽ ኃይልና ቲቪኢቲ 7) የሰላም ግንባታና ማህበራዊ ትስስር።',
    contentOm: 'ADRA Itoophiyaan utubaalee 7 irratti hojjata: 1) Deebii Balaa 2) Wabii Nyaataa fi Jireenya 3) Bishaan Qulqulluu (WASH) 4) Fayyaa fi Nyaata (CTC) 5) Barnoota (SEAQE II) 6) Anniisaa Haaromfamaa fi TVET 7) Ijaarsa Nagaa fi Tokkummaa Hawaasaa.',
    contentTi: 'ኣድራ ኢትዮጵያ ኣብ 7 ዓውድታት ይሰርሕ፡ 1) ምላሽ ሓደጋ 2) ውሕስነት መግብን ናብራን 3) ጽሩይ ማይን WASHን 4) ጥዕናን ኣመጋግባን (CTC) 5) ትምህርቲ (SEAQE II) 6) ሓምለዋይ ጸዓትን TVETን 7) ህንጸት ሰላምን ማሕበራዊ ምትእስሳርን።',
    sourceSection: 'What We Do',
    sourceSectionAm: 'ምን እንሰራለን',
    sourceSectionOm: 'Hojiiwwan',
    sourceSectionTi: 'እንታይ ንሰርሕ',
    sourceLink: '#what-we-do'
  },
  {
    id: 'ai-for-good',
    topic: 'AI for Good Principles',
    keywords: [
      'ai', 'ai for good', 'artificial intelligence', 'technology', 'principles', 'rules', 'data', 'ethics', 'six rules', 'people first', 'human oversight',
      'ቴክኖሎጂ', 'መርሆዎች', 'ህጎች',
      'teeknooloojii', 'qajeeltoo', 'seera',
      'ቴክኖሎጂ', 'መትከላት', 'ሕግታት'
    ],
    title: 'AI for Good: Technology that Serves People with Dignity',
    titleAm: 'AI ለበጎ፡ ሰውን በክብር የሚያገለግል ቴክኖሎጂ',
    titleOm: 'AI Gaariif: Teeknooloojii Kabajaan Tajaajilu',
    titleTi: 'AI ንሰናይ፡ ንሰባት ብኽብሪ ዘገልግል ቴክኖሎጂ',
    content: 'ADRA Ethiopia approaches AI and data carefully, openly, and always with communities at the centre. Our six core principles are: 1. People first, 2. Human oversight, 3. Privacy and consent, 4. Fairness, 5. Transparency, 6. Local languages (including Amharic, Afaan Oromo, and Tigrinya).',
    contentAm: 'የአድራ ኢትዮጵያ የAI እና ቴክኖሎጂ 6 መርሆዎች፡ 1. ሰው ቅድሚያ ይሰጠዋል 2. የሰው ቁጥጥር 3. ግላዊነትና ፈቃድ 4. ፍትሃዊነት 5. ግልጽነት 6. የሀገር ውስጥ ቋንቋዎች (አማርኛ፣ ኦሮምኛና ትግርኛ ጨምሮ)።',
    contentOm: 'Qajeeltoowwan AI ADRA Itoophiyaa 6: 1. Namaaf Dursa 2. Too’annoo Namaa 3. Iccitii fi Hayyama 4. Haqummaa 5. Iftoomina 6. Afaan Naannoo (Afaan Oromoo, Amaariffa fi Tigriffa dabalatee).',
    contentTi: '6 መትከላት AI ንሰናይ ኣድራ ኢትዮጵያ፡ 1. ንሰብ ቀዳምነት 2. ሰብኣዊ ቁጽጽር 3. ውልቃዊ ድሕንነትን ፍቓድን 4. ፍትሓውነት 5. ግሉጽነት 6. ሃገራዊ ቋንቋታት (ኣምሓርኛ፣ ኦሮምኛን ትግርኛን ሓዊሱ)።',
    sourceSection: 'AI for Good',
    sourceSectionAm: 'AI ለበጎ',
    sourceSectionOm: 'AI Gaariif',
    sourceSectionTi: 'AI ንሰናይ',
    sourceLink: '#ai-for-good'
  },
  {
    id: 'where-we-work',
    topic: 'Where We Work Across Ethiopia',
    keywords: [
      'where we work', 'regions', 'projects', 'somali', 'kelafo', 'gode', 'oromia', 'amhara', 'afar', 'tigray', 'gambela', 'sidama', 'hawassa', 'mekelle', 'dire dawa', 'addis ababa', 'locations', '345,000',
      'ሶማሌ', 'ኬላፎ', 'ኦሮሚያ', 'አማራ', 'አፋር', 'ትግራይ', 'ጋምቤላ', 'ክልሎች', 'ፕሮጀክቶች', 'የስራ ቦታዎች',
      'naannoo', 'somaalee', 'qalaafoo', 'oromiyaa', 'pirojektoota', 'bakka hojii',
      'ክልላት', 'ሶማሌ', 'ኦሮሚያ', 'ትግራይ', 'ዓፋር', 'ፕሮጀክትታት', 'ቦታታት'
    ],
    title: 'Regional Footprint Across Ethiopia',
    titleAm: 'በኢትዮጵያ ክልሎች ያለን የስራ ስርጭት',
    titleOm: 'Bakkeewwan Hojii Naannolee Itoophiyaa',
    titleTi: 'ስፍሓት ስራሕና ኣብ ክልላት ኢትዮጵያ',
    content: 'ADRA Ethiopia operates 15 documented projects serving 345,000+ beneficiaries across Somali (Gode, Kelafo, Adadle), Oromia (ATJK, East Hararghe), Amhara (North Wollo), Afar (Ada\'ar, Semera), Tigray (Mekelle, Shire), Gambella (Kule Camp), and National/Multi-Regional programs led from Addis Ababa.',
    contentAm: 'አድራ ኢትዮጵያ በሶማሌ (ጎዴ፣ ኬላፎ፣ አዳድሌ)፣ ኦሮሚያ፣ አማራ፣ አፋር፣ ትግራይ፣ ጋምቤላ እና አዲስ አበባ/ሀገራዊ 15 ፕሮጀክቶችን ያከናውናል (ከ345,000+ ተጠቃሚዎች)።',
    contentOm: 'ADRA Itoophiyaan Somaalee (Goode, Qalaafoo, Adadle), Oromiyaa, Amaaraa, Affaar, Tigraay, Gambeellaa fi Finfinnee keessatti pirojektoota 15n namoota 345,000+ tajaajila.',
    contentTi: 'ኣድራ ኢትዮጵያ ኣብ ሶማሌ (ጎዴ፣ ኬላፎ፣ ኣዳድሌ)፣ ኦሮሚያ፣ ኣምሓራ፣ ዓፋር፣ ትግራይ፣ ጋምቤላን ኣዲስ ኣበባን 15 ፕሮጀክትታት (345,000+ ተጠቀምቲ) የካይድ።',
    sourceSection: 'Where We Work',
    sourceSectionAm: 'የስራ ቦታዎች',
    sourceSectionOm: 'Bakka Hojii',
    sourceSectionTi: 'ቦታታት ስራሕና',
    sourceLink: '#where-we-work'
  },
  {
    id: 'telebirr-donation',
    topic: 'Donate via TeleBirr',
    keywords: [
      'telebirr', 'tele birr', 'ethio telecom', 'mobile money', 'short code', 'merchant', 'qr', 'ussd', '*127#', '251911', 'scan', 'donate', 'giving', 'contribute', 'support',
      'ቴሌብር', 'ለመለገስ', 'መለገስ', 'እርዳታ', 'ይለግሱ',
      'kennaa', 'gumaata', 'gargaaruu', 'gargaarsa',
      'ለግሱ', 'ምልጋስ', 'ወፈያ', 'ቴሌብር'
    ],
    title: 'Donating through TeleBirr App, QR Scan & USSD',
    titleAm: 'በቴሌብር QR ስካን እና *127# መለገስ',
    titleOm: 'TeleBirr QRn fi *127#tiin Gargaaruu',
    titleTi: 'ብቴሌብር QR ስካንን *127#ን ምልጋስ',
    content: 'Donate to ADRA Ethiopia via TeleBirr: 1) Open Donate and scan the TeleBirr QR code, 2) Pay Merchant Code: 251911 in the TeleBirr app, or 3) Dial *127# -> Pay Merchant -> 251911.',
    contentAm: 'በቴሌብር ለመለገስ፡ 1) በQR ኮድ ስካን ያድርጉ 2) የነጋዴ ቁጥር 251911 ይጠቀሙ ወይም 3) *127# በመደወል 251911 ያስገቡ።',
    contentOm: 'TeleBirr tiin gargaaruuf: 1) Koodii QR iskaan godhaa 2) Koodii daldalaa 251911 fayyadamaa ykn 3) *127# bilbilaa.',
    contentTi: 'ብቴሌብር ንምልጋስ፡ 1) QR ኮድ ስካን ግበሩ 2) ቁጽሪ ነጋዳይ 251911 ተጠቐሙ ወይ 3) *127# ደውሉ።',
    sourceSection: 'Donate Now',
    sourceSectionAm: 'አሁን ይለግሱ',
    sourceSectionOm: 'Kennaa',
    sourceSectionTi: 'ሕጂ ለግሱ',
    sourceLink: '#donate'
  },
  {
    id: 'cbe-donation',
    topic: 'Donate via CBE Birr & Commercial Bank',
    keywords: [
      'cbe', 'cbe birr', 'commercial bank', 'bank transfer', 'account number', '*847#', '847123', '1000012345678',
      'ንግድ ባንክ', 'ባንክ',
      'baankii daldalaa', 'baankii',
      'ንግዲ ባንክ', 'ባንክ'
    ],
    title: 'Donating through CBE Birr & CBE Mobile',
    titleAm: 'በኢትዮጵያ ንግድ ባንክ (CBE) መለገስ',
    titleOm: 'CBE Birr fi Baankii Daldalaatiin Gargaaruu',
    titleTi: 'ብCBE Birrን ንግዲ ባንክን ምልጋስ',
    content: 'Contribute via Commercial Bank of Ethiopia (CBE): 1) Scan the CBE QR code with CBE Mobile, 2) Dial *847# -> Pay Biller (847123), or 3) Transfer to "ADRA Ethiopia Relief & Development", Account: 1000012345678 (Kirkos Branch).',
    contentAm: 'በኢትዮጵያ ንግድ ባንክ (CBE) ለመለገስ፡ CBE QR ስካን ያድርጉ፣ *847# (847123) ይጠቀሙ ወይም በሂሳብ ቁጥር 1000012345678 (ቂርቆስ ቅርንጫፍ) ያስተላልፉ።',
    contentOm: 'Baankii Daldalaa (CBE) tiin gargaaruuf: Koodii QR iskaan godhaa, *847# (847123) bilbilaa ykn lakkoofsa herregaa 1000012345678tti ergaa.',
    contentTi: 'ብንግዲ ባንክ ኢትዮጵያ (CBE) ንምልጋስ፡ QR ስካን ግበሩ፣ *847# (847123) ደውሉ ወይ ናብ ሕሳብ 1000012345678 (ቂርቆስ) ለኣኹ።',
    sourceSection: 'Donate Now',
    sourceSectionAm: 'አሁን ይለግሱ',
    sourceSectionOm: 'Kennaa',
    sourceSectionTi: 'ሕጂ ለግሱ',
    sourceLink: '#donate'
  },
  {
    id: 'stripe-donation',
    topic: 'Donate via Stripe (Card & Apple Pay)',
    keywords: ['stripe', 'credit card', 'debit card', 'visa', 'mastercard', 'apple pay', 'google pay', 'international', 'usd', 'ካርድ', 'kaardii'],
    title: 'Donating through Stripe Global Gateway',
    titleAm: 'በStripe ዓለም አቀፍ ካርድ መለገስ',
    titleOm: 'Kaardii Idil-addunyaa Stripetiin Gargaaruu',
    titleTi: 'ብStripe ዓለምለኻዊ ካርድ ምልጋስ',
    content: 'International donors can use Stripe for instant card payments (Visa, Mastercard, Amex), Apple Pay, Google Pay, or scan the Stripe mobile QR code inside the Donate modal.',
    contentAm: 'በStripe በቪዛ፣ ማስተርካርድ፣ Apple Pay እና Google Pay በUSD መለገስ ወይም የStripe QR ኮድ ስካን ማድረግ ይችላሉ።',
    contentOm: 'Gargaartoonni idil-addunyaa Stripe fayyadamuun kaardii Visa, Mastercard, Apple Pay fi koodii QRn USDdhaan gumaachuu danda\'u.',
    contentTi: 'ዓለምለኻውያን ለገስቲ ብStripe (Visa, Mastercard, Apple Pay) ወይ QR ኮድ ብUSD ክልግሱ ይኽእሉ።',
    sourceSection: 'Donate Now',
    sourceSectionAm: 'አሁን ይለግሱ',
    sourceSectionOm: 'Kennaa',
    sourceSectionTi: 'ሕጂ ለግሱ',
    sourceLink: '#donate'
  },
  {
    id: 'tenders-careers',
    topic: 'Tenders, Careers & Audited Publications',
    keywords: [
      'tender', 'tenders', 'rfp', 'bid', 'procurement', 'career', 'careers', 'job', 'vacancy', 'vacancies', 'publication', 'report', 'annual report', 'audit',
      'ጨረታ', 'የስራ እድል', 'ስራ', 'ህትመት', 'ሪፖርት', 'ኦዲት',
      'caalbaasii', 'hojii', 'maxxansa', 'gabaasa', 'odiitii',
      'ጨረታታት', 'ስራሕ', 'ሕትመት', 'ጸብጻብ', 'ኦዲት'
    ],
    title: 'Open Tenders, Careers & Annual Reports',
    titleAm: 'ክፍት ጨረታዎች፣ የስራ እድሎች እና ዓመታዊ ሪፖርቶች',
    titleOm: 'Caalbaasii, Carraa Hojii fi Gabaasa Waggaa',
    titleTi: 'ክፍቲ ጨረታታት፣ ዕድላት ስራሕን ዓመታዊ ጸብጻባትን',
    content: 'All active ADRA Ethiopia tenders/RFPs, open field and HQ job vacancies, audited financial statements, and technical manuals are openly published in the Work with Us section.',
    contentAm: 'ሁሉም ክፍት የአድራ ኢትዮጵያ ጨረታዎች፣ የስራ ማስታወቂያዎች፣ ኦዲት የተደረጉ የፋይናንስ ሪፖርቶች እና ቴክኒካዊ መመሪያዎች በ"ከእኛ ጋር ይስሩ" ክፍል በግልጽ ቀርበዋል።',
    contentOm: 'Caalbaasiiwwan banaa, carraawwan hojii, gabaasa odiitii fi qajeelfamoonni teeknikaa ADRA Itoophiyaa hundi kutaa "Waliin Hojii" keessatti argamu.',
    contentTi: 'ኩሎም ክፍቲ ጨረታታት፣ ናይ ስራሕ ዕድላት፣ ኦዲት ዝተገብሮም ፋይናንሳዊ ጸብጻባትን መምርሒታትን ኣብ ክፍሊ "ምሳና ስርሑ" ብግሉጽነት ተዘርጊሖም ኣለዉ።',
    sourceSection: 'Work with Us',
    sourceSectionAm: 'ከእኛ ጋር ይስሩ',
    sourceSectionOm: 'Waliin Hojii',
    sourceSectionTi: 'ምሳና ስርሑ',
    sourceLink: '#work-with-us'
  },
  {
    id: 'contact-hq',
    topic: 'Headquarters & Contact Information',
    keywords: ['contact', 'office', 'phone', 'email', 'address', 'location', 'kirkos', 'p.o. box', 'telephone', '+251', 'አድራሻ', 'ስልክ', 'teessoo', 'bilbila', 'ኣድራሻ', 'ስልኪ'],
    title: 'National Headquarters & Field Hubs',
    titleAm: 'ዋና መስሪያ ቤት እና የክልል ቢሮዎች',
    titleOm: 'Waajjira Muummee fi Dameelee Naannoo',
    titleTi: 'ቀንዲ ቤት ጽሕፈትን ጨንፈራት ክልልን',
    content: 'ADRA Ethiopia Country Office is on Ras Desta Damtew Rd, Kirkos Sub-City, Kebele 80, Addis Ababa (P.O. Box 145). Tel: +251-115-512212. Email: info@adraethiopia.org. Hours: Mon–Thu 8:30 AM–5:30 PM, Fri 8:30 AM–1:30 PM.',
    contentAm: 'የአድራ ኢትዮጵያ ዋና መስሪያ ቤት፡ ራስ ደስታ ዳምጠው መንገድ፣ ቂርቆስ ክፍለ ከተማ፣ አዲስ አበባ። ስልክ፡ +251-115-512212። ኢሜይል፡ info@adraethiopia.org።',
    contentOm: 'Waajjirri Muummee Finfinnee, Qirqoositti argama (Lakk. Postaa 145). Bilbila: +251-115-512212. Imeelii: info@adraethiopia.org.',
    contentTi: 'ቀንዲ ቤት ጽሕፈት፡ ጎደና ራስ ደስታ ዳምጠው፣ ቂርቆስ፣ ኣዲስ ኣበባ (ሳ.ፖ 145)። ስልኪ፡ +251-115-512212። ኢመይል፡ info@adraethiopia.org።',
    sourceSection: 'Contact',
    sourceSectionAm: 'አድራሻ',
    sourceSectionOm: 'Qunnami',
    sourceSectionTi: 'ርክብ',
    sourceLink: '#contact'
  }
];

export function getLocalizedKnowledgeItem(item: ChatKnowledgeItem, lang: Language) {
  return {
    title:
      lang === 'am' ? item.titleAm :
      lang === 'om' ? item.titleOm :
      lang === 'ti' ? item.titleTi :
      item.title,
    content:
      lang === 'am' ? item.contentAm :
      lang === 'om' ? item.contentOm :
      lang === 'ti' ? item.contentTi :
      item.content,
    sourceSection:
      lang === 'am' ? item.sourceSectionAm :
      lang === 'om' ? item.sourceSectionOm :
      lang === 'ti' ? item.sourceSectionTi :
      item.sourceSection,
  };
}

export function findRelevantAnswers(query: string, _lang: Language = 'en'): { item: ChatKnowledgeItem; score: number }[] {
  const q = query.toLowerCase().trim();
  const tokens = q.split(/[\s,?.!/()·:;]+/).filter((tok) => tok.length >= 2);

  const scored = WEBSITE_KNOWLEDGE.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      const kwLow = kw.toLowerCase();
      if (q.includes(kwLow)) {
        score += 4;
      } else if (tokens.some((tok) => tok === kwLow || (tok.length >= 4 && kwLow.includes(tok)))) {
        score += 2;
      }
    }
    if (
      item.title.toLowerCase().includes(q) ||
      item.titleAm.includes(q) ||
      item.titleOm.toLowerCase().includes(q) ||
      item.titleTi.includes(q)
    ) {
      score += 5;
    }
    if (
      item.content.toLowerCase().includes(q) ||
      item.contentAm.includes(q) ||
      item.contentOm.toLowerCase().includes(q) ||
      item.contentTi.includes(q)
    ) {
      score += 2;
    }
    if (item.topic.toLowerCase().includes(q)) score += 4;
    return { item, score };
  });

  return scored
    .filter((res) => res.score > 0)
    .sort((a, b) => b.score - a.score);
}

