import React, { useState } from 'react';
import { GraduationCap, HeartPulse, Wheat, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { UI_COPY } from '../data/uiCopy';
import { pickLang } from '../data/translations';

interface WellBeingTriangleProps {
  currentLang: Language;
  onExploreSector?: (sectorId: string) => void;
}

export const WellBeingTriangle: React.FC<WellBeingTriangleProps> = ({ currentLang, onExploreSector }) => {
  const [activePillar, setActivePillar] = useState<'education' | 'health' | 'livelihoods'>('education');
  const ui = UI_COPY[currentLang] || UI_COPY.en;

  const content = {
    purpose: {
      en: 'To serve humanity so all may live as God intended.',
      am: 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ በቅንነት ማገልገል።',
      om: 'Namni hundi akkuma Waaqayyo itti yaade akka jiraatuuf namooma tajaajiluu.',
      ti: 'ንኹሉ ደቂ ሰባት ፈጣሪ ከም ዝደለዮ ኰይኖም ምእንቲ ክነብሩ ብቕንዕና ምግልጋል።'
    } as Record<Language, string>,
    title: {
      en: 'The ADRA Well-Being Triangle',
      am: 'የአድራ ደህንነትና ማህበራዊ ሁለንተናዊ ትሪያንግል',
      om: "Tiri'aangilii Nageenya fi Qananii Hawaasaa ADRA",
      ti: 'ናይ ኣድራ ህይወታዊ ሰናይ-ደሕንነት ትሪያንግል'
    } as Record<Language, string>,
    subtitle: {
      en: 'Our core development objective focuses on individual and community well-being, supported by three interconnected pillars: Education, Health, and Sustainable Livelihoods.',
      am: 'ዋነኛ የልማት ግባችን በሶስት የተሳሰሩ መሰረቶች (ትምህርት፣ ጤና እና ዘላቂ ኑሮ) አማካኝነት የግለሰብ እና የማህበረሰብ ሁለንተናዊ ደህንነትን ማረጋገጥ ነው።',
      om: "Kaayyoon misoomaa bu'uuraa keenya utubaalee wal-qabatani sadan (Barnoota, Fayyaa, fi Jireenya Itti-fufiinsa qabu) irratti kan xiyyeeffatedha.",
      ti: 'ቀንዲ ናይ ልምዓት ዕላማና ኣብ ሰለስተ ዝተኣሳሰሩ ዓንዴታት (ትምህርቲ፣ ጥዕና፣ ዘላቒ ናብራ) ተመርኲሱ ሰናይ-ደሕንነት ማሕበረሰብ ምዕባይ እዩ።'
    } as Record<Language, string>,
    pillars: {
      education: {
        id: 'education',
        icon: GraduationCap,
        title: {
          en: 'Education',
          am: 'ትምህርት',
          om: 'Barnoota',
          ti: 'ትምህርቲ'
        },
        role: {
          en: 'Mind & Potential',
          am: 'አእምሮ እና አቅም',
          om: 'Sammuu fi Dandeettii',
          ti: 'ኣእምሮን ዓቕምን'
        },
        summary: {
          en: 'Equipping girls and vulnerable youth with inclusive primary, secondary, and accredited solar energy TVET to unleash their God-given potential.',
          am: 'ለሴት ልጆችና ለችግረኛ ወጣቶች ፍትሃዊ ጥራት ያለው ትምህርትና የታዳሽ ኃይል ስልጠና በማቅረብ አቅማቸውን ማጎልበት።',
          om: 'Shamarranii fi dargaggootaaf barnoota qulqulluu fi leenjii anniisaa aduu (TVET) kennuun dandeettii isaanii baasuu.',
          ti: 'ንኣዋልድን ተኣፈፍቲ መንእሰያትን ሓቛፊ ትምህርትን ብቑዕ ስልጠና ጸዓት ፀሓይን (TVET) ብምሃብ ዓቕሞም ምዕባይ።'
        },
        metrics: {
          en: '85,000+ Enrolled',
          am: '85,000+ ተማሪዎች',
          om: '85,000+ Barattoota',
          ti: '85,000+ ተምሃሮ'
        },
        keyInitiatives: {
          en: [
            'SEAQE II Inclusive Secondary & Preparatory Schools',
            'Solar PV Technician TVET Accredited Curriculum with MoWE',
            'Menstrual Hygiene Washrooms & Girl Child Retention'
          ],
          am: [
            'SEAQE II አካታች ሁለተኛ እና መሰናዶ ትምህርት ቤቶች',
            'ከውሃና ኢነርጂ ሚኒስቴር ጋር የተረጋገጠ የሶላር PV ቲቪኢቲ ስርዓተ ትምህርት',
            'ለሴት ተማሪዎች የንጽህና መጠበቂያ ክፍሎች እና የማቆየት ድጋፍ'
          ],
          om: [
            'Manneen Barnootaa Sadarkaa Lammaffaa Hammatamaa SEAQE II',
            'Sirna Barnootaa TVET Teeknishaanii Soolaarii Mirkanaaʼe',
            'Kutaa Qulqullina Shamarranii fi Tursiisa Barnootaa'
          ],
          ti: [
            'SEAQE II ሓቛፊ ካልኣይን መሰናድኦን ኣብያተ-ትምህርቲ',
            'ምስ ሚኒስትሪ ማይን ጸዓትን ዝተረጋገጸ ስርዓተ-ትምህርቲ TVET ፀሓይ',
            'ንኣዋልድ ተምሃሮ ንጹህ መሕጸቢ ክፍልታትን ሓለዋ ትምህርትን'
          ]
        }
      },
      health: {
        id: 'health',
        icon: HeartPulse,
        title: {
          en: 'Health',
          am: 'ጤናና ስነ-ምግብ',
          om: 'Fayyaa fi Nyaata',
          ti: 'ጥዕናን ኣመጋግባን'
        },
        role: {
          en: 'Body & Life',
          am: 'ጤና እና ህይወት',
          om: 'Qaamaa fi Lubbuu',
          ti: 'ኣካልን ህይወትን'
        },
        summary: {
          en: 'Preserving life through Community Therapeutic Care (CMAM), clean solar water, maternal waiting facilities, and clinical mobility.',
          am: 'አጣዳፊ የተመጣጠነ ምግብ እጥረትን በማከም፣ ንጹህ ውሃ በማቅረብ እና የእናቶች ህክምናን በማዳረስ ህይወት መታደግ።',
          om: 'Kunuunsa hanqina nyaataa (CMAM), bishaan qulqulluu soolaarii, mana eeggumsaa haadholii fi kiliniikaan lubbuu baraaruu.',
          ti: 'ብማሕበረሰባዊ ሕክምና ዋሕዲ መግቢ (CMAM)፣ ጽሩይ ማይ ፀሓይን ክንክን ኣዴታትን ህይወት ምድሓን።'
        },
        metrics: {
          en: '310,000+ Reached',
          am: '310,000+ ተደርሷል',
          om: '310,000+ Gargaaraman',
          ti: '310,000+ ተበጺሖም'
        },
        keyInitiatives: {
          en: [
            'Community-Based Management of Acute Malnutrition (CMAM)',
            'Yirgalem Medical College 65-Seater Clinical Transit Bus',
            'Deep Solar Boreholes & Clean Piped Water Stations'
          ],
          am: [
            'በማህበረሰብ አቀፍ የተመጣጠነ ምግብ እጥረት ህክምና (CMAM)',
            'ለይርጋለም ሜዲካል ኮሌጅ የ65 መቀመጫ የክሊኒክ መጓጓዣ አውቶቡስ',
            'ጥልቅ የሶላር ውሃ ጉድጓዶች እና ንጹህ የቧንቧ ውሃ ጣቢያዎች'
          ],
          om: [
            'Walʼaansa Hanqina Nyaataa Cimaa Hawaasa Keessaa (CMAM)',
            'Awutoobisii Tajaajila Kiliniikaa Kolleejjii Yaalaa Yirgaalam',
            'Boolla Bishaanii Soolaarii Gadi-fagoo fi Ujummoo Qulqulluu'
          ],
          ti: [
            'ብማሕበረሰብ ዝምራሕ ሕክምና ከቢድ ዋሕዲ መግቢ (CMAM)',
            'ንኮሌጅ ሕክምና ይርጋለም ናይ 65 መንበር ክሊኒካዊ መጎዓዝያ ኣውቶቡስ',
            'ብጸሓያዊ ጸዓት ዝሰርሑ ዓሚቝ ዒላታትን መስመራት ጽሩይ ማይን'
          ]
        }
      },
      livelihoods: {
        id: 'livelihoods',
        icon: Wheat,
        title: {
          en: 'Sustainable Livelihoods',
          am: 'ዘላቂ የኑሮ ዋስትና',
          om: 'Jireenya Itti-fufiinsa Qabu',
          ti: 'ዘላቒ መነባብሮ'
        },
        role: {
          en: 'Dignity & Self-Reliance',
          am: 'ክብር እና ራስን መቻል',
          om: 'Kabajaa fi Of-dandaʼuu',
          ti: 'ክብርን ርእሰ-ምርኮሳን'
        },
        summary: {
          en: 'Empowering smallholders with climate-resilient farming, drought-tolerant seed banks, modern apiaries, and female-led micro-savings cooperatives.',
          am: 'አነስተኛ አርሶ አደሮችን በአየር ንብረት ተከላካይ ግብርና፣ በድርቅ ቋሚ ዘሮች እና በሴቶች የቁጠባ ማህበራት ማብቃት።',
          om: 'Qonnaan bultoota qonna qilleensa dandamatuun, sanyii filatamaa, hojii kanniisaa fi waldaa qusannoo dubartootaan humneessuu.',
          ti: 'ንንኣሽቱ ሓረስቶት ብክሊማ ዝጻወር ሕርሻ፣ ደርቂ ዝጻወር ዘርኢ፣ ዘመናዊ ምርባሕ ንህብን ማሕበራት ዕቋር ደቂ-ኣንስትዮን ምብቃዕ።'
        },
        metrics: {
          en: '68,000+ Smallholders',
          am: '68,000+ አርሶ አደሮች',
          om: '68,000+ Qonnaan Bulaa',
          ti: '68,000+ ሓረስቶት'
        },
        keyInitiatives: {
          en: [
            'Solar Micro-Drip Irrigation along Rift Valley & Somali Basins',
            'Village Savings & Loan Associations (VSLA) for Women',
            'Modern Honey Production & Pasture Regeneration'
          ],
          am: [
            'በስምጥ ሸለቆና በሶማሌ ተፋሰሶች የሶላር ጠብታ መስኖ ስርዓት',
            'ለሴቶች የተዘጋጀ የመንደር ቁጠባና ብድር ማህበራት (VSLA)',
            'ዘመናዊ የማር ምርት እና የግጦሽ መሬት ማገገሚያ'
          ],
          om: [
            'Jallisii Cophaa Soolaarii Sulula Qiinxamaa fi Somaaleetti',
            'Waldaalee Qusannoo fi Liqii Gandaa Dubartootaa (VSLA)',
            'Oomisha Dammaa Ammayyaa fi Haaromsa Margaa'
          ],
          ti: [
            'ኣብ ስምጥ ሽንጥሮን ሶማሌን ጸሓያዊ መስኖ ነጠብጣብ',
            'ንደቂ-ኣንስትዮ ዝተመስረቱ ማሕበራት ዕቋርን ልቓሕን (VSLA)',
            'ዘመናዊ ምህርቲ መዓርን ሕውየት መግሃጫ ከብትን'
          ]
        }
      }
    },
    strengths: [
      {
        title: {
          en: 'Fueled by Faith',
          am: 'በእምነት የተመሰረተ',
          om: 'Amantiin Kan Gaggeeffamu',
          ti: 'ብእምነት ዝተደገፈ'
        },
        desc: {
          en: 'Driven by our Seventh-day Adventist heritage to act with unconditional love, justice, and compassion for all people.',
          am: 'ለሁሉም ሰው በፍቅር፣ በፍትህ እና በርህራሄ ለመስራት በሰባተኛው ቀን አድቬንቲስት እሴት የሚመራ።',
          om: 'Namoota hundaaf jaalala, haqaa fi gara-laafina haalduree malee hojjechuuf duudhaa amantii keenyaan gaggeeffamu.',
          ti: 'ንኹሎም ሰባት ብፍቕሪ፣ ፍትሕን ርሕራሐን ብዘይ ኣድልዎ ንምግልጋል ብመንፈሳዊ ቅርሲ ዝምራሕ።'
        }
      },
      {
        title: {
          en: 'Extensive Global Network',
          am: 'ዓለም አቀፍ ጠንካራ ኔትወርክ',
          om: 'Wal-qunnamtii Addunyaa Balʼaa',
          ti: 'ሰፊሕ ዓለምለኻዊ መርበብ'
        },
        desc: {
          en: 'Operating as the humanitarian arm of the church across 130+ countries with seamless emergency logistical coordination.',
          am: 'በ130+ አገሮች ውስጥ የተቀናጀ ፈጣን የአደጋ ምላሽና የሎጂስቲክስ አቅም ያለው ዓለም አቀፍ ሰብአዊ መረብ።',
          om: 'Biyyoota 130 ol keessatti qindoomina loojistiksii balaa ariifataa cimaan hojjachuudhaan beekama.',
          ti: 'ኣብ ልዕሊ 130 ሃገራት ብዝተወደበ ምትሕብባር ህጹጽ ረድኤትን ሎጂስቲክስን ዝሰርሕ ዓለምለኻዊ ትካል።'
        }
      },
      {
        title: {
          en: 'Locally Led Execution',
          am: 'በአገር በቀል እውቀት የሚመራ',
          om: 'Hoggansa Hawaasa Naannoo',
          ti: 'ብውሽጣዊ መርሕነት ዝፍጸም'
        },
        desc: {
          en: 'Deep roots in Ethiopian woredas and kebeles, working alongside pastoralist clans, elders, and local governments.',
          am: 'በኢትዮጵያ ወረዳዎችና ቀበሌዎች ውስጥ ከማህበረሰብ መሪዎች፣ ሽማግሌዎችና አስተዳደሮች ጋር በጥብቅ ይሰራል።',
          om: 'Aanaalee fi gandoota Itoophiyaa keessatti jaarsolii biyyaa, gosaalee fi mootummaa naannoo waliin hundaaʼe.',
          ti: 'ኣብ ወረዳታትን ጣብያታትን ኢትዮጵያ ምስ ዓበይቲ ዓዲ፣ መራሕቲ ማሕበረሰብን ምምሕዳራትን ብቐረባ ይሰርሕ።'
        }
      },
      {
        title: {
          en: 'Integrity & Transparency',
          am: 'ታማኝነት እና ግልጽነት',
          om: 'Amanamummaa fi Iftoomina',
          ti: 'ተኣማንነትን ግሉጽነትን'
        },
        desc: {
          en: 'Rigorous statutory ACSO compliance, independent external audits, and zero-tolerance safeguarding standards.',
          am: 'የACSO ህጋዊ ተገዢነት፣ ገለልተኛ የውጭ ኦዲት እና የዜሮ ትዕግስት የጥበቃ መስፈርቶችን በጥብቅ ይተገብራል።',
          om: 'Seera ACSO eeguu, odiitii alaa walabaa gaggeessuu fi ulaagaa eegumsaa cimaa hordofuu.',
          ti: 'ሕጋዊ ተገዛእነት ACSO፣ ናጻ ወጻኢ ኦዲትን ጽኑዕ መስፈርታት ድሕንነትን ብዝለዓለ ደረጃ ይፍጽም።'
        }
      }
    ]
  };

  const activePillarData = content.pillars[activePillar];

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm p-6 sm:p-8 lg:p-10 my-8">
      {/* Top Brand Identity Lockup */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-stone-200">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-[0.16em] font-sans">
              {ui.wellbeing.eyebrow}
            </span>
            <span className="text-stone-300">·</span>
            {/* Kaushan Script Motto at 3-10 degree angle */}
            <span className="font-motto text-base text-[#007B5F] font-normal">
              {ui.common.motto}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-sans tracking-tight">
            {content.title[currentLang] || content.title.en}
          </h3>

          <p className="text-sm sm:text-base text-stone-600 font-serif leading-relaxed">
            {content.subtitle[currentLang] || content.subtitle.en}
          </p>
        </div>

        {/* Purpose Callout Card */}
        <div className="bg-[#e6f4f0] border border-[#007B5F]/25 rounded-2xl p-5 max-w-sm lg:shrink-0">
          <div className="text-[10px] font-bold text-[#007B5F] uppercase tracking-wider mb-1 font-sans">
            {ui.wellbeing.corePurposeLabel}
          </div>
          <blockquote className="text-sm font-medium text-[#004D3A] italic font-serif leading-relaxed">
            "{content.purpose[currentLang] || content.purpose.en}"
          </blockquote>
        </div>
      </div>

      {/* Main Interactive Grid: Interactive Triangle Visualization + Active Pillar Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
        
        {/* Left: Interactive Triangle Diagram (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center p-4">
            
            {/* Equilateral Triangle Visual SVG */}
            <svg viewBox="0 0 300 270" className="w-full h-full drop-shadow-xs" fill="none">
              {/* Connecting Edges */}
              <polygon
                points="150,30 30,230 270,230"
                fill="#f4f9f6"
                stroke="#007B5F"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              
              {/* Center Well-Being Core Halo */}
              <circle cx="150" cy="165" r="46" fill="#007B5F" fillOpacity="0.08" />
              <circle cx="150" cy="165" r="36" fill="#007B5F" />
              <text
                x="150"
                y="161"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="700"
                fontFamily="Montserrat"
              >
                {ui.wellbeing.svgLine1}
              </text>
              <text
                x="150"
                y="173"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="9"
                fontWeight="700"
                fontFamily="Montserrat"
              >
                {ui.wellbeing.svgLine2}
              </text>
              <text
                x="150"
                y="185"
                textAnchor="middle"
                fill="#f59e0b"
                fontSize="9"
                fontWeight="600"
                fontFamily="Montserrat"
              >
                {ui.wellbeing.svgLine3}
              </text>
            </svg>

            {/* Vertex 1: Top - Education */}
            <button
              onClick={() => setActivePillar('education')}
              className={`absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-xs cursor-pointer ${
                activePillar === 'education'
                  ? 'bg-[#007B5F] text-white border-[#007B5F] ring-4 ring-[#007B5F]/20 scale-105'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#007B5F]'
              }`}
            >
              <GraduationCap className="w-4 h-4 shrink-0" />
              <span>{ui.wellbeing.educationVertex}</span>
            </button>

            {/* Vertex 2: Bottom Left - Health */}
            <button
              onClick={() => setActivePillar('health')}
              className={`absolute bottom-2 left-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-xs cursor-pointer ${
                activePillar === 'health'
                  ? 'bg-[#007B5F] text-white border-[#007B5F] ring-4 ring-[#007B5F]/20 scale-105'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#007B5F]'
              }`}
            >
              <HeartPulse className="w-4 h-4 shrink-0" />
              <span>{ui.wellbeing.healthVertex}</span>
            </button>

            {/* Vertex 3: Bottom Right - Sustainable Livelihoods */}
            <button
              onClick={() => setActivePillar('livelihoods')}
              className={`absolute bottom-2 right-0 flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-bold transition-all shadow-xs cursor-pointer ${
                activePillar === 'livelihoods'
                  ? 'bg-[#007B5F] text-white border-[#007B5F] ring-4 ring-[#007B5F]/20 scale-105'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-[#007B5F]'
              }`}
            >
              <Wheat className="w-4 h-4 shrink-0" />
              <span>{ui.wellbeing.livelihoodsVertex}</span>
            </button>
          </div>

          <span className="text-[11px] text-stone-500 font-sans mt-2">
            {ui.wellbeing.vertexHint}
          </span>
        </div>

        {/* Right: Active Pillar Detail Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#f4f9f6] rounded-2xl p-6 sm:p-7 border border-[#007B5F]/15">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#007B5F] text-white flex items-center justify-center shadow-xs">
                {React.createElement(activePillarData.icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  {pickLang(currentLang, activePillarData.role)}
                </span>
                <h4 className="text-xl font-bold text-stone-900 font-sans">
                  {pickLang(currentLang, activePillarData.title)}
                </h4>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-white text-[#007B5F] border border-[#007B5F]/20 text-xs font-bold font-sans">
              {pickLang(currentLang, activePillarData.metrics)}
            </span>
          </div>

          <p className="text-sm sm:text-base text-stone-700 font-serif leading-relaxed mb-5">
            {pickLang(currentLang, activePillarData.summary)}
          </p>

          <div className="space-y-2 mb-6">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-sans">
              {ui.wellbeing.interventionsLabel}
            </div>
            {pickLang(currentLang, activePillarData.keyInitiatives).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#007B5F] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-200/80">
            <span className="text-xs text-stone-500 font-sans">
              {ui.wellbeing.footerNote}
            </span>
            {onExploreSector && (
              <button
                onClick={() => onExploreSector(activePillarData.id)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007B5F] hover:text-[#004D3A] transition-colors cursor-pointer font-sans"
              >
                <span>{ui.wellbeing.viewDossier}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4 Core Strengths Grid (Section 1: Fueled by faith, Global network, Locally led, Integrity) */}
      <div className="mt-10 pt-8 border-t border-stone-200">
        <div className="text-xs font-bold text-[#007B5F] uppercase tracking-[0.16em] mb-4 font-sans">
          {ui.wellbeing.strengthsHeading}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {content.strengths.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 space-y-1.5">
              <div className="text-sm font-bold text-stone-900 font-sans">
                {pickLang(currentLang, s.title)}
              </div>
              <p className="text-xs text-stone-600 font-serif leading-relaxed">
                {pickLang(currentLang, s.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
