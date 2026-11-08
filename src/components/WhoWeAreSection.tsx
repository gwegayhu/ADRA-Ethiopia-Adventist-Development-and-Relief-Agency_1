import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Clock, 
  BookOpen, 
  Users, 
  CheckCircle2, 
  Award, 
  Briefcase, 
  Building2, 
  MapPin, 
  Compass,
  Filter
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface WhoWeAreSectionProps {
  currentLang: Language;
  subTab: string;
  setSubTab: (tab: string) => void;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleAm?: string;
  roleOm?: string;
  bio: string;
  bioAm?: string;
  bioOm?: string;
  credentials?: string;
}

interface TeamCategory {
  id: 'board' | 'executive' | 'departments' | 'programs' | 'field';
  title: string;
  titleAm: string;
  titleOm: string;
  description: string;
  members: TeamMember[];
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ currentLang, subTab, setSubTab }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [selectedLeadershipCategory, setSelectedLeadershipCategory] = useState<string>('all');

  const whoWeAreSubItems = [
    { id: 'about-us', label: t.whoWeAreSub.aboutUs, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'our-history', label: t.whoWeAreSub.ourHistory, icon: <Clock className="w-4 h-4" /> },
    { id: 'leadership', label: t.whoWeAreSub.leadership, icon: <Users className="w-4 h-4" /> },
    { id: 'governance', label: t.whoWeAreSub.governance, icon: <Shield className="w-4 h-4" /> },
  ];

  const sectionTitles: Record<string, Record<Language, string>> = {
    'about-us': {
      en: 'Serving communities in Ethiopia with justice and compassion',
      am: 'የኢትዮጵያን ማህበረሰቦች በፍትህ እና በርህራሄ ማገልገል',
      om: 'Hawaasa Itoophiyaa haqa, gara-laafinaa fi jaalalaan tajaajiluu',
      ti: 'ንሕብረተሰብ ኢትዮጵያ ብፍትሕን ርሕራሐን ምግልጋል'
    },
    'our-history': {
      en: 'Our history in Ethiopia',
      am: 'በኢትዮጵያ ያለን ታሪክ',
      om: 'Seenaa keenya Itoophiyaa keessatti',
      ti: 'ኣብ ኢትዮጵያ ዘሎና ታሪኽ'
    },
    'leadership': {
      en: 'Leadership & Dedicated Team',
      am: 'አመራር እና የስራ ቡድን',
      om: 'Hoggansa fi Garee Hojii Keenyaa',
      ti: 'መርሕነትን ጻዕራም ጉጅለን'
    },
    'governance': {
      en: 'Governance & Safeguarding',
      am: 'አስተዳደር እና ደህንነት ጥበቃ',
      om: 'Bulchiinsa fi Eegumsa Seeraa',
      ti: 'ምሕደራን ድሕንነትን'
    }
  };

  const sectionSubtitles: Record<string, Record<Language, string>> = {
    'about-us': {
      en: 'ADRA Ethiopia is an autonomous non-profit organization, part of the worldwide Adventist Development and Relief Agency network.',
      am: 'አድራ ኢትዮጵያ በዓለም አቀፉ የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) ኔትወርክ ስር የሚገኝ ገለልተኛ መንግስታዊ ያልሆነ ድርጅት ነው።',
      om: "ADRA Itoophiyaan dhaabbata miti-mootummaa of danda'ee fi qaama networkii gargaarsa namoomaa fi misoomaa ADRA addunyaati.",
      ti: 'ኣድራ ኢትዮጵያ ኣካል ዓለምለኻዊ መርበብ ኣድራ ኮይኑ ናጻ ዘይመንግስታዊ ትካል እዩ።'
    },
    'our-history': {
      en: "A timeline of ADRA Ethiopia's journey of humanitarian service since 1982.",
      am: 'ከ1982 ዓ.ም ጀምሮ የአድራ ኢትዮጵያ የሰብዓዊ አገልግሎት ጉዞ የጊዜ ሰሌዳ።',
      om: 'Bara 1982 eegalee imala fi gumaacha tajaajila namoomaa ADRA Itoophiyaa.',
      ti: 'ካብ 1982 ጀሚሩ ናይ ኣድራ ኢትዮጵያ ሰብኣዊ ኣገልግሎት መገሻ።'
    },
    'leadership': {
      en: 'Restructured into 5 specialized categories, guiding ADRA Ethiopia with local expertise and humanitarian integrity.',
      am: 'በ5 ዘርፎች የተዋቀረ፣ አድራ ኢትዮጵያን በሀገር በቀል እውቀት እና በሰብዓዊ ታማኝነት የሚመራ ቡድን።',
      om: 'Garee ADRA Itoophiyaa ramaddii 5n qindaa\'ee beekumsa ogummaa naannoo fi amanamummaa olaanaatiin geggeessu.',
      ti: 'ንኣድራ ኢትዮጵያ ብ5 ዘፈራት ተወዲቡ ብናይ ከባቢ ፍልጠትን ሰብኣዊ ተኣማንነትን ዝመርሕ ጉጅለ።'
    },
    'governance': {
      en: 'Adhering to strict Ethiopian statutory standards, safeguarding policies, and independent audits.',
      am: 'ጥብቅ የኢትዮጵያ የህግ ደረጃዎችን፣ የደህንነት ፖሊሲዎችን እና ገለልተኛ ኦዲቶችን ማክበር።',
      om: 'Ulaagaalee heeraa fi seera qabeessummaa Itoophiyaa, imaammata eegumsa namoomaa fi odiitii walabaa guutummaatti kabajuu.',
      ti: 'ጥብቂ ናይ ኢትዮጵያ ሕጋዊ መዐቀኒታት፣ ፖሊሲታት ድሕንነትን ናጻ ኦዲትን ምኽባር።'
    }
  };

  // Exactly 5 distinct categories, with 4 members in each category (20 members total), Alemu Haile completely removed
  const teamCategories: TeamCategory[] = [
    {
      id: 'board',
      title: 'Board of Directors',
      titleAm: 'የስራ አመራር ቦርድ',
      titleOm: 'Boordii Daarektarootaa',
      description: 'Independent strategic governance, fiduciary stewardship, and institutional compliance oversight.',
      members: [
        {
          id: 'board-1',
          name: 'Dr. Tadesse Kebede',
          role: 'Board Chairman',
          roleAm: 'የቦርድ ሰብሳቢ',
          roleOm: 'Walitti-qabaa Boordii',
          credentials: 'Ph.D. in Public Health Governance',
          bio: 'Providing strategic direction, civil society advocacy, and statutory compliance oversight across nationwide humanitarian operations.'
        },
        {
          id: 'board-2',
          name: 'Rahel Negash, CPA',
          role: 'Board Treasurer & Audit Lead',
          roleAm: 'የቦርድ ገንዘብ ያዥና የኦዲት መሪ',
          roleOm: 'Qabaa Maallaqaa fi Qorataa Odiitii',
          credentials: 'CPA, Senior Financial Fiduciary Specialist',
          bio: 'Superintending independent financial audits, statutory ACSO fiscal standards, and transparent donor resource stewardship.'
        },
        {
          id: 'board-3',
          name: 'Pastor Melaku Feyisa',
          role: 'Board Secretary & Ethics Director',
          roleAm: 'የቦርድ ፀሐፊና የስነ-ምግባር ዳይሬክተር',
          roleOm: 'Barreessaa Boordii fi Daarektara Naamusaa',
          credentials: 'M.A. in International Humanitarian Ethics',
          bio: 'Guiding institutional ethics, faith-based humanitarian harmony, community peace reconciliation, and core ADRA values.'
        },
        {
          id: 'board-4',
          name: 'Dr. Elizabeth Wolde',
          role: 'Board Member & Development Advisor',
          roleAm: 'የቦርድ አባልና የልማት አማካሪ',
          roleOm: 'Miseensa Boordii fi Gorsituu Misoomaa',
          credentials: 'Ph.D. in Climate Adaptation & Resilient Systems',
          bio: 'Advising on long-term climate-smart agriculture, gender inclusion policies, and institutional donor partnerships.'
        }
      ]
    },
    {
      id: 'executive',
      title: 'Leadership & Management Team',
      titleAm: 'አመራርና የስራ አመራር ቡድን',
      titleOm: 'Hoggansa fi Garee Hojii Raawwachiiftuu',
      description: 'Senior management team leading nationwide operations, program delivery, and fiduciary compliance.',
      members: [
        {
          id: 'exec-1',
          name: 'Dima Saba',
          role: 'Interim Country Director',
          roleAm: 'ጊዜያዊ የሀገር ውስጥ ዳይሬክተር',
          roleOm: 'Daarektara Biyyooleessaa Yeroo',
          credentials: 'Humanitarian Leadership & Operations Specialist',
          bio: 'Leading nationwide strategic operations, bilateral donor partnerships, federal government liaisons, and crisis coordination.'
        },
        {
          id: 'exec-2',
          name: 'Zerihun Awano, Ph.D.',
          role: 'Program Director',
          roleAm: 'የፕሮግራሞች ዳይሬክተር',
          roleOm: 'Daarektara Sagantaalee',
          credentials: 'Ph.D. in Development Economics & Program Design',
          bio: 'Directing multi-sector development initiatives across all 7 operational regions, technical quality assurance, and community impact.'
        },
        {
          id: 'exec-3',
          name: 'Hana Denbi',
          role: 'Finance & Grant Management Director',
          roleAm: 'የፋይናንስና የድጋፍ ስምምነቶች አስተዳደር ዳይሬክተር',
          roleOm: 'Daarektara Faayinaansii fi Hoggansa Deeggarsaa',
          credentials: 'Senior Financial Management & Grant Fiduciary Lead',
          bio: 'Overseeing institutional accounting, bilateral grant reporting compliance, and annual portfolio stewardship of $4.7M to $5.1M USD.'
        },
        {
          id: 'exec-4',
          name: 'Addisu Mengistu',
          role: 'HR Manager',
          roleAm: 'የሰው ኃይል ስራ አስኪያጅ',
          roleOm: 'Maniijara Qabeenya Namaa',
          credentials: 'B.A. / M.Sc. in Human Resources Administration',
          bio: 'Supervising national personnel development, 89 total staff welfare (15 country office and 74 field staff), and organizational culture.'
        }
      ]
    },
    {
      id: 'departments',
      title: 'Department Heads',
      titleAm: 'የመምሪያ ኃላፊዎች',
      titleOm: 'Itti Gaafatamtoota Kutaa',
      description: 'Departmental leadership steering safeguarding, supply chain, digital GIS innovations, and learning.',
      members: [
        {
          id: 'dept-1',
          name: 'Selamawit Tadesse',
          role: 'Head of Safeguarding & Compliance',
          roleAm: 'የህግና ደህንነት ጥበቃ መምሪያ ኃላፊ',
          roleOm: 'Itti Gaafatamtuu Eegumsaa fi Seeraa',
          credentials: 'LL.M. in Human Rights Law & Safeguarding',
          bio: 'Enforcing zero tolerance for PSEAH, child protection frameworks, whistleblower hotlines, and ACSO regulatory filings.'
        },
        {
          id: 'dept-2',
          name: 'Kassahun Gebre',
          role: 'Head of Supply Chain & Logistics',
          roleAm: 'የአቅርቦት ሰንሰለትና ሎጅስቲክስ ኃላፊ',
          roleOm: 'Itti Gaafatamaa Dhiyeessii fi Loojistiksii',
          credentials: 'M.Sc. in Logistics & Supply Chain Systems',
          bio: 'Directing central warehouse operations in Kirkos, fleet distribution to emergency zones, and fair public procurement.'
        },
        {
          id: 'dept-3',
          name: 'Hiwot Worku',
          role: 'Head of MEAL & Accountability',
          roleAm: 'የክትትል፣ ግምገማና ተጠያቂነት መምሪያ ኃላፊ',
          roleOm: 'Itti Gaafatamtuu Hordoffii fi Madaallii',
          credentials: 'M.Sc. in Development Statistics & Evaluation',
          bio: 'Architecting digital data collection, field impact evaluations, community feedback mechanisms, and donor auditing.'
        },
        {
          id: 'dept-4',
          name: 'Biniam Zerihun',
          role: 'Head of ICT & GIS Innovations',
          roleAm: 'የኢንፎርሜሽን ቴክኖሎጂና ጂአይኤስ ኃላፊ',
          roleOm: 'Itti Gaafatamaa Teeknooloojii fi GIS',
          credentials: 'B.Sc. in Computer Science & GIS Geomatics',
          bio: 'Spearheading GIS spatial infrastructure, remote sensing for water schemes, AI-assisted data pipelines, and cybersecurity.'
        }
      ]
    },
    {
      id: 'programs',
      title: 'Program Managers',
      titleAm: 'የፕሮግራም ስራ አስኪያጆች',
      titleOm: 'Maanajjaroota Sagantaalee',
      description: 'Senior managers delivering sector excellence across WASH, Health, Food Security, and TVET.',
      members: [
        {
          id: 'prog-1',
          name: 'Eng. Fikru Getachew',
          role: 'National Solar WASH Program Manager',
          roleAm: 'የሶላር ውሃና ሳኒቴሽን ስራ አስኪያጅ',
          roleOm: 'Maanajjara Sagantaa Bishaan Soolaarii',
          credentials: 'B.Sc. in Water Resources Engineering',
          bio: 'Engineering deep borehole solar pump schemes, piped networks, and training community WASHCos across drought-prone basins.'
        },
        {
          id: 'prog-2',
          name: 'Dr. Almaz Tefera',
          role: 'Emergency Health & Nutrition Manager',
          roleAm: 'የድንገተኛ ጤናና ስነ-ምግብ ስራ አስኪያጅ',
          roleOm: 'Maanajjara Sagantaa Fayyaa fi Nyaataa',
          credentials: 'M.D., M.P.H. in Pediatric Nutrition',
          bio: 'Scaling Community Therapeutic Care (CTC), outpatient malnutrition clinics, and mobile medical teams in pastoralist zones.'
        },
        {
          id: 'prog-3',
          name: 'Getachew Lemma',
          role: 'Food Security & Livelihoods Manager',
          roleAm: 'የምግብ ዋስትናና ኑሮ ማሻሻል ስራ አስኪያጅ',
          roleOm: 'Maanajjara Wabii Nyaataa fi Jireenyaa',
          credentials: 'M.Sc. in Agronomy & Soil Science',
          bio: 'Leading climate-smart agriculture, river-lift micro-irrigation, seed distribution, and women-led VSLA microfinance.'
        },
        {
          id: 'prog-4',
          name: 'Tigist Solomon',
          role: 'Education & Green Energy TVET Manager',
          roleAm: 'የትምህርትና አረንጓዴ ኃይል ቲቪኢቲ ስራ አስኪያጅ',
          roleOm: 'Maanajjara Barnootaa fi TVET Soolaarii',
          credentials: 'M.Ed. in Technical Vocational Education',
          bio: 'Directing the SEAQE II inclusive primary education initiative and the national Green Energy TVET solar technician hub.'
        }
      ]
    },
    {
      id: 'field',
      title: 'Field Team',
      titleAm: 'የአካባቢና የመስክ ቡድን',
      titleOm: 'Garee Hojii Dirree',
      description: 'Regional field coordinators managing front-line emergency response and community operations.',
      members: [
        {
          id: 'field-1',
          name: 'Mohamed Abdi',
          role: 'Somali Region Field Coordinator',
          roleAm: 'የሶማሌ ክልል የመስክ አስተባባሪ',
          roleOm: 'Qindeessaa Dirree Naannoo Somaalee',
          credentials: 'Gode & Kelafo Operations Hub',
          bio: 'Supervising deep groundwater borehole schemes, CTC nutritional outreach, and emergency livestock drought response.'
        },
        {
          id: 'field-2',
          name: 'Tolera Dida',
          role: 'Oromia Regional Field Coordinator',
          roleAm: 'የኦሮሚያ ክልል የመስክ አስተባባሪ',
          roleOm: 'Qindeessaa Dirree Naannoo Oromiyaa',
          credentials: 'Adama, East Hararghe & Borena Base',
          bio: 'Coordinating river-lift micro-irrigation, community water kiosks, school classroom upgrades, and VSLA federations.'
        },
        {
          id: 'field-3',
          name: 'Birhanu Assefa',
          role: 'Amhara & Afar Field Coordinator',
          roleAm: 'የአማራና አፋር ክልል አስተባባሪ',
          roleOm: 'Qindeessaa Dirree Amaaraa fi Affaar',
          credentials: 'Dessie & Semera Coordination Base',
          bio: 'Leading highland watershed erosion control, emergency school rehabilitation, and desert solar pumping stations.'
        },
        {
          id: 'field-4',
          name: 'Marta Hailu',
          role: 'Southern Regions Field Coordinator',
          roleAm: 'የደቡብና ሲዳማ ክልሎች አስተባባሪ',
          roleOm: 'Qindeessaa Dirree Sidaamaa fi Kibbaa',
          credentials: 'Hawassa Field Sub-Office',
          bio: 'Managing inclusive education facilities for children with disabilities, menstrual hygiene infrastructure, and coffee farmer resilience.'
        }
      ]
    }
  ];

  // Filtering team categories based on selection
  const displayedCategories =
    selectedLeadershipCategory === 'all'
      ? teamCategories
      : teamCategories.filter((c) => c.id === selectedLeadershipCategory);

  return (
    <section id="who-we-are" className="border-b border-stone-200 bg-white scroll-mt-20">
      
      {/* Crisp Emerald Section Header Banner with verified public photo backdrop */}
      <div className="bg-[#073826] text-white py-14 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/ethiopia_highland_landscape_1792616589925.jpg"
            alt="Ethiopian Highlands"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="text-xs text-emerald-300 font-sans flex items-center gap-2">
            <span>Home</span>
            <span>&gt;</span>
            <span className="font-semibold text-white">{t.nav.whoWeAre}</span>
            <span>&gt;</span>
            <span className="text-[#f59e0b] capitalize font-medium">{subTab.replace('-', ' ')}</span>
          </div>

          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {t.hero.kicker} — {t.nav.whoWeAre}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-3xl">
            {sectionTitles[subTab]?.[currentLang] || sectionTitles[subTab]?.en}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl font-sans leading-relaxed">
            {sectionSubtitles[subTab]?.[currentLang] || sectionSubtitles[subTab]?.en}
          </p>
        </div>
      </div>

      {/* Sub-navigation tabs explicitly situated under the Who We Are section */}
      <div className="bg-[#f4f7f4] border-b border-stone-200 sticky top-20 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto scrollbar-none py-2.5">
            <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1 hidden md:inline">
              Sections under Who We Are:
            </span>
            {whoWeAreSubItems.map((item) => {
              const isActive = subTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#006643] text-white shadow-xs'
                      : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Sub-Section Content Area */}
      <div className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sub-tab 1: About us */}
          {subTab === 'about-us' && (
            <div className="max-w-[1072px] space-y-8">
              <div className="max-w-3xl space-y-5 text-base sm:text-lg text-stone-800 leading-relaxed font-sans">
                <p>
                  {currentLang === 'en'
                    ? 'ADRA Ethiopia is the country office of the Adventist Development and Relief Agency (ADRA), a global humanitarian organization present in more than 100 countries. We work with communities across Ethiopia to deliver emergency relief and long-term development, regardless of ethnicity, religion, gender or political affiliation.'
                    : currentLang === 'am'
                    ? 'አድራ ኢትዮጵያ በዓለም አቀፍ ደረጃ በ100+ አገሮች የሚንቀሳቀሰው የአድቬንቲስት የእርዳታና ልማት ድርጅት (ADRA) የኢትዮጵያ ቢሮ ነው። ከዘር፣ ሃይማኖት፣ ፆታ ወይም ፖለቲካዊ አመለካከት ነፃ በሆነ መልኩ ለሁሉም የኢትዮጵያ ማህበረሰቦች አስቸኳይ እርዳታና ዘላቂ ልማት እናቀርባለን።'
                    : currentLang === 'om'
                    ? 'ADRA Itoophiyaan waajjira biyyoolessaa Dhaabbata Misoomaa fi Gargaarsa Namoomaa (ADRA) addunyaa biyyoota 100 ol keessatti argamuuti. Sanyii, amantii, koorniyaa ykn ilaalcha siyaasaa osoo hin ilaallatin hawaasa Itoophiyaa waliin gargaarsa yeroo ariifachiisaa fi misooma yeroo dheeraa dhiyeessuuf ni hojjanna.'
                    : 'ኣድራ ኢትዮጵያ ኣካል ዓለምለኻዊ መርበብ ኣድራ ኮይኑ ኣብ ልዕሊ 100 ሃገራት ይሰርሕ። ንኹሉ ማሕበረሰብ ኢትዮጵያ ብዘይ ኣድልዎ ዘላቒ ልማትን ህጹጽ ረድኤትን የቕርብ።'}
                </p>

                <p>
                  {currentLang === 'en'
                    ? 'Our programs span emergency management, food security and livelihoods, water, sanitation and hygiene, health and nutrition, education and economic growth. We work in partnership with communities, local government and international partners to ensure lasting dignity and self-reliance.'
                    : currentLang === 'am'
                    ? 'ፕሮግራሞቻችን የአደጋ ጊዜ አስተዳደር፣ የምግብ ዋስትናና ኑሮ፣ ውሃ፣ ንፅህናና ሳኒቴሽን፣ ጤናና ስነ-ምግብ፣ ትምህርት እና ኢኮኖሚ እድገትን ያጠቃልላሉ። ዘላቂ ክብርንና ራስን መቻልን ለማረጋገጥ ከማህበረሰቡ፣ ከአካባቢ መስተዳድሮችና ከዓለም አቀፍ አጋሮች ጋር በትብብር እንሰራለን።'
                    : currentLang === 'om'
                    ? 'Sagantaaleen keenya hoggansa balaa yeroo ariifachiisaa, wabii nyaataa fi jireenyaa, bishaan, qulqullinaa fi saaniteeshinii (WASH), fayyaa fi nyaata madaalawaa, barnoota fi guddina dinagdee of keessatti qabatu. Kabaja fi of-danda\'uu hawaasaa mirkaneessuuf mootummaa fi qooda fudhattoota waliin hojjenna.'
                    : 'መደባትና ንምሕደራ ህጹጽ ሓደጋታት፣ ውሕስነት ምግቢ፣ ጽሩይ ማይን ሳኒቴሽንን፣ ጥዕናን ትምህርትን ዘጠቓልል እዩ።'}
                </p>
              </div>

              {/* 3 Core Values (1072px width with 15px font-size) */}
              <div 
                className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1072px]"
                style={{ maxWidth: '1072px' }}
              >
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="text-[#006643] font-bold text-lg font-editorial">
                    {currentLang === 'om' ? 'Haqa (Justice)' : currentLang === 'am' ? 'ፍትህ (Justice)' : 'Justice'}
                  </div>
                  <p className="text-[15px] text-stone-600 leading-relaxed" style={{ fontSize: '15px' }}>
                    {currentLang === 'om'
                      ? 'Sagalee warra hacuucamanii dhageessisuu, daa\'imman saaxilamoo eeguu fi qabeenya bu\'uuraa wal-qixxummaan qooduu mirkaneessuu.'
                      : 'Advocating for marginalized voices, protecting vulnerable children, and ensuring fair distribution of basic life-sustaining resources.'}
                  </p>
                </div>

                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="text-[#006643] font-bold text-lg font-editorial">
                    {currentLang === 'om' ? 'Gara-laafina (Compassion)' : currentLang === 'am' ? 'ርህራሄ (Compassion)' : 'Compassion'}
                  </div>
                  <p className="text-[15px] text-stone-600 leading-relaxed" style={{ fontSize: '15px' }}>
                    {currentLang === 'om'
                      ? 'Balaa ongea, lolaa ykn buqqa\'iinsa yeroo mudatutti deeggarsa haalduree hin qabne kabaja fi gara-laafinaan dhiyeessuu.'
                      : 'Providing unconditional relief during severe drought, flood, or displacement with empathy, dignity, and urgency.'}
                  </p>
                </div>

                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                  <div className="text-[#006643] font-bold text-lg font-editorial">
                    {currentLang === 'om' ? 'Jaalala (Love)' : currentLang === 'am' ? 'ፍቅር (Love)' : 'Love'}
                  </div>
                  <p className="text-[15px] text-stone-600 leading-relaxed" style={{ fontSize: '15px' }}>
                    {currentLang === 'om'
                      ? 'Maatiiwwan Itoophiyaa waliin waggoota hedduuf taasisuun, of-danda\'uu fi nagaa yeroo dheeraatiif meeshaalee barbaachisoo dhiyeessuu.'
                      : 'Walking alongside Ethiopian families over decades, equipping them with tools for long-term self-reliance and peace.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Our history */}
          {subTab === 'our-history' && (
            <div className="max-w-3xl space-y-8">
              <div className="relative border-l-2 border-[#006643] ml-4 pl-6 space-y-10">
                
                {/* 1982 Milestone */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">[1982]</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">
                    {currentLang === 'om' ? 'ADRAn Itoophiyaa keessatti hojii eegale' : 'ADRA begins work in Ethiopia'}
                  </h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {currentLang === 'om'
                      ? 'Bara ongea fi beela cimaa 1982 keessa naannoo Walloo fi Asayitaatti gargaarsa jalqabe. Leegexaafootti bakka qubannaa yeroo balaa hundeessee maatiiwwan buqqa\'aniif midhaan nyaataa fi dawoo dhiyeesse.'
                      : 'Commenced operations during the catastrophic 1982 famine and drought in Wello and Asaita. Set up an emergency shelter in Legetaffo, east of Addis Ababa, providing emergency grain, therapeutic feeding, and shelter to displaced families.'}
                  </p>
                </div>

                {/* 1992 Milestone */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">[1992]</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">
                    {currentLang === 'om' ? 'Babal\'ina Sagantaalee fi Waajjira Muummichaa Finfinnee' : 'Expansion of development programs & Addis Ababa Headquarters'}
                  </h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {currentLang === 'om'
                      ? 'Mootummaan Itoophiyaa gumaacha namoomaa ADRAn beela bara sanaa qolachuuf godhe dinqisiifachuudhaan Finfinnee Kutaa Magaalaa Qirqoos keessaa lafa seera qabeessa kenneef. Kuusaa qorichaa fi waajjira muummichaa ijaare.'
                      : "The Ethiopian government granted official land in Addis Ababa (Kirkos Sub-City, Kebele 80) in recognition of ADRA's relief achievements. ADRA built its central warehouse, logistics depot, and national coordination offices."}
                  </p>
                </div>

                {/* 2006 Milestone */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">[2006]</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">
                    {currentLang === 'om' ? 'Kunuunsa Nyaata Madaalawaa Naannoo Somaaleetti (CTC)' : 'Pioneering Community Therapeutic Care (CTC) in Somali Region'}
                  </h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {currentLang === 'om'
                      ? 'USAID waliin ta\'uudhaan naannoo Qalafoo fi Goodetti daa\'imman hanqina nyaataatiin miidhamaniif yaala mana keessaa (CTC) jalqabsiisuun daa\'imman 30,000 ol du\'a oolche.'
                      : 'In partnership with USAID, launched decentralized home-based treatment for severe acute malnutrition in Kelafo and Gode, saving over 30,000 children from famine wasting without hospital confinement.'}
                  </p>
                </div>

                {/* Present Milestone */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#f59e0b] border-2 border-white ring-2 ring-[#006643]" />
                  <div className="text-xs font-bold text-[#006643] font-mono">[PRESENT]</div>
                  <h4 className="text-xl font-bold text-stone-900 font-editorial mt-0.5">
                    {currentLang === 'om' ? 'TVET Soolaarii fi Bishaan Qulqulluu Naannolee 8 Keessatti' : 'Green Energy TVET II & Sustainable Solar WASH Across 8 Regions'}
                  </h4>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    {currentLang === 'om'
                      ? 'Akaadaamii teeknooloojii soolaarii fi paampii bishaan lafa jalaa soolaariin hojjatu dhiyeessuun waggaatti namoota miliyoona 1.6 ol tajaajilaa jira.'
                      : 'Operating solar vocational academies and deep solar groundwater pumping reaching 1.6+ million beneficiaries annually with 100% Ethiopian professional leadership.'}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Sub-tab 3: Leadership Restructured into exactly 5 categories, 4 members each, Alemu Haile removed */}
          {subTab === 'leadership' && (
            <div className="space-y-10">
              
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-stone-200">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-stone-500 mr-2">
                  <Filter className="w-3.5 h-3.5 text-[#006643]" />
                  <span>Categories:</span>
                </div>

                <button
                  onClick={() => setSelectedLeadershipCategory('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedLeadershipCategory === 'all'
                      ? 'bg-[#006643] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  All 5 Tiers (20 Members)
                </button>

                {teamCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedLeadershipCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      selectedLeadershipCategory === cat.id
                        ? 'bg-[#006643] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    <span>
                      {currentLang === 'am' ? cat.titleAm : currentLang === 'om' ? cat.titleOm : cat.title}
                    </span>
                    <span className="ml-1 opacity-75 font-mono text-[11px]">(4)</span>
                  </button>
                ))}
              </div>

              {/* Render Selected Categories */}
              <div className="space-y-12">
                {displayedCategories.map((cat, catIdx) => (
                  <div key={cat.id} className="space-y-5">
                    
                    {/* Category Title & Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-stone-100">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-emerald-100 text-[#006643] flex items-center justify-center font-bold text-xs">
                          {catIdx + 1}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-editorial">
                          {currentLang === 'am' ? cat.titleAm : currentLang === 'om' ? cat.titleOm : cat.title}
                        </h3>
                        <span className="text-xs bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded-md font-bold">
                          4 Members
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 font-sans max-w-md font-medium">
                        {cat.description}
                      </p>
                    </div>

                    {/* 4 Member Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {cat.members.map((member) => (
                        <div
                          key={member.id}
                          className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3.5 shadow-2xs hover:shadow-md transition-shadow group flex flex-col justify-between"
                        >
                          <div>
                            {/* Avatar Icon */}
                            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#006643] group-hover:scale-105 transition-transform">
                              <User className="w-8 h-8 text-[#006643]" />
                            </div>

                            <div className="mt-3">
                              <h4 className="text-base font-bold text-stone-900 font-editorial">
                                {member.name}
                              </h4>
                              <div className="text-xs font-bold text-[#006643] mt-0.5">
                                {currentLang === 'am' && member.roleAm
                                  ? member.roleAm
                                  : currentLang === 'om' && member.roleOm
                                  ? member.roleOm
                                  : member.role}
                              </div>
                              {member.credentials && (
                                <div className="text-[11px] text-stone-600 font-bold font-mono mt-0.5">
                                  {member.credentials}
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-xs text-stone-700 leading-relaxed font-sans pt-2 border-t border-stone-200 text-left">
                            {member.bio}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Sub-tab 4: Governance */}
          {subTab === 'governance' && (
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-stone-900 font-editorial">
                  {currentLang === 'om' ? 'Bulchiinsa fi Eegumsa Seeraa' : 'Governance and Statutory Compliance'}
                </h4>
                <p className="text-sm text-stone-700 leading-relaxed font-sans">
                  {currentLang === 'om'
                    ? "ADRA Itoophiyaan akka Dhaabbata Biyya Alaa (Foreign Organization)tti Abbaa Taayitaa Dhaabbilee Hawaasa Siivilii (ACSO) jalatti Waraqaa Ragaa Galmee Lakkoofsa 2049tiin, Labsii Dhaabbilee Hawaasa Siivilii Lakkoofsa 1113/2019 bu'uureffachuudhaan seera qabeessummaan galmaa'ee hojjata."
                    : 'ADRA Ethiopia is legally registered as a Foreign Non-Governmental Organization with the Authority for Civil Society Organizations (ACSO) under Registration Certificate No. 2049, operating continuously for over 42 years since 1982 pursuant to Proclamation No. 1113/2019.'}
                </p>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                  <strong>National Coordination Office:</strong> Ras Desta Damtew Rd, Addis Ababa Ethiopia · Phone: +251-115-512212 · 89 Total Staff Members (15 Country Office, 74 Field Staff)
                </div>
              </div>

              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-200 space-y-3 text-xs sm:text-sm text-stone-700 font-sans">
                <div className="flex items-center gap-2 font-bold text-stone-900">
                  <Shield className="w-4 h-4 text-[#006643]" />
                  <span>
                    {currentLang === 'om' ? 'Kutannoowwan Amanamummaa Keenyaa:' : 'Stewardship Commitments:'}
                  </span>
                </div>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    {currentLang === 'om'
                      ? 'Odiitii alaa waggaa dhaabbilee odiitii walabaa fi beekamtii qabaniin gaggeeffamu.'
                      : 'Annual external audits conducted by certified independent audit firms.'}
                  </li>
                  <li>
                    {currentLang === 'om'
                      ? 'Baasii sagantaa kallattii hawaasa bira ga\'u harka 92.4% ol taasisanii eeguu.'
                      : 'Over 92.4% direct program expenditure ratio to maximize community impact.'}
                  </li>
                  <li>
                    {currentLang === 'om'
                      ? 'Dhiibbaa koorniyaa, miidhaa saalaa fi miidhaa daa\'immaniitiif (PSEAH) obsa tokkollee dhabuu.'
                      : 'Zero tolerance for sexual exploitation, abuse, and sexual harassment (PSEAH).'}
                  </li>
                  <li>
                    {currentLang === 'om'
                      ? 'Icciitiin saaxiltootaa (whistleblower) hojjettootaa fi jiraattotaaf eegamu.'
                      : 'Confidential whistleblower integrity mechanisms for staff and beneficiaries.'}
                  </li>
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>

    </section>
  );
};
