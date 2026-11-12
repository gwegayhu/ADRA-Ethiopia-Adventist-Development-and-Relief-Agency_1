import { Sector, RegionData, Project, Story, Opportunity, Publication, GISProject } from '../types';
export * from './adraLocalization';

export const HERO_IMAGE = '/assets/images/adra_hero_community_1792612495148.jpg';
export const WASH_IMAGE = '/assets/images/adra_wash_water_1792612496655.jpg';
export const EDUCATION_IMAGE = '/assets/images/adra_education_girls_1792612496863.jpg';
export const AGRICULTURE_IMAGE = '/assets/images/adra_agriculture_food_1792612497905.jpg';
export const HEALTH_IMAGE = '/assets/images/adra_emergency_health_1792612497133.jpg';

export const SECTORS: Sector[] = [
  {
    id: 'wash',
    title: 'Water, Sanitation & Hygiene (WASH)',
    titleAm: 'ውሃ፣ ንፅህናና ሳኒቴሽን',
    titleOm: 'Bishaan, Qulqullina (WASH)',
    titleTi: 'ማይ፣ ጽሬትን ሳኒቴሽንን (WASH)',
    iconName: 'Droplets',
    summary: 'Constructing solar-powered boreholes, piped community networks, and school handwashing stations.',
    summaryAm: 'በፀሐይ ኃይል የሚሰሩ የውሃ ጉድጓዶችን፣ የማህበረሰብ ቧንቧዎችን እና የትምህርት ቤት የእጅ መታጠቢያ ጣቢያዎችን መገንባት።',
    summaryOm: 'Boolla bishaanii anniisaa aduu, sarara ujummoo hawaasaa fi buufata dhiqannaa harka mana barumsaa ijaaruu.',
    summaryTi: 'ብጸሓያዊ ጸዓት ዝሰርሑ ዒላታት ማይ፣ መስመራት ቡምባ ሕብረተሰብን መሕጸቢ ኢድ ኣብያተ-ትምህርትን ምህናጽ።',
    keyStats: '420,000+ people gained clean water',
    description: 'Access to safe drinking water is the bedrock of community health and economic dignity. In drought-prone regions such as Somali, Afar, and Oromia, ADRA Ethiopia deploys climate-resilient deep groundwater extraction, solar submersible pump stations, and community-elected water governance committees (WASHCos).',
    image: WASH_IMAGE,
    activeProjectsCount: 14,
    highlightPoints: [
      'Solar-driven groundwater pumping reducing reliance on diesel generators',
      'Community Water Management Committees trained with 50%+ female representation',
      'School menstrual hygiene and inclusive sanitation infrastructure in 85 schools',
      'Chlorination, water safety testing, and drought contingency pipeline extensions'
    ]
  },
  {
    id: 'education',
    title: 'Education & Child Empowerment',
    titleAm: 'ትምህርት እና የህጻናት ማብቃት',
    titleOm: 'Barnoota & Daaʼimman Humnees.',
    titleTi: 'ትምህርትን ምሕያል ህጻናትን',
    iconName: 'GraduationCap',
    summary: 'Expanding access to quality primary schooling, girls scholarships, and teacher pedagogical development.',
    summaryAm: 'የጥራት አንደኛ ደረጃ ትምህርት፣ የሴቶች ስኮላርሺፕ እና የመምህራን ማሰልጠኛ ተደራሽነትን ማስፋፋት።',
    summaryOm: 'Carraa barnoota sadarkaa tokkoffaa qulqullina qabu, deeggarsa shamarranii fi leenjii barsiisotaa babalʼisuu.',
    summaryTi: 'ጽሬት ዘለዎ መባእታዊ ትምህርቲ፣ ስኮላርሺፕ ኣዋልድን ስልጠና መምህራንን ምስፋሕ።',
    keyStats: '85,000+ children enrolled & supported',
    description: 'Under flagship initiatives like the Strengthening Equity and Access to Quality Education (SEAQE) program, ADRA Ethiopia breaks intergenerational poverty cycles. We upgrade classroom infrastructure, supply mother-tongue learning materials, train educators in child-centered pedagogy, and eliminate barriers for adolescent girls.',
    image: EDUCATION_IMAGE,
    activeProjectsCount: 9,
    highlightPoints: [
      'SEAQE II program empowering over 40,000 pastoralist and rural students',
      'Gender-responsive classrooms and adolescent girl retention stipends',
      'Parent-Teacher-Association (PTA) school management capacity workshops',
      'Emergency education kits and safe learning centers for internally displaced youth'
    ]
  },
  {
    id: 'food-security',
    title: 'Food Security & Resilient Livelihoods',
    titleAm: 'የምግብ ዋስትና እና ኑሮ ማሻሻል',
    titleOm: 'Wabii Nyaataa fi Jireenya Cimaa',
    titleTi: 'ውሕስነት መግብን ዘላቒ ናብራን',
    iconName: 'Sprout',
    summary: 'Equipping smallholder farmers with drought-tolerant seeds, drip irrigation, and pastoralist livestock support.',
    summaryAm: 'ለአነስተኛ አርሶ አደሮች ድርቅን የሚቋቋሙ ዘሮችን፣ የጠብታ መስኖ እና የእንስሳት ህክምና ድጋፍ መስጠት።',
    summaryOm: 'Qonnaan bultootaaf sanyii hongee dandamatu, jallisii cophaa fi deeggarsa beeladaa horsiisee bulaaf kennuu.',
    summaryTi: 'ንንኣሽቱ ሓረስቶት ደርቂ ዝጻወር ዘርኢ፣ መስኖ ነጠብጣብን ሕክምና እንስሳትን ምቕራብ።',
    keyStats: '68,000+ farming families empowered',
    description: 'Ethiopian agriculture faces shifting climate patterns and unpredictable rainfall. ADRA Ethiopia works in fertile rift basins and arid lowlands alike to introduce conservation agriculture, water-harvesting dams, solar irrigation pumps, and Village Savings & Loan Associations (VSLAs) that fuel self-reliant household businesses.',
    image: AGRICULTURE_IMAGE,
    activeProjectsCount: 12,
    highlightPoints: [
      'High-yield drought-tolerant sorghum, teff, and pulse seed distributions',
      'Community solar micro-irrigation systems irrigating over 1,200 hectares',
      'Pastoralist paravet clinics and mobile livestock vaccination campaigns',
      'Women-led Village Savings and Loan Associations (VSLA) providing micro-credit'
    ]
  },
  {
    id: 'health',
    title: 'Community Health & Nutrition',
    titleAm: 'የማህበረሰብ ጤና እና ስነ-ምግብ',
    titleOm: 'Fayyaa Hawaasaa fi Nyaata',
    titleTi: 'ጥዕና ማሕበረሰብን ኣመጋግባን',
    iconName: 'HeartPulse',
    summary: 'Pioneering Community Therapeutic Care (CTC) to treat severe acute malnutrition and protect maternal health.',
    summaryAm: 'ከባድ የተመጣጠነ ምግብ እጥረትን ለማከም እና የእናቶችን ጤና ለመጠበቅ የህብረተሰብ ጤና ክብካቤ።',
    summaryOm: 'Kunuunsa Fayyaa Hawaasaa (CTC) tiin hanqina nyaataa cimaa yaaluu fi fayyaa haadholii eeguu.',
    summaryTi: 'ከቢድ ዋሕዲ መግቢ ንምፍዋስን ጥዕና ኣዴታት ንምሕላውን ማሕበረሰባዊ ክንክን ጥዕና (CTC)።',
    keyStats: '310,000+ mothers & children treated',
    description: 'Since pioneering the Community-based Therapeutic Care (CTC) framework in the Somali region, ADRA Ethiopia has brought life-saving outpatient nutritional management directly into remote villages. We screen children for wasting, distribute ready-to-use therapeutic food (RUTF), and train government health extension workers.',
    image: HEALTH_IMAGE,
    activeProjectsCount: 8,
    highlightPoints: [
      'Decentralized Outpatient Therapeutic Program (OTP) sites in vulnerable woredas',
      'Infant and Young Child Feeding (IYCF) counseling groups for expectant mothers',
      'Mobile health and nutrition teams reaching drought-isolated pastoralist encampments',
      'Supply chain reinforcement for regional primary health posts'
    ]
  },
  {
    id: 'energy',
    title: 'Green Energy & TVET Vocational Training',
    titleAm: 'አረንጓዴ ኃይል እና የሙያ ስልጠና',
    titleOm: 'Anniisaa Aduu fi Leenjii Ogummaa TVET',
    titleTi: 'ሓምለዋይ ጸዓትን ሞያዊ ስልጠና TVETን',
    iconName: 'Zap',
    summary: 'Operating the Green Energy TVET II Coordination Hub, certifying youth as solar installers and technicians.',
    summaryAm: 'የአረንጓዴ ኃይል ቴክኒክና ሙያ ማስተባበሪያ ማዕከል ወጣቶችን በሶላር ቴክኖሎጂ ማሰልጠን።',
    summaryOm: 'Wiirtuu Anniisaa Magariisaa TVET II bulchuun dargaggoota teeknishaanii soolaarii taʼaniif ragaa kennuu.',
    summaryTi: 'ማእከል ምትሕብባር ሓምለዋይ ጸዓት TVET II ብምምራሕ መንእሰያት ክኢላታት ጸሓይ ምስልጣን።',
    keyStats: '4,500+ youth certified in solar engineering',
    description: 'Headquartered through our Addis Ababa coordination facility, the Green Energy TVET initiative equips unemployed Ethiopian youth with accredited technical skills in off-grid photovoltaic design, solar water pump maintenance, and clean cooking technologies, incubating viable green micro-enterprises.',
    image: HERO_IMAGE,
    activeProjectsCount: 6,
    highlightPoints: [
      'Accredited Level I–IV renewable energy curriculum recognized by the Ministry of Labor & Skills',
      'Practical training laboratories with grid-tied and off-grid solar equipment',
      'Business incubation seed grants for youth-led solar service cooperatives',
      'Women in Renewable Energy mentorship cohort fostering female technicians'
    ]
  },
  {
    id: 'emergency',
    title: 'Emergency Response & Disaster Relief',
    titleAm: 'የአደጋ ጊዜ ምላሽ እና እርዳታ',
    titleOm: 'Deebii Balaa & Gargaarsa Ariifataa',
    titleTi: 'ቅልጡፍ ምላሽ ሓደጋን ረድኤትን',
    iconName: 'ShieldAlert',
    summary: 'Delivering rapid multi-purpose cash assistance, shelter supplies, and clean water trucking to crisis zones.',
    summaryAm: 'ለተፈናቀሉ እና በአደጋ ለተጎዱ ወገኖች ፈጣን የጥሬ ገንዘብ፣ የመጠለያ እና የውሃ አቅርቦት ምላሽ።',
    summaryOm: 'Bakkeewwan balaa mudataniif deeggarsa maallaqaa, dawoo fi geejjiba bishaan qulqulluu saffisaan dhiyeessuu.',
    summaryTi: 'ኣብ ከባቢታት ቅልውላው ቅልጡፍ ሓገዝ ገንዘብ፣ መዕቆብን ምምልላስ ጽሩይ ማይን ምቕራብ።',
    keyStats: '550,000+ crisis-affected persons aided',
    description: 'From our inception during the 1982 famine to modern drought and conflict responses in northern and eastern Ethiopia, ADRA Ethiopia mobilizes within 72 hours. We coordinate with the Ethiopian Disaster Risk Management Commission (EDRMC) to deliver dignity kits, emergency shelter, and unconditional cash transfers.',
    image: HERO_IMAGE,
    activeProjectsCount: 11,
    highlightPoints: [
      'Emergency Water Trucking and rapid rehabilitation of non-functional boreholes',
      'Multi-Purpose Cash Assistance (MPCA) delivered through mobile money platforms',
      'Non-Food Item (NFI) and shelter construction kits for returnees and IDPs',
      'Conflict-sensitive and survivor-centered psychosocial first-aid services'
    ]
  }
];

export const GIS_PROJECTS_DATA: GISProject[] = [
  {
    id: 1,
    sector: "Education",
    location: "Oromia Region",
    name: "Integrated formal and TVET education in ATJK and SEAQE II Project in Oromia",
    objective: "Improved management of formal and TVET education, infrastructure enhancement, and inclusive access.",
    duration: "March 1, 2019 – Feb 2024",
    beneficiaries: "8,921 (5293 M, 3628 F)",
    status: "Ongoing",
    coordinates: [7.87, 38.72],
    region: "Oromia"
  },
  {
    id: 2,
    sector: "Livelihood",
    location: "Somali Region",
    name: "Building Opportunity for Livelihood Development and Enhanced Resilience (BOLDER)/RIHA II",
    objective: "Resilience building and livelihood strengthening of pastoralists and agro-pastoralists through CAP, VSLA, PSF/FFS/FMS.",
    duration: "01/01/2022 to 31/12/2025",
    beneficiaries: "Direct 48,000 persons",
    status: "Ongoing",
    coordinates: [6.80, 44.25],
    region: "Somali"
  },
  {
    id: 3,
    sector: "Education",
    location: "Dire Dawa & Multi-Region",
    name: "Vocational Qualification & Employment Perspectives (VQEP) for Youth and Women in the Solar Energy Sector",
    objective: "Livelihoods of unemployed youth and women improved, strengthening the renewable energy sector.",
    duration: "October 01, 2022 – December 31, 2025",
    beneficiaries: "N/A",
    status: "Ongoing",
    coordinates: [9.59, 41.86],
    region: "Dire Dawa / Multi-Region"
  },
  {
    id: 4,
    sector: "Integrated Agriculture and Health",
    location: "Somali Region",
    name: "Integrated multi-sector emergency response for acute malnutrition through agriculture, food, health, nutrition and WASH",
    objective: "Save lives, prevent mortality rates and reduce acute malnutrition and disease cases in drought-affected IDP sites.",
    duration: "01/02/2023 - 31/01/2024",
    beneficiaries: "7,500 HHs",
    status: "Ongoing",
    coordinates: [5.78, 43.52],
    region: "Somali"
  },
  {
    id: 5,
    sector: "WASH",
    location: "Somali Region",
    name: "WASH Emergency response in communities affected by drought disaster",
    objective: "Provide life-saving humanitarian assistance to improve WASH in emergency for vulnerable drought-affected individuals.",
    duration: "Oct 24, 2022 up to November 30, 2023",
    beneficiaries: "45,480 IDPs",
    status: "Ongoing",
    coordinates: [5.95, 43.55],
    region: "Somali"
  },
  {
    id: 6,
    sector: "Education",
    location: "Multi-Region / National",
    name: "Together for the Inclusion (TOFI)",
    objective: "To provide support for children in inclusion aspect in education sector.",
    duration: "01 October 2020 up to 31 December 2023",
    beneficiaries: "7,000 persons",
    status: "Ongoing",
    coordinates: [9.02, 38.75],
    region: "Ethiopia"
  },
  {
    id: 7,
    sector: "WASH",
    location: "Amhara Region",
    name: "WASH assistance for conflict crisis response",
    objective: "Rebuild water supply system and sanitary facilities, conduct hygiene promotion for IDPs and host communities.",
    duration: "30th November 2022 to 30 September 2023",
    beneficiaries: "18,300 persons",
    status: "Ongoing",
    coordinates: [11.85, 39.60],
    region: "Amhara"
  },
  {
    id: 8,
    sector: "WASH",
    location: "Afar Region",
    name: "Post-war recovery for conflict-affected populations in Afar region",
    objective: "Restore livelihoods by promoting livestock rearing, drinking water, and education across 5 kebeles.",
    duration: "01/05/2023 - 31/12/2023",
    beneficiaries: "6,000 people",
    status: "Ongoing",
    coordinates: [10.95, 40.75],
    region: "Afar"
  },
  {
    id: 9,
    sector: "Health (Psycho-social Support)",
    location: "Tigray Region",
    name: "Psycho-social Support and Employment Opportunities (PSSEO)",
    objective: "Improved psychosocial wellbeing through comprehensive services and integrated IGA skills and life skills training.",
    duration: "1 October, 2022 – Aug 31, 2023",
    beneficiaries: "20,000 People",
    status: "Ongoing",
    coordinates: [13.50, 39.47],
    region: "Tigray"
  },
  {
    id: 10,
    sector: "Emergency Food Assistance",
    location: "Tigray Region",
    name: "Emergency response for conflict-affected most vulnerable IDPs and HCs",
    objective: "Saving lives through food and NFIs, distance learning via solar-powered radios, and medical supplies.",
    duration: "01st November 2022 - Aug 31, 2023",
    beneficiaries: "300 conflict-affected IDP & Host Households",
    status: "Ongoing",
    coordinates: [13.43, 39.52],
    region: "Tigray"
  },
  {
    id: 11,
    sector: "Emergency Food Assistance / Livelihood",
    location: "Afar Region",
    name: "Emergency food assistance to conflict displaced IDP in Afar region",
    objective: "Provide food (white flour, oil, high energy biscuit) for conflict-displaced IDPs in two kebeles.",
    duration: "Dec 15, 2021 up to Feb 15, 2022",
    beneficiaries: "600 HHs IDPs",
    status: "Recently Completed",
    coordinates: [11.75, 41.00],
    region: "Afar"
  },
  {
    id: 12,
    sector: "Agriculture",
    location: "Somali Region",
    name: "Livelihood based Emergency Response for drought affected IDP population",
    objective: "Improve agriculture status and reduce morbidity/mortality of infants, children under five, and PLWs.",
    duration: "30/04/2022 - 31/10/2022",
    beneficiaries: "7,500 HHs",
    status: "Recently Completed",
    coordinates: [5.25, 44.75],
    region: "Somali"
  },
  {
    id: 13,
    sector: "Livelihood",
    location: "Somali Region",
    name: "Integrated Drought Response and Recovery (IDRR)",
    objective: "Multi-faceted interventions contributing to saving lives and protecting/restoring livelihoods in partnership with VSF Suisse.",
    duration: "July 01, 2022 – April 30, 2023",
    beneficiaries: "106,000 people",
    status: "Recently Completed",
    coordinates: [6.15, 43.90],
    region: "Somali"
  },
  {
    id: 14,
    sector: "Nutrition",
    location: "Somali Region",
    name: "School Feeding Project for Drought ravaged ADRA Ethiopia Target School",
    objective: "Reduce dropout rates, improve nutrition/health status, and empower 30 organized mothers.",
    duration: "Sept. 11, 2022 up to June 30, 2022",
    beneficiaries: "30 mothers & 300 students",
    status: "Recently Completed",
    coordinates: [6.45, 43.20],
    region: "Somali"
  },
  {
    id: 15,
    sector: "WASH",
    location: "Gambella Region",
    name: "Strengthening WASH capability for South Sudanese refugees",
    objective: "Build capacity to address WASH challenges independently and improve hygiene and sanitation practices.",
    duration: "16 September 2022 to 15 March 2023",
    beneficiaries: "37,000 persons",
    status: "Recently Completed",
    coordinates: [8.35, 34.40],
    region: "Gambella"
  }
];

