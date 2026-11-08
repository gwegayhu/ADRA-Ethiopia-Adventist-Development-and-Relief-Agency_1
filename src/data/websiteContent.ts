export interface ChatKnowledgeItem {
  id: string;
  topic: string;
  keywords: string[];
  title: string;
  content: string;
  contentAm: string;
  sourceSection: string;
  sourceLink: string;
}

export const WEBSITE_KNOWLEDGE: ChatKnowledgeItem[] = [
  {
    id: 'who-we-are',
    topic: 'About ADRA Ethiopia',
    keywords: ['about', 'who we are', 'what is adra', 'history', 'background', 'mission', 'values', 'faith', 'church', 'director', 'staff'],
    title: 'Who We Are & Mission',
    content: 'ADRA Ethiopia is the country office of the Adventist Development and Relief Agency (ADRA), a global humanitarian organization present in more than 100 countries. We work with communities across Ethiopia to deliver emergency relief and long-term development, regardless of ethnicity, religion, gender, or political affiliation. Governed by values of justice, compassion, and love, our team consists of 100% Ethiopian national professionals.',
    contentAm: 'አድራ ኢትዮጵያ በዓለም አቀፍ ደረጃ በ100+ አገሮች የሚንቀሳቀሰው የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) የኢትዮጵያ ቢሮ ነው። ከ1982 ጀምሮ በፍትህ፣ ርህራሄና ፍቅር መርህ መሰረት 100% በኢትዮጵያውያን ባለሙያዎች የሚመራ መንግስታዊ ያልሆነ ድርጅት ነው።',
    sourceSection: 'Who We Are',
    sourceLink: '#who-we-are'
  },
  {
    id: 'leadership',
    topic: 'Leadership & Team Structure',
    keywords: ['leadership', 'team', 'director', 'country director', 'board', 'management', 'staff', 'executive', 'dima saba'],
    title: 'Organizational Leadership in 5 Tiers',
    content: 'ADRA Ethiopia is organized into 5 specialized categories of 4 members each: 1) Board of Directors (chaired by Dr. Tadesse Kebede with Rahel Negash CPA, Pastor Melaku Feyisa, Dr. Elizabeth Wolde), 2) Executive Leadership (Country Director Dr. Dima Saba, Finance & Operations Director Yohannes Kebede, Program Director Senait Bekele, HR Director Abebe Mengistu), 3) Department Heads (Safeguarding Lead Selamawit Tadesse, Logistics Lead Kassahun Gebre, MEAL Lead Hiwot Worku, ICT Lead Biniam Zerihun), 4) Program Managers (Eng. Fikru Getachew - WASH, Dr. Almaz Tefera - Health/Nutrition, Getachew Lemma - Agriculture, Tigist Solomon - Education/TVET), and 5) Field Team (Mohamed Abdi - Somali, Tolera Dida - Oromia, Birhanu Assefa - Amhara/Afar, Marta Hailu - South/Sidama).',
    contentAm: 'የአድራ ኢትዮጵያ አመራር በ5 ዋና ዘርፎች የተዋቀረ ሲሆን የሀገር ውስጥ ዳይሬክተሩ ዶ/ር ዲማ ሳባ ናቸው።',
    sourceSection: 'Leadership',
    sourceLink: '#who-we-are'
  },
  {
    id: 'history',
    topic: 'History of ADRA Ethiopia',
    keywords: ['history', 'started', 'founded', '1982', '1992', 'famine', 'legetaffo', 'kirkos', 'timeline'],
    title: 'Four Decades of Service in Ethiopia',
    content: 'ADRA commenced operations in Ethiopia in 1982 in response to the severe drought in Wello and Asaita, establishing an emergency shelter in Legetaffo. In 1992, the Ethiopian government allocated land in Kirkos Sub-City, Addis Ababa, in recognition of ADRA\'s drought relief efforts. In 2006, ADRA pioneered the Community Therapeutic Care (CTC) model with USAID to treat acute malnutrition.',
    contentAm: 'አድራ ኢትዮጵያ በ1982 ዓ.ም በድርቅ ሳቢያ የተፈናቀሉትን ለመርዳት በለገጣፎ የአደጋ ጊዜ መጠለያ በመክፈት ስራ ጀመረ። በ1992 ዓ.ም የኢትዮጵያ መንግስት በአዲስ አበባ ቂርቆስ መሬት ሰጠ።',
    sourceSection: 'Our History',
    sourceLink: '#our-history'
  },
  {
    id: 'six-areas',
    topic: 'What We Do - 6 Areas of Work',
    keywords: ['what we do', 'sectors', 'programs', 'areas of work', 'wash', 'water', 'emergency', 'food', 'health', 'education', 'tvet', 'energy'],
    title: 'Six Areas of Work, One Commitment to Dignity',
    content: 'ADRA Ethiopia operates across six core programmatic pillars: 1) Emergency Management (rapid disaster response & recovery), 2) Food Security & Livelihoods (climate-smart farming), 3) Water, Sanitation & Hygiene - WASH (solar boreholes & piped water), 4) Health & Nutrition (treating severe malnutrition via CTC), 5) Education (SEAQE II program for girls & inclusive schools), 6) Economic Growth & TVET (Green Energy solar technician certification).',
    contentAm: 'አድራ ኢትዮጵያ በ6 ዋና ዘርፎች ይሰራል፡ 1) የአደጋ ጊዜ አስተዳደር 2) የምግብ ዋስትናና ኑሮ 3) ውሃ፣ ንፅህናና ሳኒቴሽን (WASH) 4) ጤናና ስነ-ምግብ (CTC) 5) ትምህርት (SEAQE II) 6) ኢኮኖሚ እድገትና አረንጓዴ ኃይል ቴክኒክና ሙያ።',
    sourceSection: 'What We Do',
    sourceLink: '#what-we-do'
  },
  {
    id: 'ai-for-good',
    topic: 'AI for Good Principles',
    keywords: ['ai', 'ai for good', 'artificial intelligence', 'technology', 'principles', 'data', 'ethics', 'six rules', 'people first', 'human oversight'],
    title: 'AI for Good: Technology that Serves People with Dignity',
    content: 'ADRA Ethiopia approaches AI and data carefully, openly, and always with communities at the centre. Our six core principles are: 1. People first (technology never replaces relationships), 2. Human oversight (a trained person reviews any AI output before it affects life or aid), 3. Privacy and consent (we protect personal data, especially for children and people at risk), 4. Fairness (tools are checked for bias so no group is excluded), 5. Transparency (open about when and why we use AI), 6. Local languages (technology must work in languages people speak, including Amharic, not just English).',
    contentAm: 'የአድራ ኢትዮጵያ የቴክኖሎጂና አርቴፊሻል ኢንተለጀንስ 6 መርሆዎች፡ 1. ሰው ቅድሚያ ይሰጠዋል 2. የሰው ቁጥጥርና ክትትል 3. ግላዊነትና ፈቃድ 4. ፍትሃዊነት 5. ግልጽነት 6. የሀገር ውስጥ ቋንቋዎች (አማርኛን ጨምሮ)።',
    sourceSection: 'AI for Good',
    sourceLink: '#ai-for-good'
  },
  {
    id: 'where-we-work',
    topic: 'Where We Work Across Ethiopia',
    keywords: ['where we work', 'regions', 'somali', 'oromia', 'amhara', 'afar', 'tigray', 'gambela', 'sidama', 'addis ababa', 'locations'],
    title: 'Regional Footprint Across 8 Regions',
    content: 'ADRA Ethiopia is active in 8 regions: Somali Region (Kelafo & Gode - deep solar boreholes & CTC malnutrition care), Oromia Region (East Hararghe & Bale - drip irrigation & WASH), Amhara (South Wollo education & watershed repair), Afar (saline water systems & nomadic clinics), Tigray (school rehabilitation & seed recovery), Gambela (Baro river horticulture), Sidama (inclusive education & disability support), and Addis Ababa (HQ & Green Energy TVET Coordination Hub).',
    contentAm: 'አድራ ኢትዮጵያ በ8 ክልሎች ይሰራል፡ ሶማሌ፣ ኦሮሚያ፣ አማራ፣ አፋር፣ ትግራይ፣ ጋምቤላ፣ ሲዳማ እና አዲስ አበባ።',
    sourceSection: 'Where We Work',
    sourceLink: '#where-we-work'
  },
  {
    id: 'telebirr-donation',
    topic: 'Donate via TeleBirr',
    keywords: ['telebirr', 'tele birr', 'ethio telecom', 'mobile money', 'short code', 'merchant', 'qr', 'ussd', '*127#', '251911', 'scan'],
    title: 'Donating through TeleBirr App, QR Scan & USSD',
    content: 'You can donate directly to ADRA Ethiopia using TeleBirr: 1) Scan Code to Pay: Open the Donate modal and scan the TeleBirr QR code with your TeleBirr app, 2) Pay Merchant: Enter ADRA Merchant Code: 251911 in the TeleBirr app, 3) Via USSD dial: *127# on your mobile phone, select "Pay Merchant" and enter 251911.',
    contentAm: 'በቴሌብር ለመለገስ፡ 1) በቴሌብር መተግበሪያ የQR ኮድ ስካን በማድረግ 2) የነጋዴ ቁጥር 251911 በማስገባት ወይም 3) በUSSD *127# በመደወል መለገስ ይቻላል።',
    sourceSection: 'Donate Now',
    sourceLink: '#donate'
  },
  {
    id: 'cbe-donation',
    topic: 'Donate via CBE Birr & Commercial Bank',
    keywords: ['cbe', 'cbe birr', 'commercial bank of ethiopia', 'bank transfer', 'account number', '*847#', '847123', '1000012345678', 'scan'],
    title: 'Donating through CBE Birr & CBE Mobile',
    content: 'You can contribute via Commercial Bank of Ethiopia (CBE): 1) Scan Code to Pay: Open the Donate modal and scan the official CBE QR code with CBE Mobile, 2) CBE Birr USSD: Dial *847#, choose "Pay Biller" and enter Biller Code: 847123, 3) Direct Transfer: Transfer to Account Name: "ADRA Ethiopia Relief & Development", Account Number: 1000012345678 (Kirkos Branch, Addis Ababa).',
    contentAm: 'በኢትዮጵያ ንግድ ባንክ (CBE) ለመለገስ፡ በCBE QR ኮድ ስካን በማድረግ፣ በCBE Birr በ*847# (ቢለር ኮድ 847123) ወይም በሂሳብ ቁጥር 1000012345678 መለገስ ይቻላል።',
    sourceSection: 'Donate Now',
    sourceLink: '#donate'
  },
  {
    id: 'stripe-donation',
    topic: 'Donate via Stripe (Card & Apple Pay)',
    keywords: ['stripe', 'credit card', 'debit card', 'visa', 'mastercard', 'apple pay', 'google pay', 'international', 'usd'],
    title: 'Donating through Stripe Global Gateway',
    content: 'For international donors and credit/debit cards: ADRA Ethiopia supports Stripe for instant, secure card payments (Visa, Mastercard, American Express) as well as Apple Pay and Google Pay. You can also scan the Stripe Mobile QR code in our Donate modal to pay directly on your phone.',
    contentAm: 'በStripe በቪዛ፣ ማስተርካርድ፣ አፕል ፔይ (Apple Pay) እና ጎግል ፔይ በUSD መለገስ ይችላሉ። በስልክዎ የStripe QR ኮድ ስካን ማድረግም ይቻላል።',
    sourceSection: 'Donate Now',
    sourceLink: '#donate'
  },
  {
    id: 'contact-hq',
    topic: 'Headquarters & Contact Information',
    keywords: ['contact', 'office', 'phone', 'email', 'address', 'location', 'kirkos', 'p.o. box', 'telephone'],
    title: 'National Headquarters & Field Hubs',
    content: 'ADRA Ethiopia Country Office is located in Kirkos Sub-City, Kebele 80, Addis Ababa, Ethiopia (P.O. Box 145). Telephone: +251 11 551 2212 / +251 11 551 2213. Email: info@adraethiopia.org. Office hours: Mon–Thu 8:30 AM–5:30 PM, Fri 8:30 AM–1:30 PM.',
    contentAm: 'የአድራ ኢትዮጵያ ዋና መስሪያ ቤት አድራሻ፡ አዲስ አበባ፣ ቂርቆስ ክፍለ ከተማ፣ ቀበሌ 80። ስልክ፡ +251 11 551 2212። ኢሜይል፡ info@adraethiopia.org።',
    sourceSection: 'Contact',
    sourceLink: '#contact'
  }
];

export function findRelevantAnswers(query: string, lang: 'en' | 'am' = 'en'): { item: ChatKnowledgeItem; score: number }[] {
  const q = query.toLowerCase().trim();
  const scored = WEBSITE_KNOWLEDGE.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (q.includes(kw)) score += 3;
    }
    if (item.title.toLowerCase().includes(q)) score += 5;
    if (item.content.toLowerCase().includes(q)) score += 2;
    if (item.topic.toLowerCase().includes(q)) score += 4;
    return { item, score };
  });

  return scored
    .filter((res) => res.score > 0)
    .sort((a, b) => b.score - a.score);
}
