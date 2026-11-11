import { Language } from '../types';

export type LangMap<T = string> = Record<Language, T>;

export interface TeamMember {
  id: string;
  name: string;
  role: LangMap;
  credentials?: LangMap;
  bio: LangMap;
}

export interface TeamCategory {
  id: 'board' | 'executive' | 'departments' | 'programs' | 'field';
  title: LangMap;
  description: LangMap;
  members: TeamMember[];
}

export const TEAM_CATEGORIES: TeamCategory[] = [
  {
    id: 'board',
    title: {
      en: 'Board of Directors',
      am: 'የስራ አመራር ቦርድ',
      om: 'Boordii Daarektarootaa',
      ti: 'ቦርድ ዳይሬክተራት'
    },
    description: {
      en: 'Independent strategic governance, fiduciary stewardship, and institutional compliance oversight.',
      am: 'ገለልተኛ ስትራቴጂካዊ አመራር፣ የፋይናንስ ተጠያቂነት እና ተቋማዊ ቁጥጥር።',
      om: 'Bulchiinsa tarsiimawaa walabaa, itti-gaafata qabeenyaa fi toʼannoo seeraa.',
      ti: 'ናጻ ስትራቴጂካዊ ምሕደራ፣ ሓለዋ ፋይናንስን ትካላዊ ቁጽጽርን።'
    },
    members: [
      {
        id: 'board-1',
        name: 'Dr. Tadesse Kebede',
        role: {
          en: 'Board Chairman',
          am: 'የቦርድ ሰብሳቢ',
          om: 'Walitti-qabaa Boordii',
          ti: 'ኣቦ መንበር ቦርድ'
        },
        credentials: {
          en: 'Ph.D. in Public Health Governance',
          am: 'Ph.D. በሕዝብ ጤና አስተዳደር',
          om: 'Ph.D. Bulchiinsa Fayyaa Hawaasaa',
          ti: 'Ph.D. ኣብ ምሕደራ ጥዕና ህዝቢ'
        },
        bio: {
          en: 'Providing strategic direction, civil society advocacy, and statutory compliance oversight across nationwide operations.',
          am: 'በሀገር አቀፍ የሰብዓዊ ስራዎች ላይ ስትራቴጂካዊ አቅጣጫ እና የህግ ተገዢነት ቁጥጥር ይመራሉ።',
          om: 'Qajeelfama tarsiimawaa, falmii hawaasa siivilii fi kabajamuu seeraa biyyaalessaa ni hoggana.',
          ti: 'ኣብ ሃገራዊ ሰብኣዊ ስራሕቲ ስትራቴጂካዊ ኣንፈትን ሕጋዊ ተገዛእነትን ይመርሕ።'
        }
      },
      {
        id: 'board-2',
        name: 'Rahel Negash, CPA',
        role: {
          en: 'Board Treasurer & Audit Lead',
          am: 'የቦርድ ገንዘብ ያዥና የኦዲት መሪ',
          om: 'Qabaa Maallaqaa fi Qorataa Odiitii',
          ti: 'ተሓዚት ገንዘብን መራሒት ኦዲትን'
        },
        credentials: {
          en: 'CPA, Financial Fiduciary Specialist',
          am: 'CPA, የፋይናንስ ኦዲት ባለሙያ',
          om: 'CPA, Ogeettii Faayinaansii',
          ti: 'CPA, ክኢላ ኦዲት ፋይናንስ'
        },
        bio: {
          en: 'Superintending independent financial audits, statutory ACSO fiscal standards, and transparent donor resource stewardship.',
          am: 'ገለልተኛ የፋይናንስ ኦዲቶችን፣ የACSO ደረጃዎችን እና የለጋሾችን ሀብት ግልጽ አስተዳደር ይቆጣጠራሉ።',
          om: 'Odiitii maallaqaa walabaa, ulaagaa ACSO fi bulchiinsa qabeenyaa ifa taʼe ni hordofti.',
          ti: 'ናጻ ኦዲት ፋይናንስ፣ መዐቀኒ ACSOን ግሉጽ ኣተሓሕዛ ሃብቲ ለገስትን ትከታተል።'
        }
      },
      {
        id: 'board-3',
        name: 'Pastor Melaku Feyisa',
        role: {
          en: 'Board Secretary & Ethics Director',
          am: 'የቦርድ ፀሐፊና የስነ-ምግባር ዳይሬክተር',
          om: 'Barreessaa Boordii fi Daarektara Naamusaa',
          ti: 'ጸሓፊ ቦርድን ዳይሬክተር ስነ-ምግባርን'
        },
        credentials: {
          en: 'M.A. in Humanitarian Ethics',
          am: 'M.A. በሰብዓዊ ስነ-ምግባር',
          om: 'M.A. Naamusa Namoomaa',
          ti: 'M.A. ኣብ ሰብኣዊ ስነ-ምግባር'
        },
        bio: {
          en: 'Guiding institutional ethics, faith-based humanitarian harmony, peace reconciliation, and core ADRA values.',
          am: 'ተቋማዊ ስነ-ምግባርን፣ የማህበረሰብ ሰላምን እና የአድራን ዋና እሴቶች ይመራሉ።',
          om: 'Naamusa dhaabbataa, nagaa hawaasaa fi duudhaalee ADRA ni qajeelcha.',
          ti: 'ትካላዊ ስነ-ምግባር፣ ሰላም ማሕበረሰብን ቀንዲ ክብርታት ኣድራን ይመርሕ።'
        }
      },
      {
        id: 'board-4',
        name: 'Dr. Elizabeth Wolde',
        role: {
          en: 'Board Member & Development Advisor',
          am: 'የቦርድ አባልና የልማት አማካሪ',
          om: 'Miseensa Boordii fi Gorsituu Misoomaa',
          ti: 'ኣባል ቦርድን ኣማኻሪት ልምዓትን'
        },
        credentials: {
          en: 'Ph.D. in Climate Resilience',
          am: 'Ph.D. በአየር ንብረት ጽናት',
          om: 'Ph.D. Dandamannaa Qilleensaa',
          ti: 'Ph.D. ኣብ ጽንዓት ክሊማ'
        },
        bio: {
          en: 'Advising on climate-smart agriculture, gender inclusion policies, and institutional donor partnerships.',
          am: 'በዘመናዊ ግብርና፣ በስርዓተ-ፆታ አካታችነት እና በተቋማዊ አጋርነት ላይ ምክር ይሰጣሉ።',
          om: 'Qonna ammayyaa, hirmaannaa dubartootaa fi waltaʼiinsa dhaabbilee irratti gorsa ni kenniti.',
          ti: 'ኣብ ዘመናዊ ሕርሻ፣ ማዕርነት ጾታን መሻርኽቲ ትካላትን ትምኽር።'
        }
      }
    ]
  },
  {
    id: 'executive',
    title: {
      en: 'Leadership & Management Team',
      am: 'አመራርና የስራ አመራር ቡድን',
      om: 'Hoggansa fi Garee Hojii Raawwachiiftuu',
      ti: 'መርሕነትን ጉጅለ ምሕደራን'
    },
    description: {
      en: 'Senior management team leading nationwide operations, program delivery, and fiduciary compliance.',
      am: 'ሀገር አቀፍ ስራዎችን፣ የፕሮግራም አፈጻጸምን እና የፋይናንስ አስተዳደርን የሚመራ ከፍተኛ ቡድን።',
      om: 'Garee olaanaa hojii biyyaalessaa, raawwii sagantaa fi seera maallaqaa hogganu.',
      ti: 'ሃገራዊ ስርሒታት፣ ኣፈጻጽማ መደባትን ተገዛእነት ፋይናንስን ዝመርሕ ላዕለዋይ ጉጅለ።'
    },
    members: [
      {
        id: 'exec-1',
        name: 'Dima Saba',
        role: {
          en: 'Interim Country Director',
          am: 'ጊዜያዊ የሀገር ውስጥ ዳይሬክተር',
          om: 'Daarektara Biyyooleessaa Yeroo',
          ti: 'ግዝያዊ ዳይሬክተር ሃገር'
        },
        credentials: {
          en: 'Humanitarian Leadership Specialist',
          am: 'የሰብዓዊ አመራርና ስራዎች ባለሙያ',
          om: 'Ogeessa Hoggansa Namoomaa',
          ti: 'ክኢላ ሰብኣዊ መርሕነት'
        },
        bio: {
          en: 'Leading nationwide strategic operations, donor partnerships, federal government liaisons, and crisis coordination.',
          am: 'ሀገር አቀፍ ስትራቴጂካዊ ስራዎችን፣ የለጋሽ አጋርነቶችን እና የአደጋ ጊዜ ማስተባበርን ይመራሉ።',
          om: 'Hojii tarsiimawaa biyyaalessaa, waltaʼiinsa deeggartootaa fi qindoomina balaa ni hoggana.',
          ti: 'ሃገራዊ ስትራቴጂካዊ ስርሒታት፣ መሻርኽቲ ለገስትን ምውህሃድ ቅልውላውን ይመርሕ።'
        }
      },
      {
        id: 'exec-2',
        name: 'Zerihun Awano, Ph.D.',
        role: {
          en: 'Program Director',
          am: 'የፕሮግራሞች ዳይሬክተር',
          om: 'Daarektara Sagantaalee',
          ti: 'ዳይሬክተር መደባት'
        },
        credentials: {
          en: 'Ph.D. in Development Economics',
          am: 'Ph.D. በልማት ኢኮኖሚክስ',
          om: 'Ph.D. Dinagdee Misoomaa',
          ti: 'Ph.D. ኣብ ኢኮኖሚክስ ልምዓት'
        },
        bio: {
          en: 'Directing multi-sector development initiatives across all 7 regions, technical quality assurance, and impact.',
          am: 'በ7ቱም ክልሎች የሚካሄዱ የልማት ፕሮግራሞችን፣ የጥራት ማረጋገጫን እና ውጤታማነትን ይመራሉ።',
          om: 'Sagantaalee misoomaa naannolee 7 keessaa, qulqullina teeknikaa fi buʼaa hawaasaa ni hoggana.',
          ti: 'ኣብ 7 ክልላት ዝካየዱ መደባት ልምዓት፣ ጽሬት ስራሕን ጽልዋን ይመርሕ።'
        }
      },
      {
        id: 'exec-3',
        name: 'Hana Denbi',
        role: {
          en: 'Finance & Grant Director',
          am: 'የፋይናንስና የድጋፍ ስምምነቶች ዳይሬክተር',
          om: 'Daarektara Faayinaansii fi Deeggarsaa',
          ti: 'ዳይሬክተር ፋይናንስን ውዕላትን'
        },
        credentials: {
          en: 'Grant Fiduciary & Finance Lead',
          am: 'የፋይናንስና የድጋፍ አስተዳደር መሪ',
          om: 'Hoggantuu Faayinaansii',
          ti: 'መራሒት ፋይናንስን ግራንትን'
        },
        bio: {
          en: 'Overseeing institutional accounting, bilateral grant compliance, and an annual portfolio of $4.7M–$5.1M USD.',
          am: 'ተቋማዊ ሂሳብን፣ የለጋሽ ስምምነቶችን እና ዓመታዊ የ$4.7M–$5.1M ዶላር በጀት አስተዳደርን ይመራሉ።',
          om: 'Herrega dhaabbataa fi baajata waggaa $4.7M–$5.1M USD seeraan toʼatti.',
          ti: 'ትካላዊ ሕሳብን ዓመታዊ $4.7M–$5.1M ባጀትን ብግቡእ ትመርሕ።'
        }
      },
      {
        id: 'exec-4',
        name: 'Addisu Mengistu',
        role: {
          en: 'HR Manager',
          am: 'የሰው ኃይል ስራ አስኪያጅ',
          om: 'Maniijara Qabeenya Namaa',
          ti: 'ኣመሓዳሪ ሓይሊ ሰብ'
        },
        credentials: {
          en: 'M.Sc. in HR Administration',
          am: 'M.Sc. በሰው ኃይል አስተዳደር',
          om: 'M.Sc. Bulchiinsa Qabeenya Namaa',
          ti: 'M.Sc. ኣብ ምሕደራ ሓይሊ ሰብ'
        },
        bio: {
          en: 'Supervising personnel development and welfare for 89 total staff (15 country office, 74 field) across Ethiopia.',
          am: 'በመላው ኢትዮጵያ ለ89 ሰራተኞች (15 ዋና ቢሮ፣ 74 መስክ) የሰው ኃይል ልማትና ደህንነት ያስተባብራሉ።',
          om: 'Guddina fi nageenya hojjettoota 89 (15 waajjira, 74 dirree) Itoophiyaa ni hordofa.',
          ti: 'ን89 ሰራሕተኛታት (15 ዋና ቤት ጽሕፈት፣ 74 መስኪ) ልምዓትን ድሕንነትን ይከታተል።'
        }
      }
    ]
  },
  {
    id: 'departments',
    title: {
      en: 'Department Heads',
      am: 'የመምሪያ ኃላፊዎች',
      om: 'Itti Gaafatamtoota Kutaa',
      ti: 'ሓለፍቲ ክፍልታት'
    },
    description: {
      en: 'Departmental leadership steering safeguarding, supply chain, digital GIS innovations, and learning.',
      am: 'የደህንነት ጥበቃ፣ የአቅርቦት ሰንሰለት፣ የGIS ቴክኖሎጂ እና የክትትልና ግምገማ መምሪያዎችን የሚመሩ ኃላፊዎች።',
      om: 'Hoggansa kutaawwan eegumsaa, dhiyeessii, teeknooloojii GIS fi hordoffii.',
      ti: 'ድሕንነት፣ ቀረብ ሎጂስቲክስ፣ ቴክኖሎጂ GISን ምክትታልን ዝመርሑ ሓለፍቲ።'
    },
    members: [
      {
        id: 'dept-1',
        name: 'Selamawit Tadesse',
        role: {
          en: 'Head of Safeguarding & Compliance',
          am: 'የህግና ደህንነት ጥበቃ መምሪያ ኃላፊ',
          om: 'Itti Gaafatamtuu Eegumsaa fi Seeraa',
          ti: 'ሓላፊት ድሕንነትን ተገዛእነትን'
        },
        credentials: {
          en: 'LL.M. in Human Rights Law',
          am: 'LL.M. በሰብዓዊ መብቶች ህግ',
          om: 'LL.M. Seera Mirga Namoomaa',
          ti: 'LL.M. ኣብ ሕጊ ሰብኣዊ መሰላት'
        },
        bio: {
          en: 'Enforcing zero tolerance for PSEAH, child protection frameworks, whistleblower hotlines, and ACSO compliance.',
          am: 'በPSEAH ላይ ዜሮ ትዕግስት፣ የህጻናት ጥበቃ፣ የጥቆማ መስመር እና የACSO ህጋዊነትን ያስከብራሉ።',
          om: 'Zero-tolerance PSEAH, eegumsa daaʼimmanii fi ulaagaa ACSO ni kabachiifti.',
          ti: 'ዜሮ ትዕግስቲ PSEAH፣ ሓለዋ ህጻናት፣ መስመር ምሕባርን ሕጋዊነት ACSOን ተኽብር።'
        }
      },
      {
        id: 'dept-2',
        name: 'Kassahun Gebre',
        role: {
          en: 'Head of Supply Chain & Logistics',
          am: 'የአቅርቦት ሰንሰለትና ሎጅስቲክስ ኃላፊ',
          om: 'Itti Gaafatamaa Dhiyeessii fi Loojistiksii',
          ti: 'ሓላፊ ቀረብን ሎጂስቲክስን'
        },
        credentials: {
          en: 'M.Sc. in Supply Chain Systems',
          am: 'M.Sc. በሎጅስቲክስ አስተዳደር',
          om: 'M.Sc. Sirna Dhiyeessii',
          ti: 'M.Sc. ኣብ ሲስተም ሎጂስቲክስ'
        },
        bio: {
          en: 'Directing central warehouse operations in Kirkos, emergency fleet distribution, and transparent procurement.',
          am: 'የቂርቆስ ማዕከላዊ መጋዘንን፣ የአደጋ ጊዜ ሎጅስቲክስን እና ግልጽ የግዥ ስርዓትን ይመራሉ።',
          om: 'Kuusaa Qirqoos, geejjiba yeroo balaa fi bittaa ifa taʼe ni hoggana.',
          ti: 'ማእከላዊ መኽዘን ቂርቆስ፣ ሎጂስቲክስ ሓደጋን ግሉጽ ዕድጊን ይመርሕ።'
        }
      },
      {
        id: 'dept-3',
        name: 'Hiwot Worku',
        role: {
          en: 'Head of MEAL & Accountability',
          am: 'የክትትል፣ ግምገማና ተጠያቂነት ኃላፊ',
          om: 'Itti Gaafatamtuu Hordoffii fi Madaallii',
          ti: 'ሓላፊት MEALን ተሓታትነትን'
        },
        credentials: {
          en: 'M.Sc. in Development Statistics',
          am: 'M.Sc. በልማት ስታቲስቲክስ',
          om: 'M.Sc. Istaatistiksii Misoomaa',
          ti: 'M.Sc. ኣብ ስታቲስቲክስ ልምዓት'
        },
        bio: {
          en: 'Architecting digital data collection, field impact evaluations, community feedback loops, and donor auditing.',
          am: 'ዲጂታል መረጃ አሰባሰብን፣ የመስክ ውጤት ግምገማን እና የማህበረሰብ አስተያየት ስርዓትን ይዘረጋሉ።',
          om: 'Funaanama daataa dijitaalaa, madaallii dirree fi yaada hawaasaa ni qindeessiti.',
          ti: 'ዲጂታል ኣተኣኻኽባ ዳታ፣ ገምጋም ጽልዋ መስክን ግብረ-መልሲ ሕብረተሰብን ትመርሕ።'
        }
      },
      {
        id: 'dept-4',
        name: 'Biniam Zerihun',
        role: {
          en: 'Head of ICT & GIS Innovations',
          am: 'የኢንፎርሜሽን ቴክኖሎጂና GIS ኃላፊ',
          om: 'Itti Gaafatamaa Teeknooloojii fi GIS',
          ti: 'ሓላፊ ICTን GIS ምህዞን'
        },
        credentials: {
          en: 'B.Sc. in CS & GIS Geomatics',
          am: 'B.Sc. በኮምፒውተር ሳይንስና GIS',
          om: 'B.Sc. Saayinsii Kompiitaraa & GIS',
          ti: 'B.Sc. ኣብ CSን GISን'
        },
        bio: {
          en: 'Spearheading GIS spatial infrastructure, remote sensing for water schemes, AI pipelines, and cybersecurity.',
          am: 'የGIS ካርታ መሰረተ ልማትን፣ የውሃ ጣቢያ ክትትልን፣ AI ስርዓቶችን እና የሳይበር ደህንነትን ይመራሉ።',
          om: 'Buʼuura GIS, hordoffii bishaanii, tooftaa AI fi nageenya saayibarii ni hoggana.',
          ti: 'ትሕተ-ቅርጺ GIS፣ ምክትታል ነቑጣታት ማይ፣ ሲስተማት AIን ድሕንነት ሳይበርን ይመርሕ።'
        }
      }
    ]
  },
  {
    id: 'programs',
    title: {
      en: 'Program Managers',
      am: 'የፕሮግራም ስራ አስኪያጆች',
      om: 'Maanajjaroota Sagantaalee',
      ti: 'ኣመሓደርቲ መደባት'
    },
    description: {
      en: 'Senior managers delivering sector excellence across WASH, Health, Food Security, and TVET.',
      am: 'በንጹህ ውሃ፣ ጤና፣ ምግብ ዋስትና እና TVET ዘርፎች ውጤታማ አፈጻጸም የሚመሩ ስራ አስኪያጆች።',
      om: 'Maanajjaroota olaanoo damee WASH, Fayyaa, Wabii Nyaataa fi TVET hojii irra oolchan.',
      ti: 'ኣብ WASH፣ ጥዕና፣ ውሕስነት መግብን TVETን ጽሬት ዘረጋግጹ ላዕለዎት ኣመሓደርቲ።'
    },
    members: [
      {
        id: 'prog-1',
        name: 'Eng. Fikru Getachew',
        role: {
          en: 'National Solar WASH Manager',
          am: 'የሶላር ውሃና ሳኒቴሽን ስራ አስኪያጅ',
          om: 'Maanajjara Bishaan Soolaarii',
          ti: 'ኣመሓዳሪ ጸሓያዊ WASH'
        },
        credentials: {
          en: 'B.Sc. in Water Engineering',
          am: 'B.Sc. በውሃ ሀብት ምህንድስና',
          om: 'B.Sc. Injiinariingii Bishaanii',
          ti: 'B.Sc. ኣብ ምህንድስና ማይ'
        },
        bio: {
          en: 'Engineering deep borehole solar pump schemes, piped networks, and community WASHCo training nationwide.',
          am: 'ጥልቅ የሶላር ውሃ ጉድጓዶችን፣ የቧንቧ መስመሮችን እና የማህበረሰብ WASHCo ስልጠናዎችን ይመራሉ።',
          om: 'Boolla bishaanii gadi-fagoo soolaarii, sarara bishaanii fi leenjii WASHCo ni hoggana.',
          ti: 'ዓሚቕ ጸሓያዊ ዒላታት ማይ፣ መስመራት ሻምብቆን ስልጠና WASHCoን ይመርሕ።'
        }
      },
      {
        id: 'prog-2',
        name: 'Dr. Almaz Tefera',
        role: {
          en: 'Emergency Health & Nutrition Manager',
          am: 'የድንገተኛ ጤናና ስነ-ምግብ ስራ አስኪያጅ',
          om: 'Maanajjara Fayyaa fi Nyaataa',
          ti: 'ኣመሓዳሪት ህጹጽ ጥዕናን ኣመጋግባን'
        },
        credentials: {
          en: 'M.D., M.P.H. in Child Nutrition',
          am: 'M.D., M.P.H. በህጻናት ስነ-ምግብ',
          om: 'M.D., M.P.H. Nyaata Daaʼimmanii',
          ti: 'M.D., M.P.H. ኣብ ኣመጋግባ ህጻናት'
        },
        bio: {
          en: 'Scaling Community Therapeutic Care (CTC), malnutrition clinics, and mobile health teams in pastoralist zones.',
          am: 'በአርብቶ አደር አካባቢዎች የማህበረሰብ ህክምናን (CTC) እና ተንቀሳቃሽ የጤና ቡድኖችን ይመራሉ።',
          om: 'Yaala hawaasaa (CTC) fi garee fayyaa sochoʼaa naannoo horsiisee bulaatti ni babalʼifti.',
          ti: 'ኣብ ሰብ-ከብቲ ከባቢታት ሕክምና CTCን ተንቀሳቀስቲ ጉጅለታት ጥዕናን ትመርሕ።'
        }
      },
      {
        id: 'prog-3',
        name: 'Getachew Lemma',
        role: {
          en: 'Food Security & Livelihoods Manager',
          am: 'የምግብ ዋስትናና ኑሮ ስራ አስኪያጅ',
          om: 'Maanajjara Wabii Nyaataa',
          ti: 'ኣመሓዳሪ ውሕስነት መግብን መነባብሮን'
        },
        credentials: {
          en: 'M.Sc. in Agronomy & Soil Science',
          am: 'M.Sc. በግብርና እና አፈር ሳይንስ',
          om: 'M.Sc. Saayinsii Qonnaa',
          ti: 'M.Sc. ኣብ ስነ-ሕርሻን ሓመድን'
        },
        bio: {
          en: 'Leading climate-smart agriculture, river-lift micro-irrigation, seed supply, and women-led VSLA microfinance.',
          am: 'ዘመናዊ ግብርናን፣ የወንዝ መስኖን፣ የምርጥ ዘር አቅርቦትን እና የሴቶች VSLA ቁጠባን ያስተባብራሉ።',
          om: 'Qonna ammayyaa, jallisii lagaa, sanyii filatamaa fi qusannaa dubartootaa VSLA ni hoggana.',
          ti: 'ንክሊማ ዝምችእ ሕርሻ፣ መስኖ ሩባ፣ ዘርእን ዕቋር ደቂ-ኣንስትዮ VSLAን ይመርሕ።'
        }
      },
      {
        id: 'prog-4',
        name: 'Tigist Solomon',
        role: {
          en: 'Education & Green TVET Manager',
          am: 'የትምህርትና አረንጓዴ ኃይል ስራ አስኪያጅ',
          om: 'Maanajjara Barnootaa fi TVET',
          ti: 'ኣመሓዳሪት ትምህርትን ሓምለዋይ TVETን'
        },
        credentials: {
          en: 'M.Ed. in Vocational Education',
          am: 'M.Ed. በቴክኒክና ሙያ ትምህርት',
          om: 'M.Ed. Barnoota Ogummaa',
          ti: 'M.Ed. ኣብ ሞያዊ ትምህርቲ'
        },
        bio: {
          en: 'Directing the SEAQE II inclusive education program and the Green Energy TVET solar technician academy.',
          am: 'የSEAQE II አካታች ትምህርት ፕሮግራምን እና አረንጓዴ ኃይል ቲቪኢቲ ማዕከልን ይመራሉ።',
          om: 'Sagantaa SEAQE II fi akaadaamii ogeeyyii soolaarii Green Energy TVET ni hogganiti.',
          ti: 'ሓቛፊ መደብ ትምህርቲ SEAQE IIን ኣካዳሚ ጸሓያዊ TVETን ትመርሕ።'
        }
      }
    ]
  },
  {
    id: 'field',
    title: {
      en: 'Field Team',
      am: 'የአካባቢና የመስክ ቡድን',
      om: 'Garee Hojii Dirree',
      ti: 'ጉጅለ ስራሕ መስኪ'
    },
    description: {
      en: 'Regional field coordinators managing front-line emergency response and community operations.',
      am: 'የግንባር ቀደም የአደጋ ምላሽ እና የማህበረሰብ ስራዎችን የሚያስተባብሩ የክልል መስክ ኃላፊዎች።',
      om: 'Qindeessitoota dirree deebii balaa ariifataa fi hojiiwwan hawaasaa hogganan.',
      ti: 'ቅልጡፍ ምላሽ ሓደጋን ማሕበረሰባዊ ስርሒታትን ዘዋህህዱ ክልላውያን ኣተሓባበርቲ።'
    },
    members: [
      {
        id: 'field-1',
        name: 'Mohamed Abdi',
        role: {
          en: 'Somali Region Field Coordinator',
          am: 'የሶማሌ ክልል የመስክ አስተባባሪ',
          om: 'Qindeessaa Dirree Somaalee',
          ti: 'ኣተሓባባሪ መስኪ ክልል ሶማሌ'
        },
        credentials: {
          en: 'Gode & Kelafo Operations Hub',
          am: 'ጎዴ እና ቀላፎ ማስተባበሪያ ጣቢያ',
          om: 'Buufata Goodee fi Qalaafoo',
          ti: 'ማእከል ስርሒት ጎዴን ቀላፎን'
        },
        bio: {
          en: 'Supervising deep groundwater borehole schemes, CTC nutrition outreach, and livestock drought response.',
          am: 'ጥልቅ የውሃ ጉድጓዶችን፣ የCTC ስነ-ምግብ ስራዎችን እና የድርቅ ምላሽን በሶማሌ ክልል ያስተባብራሉ።',
          om: 'Boolla gadi-fagoo, yaala CTC fi deebii hongee Naannoo Somaalee keessatti ni hordofa.',
          ti: 'ዓሚቕ ዒላታት ማይ፣ ሕክምና ኣመጋግባ CTCን ምላሽ ደርቅን ኣብ ሶማሌ ይከታተል።'
        }
      },
      {
        id: 'field-2',
        name: 'Tolera Dida',
        role: {
          en: 'Oromia Field Coordinator',
          am: 'የኦሮሚያ ክልል የመስክ አስተባባሪ',
          om: 'Qindeessaa Dirree Oromiyaa',
          ti: 'ኣተሓባባሪ መስኪ ክልል ኦሮሚያ'
        },
        credentials: {
          en: 'Adama & East Hararghe Base',
          am: 'አዳማ፣ ምስራቅ ሐረርጌ እና ቦረና',
          om: 'Adaamaa, Harargee & Booranaa',
          ti: 'መደበር ኣዳማ፣ ሐረርጌን ቦረናን'
        },
        bio: {
          en: 'Coordinating river-lift micro-irrigation, community water kiosks, school upgrades, and VSLA federations.',
          am: 'የወንዝ መስኖ ስራዎችን፣ የውሃ ቦኖዎችን፣ የትምህርት ቤት ግንባታን እና VSLA ማህበራትን ያስተባብራሉ።',
          om: 'Jallisii lagaa, buufata bishaanii, ijaarsa mana barumsaa fi VSLA ni qindeessa.',
          ti: 'መስኖ ሩባ፣ ነቑጣታት ማይ፣ ህንጸት ኣብያተ-ትምህርትን ማሕበራት VSLAን የዋህህድ።'
        }
      },
      {
        id: 'field-3',
        name: 'Birhanu Assefa',
        role: {
          en: 'Amhara & Afar Coordinator',
          am: 'የአማራና አፋር ክልል አስተባባሪ',
          om: 'Qindeessaa Amaaraa fi Affaar',
          ti: 'ኣተሓባባሪ ኣምሓራን ዓፋርን'
        },
        credentials: {
          en: 'Dessie & Semera Hub',
          am: 'ደሴ እና ሰመራ ማስተባበሪያ',
          om: 'Buufata Dasee fi Samaraa',
          ti: 'ማእከል ደሴን ሰመራን'
        },
        bio: {
          en: 'Leading highland watershed erosion control, emergency school rehabilitation, and desert solar pumping stations.',
          am: 'የተፋሰስ ጥበቃን፣ የትምህርት ቤት መልሶ ግንባታን እና የሶላር ውሃ ፓምፕ ጣቢያዎችን ይመራሉ።',
          om: 'Eegumsa sululaa, suphaa mana barumsaa fi paampii bishaanii aduu ni hoggana.',
          ti: 'ሓለዋ ተፋሰስ፣ ጽገና ኣብያተ-ትምህርትን ጸሓያዊ ፓምፕታት ማይን ይመርሕ።'
        }
      },
      {
        id: 'field-4',
        name: 'Marta Hailu',
        role: {
          en: 'Southern Regions Coordinator',
          am: 'የደቡብና ሲዳማ ክልሎች አስተባባሪ',
          om: 'Qindeessaa Sidaamaa fi Kibbaa',
          ti: 'ኣተሓባባሪት ሲዳማን ደቡብን'
        },
        credentials: {
          en: 'Hawassa Field Sub-Office',
          am: 'ሀዋሳ የመስክ ንዑስ ቢሮ',
          om: 'Waajjira Dirree Hawaasaa',
          ti: 'ንኡስ ቤት ጽሕፈት ሃዋሳ'
        },
        bio: {
          en: 'Managing inclusive education for children with disabilities, menstrual hygiene blocks, and coffee resilience.',
          am: 'ለአካል ጉዳተኛ ህጻናት አካታች ትምህርት፣ የሴቶች ንጽህና መጠበቂያ እና የቡና አርሶ አደር ድጋፍን ይመራሉ።',
          om: 'Barnoota hunda hammataa, qulqullina shamarranii fi jireenya qonnaa bunaa ni qindeessiti.',
          ti: 'ሓቛፊ ትምህርቲ ስንኩላን፣ ጽሬት ኣዋልድን ጽንዓት ሓረስቶት ቡንን ትመርሕ።'
        }
      }
    ]
  }
];
