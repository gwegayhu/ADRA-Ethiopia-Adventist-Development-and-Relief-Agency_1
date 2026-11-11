import { Language } from '../types';

export interface PortalUiCopy {
  common: {
    home: string;
    motto: string;
    countryOffice: string;
    ethiopia: string;
    photoCredit: string;
    close: string;
    finish: string;
    cancel: string;
    details: string;
    exploreArrow: string;
    readMore: string;
    active: string;
    ongoing: string;
    completed: string;
    ended: string;
    resetFilters: string;
    beneficiaries: string;
    duration: string;
  };
  app: {
    offlineBannerAria: string;
    offlineActive: string;
    offlineMsg: string;
    simulationBadge: string;
    endSimulation: string;
    dismissOfflineAria: string;
    openAdraAiAria: string;
  };
  header: {
    chooseLangTitle: string;
    selectLangAria: string;
    toggleMenuAria: string;
    changeLangBtn: string;
    megaTitle: string;
    megaHint: string;
    cleanWaterLink: string;
    greenEnergyLink: string;
    peaceBuildingLink: string;
    allSevenAreas: string;
    pillars: {
      educationSub: string;
      educationMetric: string;
      healthSub: string;
      healthMetric: string;
      livelihoodSub: string;
      livelihoodMetric: string;
      disasterSub: string;
      disasterMetric: string;
    };
  };
  footer: {
    purposeLead: string;
    proclamation: string;
    acsoInfo: string;
    addressPhone: string;
    programsHeading: string;
    programsLinks: [string, string, string, string, string, string, string];
    institutionalHeading: string;
    institutionalLinks: [string, string, string, string, string, string];
    updatesHeading: string;
    updatesBlurb: string;
    subscribedMsg: string;
    emailPlaceholder: string;
    subscribeBtn: string;
    directGiftBtn: string;
    copyright: string;
    safeguarding: string;
    whistleblower: string;
    privacy: string;
  };
  hero: {
    carouselAria: string;
    prevSlideAria: string;
    nextSlideAria: string;
    pauseAria: string;
    resumeAria: string;
    goToSlidePrefix: string;
  };
  wellbeing: {
    eyebrow: string;
    corePurposeLabel: string;
    svgLine1: string;
    svgLine2: string;
    svgLine3: string;
    educationVertex: string;
    healthVertex: string;
    livelihoodsVertex: string;
    vertexHint: string;
    interventionsLabel: string;
    footerNote: string;
    viewDossier: string;
    strengthsHeading: string;
  };
  whoWeAre: {
    sectionsPrefix: string;
    categoriesLabel: string;
    allTiersBtn: string;
    membersCount: string;
    subLabels: {
      aboutUs: string;
      ourHistory: string;
      leadership: string;
      governance: string;
    };
    aboutP1: string;
    aboutP2: string;
    values: {
      justiceTitle: string;
      justiceBadge: string;
      justiceDesc: string;
      compassionTitle: string;
      compassionBadge: string;
      compassionDesc: string;
      loveTitle: string;
      loveBadge: string;
      loveDesc: string;
    };
    history: {
      m1982Tag: string;
      m1982Title: string;
      m1982Desc: string;
      m1992Tag: string;
      m1992Title: string;
      m1992Desc: string;
      m2006Tag: string;
      m2006Title: string;
      m2006Desc: string;
      mNowTag: string;
      mNowTitle: string;
      mNowDesc: string;
    };
    governance: {
      heading: string;
      legalText: string;
      officeBannerLabel: string;
      officeBannerText: string;
      commitmentsLabel: string;
      bullets: [string, string, string, string];
    };
  };
  whatWeDo: {
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    exploreCta: string;
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    tabs: {
      all: string;
      wash: string;
      health: string;
      livelihood: string;
      education: string;
      disaster: string;
      energy: string;
      peace: string;
    };
    crossEyebrow: string;
    crossTitle: string;
    crossSubtitle: string;
    envTitle: string;
    envSub: string;
    envIntro: string;
    envBullets: { title: string; desc: string }[];
    genderTitle: string;
    genderSub: string;
    genderIntro: string;
    genderBullets: { title: string; desc: string }[];
    modalFlagshipBadge: string;
    tabOverview: string;
    tabImpact: string;
    tabStory: string;
    narrativeLabel: string;
    verifiedInterventions: string;
    activeWoredasLabel: string;
    partnersLabel: string;
    supportTelebirrBtn: string;
    closeDossierBtn: string;
  };
  whereWeWork: {
    kicker: string;
    bannerSubtitleTemplate: string;
    gisSubheading: string;
    gisHeading: string;
    gisHint: string;
    fieldHubLabel: string;
    activeOpsBadge: string;
    ourWorkInPrefix: string;
    statBeneficiaries: string;
    statActiveProjects: string;
    statOngoingUnit: string;
    statSolarWells: string;
    statSchemesUnit: string;
    statWoredas: string;
    statDistrictsUnit: string;
    sectorsHeadingPrefix: string;
    currentProjectsLabel: string;
    strategicInterventionsLabel: string;
    supportRegionPrefix: string;
    sectorButtons: {
      emergency: string;
      foodSecurity: string;
      wash: string;
      health: string;
      education: string;
      economic: string;
    };
  };
  gisMap: {
    hudTitle: string;
    modeProjects: string;
    modeRegions: string;
    totalProjectsCount: string;
    activeDoneRatio: string;
    beneficiariesShort: string;
    regionsCountLabel: string;
    regionsShort: string;
    projectNumPrefix: string;
    targetLocationLabel: string;
    goalLabel: string;
    quickSelectorLabel: string;
    fifteenOps: string;
    quickAct: string;
    quickEnded: string;
    regionalHubBadge: string;
    capitalLabel: string;
    statBeneficiaries: string;
    statProjects: string;
    statSolarWells: string;
    statWoredas: string;
    projectsOperatingLabel: string;
    zoomPrompt: string;
    resetViewBtn: string;
    filterLabel: string;
    filterAll15: string;
    filterOngoing10: string;
    filterCompleted5: string;
    zoomInAria: string;
    zoomOutAria: string;
    resetMapAria: string;
    layersMenuAria: string;
    layersMenuTitle: string;
    layers: {
      satellite: { label: string; sub: string };
      terrain: { label: string; sub: string };
      carto: { label: string; sub: string };
      osm: { label: string; sub: string };
    };
    guideTitle: string;
    selectedProjectLegend: string;
    ongoingLegend: string;
    completedLegend: string;
    activeHubLegend: string;
    baseLegend: string;
  };
  projects: {
    breadcrumbSummary: string;
    kicker: string;
    badges: {
      documented: string;
      tables: string;
      activeCompleted: string;
      beneficiaries: string;
    };
    tabRegionalTables: string;
    tabFullTable: string;
    tabCards: string;
    allStatus: string;
    active10: string;
    completed5: string;
    searchPlaceholder: string;
    sectorLabel: string;
    allRegions15: string;
    projectSingular: string;
    projectPlural: string;
    listedWord: string;
    idsPrefix: string;
    tableHeaders: {
      no: string;
      sector: string;
      nameLoc: string;
      objective: string;
      woredas: string;
      duration: string;
      beneficiaries: string;
      status: string;
      dossier: string;
      action: string;
    };
    emptyGroup: string;
    masterRegistryTitle: string;
    showingCountTemplate: string;
    officialRecordBadge: string;
    viewDossierBtn: string;
    emptySearchTitle: string;
    emptySearchSub: string;
    modalGoalTitle: string;
    modalRegionArea: string;
    modalBeneficiariesNum: string;
    modalWoredasTitle: string;
    modalPartnersTitle: string;
    modalHardTitle: string;
    modalMaterialsTitle: string;
    modalSoftTitle: string;
    modalMilestonesTitle: string;
    supportProgramBtn: string;
    closeDossierBtn: string;
  };
  impact: {
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    exploreMetricsBtn: string;
    spendRatioBadge: string;
    leftEyebrow: string;
    leftTitle: string;
    leftDesc: string;
    leftTaxNote: string;
    estimatorTitle: string;
    marketRatePrefix: string;
    marketRateFloat: string;
    nbeBadge: string;
    outcomeLabel: string;
    donateCtaTemplate: string;
    currencyEtbLabel: string;
    currencyUsdLabel: string;
  };
  stories: {
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    readBtn: string;
    featuredEyebrow: string;
    latestHeading: string;
    allStoriesBtn: string;
    supportResilienceBtn: string;
  };
  blogs: {
    breadcrumbCurrent: string;
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    searchPlaceholder: string;
    emptyTitle: string;
    emptySub: string;
    readBlogBtn: string;
    modalHeader: string;
    prevTitle: string;
    nextTitle: string;
    copyTitle: string;
    topicTagsLabel: string;
    ctaEyebrow: string;
    ctaHeadingPrefix: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  aiForGood: {
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    chatBtn: string;
    approachTitle: string;
    approachBody: string;
    principlesTitle: string;
    principlesSubtitle: string;
  };
  tenders: {
    kicker: string;
    bannerTitle: string;
    bannerSubtitle: string;
    tabTenders: string;
    tabCareers: string;
    tabPublications: string;
    submissionDeadline: string;
    closingDate: string;
    viewTenderBtn: string;
    applyBtn: string;
    viewAbstractBtn: string;
    downloadPdfBtn: string;
    locationPrefix: string;
    deadlinePrefix: string;
    requirementsTitle: string;
    requestBidPackage: string;
    submitCandidateEoi: string;
    ackTitle: string;
    ackBodyTemplate: string;
    bidderLabel: string;
    fullNameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    requestBidBtn: string;
    submitAppBtn: string;
    pubNoticeLabel: string;
    pubNoticeBody: string;
    confirmDownloadBtn: string;
    downloadStartedMsg: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hqTitle: string;
    hqSub: string;
    addressMain: string;
    addressSub: string;
    hoursText: string;
    registeredBadge: string;
    hubsTitle: string;
    hubs: {
      somaliTitle: string;
      somaliSub: string;
      oromiaTitle: string;
      oromiaSub: string;
      sidamaTitle: string;
      sidamaSub: string;
      tigrayAmharaTitle: string;
      tigrayAmharaSub: string;
    };
    formTitle: string;
    formSub: string;
    sentTitle: string;
    sentBodyTemplate: string;
    partnerDefault: string;
    inquiryLabel: string;
    inquiries: {
      general: string;
      partnership: string;
      procurement: string;
      careers: string;
      media: string;
    };
    fullNameLabel: string;
    fullNamePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
  };
  donateModal: {
    closeAria: string;
    thankYouTemplate: string;
    generousDonor: string;
    ackSubtitle: string;
    receiptRef: string;
    contribAmount: string;
    designatedSector: string;
    paymentGateway: string;
    dateIssued: string;
    taxNote: string;
    saveReceiptBtn: string;
    receiptSavedMsg: string;
    rateLabel: string;
    rateFloat: string;
    nbeVerified: string;
    oneTime: string;
    monthly: string;
    selectAmount: string;
    customPlaceholderPrefix: string;
    programAreaLabel: string;
    selectGateway: string;
    scanQrTab: string;
    appCardTab: string;
    telebirrTag: string;
    telebirrSub: string;
    cbeTag: string;
    cbeSub: string;
    stripeTag: string;
    stripeSub: string;
    telebirrHeader: string;
    cbeHeader: string;
    stripeHeader: string;
    scanCodeEnabled: string;
    howToScanPay: string;
    telebirrSteps: [string, string, string, string];
    cbeSteps: [string, string, string, string];
    merchantCodeLabel: string;
    merchantShortCode: string;
    copyCode: string;
    copied: string;
    copyBtn: string;
    launchTelebirr: string;
    dialTelebirrUssd: string;
    cbeAccountLabel: string;
    cbeBranchLabel: string;
    openCbeApp: string;
    dialCbeUssd: string;
    instantMobilePay: string;
    stripeMobileDesc: string;
    enterCardLink: string;
    cardNumberLabel: string;
    expiryLabel: string;
    cvcLabel: string;
    donorNameLabel: string;
    donorNamePlaceholder: string;
    donorPhoneLabel: string;
    donorEmailLabel: string;
    confirmTemplate: string;
    securityFooter: string;
    sectors: {
      general: string;
      wash: string;
      education: string;
      health: string;
      foodSecurity: string;
      economicGrowth: string;
      emergency: string;
      peaceBuilding: string;
    };
  };
  qr: {
    telebirrTitle: string;
    telebirrSub: string;
    cbeTitle: string;
    cbeSub: string;
    stripeTitle: string;
    stripeSub: string;
    telebirrQuickLabel: string;
    cbeQrLabel: string;
    stripeMobileLabel: string;
  };
  chatbot: {
    welcome: string;
    verifiedBadge: string;
    headerSub: string;
    closeAria: string;
    sourcePrefix: string;
    jumpToSection: string;
    searchingText: string;
    suggestedLabel: string;
    placeholder: string;
    sendAria: string;
    footerNote: string;
    fallbackReply: string;
    prompts: {
      donate: string;
      ai: string;
      somali: string;
      wash: string;
      history: string;
    };
  };
}

export const UI_COPY: Record<Language, PortalUiCopy> = {
  en: {
    common: {
      home: 'Home',
      motto: 'Justice. Compassion. Love.',
      countryOffice: 'COUNTRY OFFICE',
      ethiopia: 'Ethiopia',
      photoCredit: 'Photo: © 2026 ADRA | ADRA Ethiopia',
      close: 'Close',
      finish: 'Finish',
      cancel: 'Cancel',
      details: 'Details',
      exploreArrow: 'Explore',
      readMore: 'Read more',
      active: 'Active',
      ongoing: 'Ongoing',
      completed: 'Completed',
      ended: 'Ended',
      resetFilters: 'Reset Filters',
      beneficiaries: 'Beneficiaries',
      duration: 'Duration',
    },
    app: {
      offlineBannerAria: 'Offline status banner',
      offlineActive: 'Offline Mode Active:',
      offlineMsg: 'Browsing cached content. Forms and pledges are safely queued until connection returns.',
      simulationBadge: 'Simulation',
      endSimulation: 'End Sim',
      dismissOfflineAria: 'Dismiss offline banner',
      openAdraAiAria: 'Open ADRA AI',
    },
    header: {
      chooseLangTitle: 'Choose Language',
      selectLangAria: 'Select Language',
      toggleMenuAria: 'Toggle Menu',
      changeLangBtn: 'Change',
      megaTitle: 'Core Program Pillars & Interventions',
      megaHint: 'Click to explore dossier',
      cleanWaterLink: '• Clean Water & WASH',
      greenEnergyLink: '• Green Energy TVET',
      peaceBuildingLink: '• Peace Building',
      allSevenAreas: 'All 7 Areas',
      pillars: {
        educationSub: 'SEAQE II & Girls Schooling',
        educationMetric: '85,000+ Enrolled',
        healthSub: 'Nutrition & Maternal CTC',
        healthMetric: '310,000+ Treated',
        livelihoodSub: 'Solar Irrigation & VSLAs',
        livelihoodMetric: '68,000+ Farmers',
        disasterSub: '72-Hr Relief & Mobile Cash',
        disasterMetric: '550,000+ Aided',
      },
    },
    footer: {
      purposeLead: '"To serve humanity so all may live as God intended." — Official portal of ADRA Ethiopia, delivering community development, clean water, healthcare, and emergency response since 1982.',
      proclamation: 'Registered under Civil Society Organizations Proclamation #1113/2019',
      acsoInfo: 'ACSO Registration Certificate No: 2049 · 42+ Years in Ethiopia',
      addressPhone: 'Ras Desta Damtew Rd, Addis Ababa Ethiopia · Phone: +251-115-512212',
      programsHeading: 'Programs & Focus',
      programsLinks: [
        'Clean Water & WASH',
        'Education & Child Protection',
        'Agriculture & Food Security',
        'Community Therapeutic Care',
        'Green Energy TVET II',
        'Emergency Disaster Response',
        'Peace Building & Cohesion',
      ],
      institutionalHeading: 'Institutional',
      institutionalLinks: [
        'Our History Since 1982',
        'Where We Work (8 Regions)',
        'Active Projects Directory',
        'Public Tenders & RFPs',
        'Careers & Job Openings',
        'Annual Reports & Audits',
      ],
      updatesHeading: 'Field Updates',
      updatesBlurb: 'Receive quarterly programmatic dispatches and certified audit releases directly from Ethiopia.',
      subscribedMsg: 'Thank you. You are subscribed.',
      emailPlaceholder: 'name@email.com',
      subscribeBtn: 'Subscribe to Dispatches',
      directGiftBtn: 'Make a Direct Gift',
      copyright: 'ADRA Ethiopia (Adventist Development and Relief Agency). All rights reserved.',
      safeguarding: 'Safeguarding Policy',
      whistleblower: 'Whistleblower Integrity',
      privacy: 'Privacy Notice',
    },
    hero: {
      carouselAria: 'ADRA Ethiopia Field Work Showcase',
      prevSlideAria: 'Previous Slide',
      nextSlideAria: 'Next Slide',
      pauseAria: 'Pause auto-play',
      resumeAria: 'Resume auto-play',
      goToSlidePrefix: 'Go to slide',
    },
    wellbeing: {
      eyebrow: 'Official ADRA Framework',
      corePurposeLabel: 'Our Core Purpose',
      svgLine1: 'INDIVIDUAL &',
      svgLine2: 'COMMUNITY',
      svgLine3: 'WELL-BEING',
      educationVertex: 'Education',
      healthVertex: 'Health',
      livelihoodsVertex: 'Livelihoods',
      vertexHint: 'Click any vertex to explore that foundational pillar',
      interventionsLabel: 'Key Strategic Interventions:',
      footerNote: 'Interconnected with Health & Livelihoods for complete human dignity',
      viewDossier: 'View Full Sector Dossier',
      strengthsHeading: 'Four Institutional Strengths',
    },
    whoWeAre: {
      sectionsPrefix: 'Sections:',
      categoriesLabel: 'Categories:',
      allTiersBtn: 'All 5 Tiers (20 Members)',
      membersCount: '4 Members',
      subLabels: {
        aboutUs: 'About us',
        ourHistory: 'Our history',
        leadership: 'Leadership',
        governance: 'Governance',
      },
      aboutP1: 'ADRA Ethiopia is the country office of the Adventist Development and Relief Agency (ADRA), the global humanitarian arm of the Seventh-day Adventist Church operating in over 130 countries worldwide. We work with communities across Ethiopia to deliver emergency relief and long-term development regardless of background.',
      aboutP2: 'Governed by our enduring purpose to serve humanity so all may live as God intended, our programs span emergency management, food security, clean water (WASH), health and nutrition, and inclusive education in partnership with local communities.',
      values: {
        justiceTitle: 'Justice',
        justiceBadge: 'Value I',
        justiceDesc: 'Advocating for marginalized voices, protecting vulnerable children, and ensuring fair, equitable distribution of essential resources.',
        compassionTitle: 'Compassion',
        compassionBadge: 'Value II',
        compassionDesc: 'Providing unconditional relief during drought, flood, or displacement with empathy, warmth, dignity, and urgency.',
        loveTitle: 'Love',
        loveBadge: 'Value III',
        loveDesc: 'Walking alongside Ethiopian families over decades, equipping them with tools, skills, and solidarity for self-reliance.',
      },
      history: {
        m1982Tag: '[1982]',
        m1982Title: 'ADRA begins work in Ethiopia',
        m1982Desc: 'Commenced operations during the 1982 famine in Wello and Asaita, opening an emergency shelter in Legetaffo to supply food, therapeutic feeding, and relief.',
        m1992Tag: '[1992]',
        m1992Title: 'Expansion of development programs & Addis Ababa HQ',
        m1992Desc: 'The Ethiopian government granted land in Addis Ababa (Kirkos Sub-City) recognizing ADRA’s drought relief, enabling construction of its national headquarters.',
        m2006Tag: '[2006]',
        m2006Title: 'Pioneering Community Therapeutic Care (CTC) in Somali Region',
        m2006Desc: 'Partnering with USAID in Kelafo and Gode, ADRA launched home-based acute malnutrition treatment, saving over 30,000 children without hospital confinement.',
        mNowTag: '[PRESENT]',
        mNowTitle: 'Green Energy TVET II & Solar WASH Across 8 Regions',
        mNowDesc: 'Operating solar vocational academies and deep solar groundwater pumping reaching 1.6+ million people annually under 100% Ethiopian leadership.',
      },
      governance: {
        heading: 'Governance and Statutory Compliance',
        legalText: 'ADRA Ethiopia is registered as a Foreign Non-Governmental Organization with the Authority for Civil Society Organizations (ACSO) under Certificate No. 2049, operating for 42+ years pursuant to Proclamation No. 1113/2019.',
        officeBannerLabel: 'National Coordination Office:',
        officeBannerText: 'Ras Desta Damtew Rd, Addis Ababa · +251-115-512212 · 89 Total Staff (15 HQ, 74 Field)',
        commitmentsLabel: 'Stewardship Commitments:',
        bullets: [
          'Annual external audits conducted by certified independent audit firms.',
          'Over 92.4% direct program expenditure ratio to maximize community impact.',
          'Zero tolerance for sexual exploitation, abuse, and harassment (PSEAH).',
          'Confidential whistleblower integrity mechanisms for staff and beneficiaries.',
        ],
      },
    },
    whatWeDo: {
      kicker: 'CORE DEVELOPMENT & RELIEF · WHAT WE DO',
      bannerTitle: 'Serving Humanity so All May Live as God Intended',
      bannerSubtitle: 'Delivering individual and community well-being across education, healthcare, and sustainable livelihoods, backed by rapid emergency relief.',
      exploreCta: 'Explore Core Programs',
      pillarsEyebrow: 'CORE HUMANITARIAN & DEVELOPMENT PILLARS',
      pillarsTitle: 'Seven Technical Pillars, One Commitment to Dignity',
      pillarsSubtitle: 'Explore our 42-year portfolio of life-saving interventions, verified engineering milestones, and independently audited impact metrics.',
      tabs: {
        all: 'All Pillars',
        wash: 'WASH (20+ Yrs)',
        health: 'Health & Nutrition',
        livelihood: 'Livelihoods & Agri',
        education: 'Education & TVET',
        disaster: 'Disaster Relief',
        energy: 'Renewable Energy',
        peace: 'Peace Building',
      },
      crossEyebrow: 'CROSS-CUTTING THEMES & INSTITUTIONAL SAFEGUARDS',
      crossTitle: 'Environmental Action & Gender Equity Embedded in Every Project',
      crossSubtitle: 'All 15 active humanitarian and development projects adhere to strict cross-cutting standards for ecological regeneration and women-led governance.',
      envTitle: 'Environmental Awareness & Climate Action',
      envSub: 'Ecological Regeneration & Clean Energy',
      envIntro: 'ADRA combats land degradation and deforestation across Ethiopian ecosystems through community-driven practices:',
      envBullets: [
        { title: 'Organic Composting:', desc: 'Training smallholder cooperatives and school clubs to restore depleted soils naturally.' },
        { title: 'Energy-Efficient Stoves:', desc: 'Distributing Mirt/Tikikil stoves that cut firewood use by 60% and curb indoor smoke.' },
        { title: 'Watershed Conservation:', desc: 'Planting native acacia and agro-forestry seedlings around solar water stations.' },
        { title: 'Solar Transition:', desc: 'Replacing diesel generators across 288+ deep boreholes with zero-emission solar arrays.' },
      ],
      genderTitle: 'Gender Mainstreaming & Inclusion',
      genderSub: 'Women Leadership & Disability Access',
      genderIntro: 'Turning gender equity from policy into grassroots reality across project governance and resource allocation:',
      genderBullets: [
        { title: '50%+ Female WASHCo Leadership:', desc: 'Women serve as treasurers and coordinators on local water management boards.' },
        { title: 'Targeted Asset Transfers:', desc: 'Distributing pregnant goats and poultry kits directly to female-headed households.' },
        { title: 'Menstrual Dignity:', desc: 'Equipping 85+ schools with private washrooms and hygiene kits to keep girls enrolled.' },
        { title: 'Disability Inclusion (TOFI):', desc: 'Adding wheelchair ramps, braille books, and inclusive aids in cluster schools.' },
      ],
      modalFlagshipBadge: 'ADRA Ethiopia · Flagship Pillar',
      tabOverview: 'Overview & Strategy',
      tabImpact: 'Key Interventions & Stats',
      tabStory: 'Eyewitness Testimony',
      narrativeLabel: 'Programmatic Narrative',
      verifiedInterventions: 'Verified Strategic Interventions',
      activeWoredasLabel: 'Active Operating Woredas',
      partnersLabel: 'Co-Executing Donors & Partners',
      supportTelebirrBtn: 'Support This Program via TeleBirr or CBE',
      closeDossierBtn: 'Close Dossier',
    },
    whereWeWork: {
      kicker: 'GIS GEOGRAPHIC OPERATIONS · WHERE WE WORK',
      bannerSubtitleTemplate: 'Operational footprint and community interventions across {region}. Explore live figures, woredas, and solar water stations.',
      gisSubheading: 'Interactive Regional GIS Map',
      gisHeading: 'Live Operations & Field Performance Numbers',
      gisHint: 'Hover any point to inspect on left panel · Click to focus',
      fieldHubLabel: 'Operational Field Hub:',
      activeOpsBadge: 'Active Operations',
      ourWorkInPrefix: 'Our Work in',
      statBeneficiaries: 'Beneficiaries',
      statActiveProjects: 'Active Projects',
      statOngoingUnit: 'Ongoing',
      statSolarWells: 'Solar Water Wells',
      statSchemesUnit: 'Schemes',
      statWoredas: 'Field Woredas',
      statDistrictsUnit: 'Districts',
      sectorsHeadingPrefix: 'Programmatic Sectors Active in',
      currentProjectsLabel: 'Current Field Projects',
      strategicInterventionsLabel: 'Strategic Field Interventions',
      supportRegionPrefix: 'Support Projects in',
      sectorButtons: {
        emergency: 'Emergency Management',
        foodSecurity: 'Food Security & Livelihoods',
        wash: 'Water, Sanitation & Hygiene',
        health: 'Health & Nutrition',
        education: 'Education & Schools',
        economic: 'Economic Growth & TVET',
      },
    },
    gisMap: {
      hudTitle: 'ADRA Ethiopia GIS Operations',
      modeProjects: '15 Official Projects',
      modeRegions: '7 Regional Hubs',
      totalProjectsCount: '15 Projects',
      activeDoneRatio: '(10 Active, 5 Ended)',
      beneficiariesShort: 'Beneficiaries',
      regionsCountLabel: '7',
      regionsShort: 'Regions',
      projectNumPrefix: 'Project #',
      targetLocationLabel: 'Target Location & Woredas',
      goalLabel: 'Project Goal / Objective',
      quickSelectorLabel: 'Quick Project Selector:',
      fifteenOps: '15 Operations',
      quickAct: 'Active',
      quickEnded: 'Ended',
      regionalHubBadge: 'Regional Field Hub',
      capitalLabel: 'Capital:',
      statBeneficiaries: 'Beneficiaries',
      statProjects: 'Projects',
      statSolarWells: 'Solar Wells',
      statWoredas: 'Woredas',
      projectsOperatingLabel: 'Projects Operating Here:',
      zoomPrompt: '* Click any map marker to zoom & inspect',
      resetViewBtn: 'Reset View',
      filterLabel: 'Filter:',
      filterAll15: 'All (15)',
      filterOngoing10: 'Ongoing (10)',
      filterCompleted5: 'Completed (5)',
      zoomInAria: 'Zoom in map',
      zoomOutAria: 'Zoom out map',
      resetMapAria: 'Reset map view',
      layersMenuAria: 'Toggle basemap layer menu',
      layersMenuTitle: 'GIS Imagery Layers',
      layers: {
        satellite: { label: 'Satellite Hybrid (GIS)', sub: 'High-Res Aerial + Labels' },
        terrain: { label: 'Topographic Relief', sub: 'Elevation & Contours' },
        carto: { label: 'Clean Humanitarian', sub: 'Voyager GIS Vector' },
        osm: { label: 'OpenStreetMap', sub: 'Standard Humanitarian' },
      },
      guideTitle: 'GIS Map Guide',
      selectedProjectLegend: 'Selected Project (#1–#15)',
      ongoingLegend: 'Ongoing Interventions',
      completedLegend: 'Recently Completed',
      activeHubLegend: 'Active Hub',
      baseLegend: 'Regional Base',
    },
    projects: {
      breadcrumbSummary: 'Official Project Summary',
      kicker: 'ADRA ETHIOPIA COUNTRY OFFICE PROJECT SUMMARY',
      badges: {
        documented: '15 Documented Projects',
        tables: '7 Regional Tables',
        activeCompleted: '10 Active & 5 Ended',
        beneficiaries: '345,000+ Beneficiaries',
      },
      tabRegionalTables: 'Regional Tables (7 Regions)',
      tabFullTable: 'Full Summary Table',
      tabCards: 'Cards Grid',
      allStatus: 'All Status',
      active10: 'Active (10)',
      completed5: 'Ended (5)',
      searchPlaceholder: 'Search project, woredas, goals...',
      sectorLabel: 'Sector:',
      allRegions15: 'All 7 Regions (15)',
      projectSingular: 'Project',
      projectPlural: 'Projects',
      listedWord: 'Listed',
      idsPrefix: 'IDs:',
      tableHeaders: {
        no: 'No.',
        sector: 'Sector / Area',
        nameLoc: 'Project Name & Location',
        objective: 'Project Goal / Objective',
        woredas: 'Woredas & Towns',
        duration: 'Duration',
        beneficiaries: 'Beneficiaries',
        status: 'Status',
        dossier: 'Dossier',
        action: 'Action',
      },
      emptyGroup: 'No projects in this region match your filters.',
      masterRegistryTitle: 'ADRA Ethiopia Master Projects Registry',
      showingCountTemplate: 'Showing {shown} of {total} verified operations across Ethiopia',
      officialRecordBadge: 'Official Country Record',
      viewDossierBtn: 'View Project Dossier',
      emptySearchTitle: 'No projects match your filter',
      emptySearchSub: 'Try resetting the sector or search keyword.',
      modalGoalTitle: 'Project Goal & Objective',
      modalRegionArea: 'Region / Primary Area',
      modalBeneficiariesNum: 'Beneficiaries',
      modalWoredasTitle: 'Target Woredas & Towns',
      modalPartnersTitle: 'Funding & Partners',
      modalHardTitle: 'Hard Components (Infrastructure)',
      modalMaterialsTitle: 'Materials Provisions',
      modalSoftTitle: 'Soft Components (Capacity Building)',
      modalMilestonesTitle: 'Key Milestones & Results',
      supportProgramBtn: 'Support Program',
      closeDossierBtn: 'Close Dossier',
    },
    impact: {
      kicker: 'EVALUATED OUTCOMES & METRICS',
      bannerTitle: 'Measurable Change Across Ethiopia',
      bannerSubtitle: 'Independently verified data tracking real improvements in clean water access, child nutrition, and household incomes nationwide.',
      exploreMetricsBtn: 'Explore Verified Metrics',
      spendRatioBadge: '92.4% Program Spend · CHS & EDRMC Certified',
      leftEyebrow: 'Direct Accountability',
      leftTitle: 'See What Your Generosity Builds in Ethiopia',
      leftDesc: 'Operating with low overhead and Ethiopian field experts, over 92% of your gift directly funds measurable community outcomes.',
      leftTaxNote: 'Tax receipt and annual audited impact report provided',
      estimatorTitle: 'Impact Estimator',
      marketRatePrefix: 'Exchange Rate:',
      marketRateFloat: '(Official Float)',
      nbeBadge: 'NBE Rate',
      outcomeLabel: 'Direct Humanitarian Outcome',
      donateCtaTemplate: 'Donate {amount} to Empower',
      currencyEtbLabel: 'ETB (ብር)',
      currencyUsdLabel: 'USD ($)',
    },
    stories: {
      kicker: 'VOICES FROM THE FIELD',
      bannerTitle: 'Real Lives, Resilient Journeys',
      bannerSubtitle: 'First-person dispatches, community portraits, and eyewitness perspectives documented across ADRA Ethiopia program sites.',
      readBtn: 'Read Field Dispatches',
      featuredEyebrow: 'FEATURED DISPATCHES',
      latestHeading: 'Latest from the field',
      allStoriesBtn: 'All stories',
      supportResilienceBtn: 'Support Resilience',
    },
    blogs: {
      breadcrumbCurrent: 'Blogs & Dispatches',
      kicker: 'FIELD JOURNAL & DISPATCHES · BLOGS',
      bannerTitle: 'Dispatches of Impact, Innovation & Humanity',
      bannerSubtitle: 'Field technical reports, frontline stories, and humanitarian analyses from ADRA Ethiopia teams nationwide.',
      searchPlaceholder: 'Search blogs, topics, tags...',
      emptyTitle: 'No blogs match your search',
      emptySub: 'Try clearing filters or search terms',
      readBlogBtn: 'Read Blog',
      modalHeader: 'ADRA ETHIOPIA DISPATCH',
      prevTitle: 'Previous Blog',
      nextTitle: 'Next Blog',
      copyTitle: 'Copy Link',
      topicTagsLabel: 'Topic Tags:',
      ctaEyebrow: 'Empower Communities Across Ethiopia',
      ctaHeadingPrefix: 'Support initiatives like',
      ctaDesc: 'Every contribution directly powers community-led solutions with TeleBirr, CBE Birr & card payments.',
      ctaBtn: 'Donate to Support',
    },
    aiForGood: {
      kicker: 'AI FOR GOOD',
      bannerTitle: 'Technology that serves people with dignity',
      bannerSubtitle: 'How ADRA Ethiopia approaches artificial intelligence and data: carefully, openly and always with communities at the centre.',
      chatBtn: 'Chat with ADRA AI',
      approachTitle: 'Our approach',
      approachBody: 'AI can help humanitarian teams spot needs sooner, share clear information, and steward resources well. It also poses risks to privacy and fairness. ADRA Ethiopia uses these tools only where they clearly serve people and risks are actively managed.',
      principlesTitle: 'Our principles',
      principlesSubtitle: 'Six rules guide every decision about technology.',
    },
    tenders: {
      kicker: 'PARTNERSHIPS, CAREERS & TENDERS',
      bannerTitle: 'Tenders, Careers & Publications',
      bannerSubtitle: 'Open governance and meritocratic hiring: all active tenders, RFPs, vacancies, and audited reports are publicly accessible.',
      tabTenders: 'Tenders & RFPs',
      tabCareers: 'Open Careers',
      tabPublications: 'Reports & Briefs',
      submissionDeadline: 'Deadline:',
      closingDate: 'Closing:',
      viewTenderBtn: 'View Tender',
      applyBtn: 'Apply Now',
      viewAbstractBtn: 'Read Abstract',
      downloadPdfBtn: 'Download PDF',
      locationPrefix: 'Location:',
      deadlinePrefix: 'Deadline:',
      requirementsTitle: 'Mandatory Qualifications & Requirements:',
      requestBidPackage: 'Request Official Bid Package',
      submitCandidateEoi: 'Submit Candidate Application',
      ackTitle: 'Submission Logged',
      ackBodyTemplate: 'Reference recorded. Instructions sent to {email}.',
      bidderLabel: 'Company / Bidder Name',
      fullNameLabel: 'Full Name',
      namePlaceholder: 'e.g. Alazar Mengistu',
      emailLabel: 'Official Email',
      emailPlaceholder: 'contact@domain.et',
      requestBidBtn: 'Request Bid Dossier',
      submitAppBtn: 'Submit Application',
      pubNoticeLabel: 'Publication Notice:',
      pubNoticeBody: 'All ADRA Ethiopia technical manuals and financial audits are open access for researchers, partners, and practitioners.',
      confirmDownloadBtn: 'Download File',
      downloadStartedMsg: 'Document package prepared for download.',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: 'Contact ADRA Ethiopia',
      subtitle: 'For partnerships, institutional grants, media inquiries, or visiting our Addis Ababa office, connect with our national coordination team.',
      hqTitle: 'National Headquarters',
      hqSub: 'Addis Ababa Coordination Office',
      addressMain: 'Ras Desta Damtew Rd, Addis Ababa Ethiopia',
      addressSub: 'Kirkos Sub-City · Near Ethiopian Union Compound · P.O. Box 145',
      hoursText: 'Mon–Thu: 8:30 AM – 5:30 PM · Fri: 8:30 AM – 1:30 PM',
      registeredBadge: 'Registered NGO · Certificate No. 2049',
      hubsTitle: 'Regional Coordination Hubs',
      hubs: {
        somaliTitle: 'Somali Region',
        somaliSub: 'Gode & Kelafo Field Bases',
        oromiaTitle: 'Oromia Region',
        oromiaSub: 'Adama & East Hararghe',
        sidamaTitle: 'Sidama Region',
        sidamaSub: 'Hawassa Project Office',
        tigrayAmharaTitle: 'Tigray & Amhara',
        tigrayAmharaSub: 'Mekelle & Dessie Hubs',
      },
      formTitle: 'Send Official Message',
      formSub: 'Our communications team replies to verified inquiries within 24–48 business hours.',
      sentTitle: 'Message Logged',
      sentBodyTemplate: 'Thank you, {name}. Your {category} inquiry has been routed to ADRA Ethiopia Headquarters.',
      partnerDefault: 'Partner',
      inquiryLabel: 'Inquiry Type',
      inquiries: {
        general: 'General Inquiry & Information',
        partnership: 'Institutional Partnership & Funding',
        procurement: 'Procurement & Tender Query',
        careers: 'Careers & Human Resources',
        media: 'Media & Documentary Requests',
      },
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'e.g. Almaz Bekele',
      emailLabel: 'Email Address',
      emailPlaceholder: 'almaz@org.et',
      phoneLabel: 'Phone (Optional)',
      phonePlaceholder: '+251 9...',
      messageLabel: 'Detailed Message',
      messagePlaceholder: 'Write your message or inquiry...',
      submitBtn: 'Send Message',
    },
    donateModal: {
      closeAria: 'Close modal',
      thankYouTemplate: 'Thank You, {donor}!',
      generousDonor: 'Generous Donor',
      ackSubtitle: 'Your gift directly powers resilient communities across Ethiopia.',
      receiptRef: 'Receipt Ref:',
      contribAmount: 'Amount:',
      designatedSector: 'Program Area:',
      paymentGateway: 'Gateway:',
      dateIssued: 'Date Issued:',
      taxNote: 'ADRA Ethiopia is registered with ACSO (No. 2049). Gifts comply with Proclamation No. 1113/2019.',
      saveReceiptBtn: 'Save Receipt',
      receiptSavedMsg: 'Official receipt saved cleanly.',
      rateLabel: 'Exchange Rate:',
      rateFloat: '(Official Float)',
      nbeVerified: 'NBE Rate',
      oneTime: 'One-Time',
      monthly: 'Monthly',
      selectAmount: 'Select Amount',
      customPlaceholderPrefix: 'Custom amount in',
      programAreaLabel: 'Program Area',
      selectGateway: 'Select Gateway',
      scanQrTab: 'Scan QR',
      appCardTab: 'App / Card',
      telebirrTag: '#1 ET',
      telebirrSub: 'Ethio Telecom',
      cbeTag: 'Bank',
      cbeSub: 'Commercial Bank',
      stripeTag: 'Global',
      stripeSub: 'Card / Apple Pay',
      telebirrHeader: 'TeleBirr Mobile Money',
      cbeHeader: 'Commercial Bank (CBE)',
      stripeHeader: 'Stripe Global Checkout',
      scanCodeEnabled: 'QR Ready',
      howToScanPay: 'How to Scan & Pay:',
      telebirrSteps: [
        'Open TeleBirr App on your phone',
        'Tap the Scan QR icon',
        'Scan code to send amount below',
        'Confirm with your TeleBirr PIN',
      ],
      cbeSteps: [
        'Open CBE Mobile or CBE Birr',
        'Select Scan to Pay',
        'Scan this official ADRA QR code',
        'Confirm account 1000012345678',
      ],
      merchantCodeLabel: 'Merchant:',
      merchantShortCode: 'ADRA Merchant Short Code:',
      copyCode: 'Copy Code',
      copied: 'Copied!',
      copyBtn: 'Copy',
      launchTelebirr: 'Open TeleBirr App',
      dialTelebirrUssd: 'Dial *127#',
      cbeAccountLabel: 'CBE Account:',
      cbeBranchLabel: 'ADRA Ethiopia, Kirkos Branch',
      openCbeApp: 'Open CBE App',
      dialCbeUssd: 'Dial *847#',
      instantMobilePay: 'Instant Mobile Pay:',
      stripeMobileDesc: 'Scan with your phone camera for Apple Pay, Google Pay, or card checkout via Stripe.',
      enterCardLink: 'Or enter card details here →',
      cardNumberLabel: 'Card Number',
      expiryLabel: 'Expires (MM/YY)',
      cvcLabel: 'CVC Code',
      donorNameLabel: 'Donor Name',
      donorNamePlaceholder: 'Dawit Alemayehu',
      donorPhoneLabel: 'Phone Number',
      donorEmailLabel: 'Email (Optional)',
      confirmTemplate: 'Confirm {amount}',
      securityFooter: 'Verified Gateway · Stripe, CBE & TeleBirr',
      sectors: {
        general: 'Where Needed Most (Priority Relief)',
        wash: 'Clean Water & Solar Boreholes (WASH)',
        education: 'Education & Girls Retention (SEAQE II)',
        health: 'Health & Malnutrition Care (CTC)',
        foodSecurity: 'Food Security & Drip Irrigation',
        economicGrowth: 'Green Energy TVET Solar Academy',
        emergency: 'Emergency Response & Relief',
        peaceBuilding: 'Peace Building & Social Cohesion',
      },
    },
    qr: {
      telebirrTitle: 'TeleBirr Pay',
      telebirrSub: 'Scan with TeleBirr App',
      cbeTitle: 'CBE Birr Pay',
      cbeSub: 'Scan with CBE Mobile App',
      stripeTitle: 'Stripe Mobile Pay',
      stripeSub: 'Scan for Apple Pay or Card',
      telebirrQuickLabel: 'TeleBirr QR',
      cbeQrLabel: 'CBE Birr QR',
      stripeMobileLabel: 'Stripe QR',
    },
    chatbot: {
      welcome: 'Hello! I am ADRA AI for ADRA Ethiopia. Ask me about our seven pillars of work (including Peace Building), regional operations, history since 1982, AI principles, or donating via TeleBirr and CBE Birr.',
      verifiedBadge: 'Verified Data',
      headerSub: 'Grounded in ADRA Ethiopia records',
      closeAria: 'Close ADRA AI',
      sourcePrefix: 'Source:',
      jumpToSection: 'Jump to section',
      searchingText: 'Searching ADRA records...',
      suggestedLabel: 'Suggested:',
      placeholder: 'Ask about programs, regions, history, or giving...',
      sendAria: 'Send message',
      footerNote: 'Follows ADRA Ethiopia AI for Good principles (Human oversight & privacy)',
      fallbackReply: 'Based on ADRA Ethiopia records, we work across seven core pillars (WASH, Education, Food Security, Emergency Relief, Health, Green TVET, and Peace Building) in 8 Ethiopian regions. Ask about our 1982 history, leadership, or giving via TeleBirr (251911) and CBE Birr.',
      prompts: {
        donate: 'Donate via TeleBirr / CBE?',
        ai: 'What are the 6 AI rules?',
        somali: 'Work in Somali region?',
        wash: 'Clean water & WASH?',
        history: 'ADRA history since 1982',
      },
    },
  },

  am: {
    common: {
      home: 'መነሻ',
      motto: 'ፍትህ · ርህራሄ · ፍቅር',
      countryOffice: 'የኢትዮጵያ ቢሮ',
      ethiopia: 'ኢትዮጵያ',
      photoCredit: 'ፎቶ: © 2026 አድራ | አድራ ኢትዮጵያ',
      close: 'ዝጋ',
      finish: 'ጨርስ',
      cancel: 'ሰርዝ',
      details: 'ዝርዝር',
      exploreArrow: 'ይመልከቱ',
      readMore: 'ተጨማሪ',
      active: 'ንቁ',
      ongoing: 'በሂደት',
      completed: 'ተጠናቋል',
      ended: 'አልቋል',
      resetFilters: 'ዳግም አስጀምር',
      beneficiaries: 'ተጠቃሚዎች',
      duration: 'የጊዜ ቆይታ',
    },
    app: {
      offlineBannerAria: 'ከመስመር ውጭ ሁኔታ መግለጫ',
      offlineActive: 'ከመስመር ውጭ ነዎት:',
      offlineMsg: 'የተቀመጡ ገጾችን እየተጠቀሙ ነው። ቅጾችና መዋጮዎች መስመር ሲመለስ ይላካሉ።',
      simulationBadge: 'ሙከራ',
      endSimulation: 'ዝጋ',
      dismissOfflineAria: 'መልዕክቱን ዝጋ',
      openAdraAiAria: 'ADRA AI ክፈት',
    },
    header: {
      chooseLangTitle: 'ቋንቋ ይምረጡ',
      selectLangAria: 'ቋንቋ ይምረጡ',
      toggleMenuAria: 'ማውጫ ክፈት',
      changeLangBtn: 'ቀይር',
      megaTitle: 'ዋና የፕሮግራም ምሰሶዎች እና ስራዎች',
      megaHint: 'ዝርዝር ለማየት ይጫኑ',
      cleanWaterLink: '• ንጹህ ውሃና ሳኒቴሽን',
      greenEnergyLink: '• አረንጓዴ ኃይል ቲቪኢቲ',
      peaceBuildingLink: '• የሰላም ግንባታ',
      allSevenAreas: 'ሁሉም 7 ዘርፎች',
      pillars: {
        educationSub: 'SEAQE II እና የሴቶች ት/ት',
        educationMetric: '85,000+ ተማሪዎች',
        healthSub: 'ስነ-ምግብ እና የእናቶች ክብካቤ',
        healthMetric: '310,000+ ታክመዋል',
        livelihoodSub: 'የሶላር መስኖ እና VSLA',
        livelihoodMetric: '68,000+ አርሶ አደር',
        disasterSub: 'የ72-ሰዓት እርዳታ እና ጥሬ ገንዘብ',
        disasterMetric: '550,000+ ተደርሷል',
      },
    },
    footer: {
      purposeLead: '"ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ በቅንነት ማገልገል።" — ከ1982 ዓ.ም ጀምሮ ንጹህ ውሃ፣ ጤና፣ ትምህርት እና የአደጋ ምላሽ የሚያቀርበው የአድራ ኢትዮጵያ ይፋዊ ገጽ።',
      proclamation: 'በሲቪል ማህበረሰብ ድርጅቶች አዋጅ #1113/2019 የተመዘገበ',
      acsoInfo: 'የACSO ምዝገባ ምስክር ወረቀት ቁጥር 2049 · 42+ ዓመታት በኢትዮጵያ',
      addressPhone: 'ራስ ደስታ ዳምጠው መንገድ፣ አዲስ አበባ · ስልክ: +251-115-512212',
      programsHeading: 'ፕሮግራሞች',
      programsLinks: [
        'ንጹህ ውሃ እና ሳኒቴሽን',
        'ትምህርት እና ህጻናት ጥበቃ',
        'ግብርና እና የምግብ ዋስትና',
        'የማህበረሰብ ስነ-ምግብ ህክምና',
        'አረንጓዴ ኃይል ቲቪኢቲ II',
        'የአደጋ ጊዜ ምላሽ እና እርዳታ',
        'የሰላም ግንባታና ትስስር',
      ],
      institutionalHeading: 'ተቋማዊ መረጃ',
      institutionalLinks: [
        'ታሪካችን ከ1982 ጀምሮ',
        'የስራ ቦታዎች (8 ክልሎች)',
        'የፕሮጀክቶች ማውጫ',
        'ግልጽ ጨረታዎች እና RFP',
        'ክፍት የስራ ማስታወቂያዎች',
        'ዓመታዊ ሪፖርቶች እና ኦዲት',
      ],
      updatesHeading: 'የመስክ ዜናዎች',
      updatesBlurb: 'የሩብ ዓመት የስራ ዘገባዎችን እና የተረጋገጡ የኦዲት ውጤቶችን በቀጥታ ያግኙ።',
      subscribedMsg: 'እናመሰግናለን! ተመዝግበዋል።',
      emailPlaceholder: 'name@email.com',
      subscribeBtn: 'ዜናዎችን ይቀበሉ',
      directGiftBtn: 'ቀጥታ እርዳታ ይስጡ',
      copyright: 'አድራ ኢትዮጵያ (ADRA)። መብቱ በህግ የተጠበቀ ነው።',
      safeguarding: 'የደህንነት ፖሊሲ',
      whistleblower: 'የታማኝነት ጥቆማ',
      privacy: 'የግላዊነት መመሪያ',
    },
    hero: {
      carouselAria: 'የአድራ ኢትዮጵያ የመስክ ስራዎች ማሳያ',
      prevSlideAria: 'ቀዳሚ ስላይድ',
      nextSlideAria: 'ቀጣይ ስላይድ',
      pauseAria: 'ማጫወት አቁም',
      resumeAria: 'ማጫወት ቀጥል',
      goToSlidePrefix: 'ወደ ስላይድ ሂድ',
    },
    wellbeing: {
      eyebrow: 'ይፋዊ የአድራ መዋቅር',
      corePurposeLabel: 'ዋነኛ አላማችን',
      svgLine1: 'የግለሰብ እና',
      svgLine2: 'የማህበረሰብ',
      svgLine3: 'ደህንነት',
      educationVertex: 'ትምህርት',
      healthVertex: 'ጤና',
      livelihoodsVertex: 'ዘላቂ ኑሮ',
      vertexHint: 'መሰረታዊ ምሰሶውን ለማየት ማንኛውንም ጫፍ ይጫኑ',
      interventionsLabel: 'ቁልፍ ስትራቴጂካዊ ስራዎች:',
      footerNote: 'ለተሟላ ሰብአዊ ክብር ከጤና እና ዘላቂ ኑሮ ጋር የተሳሰረ',
      viewDossier: 'ሙሉ መረጃውን ይመልከቱ',
      strengthsHeading: 'አራት ተቋማዊ ጥንካሬዎች',
    },
    whoWeAre: {
      sectionsPrefix: 'ክፍሎች:',
      categoriesLabel: 'ዘርፎች:',
      allTiersBtn: 'ሁሉም 5 እርከኖች (20)',
      membersCount: '4 አባላት',
      subLabels: {
        aboutUs: 'ስለ እኛ',
        ourHistory: 'ታሪካችን',
        leadership: 'አመራር',
        governance: 'አስተዳደር',
      },
      aboutP1: 'አድራ ኢትዮጵያ በዓለም አቀፍ ደረጃ በ130+ አገሮች የሚንቀሳቀሰው የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) የኢትዮጵያ ቢሮ ነው። ከዘር፣ ሃይማኖት ወይም ፖለቲካ ነፃ በሆነ መልኩ ለሁሉም ማህበረሰቦች አስቸኳይ እርዳታና ዘላቂ ልማት እናቀርባለን።',
      aboutP2: 'ሁሉም ሰው በክብር እንዲኖር የሰውን ልጅ በቅንነት ለማገልገል ባለን አላማ በመመራት፤ ፕሮግራሞቻችን የአደጋ አስተዳደር፣ ምግብ ዋስትና፣ ንጹህ ውሃ፣ ጤናና ስነ-ምግብ እንዲሁም አካታች ትምህርትን ያካትታሉ።',
      values: {
        justiceTitle: 'ፍትህ',
        justiceBadge: 'እሴት 1',
        justiceDesc: 'ለተገለሉ ወገኖች መሟገት፣ ህጻናትን መጠበቅ እና መሰረታዊ ሀብቶች በፍትሃዊነት እንዲከፋፈሉ ማረጋገጥ።',
        compassionTitle: 'ርህራሄ',
        compassionBadge: 'እሴት 2',
        compassionDesc: 'በድርቅ፣ በጎርፍ ወይም በመፈናቀል ወቅት በሰብዓዊ አክብሮት፣ በፍቅርና በፍጥነት ያለምንም ቅድመ-ሁኔታ መድረስ።',
        loveTitle: 'ፍቅር',
        loveBadge: 'እሴት 3',
        loveDesc: 'ከኢትዮጵያ ቤተሰቦች ጎን ለአስርት ዓመታት በመቆም ለዘላቂ ራስን መቻልና ሰላም መሳሪያዎችንና ክህሎትን ማስታጠቅ።',
      },
      history: {
        m1982Tag: '[1982]',
        m1982Title: 'አድራ በኢትዮጵያ ስራ ጀመረ',
        m1982Desc: 'በወሎ እና አሳይታ በተከሰተው ድርቅ ምላሽ በመስጠት በለገጣፎ መጠለያ ከፍቶ ምግብና ህክምና አቀረበ።',
        m1992Tag: '[1992]',
        m1992Title: 'የልማት ፕሮግራሞች መስፋፋት እና የአዲስ አበባ ዋና መስሪያ ቤት',
        m1992Desc: 'የኢትዮጵያ መንግስት ለአድራ የእርዳታ ስራ እውቅና በመስጠት በቂርቆስ ክፍለ ከተማ ዋና መስሪያ ቤት መሬት ሰጠ።',
        m2006Tag: '[2006]',
        m2006Title: 'በሶማሌ ክልል የማህበረሰብ ስነ-ምግብ ህክምና (CTC) ፈር ቀዳጅ',
        m2006Desc: 'ከUSAID ጋር በመተባበር በኬላፎ እና ጎዴ ከ30,000 በላይ ህጻናትን በቤት ውስጥ ህክምና መታደግ ተቻለ።',
        mNowTag: '[አሁን]',
        mNowTitle: 'አረንጓዴ ኃይል ቲቪኢቲ እና የሶላር ውሃ በ8 ክልሎች',
        mNowDesc: 'በ100% ኢትዮጵያዊ አመራር በዓመት ከ1.6 ሚሊዮን በላይ ተጠቃሚዎችን የሚያገለግል የሶላር ውሃና ስልጠና ይሰጣል።',
      },
      governance: {
        heading: 'አስተዳደር እና ህጋዊ ተገዢነት',
        legalText: 'አድራ ኢትዮጵያ በሲቪል ማህበረሰብ ድርጅቶች ባለስልጣን (ACSO) በምስክር ወረቀት ቁጥር 2049 እና በአዋጅ 1113/2019 መሰረት ከ1982 ዓ.ም ጀምሮ ለ42+ ዓመታት በህጋዊነት ይሰራል።',
        officeBannerLabel: 'ብሔራዊ ማስተባበሪያ ቢሮ:',
        officeBannerText: 'ራስ ደስታ ዳምጠው መንገድ፣ አዲስ አበባ · +251-115-512212 · 89 ሰራተኞች (15 ዋና ቢሮ፣ 74 መስክ)',
        commitmentsLabel: 'የታማኝነት ቁርጠኝነቶች:',
        bullets: [
          'በተመሰከረላቸው ገለልተኛ ኦዲተሮች የሚከናወን ዓመታዊ የፋይናንስ ኦዲት።',
          'የማህበረሰብ ተጠቃሚነትን ለማሳደግ ከ92.4% በላይ በጀት በቀጥታ ለፕሮግራም ይውላል።',
          'በፆታዊ ብዝበዛ፣ ጥቃት እና ትንኮሳ (PSEAH) ላይ ዜሮ ትዕግስት።',
          'ለሰራተኞች እና ለተጠቃሚዎች ሚስጥራዊ የጥቆማ አቀባበል ስርዓት።',
        ],
      },
    },
    whatWeDo: {
      kicker: 'ዋና ልማት እና እርዳታ · ምን እንሰራለን',
      bannerTitle: 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ ማገልገል',
      bannerSubtitle: 'በትምህርት፣ በጤና እና በዘላቂ ኑሮ ዘርፎች ፈጣን የአደጋ ምላሽ የተደገፈ የማህበረሰብ ደህንነትን ማረጋገጥ።',
      exploreCta: 'ዋና ፕሮግራሞችን ይዩ',
      pillarsEyebrow: 'ዋና የሰብዓዊ እና የልማት ምሰሶዎች',
      pillarsTitle: 'ሰባት ቴክኒካዊ ምሰሶዎች፣ አንድ የክብር ቁርጠኝነት',
      pillarsSubtitle: 'የ42 ዓመታት የነፍስ አድን ስራዎቻችንን፣ የተረጋገጡ የምህንድስና ስኬቶችን እና ኦዲት የተደረጉ ውጤቶችን ይመልከቱ።',
      tabs: {
        all: 'ሁሉም',
        wash: 'WASH (20+ ዓመት)',
        health: 'ጤናና ስነ-ምግብ',
        livelihood: 'ግብርናና ኑሮ',
        education: 'ትምህርትና TVET',
        disaster: 'የአደጋ ምላሽ',
        energy: 'ታዳሽ ኃይል',
        peace: 'የሰላም ግንባታ',
      },
      crossEyebrow: 'አቋራጭ ጉዳዮች እና ተቋማዊ ጥበቃዎች',
      crossTitle: 'በእያንዳንዱ ፕሮጀክት የተካተተ የአካባቢ ጥበቃ እና የፆታ እኩልነት',
      crossSubtitle: 'ሁሉም 15 ፕሮጀክቶች የተፈጥሮ ሀብት እድሳትን እና በሴቶች የሚመራ የማህበረሰብ አስተዳደርን ያረጋግጣሉ።',
      envTitle: 'የአካባቢ ጥበቃ እና የአየር ንብረት እርምጃ',
      envSub: 'የስነ-ምህዳር እድሳት እና ንጹህ ኃይል',
      envIntro: 'አድራ የመሬት መራቆትን እና የደን መጨፍጨፍን ከማህበረሰቡ ጋር በመሆን ይከላከላል:',
      envBullets: [
        { title: 'ኦርጋኒክ ማዳበሪያ:', desc: 'አርሶ አደሮችና ትምህርት ቤቶች የተራቆተ አፈርን በተፈጥሮ ማዳበሪያ እንዲያድሱ ማሰልጠን።' },
        { title: 'ኃይል ቆጣቢ ምድጃ:', desc: 'የማገዶ ፍጆታን በ60% የሚቀንሱ ምርጥ እና ትክክል ምድጃዎችን ማሰራጨት።' },
        { title: 'ተፋሰስ እና ችግኝ:', desc: 'በሶላር የውሃ ነጥቦች ዙሪያ ሀገር በቀል ዛፎችን በመትከል አፈርን መጠበቅ።' },
        { title: 'የሶላር ሽግግር:', desc: 'ከ288 በላይ ጥልቅ ጉድጓዶችን ከናፍታ ወደ ዜሮ-ልቀት ሶላር ፓምፖች መቀየር።' },
      ],
      genderTitle: 'የስርዓተ-ፆታ እኩልነት እና አካታችነት',
      genderSub: 'የሴቶች አመራር እና የአካል ጉዳተኞች ተደራሽነት',
      genderIntro: 'የፆታ እኩልነትን በሁሉም የፕሮጀክት አመራር እና የሀብት ክፍፍል ውስጥ በተግባር ማረጋገጥ:',
      genderBullets: [
        { title: '50%+ የሴቶች WASHCo አመራር:', desc: 'ሴቶች በአካባቢው የውሃ አስተዳደር ቦርድ ውስጥ ቁልፍ ሚና ይጫወታሉ።' },
        { title: 'የሴቶች የንብረት ድጋፍ:', desc: 'ለሴት የቤተሰብ አስተዳዳሪዎች እርጉዝ ፍየሎችንና የዶሮ እርባታ ፓኬጆችን መስጠት።' },
        { title: 'የንጽህና ክብር:', desc: 'ከ85+ በላይ ትምህርት ቤቶች የሴቶች መጸዳጃ ክፍሎችንና ንጽህና ቁሳቁስ መገንባት።' },
        { title: 'አካታችነት (TOFI):', desc: 'በትምህርት ቤቶች የዊልቸር መወጣጫዎችን፣ ብሬል መጽሐፍትንና አካታች መሳሪያዎችን ማሟላት።' },
      ],
      modalFlagshipBadge: 'አድራ ኢትዮጵያ · ዋና ምሰሶ',
      tabOverview: 'አጠቃላይ ስትራቴጂ',
      tabImpact: 'ቁልፍ ስራዎች እና አሃዝ',
      tabStory: 'የአይን ምስክርነት',
      narrativeLabel: 'የፕሮግራም ዝርዝር',
      verifiedInterventions: 'የተረጋገጡ ስትራቴጂካዊ ስራዎች',
      activeWoredasLabel: 'ንቁ ወረዳዎች',
      partnersLabel: 'አጋር ለጋሾች እና ተቋማት',
      supportTelebirrBtn: 'ይህንን ፕሮግራም በTeleBirr ወይም CBE ይደግፉ',
      closeDossierBtn: 'ዝጋ',
    },
    whereWeWork: {
      kicker: 'የጂአይኤስ ካርታ ስርጭት · የስራ ቦታዎች',
      bannerSubtitleTemplate: 'በ{region} ውስጥ የሚከናወኑ የማህበረሰብ ስራዎች። ቀጥታ አሃዞችን፣ ወረዳዎችን እና የሶላር ውሃ ጣቢያዎችን ይመልከቱ።',
      gisSubheading: 'በይነተገናኝ ክልላዊ GIS ካርታ',
      gisHeading: 'ቀጥታ ስራዎች እና የመስክ ውጤቶች',
      gisHint: 'ዝርዝሩን በግራ በኩል ለማየት ነጥቦቹን ይንኩ',
      fieldHubLabel: 'የመስክ ማስተባበሪያ ማዕከል:',
      activeOpsBadge: 'ንቁ ስራዎች',
      ourWorkInPrefix: 'ስራችን በ',
      statBeneficiaries: 'ተጠቃሚዎች',
      statActiveProjects: 'ንቁ ፕሮጀክቶች',
      statOngoingUnit: 'በሂደት',
      statSolarWells: 'የሶላር ጉድጓድ',
      statSchemesUnit: 'ጣቢያዎች',
      statWoredas: 'ወረዳዎች',
      statDistrictsUnit: 'ወረዳዎች',
      sectorsHeadingPrefix: 'በዚህ ክልል የሚሰሩ ዘርፎች:',
      currentProjectsLabel: 'ወቅታዊ የመስክ ፕሮጀክቶች',
      strategicInterventionsLabel: 'ስትራቴጂካዊ የመስክ ስራዎች',
      supportRegionPrefix: 'ፕሮጀክቶችን ይደግፉ በ',
      sectorButtons: {
        emergency: 'የአደጋ ጊዜ አስተዳደር',
        foodSecurity: 'የምግብ ዋስትና እና ኑሮ',
        wash: 'ውሃ፣ ንፅህናና ሳኒቴሽን',
        health: 'ጤና እና ስነ-ምግብ',
        education: 'ትምህርት እና ት/ቤቶች',
        economic: 'ኢኮኖሚ እድገት እና TVET',
      },
    },
    gisMap: {
      hudTitle: 'የአድራ ኢትዮጵያ GIS ስራዎች',
      modeProjects: '15 ይፋዊ ፕሮጀክቶች',
      modeRegions: '7 ክልላዊ ማዕከላት',
      totalProjectsCount: '15 ፕሮጀክቶች',
      activeDoneRatio: '(10 ንቁ፣ 5 የተጠናቀቁ)',
      beneficiariesShort: 'ተጠቃሚዎች',
      regionsCountLabel: '7',
      regionsShort: 'ክልሎች',
      projectNumPrefix: 'ፕሮጀክት #',
      targetLocationLabel: 'የስራ ቦታዎችና ወረዳዎች',
      goalLabel: 'የፕሮጀክት ግብ / አላማ',
      quickSelectorLabel: 'ፈጣን የፕሮጀክት መራጭ:',
      fifteenOps: '15 ስራዎች',
      quickAct: 'ንቁ',
      quickEnded: 'አልቋል',
      regionalHubBadge: 'ክልላዊ የመስክ ማዕከል',
      capitalLabel: 'ዋና ከተማ:',
      statBeneficiaries: 'ተጠቃሚዎች',
      statProjects: 'ፕሮጀክቶች',
      statSolarWells: 'የሶላር ጉድጓድ',
      statWoredas: 'ወረዳዎች',
      projectsOperatingLabel: 'በዚህ ክልል የሚገኙ ፕሮጀክቶች:',
      zoomPrompt: '* ዝርዝሩን ለማየት ነጥቡን ይጫኑ',
      resetViewBtn: 'ካርታ ዳግም አሳይ',
      filterLabel: 'አጣራ:',
      filterAll15: 'ሁሉ (15)',
      filterOngoing10: 'በሂደት (10)',
      filterCompleted5: 'ተጠናቀቁ (5)',
      zoomInAria: 'ካርታ አቅርብ',
      zoomOutAria: 'ካርታ አርቅ',
      resetMapAria: 'ካርታ ወደ መነሻ መልስ',
      layersMenuAria: 'የካርታ ገጽታ መምረጫ',
      layersMenuTitle: 'የGIS ካርታ ገጽታዎች',
      layers: {
        satellite: { label: 'ሳተላይት ካርታ (GIS)', sub: 'ከፍተኛ ጥራት ምስል' },
        terrain: { label: 'የመሬት አቀማመጥ', sub: 'ከፍታ እና ተራሮች' },
        carto: { label: 'ንጹህ ሰብዓዊ ካርታ', sub: 'Voyager GIS ቬክተር' },
        osm: { label: 'OpenStreetMap', sub: 'መደበኛ ካርታ' },
      },
      guideTitle: 'የካርታ መመሪያ',
      selectedProjectLegend: 'የተመረጠ ፕሮጀክት (#1–#15)',
      ongoingLegend: 'በሂደት ላይ ያሉ ስራዎች',
      completedLegend: 'በቅርቡ የተጠናቀቁ',
      activeHubLegend: 'ንቁ ማዕከል',
      baseLegend: 'ክልላዊ መነሻ',
    },
    projects: {
      breadcrumbSummary: 'ይፋዊ የፕሮጀክቶች ማጠቃለያ',
      kicker: 'የአድራ ኢትዮጵያ የፕሮጀክቶች መዝገብ',
      badges: {
        documented: '15 የተመዘገቡ ፕሮጀክቶች',
        tables: '7 ክልላዊ ሰንጠረዦች',
        activeCompleted: '10 ንቁ እና 5 የተጠናቀቁ',
        beneficiaries: '345,000+ ተጠቃሚዎች',
      },
      tabRegionalTables: 'ክልላዊ ሰንጠረዦች (7 ክልሎች)',
      tabFullTable: 'ሙሉ ማጠቃለያ ሰንጠረዥ',
      tabCards: 'የካርድ ዕይታ',
      allStatus: 'ሁሉም ሁኔታ',
      active10: 'ንቁ (10)',
      completed5: 'አልቋል (5)',
      searchPlaceholder: 'ፕሮጀክት፣ ወረዳ ወይም ግብ ይፈልጉ...',
      sectorLabel: 'ዘርፍ:',
      allRegions15: 'ሁሉም 7 ክልሎች (15)',
      projectSingular: 'ፕሮጀክት',
      projectPlural: 'ፕሮጀክቶች',
      listedWord: 'ተዘርዝሯል',
      idsPrefix: 'መለያ:',
      tableHeaders: {
        no: 'ተ.ቁ',
        sector: 'ዘርፍ',
        nameLoc: 'የፕሮጀክት ስም እና ቦታ',
        objective: 'የፕሮጀክት ግብ / አላማ',
        woredas: 'ወረዳዎች እና ከተሞች',
        duration: 'የጊዜ ቆይታ',
        beneficiaries: 'ተጠቃሚዎች',
        status: 'ሁኔታ',
        dossier: 'ዝርዝር',
        action: 'ተግባር',
      },
      emptyGroup: 'በዚህ ክልል ከተመረጡት ማጣሪያዎች ጋር የሚመሳሰል ፕሮጀክት የለም።',
      masterRegistryTitle: 'የአድራ ኢትዮጵያ ዋና የፕሮጀክቶች መዝገብ',
      showingCountTemplate: 'ከ{total} የተረጋገጡ ፕሮጀክቶች {shown} እየታዩ ነው',
      officialRecordBadge: 'ይፋዊ የሀገር ቢሮ መዝገብ',
      viewDossierBtn: 'ዝርዝር ይመልከቱ',
      emptySearchTitle: 'ከፍለጋዎ ጋር የሚዛመድ ፕሮጀክት አልተገኘም',
      emptySearchSub: 'ዘርፉን ወይም የፍለጋ ቃሉን በመቀየር ይሞክሩ።',
      modalGoalTitle: 'የፕሮጀክት ግብ እና አላማ',
      modalRegionArea: 'ክልል / ዋና ቦታ',
      modalBeneficiariesNum: 'ተጠቃሚዎች',
      modalWoredasTitle: 'የትኩረት ወረዳዎች እና ከተሞች',
      modalPartnersTitle: 'አጋር እና ለጋሽ ተቋማት',
      modalHardTitle: 'የመሰረተ ልማት ግንባታዎች',
      modalMaterialsTitle: 'የቁሳቁስ አቅርቦቶች',
      modalSoftTitle: 'የአቅም ግንባታ ስልጠናዎች',
      modalMilestonesTitle: 'ዋና ውጤቶች እና ስኬቶች',
      supportProgramBtn: 'ይህን ፕሮግራም ይደግፉ',
      closeDossierBtn: 'ዝጋ',
    },
    impact: {
      kicker: 'የተገመገሙ ውጤቶች እና አሃዞች',
      bannerTitle: 'በመላው ኢትዮጵያ የሚለካ ተጨባጭ ለውጥ',
      bannerSubtitle: 'በንጹህ ውሃ ተደራሽነት፣ በህጻናት ስነ-ምግብ እና በቤተሰብ ገቢ ላይ የተመዘገቡ መሻሻሎችን የሚያሳዩ የተረጋገጡ መረጃዎች።',
      exploreMetricsBtn: 'የተረጋገጡ አሃዞችን ይዩ',
      spendRatioBadge: '92.4% ለፕሮግራም · CHS እና EDRMC የተረጋገጠ',
      leftEyebrow: 'ቀጥተኛ ተጠያቂነት',
      leftTitle: 'የእርስዎ ልግስና በኢትዮጵያ የሚገነባውን ለውጥ ይመልከቱ',
      leftDesc: 'አድራ ኢትዮጵያ አነስተኛ የአስተዳደር ወጪ ስለሚጠቀም ከልግስናዎ 92% በላይ በቀጥታ ለማህበረሰቡ ይደርሳል።',
      leftTaxNote: 'ይፋዊ የቀረጥ ደረሰኝ እና ዓመታዊ የኦዲት ሪፖርት ይቀርባል',
      estimatorTitle: 'የውጤት ማስያ',
      marketRatePrefix: 'የምንዛሬ ተመን:',
      marketRateFloat: '(ይፋዊ ገበያ)',
      nbeBadge: 'NBE ተመን',
      outcomeLabel: 'ቀጥተኛ ሰብዓዊ ውጤት',
      donateCtaTemplate: '{amount} ይለግሱ',
      currencyEtbLabel: 'ብር (ETB)',
      currencyUsdLabel: 'USD ($)',
    },
    stories: {
      kicker: 'ድምፆች ከመስክ',
      bannerTitle: 'እውነተኛ ህይወት፣ የጽናት ጉዞዎች',
      bannerSubtitle: 'በመላው ኢትዮጵያ ከሚገኙ የልማት ጣቢያዎች የተሰነዱ የመጀመሪያ ሰው ታሪኮችና የመስክ ምስክርነቶች።',
      readBtn: 'የመስክ ዘገባዎችን ያንብቡ',
      featuredEyebrow: 'ተለይተው የቀረቡ ዘገባዎች',
      latestHeading: 'ወቅታዊ የመስክ ታሪኮች',
      allStoriesBtn: 'ሁሉም ታሪኮች',
      supportResilienceBtn: 'ማህበረሰቡን ይደግፉ',
    },
    blogs: {
      breadcrumbCurrent: 'ጦማር እና የመስክ ዘገባዎች',
      kicker: 'የመስክ መጽሔት እና ዘገባዎች · ጦማር',
      bannerTitle: 'የለውጥ፣ የፈጠራ እና የሰብአዊነት ዘገባዎች',
      bannerSubtitle: 'በመላው ኢትዮጵያ በአድራ የመስክ ሰራተኞች የተዘጋጁ ቴክኒካዊ ሪፖርቶች እና የግንባር ቀደም ታሪኮች።',
      searchPlaceholder: 'ጦማሮችን እና ርዕሶችን ይፈልጉ...',
      emptyTitle: 'ከፍለጋዎ ጋር የሚዛመድ ጦማር የለም',
      emptySub: 'ማጣሪያውን ወይም የፍለጋ ቃሉን ያጽዱ',
      readBlogBtn: 'ሙሉውን ያንብቡ',
      modalHeader: 'የአድራ ኢትዮጵያ ዘገባ',
      prevTitle: 'ቀዳሚ ጦማር',
      nextTitle: 'ቀጣይ ጦማር',
      copyTitle: 'አገናኝ ቅዳ',
      topicTagsLabel: 'የርዕስ መለያዎች:',
      ctaEyebrow: 'በመላው ኢትዮጵያ ማህበረሰቦችን ያብቁ',
      ctaHeadingPrefix: 'እንደዚህ ያሉ ስራዎችን ይደግፉ:',
      ctaDesc: 'እያንዳንዱ መዋጮ በTeleBirr፣ CBE Birr እና ካርድ በቀጥታ ማህበረሰብ-መር መፍትሄዎችን ይደግፋል።',
      ctaBtn: 'ለዚህ ፕሮግራም ይለግሱ',
    },
    aiForGood: {
      kicker: 'AI ለበጎ',
      bannerTitle: 'ሰዎችን በክብር የሚያገለግል ቴክኖሎጂ',
      bannerSubtitle: 'አድራ ኢትዮጵያ አርቴፊሻል ኢንተለጀንስንና መረጃዎችን በጥንቃቄ፣ በግልጽነት እና ማህበረሰቡን ማዕከል ባደረገ መልኩ ይጠቀማል።',
      chatBtn: 'ከADRA AI ጋር ይወያዩ',
      approachTitle: 'አካሄዳችን',
      approachBody: 'አርቴፊሻል ኢንተለጀንስ የሰብአዊ ቡድኖች ፍላጎቶችን በፍጥነት እንዲረዱና ሀብትን በአግባቡ እንዲጠቀሙ ይረዳል። ነገር ግን በግላዊነትና ፍትሃዊነት ላይ ስጋቶች አሉት። አድራ እነዚህን መሳሪያዎች የሚጠቀመው ስጋቶቹ መቆጣጠር ሲቻሉ ብቻ ነው።',
      principlesTitle: 'መርሆዎቻችን',
      principlesSubtitle: 'ስድስት ህጎች ስለ ቴክኖሎጂ የሚደረጉ ውሳኔዎችን ይመራሉ።',
    },
    tenders: {
      kicker: 'አጋርነት፣ ስራ እና ጨረታዎች',
      bannerTitle: 'ጨረታዎች፣ የስራ እድሎች እና ህትመቶች',
      bannerSubtitle: 'ግልጽ አስተዳደር እና ብቃት-ተኮር ቅጥር: ሁሉም ክፍት ጨረታዎች፣ የስራ ማስታወቂያዎች እና የተመሰከሩ ህትመቶች ለህዝብ ክፍት ናቸው።',
      tabTenders: 'ጨረታዎች እና RFP',
      tabCareers: 'ክፍት የስራ እድሎች',
      tabPublications: 'ሪፖርቶች እና መመሪያዎች',
      submissionDeadline: 'የማብቂያ ቀን:',
      closingDate: 'ማብቂያ:',
      viewTenderBtn: 'ጨረታ ይዩ',
      applyBtn: 'አሁን ያመልክቱ',
      viewAbstractBtn: 'ማጠቃለያ ይዩ',
      downloadPdfBtn: 'PDF አውርድ',
      locationPrefix: 'ቦታ:',
      deadlinePrefix: 'ማብቂያ:',
      requirementsTitle: 'አስፈላጊ መስፈርቶች እና ብቃቶች:',
      requestBidPackage: 'ይፋዊ የጨረታ ሰነድ ይጠይቁ',
      submitCandidateEoi: 'የስራ ማመልከቻ ያስገቡ',
      ackTitle: 'ማመልከቻ ተመዝግቧል',
      ackBodyTemplate: 'መለያ ቁጥር ተመዝግቧል። መመሪያዎች ወደ {email} ተልከዋል።',
      bidderLabel: 'የድርጅት / ተጫራች ስም',
      fullNameLabel: 'ሙሉ ስም',
      namePlaceholder: 'ለምሳሌ፡ አላዛር መንግስቱ',
      emailLabel: 'ይፋዊ ኢሜይል',
      emailPlaceholder: 'contact@domain.et',
      requestBidBtn: 'ሰነድ ይጠይቁ',
      submitAppBtn: 'ማመልከቻ ላክ',
      pubNoticeLabel: 'የህትመት ማሳሰቢያ:',
      pubNoticeBody: 'ሁሉም የአድራ ኢትዮጵያ ቴክኒካዊ መመሪያዎች እና የፋይናንስ ኦዲቶች ለተመራማሪዎች እና አጋሮች በነጻ ክፍት ናቸው።',
      confirmDownloadBtn: 'ፋይል አውርድ',
      downloadStartedMsg: 'ሰነዱ ለማውረድ ተዘጋጅቷል።',
    },
    contact: {
      eyebrow: 'ግንኙነት',
      title: 'አድራ ኢትዮጵያን ያግኙ',
      subtitle: 'ለአጋርነት፣ ለእርዳታ፣ ለሚዲያ ጥያቄ ወይም ዋና ቢሯችንን ለመጎብኘት የብሔራዊ ማስተባበሪያ ቡድናችንን ያነጋግሩ።',
      hqTitle: 'ብሔራዊ ዋና መስሪያ ቤት',
      hqSub: 'አዲስ አበባ ማስተባበሪያ ቢሮ',
      addressMain: 'ራስ ደስታ ዳምጠው መንገድ፣ አዲስ አበባ',
      addressSub: 'ቂርቆስ ክ/ከተማ · ከኢትዮጵያ ዩኒየን ግቢ አጠገብ · ፖ.ሳ.ቁ 145',
      hoursText: 'ሰኞ–ሐሙስ፡ 8:30–5:30 · አርብ፡ 8:30–1:30',
      registeredBadge: 'የተመዘገበ መንግስታዊ ያልሆነ ድርጅት · ቁጥር 2049',
      hubsTitle: 'የክልል ማስተባበሪያ ቢሮዎች',
      hubs: {
        somaliTitle: 'ሶማሌ ክልል',
        somaliSub: 'ጎዴ እና ኬላፎ ጣቢያዎች',
        oromiaTitle: 'ኦሮሚያ ክልል',
        oromiaSub: 'አዳማ እና ምስራቅ ሐረርጌ',
        sidamaTitle: 'ሲዳማ ክልል',
        sidamaSub: 'ሐዋሳ ፕሮጀክት ቢሮ',
        tigrayAmharaTitle: 'ትግራይ እና አማራ',
        tigrayAmharaSub: 'መቐለ እና ደሴ ማዕከላት',
      },
      formTitle: 'ይፋዊ መልዕክት ይላኩ',
      formSub: 'የኮሙኒኬሽን ቡድናችን በ24–48 የስራ ሰዓታት ውስጥ ምላሽ ይሰጣል።',
      sentTitle: 'መልዕክትዎ ደርሷል',
      sentBodyTemplate: 'እናመሰግናለን፣ {name}። ስለ {category} የላኩት ጥያቄ ለአድራ ኢትዮጵያ ዋና ቢሮ ተላልፏል።',
      partnerDefault: 'አጋር',
      inquiryLabel: 'የጥያቄ አይነት',
      inquiries: {
        general: 'ጠቅላላ መረጃ እና ጥያቄ',
        partnership: 'ተቋማዊ አጋርነት እና ድጋፍ',
        procurement: 'ግዥ እና ጨረታ ጥያቄ',
        careers: 'የስራ እድል እና ሰው ኃይል',
        media: 'ሚዲያ እና ዘጋቢ ጥያቄዎች',
      },
      fullNameLabel: 'ሙሉ ስም',
      fullNamePlaceholder: 'ለምሳሌ፡ አልማዝ በቀለ',
      emailLabel: 'ኢሜይል',
      emailPlaceholder: 'almaz@org.et',
      phoneLabel: 'ስልክ (አማራጭ)',
      phonePlaceholder: '+251 9...',
      messageLabel: 'ዝርዝር መልዕክት',
      messagePlaceholder: 'ጥያቄዎን ወይም መልዕክትዎን እዚህ ይጻፉ...',
      submitBtn: 'መልዕክት ላክ',
    },
    donateModal: {
      closeAria: 'መስኮት ዝጋ',
      thankYouTemplate: 'እናመሰግናለን፣ {donor}!',
      generousDonor: 'ለጋሽ',
      ackSubtitle: 'ልግስናዎ በመላው ኢትዮጵያ ጠንካራ ማህበረሰቦችን በቀጥታ ይደግፋል።',
      receiptRef: 'የደረሰኝ ቁጥር:',
      contribAmount: 'መጠን:',
      designatedSector: 'የፕሮግራም ዘርፍ:',
      paymentGateway: 'መንገድ:',
      dateIssued: 'የተሰጠበት ቀን:',
      taxNote: 'አድራ ኢትዮጵያ በACSO (ቁጥር 2049) የተመዘገበ ነው። እርዳታው በአዋጅ 1113/2019 መሰረት ይከናወናል።',
      saveReceiptBtn: 'ደረሰኝ አስቀምጥ',
      receiptSavedMsg: 'ይፋዊ ደረሰኙ ተቀምጧል።',
      rateLabel: 'የምንዛሬ ተመን:',
      rateFloat: '(ይፋዊ ገበያ)',
      nbeVerified: 'NBE ተመን',
      oneTime: 'አንድ ጊዜ',
      monthly: 'በየወሩ',
      selectAmount: 'መጠን ይምረጡ',
      customPlaceholderPrefix: 'ሌላ መጠን በ',
      programAreaLabel: 'የፕሮግራም ዘርፍ',
      selectGateway: 'የክፍያ መንገድ',
      scanQrTab: 'QR ስካን',
      appCardTab: 'አፕ / ካርድ',
      telebirrTag: '#1 ኢት',
      telebirrSub: 'ኢትዮ ቴሌኮም',
      cbeTag: 'ባንክ',
      cbeSub: 'ንግድ ባንክ',
      stripeTag: 'ዓለም',
      stripeSub: 'ካርድ / Apple Pay',
      telebirrHeader: 'ቴሌብር ሞባይል',
      cbeHeader: 'ኢትዮጵያ ንግድ ባንክ',
      stripeHeader: 'Stripe ዓለም አቀፍ ክፍያ',
      scanCodeEnabled: 'QR ዝግጁ',
      howToScanPay: 'እንዴት ስካን እንደሚደረግ:',
      telebirrSteps: [
        'በስልክዎ TeleBirr መተግበሪያን ይክፈቱ',
        'Scan QR የሚለውን ይጫኑ',
        'ይህን ኮድ ስካን በማድረግ መጠኑን ይላኩ',
        'በሚስጥር ቁጥርዎ ያረጋግጡ',
      ],
      cbeSteps: [
        'CBE Mobile ወይም CBE Birr ይክፈቱ',
        'Scan to Pay ይምረጡ',
        'ይፋዊውን የአድራ QR ኮድ ስካን ያድርጉ',
        'ወደ ሂሳብ 1000012345678 ያረጋግጡ',
      ],
      merchantCodeLabel: 'ነጋዴ:',
      merchantShortCode: 'የአድራ የነጋዴ ቁጥር:',
      copyCode: 'ኮድ ቅዳ',
      copied: 'ተቀድቷል!',
      copyBtn: 'ቅዳ',
      launchTelebirr: 'TeleBirr ክፈት',
      dialTelebirrUssd: '*127# ይደውሉ',
      cbeAccountLabel: 'የCBE ሂሳብ:',
      cbeBranchLabel: 'አድራ ኢትዮጵያ፣ ቂርቆስ ቅርንጫፍ',
      openCbeApp: 'CBE ክፈት',
      dialCbeUssd: '*847# ይደውሉ',
      instantMobilePay: 'ፈጣን የሞባይል ክፍያ:',
      stripeMobileDesc: 'በስልክ ካሜራ ስካን በማድረግ በApple Pay፣ Google Pay ወይም ካርድ ይክፈሉ።',
      enterCardLink: 'ወይም የካርድ መረጃ እዚህ ያስገቡ →',
      cardNumberLabel: 'የካርድ ቁጥር',
      expiryLabel: 'ማብቂያ (ወር/ዓም)',
      cvcLabel: 'CVC ቁጥር',
      donorNameLabel: 'የለጋሽ ስም',
      donorNamePlaceholder: 'ዳዊት አለማየሁ',
      donorPhoneLabel: 'ስልክ ቁጥር',
      donorEmailLabel: 'ኢሜይል (አማራጭ)',
      confirmTemplate: '{amount} አረጋግጥ',
      securityFooter: 'የተረጋገጠ መንገድ · Stripe፣ CBE እና TeleBirr',
      sectors: {
        general: 'በጣም አስፈላጊ ለሆነ ቦታ (ቅድሚያ እርዳታ)',
        wash: 'ንጹህ ውሃ እና የሶላር ጉድጓዶች (WASH)',
        education: 'ትምህርት እና የሴቶች ተሳትፎ (SEAQE II)',
        health: 'ጤና እና የተመጣጠነ ምግብ ህክምና (CTC)',
        foodSecurity: 'የምግብ ዋስትና እና የጠብታ መስኖ',
        economicGrowth: 'አረንጓዴ ኃይል TVET ወጣቶች ማዕከል',
        emergency: 'የአደጋ ጊዜ ምላሽ እና እርዳታ',
        peaceBuilding: 'የሰላም ግንባታ እና ማህበራዊ ትስስር',
      },
    },
    qr: {
      telebirrTitle: 'ቴሌብር ክፍያ',
      telebirrSub: 'በTeleBirr አፕ ስካን ያድርጉ',
      cbeTitle: 'CBE Birr ክፍያ',
      cbeSub: 'በCBE ሞባይል አፕ ስካን ያድርጉ',
      stripeTitle: 'Stripe ሞባይል',
      stripeSub: 'ለApple Pay ወይም ካርድ ስካን ያድርጉ',
      telebirrQuickLabel: 'TeleBirr QR',
      cbeQrLabel: 'CBE Birr QR',
      stripeMobileLabel: 'Stripe QR',
    },
    chatbot: {
      welcome: 'ሰላም! እኔ የአድራ ኢትዮጵያ ADRA AI ነኝ። ስለ ሰባቱ የስራ ዘርፎች (የሰላም ግንባታን ጨምሮ)፣ የክልል ስራዎች፣ ከ1982 ዓ.ም ጀምሮ ስላለው ታሪክ፣ ስለ AI መርሆዎች ወይም በቴሌብር እና CBE ስለመለገስ መጠየቅ ይችላሉ።',
      verifiedBadge: 'የተረጋገጠ',
      headerSub: 'በአድራ ኢትዮጵያ መረጃዎች የተደገፈ',
      closeAria: 'ADRA AI ዝጋ',
      sourcePrefix: 'ምንጭ:',
      jumpToSection: 'ወደ ክፍሉ ሂድ',
      searchingText: 'የአድራ መረጃዎችን በመፈለግ ላይ...',
      suggestedLabel: 'ጥቆማዎች:',
      placeholder: 'ስለ ፕሮግራሞች፣ ክልሎች፣ ታሪክ ወይም እርዳታ ይጠይቁ...',
      sendAria: 'መልዕክት ላክ',
      footerNote: 'የአድራ ኢትዮጵያ AI ለበጎ መርሆዎችን (የሰው ቁጥጥር እና ግላዊነት) ያከብራል',
      fallbackReply: 'በአድራ ኢትዮጵያ መረጃ መሰረት በ8 ክልሎች ውስጥ በ7 ዋና ዘርፎች (WASH፣ ትምህርት፣ ምግብ ዋስትና፣ አደጋ ምላሽ፣ ጤና፣ TVET እና የሰላም ግንባታ) እንሰራለን። ስለ 1982 ታሪክ ወይም በTeleBirr (251911) እና CBE ስለመለገስ ይጠይቁ።',
      prompts: {
        donate: 'በTeleBirr/CBE መለገስ?',
        ai: '6ቱ የAI መርሆዎች?',
        somali: 'በሶማሌ ክልል ስራዎች?',
        wash: 'ንጹህ ውሃ እና WASH?',
        history: 'የአድራ ታሪክ ከ1982',
      },
    },
  },

  om: {
    common: {
      home: 'Mana',
      motto: 'Haqa. Gara-laafina. Jaalala.',
      countryOffice: 'WAAJJIRA BIYYAA',
      ethiopia: 'Ethiopia',
      photoCredit: 'Suuraa: © 2026 ADRA | ADRA Ethiopia',
      close: 'Cufaa',
      finish: 'Xumuri',
      cancel: 'Dhiisi',
      details: 'Balina',
      exploreArrow: 'Ilaali',
      readMore: 'Dubbisaa',
      active: 'Hojii',
      ongoing: 'Hojirra',
      completed: 'Xumurame',
      ended: 'Dhume',
      resetFilters: 'Haaraa Godhi',
      beneficiaries: 'Fayyadamtoota',
      duration: 'Yeroo',
    },
    app: {
      offlineBannerAria: 'Beeksisa toora-ala',
      offlineActive: 'Haala Toora-ala:',
      offlineMsg: 'Fuula kuufame ilaalaa jirtu. Unki fi gumaatni yeroo toorri deebiʼu ergamu.',
      simulationBadge: 'Yaalii',
      endSimulation: 'Dhaabi',
      dismissOfflineAria: 'Beeksisa cufaa',
      openAdraAiAria: 'ADRA AI Bani',
    },
    header: {
      chooseLangTitle: 'Afaan Filadhu',
      selectLangAria: 'Afaan Filadhu',
      toggleMenuAria: 'Menu Bani',
      changeLangBtn: 'Fili',
      megaTitle: 'Utubaalee Sagantaa fi Tarkaanfii',
      megaHint: 'Galmee ilaaluuf tuqaa',
      cleanWaterLink: '• Bishaan & WASH',
      greenEnergyLink: '• Anniisaa Soolaarii',
      peaceBuildingLink: '• Ijaarsa Nagaa',
      allSevenAreas: 'Kutaa 7',
      pillars: {
        educationSub: 'SEAQE II & Barnoota Shamar.',
        educationMetric: '85,000+ Baratan',
        healthSub: 'Nyaata & Kunuunsa (CTC)',
        healthMetric: '310,000+ Yaalaman',
        livelihoodSub: 'Jallisii Soolaarii & VSLA',
        livelihoodMetric: 'Qonnaa 68,000+',
        disasterSub: 'Deebii Saʼaatii 72 & Qarshii',
        disasterMetric: 'Deeggarsa 550K+',
      },
    },
    footer: {
      purposeLead: '"Namni hundi akkuma Waaqayyo yaadetti akka jiraatuuf namooma tajaajiluu." — Fuula ADRA Itoophiyaa bara 1982 irraa bishaan qulqulluu, fayyaa fi deebii balaa dhiyeessu.',
      proclamation: 'Labsii Dhaabbilee Hawaasa Siivilii #1113/2019tiin galmaaʼe',
      acsoInfo: 'Waraqaa Galmee ACSO Lakk: 2049 · Waggoota 42+ Itoophiyaatti',
      addressPhone: 'Daandii Raas Dastaa Daamxoo, Finfinnee · Bilbila: +251-115-512212',
      programsHeading: 'Sagantaalee',
      programsLinks: [
        'Bishaan & WASH',
        'Barnootaa fi Eegumsa',
        'Qonna fi Wabii Nyaataa',
        'Kunuunsa Fayyaa (CTC)',
        'Anniisaa Aduu TVET II',
        'Deebii Balaa Ariifataa',
        'Ijaarsa Nagaa & Tokkummaa',
      ],
      institutionalHeading: 'Dhaabbata',
      institutionalLinks: [
        'Seenaa Keenya 1982 Irraa',
        'Bakka Hojii (Naannoo 8)',
        'Galmee Pirojektootaa',
        'Caalbaasii fi RFP',
        'Carraawwan Hojii Banaa',
        'Gabaasa Waggaa fi Odiitii',
      ],
      updatesHeading: 'Oduu Dirree',
      updatesBlurb: 'Gabaasawwan kurmaanaa fi buʼaa odiitii mirkanaaʼan kallattiin Itoophiyaa irraa argadhaa.',
      subscribedMsg: 'Galatoomaa. Galmooftaniittu.',
      emailPlaceholder: 'name@email.com',
      subscribeBtn: 'Oduu Galmaaʼaa',
      directGiftBtn: 'Kallattiin Gargaari',
      copyright: 'ADRA Itoophiyaa. Mirgi hundi seeraan eegamedha.',
      safeguarding: 'Imaammata Eegumsaa',
      whistleblower: 'Iccitii Saaxiluu',
      privacy: 'Iccitii Eeguu',
    },
    hero: {
      carouselAria: 'Agarsiisa Hojii Dirree ADRA',
      prevSlideAria: 'Suuraa Duraa',
      nextSlideAria: 'Itti Aanu',
      pauseAria: 'Taphuu Dhaabi',
      resumeAria: 'Itti Fufi',
      goToSlidePrefix: 'Fuula deemi',
    },
    wellbeing: {
      eyebrow: 'Buʼuura Seeraa ADRA',
      corePurposeLabel: 'Kaayyoo Buʼuuraa',
      svgLine1: 'QANANII',
      svgLine2: 'NAMA FI',
      svgLine3: 'HAWAASAA',
      educationVertex: 'Barnoota',
      healthVertex: 'Fayyaa',
      livelihoodsVertex: 'Jireenya',
      vertexHint: 'Utubaa ilaaluuf fiixee tokko tuqaa',
      interventionsLabel: 'Tarkaanfiiwwan Ijoo:',
      footerNote: 'Kabaja namoomaaf Fayyaa fi Jireenya waliin hidhata',
      viewDossier: 'Galmee Guutuu Ilaali',
      strengthsHeading: 'Ciminaalee Dhaabbataa Afur',
    },
    whoWeAre: {
      sectionsPrefix: 'Kutaalee:',
      categoriesLabel: 'Ramaddii:',
      allTiersBtn: 'Sadarkaa 5 Hunda (20)',
      membersCount: 'Namoota 4',
      subLabels: {
        aboutUs: "Waa'ee",
        ourHistory: 'Seenaa ADRA',
        leadership: 'Hoggansa',
        governance: 'Bulchiinsa',
      },
      aboutP1: "ADRA Itoophiyaan waajjira biyyoolessaa ADRA addunyaa biyyoota 130 ol keessatti hojjetuuti. Sanyii, amantii, koorniyaa ykn siyaasa osoo hin ilaalin hawaasa Itoophiyaaf gargaarsa ariifataa fi misooma itti-fufaa dhiyeessina.",
      aboutP2: "Kaayyoo namni hundi akka Waaqayyo yaadetti akka jiraatu tajaajiluuf jedhuun hogganamuun; hojiiwwan balaa qolachuu, wabii nyaataa, bishaan (WASH), fayyaa fi barnoota hawaasa waliin ni raawwanna.",
      values: {
        justiceTitle: 'Haqa',
        justiceBadge: 'Safuu I',
        justiceDesc: 'Sagaleewwan dagatamaniif falmuu, daaʼimman eeguu fi qabeenyi buʼuuraa qixaan akka rabsamu gochuu.',
        compassionTitle: 'Mararfannaa',
        compassionBadge: 'Safuu II',
        compassionDesc: 'Yeroo ongea, lolaa ykn buqqaatii ulfina, jaalala fi ariitiidhaan gargaarsa haalduree malee dhiyeessuu.',
        loveTitle: 'Jaalala',
        loveBadge: 'Safuu III',
        loveDesc: 'Waggoota dheeraaf maatii Itoophiyaa cinaa dhaabbannee ogummaa fi meeshaalee of-dandaʼuu kennuu.',
      },
      history: {
        m1982Tag: '[1982]',
        m1982Title: 'ADRAn Itoophiyaatti jalqabe',
        m1982Desc: 'Bara ongea 1982 Walloo fi Asayitaatti deebii kennuuf Leegexaafoodhaan dawoo yeroo balaa banuun midhaan nyaataa fi yaala dhiyeesse.',
        m1992Tag: '[1992]',
        m1992Title: 'Babalʼina Sagantaa fi Waajjira Muummichaa Finfinnee',
        m1992Desc: 'Mootummaan gumaacha ADRA dinqisiifachuun Qirqoos keessatti lafa kenneef; kuusaa fi waajjirri biyyaalessaa ijaaraman.',
        m2006Tag: '[2006]',
        m2006Title: 'Kunuunsa Nyaata Madaalawaa Naannoo Somaaleetti (CTC)',
        m2006Desc: 'USAID waliin Qalafoo fi Goodetti yaala mana keessaa (CTC) jalqabsiisuun daaʼimman 30,000 ol duʼa irraa baraare.',
        mNowTag: '[AMMA]',
        mNowTitle: 'TVET Soolaarii fi Bishaan Qulqulluu Naannolee 8tti',
        mNowDesc: 'Hoggansa 100% Itoophiyaatiin leenjii soolaarii fi bishaan lafa jalaa waggaatti namoota miliyoona 1.6+ biraan gaʼaa jira.',
      },
      governance: {
        heading: 'Bulchiinsa fi Eegumsa Seeraa',
        legalText: 'ADRA Itoophiyaan Abbaa Taayitaa Dhaabbilee Hawaasa Siivilii (ACSO) jalatti Waraqaa Galmee Lakk. 2049 fi Labsii #1113/2019tiin waggoota 42+ oliif seeraan hojjata.',
        officeBannerLabel: 'Waajjira Biyyoolessaa:',
        officeBannerText: 'Daandii Raas Dastaa Daamxoo, Finfinnee · +251-115-512212 · Hojjettoota 89 (15 HQ, 74 Dirree)',
        commitmentsLabel: 'Kutannoo Amanamummaa:',
        bullets: [
          'Odiitii alaa waggaa dhaabbilee odiitii walabaa mirkanaaʼaniin gaggeeffamu.',
          'Baajata keessaa harki 92.4% ol kallattiin sagantaa hawaasaaf oola.',
          'Miidhaa saalaa fi haallaa daaʼimmanii (PSEAH) irratti obsa tokkollee dhabuu.',
          'Tooftaa iccitii saaxiltootaa hojjettootaa fi jiraattotaaf eegamu.',
        ],
      },
    },
    whatWeDo: {
      kicker: 'MISOOMA & DEEGGARSA · HOJIIWWAN',
      bannerTitle: 'Namni hundi akka Waaqayyo yaadetti haa jiraatu',
      bannerSubtitle: 'Barnoota, fayyaa fi jireenya itti-fufiinsa qabutti deebii balaa ariifataa waliin nageenya hawaasaa mirkaneessuu.',
      exploreCta: 'Sagantaa Ilaali',
      pillarsEyebrow: 'UTUBAALEE NAMOOMAA FI MISOOMAA',
      pillarsTitle: 'Utubaa Teeknikaa Torba, Kutannoo Tokko Kabajaaf',
      pillarsSubtitle: 'Pirojektoota waggoota 42, milkaaʼina ijaarsaa mirkanaaʼan fi ragaalee odiitii keessatti qophaaʼan ilaalaa.',
      tabs: {
        all: 'Utubaa Hunda',
        wash: 'WASH (Wag. 20+)',
        health: 'Fayyaa fi Nyaata',
        livelihood: 'Qonna fi Jireenya',
        education: 'Barnoota fi TVET',
        disaster: 'Deebii Balaa',
        energy: 'Anniisaa Haaromaa',
        peace: 'Ijaarsa Nagaa',
      },
      crossEyebrow: 'DHIMMOOTA WALOO FI EEGUMSA SEERAA',
      crossTitle: 'Eegumsi Naannoo fi Walqixxummaan Saalaa Hojii Hunda Keessa Jira',
      crossSubtitle: 'Pirojektoonni 15 hundi ulaagaalee haaromsa naannoo fi hoggansa dubartootaa ciminaan hojjiirra oolchu.',
      envTitle: 'Hubannoo Naannoo fi Tarkaanfii Qilleensaa',
      envSub: 'Haaromsa Ikoolojii fi Anniisaa Qulqulluu',
      envIntro: 'ADRAn mancaʼiinsa lafaa fi bosonaa tooftaalee hawaasa-maroodhaan ittisa:',
      envBullets: [
        { title: 'Xaaʼoo Uumamaa:', desc: 'Qotee bultootaa fi mana barnootaa biyyoo deebisanii ijaaruu leenjisuu.' },
        { title: 'Gemuuraa Qusatu:', desc: 'Midda Mirt/Tikikil kan qoraan 60% qusatuu fi aara xiqqeessu rabsamuu.' },
        { title: 'Sulula Eeguu:', desc: 'Naannoo bishaan soolaariitti biqiltuu uumamaa dhaabuun dhiqama biyyoo ittisuu.' },
        { title: 'Anniisaa Aduu:', desc: 'Boolla bishaanii 288+ diizilii irraa gara anniisaa soolaariitti jijjiiruu.' },
      ],
      genderTitle: 'Walqixxummaa Saalaa fi Hammatamuu',
      genderSub: 'Hoggansa Dubartootaa & Miidhamtootaa',
      genderIntro: 'Qixxummaa saalaa imaammata irraa gara hojii qabatamaa hawaasaatti jijjiiruu:',
      genderBullets: [
        { title: 'Hoggansa Dubartootaa 50%+:', desc: 'Dubartoonni boordii bishaanii WASHCo keessatti qabaa maallaqaa fi hogganaa taʼu.' },
        { title: 'Qabeenya Dubartootaaf:', desc: 'Maatii dubartootaan bulaniif reʼoota rimaa fi lukkuuwwan kennuu.' },
        { title: 'Kabaja Shamarranii:', desc: 'Manneen barnootaa 85+ keessatti kutaa qulqullinaa ijaaruun harcaatii hirʼisuu.' },
        { title: 'Hammatamuu (TOFI):', desc: 'Raawwii wiilcherii, kitaaba bireeyilii fi deeggarsa addaa dhiyeessuu.' },
      ],
      modalFlagshipBadge: 'ADRA Itoophiyaa · Utubaa Ijoo',
      tabOverview: 'Ibsaa fi Tarsiimoo',
      tabImpact: 'Hojii Ijoo fi Ragaalee',
      tabStory: 'Ragaa Ijaan Argaa',
      narrativeLabel: 'Seenaa Sagantaa',
      verifiedInterventions: 'Tarkaanfiiwwan Mirkanaaʼan',
      activeWoredasLabel: 'Aanaalee Hojii',
      partnersLabel: 'Deeggartoota fi Hojii-waliinii',
      supportTelebirrBtn: 'TeleBirr ykn CBEtiin Sagantaa Kana Deeggari',
      closeDossierBtn: 'Galmee Cufaa',
    },
    whereWeWork: {
      kicker: 'QAACCEESSA GIS · BAKKA HOJII KEENYAA',
      bannerSubtitleTemplate: 'Bakkeewwan hojii fi tarkaanfiiwwan hawaasaa {region} keessatti. Ragaalee qabatamaa, aanaalee fi buufata soolaarii ilaalaa.',
      gisSubheading: 'Kaartaa GIS Naannolee',
      gisHeading: 'Hojiiwwan Qabatamaa fi Ragaalee Dirree',
      gisHint: 'Balʼina bitaarratti arguuf tuqaa irra oolchaa · Xiyyeeffachuuf tuqaa',
      fieldHubLabel: 'Buufata Hojii Dirree:',
      activeOpsBadge: 'Hojii Irra',
      ourWorkInPrefix: 'Hojii Keenya',
      statBeneficiaries: 'Fayyadamtoota',
      statActiveProjects: 'Pirojektoota',
      statOngoingUnit: 'Hojirra',
      statSolarWells: 'Boolla Sool.',
      statSchemesUnit: 'Buufata',
      statWoredas: 'Aanaa',
      statDistrictsUnit: 'Aanaalee',
      sectorsHeadingPrefix: 'Dameewwan Hojii Naannoo',
      currentProjectsLabel: 'Pirojektoota Yeroo Ammaa',
      strategicInterventionsLabel: 'Tarkaanfiiwwan Tarsiimawaa',
      supportRegionPrefix: 'Pirojektii Deeggari:',
      sectorButtons: {
        emergency: 'Hoggansa Balaa',
        foodSecurity: 'Wabii Nyaataa fi Jireenya',
        wash: 'Bishaan fi Qulqullina (WASH)',
        health: 'Fayyaa fi Nyaata',
        education: 'Barnootaa fi M/B',
        economic: 'Guddina Dinagdee fi TVET',
      },
    },
    gisMap: {
      hudTitle: 'Hojiiwwan GIS ADRA Itoophiyaa',
      modeProjects: 'Pirojektoota 15',
      modeRegions: 'Damee Naannoo 7',
      totalProjectsCount: 'Hojiiwwan 15',
      activeDoneRatio: '(10 Hojirra, 5 Dhume)',
      beneficiariesShort: 'Fayyadamtoota',
      regionsCountLabel: '7',
      regionsShort: 'Naannoo',
      projectNumPrefix: 'Piroj. #',
      targetLocationLabel: 'Bakka fi Aanaa Xiyyeeff.',
      goalLabel: 'Kaayyoo / Galma Pirojektii',
      quickSelectorLabel: 'Filannoo Pirojektii:',
      fifteenOps: 'Hojii 15',
      quickAct: 'Hojii',
      quickEnded: 'Dhume',
      regionalHubBadge: 'Buufata Naannoo',
      capitalLabel: 'Teessoo:',
      statBeneficiaries: 'Fayyadamtoota',
      statProjects: 'Sagantaa',
      statSolarWells: 'Boolla Sool.',
      statWoredas: 'Aanaa',
      projectsOperatingLabel: 'Pirojektoota As Jiran:',
      zoomPrompt: '* Ilaaluuf mallattoo kaartaarratti tuqaa',
      resetViewBtn: 'Deebisi',
      filterLabel: 'Calaa:',
      filterAll15: 'Hunda 15',
      filterOngoing10: 'Hojii Irra 10',
      filterCompleted5: 'Xumurame (5)',
      zoomInAria: 'Dhiyeessi',
      zoomOutAria: 'Fageessi',
      resetMapAria: 'Kaartaa deebisi',
      layersMenuAria: 'Baqqaana kaartaa fili',
      layersMenuTitle: 'Baqqaanota GIS',
      layers: {
        satellite: { label: 'Saatelaayitii (GIS)', sub: 'Suuraa Qulqulluu + Maqaa' },
        terrain: { label: 'Teessuma Lafaa', sub: 'Olkaʼiinsaa fi Sarara' },
        carto: { label: 'Kaartaa Qulqulluu', sub: 'Voyager GIS Vector' },
        osm: { label: 'OpenStreetMap', sub: 'Kaartaa Idilee' },
      },
      guideTitle: 'Qajeelfama GIS',
      selectedProjectLegend: 'Piroj. Filatame (#1–#15)',
      ongoingLegend: 'Hojii Itti Fufaa Jiru',
      completedLegend: 'Dhiyeenya Xumurame',
      activeHubLegend: 'Damee Hojii',
      baseLegend: 'Damee Naannoo',
    },
    projects: {
      breadcrumbSummary: 'Cuunfaa Pirojektii',
      kicker: 'GABAAASA PIROJEKTOOTA ADRA ITOOPHIYAA',
      badges: {
        documented: 'Pirojektii Galmaaʼan 15',
        tables: 'Gabatee Naannoo 7',
        activeCompleted: '10 Hojirra & 5 Dhume',
        beneficiaries: '345,000+ Fayyadamtoota',
      },
      tabRegionalTables: 'Gabatee Naannolee (7)',
      tabFullTable: 'Gabatee Cuunfaa',
      tabCards: 'Kaardii',
      allStatus: 'Haala Hunda',
      active10: 'Hojirra (10)',
      completed5: 'Dhume (5)',
      searchPlaceholder: 'Pirojektii, aanaa, galma barbaadi...',
      sectorLabel: 'Damee:',
      allRegions15: 'Naannoo 7 (15)',
      projectSingular: 'Hojii',
      projectPlural: 'Hojii',
      listedWord: 'Galme',
      idsPrefix: 'ID:',
      tableHeaders: {
        no: 'Lk.',
        sector: 'Damee / Kutaa',
        nameLoc: 'Maqaa Pirojektii fi Bakka',
        objective: 'Galma / Kaayyoo Pirojektii',
        woredas: 'Aanaa & Magaalaa',
        duration: 'Yeroo',
        beneficiaries: 'Fayyadamtoota',
        status: 'Haala',
        dossier: 'Galmee',
        action: 'Gocha',
      },
      emptyGroup: 'Naannoo kanatti pirojektiin argame hin jiru.',
      masterRegistryTitle: 'Galmee Pirojektootaa ADRA Itoophiyaa',
      showingCountTemplate: 'Hojiiwwan mirkanaaʼan {total} keessaa {shown} agarsiifamaa jiru',
      officialRecordBadge: 'Galmee Waajjira Biyyaa',
      viewDossierBtn: 'Galmee Ilaali',
      emptySearchTitle: 'Pirojektiin walsimu hin argamne',
      emptySearchSub: 'Damee ykn jecha barbaachaa jijjiiraa.',
      modalGoalTitle: 'Galma fi Kaayyoo Hojii',
      modalRegionArea: 'Naannoo / Bakka Ijoo',
      modalBeneficiariesNum: 'Fayyadamtoota',
      modalWoredasTitle: 'Aanaalee fi Magaalota',
      modalPartnersTitle: 'Deeggartoota Keenya',
      modalHardTitle: 'Ijaarsawwan Buʼuuraa',
      modalMaterialsTitle: 'Dhiyeessii Meeshaalee',
      modalSoftTitle: 'Leenjii Dandeettii Cimsaa',
      modalMilestonesTitle: 'Buʼaawwan Ijoo',
      supportProgramBtn: 'Hojii Deeggari',
      closeDossierBtn: 'Cufaa',
    },
    impact: {
      kicker: 'BUʼAAWWAN MADAALAMAN',
      bannerTitle: 'Jijjiirama Safaramu Itoophiyaatti',
      bannerSubtitle: 'Ragaalee walabaa fooyyaʼiinsa bishaan qulqulluu, nyaata daaʼimmanii fi galii maatii biyyattii hordofan.',
      exploreMetricsBtn: 'Ragaalee Ilaali',
      spendRatioBadge: 'Baasii Sagantaa 92.4% · Mirkanaaʼe',
      leftEyebrow: 'Itti-gaafata Kallattii',
      leftTitle: 'Buʼaa Arjoomni Keessan Ijaaru Ilaalaa',
      leftDesc: 'Baasii bulchiinsaa xiqqaa fi ogeeyyii Itoophiyaatiin deeggarsi keessan 92% ol kallattiin hawaasa bira gaʼa.',
      leftTaxNote: 'Nagahee taaksii fi gabaasni odiitii waggaa ni kennama',
      estimatorTitle: 'Shallagaa Buʼaa',
      marketRatePrefix: 'Sharafa:',
      marketRateFloat: '(Idilee)',
      nbeBadge: 'Reet NBE',
      outcomeLabel: 'Buʼaa Namoomaa Kallattii',
      donateCtaTemplate: 'Gumaacha {amount} Kennaa',
      currencyEtbLabel: 'Birrii',
      currencyUsdLabel: 'USD ($)',
    },
    stories: {
      kicker: 'SAGALEE DIRREE IRRAA',
      bannerTitle: 'Jireenya Dhugaa, Dandamannaa',
      bannerSubtitle: 'Seenaawwan hawaasaa fi ragaalee ijaan argaa bakkeewwan hojii ADRA Itoophiyaa irraa walitti qabaman.',
      readBtn: 'Seenaa Dirree Dubbisi',
      featuredEyebrow: 'GABAAASA FILATAMOO',
      latestHeading: 'Oduu Haaraa Dirree',
      allStoriesBtn: 'Seenaa hunda',
      supportResilienceBtn: 'Jireenya Deeggari',
    },
    blogs: {
      breadcrumbCurrent: 'Blogii fi Oduu',
      kicker: 'GALMEE DIRREE FI QORANNOO · BLOG',
      bannerTitle: 'Gabaasa Dhiibbaa, Kalaqaa fi Namoomaa',
      bannerSubtitle: 'Gabaasawwan teeknikaa fi seenaawwan qabatamaa bakkeewwan hojii ADRA Itoophiyaa irraa waraabbaman.',
      searchPlaceholder: 'Blogii, mata-duree barbaadi...',
      emptyTitle: 'Blogiin barbaadame hin jiru',
      emptySub: 'Calallii ykn jecha barbaachaa haqaa',
      readBlogBtn: 'Dubbisi',
      modalHeader: 'GABAAASA ADRA ITOOPHIYAA',
      prevTitle: 'Blogii Duraa',
      nextTitle: 'Itti Aanu',
      copyTitle: 'Waraabi',
      topicTagsLabel: 'Mata-duree:',
      ctaEyebrow: 'Hawaasa Itoophiyaa Guutuutti Humneessi',
      ctaHeadingPrefix: 'Hojii akkanaa deeggari:',
      ctaDesc: 'Gumaachi hundi TeleBirr, CBE Birr fi kaardiin kallattiin furmaata hawaasaa deeggara.',
      ctaBtn: 'Gargaarsaaf Kennaa',
    },
    aiForGood: {
      kicker: 'AI GAARIIF',
      bannerTitle: 'Teeknooloojii kabajaan namoota tajaajilu',
      bannerSubtitle: 'Akkaataan ADRA Itoophiyaan AI fi daataatti dhiyaatu: of-eeggannoo, iftoomina fi yeroo hunda hawaasa giddugaleessa godhate.',
      chatBtn: 'ADRA AI Gaafadhu',
      approachTitle: 'Mala keenya',
      approachBody: 'AI gareen gargaarsaa fedhii dafee akka hubatu, odeeffannoo qulqulluu qooduu fi qabeenya sirnaan hogganuu gargaara. Garuu balaa iccitii qaba. ADRAn meeshaalee kanneen yeroo balaan tooʼatamuu fi faayidaan mirkanaaʼu qofa fayyadama.',
      principlesTitle: 'Seera Keenya',
      principlesSubtitle: 'Seeronni jaha murtii teeknooloojii hunda qajeelchu.',
    },
    tenders: {
      kicker: 'HOJII, WALTAʼIINSA FI CAALBAASII',
      bannerTitle: 'Caalbaasii, Hojii fi Maxxansa',
      bannerSubtitle: 'Iftoominaa fi dandeettii irratti hundaaʼuun caalbaasiiwwan banaa, carraawwan hojii fi gabaasawwan waggaa uummataaf banaadha.',
      tabTenders: 'Caalbaasii RFP',
      tabCareers: 'Carraa Hojii',
      tabPublications: 'Gabaasa & Barruu',
      submissionDeadline: 'Dhumaa:',
      closingDate: 'Cufama:',
      viewTenderBtn: 'Caalbaasii',
      applyBtn: 'Iyyadhu',
      viewAbstractBtn: 'Cuunfaa Ilaali',
      downloadPdfBtn: 'PDF Buufadhu',
      locationPrefix: 'Bakka:',
      deadlinePrefix: 'Dhumaa:',
      requirementsTitle: 'Ulaagaalee Dirqamaa fi Dandeettii:',
      requestBidPackage: 'Sanada Caalbaasii Gaafadhu',
      submitCandidateEoi: 'Iyyannoo Hojii Galchuu',
      ackTitle: 'Iyyannoo Galmaaʼe',
      ackBodyTemplate: 'Lakk. galmaaʼe. Ergaan gara {email} ergameera.',
      bidderLabel: 'Maqaa Dhaabbataa',
      fullNameLabel: 'Maqaa',
      namePlaceholder: 'fk. Alazar Mangistuu',
      emailLabel: 'Imeelii Seeraa',
      emailPlaceholder: 'contact@domain.et',
      requestBidBtn: 'Sanada Gaafadhu',
      submitAppBtn: 'Iyyannoo Ergi',
      pubNoticeLabel: 'Beeksisa Maxxansaa:',
      pubNoticeBody: 'Qajeelfamni teeknikaa fi odiitiin ADRA Itoophiyaa hundi qorattootaa fi deeggartootaaf bilisaan banaadha.',
      confirmDownloadBtn: 'Faayilii Buusi',
      downloadStartedMsg: 'Sanadni buusuuf qophaaʼeera.',
    },
    contact: {
      eyebrow: 'Nu Qunnamaa',
      title: 'ADRA Ethiopia Qunnamaa',
      subtitle: 'Hojii-waliinii, deeggarsa maallaqaa, miidiyaa ykn waajjira keenya Finfinnee daawwachuuf garee qindoominaa keenya qunnamaa.',
      hqTitle: 'Waajjira Muummee Biyyaa',
      hqSub: 'Waajjira Qindoominaa Finfinnee',
      addressMain: 'Daandii Raas Dastaa Daamxoo, Finfinnee',
      addressSub: 'Kutaa Magaalaa Qirqoos · Naannoo Yuuniyeenii · Lakk. Postaa 145',
      hoursText: 'Wiixata–Kibxata: 8:30–5:30 · Jimaata: 8:30–1:30',
      registeredBadge: 'Dhaabbata Galmaaʼe · Ragaa Lakk. 2049',
      hubsTitle: 'Damee Qindoominaa Naannoo',
      hubs: {
        somaliTitle: 'Naan. Somaalee',
        somaliSub: 'Buufata Goode fi Qalafoo',
        oromiaTitle: 'Naan. Oromiyaa',
        oromiaSub: 'Adaamaa fi Harar Bahaa',
        sidamaTitle: 'Naan. Sidaamaa',
        sidamaSub: 'Waajjira Hawaasaa',
        tigrayAmharaTitle: 'Tigraay & Amaara',
        tigrayAmharaSub: 'Damee Maqalee fi Dasee',
      },
      formTitle: 'Ergaa Seeraa Ergaa',
      formSub: 'Gareen qunnamtii keenya saʼaatii hojii 24–48 keessatti deebii kenna.',
      sentTitle: 'Ergaan Galmaaʼe',
      sentBodyTemplate: 'Galatoomaa, {name}. Gaaffiin keessan waaʼee {category} gara Waajjira Muummee ADRA Itoophiyaa ergameera.',
      partnerDefault: 'Hiriyaa',
      inquiryLabel: 'Gosa Gaaffii',
      inquiries: {
        general: 'Gaaffii fi Odeeffannoo',
        partnership: 'Hojii-waliinii fi Deeggarsa Maallaqaa',
        procurement: 'Gaaffii Bittaa fi Caalbaasii',
        careers: 'Carraa Hojii & Humna Namaa',
        media: 'Miidiyaa & Dokumeentarii',
      },
      fullNameLabel: 'Maqaa',
      fullNamePlaceholder: 'fk. Almaz Baqqalaa',
      emailLabel: 'Imeelii',
      emailPlaceholder: 'almaz@org.et',
      phoneLabel: 'Bilbila (Fil.)',
      phonePlaceholder: '+251 9...',
      messageLabel: 'Ergaa Balʼaa',
      messagePlaceholder: 'Ergaa keessan asitti barreessaa...',
      submitBtn: 'Ergaa Ergi',
    },
    donateModal: {
      closeAria: 'Cufaa',
      thankYouTemplate: 'Galatoomaa, {donor}!',
      generousDonor: 'Arjoomaa',
      ackSubtitle: 'Gumaachi keessan kallattiin hawaasa Itoophiyaa cimsa.',
      receiptRef: 'Lakk. Nag.:',
      contribAmount: 'Hamma:',
      designatedSector: 'Damee Hojii:',
      paymentGateway: 'Karaa:',
      dateIssued: 'Guyyaa:',
      taxNote: 'ADRA Itoophiyaan ACSOtiin galmaaʼeera (#2049). Gumaachi Labsii #1113/2019 eega.',
      saveReceiptBtn: 'Nag. Olkaaʼi',
      receiptSavedMsg: 'Nagaheen seeraa olkaaʼameera.',
      rateLabel: 'Sharafa:',
      rateFloat: '(Idilee)',
      nbeVerified: 'Reet NBE',
      oneTime: 'Al-tokko',
      monthly: "Ji'aan",
      selectAmount: 'Hamma Fili',
      customPlaceholderPrefix: 'Hamma biraa:',
      programAreaLabel: 'Damee Hojii',
      selectGateway: 'Karaa Kaffaltii',
      scanQrTab: 'QR Dub.',
      appCardTab: 'App / Kaard',
      telebirrTag: '#1 ET',
      telebirrSub: 'Ityoo Telekoom',
      cbeTag: 'Bank',
      cbeSub: 'Baankii Daldalaa',
      stripeTag: 'Addun.',
      stripeSub: 'Kaardii / Apple',
      telebirrHeader: 'TeleBirr Mobayilii',
      cbeHeader: 'Baankii Daldalaa (CBE)',
      stripeHeader: 'Stripe Idil-addunyaa',
      scanCodeEnabled: 'QR Jira',
      howToScanPay: 'Akka QR Kaffaltii:',
      telebirrSteps: [
        'App TeleBirr bilbilaan banaa',
        'Mallattoo QR tuqaa',
        'Koodii iskaan godhaa ergaa',
        'PIN keessaniin mirkaneessaa',
      ],
      cbeSteps: [
        'CBE Mobile ykn CBE Birr banaa',
        'Scan to Pay fili',
        'Koodii QR ADRA kana iskaan godhaa',
        'Herrega 1000012345678 mirkan.',
      ],
      merchantCodeLabel: 'Daldalaa:',
      merchantShortCode: 'Koodii Gabaabaa ADRA:',
      copyCode: 'Kooppii',
      copied: 'Waraab!',
      copyBtn: 'Copy',
      launchTelebirr: 'App TeleBirr Bani',
      dialTelebirrUssd: '*127# Tuqi',
      cbeAccountLabel: 'Herrega CBE:',
      cbeBranchLabel: 'ADRA Itoophiyaa, Damee Qirqoos',
      openCbeApp: 'App CBE Bani',
      dialCbeUssd: '*847# Tuqi',
      instantMobilePay: 'Kaffaltii Ariifataa:',
      stripeMobileDesc: 'Kaameraa bilbilaatiin Apple Pay, Google Pay ykn kaardiin kaffaluuf iskaan godhaa.',
      enterCardLink: 'Ykn kaardii as galchaa →',
      cardNumberLabel: 'Lakk Kaardii',
      expiryLabel: 'Dhumaa (MM/YY)',
      cvcLabel: 'Lakk CVC',
      donorNameLabel: 'Maqaa Arj.',
      donorNamePlaceholder: 'Dawit Alemayehu',
      donorPhoneLabel: 'Lakk. Bilbila',
      donorEmailLabel: 'Imeelii (Fil.)',
      confirmTemplate: '{amount} Ergi',
      securityFooter: 'Karaa Eegamaa · Stripe, CBE & TeleBirr',
      sectors: {
        general: 'Bakka Caalaatti Barbaachisu (Dursa)',
        wash: 'Bishaan Qulqulluu fi Soolaarii (WASH)',
        education: 'Barnootaa fi Eegumsa Shamar. (SEAQE II)',
        health: 'Fayyaa fi Yaala Nyaataa (CTC)',
        foodSecurity: 'Wabii Nyaataa fi Jallisii Xixiqqoo',
        economicGrowth: 'Akaadaamii Aduu TVET Dargaggoo',
        emergency: 'Deebii Balaa fi Gargaarsa',
        peaceBuilding: 'Ijaarsa Nagaa fi Tokkummaa',
      },
    },
    qr: {
      telebirrTitle: 'TeleBirr Pay',
      telebirrSub: 'TeleBirriin iskaan godhi',
      cbeTitle: 'CBE Birr Pay',
      cbeSub: 'App CBEtiin iskaan godhi',
      stripeTitle: 'Stripe Mobayilii',
      stripeSub: 'Apple Pay / Kaardii iskaani',
      telebirrQuickLabel: 'QR TeleBirr',
      cbeQrLabel: 'QR CBE Birr',
      stripeMobileLabel: 'QR Stripe',
    },
    chatbot: {
      welcome: 'Akkam jirtu! Ani ADRA AI ADRA Itoophiyaati. Waaʼee damee hojii torbanii (Ijaarsa Nagaa dabalatee), hojii naannolee, seenaa bara 1982 irraa, qajeelfama AI, ykn TeleBirr fi CBE Birriin gargaarsa gochuu gaafadhaa.',
      verifiedBadge: 'Mirkan.',
      headerSub: 'Ragaalee ADRA Itoophiyaa irraa',
      closeAria: 'ADRA AI Cufaa',
      sourcePrefix: 'Madda:',
      jumpToSection: 'Kutaatti cehi',
      searchingText: 'Galmee ADRA barbaadaa...',
      suggestedLabel: 'Yaadota:',
      placeholder: 'Waaʼee sagantaa, naannoo ykn kennaa gaafadhaa...',
      sendAria: 'Ergaa ergi',
      footerNote: 'Qajeeltoowwan AI Gaariif ADRA Itoophiyaa eega (Tooʼannoo namaa fi iccitii)',
      fallbackReply: 'Akka galmee ADRA Itoophiyaatti naannolee 8 keessatti utubaalee 7 (WASH, Barnoota, Wabii Nyaataa, Deebii Balaa, Fayyaa, TVET fi Ijaarsa Nagaa) irratti hojjanna. Waaʼee seenaa 1982 ykn TeleBirr (251911) gaafadhaa.',
      prompts: {
        donate: 'TeleBirr/CBEtiin gargaaruu?',
        ai: 'Seera AI 6 maal faʼi?',
        somali: 'Hojii Naannoo Somaalee?',
        wash: 'Bishaan & WASH?',
        history: 'Seenaa ADRA 1982 irraa',
      },
    },
  },

  ti: {
    common: {
      home: 'መነሻ',
      motto: 'ፍትሒ · ርሕራሐ · ፍቕሪ',
      countryOffice: 'ቤት ጽሕፈት ሃገር',
      ethiopia: 'ኢትዮጵያ',
      photoCredit: 'ስእሊ: © 2026 ኣድራ | ኣድራ ኢትዮጵያ',
      close: 'ዕጾ',
      finish: 'ዛዝም',
      cancel: 'ሰርዝ',
      details: 'ዝርዝር',
      exploreArrow: 'ዳህስስ',
      readMore: 'ተወሳኺ',
      active: 'ንጡፍ',
      ongoing: 'ቀጻሊ',
      completed: 'ተዛዚሙ',
      ended: 'ወዲኡ',
      resetFilters: 'ዳግም ጀምር',
      beneficiaries: 'ተጠቀምቲ',
      duration: 'ግዜ ቆይታ',
    },
    app: {
      offlineBannerAria: 'ካብ መስመር ወጻኢ መግለጺ',
      offlineActive: 'ካብ መስመር ወጻኢ:',
      offlineMsg: 'ዝተዓቀበ ገጻት ትጥቀሙ ኣለኹም። ፎርማትን መዋጮን መስመር ምስ መጸ ክለኣኽ እዩ።',
      simulationBadge: 'ፈተነ',
      endSimulation: 'ዕጾ',
      dismissOfflineAria: 'መልእኽቲ ዕጾ',
      openAdraAiAria: 'ADRA AI ክፈት',
    },
    header: {
      chooseLangTitle: 'ቋንቋ ምረጹ',
      selectLangAria: 'ቋንቋ ምረጹ',
      toggleMenuAria: 'ዝርዝር ክፈት',
      changeLangBtn: 'ቀይር',
      megaTitle: 'ቀንዲ ዓውድታት መደባትን ስራሕትን',
      megaHint: 'ዝርዝር ንምርኣይ ጠውቑ',
      cleanWaterLink: '• ጽሩይ ማይን WASHን',
      greenEnergyLink: '• ሓምለዋይ ጸዓት TVET',
      peaceBuildingLink: '• ህንጸት ሰላም',
      allSevenAreas: 'ኩሎም 7',
      pillars: {
        educationSub: 'SEAQE IIን ትምህርቲ ደቂ ኣንስትዮን',
        educationMetric: '85,000+ ተምሃሮ',
        healthSub: 'ኣመጋግባን ክንክን ኣዴታትን CTC',
        healthMetric: '310,000+ ተሓኪሞም',
        livelihoodSub: 'መስኖ ፀሓይን VSLAን',
        livelihoodMetric: '68,000+ ሓረስቶት',
        disasterSub: 'ናይ 72-ሰዓት ረድኤትን ገንዘብን',
        disasterMetric: '550,000+ ተሓጊዞም',
      },
    },
    footer: {
      purposeLead: '"ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ክነብር ንሰባት ብቕንዕና ምግልጋል።" — ካብ 1982 ጀሚሩ ጽሩይ ማይ፣ ጥዕና፣ ትምህርትን ምላሽ ሓደጋን ዘቕርብ ወግዓዊ መርበብ ኣድራ ኢትዮጵያ።',
      proclamation: 'ብኣዋጅ ማሕበራት ሲቪል #1113/2019 ዝተመዝገበ',
      acsoInfo: 'ፍቓድ ምዝገባ ACSO ቁጽሪ 2049 · 42+ ዓመታት ኣብ ኢትዮጵያ',
      addressPhone: 'ጎደና ራስ ደስታ ዳምጠው፣ ኣዲስ ኣበባ · ስልኪ: +251-115-512212',
      programsHeading: 'መደባት ስራሕ',
      programsLinks: [
        'ጽሩይ ማይን WASHን',
        'ትምህርትን ሓለዋ ህጻናትን',
        'ሕርሻን ውሕስነት መግብን',
        'ማሕበረሰባዊ ክንክን (CTC)',
        'ሓምለዋይ ጸዓት TVET II',
        'ቅልጡፍ ምላሽ ሓደጋ',
        'ህንጸት ሰላምን ምትእስሳርን',
      ],
      institutionalHeading: 'ትካላዊ',
      institutionalLinks: [
        'ታሪኽና ካብ 1982 ጀሚሩ',
        'ቦታታት ስራሕና (8 ክልላት)',
        'ዝርዝር ንጡፋት ፕሮጀክትታት',
        'ህዝባዊ ጨረታታትን RFPን',
        'ናይ ስራሕ ዕድላትን ክፍቲ ቦታን',
        'ዓመታዊ ጸብጻባትን ኦዲትን',
      ],
      updatesHeading: 'ዜና መስክ',
      updatesBlurb: 'ናይ ርብዒ ዓመት ጸብጻባትን ዝተረጋገጸ ኦዲትን ብቐጥታ ካብ ኢትዮጵያ ይቀበሉ።',
      subscribedMsg: 'የቐንየልና! ተመዝጊቦም ኣለዉ።',
      emailPlaceholder: 'name@email.com',
      subscribeBtn: 'ጸብጻባት ይቀበሉ',
      directGiftBtn: 'ቀጥታዊ ወፈያ ግበሩ',
      copyright: 'ኣድራ ኢትዮጵያ (ADRA)። ኩሉ መሰል ዝተሓለወ እዩ።',
      safeguarding: 'ፖሊሲ ድሕንነት',
      whistleblower: 'ተኣማንነት ምሕባር',
      privacy: 'ምዕቃብ ውልቃዊ መረዳእታ',
    },
    hero: {
      carouselAria: 'መርኣዪ ስራሕቲ መስክ ኣድራ ኢትዮጵያ',
      prevSlideAria: 'ቀዳማይ ስላይድ',
      nextSlideAria: 'ቀጻሊ ስላይድ',
      pauseAria: 'ደው ኣብል',
      resumeAria: 'ቀጽል',
      goToSlidePrefix: 'ናብ ስላይድ ኪድ',
    },
    wellbeing: {
      eyebrow: 'ወግዓዊ መዋቕር ኣድራ',
      corePurposeLabel: 'ቀንዲ ዕላማና',
      svgLine1: 'ውልቃውን',
      svgLine2: 'ማሕበረሰባውን',
      svgLine3: 'ሰናይ-ደሕንነት',
      educationVertex: 'ትምህርቲ',
      healthVertex: 'ጥዕና',
      livelihoodsVertex: 'መነባብሮ',
      vertexHint: 'ዓንዲ ንምርኣይ ዝኾነ ጫፍ ጠውቑ',
      interventionsLabel: 'ቁልፊ ስትራቴጂካዊ ስራሕቲ:',
      footerNote: 'ንምሉእ ሰብኣዊ ክብሪ ምስ ጥዕናን ዘላቒ ናብራን ዝተኣሳሰረ',
      viewDossier: 'ምሉእ ሰነድ ርኣዩ',
      strengthsHeading: 'ኣርባዕተ ትካላዊ ጥንካረታት',
    },
    whoWeAre: {
      sectionsPrefix: 'ክፍልታት:',
      categoriesLabel: 'ዘፈራት:',
      allTiersBtn: 'ኩሎም 5 ብርክታት (20)',
      membersCount: '4 ኣባላት',
      subLabels: {
        aboutUs: 'ብዛዕባና',
        ourHistory: 'ታሪኽና',
        leadership: 'መርሕነት',
        governance: 'ምሕደራ',
      },
      aboutP1: 'ኣድራ ኢትዮጵያ ኣካል ኣብ ልዕሊ 130 ሃገራት ዝሰርሕ ዓለምለኻዊ መርበብ ኣድራ እዩ። ብዘይ ኣድልዎ ዘርኢ፣ ሃይማኖት ወይ ፖለቲካ ንኹሉ ማሕበረሰብ ኢትዮጵያ ህጹጽ ረድኤትን ዘላቒ ልምዓትን ነቕርብ።',
      aboutP2: 'ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ብኽብሪ ክነብር ብዝብል ዕላማ ተመሪሕና፤ መደባትና ኣብ ምላሽ ሓደጋ፣ ውሕስነት መግቢ፣ ጽሩይ ማይ (WASH)፣ ጥዕናን ሓቛፊ ትምህርትን የትኩሩ።',
      values: {
        justiceTitle: 'ፍትሒ',
        justiceBadge: 'ክብሪ I',
        justiceDesc: 'ንዝተገለሉ ወገናት ምምጓት፣ ንህጻናት ምሕላውን መሰረታዊ ሃብቲ ብማዕረ ምክፋልን ምርግጋጽ።',
        compassionTitle: 'ርሕራሐ',
        compassionBadge: 'ክብሪ II',
        compassionDesc: 'ኣብ እዋን ደርቂ፣ ውሕጅ ወይ ምዝንባል ብርሕራሐ፣ ክብርን ቅልጣፈን ብዘይ ቅድመ-ኩነት ረድኤት ምሃብ።',
        loveTitle: 'ፍቕሪ',
        loveBadge: 'ክብሪ III',
        loveDesc: 'ንዓሰርተታት ዓመታት ምስ ስድራቤታት ኢትዮጵያ ደው ብምባል ንዘላቒ ርእሰ-ምርኮሳ ክእለትን መሳርሕን ምዕጣቕ።',
      },
      history: {
        m1982Tag: '[1982]',
        m1982Title: 'ኣድራ ኣብ ኢትዮጵያ ስራሕ ጀሚሩ',
        m1982Desc: 'ንደርቂ 1982 ወሎን ኣሳይታን ምላሽ ንምሃብ ኣብ ለገጣፎ መዕቆቢ ብምኽፋት መግብን ሕክምናን ኣቕሪቡ።',
        m1992Tag: '[1992]',
        m1992Title: 'ምስፍሕፋሕ መደባትን ቀንዲ ቤት ጽሕፈት ኣዲስ ኣበባን',
        m1992Desc: 'መንግስቲ ኢትዮጵያ ንኣበርክቶ ኣድራ ኣፍልጦ ብምሃብ ኣብ ቂርቆስ ክፍለ-ከተማ መሬት ብምሃብ ዋና ቤት ጽሕፈት ተሃኒጹ።',
        m2006Tag: '[2006]',
        m2006Title: 'ማሕበረሰባዊ ሕክምና ኣመጋግባ (CTC) ኣብ ክልል ሶማሌ',
        m2006Desc: 'ምስ USAID ብምትሕብባር ኣብ ኬላፎን ጎዴን ኣብ ገዛ ዝግበር ሕክምና ሕጽረት መግቢ ብምጅማር ልዕሊ 30,000 ህጻናት ድሒኖም።',
        mNowTag: '[ሕጂ]',
        mNowTitle: 'ሓምለዋይ ጸዓት TVETን ማይ ፀሓይን ኣብ 8 ክልላት',
        mNowDesc: 'ብ100% ኢትዮጵያዊ መርሕነት ኣብ ዓመት ልዕሊ 1.6 ሚልዮን ሰባት ዘገልግል ስልጠና ፀሓይን ማይን ይካየድ ኣሎ።',
      },
      governance: {
        heading: 'ምሕደራን ሕጋዊ ተገዛእነትን',
        legalText: 'ኣድራ ኢትዮጵያ ብበዓል መዚ ማሕበራት ሲቪል (ACSO) ብቁጽሪ ምስክር ወረቀት 2049 ከምኡውን ብኣዋጅ 1113/2019 ካብ 1982 ጀሚሩ ን42+ ዓመታት ብሕጋውነት ይሰርሕ።',
        officeBannerLabel: 'ሃገራዊ ቤት ጽሕፈት:',
        officeBannerText: 'ጎደና ራስ ደስታ ዳምጠው፣ ኣዲስ ኣበባ · +251-115-512212 · 89 ሰራሕተኛታት (15 HQ፣ 74 መስክ)',
        commitmentsLabel: 'ቃል-ኪዳናት ተኣማንነት:',
        bullets: [
          'ብዝተረጋገጹ ናጻ ኦዲተራት ዝካየድ ዓመታዊ ወጻኢ ኦዲት ፋይናንስ።',
          'ንረብሓ ማሕበረሰብ ንምዕባይ ልዕሊ 92.4% ቀጥታዊ ወጻኢ መደባት።',
          'ኣብ ልዕሊ ጾታዊ ምዝመዛ፣ መጥቃዕትን ጸርፍን (PSEAH) ዜሮ ትዕግስቲ።',
          'ንሰራሕተኛታትን ተጠቀምትን ዝሕሎ ምስጢራዊ መስርሕ ምሕባር።',
        ],
      },
    },
    whatWeDo: {
      kicker: 'ልምዓትን ረድኤትን · እንታይ ንሰርሕ',
      bannerTitle: 'ኩሉ ሰብ ፈጣሪ ከም ዝደለዮ ብኽብሪ ክነብር ምግልጋል',
      bannerSubtitle: 'ኣብ ትምህርቲ፣ ጥዕናን ዘላቒ ናብራን ብቕልጡፍ ምላሽ ሓደጋ ዝተደገፈ ሰናይ-ደሕንነት ማሕበረሰብ ምርግጋጽ።',
      exploreCta: 'መደባት ርኣዩ',
      pillarsEyebrow: 'ቀንዲ ሰብኣውን ልምዓታውን ዓንዴታት',
      pillarsTitle: 'ሸውዓተ ቴክኒካዊ ዓንዴታት፣ ሓደ ቃል-ኪዳን ክብሪ',
      pillarsSubtitle: 'ናይ 42 ዓመታት ህይወት ኣድሕን ስራሕትና፣ ዝተረጋገጹ ዓወታት ምህንድስናን ብኦዲት ዝተረጋገጹ ኣሃዛትን ዳህስሱ።',
      tabs: {
        all: 'ኩሎም ዓውዲ',
        wash: 'WASH (20+ ዓመት)',
        health: 'ጥዕናን ኣመጋግባን',
        livelihood: 'ሕርሻን ናብራን',
        education: 'ትምህርትን TVETን',
        disaster: 'ምላሽ ሓደጋ',
        energy: 'ሓምለዋይ ጸዓት',
        peace: 'ህንጸት ሰላም',
      },
      crossEyebrow: 'ሓባራዊ ጉዳያትን ትካላዊ ሓለዋታትን',
      crossTitle: 'ኣብ ነፍሲ ወከፍ ፕሮጀክት ዝተኻተተ ሓለዋ ከባብን ማዕርነት ጾታን',
      crossSubtitle: 'ኩሎም 15 ፕሮጀክትታት ንሕውየት ተፈጥሮን ብደቂ-ኣንስትዮ ዝምራሕ ምሕደራን ብጽኑዕ ይትግብሩ።',
      envTitle: 'ንቕሓት ከባብን ስጉምቲ ክሊማን',
      envSub: 'ሕውየት ስነ-ምህዳርን ጽሩይ ጸዓትን',
      envIntro: 'ኣድራ ብማሕበረሰብ ዝምራሕ ምክልኻል ምብራስ መሬትን ምብራስ ኣግራብን የካይድ:',
      envBullets: [
        { title: 'ተፈጥሮኣዊ ድኹዒ:', desc: 'ሓረስቶትን ክለባት ቤት-ትምህርትን ዝተዳኸመ ሓመድ ብተፈጥሮ ክሕድሱ ምስልጣን።' },
        { title: 'ጸዓት ቆጣቢ እቶን:', desc: 'ዕንጨይቲ ብ60% ዝንክዩ ምርጥ/ትክክል እቶናት ምዕዳል።' },
        { title: 'ሓለዋ ተፋሰስን ኣግራብን:', desc: 'ኣብ ከባቢ ነጥብታት ማይ ፀሓይ ሀገር-በቀል ፈልሲ ምትካል።' },
        { title: 'ምስግጋር ፀሓይ:', desc: 'ልዕሊ 288 ዓሚቕ ዔላታት ካብ ናፍታ ናብ ዜሮ-ልቀት ፓምፕ ፀሓይ ምቕያር።' },
      ],
      genderTitle: 'ማዕርነት ጾታን ሓቛፍነትን',
      genderSub: 'መርሕነት ደቂ-ኣንስትዮን ተበጻሕነት ስንኩላንን',
      genderIntro: 'ኣብ ኩሉ ምሕደራ ፕሮጀክትን ክፍፍል ሃብትን ማዕርነት ጾታ ብግብሪ ምርግጋጽ:',
      genderBullets: [
        { title: '50%+ መርሕነት WASHCo:', desc: 'ደቂ-ኣንስትዮ ኣብ ቦርድ ምሕደራ ማይ ቀንዲ ሓለፍቲ ይኾና።' },
        { title: 'ሓገዝ ሃብቲ ንኣዴታት:', desc: 'ንበይነን ዝምርሓ ኣዴታት ጥንስቲ ኣጣልን ፓኬጅ ደርሁን ምሃብ።' },
        { title: 'ክብሪ ጽሬት:', desc: 'ኣብ 85+ ኣብያተ-ትምህርቲ ንጹህ መጸዳድዒ ኣዋልድ ምህናጽ።' },
        { title: 'ምሕቛፍ ስንኩላን (TOFI):', desc: 'መወጣጥሒ ዊልቸር፣ መጻሕፍቲ ብሬልን ሓቛፊ መሳርሕን ምቕራብ።' },
      ],
      modalFlagshipBadge: 'ኣድራ ኢትዮጵያ · ቀንዲ ዓንዲ',
      tabOverview: 'ሓፈሻዊ ስትራቴጂ',
      tabImpact: 'ቁልፊ ስራሕትን ኣሃዝን',
      tabStory: 'ምስክርነት ዓይኒ',
      narrativeLabel: 'ዝርዝር መደብ',
      verifiedInterventions: 'ዝተረጋገጹ ስትራቴጂካዊ ስራሕቲ',
      activeWoredasLabel: 'ንጡፋት ወረዳታት',
      partnersLabel: 'መሻርኽቲ ለገስትን ትካላትን',
      supportTelebirrBtn: 'ነዚ መደብ ብTeleBirr ወይ CBE ደግፉ',
      closeDossierBtn: 'ዕጾ',
    },
    whereWeWork: {
      kicker: 'ጂኦግራፊያዊ GIS · ቦታታት ስራሕና',
      bannerSubtitleTemplate: 'ኣብ {region} ዝካየዱ ስራሕቲ ማሕበረሰብ። ቀጥታዊ ኣሃዛት፣ ወረዳታትን ጣቢያታት ማይ ፀሓይን ዳህስሱ።',
      gisSubheading: 'ክልላዊ GIS ካርታ',
      gisHeading: 'ቀጥታዊ ስራሕትን ኣሃዛት መስክን',
      gisHint: 'ዝርዝር ንምርኣይ ነጥብታት ተንክዩ · ንምድሃብ ጠውቑ',
      fieldHubLabel: 'ማእከል መስክ:',
      activeOpsBadge: 'ንጡፍ ስራሕ',
      ourWorkInPrefix: 'ስራሕና ኣብ',
      statBeneficiaries: 'ተጠቀምቲ',
      statActiveProjects: 'ንጡፋት ፕሮጀክት',
      statOngoingUnit: 'ቀጻሊ',
      statSolarWells: 'ዔላታት ፀሓይ',
      statSchemesUnit: 'ጣቢያታት',
      statWoredas: 'ወረዳታት',
      statDistrictsUnit: 'ወረዳታት',
      sectorsHeadingPrefix: 'ኣብዚ ክልል ዝስርሑ ዘፈራት:',
      currentProjectsLabel: 'እዋናዊ ፕሮጀክትታት መስክ',
      strategicInterventionsLabel: 'ስትራቴጂካዊ ጣልቃ-ምእታው',
      supportRegionPrefix: 'ፕሮጀክትታት ደግፉ ኣብ',
      sectorButtons: {
        emergency: 'ምሕደራ ሓደጋ',
        foodSecurity: 'ውሕስነት መግብን ናብራን',
        wash: 'ማይ፣ ንጽህናን ጽሬትን',
        health: 'ጥዕናን ኣመጋግባን',
        education: 'ትምህርትን ኣብያተ-ት/ትን',
        economic: 'ዕብየት ቁጠባን TVETን',
      },
    },
    gisMap: {
      hudTitle: 'ስራሕቲ GIS ኣድራ ኢትዮጵያ',
      modeProjects: '15 ወግዓዊ ፕሮጀክት',
      modeRegions: '7 ክልላዊ ማእከላት',
      totalProjectsCount: '15 ፕሮጀክትታት',
      activeDoneRatio: '(10 ንጡፍ፣ 5 ዝተዛዘመ)',
      beneficiariesShort: 'ተጠቀምቲ',
      regionsCountLabel: '7',
      regionsShort: 'ክልላት',
      projectNumPrefix: 'ፕሮጀክት #',
      targetLocationLabel: 'ቦታታትን ወረዳታትን ዕላማ',
      goalLabel: 'ሽቶ / ዕላማ ፕሮጀክት',
      quickSelectorLabel: 'ቅልጡፍ መረጺ ፕሮጀክት:',
      fifteenOps: '15 ስራሕቲ',
      quickAct: 'ንጡፍ',
      quickEnded: 'ወዲኡ',
      regionalHubBadge: 'ክልላዊ ማእከል መስክ',
      capitalLabel: 'ርእሰ ከተማ:',
      statBeneficiaries: 'ተጠቀምቲ',
      statProjects: 'ፕሮጀክትታት',
      statSolarWells: 'ዔላታት ፀሓይ',
      statWoredas: 'ወረዳታት',
      projectsOperatingLabel: 'ኣብዚ ዝሰርሑ ፕሮጀክትታት:',
      zoomPrompt: '* ዝርዝር ንምርኣይ ነጥቢ ካርታ ጠውቑ',
      resetViewBtn: 'ካርታ ምለስ',
      filterLabel: 'መምረጺ:',
      filterAll15: 'ኩሉ (15)',
      filterOngoing10: 'ቀጻሊ (10)',
      filterCompleted5: 'ዝተዛዘመ (5)',
      zoomInAria: 'ካርታ ኣቕርብ',
      zoomOutAria: 'ካርታ ኣርሕቕ',
      resetMapAria: 'ትርኢት ካርታ ምለስ',
      layersMenuAria: 'ገጽታ ካርታ ምረጽ',
      layersMenuTitle: 'ንብረት ካርታ GIS',
      layers: {
        satellite: { label: 'ሳተላይት ካርታ (GIS)', sub: 'ጽሩይ ስእልን ጽሑፍን' },
        terrain: { label: 'ኣቀማምጣ መሬት', sub: 'ብራኸን ቅርጽን' },
        carto: { label: 'ጽሩይ ሰብኣዊ ካርታ', sub: 'Voyager GIS ቬክተር' },
        osm: { label: 'OpenStreetMap', sub: 'መደበኛ ሰብኣዊ' },
      },
      guideTitle: 'መምርሒ ካርታ GIS',
      selectedProjectLegend: 'ዝተመርጸ ፕሮጀክት (#1–#15)',
      ongoingLegend: 'ቀጻሊ ስራሕቲ',
      completedLegend: 'ኣብ ቀረባ ዝተዛዘሙ',
      activeHubLegend: 'ንጡፍ ማእከል',
      baseLegend: 'ክልላዊ መበገሲ',
    },
    projects: {
      breadcrumbSummary: 'ወግዓዊ መጠቓለሊ ፕሮጀክት',
      kicker: 'መዝገብ ፕሮጀክትታት ኣድራ ኢትዮጵያ',
      badges: {
        documented: '15 ዝተሰነዱ ፕሮጀክትታት',
        tables: '7 ክልላዊ ሰንጠረዣት',
        activeCompleted: '10 ንጡፍን 5 ዝተዛዘመን',
        beneficiaries: '345,000+ ተጠቀምቲ',
      },
      tabRegionalTables: 'ክልላዊ ሰንጠረዣት (7)',
      tabFullTable: 'ምሉእ መጠቓለሊ ሰንጠረዥ',
      tabCards: 'ትርኢት ካርድታት',
      allStatus: 'ኩሉ ኩነታት',
      active10: 'ንጡፍ (10)',
      completed5: 'ወዲኡ (5)',
      searchPlaceholder: 'ፕሮጀክት፣ ወረዳ ወይ ዕላማ ድለ...',
      sectorLabel: 'ዘፈር:',
      allRegions15: 'ኩሎም 7 ክልላት (15)',
      projectSingular: 'ፕሮጀክት',
      projectPlural: 'ፕሮጀክትታት',
      listedWord: 'ተዘርዚሩ',
      idsPrefix: 'መ.ቁ:',
      tableHeaders: {
        no: 'ቑ.',
        sector: 'ዘፈር / ዓውዲ',
        nameLoc: 'ስም ፕሮጀክትን ቦታን',
        objective: 'ዕላማ / ሽቶ ፕሮጀክት',
        woredas: 'ወረዳታትን ከተማታትን',
        duration: 'ግዜ ቆይታ',
        beneficiaries: 'ተጠቀምቲ',
        status: 'ኩነታት',
        dossier: 'ሰነድ',
        action: 'ተግባር',
      },
      emptyGroup: 'ኣብዚ ክልል ምስ መምረጺኹም ዝሰማማዕ ፕሮጀክት የለን።',
      masterRegistryTitle: 'ቀንዲ መዝገብ ፕሮጀክትታት ኣድራ ኢትዮጵያ',
      showingCountTemplate: 'ካብ {total} ዝተረጋገጹ ስራሕቲ {shown} ይረኣዩ ኣለዉ',
      officialRecordBadge: 'ወግዓዊ መዝገብ ሃገር',
      viewDossierBtn: 'ሰነድ ፕሮጀክት ርኣዩ',
      emptySearchTitle: 'ምስ ምርጫኹም ዝሰማማዕ ፕሮጀክት የለን',
      emptySearchSub: 'ዘፈር ወይ ቃል ምድላይ ቀይሩ ፈትኑ።',
      modalGoalTitle: 'ሽቶን ዕላማን ፕሮጀክት',
      modalRegionArea: 'ክልል / ቀንዲ ቦታ',
      modalBeneficiariesNum: 'ተጠቀምቲ',
      modalWoredasTitle: 'ዝተመረጹ ወረዳታትን ከተማታትን',
      modalPartnersTitle: 'መሻርኽትን ለገስትን',
      modalHardTitle: 'ህንጻዊ መሰረተ-ልምዓት',
      modalMaterialsTitle: 'ቀረብ ናውቲ',
      modalSoftTitle: 'ስልጠና ህንጸት ዓቕሚ',
      modalMilestonesTitle: 'ቀንዲ ውጽኢታት',
      supportProgramBtn: 'ነዚ መደብ ደግፉ',
      closeDossierBtn: 'ዕጾ',
    },
    impact: {
      kicker: 'ዝተገምገሙ ውጽኢታትን ኣሃዛትን',
      bannerTitle: 'ኣብ መላእ ኢትዮጵያ ዝልካዕ ለውጢ',
      bannerSubtitle: 'ኣብ ጽሩይ ማይ፣ ኣመጋግባ ህጻናትን እቶት ስድራቤትን ዝተመዝገቡ ምምሕያሻት ዘርእዩ ዝተረጋገጹ መረዳእታታት።',
      exploreMetricsBtn: 'ዝተረጋገጹ ኣሃዛት ርኣዩ',
      spendRatioBadge: '92.4% ወጻኢ መደብ · CHSን EDRMCን ዝተረጋገጸ',
      leftEyebrow: 'ቀጥታዊ ተሓታትነት',
      leftTitle: 'ልግስኹም ኣብ ኢትዮጵያ እንታይ ከም ዝሃንጽ ርኣዩ',
      leftDesc: 'ኣድራ ኢትዮጵያ ትሑት ወጻኢ ምሕደራ ስለዝጥቀም ልዕሊ 92% ወፈያኹም ብቐጥታ ናብ ማሕበረሰብ ይበጽሕ።',
      leftTaxNote: 'ወግዓዊ ደረሰኝን ዓመታዊ ጸብጻብ ኦዲትን ይወሃብ',
      estimatorTitle: 'መዐቀኒ ጽልዋ',
      marketRatePrefix: 'መጠን ሽርፊ:',
      marketRateFloat: '(ወግዓዊ ዕዳጋ)',
      nbeBadge: 'NBE ዋጋ',
      outcomeLabel: 'ቀጥታዊ ሰብኣዊ ውጽኢት',
      donateCtaTemplate: '{amount} ለግሱ',
      currencyEtbLabel: 'ብር (ETB)',
      currencyUsdLabel: 'USD ($)',
    },
    stories: {
      kicker: 'ድምጽታት ካብ መስክ',
      bannerTitle: 'ሓቀኛ ህይወት፣ ጽንዓት ጉዕዞታት',
      bannerSubtitle: 'ካብ ዝተፈላለዩ ጣቢያታት ፕሮጀክት ኣድራ ኢትዮጵያ ብቐጥታ ዝተሰነዱ ታሪኻትን ምስክርነታትን።',
      readBtn: 'ጸብጻባት መስክ ኣንብቡ',
      featuredEyebrow: 'ዝተመርጹ ጸብጻባት',
      latestHeading: 'እዋናዊ ዛንታታት ካብ መስክ',
      allStoriesBtn: 'ኩሎም ዛንታታት',
      supportResilienceBtn: 'ጽንዓት ደግፉ',
    },
    blogs: {
      breadcrumbCurrent: 'ብሎግን ጸብጻባትን',
      kicker: 'መጽሔት መስክን ምርምርን · ብሎግ',
      bannerTitle: 'ጸብጻባት ጽልዋ፣ ሓድሽ ምህዞን ሰብኣውነትን',
      bannerSubtitle: 'ካብ ዝተፈላለዩ ፕሮጀክትታት ኣድራ ኢትዮጵያ ዝተዳለዉ ቴክኒካዊ ጸብጻባትን ታሪኻትን።',
      searchPlaceholder: 'ብሎግ፣ ኣርእስቲ ድለ...',
      emptyTitle: 'ምስ ምርጫኹም ዝሰማማዕ ብሎግ የለን',
      emptySub: 'መምረጺ ወይ ቃል ምድላይ ኣጽርዩ',
      readBlogBtn: 'ብሎግ ኣንብብ',
      modalHeader: 'ጸብጻብ ኣድራ ኢትዮጵያ',
      prevTitle: 'ቀዳማይ ብሎግ',
      nextTitle: 'ቀጻሊ ብሎግ',
      copyTitle: 'ሊንክ ቅዳሕ',
      topicTagsLabel: 'መለለዪ ኣርእስቲ:',
      ctaEyebrow: 'ኣብ መላእ ኢትዮጵያ ማሕበረሰባት ኣበርትዑ',
      ctaHeadingPrefix: 'ከምዚ ዝኣመሰሉ ስራሕቲ ደግፉ:',
      ctaDesc: 'ነፍሲ ወከፍ ወፈያ ብTeleBirr፣ CBE Birrን ካርድን ንማሕበረሰብ-መር ፍታሕ ይድግፍ።',
      ctaBtn: 'ንምድጋፍ ለግሱ',
    },
    aiForGood: {
      kicker: 'AI ንሰናይ',
      bannerTitle: 'ንሰባት ብኽብሪ ዘገልግል ቴክኖሎጂ',
      bannerSubtitle: 'ኣድራ ኢትዮጵያ ንAIን ዳታን ብጥንቃቐ፣ ብግሉጽነትን ኩሉ ግዜ ንማሕበረሰብ ማእከል ብምግባርን ይጥቀመሉ።',
      chatBtn: 'ምስ ADRA AI ተዛረቡ',
      approachTitle: 'ኣካይዳና',
      approachBody: 'AI ሰብኣዊ ጉጅለታት ድሌታት ቀልጢፎም ክርድኡን ሃብቲ ብግቡእ ክመርሑን ይሕግዝ። እንተኾነ ንውልቃዊ ምስጢርን ፍትሓውነትን ስግኣት የምጽእ። ኣድራ ነዞም መሳርሕታት ዝጥቀም ሓደጋታት ክቆጻጸር ምስ ዝኽእል ጥራይ እዩ።',
      principlesTitle: 'መትከላትና',
      principlesSubtitle: 'ሽዱሽተ ሕግታት ንኹሉ ውሳነ ቴክኖሎጂ ይመርሑ።',
    },
    tenders: {
      kicker: 'ምትሕብባር፣ ስራሕን ጨረታን',
      bannerTitle: 'ጨረታታት፣ ናይ ስራሕ ዕድላትን ሕትመታትን',
      bannerSubtitle: 'ብግሉጽነትን ብቕዓትን ዝምራሕ ኣሰራርሓ: ኩሎም ክፍቲ ጨረታታት፣ ስራሕትን ዓመታዊ ጸብጻባትን ንህዝቢ ክፍትታት እዮም።',
      tabTenders: 'ጨረታታትን RFPን',
      tabCareers: 'ክፍቲ ስራሕቲ',
      tabPublications: 'ጸብጻባትን ሕትመትን',
      submissionDeadline: 'መወዳእታ:',
      closingDate: 'መዕጸዊ:',
      viewTenderBtn: 'ጨረታ ርኣይ',
      applyBtn: 'ሕጂ ኣመልክት',
      viewAbstractBtn: 'ጽማቕ ርኣይ',
      downloadPdfBtn: 'PDF ኣውርድ',
      locationPrefix: 'ቦታ:',
      deadlinePrefix: 'መወዳእታ:',
      requirementsTitle: 'ኣድለይቲ መዐቀኒታትን ብቕዓታትን:',
      requestBidPackage: 'ወግዓዊ ሰነድ ጨረታ ሕተቱ',
      submitCandidateEoi: 'ናይ ስራሕ መመልከቲ ኣእትዉ',
      ackTitle: 'መመልከቲ ተመዝጊቡ',
      ackBodyTemplate: 'መለለዪ ቁጽሪ ተዓቂቡ። መምርሒ ናብ {email} ተላኢኹ ኣሎ።',
      bidderLabel: 'ስም ትካል / ተጫራታይ',
      fullNameLabel: 'ምሉእ ስም',
      namePlaceholder: 'ንኣብነት፡ ኣላዛር መንግስቱ',
      emailLabel: 'ወግዓዊ ኢመይል',
      emailPlaceholder: 'contact@domain.et',
      requestBidBtn: 'ሰነድ ጨረታ ሕተት',
      submitAppBtn: 'መመልከቲ ስደድ',
      pubNoticeLabel: 'መተሓሳሰቢ ሕትመት:',
      pubNoticeBody: 'ኩሎም ቴክኒካዊ መምርሒታትን ፋይናንሳዊ ኦዲትን ኣድራ ኢትዮጵያ ንተመራመርትን መሻርኽትን ብናጻ ክፍቲ እዮም።',
      confirmDownloadBtn: 'ፋይል ኣውርድ',
      downloadStartedMsg: 'ሰነድ ንምውራድ ተዳልዩ ኣሎ።',
    },
    contact: {
      eyebrow: 'ርክብ',
      title: 'ኣድራ ኢትዮጵያ ተወከሱ',
      subtitle: 'ንምትሕብባር፣ ለጋሲ ፕሮጀክት፣ ሕቶ ሚድያ ወይ ቤት ጽሕፈት ኣዲስ ኣበባ ንምብጻሕ ምስ ሃገራዊ ጉጅለና ተራኸቡ።',
      hqTitle: 'ቀንዲ ሃገራዊ ቤት ጽሕፈት',
      hqSub: 'ቤት ጽሕፈት ኣዲስ ኣበባ',
      addressMain: 'ጎደና ራስ ደስታ ዳምጠው፣ ኣዲስ ኣበባ',
      addressSub: 'ቂርቆስ ክፍለ-ከተማ · ጎኒ ዩኒየን ኢትዮጵያ · ሳ.ፖ 145',
      hoursText: 'ሰኑይ–ሓሙስ: 8:30–5:30 · ዓርቢ: 8:30–1:30',
      registeredBadge: 'ዝተመዝገበ NGO · ቁጽሪ 2049',
      hubsTitle: 'ክልላዊ ማእከላት ምትእስሳር',
      hubs: {
        somaliTitle: 'ክልል ሶማሌ',
        somaliSub: 'ጣቢያታት ጎዴን ኬላፎን',
        oromiaTitle: 'ክልል ኦሮሚያ',
        oromiaSub: 'ኣዳማን ምብራቕ ሐረርጌን',
        sidamaTitle: 'ክልል ሲዳማ',
        sidamaSub: 'ቤት ጽሕፈት ሃዋሳ',
        tigrayAmharaTitle: 'ትግራይን ኣምሓራን',
        tigrayAmharaSub: 'ማእከላት መቐለን ደሴን',
      },
      formTitle: 'ወግዓዊ መልእኽቲ ስደዱ',
      formSub: 'ጉጅለ ርክብና ኣብ ውሽጢ 24–48 ሰዓታት ስራሕ ምላሽ ይህብ።',
      sentTitle: 'መልእኽቲ ተመዝጊቡ',
      sentBodyTemplate: 'የቐንየልና፣ {name}። ብዛዕባ {category} ዝሰደድኩሞ ሕቶ ናብ ቀንዲ ቤት ጽሕፈት ተላኢኹ።',
      partnerDefault: 'መሻርኽቲ',
      inquiryLabel: 'ዓይነት ሕቶ',
      inquiries: {
        general: 'ሓፈሻዊ ሕቶን ሓበሬታን',
        partnership: 'ትካላዊ ምትሕብባርን ድጋፍን',
        procurement: 'ሕቶ ዕድጊን ጨረታን',
        careers: 'ዕድላት ስራሕን ሓይሊ ሰብን',
        media: 'ሚድያን ሕቶ ዶክመንታሪን',
      },
      fullNameLabel: 'ምሉእ ስም',
      fullNamePlaceholder: 'ንኣብነት፡ ኣልማዝ በቀለ',
      emailLabel: 'ኢመይል',
      emailPlaceholder: 'almaz@org.et',
      phoneLabel: 'ስልኪ (ኣማራጺ)',
      phonePlaceholder: '+251 9...',
      messageLabel: 'ዝርዝር መልእኽቲ',
      messagePlaceholder: 'መልእኽትኹም ኣብዚ ጽሓፉ...',
      submitBtn: 'መልእኽቲ ስደድ',
    },
    donateModal: {
      closeAria: 'ዕጾ',
      thankYouTemplate: 'የቐንየልና፣ {donor}!',
      generousDonor: 'ለጋሲ',
      ackSubtitle: 'ወፈያኹም ኣብ መላእ ኢትዮጵያ ንጽንዓት ማሕበረሰብ ብቐጥታ ይድግፍ።',
      receiptRef: 'ቁጽሪ ደረሰኝ:',
      contribAmount: 'መጠን:',
      designatedSector: 'ዓውዲ መደብ:',
      paymentGateway: 'መስመር:',
      dateIssued: 'ዝተዋህበ ዕለት:',
      taxNote: 'ኣድራ ኢትዮጵያ ብACSO (ቁጽሪ 2049) ዝተመዝገበ እዩ። ወፈያ ብኣዋጅ #1113/2019 ይምራሕ።',
      saveReceiptBtn: 'ደረሰኝ ዓቅብ',
      receiptSavedMsg: 'ወግዓዊ ደረሰኝ ተዓቂቡ ኣሎ።',
      rateLabel: 'መጠን ሽርፊ:',
      rateFloat: '(ወግዓዊ ዕዳጋ)',
      nbeVerified: 'NBE ዋጋ',
      oneTime: 'ሓደ ግዜ',
      monthly: 'ወርሓዊ',
      selectAmount: 'መጠን ምረጹ',
      customPlaceholderPrefix: 'ካልእ መጠን ብ',
      programAreaLabel: 'ዓውዲ መደብ',
      selectGateway: 'መስመር ክፍሊት',
      scanQrTab: 'QR ስካን',
      appCardTab: 'ኣፕ / ካርድ',
      telebirrTag: '#1 ET',
      telebirrSub: 'ኢትዮ ቴሌኮም',
      cbeTag: 'ባንክ',
      cbeSub: 'ንግዲ ባንክ',
      stripeTag: 'ዓለም',
      stripeSub: 'ካርድ / Apple',
      telebirrHeader: 'ቴሌብር ሞባይል',
      cbeHeader: 'ንግዲ ባንክ ኢትዮጵያ',
      stripeHeader: 'Stripe ዓለምለኻዊ ክፍሊት',
      scanCodeEnabled: 'QR ድሉው',
      howToScanPay: 'ከመይ ስካን ከም ዝግበር:',
      telebirrSteps: [
        'ኣብ ስልክኹም TeleBirr App ክፈቱ',
        'Scan QR ዝብል ጠውቑ',
        'ነዚ ኮድ ስካን ብምግባር መጠኑ ለኣኹ',
        'ብPIN ቁጽርኹም ኣረጋግጹ',
      ],
      cbeSteps: [
        'CBE Mobile ወይ CBE Birr ክፈቱ',
        'Scan to Pay ምረጹ',
        'ነዚ ወግዓዊ QR ኣድራ ስካን ግበሩ',
        'ናብ ሕሳብ 1000012345678 ኣረጋግጹ',
      ],
      merchantCodeLabel: 'ነጋዳይ:',
      merchantShortCode: 'ሓጺር ቁጽሪ ነጋዳይ ኣድራ:',
      copyCode: 'ኮድ ቅዳሕ',
      copied: 'ተቐዲሑ!',
      copyBtn: 'ቅዳሕ',
      launchTelebirr: 'TeleBirr ክፈት',
      dialTelebirrUssd: '*127# ደውሉ',
      cbeAccountLabel: 'ሕሳብ CBE:',
      cbeBranchLabel: 'ኣድራ ኢትዮጵያ፣ ጨንፈር ቂርቆስ',
      openCbeApp: 'CBE ክፈት',
      dialCbeUssd: '*847# ደውሉ',
      instantMobilePay: 'ቅልጡፍ ክፍሊት:',
      stripeMobileDesc: 'ብካሜራ ስልኪ Apple Pay፣ Google Pay ወይ ካርድ ንምኽፋል ስካን ግበሩ።',
      enterCardLink: 'ወይ ዝርዝር ካርድ ኣብዚ ኣእትዉ →',
      cardNumberLabel: 'ቁጽሪ ካርድ',
      expiryLabel: 'ማብቂያ (MM/YY)',
      cvcLabel: 'CVC ኮድ',
      donorNameLabel: 'ስም ለጋሲ',
      donorNamePlaceholder: 'ዳዊት ኣለማየሁ',
      donorPhoneLabel: 'ቁጽሪ ስልኪ',
      donorEmailLabel: 'ኢመይል (ኣማራጺ)',
      confirmTemplate: '{amount} ኣረጋግጽ',
      securityFooter: 'ውሑስ መስመር · Stripe፣ CBEን TeleBirrን',
      sectors: {
        general: 'ኣዝዩ ኣድላዪ ቦታ (ቀዳማይ ረድኤት)',
        wash: 'ጽሩይ ማይን ዔላታት ፀሓይን (WASH)',
        education: 'ትምህርትን ኣዋልድን (SEAQE II)',
        health: 'ጥዕናን ሕክምና ኣመጋግባን (CTC)',
        foodSecurity: 'ውሕስነት መግብን መስኖን',
        economicGrowth: 'ኣካዳሚ ፀሓይ TVET መንእሰያት',
        emergency: 'ምላሽ ሓደጋን ህጹጽ ረድኤትን',
        peaceBuilding: 'ህንጸት ሰላምን ማሕበራዊ ምትእስሳርን',
      },
    },
    qr: {
      telebirrTitle: 'ክፍሊት TeleBirr',
      telebirrSub: 'ብTeleBirr ኣፕ ስካን ግበሩ',
      cbeTitle: 'ክፍሊት CBE Birr',
      cbeSub: 'ብCBE ሞባይል ኣፕ ስካን ግበሩ',
      stripeTitle: 'Stripe ሞባይል',
      stripeSub: 'ንApple Pay ወይ ካርድ ስካን ግበሩ',
      telebirrQuickLabel: 'QR TeleBirr',
      cbeQrLabel: 'QR CBE Birr',
      stripeMobileLabel: 'QR Stripe',
    },
    chatbot: {
      welcome: 'ሰላም! ኣነ ADRA AI ናይ ኣድራ ኢትዮጵያ እየ። ብዛዕባ ሸውዓተ ዓውድታት ስራሕና (ህንጸት ሰላም ሓዊሱ)፣ ክልላዊ ስራሕቲ፣ ካብ 1982 ዘሎ ታሪኽ፣ መትከላት AI ወይ ብTeleBirrን CBEን ብዛዕባ ምልጋስ ክትሓቱ ትኽእሉ።',
      verifiedBadge: 'ዝተረጋገጸ',
      headerSub: 'ኣብ መዝገብ ኣድራ ኢትዮጵያ ዝተመስረተ',
      closeAria: 'ADRA AI ዕጾ',
      sourcePrefix: 'ምንጪ:',
      jumpToSection: 'ናብ ክፍሊ ኪድ',
      searchingText: 'መዛግብቲ ኣድራ ይድለ ኣሎ...',
      suggestedLabel: 'ሓሳባት:',
      placeholder: 'ብዛዕባ መደባት፣ ክልላት፣ ታሪኽ ወይ ወፈያ ሕተቱ...',
      sendAria: 'መልእኽቲ ስደድ',
      footerNote: 'መትከላት AI ንሰናይ ኣድራ ኢትዮጵያ የኽብር (ሰብኣዊ ቁጽጽርን ምስጢርን)',
      fallbackReply: 'ብመሰረት መዝገብ ኣድራ ኢትዮጵያ ኣብ 8 ክልላት ብ7 ዓውድታት (WASH፣ ትምህርቲ፣ ውሕስነት መግቢ፣ ምላሽ ሓደጋ፣ ጥዕና፣ TVETን ህንጸት ሰላምን) ንሰርሕ። ብዛዕባ ታሪኽ 1982 ወይ ብTeleBirr (251911) ምልጋስ ሕተቱ።',
      prompts: {
        donate: 'ብTeleBirr/CBE ምልጋስ?',
        ai: '6 መትከላት AI እንታይ እዮም?',
        somali: 'ስራሕቲ ኣብ ክልል ሶማሌ?',
        wash: 'ጽሩይ ማይን WASHን?',
        history: 'ታሪኽ ኣድራ ካብ 1982',
      },
    },
  },
};
