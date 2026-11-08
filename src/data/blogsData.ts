export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  titleAm: string;
  category: string;
  categoryAm: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    roleAm: string;
  };
  summary: string;
  summaryAm: string;
  content: string[];
  contentAm: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  quote?: {
    text: string;
    textAm: string;
    author: string;
  };
}

export const SAMPLE_BLOGS: BlogItem[] = [
  {
    id: 'solar-water-somali-desert',
    slug: 'solar-energy-clean-water-somali-desert',
    title: 'Harnessing Solar Energy to Bring Year-Round Clean Water to Somali Region',
    titleAm: 'በሶማሌ ክልል በረሃማ አካባቢዎች በሶላር ኃይል የሚሰሩ የንጹህ ውሃ ፕሮጀክቶች',
    category: 'Water, Sanitation & Hygiene',
    categoryAm: 'ውሃ፣ ሳኒቴሽን እና ንጽህና',
    date: 'October 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Yohannes Berhanu',
      role: 'WASH Technical Lead, ADRA Ethiopia',
      roleAm: 'የውሃ እና ሳኒቴሽን ከፍተኛ ባለሙያ'
    },
    summary: 'In the arid pastoral expanses of Warder and Kebribeyah, recurring droughts have dried traditional shallow wells. Discover how ADRA installed 24-kilowatt ground-mounted solar pumping stations that pull pure groundwater from 210 meters deep, serving over 18,000 pastoralists with zero fuel costs.',
    summaryAm: 'በሶማሌ ክልል በተከሰተው ድርቅ ምክንያት ባህላዊ ጉድጓዶች በደረቁበት ወቅት አድራ ኢትዮጵያ በሶላር ኃይል የሚሰሩ የጥልቅ ጉድጓድ የውሃ መሳቢያዎችን በመትከል ከ18,000 በላይ አርብቶ አደሮች ያለማቋረጥ ንጹህ ውሃ እንዲያገኙ አስችሏል።',
    content: [
      'In the pastoral lowlands of the Somali Regional State, water is not simply a convenience; it defines migration, school attendance, and survival. For decades, pastoral families spent up to five hours daily trekking with jerrycans and donkeys toward brackish ponds, exposing children and mothers to severe waterborne illnesses.',
      'To solve this crisis sustainably, ADRA Ethiopia initiated the Renewable Groundwater for Pastoral Resilience project. In partnership with the Regional Water Resource Bureau, engineering teams drilled deep aquifer boreholes reaching 210 meters beneath the scorched desert floor and erected robust 24-kilowatt photovoltaic solar arrays.',
      'Unlike diesel generators, which often fell dormant due to exorbitant fuel transportation costs and mechanical breakdowns in remote woredas, solar pumping stations operate autonomously from dawn to dusk with near-zero operating overhead.',
      'Crucially, ownership was transferred directly into community hands. ADRA established and trained Water Sanitation and Hygiene Committees (WASHCos), with 50% women representation in leadership, ensuring equitable water distribution for both domestic households and designated livestock watering troughs.'
    ],
    contentAm: [
      'በሶማሌ ክልል የውሃ እጥረት የህዝቡን የኑሮ ሁኔታ፣ የትምህርት ተሳትፎ እና የጤና ደህንነት የሚወስን ዋነኛ ፈተና ነበር። እናቶችና ህፃናት ለረጅም ሰዓታት ተጉዘው ያልጠራ ውሃ ለመቅዳት ይገደዱ ነበር።',
      'አድራ ኢትዮጵያ ከክልሉ የውሃ ቢሮ ጋር በመተባበር 210 ሜትር ጥልቀት ያላቸውን የከርሰ ምድር ጉድጓዶች ቆፍሮ በ24 ኪሎዋት የሶላር ኃይል የሚሰሩ ዘመናዊ የፓምፕ ሲስተሞችን ተክሏል።',
      'ይህ ፕሮጀክት የነዳጅ ወጪን ሙሉ በሙሉ ያስቀረ ሲሆን ከ18,000 በላይ ሰዎችንና ከ40,000 በላይ የቤት እንስሳትን በቋሚነት ያገለግላል።'
    ],
    metrics: [
      { label: 'Continuous Water Access', value: '18,200+' },
      { label: 'Fuel Costs Eliminated', value: '100%' },
      { label: 'Solar Boreholes Live', value: '4 Systems' }
    ],
    tags: ['Solar Energy', 'Somali Region', 'WASH', 'Climate Adaptation'],
    image: '/src/assets/images/solar_water_desert_1792618997738.jpg',
    quote: {
      text: 'Before this solar water point, our daughters walked until noon just to fill two yellow jerrycans. Today, water flows 200 meters from our homesteads, and our girls are first in their classrooms every morning.',
      textAm: 'ይህ የሶላር ውሃ ነጥብ ከመገንባቱ በፊት ሴት ልጆቻችን ሁለት ጀሪካን ውሃ ለመቅዳት እስከ እኩለ ቀን ድረስ ይጓዙ ነበር። ዛሬ ግን ውሃ በደጃችን በመገኘቱ ልጆቻችን በትምህርታቸው ላይ ያተኩራሉ።',
      author: 'Amina Farah, Kebribeyah WASHCo Chairperson'
    }
  },
  {
    id: 'girls-stem-education-oromia',
    slug: 'empowering-girls-through-stem-education-oromia',
    title: 'Breaking Barriers: STEM Laboratories and Digital Classrooms for Girls in West Oromia',
    titleAm: 'በምዕራብ ኦሮሚያ የሴት ተማሪዎችን የሳይንስና የቴክኖሎጂ (STEM) ትምህርት ማጎልበት',
    category: 'Education & Protection',
    categoryAm: 'ትምህርት እና ጥበቃ',
    date: 'September 28, 2026',
    readTime: '4 min read',
    author: {
      name: 'Aster Tolessa',
      role: 'Senior Education Specialist, ADRA Ethiopia',
      roleAm: 'ከፍተኛ የትምህርት ባለሙያ'
    },
    summary: 'How solar-powered digital tablets, dedicated science kits, and gender-segregated WASH facilities in 14 rural primary schools across Gimbi and Nekemte reversed adolescent dropout rates and ignited a passion for mathematics and science.',
    summaryAm: 'በጊምቢ እና ነቀምቴ በ14 ገጠር ትምህርት ቤቶች ውስጥ በሶላር የሚሰሩ ዲጂታል ታብሌቶችን፣ የሳይንስ ላቦራቶሪ ቁሳቁሶችን እና የተሟሉ የሴቶች ንጽህና ማዕከላትን በማቋቋም የተማሪዎችን ውጤትና ተሳትፎ ያሳደገ ፕሮጀክት።',
    content: [
      'In many rural highlands of West Oromia, adolescent girls faced compounding obstacles to completing upper primary school. Lack of practical science apparatus, absent menstrual hygiene amenities, and domestic responsibilities contributed to a 42% dropout rate among girls transitioning from Grade 6 to Grade 8.',
      'Through the "Bright Minds, Dignified Futures" initiative, ADRA Ethiopia transformed 14 rural primary schools. We installed off-grid rooftop solar systems powering 40 rugged offline tablets preloaded with Ministry of Education-aligned interactive STEM curricula and local language science modules.',
      'Alongside the technological upgrade, ADRA constructed dignified, gender-separated sanitation blocks featuring running water, incinerators, and private hygiene rooms stocked with reusable sanitary materials.',
      'The results have been transformative: female dropout in target schools plummeted below 4%, and 92% of girls scored in the top quintile in the latest regional standardized examinations.'
    ],
    contentAm: [
      'በምዕራብ ኦሮሚያ ገጠራማ ትምህርት ቤቶች ውስጥ የላቦራቶሪ እቃዎች እጥረትና የንጽህና መጠበቂያ ስፍራዎች አለመኖር የሴት ተማሪዎችን ትምህርት ማቋረጥ ያባብስ ነበር።',
      'አድራ ኢትዮጵያ በ14 ትምህርት ቤቶች የሶላር ኃይል፣ የኮምፒውተር ታብሌቶች፣ የሳይንስ መማሪያ እቃዎች እና የተሟሉ የሴቶች ንጽህና ማዕከላትን ገንብቷል።',
      'በዚህም የተማሪዎች ማቋረጥ በከፍተኛ ደረጃ የቀነሰ ሲሆን በክልላዊ ፈተናዎች የላቀ ውጤት አስመዝግበዋል።'
    ],
    metrics: [
      { label: 'Girls Retained in School', value: '3,450' },
      { label: 'Pass Rate in Regional Exams', value: '92%' },
      { label: 'STEM Classrooms Built', value: '14 Hubs' }
    ],
    tags: ['Girls Education', 'Oromia', 'STEM', 'Child Protection'],
    image: '/src/assets/images/adra_education_girls_1792612496863.jpg',
    quote: {
      text: 'Touching a digital tablet and observing microscope slides for the first time showed our students that science is not a distant concept in textbooks, but their future vocation.',
      textAm: 'ተማሪዎቻችን ለመጀመሪያ ጊዜ ዲጂታል ታብሌቶችንና ማይክሮስኮፖችን ሲጠቀሙ ሳይንስ የመጽሐፍ ብቻ ሳይሆን የወደፊት ህልማቸው መሆኑን ተረድተዋል።',
      author: 'Diriba Mengesha, Principal at Bikilal Primary School'
    }
  },
  {
    id: 'climate-smart-agriculture-sidama',
    slug: 'climate-smart-agriculture-sidama-smallholders',
    title: 'Transforming Harvests: Climate-Smart Teff and Micro-Irrigation in Sidama',
    titleAm: 'በሲዳማ የአየር ንብረት ተስማሚ የጤፍና የጓሮ አትክልት ምርትን ማሳደግ',
    category: 'Food Security & Livelihoods',
    categoryAm: 'የምግብ ዋስትና እና ኑሮ ማሻሻል',
    date: 'September 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alemayehu Mengistu',
      role: 'Agronomist & Livelihoods Lead',
      roleAm: 'የግብርና እና ኑሮ ማሻሻል ባለሙያ'
    },
    summary: 'With seasonal rains increasingly erratic, ADRA partnered with 4,200 smallholder farming households in Sidama and Southern Ethiopia to introduce drought-resilient teff seeds, biological composting, and gravity drip irrigation.',
    summaryAm: 'የዝናብ መዛባትን ለመቋቋም በሲዳማ ክልል 4,200 አርሶ አደሮችን በድርቅ ተቋቋሚ የተሻሻሉ ዘሮች፣ በኦርጋኒክ ማዳበሪያ ዝግጅት እና በጠብታ መስኖ ስራዎች በማሰልጠን የምርት ውጤታማነትን በእጥፍ ያሳደገ ተሞክሮ።',
    content: [
      'The lush hillsides of Sidama are renowned for agricultural vitality, yet erratic weather cycles and soil nutrient depletion have placed smallholder farming families on the edge of seasonal food deficits.',
      'ADRA Ethiopia worked directly with local agricultural extension workers to establish 35 Farmer Field Schools (FFS). Through hands-on demonstration plots, farmers learned the System of Teff Intensification (STI), which uses 80% less seed while yielding significantly heavier, disease-resistant grain heads.',
      'To address dry-season dry spells, ADRA co-funded low-cost gravity drip irrigation kits connected to rainwater harvesting tanks. Participating families now harvest two additional vegetable cycles annually, cultivating nutrient-dense cabbages, tomatoes, and orange-fleshed sweet potatoes.',
      'The surplus produce is sold through 28 newly registered marketing cooperatives, generating vital supplemental household income used for education and medical expenses.'
    ],
    contentAm: [
      'በሲዳማ ክልል ያልተረጋጋው የዝናብ ሁኔታ በአርሶ አደሮች ምርታማነት ላይ ተፅዕኖ አሳድሮ ቆይቷል።',
      'አድራ 35 የአርሶ አደር ማሰልጠኛ ማዕከላትን በማቋቋም አነስተኛ ዘርን ተጠቅመው ከፍተኛ ምርት የሚያስገኙ ዘመናዊ የጤፍ አመራረት ዘዴዎችን አስተምሯል።',
      'በተጨማሪም የጠብታ መስኖ ዘዴዎችን በመጠቀም በበጋ ወራት ተጨማሪ የአትክልትና ፍራፍሬ ምርት እንዲያገኙ አስችሏል።'
    ],
    metrics: [
      { label: 'Yield Increase Recorded', value: '+140%' },
      { label: 'Smallholder Farmers Trained', value: '4,200' },
      { label: 'Cooperative Revenue', value: '18M+ ETB' }
    ],
    tags: ['Food Security', 'Sidama', 'Micro-Irrigation', 'Resilience'],
    image: '/src/assets/images/adra_agriculture_food_1792612497905.jpg',
    quote: {
      text: 'We went from worrying if our children would have one meal a day during the dry season to supplying fresh vegetables to the regional market weekly.',
      textAm: 'በበጋ ወቅት ልጆቻችን በቀን አንድ ጊዜ የሚበሉት አጥተው እንጨነቅ ነበር፤ ዛሬ ግን በየሳምንቱ ትኩስ አትክልት ለገበያ እናቀርባለን።',
      author: 'Tadelech Shiferaw, Farmer Field School Coordinator'
    }
  },
  {
    id: 'mobile-nutrition-clinics-afar',
    slug: 'mobile-health-nutrition-clinics-afar-nomads',
    title: 'Lifeline in the Dunes: Mobile Health and Nutrition Units in Afar’s Pastoral Zones',
    titleAm: 'በአፋር ክልል በርቀት ለሚገኙ አርብቶ አደሮች ህይወት አድን የተንቀሳቃሽ ጤና አገልግሎት',
    category: 'Emergency Response & Health',
    categoryAm: 'የአደጋ ጊዜ ምላሽ እና ጤና',
    date: 'August 22, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Fatuma Ali',
      role: 'Emergency Health & Nutrition Coordinator',
      roleAm: 'የአደጋ ጊዜ ጤና እና ስነ-ምግብ አስተባባሪ'
    },
    summary: 'Traversing extreme temperatures and isolated volcanic valleys, ADRA’s all-terrain mobile clinics deliver therapeutic nutrition, prenatal screenings, and immunizations directly to nomadic settlements in Zone 2 and Zone 4 of Afar.',
    summaryAm: 'አድራ ኢትዮጵያ በአፋር ክልል ተንቀሳቃሽ የህክምና ቡድኖችን በማሰማራት ከባድ የተመጣጠነ ምግብ እጥረት ያጋጠማቸውን ህፃናት እና ነፍሰ ጡር እናቶችን በቦታው ድረስ ሄዶ በማከም በርካታ ህይወትን ታድጓል።',
    content: [
      'In the Afar depression, where temperatures frequently exceed 45°C and nomadic hamlets shift with pasture availability, conventional static health posts cannot reach every family during climate-induced emergencies.',
      'ADRA Ethiopia deployed four-wheel-drive Mobile Health and Nutrition Teams (MHNTs) staffed by Ethiopian doctors, midwives, and nutrition nurses. The teams carry portable solar vaccine refrigerators, diagnostic test kits, and therapeutic rations.',
      'Using mid-upper arm circumference (MUAC) screening, the teams identify severe acute malnutrition (SAM) and moderate acute malnutrition (MAM) in infants and young children, initiating immediate Outpatient Therapeutic Program (OTP) regimens with Ready-to-Use Therapeutic Food (RUTF).',
      'The mobile units also provide essential antenatal checkups, safe delivery kits, childhood immunizations against measles and polio, and emergency water treatment solutions for remote nomad settlements.'
    ],
    contentAm: [
      'በአፋር በርሃማ ስፍራዎች ቋሚ የጤና ኬላዎች በማይደርሱባቸው አካባቢዎች ተንቀሳቃሽ የህክምና አምቡላንሶች ተሰማርተዋል።',
      'ቡድኖቹ በሶላር የሚሰሩ የመድሃኒት ማቀዝቀዣዎችን በመያዝ ክትባቶችን፣ የተመጣጠነ ምግብ ህክምናዎችን እና የእናቶች ምርመራን ይሰጣሉ።',
      'ባለፉት ወራት ከ6,800 በላይ ህጻናት ተመርምረው የህይወት አድን ህክምና ተደርጎላቸዋል።'
    ],
    metrics: [
      { label: 'Children Screened', value: '6,800+' },
      { label: 'Cure Recovery Rate', value: '98.4%' },
      { label: 'Nomadic Settlements Visited', value: '76 Sites' }
    ],
    tags: ['Emergency Health', 'Afar', 'Nutrition', 'Mobile Clinics'],
    image: '/src/assets/images/adra_emergency_health_1792612497133.jpg',
    quote: {
      text: 'When my twin boys fell ill with severe fever and weakness, the mobile clinic reached our settlement just in time. The medication and therapeutic food saved their lives.',
      textAm: 'መንታ ልጆቼ በከፍተኛ ትኩሳትና ድካም በተዳከሙበት ወቅት የተንቀሳቃሽ ህክምና ቡድኑ ደርሶ ህክምና ባይሰጣቸው ኖሮ ላጣቸው እችል ነበር።',
      author: 'Medina Humed, Pastoralist Mother in Teru Woreda'
    }
  },
  {
    id: 'women-micro-enterprise-amhara',
    slug: 'resilience-micro-enterprises-women-amhara',
    title: 'From Survival to Prosperity: Women’s Village Savings and Micro-Enterprises in Amhara',
    titleAm: 'በአማራ ክልል የሴቶች የቁጠባና ብድር ማህበራት እና አነስተኛ ንግድ ስራዎች',
    category: 'Economic Growth & Enterprise',
    categoryAm: 'ኢኮኖሚ እና ስራ ፈጠራ',
    date: 'July 30, 2026',
    readTime: '4 min read',
    author: {
      name: 'Meseret Kebede',
      role: 'Micro-Finance & Livelihoods Officer',
      roleAm: 'የማይክሮ ፋይናንስ እና የሴቶች አቅም ግንባታ ባለሙያ'
    },
    summary: 'Empowering 1,280 widowed and displaced female heads of households in South Gondar through financial literacy training, catalytic seed grants, and Village Savings and Loan Associations (VSLAs) producing honey, poultry, and textiles.',
    summaryAm: 'በደቡብ ጎንደር ለሚገኙ 1,280 የቤተሰብ አስተዳዳሪ ሴቶች የገንዘብ ቁጠባ ስልጠና፣ የመነሻ ካፒታል ድጋፍ እና በዶሮ እርባታ፣ በንብ ማነብ እና በሽመና ስራዎች ላይ የተሰማሩ ህብረት ስራ ማህበራትን በማቋቋም ዘላቂ ገቢ እንዲያገኙ ያስቻለ ስራ።',
    content: [
      'Protracted regional shocks and internal displacement often fall hardest on female-headed households, who face limited collateral to access formal banking or commercial credit in regional towns.',
      'ADRA Ethiopia launched the Women’s Economic Empowerment and Village Banking program across six woredas in South Gondar. We facilitated the creation of 64 Village Savings and Loan Associations (VSLAs), supplying sturdy lockboxes, passbooks, and 12-week financial management coaching.',
      'Upon graduating from the business simulation modules, each member received matching seed grants. Beneficiaries launched thriving collective enterprises, including modern modern top-bar beekeeping for white honey, bio-secure poultry production, and traditional woven textile manufacturing with direct buyers in regional markets.',
      'Every single VSLA group maintains a 99% loan repayment rate, with profits reinvested into children’s secondary school fees, household nutrition, and emergency emergency health funds.'
    ],
    contentAm: [
      'ሴት የቤተሰብ አስተዳዳሪዎች መደበኛ ባንኮችን ለመጠቀም ዋስትና በማጣታቸው ለችግር ይጋለጡ ነበር።',
      'አድራ 64 የሴቶች የቁጠባና ብድር ማህበራትን በማደራጀት የመነሻ ካፒታል ድጋፍ እና የቢዝነስ ስልጠና ሰጥቷል።',
      'ዛሬ እነዚህ ሴቶች በንብ ማነብ፣ በዶሮ እርባታ እና በሽመና ውጤቶች ገበያውን በመቆጣጠር ቤተሰቦቻቸውን በክብር እያስተዳደሩ ይገኛሉ።'
    ],
    metrics: [
      { label: 'Women Entrepreneurs', value: '1,280' },
      { label: 'Loan Repayment Rate', value: '99.2%' },
      { label: 'VSLAs Established', value: '64 Groups' }
    ],
    tags: ['Women Empowerment', 'Amhara', 'VSLA', 'Micro-Finance'],
    image: '/src/assets/images/hero_ethiopia_market_1792616573603.jpg',
    quote: {
      text: 'Joining the savings circle gave me dignity. With my first poultry grant, I bought 50 improved-breed layers. Now I pay my two daughters’ college boarding fees myself.',
      textAm: 'የቁጠባ ማህበሩን መቀላቀሌ ክብሬን አስመለሰልኝ፤ ዛሬ የሁለት ሴት ልጆቼን የኮሌጅ ወጪ በራሴ ጉልበት እሸፍናለሁ።',
      author: 'Almaz Tefera, VSLA Chairlady, Dera Woreda'
    }
  },
  {
    id: 'malnutrition-ctc-afar',
    slug: 'mobile-clinical-units-ctc-malnutrition-afar',
    title: 'Mobile Clinical Units & Community Therapeutic Care: Stamping Out Malnutrition in Afar Salt Basins',
    titleAm: 'በአፋር ክልል ተንቀሳቃሽ የህክምና ቡድኖች እና የማህበረሰብ የተመጣጠነ ምግብ እጥረት ማከሚያ ስራዎች',
    category: 'Emergency Response & Health',
    categoryAm: 'የአደጋ ምላሽ እና ጤና',
    date: 'June 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Mohammed Ahmed',
      role: 'Emergency Health Coordinator, Afar Field Hub',
      roleAm: 'የአደጋ ጊዜ ጤና እና ስነ-ምግብ አስተባባሪ'
    },
    summary: 'Traversing the hyper-arid plains of Berhale and Dalol where temperatures exceed 46°C, ADRA’s four-wheel-drive mobile clinics deliver ready-to-use therapeutic food (RUTF), maternal ultrasounds, and childhood immunizations directly to nomadic settlements.',
    summaryAm: 'በአፋር በርሃማ አካባቢዎች አድራ ኢትዮጵያ በአስቸጋሪ የአየር ጠባይ ውስጥ የሚገኙ አርብቶ አደሮች ድረስ በመጓዝ ህይወት አድን የህክምና እና የተመጣጠነ ምግብ እርዳታን በማድረስ የህጻናትን ሞት መከላከል ችሏል።',
    content: [
      'In the remote Danakil depression and adjacent pastoral woredas of Afar, temperatures frequently rise past 46°C, and pastoralist families follow fragile grazing corridors far from government hospitals.',
      'To ensure no child is left behind, ADRA Ethiopia deployed four ruggedized Mobile Health and Nutrition Teams (MHNTs). Each team is staffed by a medical doctor, midwife, nutrition screening nurse, and immunization officer, equipped with all-terrain vehicles and solar portable vaccine cool-boxes.',
      'Our teams established 42 village-level Outpatient Therapeutic Program (OTP) sites. Rather than transferring frail children to regional centers days away, health extension workers provide weekly rations of RUTF, monitor MUAC arm bands, and educate mothers on local infant feeding practices.',
      'Over the past six months alone, our recovery cure rate for children suffering from Severe Acute Malnutrition reached 95.8%, well above international humanitarian Sphere benchmarks.'
    ],
    contentAm: [
      'በአፋር በርሃሌ እና ዳሎል ወረዳዎች የሚገኙ አርብቶ አደሮች ከአገልግሎት መስጫ ማዕከላት በጣም ርቀው ይገኛሉ።',
      'አድራ ኢትዮጵያ አራት ተንቀሳቃሽ የህክምና ቡድኖችን በማሰማራት ከ42 በላይ የገጠር መንደሮችን በቋሚነት ያገለግላል።',
      'በዚህም ከባድ የተመጣጠነ ምግብ እጥረት የነበረባቸውን ህጻናት 95.8% የማዳን ስኬት ተመዝግቧል።'
    ],
    metrics: [
      { label: 'Children Screened & Treated', value: '42,500+' },
      { label: 'SAM Cure Rate Achieved', value: '95.8%' },
      { label: 'Remote Kebeles Served', value: '42 Sites' }
    ],
    tags: ['Afar Region', 'Health & Nutrition', 'CTC', 'Emergency Outreach'],
    image: '/assets/images/adra_emergency_health_1792612497133.jpg',
    quote: {
      text: 'When the mobile clinic arrived in our settlement, my infant daughter was unconscious from fever and wasting. Within minutes, the doctor gave her electrolytes and treatment. She is alive today because ADRA came to our doorstep.',
      textAm: 'ተንቀሳቃሽ ክሊኒኩ ወደ መንደራችን ሲመጣ ልጄ በከፍተኛ ትኩሳትና ድካም ራሷን ስታ ነበር፤ የህክምና እርዳታው ህይወቷን ታድጎልኛል።',
      author: 'Fatuma Ali, Pastoral Mother in Berhale Woreda'
    }
  },
  {
    id: 'agroforestry-beekeeping-benishangul',
    slug: 'modern-apiculture-forest-conservation-benishangul',
    title: 'Sweet Harvests, Preserved Forests: Modern Apiculture & Forest Conservation in Benishangul-Gumuz',
    titleAm: 'በቤኒሻንጉል ጉሙዝ ዘመናዊ የንብ ማነብ እና የተፈጥሮ ደን ጥበቃ ፕሮጀክት',
    category: 'Food Security & Livelihoods',
    categoryAm: 'የምግብ ዋስትና እና ኑሮ ማሻሻል',
    date: 'May 12, 2026',
    readTime: '5 min read',
    author: {
      name: 'Tsegaye Hailu',
      role: 'Agroforestry and Natural Resource Specialist',
      roleAm: 'የደን እና የተፈጥሮ ሀብት ልማት ከፍተኛ ባለሙያ'
    },
    summary: 'Transforming rural livelihoods around Metekel and Bambasi through 850 modern transitional beehives, solar honey processing centrifuges, and certified forest honey cooperatives that preserve indigenous bamboo forests while doubling farmer earnings.',
    summaryAm: 'በቤኒሻንጉል ጉሙዝ 850 ዘመናዊ የንብ ቀፎዎችን እና የሶላር ማር ማጣሪያ መሳሪያዎችን ለአርሶ አደሮች በማቅረብ የተፈጥሮ ደንን በመጠበቅ የገበሬዎችን ገቢ በከፍተኛ ሁኔታ ያሳደገ ፕሮጀክት።',
    content: [
      'The dense riverine and dry evergreen forests of Benishangul-Gumuz hold Ethiopia’s highest concentrations of indigenous melliferous flora, yet traditional destructive tree-felling practices historically stripped vast forest tracts.',
      'ADRA introduced community-centered modern transitional top-bar beekeeping. By providing over 850 durable hives, protective veil suits, and solar-powered honey extraction centrifuges, rural youth cooperatives transitioned from tree-smoking methods to high-yield sustainable harvesting.',
      'We also facilitated national organic certification for the Bambasi Honey Cooperative, enabling smallholders to package pure, export-grade forest honey that sells for triple the price of raw local comb.',
      'Over 2,400 hectares of primary watershed forest are now under binding community conservation bylaws managed by the beekeepers themselves.'
    ],
    contentAm: [
      'በቤኒሻንጉል ጉሙዝ የሚገኙ የተፈጥሮ ደኖች ለንብ ማነብ እጅግ ተስማሚ ናቸው፤ ሆኖም ባህላዊ የዛፍ መቁረጥ ደኑን ይጎዳው ነበር።',
      'አድራ ዘመናዊ ቀፎዎችንና ማጣሪያዎችን በማቅረብ አርሶ አደሮች ደኑን እየጠበቁ ከፍተኛ ጥራት ያለው ኦርጋኒክ ማር እንዲያመርቱ አድርጓል።',
      'ከ2,400 ሄክታር በላይ የተፈጥሮ ደን በማህበረሰቡ ጥበቃ ስር እንዲውል ተደርጓል።'
    ],
    metrics: [
      { label: 'Organic Honey Harvested', value: '48.5 Tons' },
      { label: 'Hectares Forest Protected', value: '2,400 Ha' },
      { label: 'Cooperative Income Boost', value: '210%' }
    ],
    tags: ['Benishangul', 'Beekeeping', 'Livelihoods', 'Agroforestry'],
    image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
    quote: {
      text: 'Instead of cutting down trees for firewood, we now protect the forest trees because they nourish our bees. With honey profits, I built a corrugated-iron roof home and sent my sons to technical university.',
      textAm: 'ዛፎችን ለእንጨት ከመቁረጥ ይልቅ ለንቦቻችን ምግብ ስለሆኑ እንከባከባቸዋለን፤ ከማር ሽያጭ ባገኘሁት ገቢ ቆርቆሮ ቤት ሰርቼ ልጆቼን አስተምራለሁ።',
      author: 'Ato Girma Belay, Bambasi Honey Cooperative President'
    }
  },
  {
    id: 'school-wash-dignity-sidama',
    slug: 'dignity-in-schools-menstrual-hygiene-sidama',
    title: 'Dignity in Every Classroom: Dedicated Menstrual Hygiene Rooms & Solar Gravity Water in Sidama',
    titleAm: 'በሲዳማ ትምህርት ቤቶች የሴት ተማሪዎች የንጽህና መጠበቂያ ክፍሎችና የሶላር ውሃ ዝርጋታ',
    category: 'Education & Protection',
    categoryAm: 'ትምህርት እና ጥበቃ',
    date: 'April 22, 2026',
    readTime: '4 min read',
    author: {
      name: 'Selamawit Desta',
      role: 'Gender and Social Inclusion Lead',
      roleAm: 'የስርዓተ-ፆታ እና ማህበራዊ ማካተት አስተባባሪ'
    },
    summary: 'How constructing solar-pumped clean water networks and private menstrual hygiene management rooms across 36 rural primary and secondary schools in Bensa and Aroresa reduced female student dropout rates by 68%.',
    summaryAm: 'በሲዳማ ክልል በ36 የገጠር ት/ቤቶች ውስጥ የሶላር ውሃ እና የሴቶች የክብር መጠበቂያ ክፍሎችን በመገንባት የሴት ተማሪዎችን የትምህርት ማቋረጥ በ68 በመቶ የቀነሰ ውጤታማ ስራ።',
    content: [
      'In many rural Ethiopian schools, girls missing three to five days of school each month due to lack of private washrooms and sanitary materials was an unspoken reality that often ended in complete dropout.',
      'Under the SEAQE II partnership, ADRA constructed dedicated adolescent girl dignity rooms in 36 schools across Sidama. Each facility features ceramic-tiled washing areas, constant running water supplied by solar-powered pumps, secure disposal systems, and a private resting space.',
      'In addition, schools maintain emergency dignity packs containing reusable sanitary pads, spare school uniforms, and soap. Female guidance teachers were trained to lead weekly health clubs open to both girls and boys, demystifying adolescent health.',
      'Within two academic terms, school attendance rosters revealed an unprecedented 68% decrease in adolescent female dropouts, with girl student exam pass rates rising to equal their male peers.'
    ],
    contentAm: [
      'በገጠር ትምህርት ቤቶች የንጽህና መጠበቂያ ማጣት ሴት ልጆች በየወሩ ከትምህርት ገበታቸው እንዲቀሩና ውሎ አድሮም እንዲያቋርጡ ዋነኛ ምክንያት ነበር።',
      'አድራ በ36 ት/ቤቶች ውስጥ የውሃ ቧንቧና የተሟላ የንጽህና ክፍል በመገንባት የሴቶችን የትምህርት ተሳትፎ አሳድጓል።',
      'የሴት ተማሪዎች የትምህርት ማቋረጥ በ68% የቀነሰ ሲሆን የፈተና ውጤታቸውም እኩል ደረጃ ደርሷል።'
    ],
    metrics: [
      { label: 'Schools Equipped', value: '36 Schools' },
      { label: 'Female Dropout Reduction', value: '68%' },
      { label: 'Girls Provided Dignity Kits', value: '14,200+' }
    ],
    tags: ['Sidama Region', 'Education', 'WASH', 'Gender Equity'],
    image: '/assets/images/adra_education_girls_1792612496863.jpg',
    quote: {
      text: 'Having a safe, clean place with running water at school changed everything. We no longer feel ashamed or stay at home. We come to school with our heads held high.',
      textAm: 'በትምህርት ቤታችን ንጹህ ውሃ እና ምቹ የክብር መጠበቂያ ክፍል መኖሩ ትልቅ በረከት ነው፤ አሁን ምንም ሳንሸማቀቅ በሙሉ ልብ እንማራለን።',
      author: 'Genet Tariku (Age 15), Grade 8, Bensa Woreda'
    }
  },
  {
    id: 'ai-drought-early-warning',
    slug: 'ai-predictive-early-warning-ethiopia',
    title: 'Forecasting Water Scarcity 90 Days Ahead: Predictive Geo-Data Grounded in Local Community Action',
    titleAm: 'የአየር ንብረት ድርቅን አስቀድሞ በቴክኖሎጂ እና አርቴፊሻል ኢንተለጀንስ መተንበይ',
    category: 'Water, Sanitation & Hygiene',
    categoryAm: 'ውሃ፣ ሳኒቴሽን እና ንጽህና',
    date: 'March 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Eng. Solomon Worku',
      role: 'GIS & Hydrological Systems Lead',
      roleAm: 'የጂአይኤስ እና ሃይድሮሎጂ ቴክኖሎጂ መሪ'
    },
    summary: 'Deploying low-power IoT telemetry sensors on deep boreholes coupled with satellite soil-moisture algorithms to give pastoralist water committees a 90-day predictive drought warning window before aquifers dip.',
    summaryAm: 'በጥልቅ የውሃ ጉድጓዶች ላይ በተገጠሙ ዲጂታል ሴንሰሮች እና የሳተላይት መረጃዎች በመታገዝ የከርሰ ምድር ውሃ መጠን ከመቀነሱ በፊት 90 ቀናት አስቀድሞ የማስጠንቀቂያ መረጃ የሚሰጥ ቴክኖሎጂ።',
    content: [
      'In arid landscapes, knowing that a drought has arrived is too late. Sustainable resilience demands predictive foresight before water stations run dry.',
      'ADRA Ethiopia partnered with local hydrological universities to pilot the Smart Aquifer Telemetry network across 24 critical solar borehole stations in Somali and Afar regions. Solar-powered acoustic depth sounders transmit real-time groundwater table measurements twice daily.',
      'Machine learning algorithms synthesize aquifer depletion curves with Sentinel-2 satellite vegetation indices, forecasting localized water stress 90 days before physical pump failures could occur.',
      'This grants district water bureaus and community WASHCos sufficient lead time to execute preventive pump overhauls, schedule planned watering rotations, and avoid devastating emergency livestock distress migrations.'
    ],
    contentAm: [
      'በበርሃማ አካባቢዎች የድርቅ አደጋ ከተከሰተ በኋላ እርምጃ መውሰድ ጉዳቱን አያድነውም፤ ቅድመ ማስጠንቀቂያ ወሳኝ ነው።',
      'አድራ በ24 የሶላር ጥልቅ ጉድጓዶች ላይ የዲጂታል ሴንሰሮችን በመትከል የውሃ መጠንን በየቀኑ በሳተላይት ይከታተላል።',
      'ይህ ቴክኖሎጂ የውሃ እጥረት ከመፈጠሩ ከ3 ወራት በፊት መረጃ በመስጠት አስቀድሞ ጥገናና ጥንቃቄ እንዲደረግ ያስችላል።'
    ],
    metrics: [
      { label: 'IoT Boreholes Connected', value: '24 Stations' },
      { label: 'Early Warning Lead Time', value: '90 Days' },
      { label: 'Prevented Water Outages', value: '100% Zero' }
    ],
    tags: ['AI for Good', 'WASH', 'Early Warning', 'GIS Innovation'],
    image: '/assets/images/solar_water_desert_1792618997738.jpg',
    quote: {
      text: 'For the first time in our history, we don’t have to wait for the pump to sputter dry before seeking help. We know months in advance when to conserve and how to manage our aquifer.',
      textAm: 'በታሪካችን ለመጀመሪያ ጊዜ ፓምፑ ተበላሽቶ ውሃ እስኪያልቅ አንጠብቅም፤ ወራት አስቀድመን መረጃው ስለሚደርሰን የውሃ አጠቃቀማችንን እናስተካክላለን።',
      author: 'Sheikh Abdiwahid, Elder & WASHCo Secretary, Warder'
    }
  },
  {
    id: 'maternal-waiting-homes-south-ethiopia',
    slug: 'zero-maternal-deaths-solar-maternal-waiting-homes',
    title: 'Zero Preventable Maternal Deaths: Solar-Powered Maternal Waiting Homes in Mountain Woredas',
    titleAm: 'በደቡብ ኢትዮጵያ ተራራማ ወረዳዎች በሶላር ኃይል የሚሰሩ የእናቶች ማረፊያ ማዕከላት',
    category: 'Emergency Response & Health',
    categoryAm: 'የአደጋ ምላሽ እና ጤና',
    date: 'February 10, 2026',
    readTime: '5 min read',
    author: {
      name: 'Sister Rahel Assefa',
      role: 'Senior Maternal & Child Health Nurse Specialist',
      roleAm: 'የእናቶችና ህጻናት ጤና ከፍተኛ ባለሙያ'
    },
    summary: 'Constructing solar-electrified, dignified maternal waiting homes adjacent to remote rural health centers in South Ethiopia, providing nutritious hot meals and 24/7 skilled midwife care for over 4,800 expectant mothers.',
    summaryAm: 'በደቡብ ኢትዮጵያ ተራራማ አካባቢዎች ለሚኖሩ ነፍሰ ጡር እናቶች በጤና ጣቢያዎች አቅራቢያ ምቹና በሶላር ኃይል የሚሰሩ ማረፊያዎችን በመገንባት የእናቶችንና የህጻናትን ሞት ዜሮ ያደረገ ፕሮጀክት።',
    content: [
      'In rugged mountainous terrains of Gofa and Ari zones, pregnant mothers living up to eight hours’ walk from a health center historically faced severe risks during emergency labor complications.',
      'ADRA established eight modern Maternal Waiting Homes (MWHs) directly on clinic compounds. Mothers residing in remote highland villages are admitted two weeks prior to their expected delivery date, receiving clean beds, solar lighting, hot showers, and three daily balanced meals cooked with fortified local teff and garden greens.',
      'Skilled midwives monitor fetal heart rates and maternal vital signs around the clock. When labor begins, the mother steps directly into a fully equipped clean delivery suite with solar backup power.',
      'Across all eight catchment clusters where ADRA MWHs operate, zero maternal mortality has been recorded over the past two years, with institutional skilled delivery rates climbing to 98.4%.'
    ],
    contentAm: [
      'በጎፋ እና አሪ ዞኖች ተራራማ አካባቢዎች የሚኖሩ ነፍሰ ጡር እናቶች ወደ ጤና ጣቢያ ለመድረስ እስከ 8 ሰዓት በመጓዝ ለሞት ይጋለጡ ነበር።',
      'አድራ በጤና ጣቢያዎች ቅጥር ግቢ ውስጥ 8 ዘመናዊ የእናቶች ማረፊያ ቤቶችን ገንብቶ የተመጣጠነ ምግብና የሙሉ ጊዜ አዋላጅ ነርስ ክብካቤ እንዲያገኙ አድርጓል።',
      'በነዚህ ማዕከላት ባለፉት ሁለት ዓመታት ውስጥ የወሊድ ሞት ሙሉ በሙሉ ዜሮ ሆኗል።'
    ],
    metrics: [
      { label: 'Safe Deliveries Supported', value: '4,850+' },
      { label: 'Maternal Mortality in Facility', value: '0.0% Zero' },
      { label: 'Institutional Birth Rate', value: '98.4%' }
    ],
    tags: ['South Ethiopia', 'Health', 'Maternal Survival', 'Solar Energy'],
    image: '/assets/images/adra_hero_community_1792612495148.jpg',
    quote: {
      text: 'My mother gave birth to me on a dirt floor during a stormy night. For my child, I slept in a warm bed with lights and clean water, cared for by loving nurses. My son was born safely into the light.',
      textAm: 'እናቴ እኔን የወለደችው በጭቃ ቤት ውስጥ በጨለማ ነበር፤ እኔ ግን ንጹህ አልጋ፣ መብራትና አፍቃሪ አዋላጅ ነርሶች ባሉበት ማዕከል ልጄን በሰላም ተገላገልኩ።',
      author: 'Woyneshet Kassa (Age 22), First-time Mother, Gofa'
    }
  }
];