export const REGIONS_DATA: RegionData[] = [
  {
    id: 'somali',
    name: 'Somali Region',
    nameAm: 'የሶማሌ ክልል',
    nameOm: 'Naannoo Somaalee',
    nameTi: 'ክልል ሶማሌ',
    capital: 'Jigjiga',
    capitalAm: 'ጅግጅጋ',
    capitalOm: 'Jigjigaa',
    capitalTi: 'ጅግጅጋ',
    beneficiaries: '289,000+',
    beneficiariesCount: 289000,
    activeProjects: [
      'Building Opportunity for Livelihood Development and Enhanced Resilience (BOLDER)/RIHA II',
      'Integrated multi-sector emergency response for acute malnutrition (Somali Region)',
      'WASH Emergency response in communities affected by drought disaster (Shebelle Zone)',
      'Livelihood based Emergency Response for drought affected IDP (Somali Region)',
      'Integrated Drought Response and Recovery (IDRR - Shebele Zone)',
      'School Feeding Project for Drought Ravaged Schools'
    ],
    activeProjectsAm: [
      'የኑሮ ልማትና ጽናት ግንባታ (BOLDER / RIHA II)',
      'በሶማሌ ክልል የተቀናጀ የአደጋ ጊዜ ስነ-ምግብ ምላሽ',
      'በሸበሌ ዞን ለድርቅ ተጎጂዎች አስቸኳይ የውሃና ንጽህና (WASH) ምላሽ',
      'በሶማሌ ክልል የኑሮ መልሶ ግንባታ ምላሽ',
      'የተቀናጀ የድርቅ ምላሽና ማገገሚያ (IDRR - ሸበሌ)',
      'በድርቅ ለተጎዱ ትምህርት ቤቶች የተማሪዎች ምገባ ፕሮጀክት'
    ],
    activeProjectsOm: [
      'Misooma Jireenyaa fi Dandamannaa (BOLDER/RIHA II)',
      'Deebii Balaa Hanqina Nyaataa (Aanaa Adaadilee)',
      'Deebii Balaa WASH Hawaasa Hongeen Miidhamee (Shabalee)',
      'Deebii Balaa Jireenyaa (Mustaahil, Fer-Fer, Higloley)',
      'Deebii fi Bayyanannaa Hongee (IDRR - Zoonii Shabalee)',
      'Pirojektii Nyaata Mana Barumsaa Hongeen Miidhamee'
    ],
    activeProjectsTi: [
      'ምህናጽ ዕድል መነባብሮን ጽንዓትን (BOLDER / RIHA II)',
      'ውሁድ ህጹጽ ምላሽ ሕጽረት መግቢ (ወረዳ ኣዳድሌ)',
      'ህጹጽ ምላሽ ማይን ጽሬትን WASH (ዞባ ሸበሌ)',
      'ህጹጽ ምላሽ መነባብሮ (ሙስታሂል፣ ፈርፈርን ሂግሎለይን)',
      'ውሁድ ምላሽ ደርቅን ምሕዋይን (IDRR - ዞባ ሸበሌ)',
      'መደብ ምገባ ተምሃሮ ንብደርቂ ዝተጠቕዓ ኣብያተ-ትምህርቲ'
    ],
    activeProjectsCount: 6,
    solarWellsCount: 42,
    budgetDeployed: '$3,200,000 USD',
    woredasCount: 5,
    fieldHub: 'Gode & Kelafo Field Hubs',
    fieldHubAm: 'ጎዴ እና ቀላፎ መስክ ቢሮዎች',
    fieldHubOm: 'Wiirtuuwwan Goodee fi Qalaafoo',
    fieldHubTi: 'ማእከላት መስኪ ጎዴን ቀላፎን',
    primaryInterventions: ['Deep solar boreholes', 'Outpatient therapeutic nutrition', 'Livestock emergency fodder'],
    primaryInterventionsAm: ['ጥልቅ የሶላር ውሃ ጉድጓዶች', 'የህጻናት ስነ-ምግብ ህክምና (CTC)', 'አስቸኳይ የእንስሳት መኖ አቅርቦት'],
    primaryInterventionsOm: ['Boolla bishaanii anniisaa aduu', 'Yaala hanqina nyaataa (CTC)', 'Nyaata beeladaa yeroo balaa'],
    primaryInterventionsTi: ['ዓሚቝ ጸሓያዊ ዒላታት ማይ', 'ሕክምና ሕጽረት መግቢ (CTC)', 'ህጹጽ መግቢ ከብቲ'],
    summary: 'ADRA Ethiopia has operated in the Somali region for over two decades, delivering transformative solar water infrastructure along the Shabelle River basin and treating acute child malnutrition across remote pastoralist communities.',
    summaryAm: 'አድራ ኢትዮጵያ በሶማሌ ክልል ከ20 ዓመታት በላይ በመስራት በሸበሌ ወንዝ ተፋሰስ የሶላር ውሃ ተቋማትን እና የህጻናት ስነ-ምግብ ህክምናን በማድረስ ላይ ይገኛል።',
    summaryOm: 'ADRAn waggoota 20+ Naannoo Somaaleetti paampii bishaan aduu Laga Shabalee irratti dhaabuu fi hanqina nyaataa daa’immanii yaaluun tajaajileera.',
    summaryTi: 'ኣድራ ኢትዮጵያ ኣብ ክልል ሶማሌ ልዕሊ 20 ዓመት ብምግልጋል ጸሓያዊ ዒላታት ማይን ሕክምና ሕጽረት መግቢ ህጻናትን የካይድ።',
    svgPath: 'M 350,180 L 460,200 L 490,260 L 470,360 L 390,390 L 340,320 L 330,240 Z',
    labelCoord: { x: 410, y: 280 },
    gisCoordinates: [6.80, 44.25],
    zoomLevel: 6,
    boundary: [
      [9.4, 42.8], [9.3, 44.1], [8.5, 47.0], [8.0, 48.0], [6.5, 47.8], 
      [5.0, 45.3], [4.2, 42.1], [4.8, 41.6], [6.0, 42.0], [7.2, 42.4], [8.4, 42.5]
    ]
  },
  {
    id: 'oromia',
    name: 'Oromia Region',
    nameAm: 'የኦሮሚያ ክልል',
    nameOm: 'Naannoo Oromiyaa',
    nameTi: 'ክልል ኦሮሚያ',
    capital: 'Addis Ababa / Adama',
    capitalAm: 'አዲስ አበባ / አዳማ',
    capitalOm: 'Finfinnee / Adaamaa',
    capitalTi: 'ኣዲስ ኣበባ / ኣዳማ',
    beneficiaries: '8,921',
    beneficiariesCount: 8921,
    activeProjects: [
      'Integrated formal and TVET education in ATJK and SEAQE II Project in Oromia'
    ],
    activeProjectsAm: [
      'በATJK እና ኦሮሚያ የተቀናጀ መደበኛና የቴክኒክ ትምህርት (SEAQE II)'
    ],
    activeProjectsOm: [
      'Barnoota Idilee fi TVET ATJK fi Pirojektii SEAQE II Oromiyaa'
    ],
    activeProjectsTi: [
      'ውሁድ ስሩዕን TVETን ትምህርቲ ኣብ ATJKን SEAQE II ኦሮሚያን'
    ],
    activeProjectsCount: 1,
    solarWellsCount: 56,
    budgetDeployed: '$4,800,000 USD',
    woredasCount: 6,
    fieldHub: 'Adama & ATJK Coordination Centers',
    fieldHubAm: 'አዳማ እና ATJK ማስተባበሪያ',
    fieldHubOm: 'Wiirtuu Adaamaa fi ATJK',
    fieldHubTi: 'ማእከል ምውህሃድ ኣዳማን ATJKን',
    primaryInterventions: ['Preparatory & secondary school construction', 'TVET infrastructure', 'Water & solar installations'],
    primaryInterventionsAm: ['የመሰናዶና ሁለተኛ ደረጃ ት/ቤት ግንባታ', 'የTVET መሰረተ ልማት', 'የውሃና የሶላር ኃይል ዝርጋታ'],
    primaryInterventionsOm: ['Ijaarsa manneen barumsaa qophaa’inaa fi 2ffaa', 'Bu’uura TVET', 'Bishaan fi anniisaa aduu'],
    primaryInterventionsTi: ['ህንጸት ኣብያተ-ትምህርቲ', 'ትሕተ-ቅርጺ TVET', 'ዝርጋሐ ማይን ጸሓይን'],
    summary: 'Under the flagship SEAQE II initiative in ATJK, Negelle Arsi, Modjo, Bora, Meki, and Bulbula, ADRA constructs modern preparatory and secondary schools, provides TVET machinery, and expands inclusive educational access.',
    summaryAm: 'አድራ በATJK፣ ነገሌ አርሲ፣ ሞጆ፣ ቦራ፣ መቂ እና ቡልቡላ በSEAQE II ፕሮጀክት ዘመናዊ ትምህርት ቤቶችን በመገንባት የTVET እና አካታች ትምህርትን ያስፋፋል።',
    summaryOm: 'Sagantaa SEAQE II jalatti ATJK, Nageellee Arsii, Mojoo, Booraa, Maqii fi Bulbulaatti manneen barumsaa ijaaruu fi TVET cimsuu hojjeta.',
    summaryTi: 'ኣብ ትሕቲ መደብ SEAQE II ኣብ ATJK፣ ነገሌ ኣርሲ፣ ሞጆ፣ ቦራ፣ መቂን ቡልቡላን ዘመናዊ ኣብያተ-ትምህርትን TVETን ይሃንጽ።',
    svgPath: 'M 190,220 L 290,200 L 340,240 L 330,330 L 260,370 L 180,310 L 160,260 Z',
    labelCoord: { x: 250, y: 275 },
    gisCoordinates: [7.95, 39.20],
    zoomLevel: 6,
    boundary: [
      [9.9, 37.1], [9.8, 39.8], [9.1, 41.5], [8.6, 42.0], [7.5, 41.0],
      [6.4, 40.5], [4.5, 39.5], [3.8, 38.5], [4.6, 37.5], [5.8, 38.2],
      [7.2, 38.6], [8.2, 36.5], [9.0, 35.8], [9.8, 36.3]
    ]
  },
  {
    id: 'amhara',
    name: 'Amhara Region',
    nameAm: 'የአማራ ክልል',
    nameOm: 'Naannoo Amaaraa',
    nameTi: 'ክልል ኣምሓራ',
    capital: 'Bahir Dar',
    capitalAm: 'ባሕር ዳር',
    capitalOm: 'Baahir Daar',
    capitalTi: 'ባሕር ዳር',
    beneficiaries: '18,300',
    beneficiariesCount: 18300,
    activeProjects: [
      'WASH assistance for conflict crisis response (North Wollo)'
    ],
    activeProjectsAm: [
      'በሰሜን ወሎ ለግጭት ጉዳተኞች የውሃና ንጽህና (WASH) ምላሽ'
    ],
    activeProjectsOm: [
      'Deeggarsa WASH Deebii Balaa (Walloo Kaabaa)'
    ],
    activeProjectsTi: [
      'ሓገዝ ማይን ጽሬትን (WASH) ኣብ ሰሜን ወሎ'
    ],
    activeProjectsCount: 1,
    solarWellsCount: 28,
    budgetDeployed: '$2,100,000 USD',
    woredasCount: 1,
    fieldHub: 'North Wollo Base',
    fieldHubAm: 'የሰሜን ወሎ መስክ ቢሮ',
    fieldHubOm: 'Buufata Walloo Kaabaa',
    fieldHubTi: 'ማእከል ሰሜን ወሎ',
    primaryInterventions: ['Water supply system restoration', 'Emergency toilet rooms in schools', 'Hygiene kits distribution'],
    primaryInterventionsAm: ['የውሃ አቅርቦት ስርዓት መልሶ ግንባታ', 'በት/ቤቶች አስቸኳይ መጸዳጃ ቤቶች', 'የንጽህና ቁሳቁስ ስርጭት'],
    primaryInterventionsOm: ['Suphaa sirna bishaan dhugaatii', 'Manneen fincaanii manneen barumsaa', 'Raabsa meeshaa qulqullinaa'],
    primaryInterventionsTi: ['ጽገና ስርዓት ቀረብ ማይ', 'ህጹጽ ሽቓቓት ኣብያተ-ትምህርቲ', 'ምዕዳል ናውቲ ጽሬት'],
    summary: 'In North Wollo, ADRA restores conflict-damaged water supply systems, installs emergency sanitary facilities, and implements community hygiene promotion to protect IDPs and host families.',
    summaryAm: 'በሰሜን ወሎ አድራ በግጭት የወደሙ የውሃ አቅርቦት ስርዓቶችን በመገንባት እና የንጽህና ተቋማትን በማደራጀት ተፈናቃዮችንና አስተናጋጅ ቤተሰቦችን ይደግፋል።',
    summaryOm: 'Walloo Kaabaatti ADRAn sirna bishaanii walitti bu’iinsaan miidhame suphuu fi qulqullina hawaasaa cimsuun buqqaatota gargaara.',
    summaryTi: 'ኣብ ሰሜን ወሎ ኣድራ ብግጭት ዝዓነዉ ስርዓታት ማይ ብምጽጋንን ጽሬት ብምስፍሕፋሕን ንተመዛበልትን ተቀበልትን ይሕግዝ።',
    svgPath: 'M 160,110 L 250,100 L 280,160 L 230,200 L 150,180 Z',
    labelCoord: { x: 200, y: 150 },
    gisCoordinates: [11.60, 37.85],
    zoomLevel: 7,
    boundary: [
      [13.4, 37.0], [13.2, 38.5], [12.6, 39.8], [11.2, 40.1], [9.9, 39.4],
      [10.0, 37.5], [10.8, 36.2], [12.2, 36.1], [13.1, 36.6]
    ]
  },
  {
    id: 'afar',
    name: 'Afar Region',
    nameAm: 'የአፋር ክልል',
    nameOm: 'Naannoo Affaar',
    nameTi: 'ክልል ዓፋር',
    capital: 'Semera',
    capitalAm: 'ሰመራ',
    capitalOm: 'Samaraa',
    capitalTi: 'ሰመራ',
    beneficiaries: '9,600+',
    beneficiariesCount: 9600,
    activeProjects: [
      "Post-war recovery for conflict-affected populations (Afar Region)",
      'Emergency food assistance to conflict displaced IDP'
    ],
    activeProjectsAm: [
      'በአፋር ክልል ከግጭት በኋላ የማገገምና መልሶ ግንባታ ፕሮጀክት',
      'በግጭት ለተፈናቀሉ ወገኖች አስቸኳይ የምግብ እርዳታ'
    ],
    activeProjectsOm: [
      "Bayyanannaa hawaasaa (Naannoo Affaar)",
      'Gargaarsa nyaataa buqqaatotaaf'
    ],
    activeProjectsTi: [
      'ድሕረ-ኲናት ምሕዋይ (ክልል ዓፋር)',
      'ህጹጽ ሓገዝ መግቢ ንተመዛበልቲ'
    ],
    activeProjectsCount: 2,
    solarWellsCount: 22,
    budgetDeployed: '$1,800,000 USD',
    woredasCount: 2,
    fieldHub: "Semera Regional Hub",
    fieldHubAm: 'ሰመራ የክልል ማስተባበሪያ',
    fieldHubOm: "Buufata Qindeessaa Samaraa",
    fieldHubTi: 'ማእከል መተሓባበሪ ሰመራ',
    primaryInterventions: ['Drinking water access', 'Livestock rearing & pastoral recovery', 'Emergency food distributions'],
    primaryInterventionsAm: ['የመጠጥ ውሃ አቅርቦት', 'የእንስሳት እርባታና መልሶ ማቋቋም', 'አስቸኳይ የምግብ እርዳታ'],
    primaryInterventionsOm: ['Bishaan dhugaatii qulqulluu', 'Horsiisa beeladaa deebisuu', 'Raabsa nyaataa yeroo balaa'],
    primaryInterventionsTi: ['ቀረብ ዝስተ ማይ', 'ምርባሕ ከብትን ምሕዋይን', 'ህጹጽ ምዕዳል መግቢ'],
    summary: "Across vulnerable communities and pastoral settlements in Afar, ADRA restores livelihoods, rehabilitates essential drinking water sources, and delivers emergency food rations.",
    summaryAm: 'አድራ በአፋር ክልል ተጋላጭ አካባቢዎች የኑሮ ማገገሚያ፣ የመጠጥ ውሃ እና አስቸኳይ የምግብ ድጋፍ ያደርሳል።',
    summaryOm: "Affaar keessatti ADRAn jireenya deebisuu, madda bishaan dhugaatii suphuu fi nyaata yeroo balaa kenna.",
    summaryTi: 'ኣብ ዓፋር ኣድራ መነባብሮ ምምላስ፣ ምንጪ ማይ ምጽጋንን ህጹጽ መግብን የብጽሕ።',
    svgPath: 'M 250,90 L 310,110 L 350,180 L 280,180 L 260,130 Z',
    labelCoord: { x: 295, y: 145 },
    gisCoordinates: [11.85, 41.10],
    zoomLevel: 7,
    boundary: [
      [14.4, 40.1], [14.0, 41.5], [12.6, 42.4], [11.0, 41.8], [9.8, 40.8],
      [10.8, 40.2], [12.5, 39.8], [13.6, 39.9]
    ]
  },
  {
    id: 'tigray',
    name: 'Tigray Region',
    nameAm: 'የትግራይ ክልል',
    nameOm: 'Naannoo Tigraay',
    nameTi: 'ክልል ትግራይ',
    capital: 'Mekelle',
    capitalAm: 'መቀሌ',
    capitalOm: 'Maqalee',
    capitalTi: 'መቐለ',
    beneficiaries: '22,100+',
    beneficiariesCount: 22100,
    activeProjects: [
      'Psycho-social Support and Employment Opportunities (PSSEO - Mekelle & Shire)',
      'Emergency response for conflict-affected most vulnerable IDPs and HCs'
    ],
    activeProjectsAm: [
      'የስነ-ልቦና ድጋፍ እና የስራ እድል ፈጠራ (PSSEO - መቀሌ እና ሽሬ)',
      'በመቀሌ እና አካባቢው ለተፈናቃዮች የአደጋ ጊዜ ምላሽ'
    ],
    activeProjectsOm: [
      'Deeggarsa Xiin-sammuu fi Carraa Hojii (PSSEO - Maqalee & Shiree)',
      'Deebii Balaa Buqqaatotaa Maqalee fi Naannoo Ishee'
    ],
    activeProjectsTi: [
      'ስነ-ኣእምሮኣዊ ድጋፍን ዕድል ስራሕን (PSSEO - መቐለን ሽረን)',
      'ህጹጽ ምላሽ ንብግጭት ዝተጎድኡ ተመዛበልቲ ኣብ መቐለ'
    ],
    activeProjectsCount: 2,
    solarWellsCount: 18,
    budgetDeployed: '$3,050,000 USD',
    woredasCount: 2,
    fieldHub: 'Mekelle Coordination Hub',
    fieldHubAm: 'መቀሌ ማስተባበሪያ ማዕከል',
    fieldHubOm: 'Wiirtuu Qindoomina Maqalee',
    fieldHubTi: 'ማእከል ምውህሃድ መቐለ',
    primaryInterventions: ['Comprehensive MHPSS & peer counseling', 'IGA livelihood skill grants for women', 'Solar radios for distance learning'],
    primaryInterventionsAm: ['የአእምሮ ጤናና የስነ-ልቦና ድጋፍ (MHPSS)', 'ለሴቶች የገቢ ማስገኛ ክህሎትና ድጋፍ', 'ለተማሪዎች የሶላር የርቀት ትምህርት ሬዲዮኖች'],
    primaryInterventionsOm: ['Gorsa fayyaa sammuu (MHPSS)', 'Deeggarsa IGA dubartootaaf', 'Raadiyoo barnoota aduu'],
    primaryInterventionsTi: ['ኣገልግሎት ስነ-ኣእምሮ (MHPSS)', 'ሓገዝ ስልጠና ንኣንስቲ (IGA)', 'ጸሓያዊ ሬድዮ ርሑቕ ትምህርቲ'],
    summary: 'Delivering specialized mental health and psychosocial support (MHPSS) reaching 20,000 people (67% women) in Mekelle and Shire, alongside emergency food, solar learning radios, and medical supplies.',
    summaryAm: 'በመቀሌና ሽሬ ለ20,000 ሰዎች (67% ሴቶች) የስነ-ልቦና ድጋፍ፣ የገቢ ማስገኛ ስልጠና፣ አስቸኳይ ምግብ፣ የሶላር ትምህርት ሬዲዮኖችና መድሃኒቶችን ያደርሳል።',
    summaryOm: 'Maqalee fi Shireetti namoota 20,000f (%67 dubartoota) deeggarsa xiin-sammuu, nyaata yeroo balaa, raadiyoo barnootaa fi qoricha dhiyeessa.',
    summaryTi: 'ኣብ መቐለን ሽረን ን20,000 ሰባት (67% ኣንስቲ) ስነ-ኣእምሮኣዊ ድጋፍ (MHPSS)፣ ህጹጽ መግቢ፣ ጸሓያዊ ሬድዮን መድሓኒትን የብጽሕ።',
    svgPath: 'M 170,40 L 250,50 L 250,90 L 190,110 L 160,70 Z',
    labelCoord: { x: 210, y: 70 },
    gisCoordinates: [14.05, 38.80],
    zoomLevel: 7,
    boundary: [
      [14.8, 38.0], [14.7, 39.6], [13.9, 40.0], [13.1, 39.5], [13.3, 37.8],
      [13.8, 36.7], [14.3, 37.2]
    ]
  },
  {
    id: 'gambela',
    name: 'Gambella Region',
    nameAm: 'የጋምቤላ ክልል',
    nameOm: 'Naannoo Gambeellaa',
    nameTi: 'ክልል ጋምቤላ',
    capital: 'Gambela',
    capitalAm: 'ጋምቤላ',
    capitalOm: 'Gambeellaa',
    capitalTi: 'ጋምቤላ',
    beneficiaries: '37,000',
    beneficiariesCount: 37000,
    activeProjects: [
      'Strengthening WASH capability for South Sudanese refugees (Kule Refugee Camp)'
    ],
    activeProjectsAm: [
      'በኩሌ ካምፕ ለደቡብ ሱዳን ስደተኞች የውሃና ንጽህና (WASH) አቅም ግንባታ'
    ],
    activeProjectsOm: [
      'Dandeettii WASH Baqattoota Sudaan Kibbaa Cimsuu (Kaampii Kulee)'
    ],
    activeProjectsTi: [
      'ምሕያል ዓቕሚ WASH ንስደተኛታት (ካምፕ ኩሌ)'
    ],
    activeProjectsCount: 1,
    solarWellsCount: 12,
    budgetDeployed: '$1,400,000 USD',
    woredasCount: 1,
    fieldHub: 'Kule Camp Operations Unit',
    fieldHubAm: 'የኩሌ ካምፕ ስራ አስፈጻሚ ቢሮ',
    fieldHubOm: 'Wiirtuu Hojiirra Oolmaa Kulee',
    fieldHubTi: 'ኣሃዱ ስርሒት ካምፕ ኩሌ',
    primaryInterventions: ['Water point construction & rehabilitation', 'Sanitary latrine blocks', 'Refugee peer hygiene promotion'],
    primaryInterventionsAm: ['የውሃ ቦኖዎች ግንባታና ጥገና', 'የንጽህና መጸዳጃ ቤቶች ግንባታ', 'የስደተኞች የንጽህና ግንዛቤ ትምህርት'],
    primaryInterventionsOm: ['Ijaarsa fi suphaa buufata bishaanii', 'Manneen fincaanii qulqullinaa', 'Barnoota qulqullinaa hawaasaa'],
    primaryInterventionsTi: ['ህንጸትን ጽገናን ነቑጣታት ማይ', 'ህንጸት ጽሩይ ሽቓቓት', 'ጎስጓስ ጽሬት ስደተኛታት'],
    summary: 'Building self-reliance and community hygiene capacity among 37,000 South Sudanese refugees at Kule refugee camp, installing sustainable water supply systems and sanitation infrastructure.',
    summaryAm: 'በኩሌ ስደተኞች ካምፕ ለሚገኙ 37,000 የደቡብ ሱዳን ስደተኞች ዘላቂ የውሃ እና የንጽህና መሰረተ ልማቶችን በመገንባት ራስን መቻልን ያጠናክራል።',
    summaryOm: 'Kaampii Kuleetti baqattoota Sudaan Kibbaa 37,000f bishaan itti fufaa fi bu’uura qulqullinaa ijaaruun of danda’uu cimsa.',
    summaryTi: 'ኣብ ካምፕ ኩሌ ን37,000 ስደተኛታት ደቡብ ሱዳን ዘላቒ ቀረብ ማይን ትሕተ-ቅርጺ ጽሬትን ብምህናጽ ርእሰ-ምኽኣል የዕቢ።',
    svgPath: 'M 90,210 L 160,220 L 150,280 L 90,260 Z',
    labelCoord: { x: 120, y: 245 },
    gisCoordinates: [8.25, 34.60],
    zoomLevel: 8,
    boundary: [
      [8.7, 34.1], [8.6, 35.4], [7.7, 35.2], [7.2, 34.2], [7.8, 33.5], [8.4, 33.8]
    ]
  },
  {
    id: 'addis-ababa',
    name: 'National & Multi-Regional HQ',
    nameAm: 'ሀገራዊና ባለብዙ ክልል ፕሮጀክቶች',
    nameOm: 'Muummee fi Pirojektoota Biyyaalessaa',
    nameTi: 'ሃገራውን ብዙሕ-ክልላውን ማእከል',
    capital: 'Addis Ababa (Kirkos)',
    capitalAm: 'አዲስ አበባ (ቂርቆስ)',
    capitalOm: 'Finfinnee (Qirqoos)',
    capitalTi: 'ኣዲስ ኣበባ (ቂርቆስ)',
    beneficiaries: '19,500+',
    beneficiariesCount: 19500,
    activeProjects: [
      'Vocational Qualification & Employment Perspectives (VQEP) in Solar Energy Sector',
      'Together for the Inclusion (National Inclusion in Education)'
    ],
    activeProjectsAm: [
      'በሶላር ኃይል ዘርፍ የወጣቶችና ሴቶች የሙያ ስልጠና (VQEP)',
      'አብሮ ለማካተት (ሀገራዊ አካታች ትምህርት)'
    ],
    activeProjectsOm: [
      'Leenjii Ogummaa Anniisaa Aduu (VQEP)',
      'Waliin Hirmaannaa Barnootaaf (TOFI)'
    ],
    activeProjectsTi: [
      'ሞያዊ ብቕዓት ኣብ ጸሓያዊ ጸዓት (VQEP)',
      'ብሓባር ንምሕቋፍ (ሃገራዊ ሓቛፊ ትምህርቲ)'
    ],
    activeProjectsCount: 2,
    solarWellsCount: 6,
    budgetDeployed: '$4,500,000 USD',
    woredasCount: 4,
    fieldHub: 'Addis Ababa National Coordination Office',
    fieldHubAm: 'አዲስ አበባ ብሄራዊ ማስተባበሪያ ቢሮ',
    fieldHubOm: 'Waajjira Qindoomina Biyyoolessaa Finfinnee',
    fieldHubTi: 'ሃገራዊ ቤት-ጽሕፈት ምውህሃድ ኣዲስ ኣበባ',
    primaryInterventions: ['Solar TVET vocational certification', 'Special education assistive devices', 'Countrywide inclusion campaigns'],
    primaryInterventionsAm: ['የሶላር TVET የሙያ ማረጋገጫ ስልጠና', 'ለልዩ ፍላጎት ተማሪዎች አጋዥ መሳሪያዎች', 'ሀገር አቀፍ የአካታችነት ዘመቻዎች'],
    primaryInterventionsOm: ['Mirkaneeffannaa ogummaa TVET aduu', 'Meeshaalee gargaarsaa barnoota addaa', 'Duula hirmaannaa biyyaalessaa'],
    primaryInterventionsTi: ['ምስክርነት ሞያዊ ስልጠና ጸሓይ TVET', 'መሳርሒ ደገፍ ንስንኩላን ተምሃሮ', 'ሃገር-ለኸ ጎስጓስ ምሕቋፍ'],
    summary: 'Coordinating cross-regional programs including the VQEP Solar TVET training across Dire Dawa, Afar Zone 3, Arba Minch, and Wolkete, and nationwide educational inclusion for 7,000 children with disabilities.',
    summaryAm: 'በድሬዳዋ፣ አፋር ዞን 3፣ አርባ ምንጭና ወልቂጤ የVQEP ሶላር ስልጠናን እንዲሁም ለ7,000 አካል ጉዳተኛ ህጻናት ሀገራዊ አካታች ትምህርትን ያስተባብራል።',
    summaryOm: 'Sagantaalee naannoolee qindeessuun Dirree Dawaa, Affaar Zoonii 3, Arbaa Minch fi Walqixxeetti leenjii VQEP fi daa’imman 7,000f barnoota hunda hammataa hoggana.',
    summaryTi: 'ኣብ ድሬዳዋ፣ ዓፋር ዞባ 3፣ ኣርባ ምንጭን ወልቂጤን ስልጠና ጸሓይ VQEPን ን7,000 ስንኩላን ህጻናት ሃገራዊ ሓቛፊ ትምህርትን የወሃህድ።',
    svgPath: 'M 225,200 L 245,200 L 245,215 L 225,215 Z',
    labelCoord: { x: 235, y: 208 },
    gisCoordinates: [9.02, 38.75],
    zoomLevel: 10,
    boundary: [
      [9.10, 38.68], [9.10, 38.85], [8.92, 38.85], [8.92, 38.68]
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-1',
    projectNo: 1,
    region: 'Oromia',
    sector: 'Education',
    sectorCategory: 'Education',
    title: 'Integrated formal and TVET education in ATJK and SEAQE II Project in Oromia',
    objective: 'Improved management of formal and TVET education & infrastructure. All learners equipped with skills/attitudes by 2023. All learners, regardless of background, ability and gender equitably access, engage in and learn in inclusive schools and TVET institutions by 2023.',
    duration: 'March 1, 2019 – Feb 2024',
    beneficiaries: '8,921 (5,293 M, 3,628 F)',
    beneficiariesCount: 8921,
    woredas_towns: 'Negelle Arsi, Adami Tulu Jido Kombolcha (ATJK), Modjo, Bora, Meki, Bulbula',
    status: 'Active / Ongoing',
    image: EDUCATION_IMAGE,
    budget: '$4,800,000 USD',
    partners: ['ADRA Norway', 'NORAD', 'Oromia Education Bureau', 'Federal TVET Institute'],
    summary: 'Improved management of formal & TVET education, infrastructure expansion, and equipping all learners with inclusive attitudes & skills by 2023.',
    goals: [
      '1 Complete Preparatory school Construction at Negelle Arsi Woreda',
      '1 Complete Secondary school constructions at Adami Tulu Jido Kombolcha (ATJK)',
      '1 block (4 classrooms expansion) at Modjo town',
      '1 block (4 classrooms expansion) at Bora town',
      '1 block (4 classrooms expansion) at Meki town',
      '1 block (4 classrooms expansion) at Bulbula town',
      'Toilet constructions/rehabilitations, water extension activities, and electricity/solar installation',
      'School gardening plots established for practical agricultural education',
      'Remark: All six schools (2 Secondary and 4 TVET) constructed, near completion / completed',
      'Materials provisions: Learning materials (reference books, lab equipment, computers, TVET machineries), stationery, girls dignity materials, medical treatment and mobility/supportive devices for students with disabilities',
      'Capacity building: Head teachers, deans, teachers, TVET trainers, PTSA, SMC, supervisors, inspectors, and education experts',
      'Awareness campaigns: Inclusive and gender-focused advocacy campaigns, school enrolment promotion, and COVID-19 protection'
    ],
    hardComponents: [
      '1 Complete Preparatory school Construction at Negelle Arsi Woreda',
      '1 Complete Secondary school constructions at Adami Tulu Jido Kombolcha (ATJK)',
      '1 block (4 classrooms expansion) at Modjo town',
      '1 block (4 classrooms expansion) at Bora town',
      '1 block (4 classrooms expansion) at Meki town',
      '1 block (4 classrooms expansion) at Bulbula town',
      'Toilet constructions / rehabilitations',
      'Water extension activities',
      'Electricity / Solar Installation',
      'School Gardening'
    ],
    materialsProvisions: [
      'Learning materials provisions (Reference books, laboratory equipment, Computers and other small and handy machineries for TVET)',
      'Stationery Materials',
      'Girls dignity materials',
      'Medical treatment for students with disabilities',
      'Provision of mobility and other supportive materials for children with disabilities'
    ],
    softComponents: [
      'Head Teachers and College Deans Capacity Building trainings',
      'Teachers and TVET trainers Capacity building trainings',
      'PTSA and SMC capacity building trainings',
      'Supervisors/Inspectors Capacity building trainings',
      'Education office Experts capacity building trainings',
      'Girls and Environmental club leaders training',
      'Introducing 21st century skills training, life skills and E-learning',
      'Reviewing Soft skills Trainings for TVET students',
      'Inclusive and gender focused Advocacy campaigns',
      'School Enrolment promotion campaigns',
      'Covid-19 protection campaigns'
    ]
  },
  {
    id: 'proj-2',
    projectNo: 2,
    region: 'Somali',
    sector: 'Livelihood',
    sectorCategory: 'Livelihood',
    title: 'Building Opportunity for Livelihood Development and Enhanced Resilience (BOLDER)/RIHA II',
    objective: 'Resilience building and livelihood strengthening of pastoralists and agro-pastoralists. This happens through applying a list of community-based methods e.g. CAP, VSLA, PSF/FFS/FMS.',
    duration: '01/01/2022 to 31/12/2025',
    beneficiaries: '48,000 direct persons',
    beneficiariesCount: 48000,
    woredas_towns: 'Somali Region',
    status: 'Active / Ongoing',
    image: AGRICULTURE_IMAGE,
    budget: '$3,400,000 USD',
    partners: ['ADRA International', 'Regional Pastoral Bureau', 'Local Cooperatives'],
    summary: 'Resilience building and livelihood strengthening of pastoralists and agro-pastoralists through CAP, VSLA, PSF/FFS/FMS.',
    goals: [
      'Resilience building and rangeland protection for 48,000 pastoralists and agro-pastoralists',
      'Community Action Planning (CAP) participatory methodology implementation',
      'Village Savings and Loan Associations (VSLA) financial empowerment and micro-enterprise development',
      'Pastoral Field Schools (PFS) / Farmer Field Schools (FFS) / Farmer Management Systems (FMS)'
    ]
  },
  {
    id: 'proj-3',
    projectNo: 3,
    region: 'Dire Dawa / Multi-Region',
    sector: 'Education / Livelihood',
    sectorCategory: 'Education / Livelihood',
    title: 'Vocational Qualification & Employment Perspectives (VQEP) for Youth and Women in the Solar Energy Sector',
    objective: 'General Objective: The livelihoods of unemployed youth and women in Dire Dawa are improved and contribution to strengthening the renewable energy sector in Dire Dawa Afar Zone3, Arba Minch and Wolkete, and Ethiopia at large is made in 2025. Specific objective 2: Improved safety and dignity of conflict affected girls and women from Ada’ar woreda.',
    duration: 'October 01, 2022 – December 31, 2025',
    beneficiaries: 'Youth and Women (Unspecified exact total)',
    beneficiariesCount: 12500,
    woredas_towns: 'Dire Dawa, Afar Zone 3, Arba Minch, Wolkete',
    status: 'Active / Ongoing',
    image: HERO_IMAGE,
    budget: '$2,600,000 USD',
    partners: ['ADRA Germany', 'Federal Ministry of Labor & Skills', 'Regional TVET Institutes'],
    summary: 'Improve livelihoods of unemployed youth/women in renewable energy sector & safety/dignity in Ada’ar woreda.',
    goals: [
      'Accredited vocational qualification and competency certifications in solar photovoltaic technology',
      'Upgrading regional TVET colleges with solar demonstration laboratories and testing equipment',
      'Market-driven job placement and green entrepreneurship support for youth and women',
      'Targeted protection, safety, and dignity support for conflict-affected girls and women from Ada’ar woreda'
    ]
  },
  {
    id: 'proj-4',
    projectNo: 4,
    region: 'Somali',
    sector: 'Integrated Agriculture & Health',
    sectorCategory: 'Integrated Agriculture and Health',
    title: 'Integrated multi-sector emergency response for acute malnutrition through agriculture, food, health, nutrition and WASH services for drought affected IDPs in Adadle werda, Shabelle zone in Somali region (Envelope 2 - Somali region)',
    objective: 'The overall objective of the intersectoral collaboration model of the Agriculture, Food, Health, Nutrition and WASH clusters is to save lives, prevent mortality rates and reduce number of acute malnutrition and disease cases in the drought-affected Adadle Woreda – Shebele zone of Somali Region.',
    duration: '01/02/2023 - 31/01/2024',
    beneficiaries: '7,500 HHs',
    beneficiariesCount: 45000,
    woredas_towns: 'Adadle Woreda (Shebele Zone)',
    status: 'Active / Ongoing',
    image: HEALTH_IMAGE,
    budget: '$2,850,000 USD',
    partners: ['UN-OCHA / EHF', 'Somali Regional Health Bureau', 'Somali Water Bureau'],
    summary: 'Save lives, prevent mortality, and reduce acute malnutrition and disease cases through multi-sector collaboration.',
    goals: [
      'Save lives and prevent excess mortality across drought-affected internally displaced communities',
      'Decentralized Outpatient Therapeutic Programs (OTP) and screening for acute malnutrition',
      'Clean water supply and emergency WASH services in IDP camps and host settlements',
      'Emergency agricultural assistance and food support to drought-affected households'
    ]
  },
  {
    id: 'proj-5',
    projectNo: 5,
    region: 'Somali',
    sector: 'WASH',
    sectorCategory: 'WASH',
    title: 'WASH Emergency response in communities affected by drought disaster in Shebelle Zone (Adadle and Gode Woredas)',
    objective: 'Provide life-saving humanitarian assistance to improve the WASH in emergency of the vulnerable drought-affected individuals in Somali region.',
    duration: 'Oct 24, 2022 up to November 30, 2023',
    beneficiaries: '45,480 IDPs',
    beneficiariesCount: 45480,
    woredas_towns: 'Adadle and Gode Woredas (Shebelle Zone)',
    status: 'Active / Ongoing',
    image: WASH_IMAGE,
    budget: '$1,750,000 USD',
    partners: ['UNICEF', 'Somali Regional Water Resources Bureau'],
    summary: 'Provide life-saving humanitarian WASH assistance to vulnerable drought-affected individuals.',
    goals: [
      'Emergency water trucking and rapid rehabilitation of strategic solar water boreholes',
      'Construction of emergency latrines and handwashing stations in displacement settlements',
      'Distribution of critical WASH NFIs: water containers, soap, and household water treatment kits',
      'Community-led hygiene promotion to prevent acute watery diarrhea and infectious outbreaks'
    ]
  },
  {
    id: 'proj-6',
    projectNo: 6,
    region: 'Multi-Region / National',
    sector: 'Education',
    sectorCategory: 'Education',
    title: 'Together for the Inclusion',
    objective: 'To provide support for children in inclusion aspect in education sector.',
    duration: '01 October 2020 up to 31 December 2023',
    beneficiaries: '7,000 persons',
    beneficiariesCount: 7000,
    woredas_towns: 'Not specified (Multi-Region / National)',
    status: 'Active / Ongoing',
    image: EDUCATION_IMAGE,
    budget: '$1,900,000 USD',
    partners: ['Atlas Alliance', 'ADRA Norway', 'Disabled Peoples Organizations (DPOs)'],
    summary: 'Provide support for children in inclusion aspect in education sector.',
    goals: [
      'Educational inclusion and accessibility support for 7,000 children with disabilities',
      'Provision of assistive mobility devices, hearing aids, and specialized learning materials',
      'Teacher pedagogical training on inclusive classroom instruction and individualized support',
      'Advocacy campaigns reducing stigma and discrimination against children with disabilities'
    ]
  },
  {
    id: 'proj-7',
    projectNo: 7,
    region: 'Amhara',
    sector: 'WASH',
    sectorCategory: 'WASH',
    title: 'The project of WASH assistance for conflict crisis response in North Wollo, Amhara region, Ethiopia',
    objective: 'The Conflict in Northern Ethiopia has destroyed the WASH infrastructure of the community, causing lack of safe drinking water and toilet facilities. On top of that, lack of WASH & sanitation items and adequate knowledge among people is putting them at risk of infectious diseases. In this project, newly built water supply system and maintenance system will ensure the stable supply of water to the community. Sanitary environment (school, emergency toilet room, WASH items) within the area reachable from the above mentioned water supply system will also be improved. Hygiene promotion for IDPs as well as people in host community will also be conducted aiming better Hygiene knowledge among people in order to prevent infectious diseases.',
    duration: '30th November 2022 to 30 September 2023',
    beneficiaries: '18,300 persons',
    beneficiariesCount: 18300,
    woredas_towns: 'North Wollo Zone',
    status: 'Active / Ongoing',
    image: WASH_IMAGE,
    budget: '$2,100,000 USD',
    partners: ['Japan Platform / ADRA Japan', 'Amhara Water & Energy Bureau'],
    summary: 'Restore water supply system, maintain infrastructure, improve sanitation and hygiene promotion.',
    goals: [
      'Rebuilding conflict-damaged water supply systems and establishing long-term community maintenance mechanisms',
      'Improving sanitary environment across schools and emergency toilet facilities for IDPs and host communities',
      'Procurement and distribution of vital WASH & personal sanitation items',
      'Comprehensive hygiene promotion preventing infectious disease transmission'
    ]
  },
  {
    id: 'proj-8',
    projectNo: 8,
    region: 'Afar',
    sector: 'WASH / Livelihood',
    sectorCategory: 'WASH',
    title: 'Post-war recovery for conflict-affected populations in the Afar region',
    objective: 'To provide humanitarian assistance to conflict-affected populations in post-war reconstruction in Afar Regional State, Ethiopia according to the specific needs in each kebele. Specific objective 1. Restore livelihoods by promoting livestock rearing, access to drinking water and education in the 5 kebeles of the Ada’ar woreda.',
    duration: '01/05/2023 - 31/12/2023',
    beneficiaries: '6,000 people',
    beneficiariesCount: 6000,
    woredas_towns: 'Ada’ar Woreda (5 Kebeles)',
    status: 'Active / Ongoing',
    image: WASH_IMAGE,
    budget: '$1,350,000 USD',
    partners: ['ADRA International', 'Afar Regional Disaster Prevention & Preparedness Bureau'],
    summary: 'Provide humanitarian assistance/reconstruction, restore livelihoods, drinking water, and education.',
    goals: [
      'Post-war reconstruction according to the specific needs of each kebele',
      'Restoration of pastoral livelihoods by promoting livestock rearing and animal health',
      'Securing sustainable drinking water access for conflict-affected families and herds',
      'Re-establishing education access in the 5 targeted kebeles of Ada’ar woreda'
    ]
  },
  {
    id: 'proj-9',
    projectNo: 9,
    region: 'Tigray',
    sector: 'Health (Psycho-social Support)',
    sectorCategory: 'Health (Psycho-social Support)',
    title: '“Psycho-social Support and Employment Opportunities for conflict-affected IDPs & and HCs in Tigray Region - Ethiopia” - PSSEO',
    objective: 'Improved psychosocial wellbeing through access to comprehensive psychosocial services (20’000 individuals) and improved livelihood through integrated IGA skills development and life skills training (700 individuals) for conflict affected IDPs & HCs in Mekelle and Shire, Tigray Region (67% women).',
    duration: '1 October, 2022 – Aug 31, 2023',
    beneficiaries: '20,000 People (67% women)',
    beneficiariesCount: 20000,
    woredas_towns: 'Mekelle and Shire',
    status: 'Active / Ongoing',
    image: HEALTH_IMAGE,
    budget: '$1,950,000 USD',
    partners: ['Swiss Agency for Development and Cooperation (SDC)', 'ADRA Switzerland'],
    summary: 'Improve psychosocial wellbeing and livelihoods through IGA skills development & life skills training.',
    goals: [
      'Comprehensive mental health and psychosocial support services (MHPSS) reaching 20,000 conflict-affected individuals',
      'Integrated income-generating activity (IGA) skills and life skills training for 700 individuals (67% women)',
      'Provision of startup toolkits and business seed grants for female heads of households',
      'Establishment of community-based psychosocial peer support networks in Mekelle and Shire'
    ]
  },
  {
    id: 'proj-10',
    projectNo: 10,
    region: 'Tigray',
    sector: 'Emergency Food Assistant',
    sectorCategory: 'Emergency Food Assistant',
    title: 'Emergency response for conflict-affected most vulnerable IDPs and HCs in Mekelle and surroundings, Tigray Region of Ethiopia – (Emergency Response Tigray Region)',
    objective: 'The overall objective of the Emergency Response Tigray Region programme is saving lives of 300 conflict-affected IDP and Host Community Households in Mekelle and Surroundings through provision of food items and NFIs; AND enabling distance learning for up to 292 school children through distribution of solar-powered radio sets; AND reduce the burden of diseases among children under fourteen years of age and their mothers through provision of medicaments and medical supplies.',
    duration: '01st November 2022 - Aug 31, 2023 (subject to NCE)',
    beneficiaries: '300 HHs (IDP & Host Communities)',
    beneficiariesCount: 2100,
    woredas_towns: 'Mekelle and Surroundings',
    status: 'Active / Ongoing',
    image: HERO_IMAGE,
    budget: '$1,100,000 USD',
    partners: ['ADRA International', 'Tigray Disaster Risk Management Commission'],
    summary: 'Save lives through food items & NFIs, solar-powered radios for distance learning, and medical supplies.',
    goals: [
      'Saving lives of 300 conflict-affected IDP and Host Community Households via food items and NFIs',
      'Enabling distance learning for up to 292 school children through distribution of solar-powered radio sets',
      'Reducing the burden of diseases among children under 14 and their mothers through provision of medicaments and medical supplies'
    ]
  },
  {
    id: 'proj-11',
    projectNo: 11,
    region: 'Afar',
    sector: 'Emergency Food Assistant / Livelihood',
    sectorCategory: 'Emergency Food Assistant / Livelihood',
    title: 'Emergency food assistance to conflict displaced IDP in Afar region',
    objective: 'To provide food (white flour, oil, and high energy biscuit) for conflict displaced IDP in two kebeles of 600HH of Afar region.',
    duration: 'Dec 15, 2021 up to Feb 15, 2022',
    beneficiaries: '600 HHs IDPs',
    beneficiariesCount: 3600,
    woredas_towns: '2 Kebeles, Afar region',
    status: 'Recently Completed',
    image: HERO_IMAGE,
    budget: '$450,000 USD',
    partners: ['ADRA International Network', 'Afar Regional Government'],
    summary: 'Provide food (white flour, oil, high energy biscuit) for conflict-displaced IDPs.',
    goals: [
      'Timely procurement and distribution of white flour, vegetable oil, and high-energy biscuits',
      'Immediate hunger relief and nutritional stabilization for 600 conflict-displaced households across 2 kebeles',
      'Protection of pregnant and lactating mothers and infants from acute nutritional deterioration'
    ]
  },
  {
    id: 'proj-12',
    projectNo: 12,
    region: 'Somali',
    sector: 'Agriculture',
    sectorCategory: 'Agriculture',
    title: 'Livelihood based Emergency Response for drought affected IDP population in Mustahil, Fer-Fer, and Higloley Woredas of Shabele and Korahe Zones, Somali Region',
    objective: 'The main objective of the project is to improve, Agriculture status and reduce morbidity and mortality of most vulnerable groups like infants, children under the age of five, and pregnant and lactating women in drought-affected target woreda of Somali Region specifically targeting Shebele Zone Mustahil IDP sites.',
    duration: '30/04/2022 - 31/10/2022',
    beneficiaries: '7,500 HHs',
    beneficiariesCount: 45000,
    woredas_towns: 'Mustahil, Fer-Fer, and Higloley Woredas (Shebele and Korahe Zones)',
    status: 'Recently Completed',
    image: AGRICULTURE_IMAGE,
    budget: '$1,650,000 USD',
    partners: ['Ethiopia Humanitarian Fund (EHF)', 'Somali Regional Agriculture Bureau'],
    summary: 'Improve agriculture status and reduce morbidity/mortality of infants, children <5, and pregnant/lactating women.',
    goals: [
      'Improving agriculture status and crop production for 7,500 drought-affected IDP and host households',
      'Targeted nutrition intervention reducing morbidity and mortality among infants, children <5, and pregnant/lactating women',
      'Provision of drought-tolerant early-maturing seeds and agricultural inputs along riverine cultivation basins'
    ]
  },
  {
    id: 'proj-13',
    projectNo: 13,
    region: 'Somali',
    sector: 'Livelihood',
    sectorCategory: 'Livelihood',
    title: 'Integrated Drought Response and Recovery: IDRR',
    objective: 'Adventist Development and Relief Agency (ADRA Ethiopia), in partnership with VSF Suisse, aims to respond to critical humanitarian needs. The organisations will support various multi-faceted interventions contributing to saving lives and protecting and restoring the livelihoods of vulnerable communities in two drought-affected woredas of the Shebele zone.',
    duration: 'July 01, 2022 – April 30, 2023',
    beneficiaries: '106,000 people',
    beneficiariesCount: 106000,
    woredas_towns: 'Shebele Zone (2 drought-affected woredas)',
    status: 'Recently Completed',
    image: AGRICULTURE_IMAGE,
    budget: '$3,200,000 USD',
    partners: ['VSF Suisse (Consortium Partner)', 'ADRA Switzerland', 'SDC'],
    summary: 'Respond to critical humanitarian needs, save lives, protect and restore livelihoods.',
    goals: [
      'Multi-faceted humanitarian assistance directly reaching 106,000 drought-affected persons',
      'Emergency livestock survival feed, paravet care, and commercial destocking support',
      'Rehabilitation of strategic community water infrastructure and drought recovery cash grants'
    ]
  },
  {
    id: 'proj-14',
    projectNo: 14,
    region: 'Somali',
    sector: 'Nutrition',
    sectorCategory: 'Nutrition',
    title: 'School Feeding Project for Drought ravaged ADRA Ethiopia Target School',
    objective: 'The project will therefore contribute to a number of results including: reduced school dropout rate and absenteeism, improved livelihood of 30 organized mothers, improved nutrition and health status, improved social and emotional behavior, improved parent child relationship and increased participation of students in agricultural production activities.',
    duration: 'Sept. 11, 2022 up to June 30, 2022',
    beneficiaries: '30 selected mothers and 300 students',
    beneficiariesCount: 330,
    woredas_towns: 'Target School (Somali Region)',
    status: 'Recently Completed',
    image: EDUCATION_IMAGE,
    budget: '$380,000 USD',
    partners: ['ADRA International', 'Local Woreda Education Offices'],
    summary: 'Reduce dropout rate/absenteeism, improve nutrition, health, and parent-child relationship.',
    goals: [
      'Daily hot school meals reducing dropout rates and absenteeism among 300 primary students',
      'Empowering and organizing 30 mothers in school catering, hygiene, and kitchen livelihoods',
      'Improved nutritional and emotional health status of vulnerable drought-impacted school children',
      'School garden plots fostering practical student engagement in agricultural production'
    ]
  },
  {
    id: 'proj-15',
    projectNo: 15,
    region: 'Gambella',
    sector: 'WASH',
    sectorCategory: 'WASH',
    title: 'The project of strengthening WASH capability for South Sudanese refugees at Kule refugee camp in Gambella region of Ethiopia',
    objective: 'To build their capacity to address water, sanitation and hygiene challenges by themselves as much as possible, and to improve their hygiene and sanitation practice.',
    duration: '16 September 2022 to 15 March 2023',
    beneficiaries: '37,000 persons',
    beneficiariesCount: 37000,
    woredas_towns: 'Kule refugee camp (Gambella Region)',
    status: 'Recently Completed',
    image: WASH_IMAGE,
    budget: '$1,400,000 USD',
    partners: ['UNHCR', 'Refugee and Returnee Service (RRS)', 'ADRA Japan'],
    summary: 'Build capacity to address WASH challenges and improve hygiene/sanitation practice.',
    goals: [
      'Building capacity among 37,000 South Sudanese refugees to address WASH challenges independently',
      'Constructing and rehabilitating community water points, washing slabs, and sanitary latrines',
      'Intensive peer-to-peer hygiene promotion and sanitation practice improvement throughout Kule camp'
    ]
  }
];

export const STORIES: Story[] = [
  {
    id: 'story-1',
    name: 'Ayantu Bekele',
    role: 'Mother of four & Water Committee Chair',
    location: 'East Hararghe, Oromia',
    sector: 'Clean Water (WASH)',
    quote: 'Before the solar tap stand was constructed, my daughters and I walked four hours each day down the dry riverbed. Today, fresh water is right outside our compound gate. My daughters have never missed a day of school this semester.',
    quoteAm: 'የሶላር ውሃ መታጠቢያ ጣቢያ ከመሰራቱ በፊት እኔና ሴት ልጆቼ በየቀኑ አራት ሰዓት ውሃ ፍለጋ እንጓዝ ነበር። ዛሬ ንጹህ ውሃ በደጃችን ደርሷል። ልጆቼ በዚህ ሴሚስተር ትምህርት ቤት አልቀሩም።',
    quoteOm: 'Ujummoon bishaanii aduu osoo hin ijaaramin dura aniifi ijoolleen koo durbaa guyyaatti sa’aatii afur bishaan barbaada adeemna turre. Har’a bishaan qulqulluun balbala keenya jira.',
    quoteTi: 'ቅድሚ ምትካል ጸሓያዊ ማይ ኣነን ኣዋልደይን መዓልታዊ ንኣርባዕተ ሰዓታት ማይ ነናዲ ነይርና። ሎሚ ጽሩይ ማይ ኣብ ኣፍ-ደገና በጺሑ፤ ደቀይ ካብ ትምህርቲ ኣይተርፋን።',
    fullStory: 'In the hills of East Hararghe, water collection historically claimed up to a third of a rural woman’s day, exposing young girls to physical risks along treacherous paths. When ADRA Ethiopia partnered with the community to drill a 180-meter solar borehole, Ayantu was elected to lead the 7-person WASHCo committee. Under her supervision, the water point maintains a zero-downtime record, generating modest community tariffs to sustain preventative repairs.',
    image: WASH_IMAGE,
    year: '2025'
  },
  {
    id: 'story-2',
    name: 'Fatima Aden',
    role: 'Pastoralist Mother',
    location: 'Kelafo District, Somali Region',
    sector: 'Nutrition & Health',
    quote: 'My 14-month-old son Hassan was so weak he could no longer take milk. The ADRA community health worker visited our tent, recognized severe acute malnutrition, and enrolled him in home therapeutic care. In six weeks, his strength completely returned.',
    quoteAm: 'የ14 ወር ልጄ ሃሰን በጠና ታሞ ነበር። የአድራ ጤና ሰራተኛ ወደ ድንኳናችን መጥታ ህክምና ሰጠችው። በስድስት ሳምንታት ውስጥ ጤንነቱ ሙሉ በሙሉ ተመለሰ።',
    quoteOm: 'Ilmi koo Hasaan ji’a 14 hedduu dadhabee aannan dhuguu dadhabe. Hojjettuun fayyaa ADRA gara dunkaana keenyaa dhuftee yaala kenniteef; torban ja’a keessatti fayye.',
    quoteTi: 'ወደይ ሓሰን ወዲ 14 ወርሒ ኣዝዩ ደኺሙ ነይሩ። ሰራሕተኛ ጥዕና ኣድራ ናብ ቴንዳና መጺኣ ሕክምና ምስ ሃበቶ፣ ኣብ ውሽጢ ሽዱሽተ ሰሙን ሙሉእ ጥዕናኡ ተመሊሱ።',
    fullStory: 'During the prolonged regional drought in the Somali lowlands, family livestock perished, eliminating household milk supplies. Fatima lived over 60 kilometers from the nearest hospital. Through ADRA Ethiopia’s decentralized Community Therapeutic Care (CTC) network, local outreach health workers brought ready-to-use therapeutic food (RUTF) directly to Fatima’s settlement, conducting weekly health check-ups until Hassan surpassed healthy weight percentiles.',
    image: HEALTH_IMAGE,
    year: '2025'
  },
  {
    id: 'story-3',
    name: 'Dawit Tadesse',
    role: 'Certified Solar Technician & Cooperative Founder',
    location: 'Addis Ababa & North Shewa',
    sector: 'Green Energy TVET',
    quote: 'I graduated from university with a physics diploma but couldn’t find work for two years. The ADRA Green Energy TVET gave me real hands-on mastery over solar inverters and mini-grids. Today, my 4-person team installs solar pumps across rural cooperatives.',
    quoteAm: 'የአድራ የአረንጓዴ ኃይል ስልጠና ተግባራዊ የሶላር ቴክኖሎጂ እውቀት ሰጠኝ። ዛሬ የኔ አራት አባላት ያሉት ቡድን በመላው ኢትዮጵያ የሶላር ውሃ ፓምፖችን ይገነባል።',
    quoteOm: 'Leenjiin Anniisaa Magariisaa ADRA ogummaa qabatamaa naaf kenne. Har’a gareen koo nama 4 waldaalee baadiyyaatiif paampii bishaanii aduu dhaaba.',
    quoteTi: 'ናይ ኣድራ ስልጠና ሓምለዋይ ጸዓት ግብራዊ ክእለት ሂቡኒ። ሎሚ 4 ኣባላት ዘለውዋ ጉጅለይ ኣብ ገጠራት ጸሓያዊ ፓምፕታት ማይ ትተክል ኣላ።',
    fullStory: 'Dawit enrolled in the intensive 6-month Green Energy TVET II cohort at ADRA Ethiopia’s Addis Ababa coordination campus in Kirkos. After passing the Level III national certification exams, Dawit received an incubation starter kit containing specialized photovoltaic meters and safety gear. His cooperative has already installed 22 solar water pumping stations across Oromia and Amhara.',
    image: HERO_IMAGE,
    year: '2026'
  },
  {
    id: 'story-4',
    name: 'Marta Girma',
    role: 'Grade 8 Student & Science Club President',
    location: 'Sidama Region',
    sector: 'Girls Education (SEAQE)',
    quote: 'In our village, many girls leave school at grade 6 because there were no proper restrooms or books. The SEAQE project built clean private facilities and gave us reading libraries. I am studying hard to become a civil engineer.',
    quoteAm: 'በመንደራችን ብዙ ሴት ልጆች በንፅህና ጉድለት ምክንያት ትምህርት ያቋርጡ ነበር። የአድራ ፕሮጀክት ንፁህ መጸዳጃ ቤቶችን እና ቤተ-መጻሕፍትን ሰጠን። እኔ ሲቪል መሀንዲስ ለመሆን ጠንክሬ እየተማርኩ ነው።',
    quoteOm: 'Ganda keenyatti hanqina qulqullinaatiin shamarran hedduun barnoota addaan kutu turan. Piroojektiin SEAQE mana fincaanii qulqulluu fi kitaabota nuuf kenne; injiinara ta’uuf jabaadheen baradha.',
    quoteTi: 'ኣብ ዓድና ብዙሓት ኣዋልድ ብሰንኪ ጸገም ጽሬት ትምህርቲ የቋርጻ ነይረን። መደብ SEAQE ጽሩይ ሽቓቓትን መጻሕፍትን ሂቡና፤ ሲቪል መሃንዲስ ክኸውን ብትግሃት እምሃር ኣለኹ።',
    fullStory: 'At the rural Bensa primary school in Sidama, girls absenteeism dropped by 64% after ADRA Ethiopia’s SEAQE II project completed gender-segregated sanitation blocks equipped with running water, alongside distributing dignity hygiene packs and textbooks in Sidama and English languages.',
    image: EDUCATION_IMAGE,
    year: '2025'
  },
  {
    id: 'story-5',
    name: 'Gedi Abdi',
    role: 'Pastoralist Community Elder',
    location: 'Gode Woreda, Somali Region',
    sector: 'Emergency Cash (MPCA)',
    quote: 'When the drought destroyed our pasture, ADRA transferred cash directly to our phones. I didn’t have to beg or relocate my elders; I bought food and saved our remaining herd.',
    quoteAm: 'ድርቁ ግጦሻችንን ባጠፋ ጊዜ አድራ ቀጥታ በስልካችን ገንዘብ ላከልን፤ ሽማግሌዎቻችንን ሳናፈናቅል ምግብ ገዝተን የቀሩንን ከብቶች አተረፍን።',
    quoteOm: 'Yeroo hongeen dheeda keenya balleesse ADRAn kallattiin bilbila keenyarratti maallaqa nuuf erge. Otoo hin godaanin midhaan binnee loon keenya hambifanne.',
    quoteTi: 'ደርቂ መጓሰይና ምስ ኣጥፍአ ኣድራ ቀጥታ ናብ ስልክና ገንዘብ ልኢኹልና። ከይተመዛበልና መግቢ ዓዲግና ዝተረፋ ከብትና ኣድሒንና።',
    fullStory: 'During severe pastoral droughts in the Shabelle zone, market-based cash assistance proved far more dignifying than bulky food rations. Gedi received 12,000 ETB via digital mobile banking, enabling his household to buy locally produced sorghum, animal fodder, and medicine.',
    image: HERO_IMAGE,
    year: '2026'
  },
  {
    id: 'story-6',
    name: 'Wubit Mengistu',
    role: 'Vegetable Cooperative Chair & VSLA Founder',
    location: 'North Shewa, Amhara Region',
    sector: 'Climate-Smart Agriculture',
    quote: 'Solar drip irrigation freed us from the tyranny of dry seasons. We now grow tomatoes and onions three times a year, and our women’s cooperative has saved over 450,000 Birr.',
    quoteAm: 'የሶላር መስኖ ፓምፑ ከድርቅ አደጋ ነጻ አወጣን። አሁን በዓመት ሶስት ጊዜ አትክልቶችን እናመርታለን፤ የሴቶች ማህበራችንም ከ450 ሺህ ብር በላይ ቆጥቧል።',
    quoteOm: 'Jallisiin cophaa aduu bona irraa nu bilisoomse. Amma waggaatti yeroo sadii timaatimii fi shunkurtii oomishna; waldaan keenya Birrii 450,000 ol qusateera.',
    quoteTi: 'ጸሓያዊ መስኖ ነጠብጣብ ካብ ሓደጋ ደርቂ ኣናጊፉና። ሕጂ ኣብ ዓመት ሰለስተ ግዜ ኣሕምልቲ ነፍሪ፤ ማሕበር ደቂ-ኣንስትዮና ልዕሊ 450 ሽሕ ብር ዓቂቡ።',
    fullStory: 'Leading 42 female smallholders along the Jemma river valley, Wubit helped oversee the installation of a community solar pump funded by ADRA. With earnings from multi-season horticulture, every woman in the group has opened a personal commercial bank account.',
    image: AGRICULTURE_IMAGE,
    year: '2026'
  },
  {
    id: 'story-7',
    name: 'Fatuma Ali',
    role: 'Community Health Extension Leader',
    location: 'Berhale, Afar Region',
    sector: 'Maternal & Child Health',
    quote: 'Our mobile team walks into settlements where no vehicle could go. Seeing an infant with severe wasting gain back their weight in four weeks with RUTF is the greatest joy of my life.',
    quoteAm: 'ተንቀሳቃሽ ቡድናችን መኪና በማይገባባቸው መንደሮች በእግር ጭምር በመጓዝ ህክምና ያደርሳል፤ የተመጣጠነ ምግብ እጥረት ያለባቸው ህጻናት ድነው ፈገግታቸውን ማየት ትልቅ ደስታዬ ነው።',
    quoteOm: 'Gareen keenya socho’aan gandoota konkolaataan hin geenye miilaan seena. Daa’imman hanqina nyaataatiin miidhaman torban afur keessatti yoo fayyan arguun gammachuu guddaadha.',
    quoteTi: 'ተንቀሳቃሲ ጉጅለና መኪና ናብ ዘይኣትዎ ዓድታት ብእግሪ ተጓዒዙ ሕክምና የብጽሕ። ብዋሕዲ መግቢ ዝተጎድኡ ህጻናት ሓውዮም ምርኣይ ዓቢ ሓጎሰይ እዩ።',
    fullStory: 'Fatuma leads a 5-person mobile nutrition team across salt plains in Afar. By training mothers to recognize danger signs with color-coded MUAC tapes, her team reduced severe acute malnutrition mortality across 14 kebeles to less than 1.5%.',
    image: HEALTH_IMAGE,
    year: '2025'
  },
  {
    id: 'story-8',
    name: 'Solomon Bekele',
    role: 'Solar Irrigation & WASH Lead Engineer',
    location: 'Gambela & South Ethiopia',
    sector: 'Clean Water & Energy',
    quote: 'Replacing diesel pumps with high-yield solar arrays means communities never wake up to silent taps because fuel didn’t arrive. Solar power is true self-reliance.',
    quoteAm: 'የናፍታ ፓምፖችን በሶላር ኃይል መተካት ማህበረሰቡ ያለ ነዳጅ ጭንቀት ሁሌም ንጹህ ውሃ እንዲያገኝ ያስችለዋል፤ ሶላር ኃይል እውነተኛ ራስን መቻል ነው።',
    quoteOm: 'Paampii naaftaa aduutiin bakka buusuun hawaasni yaaddoo boba’aa malee bishaan qulqulluu akka argatu taasisa. Anniisaan aduu of danda’uu dhugaadha.',
    quoteTi: 'ናይ ናፍታ ፓምፕታት ብጸሓያዊ ጸዓት ምትካእ ሕብረተሰብ ብዘይ ሻቕሎት ነዳዲ ኩሉ ግዜ ጽሩይ ማይ ከም ዝረክብ ይገብር።',
    fullStory: 'Solomon has supervised the electro-mechanical installation of over 45 solar pumping stations across Ethiopia with ADRA. His focus on training local youth mechanics ensures that every installation maintains a 99% operational uptime year-round.',
    image: WASH_IMAGE,
    year: '2026'
  }
];

export const OPPORTUNITIES: Opportunity[] = [
  {
    id: 'tender-01',
    type: 'tender',
    title: 'Supply and Delivery of Solar Submersible Deep-Well Pumps & Photovoltaic Modules',
    titleAm: 'የሶላር ጥልቅ ጉድጓድ ውሃ ፓምፖችና የPV ፓነሎች አቅርቦት',
    titleOm: 'Dhiyeessii Paampii Bishaanii Aduu fi Paanaalii PV',
    titleTi: 'ቀረብ ጸሓያዊ ፓምፕታት ዓሚቝ ዒላን ፓነላት PVን',
    category: 'Procurement / Goods',
    categoryAm: 'ግዥ / እቃዎች',
    categoryOm: 'Bittaa / Meeshaalee',
    categoryTi: 'ዕድጊ / ኣቑሑ',
    location: 'Somali Region & Afar Region',
    deadline: 'November 15, 2026',
    referenceNumber: 'ADRA-ETH/WASH/TND-2026-08',
    description: 'ADRA Ethiopia invites sealed bids from eligible, registered bidders for the supply, delivery, and testing of high-efficiency solar submersible pump units (15kW–30kW rating) and Tier-1 monocrystalline solar PV panels with mounting structures for climate-resilient water schemes.',
    descriptionAm: 'አድራ ኢትዮጵያ ለአየር ንብረት ተከላካይ የውሃ ተቋማት 15kW–30kW የሶላር ፓምፖችና Tier-1 የPV ፓነሎችን ለማቅረብ ብቁ ተጫራቾችን ይጋብዛል።',
    descriptionOm: 'ADRA Itoophiyaan paampii bishaanii aduu 15kW–30kW fi paanaalii PV qulqullina olaanaa dhiyeessuuf caalbaasii waama.',
    descriptionTi: 'ኣድራ ኢትዮጵያ ንክሊማ ዝጻወሩ መስመራት ማይ 15kW–30kW ጸሓያዊ ፓምፕታትን ፓነላት PVን ንምቕራብ ብቑዓት ተወዳደርቲ ይዕድም።',
    requirements: [
      'Valid Ethiopian trade license renewed for the fiscal year 2018/2019 E.C.',
      'VAT registration certificate and Tax Clearance Certificate valid for public bidding',
      'Proof of minimum 3 years experience supplying comparable solar pumping systems',
      'Bid security guarantee bond of 100,000 ETB in CPO issued by recognized Ethiopian bank'
    ],
    requirementsAm: [
      'ለ2018/2019 ዓ.ም የታደሰ የንግድ ፈቃድ',
      'የVAT ምዝገባ እና የታክስ ክሊራንስ ሰርተፊኬት',
      'ቢያንስ የ3 ዓመት ተመሳሳይ የሶላር ፓምፕ አቅርቦት ልምድ',
      'በኢትዮጵያ ባንክ የተረጋገጠ 100,000 ብር CPO የጨረታ ማስከበሪያ'
    ],
    requirementsOm: [
      'Hayyama daldalaa bara 2018/2019 haarawoome',
      'Galmee VAT fi waraqaa qulqullina gibiraa',
      'Muuxannoo waggaa 3+ paampii aduu dhiyeessuu',
      'Wabii caalbaasii Birrii 100,000 CPO baankii irraa'
    ],
    requirementsTi: [
      'ን2018/2019 ዓ.ም ዝተሓደሰ ፍቓድ ንግዲ',
      'ምዝገባ VATን ወረቐት ንጽህና ግብርን',
      'ውሑድ ናይ 3 ዓመት ተመክሮ ቀረብ ጸሓያዊ ፓምፕታት',
      'ብባንኪ ኢትዮጵያ ዝተረጋገጸ 100,000 ብር CPO መትከሊ ጨረታ'
    ]
  },
  {
    id: 'tender-02',
    type: 'tender',
    title: 'Consultancy for Final Evaluation of SEAQE II Inclusive Education Project',
    titleAm: 'የSEAQE II አካታች ትምህርት ፕሮጀክት የማጠቃለያ ግምገማ አማካሪነት',
    titleOm: 'Tajaajila Gorsaa Madaallii Xumuraa Piroojektii SEAQE II',
    titleTi: 'ኣገልግሎት ምኽሪ መዛዘሚ ገምጋም መደብ ትምህርቲ SEAQE II',
    category: 'Consultancy Services',
    categoryAm: 'የማማከር አገልግሎት',
    categoryOm: 'Tajaajila Gorsaa',
    categoryTi: 'ኣገልግሎት ምኽሪ',
    location: 'Sidama & Oromia Regions (Field based)',
    deadline: 'November 28, 2026',
    referenceNumber: 'ADRA-ETH/MEAL/RFP-2026-11',
    description: 'Qualified research firms or individual evaluation consultants are sought to conduct a rigorous mixed-methods final evaluation assessing DAC criteria (Relevance, Coherence, Efficiency, Effectiveness, Impact, Sustainability) for the SEAQE II project.',
    descriptionAm: 'ለSEAQE II ፕሮጀክት በDAC መስፈርቶች የተመሰረተ የተሟላ የማጠቃለያ ግምገማ የሚያካሂዱ ብቁ የምርምር ድርጅቶች ወይም አማካሪዎች ይፈለጋሉ።',
    descriptionOm: 'Dhaabbileen qorannoo ykn gorsitoonni madaallii xumuraa SEAQE II ulaagaa DAC irratti hundaa’e hojjetan ni barbaadamu.',
    descriptionTi: 'ንመደብ SEAQE II ብመለክዒታት DAC ዝምራሕ ጽኑዕ መዛዘሚ ገምጋም ዘካይዱ ብቑዓት ትካላት ምርምር ወይ ኣማኸርቲ ይድለዩ።',
    requirements: [
      'Lead consultant holding PhD or Master’s degree in Education, Development Studies, or Statistics',
      'Demonstrated track record of evaluating bilateral education grant projects (NORAD/USAID)',
      'Fluent proficiency in Amharic and English; Afaan Oromo / Sidaamu Afoo language teams preferred',
      'Submission of technical methodology, workplan, and separate sealed financial proposal'
    ],
    requirementsAm: [
      'ዋና አማካሪ በትምህርት፣ በልማት ወይም ስታቲስቲክስ PhD ወይም ማስተርስ ያለው',
      'የNORAD/USAID ትምህርት ፕሮጀክቶችን የመገምገም የተረጋገጠ ልምድ',
      'አማርኛ እና እንግሊዝኛ አቀላጥፎ መናገር (ኦሮምኛ እና ሲዳምኛ ተመራጭ)',
      'የቴክኒክ እና የፋይናንስ ሰነዶችን በተለያየ የታሸገ ፖስታ ማቅረብ'
    ],
    requirementsOm: [
      'Gorsaan olaanaan barnoota ykn misoomaan PhD ykn Maastarsii kan qabu',
      'Muuxannoo madaallii piroojektoota barnootaa (NORAD/USAID)',
      'Afaan Oromoo, Sidaamu Afoo, Amaariffaa fi Ingiliizii danda’uu',
      'Karoora teeknikaa fi faayinaansii poostaa addaan dhiyeessuu'
    ],
    requirementsTi: [
      'ቀንዲ ኣማኻሪ ብትምህርቲ፣ ልምዓት ወይ ስታቲስቲክስ PhD/ማስተርስ ዘለዎ',
      'ፕሮጀክትታት ትምህርቲ NORAD/USAID ናይ ምግምጋም ዝተረጋገጸ ተመክሮ',
      'ጽቡቕ ክእለት ኣምሓርኛን እንግሊዝኛን (ኦሮምኛ/ሲዳምኛ ተመራጺ)',
      'ቴክኒካውን ፋይናንሳውን ሰነድ ብዝተፈላለየ ዝተዓሽገ ፖስታ ምቕራብ'
    ]
  },
  {
    id: 'career-01',
    type: 'career',
    title: 'Senior Field WASH Engineer (Solar Water Specialist)',
    titleAm: 'ከፍተኛ የመስክ WASH መሀንዲስ (የሶላር ውሃ ባለሙያ)',
    titleOm: 'Injiinara WASH Dirree Olaanaa (Ogeessa Aduu)',
    titleTi: 'ላዕለዋይ መሃንዲስ መስኪ WASH (ክኢላ ጸሓያዊ ማይ)',
    category: 'Full-time Employment',
    categoryAm: 'ቋሚ የስራ ቅጥር',
    categoryOm: 'Hojii Yeroo Guutuu',
    categoryTi: 'ቀዋሚ ቁጽሪ ስራሕ',
    location: 'Gode, Somali Region (With travel to Kelafo)',
    deadline: 'November 10, 2026',
    referenceNumber: 'ADRA-ETH/HR/VAC-2026-34',
    description: 'The Senior Field WASH Engineer will supervise electro-mechanical drilling, solar generator design, pipeline hydraulics, and community WASHCo formation across drought resilience interventions.',
    descriptionAm: 'ከፍተኛ የመስክ WASH መሀንዲሱ በድርቅ መቋቋም ስራዎች ውስጥ ጥልቅ ጉድጓድ ቁፋሮ፣ የሶላር ዲዛይን፣ የቧንቧ መስመር እና የWASHCo ኮሚቴዎችን ይቆጣጠራል።',
    descriptionOm: 'Injiinarri WASH dirree qotiinsa boollaa, dizaayinii aduu, sarara bishaanii fi hundeeffama koree WASHCo to’ata.',
    descriptionTi: 'ላዕለዋይ መሃንዲስ WASH ኣብ ስራሕቲ ጽንዓት ደርቂ ኩዕቲ ዒላታት፣ ዲዛይን ጸሓይ፣ መስመራት ቱቦን ምቛም WASHCoን ይቆጻጸር።',
    requirements: [
      'B.Sc. or M.Sc. in Water Resources Engineering, Hydraulic Engineering, or Civil Engineering',
      'Minimum 5 years progressive field engineering experience in NGO water borehole setups',
      'Proficiency in AutoCAD, WaterGEMS, EPANET, and solar sizing software (PVsyst/HelioScope)',
      'Knowledge of Somali language is a distinct advantage'
    ],
    requirementsAm: [
      'በውሃ ሀብት፣ ሃይድሮሊክ ወይም ሲቪል ምህንድስና B.Sc. ወይም M.Sc.',
      'በNGO የውሃ ጉድጓድ ግንባታ ቢያንስ 5 ዓመት የመስክ ልምድ',
      'የAutoCAD፣ WaterGEMS፣ EPANET እና PVsyst ሶፍትዌሮች ብቃት',
      'የሶማሊኛ ቋንቋ መናገር ተጨማሪ ጠቀሜታ አለው'
    ],
    requirementsOm: [
      'Digirii B.Sc. ykn M.Sc. Injiinariingii Bishaanii ykn Siiviiliitiin',
      'Muuxannoo dirree NGO ijaarsa boolla bishaanii waggaa 5+',
      'Dandeettii AutoCAD, WaterGEMS, EPANET fi PVsyst',
      'Afaan Somaalee danda’uun carraa gaarii qaba'
    ],
    requirementsTi: [
      'B.Sc. ወይ M.Sc. ብምህንድስና ሃፍቲ ማይ፣ ሃይድሮሊክ ወይ ሲቪል',
      'ኣብ NGO ስራሕቲ ዒላታት ማይ ውሑድ 5 ዓመት ተመክሮ መስኪ',
      'ብቕዓት AutoCAD፣ WaterGEMS፣ EPANET ከምኡውን PVsyst',
      'ምፍላጥ ቋንቋ ሶማሌ ፍሉይ ብልጫ ይህብ'
    ]
  },
  {
    id: 'career-02',
    type: 'career',
    title: 'Public Health Nutrition Specialist (CMAM / CTC Lead)',
    titleAm: 'የህብረተሰብ ጤና ስነ-ምግብ ባለሙያ (CMAM / CTC መሪ)',
    titleOm: 'Ogeessa Nyaata Fayyaa Hawaasaa (Hoogganaa CMAM/CTC)',
    titleTi: 'ክኢላ ኣመጋግባ ጥዕና ህዝቢ (መራሒ CMAM / CTC)',
    category: 'Full-time Employment',
    categoryAm: 'ቋሚ የስራ ቅጥር',
    categoryOm: 'Hojii Yeroo Guutuu',
    categoryTi: 'ቀዋሚ ቁጽሪ ስራሕ',
    location: 'Hawassa / Field Coordination',
    deadline: 'November 20, 2026',
    referenceNumber: 'ADRA-ETH/HR/VAC-2026-37',
    description: 'Lead clinical quality assurance, supply-chain monitoring of therapeutic foods, and training of woreda health extension workers for emergency and development nutrition initiatives.',
    descriptionAm: 'ለአስቸኳይ እና ለልማት የስነ-ምግብ ፕሮግራሞች የክሊኒካል ጥራት ቁጥጥርን፣ የህክምና ምግብ አቅርቦትን እና የወረዳ ጤና ኤክስቴንሽን ሰራተኞች ስልጠናን ይመራል።',
    descriptionOm: 'Qulqullina yaalaa, dhiyeessii nyaata yaalaa fi leenjii hojjettoota fayyaa aanaa sagantaalee nyaataa keessatti hoggana.',
    descriptionTi: 'ንህጹጽን ልምዓታውን መደባት ኣመጋግባ ጽሬት ክሊኒካል፣ ቀረብ ሕክምናዊ መግብን ስልጠና ሰራሕተኛታት ጤና ወረዳን ይመርሕ።',
    requirements: [
      'Master’s degree in Human Nutrition, Public Health, or Nursing',
      'Minimum 4 years hands-on experience managing CMAM/CTC projects in Ethiopia',
      'Familiarity with SMART survey methodology, EN-MIN guidelines, and DHIS2 data entry',
      'Strong commitment to humanitarian standards and child safeguarding principles'
    ],
    requirementsAm: [
      'በስነ-ምግብ፣ ህብረተሰብ ጤና ወይም ነርሲንግ ማስተርስ ዲግሪ',
      'በኢትዮጵያ CMAM/CTC ፕሮጀክቶችን በመምራት 4+ ዓመት ልምድ',
      'የSMART ዳሰሳ፣ EN-MIN መመሪያዎች እና DHIS2 እውቀት',
      'ለሰብዓዊ መስፈርቶች እና ለህጻናት ጥበቃ መርሆዎች ጠንካራ ቁርጠኝነት'
    ],
    requirementsOm: [
      'Digirii Maastarsii Nyaataa, Fayyaa Hawaasaa ykn Narsiingiin',
      'Muuxannoo waggaa 4+ hojii CMAM/CTC Itoophiyaatti',
      'Beekumsa qorannoo SMART, qajeelfama EN-MIN fi DHIS2',
      'Kutannoo eegumsa daa’immanii fi sadarkaa namoomaa'
    ],
    requirementsTi: [
      'ማስተርስ ዲግሪ ብኣመጋግባ ደቂ-ሰብ፣ ጥዕና ህዝቢ ወይ ነርሲንግ',
      'ኣብ ኢትዮጵያ CMAM/CTC ፕሮጀክትታት ምምራሕ ውሑድ 4 ዓመት ተመክሮ',
      'ኣፍልጦ SMART ዳህሳስ፣ መምርሒ EN-MIN ከምኡውን DHIS2',
      'ጽኑዕ ተወፋይነት ንሰብኣዊ መለክዕታትን ድሕነት ህጻናትን'
    ]
  },
  {
    id: 'tender-03',
    type: 'tender',
    title: 'Supply and Delivery of Certified Drought-Tolerant Sorghum, Teff & Pulse Seeds',
    titleAm: 'ድርቅን የሚቋቋሙ የማሽላ፣ ጤፍና ጥራጥሬ ምርጥ ዘሮች አቅርቦት',
    titleOm: 'Dhiyeessii Sanyii Mishingaa, Xaafii fi Shumburaa Hongee Dandamatu',
    titleTi: 'ቀረብ ደርቂ ዝጻወሩ ምሩጻት ዘርኢ መሸላ፣ ጣፍን ጥራጥረን',
    category: 'Procurement / Agricultural Supplies',
    categoryAm: 'ግዥ / የግብርና ግብዓቶች',
    categoryOm: 'Bittaa / Dhiyeessii Qonnaa',
    categoryTi: 'ዕድጊ / ኣቑሑ ሕርሻ',
    location: 'Oromia, Amhara & Somali Regions',
    deadline: 'December 05, 2026',
    referenceNumber: 'ADRA-ETH/AGRI/TND-2026-14',
    description: 'ADRA Ethiopia invites qualified agricultural seed suppliers to submit sealed bids for the supply of certified, rust-resistant wheat, drought-tolerant sorghum, and chickpea seed stock meeting Ethiopian Agricultural Authority standards.',
    descriptionAm: 'አድራ ኢትዮጵያ የኢትዮጵያ ግብርና ባለስልጣን ደረጃን ያሟሉ ዋግ መቋቋም የሚችሉ ስንዴ፣ ማሽላ እና ሽምብራ ምርጥ ዘሮችን ለማቅረብ ብቁ አቅራቢዎችን ይጋብዛል።',
    descriptionOm: 'ADRA Itoophiyaan dhiyeessitoonni sanyii qamadii, mishingaa fi shumburaa mirkanaa’e dhiyeessan caalbaasiitti akka hirmaatan waama.',
    descriptionTi: 'ኣድራ ኢትዮጵያ ብመለክዒ በዓል-መዚ ሕርሻ ኢትዮጵያ ዝተረጋገጹ ዘርኢ ስርናይ፣ መሸላን ሽምብራን ንምቕራብ ብቑዓት ኣቕረብቲ ይዕድም።',
    requirements: [
      'Valid Seed Production/Trading License from Ethiopian Ministry of Agriculture',
      'Laboratory germination test certificates (>85% germination rate guarantee)',
      'Proof of warehouse aggregation capacity and phytosanitary certificates',
      'Bid bond guarantee of 80,000 ETB in certified CPO'
    ],
    requirementsAm: [
      'ከግብርና ሚኒስቴር የተሰጠ የዘር ማባዛት/ንግድ ፈቃድ',
      'ከ85% በላይ የመብቀል አቅም የሚያሳይ የላቦራቶሪ ሰርተፊኬት',
      'የመጋዘን አቅም እና የፋይቶሳኒተሪ ምስክር ወረቀት',
      'በተረጋገጠ CPO የ80,000 ብር የጨረታ ማስከበሪያ ዋስትና'
    ],
    requirementsOm: [
      'Hayyama oomisha/daldala sanyii Ministeera Qonnaa irraa',
      'Waraqaa laaboraatoorii dandeettii biqiluu >85% mirkaneessu',
      'Mirkaneessa kuusaa fi qulqullina faytosaanitaarii',
      'Wabii caalbaasii Birrii 80,000 CPO mirkanaa’e'
    ],
    requirementsTi: [
      'ካብ ሚኒስትሪ ሕርሻ ዝተዋህበ ሕጋዊ ፍቓድ ፍርያት/ንግዲ ዘርኢ',
      'ልዕሊ >85% ብቕዓት ምብቋል ዘረጋግጽ ምስክር ወረቐት ላቦራቶሪ',
      'መረጋገጺ ዓቕሚ መኽዘንን ፋይቶሳኒተሪን',
      'ብዝተረጋገጸ CPO 80,000 ብር መትከሊ ጨረታ'
    ]
  },
  {
    id: 'tender-04',
    type: 'tender',
    title: 'Hydrogeological Geophysical Surveying, Drilling & Casing of 6 Deep Aquifer Boreholes',
    titleAm: 'የ6 ጥልቅ የውሃ ጉድጓዶች ጂኦፊዚካል ጥናት፣ ቁፋሮና ግንባታ',
    titleOm: 'Qorannoo Ji’oofiizikaalaa fi Qotiinsa Boolla Bishaanii Gadi-fagoo 6',
    titleTi: 'መጽናዕቲ ጂኦፊዚካል፣ ኩዕትን ምትካልን 6 ዓሚቝ ዒላታት ማይ',
    category: 'Works & Infrastructure',
    categoryAm: 'ግንባታ እና መሰረተ ልማት',
    categoryOm: 'Hojiiwwan fi Bu’uuraalee',
    categoryTi: 'ስራሕትን መሰረተ-ልምዓትን',
    location: 'Afar (Berhale) & Somali (Dollo Ado)',
    deadline: 'December 12, 2026',
    referenceNumber: 'ADRA-ETH/WASH/DRL-2026-19',
    description: 'Bids invited from Category 1 drilling contractors for the drilling, lithological logging, geophysical survey, slotted casing installation, gravel packing, and 72-hour step-drawdown pumping tests for deep boreholes up to 250m depth.',
    descriptionAm: 'እስከ 250 ሜትር ጥልቀት ያላቸው 6 ጉድጓዶችን ለመቆፈር፣ ኬሲንግ ለመግጠም እና የ72-ሰዓት የፓምፕ ሙከራ ለማድረግ ከደረጃ 1 ቁፋሮ ተቋራጮች ጨረታ ይጋበዛሉ።',
    descriptionOm: 'Boollota hanga m 250 gadi fagoo 6 qotuu, keesiingii galchuu fi qorannoo paampii sa’aatii 72 gaggeessuuf kontiraaktaroonni Sadarkaa 1 ni waamamu.',
    descriptionTi: 'ክሳብ 250ሜ ዕምቆት ዘለዎም 6 ዒላታት ንምኹዓት፣ ኬሲንግ ምግጣምን ፈተና 72-ሰዓት ንምክያድን ብቑዓት ደረጃ 1 ኮንትራክተራት ይዕደሙ።',
    requirements: [
      'Ministry of Water & Energy Category 1 Water Well Drilling License',
      'Own minimum 2 operational rotary/DTH drilling rigs with mud pumps in Ethiopia',
      'Proven past performance record of drilling at least 10 productive deep wells in Somali/Afar',
      'Bid security of 150,000 ETB in CPO or unconditional bank guarantee'
    ],
    requirementsAm: [
      'ከውሃና ኢነርጂ ሚኒስቴር የተሰጠ የደረጃ 1 የውሃ ጉድጓድ ቁፋሮ ፈቃድ',
      'በኢትዮጵያ ውስጥ ቢያንስ 2 የቁፋሮ ማሽኖች (Rotary/DTH) ባለቤትነት',
      'በሶማሌ ወይም አፋር ቢያንስ 10 ጥልቅ የውሃ ጉድጓዶችን የቆፈረ ልምድ',
      '150,000 ብር CPO ወይም ቅድመ-ሁኔታ የሌለው የባንክ ዋስትና'
    ],
    requirementsOm: [
      'Hayyama Qotiinsa Boollaa Sadarkaa 1 Ministeera Bishaaniifi Anniisaa',
      'Maashinoota qotiinsaa (Rotary/DTH) yoo xiqqaate 2 Itoophiyaatti qabaachuu',
      'Muuxannoo boolla gadi fagoo 10+ Somaalee/Affaaritti qotuu',
      'Wabii caalbaasii Birrii 150,000 CPO ykn waadaa baankii'
    ],
    requirementsTi: [
      'ካብ ሚኒስትሪ ማይን ጸዓትን ዝተዋህበ ደረጃ 1 ፍቓድ ኩዕቲ ዒላ ማይ',
      'ኣብ ኢትዮጵያ ውሑድ 2 ዝሰርሓ ማሽናት ኩዕቲ (Rotary/DTH) ወናንነት',
      'ኣብ ሶማሌ ወይ ዓፋር ውሑድ 10 ውጽኢታዊ ዓሚቝ ዒላታት ምኹዓት ተመክሮ',
      '150,000 ብር CPO ወይ ብዘይ ቅድመ-ኩነት ዝወሃብ ውሕስነት ባንኪ'
    ]
  },
  {
    id: 'career-03',
    type: 'career',
    title: 'Director of Monitoring, Evaluation, Accountability & Learning (MEAL)',
    titleAm: 'የክትትል፣ ግምገማ፣ ተጠያቂነት እና ትምህርት (MEAL) ዳይሬክተር',
    titleOm: 'Daayirektara Hordoffii, Madaallii fi Itti-gaafatamummaa (MEAL)',
    titleTi: 'ዳይሬክተር ክትትል፣ ገምጋም፣ ተሓታትነትን ትምህርትን (MEAL)',
    category: 'Full-time Employment',
    categoryAm: 'ቋሚ የስራ ቅጥር',
    categoryOm: 'Hojii Yeroo Guutuu',
    categoryTi: 'ቀዋሚ ቁጽሪ ስራሕ',
    location: 'Addis Ababa (Country Office with 30% Field Travel)',
    deadline: 'December 01, 2026',
    referenceNumber: 'ADRA-ETH/HR/VAC-2026-41',
    description: 'Provide executive leadership over national MEAL architecture, automated GIS dashboarding, donor evaluation reporting (USAID, NORAD, ECHO), and community feedback mechanisms.',
    descriptionAm: 'ብሔራዊ የMEAL ስርዓትን፣ የGIS ዳሽቦርዶችን፣ ለለጋሽ አካላት (USAID, NORAD, ECHO) የሚቀርቡ ሪፖርቶችን እና የማህበረሰብ ግብረ-መልስ ስርዓቶችን በከፍተኛ አመራርነት ይመራል።',
    descriptionOm: 'Caasaa MEAL biyyaalessaa, daashboordii GIS, gabaasa deeggartootaa (USAID, NORAD, ECHO) fi sirna yaada hawaasaa hoggana.',
    descriptionTi: 'ሃገራዊ መዋቕር MEAL፣ ዳሽቦርድ GIS፣ ጸብጻባት ለገስቲ (USAID, NORAD, ECHO) ከምኡውን ስርዓት ግብረ-መልሲ ሕብረተሰብ ብላዕለዋይነት ይመርሕ።',
    requirements: [
      'Master’s degree or PhD in Economics, Development Statistics, or Data Sciences',
      'Minimum 8 years senior MEAL leadership experience in large multi-sectoral NGOs',
      'Advanced expertise in PowerBI, KoboToolbox, GIS mapping, and econometric impact evaluations',
      'Exemplary analytical English writing skills and experience liaising with international bilateral donors'
    ],
    requirementsAm: [
      'በኢኮኖሚክስ፣ በልማት ስታቲስቲክስ ወይም ዳታ ሳይንስ ማስተርስ ወይም PhD',
      'በትላልቅ NGOዎች ቢያንስ 8 ዓመት የMEAL አመራር ልምድ',
      'በPowerBI፣ KoboToolbox፣ GIS ካርታ እና የኢኮኖሜትሪክስ ግምገማ ከፍተኛ ብቃት',
      'ከዓለም አቀፍ ለጋሾች ጋር የመስራት እና የላቀ የእንግሊዝኛ ጽሁፍ ብቃት'
    ],
    requirementsOm: [
      'Maastarsii ykn PhD Ikoonoomiksii, Istaatistiksii ykn Saayinsii Daataatiin',
      'Muuxannoo hoggansa MEAL waggaa 8+ NGO gurguddoo keessatti',
      'Ogummaa PowerBI, KoboToolbox, kaartaa GIS fi madaallii dhiibbaa',
      'Dandeettii barreeffamaa Ingiliizii olaanaa fi walitti dhufeenya deeggartootaa'
    ],
    requirementsTi: [
      'ማስተርስ ወይ PhD ብኢኮኖሚክስ፣ ስታቲስቲክስ ልምዓት ወይ ሳይንስ ዳታ',
      'ኣብ ዓበይቲ NGOs ውሑድ 8 ዓመት ተመክሮ መሪሕነት MEAL',
      'ልዑል ክእለት PowerBI፣ KoboToolbox፣ ካርታ GISን ኢኮኖሜትሪክ ገምጋምን',
      'ብሉጽ ክእለት ጽሑፍ እንግሊዝኛን ተመክሮ ርክብ ምስ ዓለም-ለኸ ለገስትን'
    ]
  },
  {
    id: 'career-04',
    type: 'career',
    title: 'Emergency Multi-Purpose Cash Assistance (MPCA) Program Coordinator',
    titleAm: 'የአስቸኳይ ሁለገብ የጥሬ ገንዘብ ድጋፍ (MPCA) ፕሮግራም አስተባባሪ',
    titleOm: 'Qindeessaa Sagantaa Deeggarsa Maallaqaa Balaa (MPCA)',
    titleTi: 'ኣወሃሃዲ መደብ ህጹጽ ብዙሕ-መዓላ ሓገዝ ገንዘብ (MPCA)',
    category: 'Full-time Employment',
    categoryAm: 'ቋሚ የስራ ቅጥር',
    categoryOm: 'Hojii Yeroo Guutuu',
    categoryTi: 'ቀዋሚ ቁጽሪ ስራሕ',
    location: 'Dire Dawa / Eastern Field Operations',
    deadline: 'December 08, 2026',
    referenceNumber: 'ADRA-ETH/HR/VAC-2026-43',
    description: 'Coordinate rapid digital cash transfers (TeleBirr / CBE Birr), merchant price monitoring, post-distribution monitoring (PDM), and inter-agency cash working group coordination.',
    descriptionAm: 'ፈጣን የዲጂታል ገንዘብ ዝውውሮችን (TeleBirr / CBE Birr)፣ የገበያ ዋጋ ክትትልን፣ ከስርጭት በኋላ ግምገማን (PDM) እና የጋራ ቡድኖችን ያስተባብራል።',
    descriptionOm: 'Dabarsa maallaqaa dijitaalaa (TeleBirr / CBE Birr), hordoffii gatii gabaa, madaallii PDM fi qindoomina garee maallaqaa gaggeessa.',
    descriptionTi: 'ቅልጡፍ ዲጂታል ስግግር ገንዘብ (TeleBirr / CBE Birr)፣ ክትትል ዋጋ ዕዳጋ፣ ገምጋም PDM ከምኡውን ምውህሃድ ጉጅለታት የሳልጥ።',
    requirements: [
      'B.Sc. or Master’s degree in Humanitarian Logistics, Economics, or Disaster Management',
      'Minimum 4 years implementing unconditional/conditional cash voucher assistance programs in Ethiopia',
      'Familiarity with CALP Network standards and mobile money banking integration protocols',
      'Proficiency in Afaan Oromo or Somali language is an advantage'
    ],
    requirementsAm: [
      'በሰብዓዊ ሎጂስቲክስ፣ ኢኮኖሚክስ ወይም አደጋ አስተዳደር B.Sc. ወይም ማስተርስ',
      'በኢትዮጵያ የጥሬ ገንዘብ እርዳታ ፕሮግራሞችን በመተግበር 4+ ዓመት ልምድ',
      'የCALP Network መስፈርቶች እና የሞባይል ባንኪንግ ፕሮቶኮሎች እውቀት',
      'የአፋን ኦሮሞ ወይም የሶማሊኛ ቋንቋ ብቃት ተመራጭ ነው'
    ],
    requirementsOm: [
      'Digirii B.Sc. ykn Maastarsii Loojistiksii, Ikoonoomiksii ykn Hoggansa Balaatiin',
      'Muuxannoo sagantaa gargaarsa maallaqaa Itoophiyaatti waggaa 4+',
      'Beekumsa sadarkaa CALP Network fi baankii moobaayilaa',
      'Dandeettiin Afaan Oromoo ykn Somaalee dabalata gaariidha'
    ],
    requirementsTi: [
      'B.Sc. ወይ ማስተርስ ብሰብኣዊ ሎጂስቲክስ፣ ኢኮኖሚክስ ወይ ምሕደራ ሓደጋ',
      'ኣብ ኢትዮጵያ መደባት ሓገዝ ገንዘብ ምትግባር ውሑድ 4 ዓመት ተመክሮ',
      'ኣፍልጦ መለክዕታት CALP Network ከምኡውን ሞባይል ባንኪንግ',
      'ክእለት ኦሮምኛ ወይ ሶማሌ ብልጫ ኣለዎ'
    ]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub-annual-2025',
    title: 'ADRA Ethiopia Annual Impact & Stewardship Report 2024/2025',
    titleAm: 'የአድራ ኢትዮጵያ 2024/2025 ዓመታዊ የስራ እና የታማኝነት ሪፖርት',
    titleOm: 'Gabaasa Dhiibbaa fi Hoggansaa Waggaa ADRA Itoophiyaa 2024/2025',
    titleTi: 'ዓመታዊ ጸብጻብ ጽልዋን ሓላፍነትን ኣድራ ኢትዮጵያ 2024/2025',
    year: '2025',
    fileSize: '4.8 MB PDF',
    category: 'Annual Report',
    categoryAm: 'ዓመታዊ ሪፖርት',
    categoryOm: 'Gabaasa Waggaa',
    categoryTi: 'ዓመታዊ ጸብጻብ',
    summary: 'Comprehensive overview of country-wide operations, financial accountability, sector achievements, and audited expenditure across 8 regional hubs.',
    summaryAm: 'በ8 ክልላዊ ማዕከላት የተከናወኑ ስራዎችን፣ የፋይናንስ ተጠያቂነትን፣ የዘርፍ ስኬቶችን እና ኦዲት የተደረጉ ወጪዎችን የሚያሳይ አጠቃላይ ሪፖርት።',
    summaryOm: 'Ibsa waliigalaa hojiiwwan biyyaalessaa, itti gaafatamummaa maallaqaa, milkaa’ina dameewwanii fi baasii odiitii godhame.',
    summaryTi: 'ኣብ 8 ክልላዊ ማእከላት ዝተኻየዱ ስርሒታት፣ ፋይናንሳዊ ተሓታትነትን ኦዲት ዝተገብሮም ወጻኢታትን ዘርኢ ሰፊሕ ጸብጻብ።'
  },
  {
    id: 'pub-wash-brief',
    title: 'Scaling Solar Pumping in Deep Aquifers: Technical Insights from the Somali Basin',
    titleAm: 'በጥልቅ የውሃ ጉድጓዶች የሶላር ፓምፕ አጠቃቀም፡ ከሶማሌ ተፋሰስ የተገኘ ልምድ',
    titleOm: 'Paampii Aduu Boolla Gadi-fagootti Babal’isuu: Muuxannoo Somaalee',
    titleTi: 'ኣብ ዓሚቝ ዒላታት ጸሓያዊ ፓምፕ ምስፋሕ፡ ቴክኒካዊ ተመክሮ ሶማሌ',
    year: '2025',
    fileSize: '2.1 MB PDF',
    category: 'Technical Brief',
    categoryAm: 'ቴክኒካዊ መመሪያ',
    categoryOm: 'Gabaaba Teeknikaa',
    categoryTi: 'ቴክኒካዊ መግለጺ',
    summary: 'A practitioner manual on sizing submersible solar systems for deep arid boreholes exceeding 200 meters depth in high-salinity lowlands.',
    summaryAm: 'በቆላማ አካባቢዎች ከ200 ሜትር በላይ ጥልቀት ላላቸው ጉድጓዶች የሶላር ፓምፕ ዲዛይን የሚያብራራ የባለሙያዎች መመሪያ።',
    summaryOm: 'Qajeelfama ogeessotaaf qophaa’e kan dizaayinii paampii aduu boollota meetira 200 ol gadi fagaatan irratti xiyyeeffatu.',
    summaryTi: 'ኣብ ቆላታት ልዕሊ 200 ሜትሮ ዕምቆት ንዘለዎም ዒላታት ዲዛይን ጸሓያዊ ፓምፕ ዝገልጽ መምርሒ ክኢላታት።'
  },
  {
    id: 'pub-seaqe-brief',
    title: 'Retaining Adolescent Girls in Pastoral Primary Schools: SEAQE Best Practices',
    titleAm: 'በአርብቶ አደር ትምህርት ቤቶች ልጃገረዶችን ማቆየት፡ የSEAQE ምርጥ ተሞክሮዎች',
    titleOm: 'Shamarran Manneen Barnootaa Horsiisee Bulaatti Tursiisuu: Muuxannoo SEAQE',
    titleTi: 'ኣብ ኣብያተ-ትምህርቲ ኣዋልድ ምዕቃብ፡ ብሉጻት ተመክሮታት SEAQE',
    year: '2024',
    fileSize: '1.9 MB PDF',
    category: 'Policy Brief',
    categoryAm: 'የፖሊሲ ማብራሪያ',
    categoryOm: 'Gabaaba Imaammataa',
    categoryTi: 'መግለጺ ፖሊሲ',
    summary: 'Evidence-based review examining the impact of gender-segregated sanitation facilities and community advocacy on female primary completion rates.',
    summaryAm: 'ለሴቶች የተለዩ የንጽህና መጸዳጃ ቤቶች እና የማህበረሰብ ቅስቀሳ በሴቶች ትምህርት ማጠናቀቅ ላይ ያላቸውን ተጽእኖ የሚተነትን ጥናት።',
    summaryOm: 'Qorannoo dhiibbaa manneen fincaanii shamarranii fi hubannoo hawaasaa xumura barnoota shamarranii irratti qabu.',
    summaryTi: 'ንኣዋልድ ዝተፈልዩ ሽቓቓትን ንቕሓት ሕብረተሰብን ኣብ ምዝዛም ትምህርቲ ኣዋልድ ዘለዎም ጽልዋ ዝድህስስ መጽናዕቲ።'
  },
  {
    id: 'pub-strategic-plan',
    title: 'ADRA Ethiopia Strategic Direction Framework 2023 – 2028',
    titleAm: 'የአድራ ኢትዮጵያ ስትራቴጂካዊ አቅጣጫ ማዕቀፍ 2023 – 2028',
    titleOm: 'Caasaa Kallattii Tarsiimawaa ADRA Itoophiyaa 2023 – 2028',
    titleTi: 'ስትራተጂካዊ ማዕቀፍ ኣንፈት ኣድራ ኢትዮጵያ 2023 – 2028',
    year: '2023',
    fileSize: '3.4 MB PDF',
    category: 'Strategic Framework',
    categoryAm: 'ስትራቴጂካዊ ማዕቀፍ',
    categoryOm: 'Caasaa Tarsiimoo',
    categoryTi: 'ስትራተጂካዊ ማዕቀፍ',
    summary: 'Five-year strategic roadmap aligning ADRA Ethiopia interventions with national development goals and UN Sustainable Development Goals.',
    summaryAm: 'የአድራ ኢትዮጵያ ስራዎችን ከሀገራዊ የልማት ግቦች እና ከUN ዘላቂ የልማት ግቦች ጋር የሚያስተሳስር የ5 ዓመት ስትራቴጂ።',
    summaryOm: 'Karoora tarsiimawaa waggaa shanii kan hojiiwwan ADRA galma misoomaa biyyaalessaa fi UN waliin walsimsiisu.',
    summaryTi: 'ንስራሕቲ ኣድራ ኢትዮጵያ ምስ ሃገራዊ ሸቶታት ልምዓትን ዘላቒ ሸቶታት UNን ዘወሃህድ ናይ 5 ዓመት ስትራተጂ።'
  },
  {
    id: 'pub-audit-2025',
    title: 'Audited Financial Statements & Independent Auditor’s Report 2024/2025',
    titleAm: 'ኦዲት የተደረገ የፋይናንስ መግለጫ እና የገለልተኛ ኦዲተር ሪፖርት 2024/2025',
    titleOm: 'Ibsa Maallaqaa Odiitii fi Gabaasa Odiitara Walabaa 2024/2025',
    titleTi: 'ኦዲት ዝተገብረ ፋይናንሳዊ መግለጽን ጸብጻብ ናጻ ኦዲተርን 2024/2025',
    year: '2025',
    fileSize: '3.1 MB PDF',
    category: 'Audit & Compliance',
    categoryAm: 'ኦዲት እና ተገዢነት',
    categoryOm: 'Odiitii fi Seera-qabeessummaa',
    categoryTi: 'ኦዲትን ተገዛእነትን',
    summary: 'Certified clean audit opinion issued by authorized chartered audit firm in compliance with Civil Society Organizations Proclamation #1113/2019.',
    summaryAm: 'በሲቪል ማህበረሰብ ድርጅቶች አዋጅ #1113/2019 መሰረት በተመሰከረለት ገለልተኛ ኦዲተር የተሰጠ ንጹህ የኦዲት ውጤት።',
    summaryOm: 'Yaada odiitii qulqulluu labsii #1113/2019 waliin walsimuun dhaabbata odiitii beekamaa irraa kenname.',
    summaryTi: 'ብመሰረት ኣዋጅ #1113/2019 ብዝተፈቕደ ናጻ ትካል ኦዲት ዝተዋህበ ጽሩይ ውጽኢት ኦዲት።'
  },
  {
    id: 'pub-gender-manual',
    title: 'Field Practitioner Manual: Gender-Responsive School WASH & Dignity Kits',
    titleAm: 'የመስክ ባለሙያ መመሪያ፡ ፆታን ያገናዘበ የትምህርት ቤት WASH እና የንጽህና ፓክ',
    titleOm: 'Qajeelfama Ogeeyyii: WASH Mana Barumsaa fi Meeshaa Qulqullinaa',
    titleTi: 'መምርሒ ሰራሕተኛታት መስኪ፡ ንስርዓተ-ጾታ ዝሕሉ WASHን ናውቲ ክብርን',
    year: '2025',
    fileSize: '2.6 MB PDF',
    category: 'Training Manual',
    categoryAm: 'የስልጠና መመሪያ',
    categoryOm: 'Qajeelfama Leenjii',
    categoryTi: 'መምርሒ ስልጠና',
    summary: 'Detailed architectural guidelines and community mobilization protocols for creating safe, private school washroom facilities for rural adolescent girls.',
    summaryAm: 'ለገጠር ሴት ተማሪዎች ደህንነታቸው የተጠበቀ እና ምቹ የመጸዳጃ ክፍሎችን ለመገንባት የሚያገለግል የዲዛይን እና ማህበረሰብ ቅስቀሳ መመሪያ።',
    summaryOm: 'Qajeelfama ijaarsaa fi hawaasa kakaasuu manneen fincaanii nageenya qaban shamarran baadiyyaaf ijaaruuf oolu.',
    summaryTi: 'ንኣዋልድ ገጠር ውሑሳትን ምቹዋትን መሕጸቢ ክፍልታት ንምህናጽ ዘገልግል ዝርዝር መምርሒ ዲዛይንን ምልዕዓልን።'
  },
  {
    id: 'pub-ai-humanitarian',
    title: 'Humanitarian Artificial Intelligence in Frontline Low-Bandwidth Environments',
    titleAm: 'ዝቅተኛ ኢንተርኔት ባለባቸው አካባቢዎች ሰብዓዊ አርቴፊሻል ኢንተለጀንስ',
    titleOm: 'AI Namoomaa Naannoo Intarneetii Dadhabaa Qabu Keessatti',
    titleTi: 'ሰብኣዊ ኣርቲፊሻል ኢንተሊጀንስ ኣብ ትሑት ኢንተርኔት ዘለዎ ከባቢታት',
    year: '2026',
    fileSize: '1.8 MB PDF',
    category: 'Research Whitepaper',
    categoryAm: 'የጥናት ወረቀት',
    categoryOm: 'Waraqaa Qorannoo',
    categoryTi: 'ወረቐት ምርምር',
    summary: 'Research paper documenting ADRA Ethiopia’s responsible AI governance principles, multilingual Amharic model translation, and human-in-the-loop validation.',
    summaryAm: 'የአድራ ኢትዮጵያን የAI አስተዳደር መርሆዎች፣ የአማርኛ ቋንቋ ትርጉም እና በሰው ቁጥጥር የሚደገፍ አሰራርን የሚመረምር ጥናት።',
    summaryOm: 'Qorannoo seera bulchiinsa AI ADRA, hiikkaa afaanota hedduu fi to’annoo namaa qoratu.',
    summaryTi: 'መትከላት ምሕደራ AI ኣድራ ኢትዮጵያ፣ ብዙሕ-ቋንቋታት ትርጉምን ሰብኣዊ ቁጽጽርን ዘጽንዕ ወረቐት ምርምር።'
  },
  {
    id: 'pub-emergency-mpca',
    title: 'Evaluating the Dignity & Economic Multiplier Effects of Mobile Cash Transfers',
    titleAm: 'የሞባይል ጥሬ ገንዘብ ዝውውር ሰብዓዊ ክብር እና የኢኮኖሚ መነቃቃት ግምገማ',
    titleOm: 'Madaallii Kabajaa fi Bu’aa Dinagdee Dabarsa Maallaqaa Moobaayilaa',
    titleTi: 'ገምጋም ክብርን ኢኮኖሚያዊ ጽልዋን ዲጂታል ሓገዝ ገንዘብ ሞባይል',
    year: '2026',
    fileSize: '2.4 MB PDF',
    category: 'Impact Evaluation',
    categoryAm: 'የውጤት ግምገማ',
    categoryOm: 'Madaallii Dhiibbaa',
    categoryTi: 'ገምጋም ጽልዋ',
    summary: 'Multi-region empirical study evaluating household autonomy, dietary diversity, and local market stimulation resulting from digital TeleBirr/CBE transfers.',
    summaryAm: 'በTeleBirr እና CBE Birr የሚላክ ገንዘብ በቤተሰብ ነጻነት፣ በምግብ ስብጥር እና በአካባቢው ገበያ ላይ ያለውን በጎ ተጽእኖ የሚያሳይ ጥናት።',
    summaryOm: 'Qorannoo bu’aa TeleBirr fi CBE Birr walabummaa maatii, nyaataa fi guddina gabaa naannoorratti qabu.',
    summaryTi: 'ብTeleBirrን CBE Birrን ዝስደድ ገንዘብ ኣብ ናጽነት ስድራቤት፣ ዓይነት መግብን ዕዳጋን ዘለዎ ጽልዋ ዘርኢ መጽናዕቲ።'
  }
];

// Going market exchange rate: 1 USD ≈ 130.00 ETB (Official free-float market rate)
export const MARKET_EXCHANGE_RATE_USD_TO_ETB = 130;

export const IMPACT_CALCULATOR_OPTIONS = [
  {
    amountEtb: 3250,
    amountUsd: 25,
    shortTag: {
      en: 'Clean Water',
      am: 'ንጹህ ውሃ',
      om: 'Bishaan Qul.',
      ti: 'ጽሩይ ማይ'
    },
    title: 'Clean Water Lifeline',
    titleAm: 'ንጹህ የመጠጥ ውሃ',
    titleOm: 'Bishaan Qulq. Maatii',
    titleTi: 'ህይወት ዘድሕን ጽሩይ ማይ',
    outcome: 'Supplies a family of 6 with 6 months of purified, solar-pumped clean drinking water, shielding children from waterborne diseases.',
    outcomeAm: 'ለ6 የቤተሰብ አባላት ለ6 ወራት በሶላር የሚገፋ ንጹህ የመጠጥ ውሃ በማቅረብ ህጻናትን ከውሃ ወለድ በሽታዎች ይጠብቃል።',
    outcomeOm: 'Maatii nama 6f ji’a 6f bishaan dhugaatii qulqulluu paampii aduutiin dhiyeessee daa’imman dhukkuba irraa ittisa.',
    outcomeTi: 'ን6 ኣባላት ስድራቤት ን6 ኣዋርሕ ብጸሓያዊ ፓምፕ ዝቐርብ ጽሩይ ማይ ብምሃብ ህጻናት ካብ ሕማማት የዕቁብ።'
  },
  {
    amountEtb: 6500,
    amountUsd: 50,
    shortTag: {
      en: 'Girls Education',
      am: 'የሴቶች ትምህርት',
      om: 'Barnoota Sh.',
      ti: 'ትምህርቲ ኣዋልድ'
    },
    title: 'Girls Education Kit & Uniform',
    titleAm: 'የሴት ተማሪዎች ዩኒፎርምና ቁሳቁስ',
    titleOm: 'Meeshaa Barnootaa Shamarranii',
    titleTi: 'ናውቲ ትምህርትን ዩኒፎርምን ኣዋልድ',
    outcome: 'Equips 2 adolescent schoolgirls with learning materials, notebooks, uniforms, and menstrual hygiene kits for a full school year.',
    outcomeAm: 'ለ2 ታዳጊ ሴት ተማሪዎች ለሙሉ የትምህርት ዓመት የሚያገለግል የመማሪያ ቁሳቁስ፣ ደብተር፣ ዩኒፎርምና የንጽህና ፓክ ያቀርባል።',
    outcomeOm: 'Shamarran barattoota 2f meeshaa barnootaa, dabtara, yunifoormii fi paakkii qulqullinaa waggaa guutuu guuta.',
    outcomeTi: 'ን2 መንእሰያት ተምሃሮ ኣዋልድ ንምሉእ ዓመት ዝኸውን ናውቲ ትምህርቲ፣ ደፍተራት፣ ዩኒፎርምን ናውቲ ጽሬትን ይህብ።'
  },
  {
    amountEtb: 13000,
    amountUsd: 100,
    shortTag: {
      en: 'Malnutrition Care',
      am: 'የምግብ ህክምና',
      om: 'Yaala Nyaataa',
      ti: 'ሕክምና መግቢ'
    },
    title: 'Malnutrition Therapeutic Care',
    titleAm: 'የህጻናት ስነ-ምግብ ህክምና',
    titleOm: 'Yaala Nyaataa Daa’immanii',
    titleTi: 'ሕክምና ዋሕዲ ኣመጋግባ',
    outcome: 'Funds a full 8-week course of Ready-to-Use Therapeutic Food (RUTF) and clinic monitoring to cure a severely malnourished infant.',
    outcomeAm: 'በጠና የተጎዳን ጨቅላ ህጻን ለማዳን የ8 ሳምንት ሙሉ የህክምና ምግብ (RUTF) እና የክሊኒክ ክትትል ወጪን ይሸፍናል።',
    outcomeOm: 'Daa’ima hanqina nyaataa cimaadhaan miidhame fayyisuuf nyaata yaalaa (RUTF) fi hordoffii torban 8 guutuu dhiyeessa.',
    outcomeTi: 'ብኸቢድ ዋሕዲ መግቢ ንዝተጎድአ ህጻን ን8 ሰሙናት ዝኸውን ሕክምናዊ መግቢ (RUTF) ከምኡውን ክትትል ክሊኒክ ይሽፍን።'
  },
  {
    amountEtb: 32500,
    amountUsd: 250,
    shortTag: {
      en: 'Farmer Drip Kit',
      am: 'የጠብታ መስኖ',
      om: 'Jallisii Cophaa',
      ti: 'መስኖ ነጠብጣብ'
    },
    title: 'Farmer Climate-Smart Drip Kit',
    titleAm: 'ለአርሶ አደር የጠብታ መስኖ ፓክ',
    titleOm: 'Meeshaa Jallisii Qonnaan Bulaa',
    titleTi: 'መሳርሒ መስኖ ነጠብጣብ ሓረስታይ',
    outcome: 'Provides a smallholder farming household with a high-efficiency drip irrigation kit and drought-resilient seeds to harvest perennially.',
    outcomeAm: 'ለአንድ አነስተኛ አርሶ አደር ቤተሰብ ውሃ ቆጣቢ የጠብታ መስኖ እና ድርቅን የሚቋቋም ምርጥ ዘር በማቅረብ ዓመቱን ሙሉ እንዲያመርት ያግዛል።',
    outcomeOm: 'Maatii qonnaan bulaa tokkoof meeshaa jallisii cophaa fi sanyii hongee dandamatu kennee waggaa guutuu akka oomishu gargaara.',
    outcomeTi: 'ንሓደ ንእሽቶ ስድራቤት ሓረስታይ ውጽኢታዊ መስኖ ነጠብጣብን ደርቂ ዝጻወር ዘርእን ብምሃብ ምሉእ ዓመት ከፍሪ ይሕግዝ።'
  },
  {
    amountEtb: 65000,
    amountUsd: 500,
    shortTag: {
      en: 'Youth Solar Kit',
      am: 'የወጣቶች ሶላር',
      om: 'Meeshaa Aduu',
      ti: 'መሳርሒ ጸሓይ'
    },
    title: 'Youth Solar Technician Starter Toolkit',
    titleAm: 'ለወጣት የሶላር ባለሙያ መነሻ መሳሪያ',
    titleOm: 'Meeshaa Soolaarii Teeknishaanii',
    titleTi: 'መበገሲ መሳርሒ መንእሰይ ክኢላ ጸሓይ',
    outcome: 'Supplies a certified Green Energy TVET graduate with an industrial toolkit (multimeter, inverter analyzer, safety harness) to launch an independent repair cooperative.',
    outcomeAm: 'የተመረቀ የአረንጓዴ ኃይል ቲቪኢቲ ባለሙያ የራሱን የሶላር ጥገና ማህበር እንዲጀምር የኢንዱስትሪ መሳሪያ ስብስብ (መልቲሜትር፣ የደህንነት ቀበቶ) ያሟላል።',
    outcomeOm: 'Eebbifamaa TVET anniisaa magariisaa waldaa suphaa dhuunfaa akka banatuuf meeshaalee hojii guutuu (multimeter, safety harness) dhiyeessa.',
    outcomeTi: 'ምሩቕ ሓምለዋይ ጸዓት TVET ናይ ገዛእ ርእሱ ማሕበር ጽገና ንምጅማር ኢንዱስትርያዊ መሳርሒታት (መልቲሜተር፣ ድሕነት) የዕጥቕ።'
  }
];
