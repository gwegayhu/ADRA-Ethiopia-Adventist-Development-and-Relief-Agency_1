import React from 'react';
import {
  Users,
  UserCheck,
  ShieldCheck,
  Scale,
  Eye,
  Languages,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, pickLang } from '../data/translations';
import { UI_COPY } from '../data/uiCopy';

interface AIForGoodSectionProps {
  currentLang: Language;
  onOpenChatbot: () => void;
}

export const AIForGoodSection: React.FC<AIForGoodSectionProps> = ({ currentLang, onOpenChatbot }) => {
  const nav = (TRANSLATIONS[currentLang] || TRANSLATIONS.en).nav;
  const copy = UI_COPY[currentLang] || UI_COPY.en;
  const ai = copy.aiForGood;
  const common = copy.common;

  const principles = [
    {
      id: 'people-first',
      icon: <Users className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'People first',
        am: 'ሰው ይቀድማል',
        om: 'Namaaf dursa',
        ti: 'ንሰብ ቀዳምነት'
      },
      text: {
        en: 'Technology supports communities and staff. It never replaces the relationships and judgement at the heart of humanitarian work.',
        am: 'ቴክኖሎጂ ማህበረሰቡንና ሰራተኞችን ይደግፋል። በሰብአዊ ስራ እምብርት የሚገኘውን ግንኙነትና ፍርድ ፈጽሞ አይተካም።',
        om: 'Teeknooloojiin hawaasaa fi hojjettoota deeggara. Hariiroo fi murtoo namoomaa giddugaleessaa gonkumaa hin bakka bu\'u.',
        ti: 'ቴክኖሎጂ ንማሕበረሰብን ሰራሕተኛታትን ይድግፍ። ኣብ ልቢ ሰብኣዊ ስራሕ ዘሎ ርክብን ፍርድን ከቶ ኣይትክእን።'
      }
    },
    {
      id: 'human-oversight',
      icon: <UserCheck className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'Human oversight',
        am: 'የሰው ቁጥጥር',
        om: 'Tooʼannoo namaa',
        ti: 'ሰብኣዊ ቁጽጽር'
      },
      text: {
        en: 'A trained person reviews any AI output before it informs a decision that affects someone\'s life, aid or safety.',
        am: 'የሰውን ህይወት፣ እርዳታ ወይም ደህንነት የሚነካ ማንኛውም ውሳኔ ከመወሰኑ በፊት የሰለጠነ ባለሙያ ይመረምረዋል።',
        om: 'Murtoon jireenya, gargaarsa ykn nageenya namaa tuqu kamiyyuu osoo hin darbin ogeessi leenji\'e bu\'aa AI ni sakatta\'a.',
        ti: 'ህይወት፣ ሓገዝ ወይ ድሕነት ሰብ ዝትንክፍ ውሳነ ቅድሚ ምሕላፉ ብዝሰልጠነ ክኢላ ይምርመር።'
      }
    },
    {
      id: 'privacy-consent',
      icon: <ShieldCheck className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'Privacy and consent',
        am: 'ግላዊነትና ፈቃድ',
        om: 'Iccitii fi hayyama',
        ti: 'ምስጢርን ፍቓድን'
      },
      text: {
        en: 'We collect only what we need, ask for informed consent, and protect personal data, especially about children and people at risk.',
        am: 'የሚያስፈልገንን ብቻ እንሰበስባለን፤ ሙሉ ፈቃድ እንጠይቃለን፤ በተለይም የህጻናትንና ተጋላጭ ወገኖችን መረጃ በጥብቅ እንጠብቃለን።',
        om: 'Waan nu barbaachisu qofa sassaabna, hayyama gaafanna, daataa dhuunfaa—keessattuu kan daa\'immanii—eegna.',
        ti: 'ዘድልየና ጥራይ ንእክብ፣ ምሉእ ፍቓድ ንሓትት፣ ብፍላይ ድማ መረዳእታ ህጻናትን ተቓላዕትን ብጥብቂ ንሕሉ።'
      }
    },
    {
      id: 'fairness',
      icon: <Scale className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'Fairness',
        am: 'ፍትሃዊነት',
        om: 'Haqummaa',
        ti: 'ፍትሓውነት'
      },
      text: {
        en: 'We check tools for bias so that no group, language, gender or disability status is left out or treated unfairly.',
        am: 'የትኛውም ቡድን፣ ቋንቋ፣ ፆታ ወይም አካል ጉዳተኝነት እንዳይገለል ወይም ፍትሃዊ ያልሆነ አያያዝ እንዳይደርስበት መሳሪያዎቹን እንመረምራለን።',
        om: 'Gareen, afaan, koorniyaan ykn haalli miidhaa qaamaa kamiyyuu akka hin moggeeffamneef meeshaalee ni qoranna.',
        ti: 'ዝኾነ ጉጅለ፣ ቋንቋ፣ ጾታ ወይ ስንክልና ከይግለልን ዘይፍትሓዊ ኣተሓሕዛ ከይበጽሖን መሳርሕታት ንምርምር።'
      }
    },
    {
      id: 'transparency',
      icon: <Eye className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'Transparency',
        am: 'ግልጽነት',
        om: 'Iftoomina',
        ti: 'ግሉጽነት'
      },
      text: {
        en: 'We are open about when and why we use AI, and who is accountable for the results.',
        am: 'መቼና ለምን አርቴፊሻል ኢንተለጀንስ እንደምንጠቀም እና ለውጤቱም ማን ተጠያቂ እንደሆነ ሁሌም ግልጽ ነን።',
        om: 'Yoom fi maaliif AI akka fayyadamnu, akkasumas bu\'aa isaaf eenyu akka itti gaafatamu iftoomina qabna.',
        ti: 'መዓስን ስለምንታይን AI ከም እንጥቀምን ንውጽኢቱ መን ተሓታቲ ምዃኑን ኩሉ ግዜ ግሉጻት ኢና።'
      }
    },
    {
      id: 'local-languages',
      icon: <Languages className="w-5 h-5 text-[#006643]" />,
      title: {
        en: 'Local languages',
        am: 'የሀገር ቋንቋዎች',
        om: 'Afaan naannoo',
        ti: 'ሃገራዊ ቋንቋታት'
      },
      text: {
        en: 'Tools should work for people in the languages they speak, including Amharic, Afaan Oromo, and Tigrinya, not only in English.',
        am: 'ቴክኖሎጂዎች አማርኛ፣ ኦሮምኛ እና ትግርኛን ጨምሮ ሰዎች በሚናገሩባቸው ቋንቋዎች መስራት አለባቸው፤ በእንግሊዝኛ ብቻ መሆን የለበትም።',
        om: 'Meeshaaleen afaan namoonni dubbatan—Afaan Oromoo, Amaariffa fi Tigriffa dabalatee—hojjechuu qabu, Ingiliizii qofaan miti.',
        ti: 'መሳርሕታት ብእንግሊዝኛ ጥራይ ዘይኮነ ትግርኛ፣ ኣምሓርኛን ኦሮምኛን ሓዊሱ ሰባት ብዝዛረብዎም ቋንቋታት ክሰርሑ ኣለዎም።'
      }
    }
  ];

  return (
    <section id="ai-for-good" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Banner */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo overlay without baked-in text */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/humanitarian_tech_dignity_1792616605305.jpg"
            alt={nav.aiForGood}
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            {common.home} &gt; {nav.aiForGood}
          </div>
          
          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            {ai.kicker}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {ai.bannerTitle}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {ai.bannerSubtitle}
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenChatbot}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{ai.chatBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Our Approach Narrative */}
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial">
              {ai.approachTitle}
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              {ai.approachBody}
            </p>
          </div>

          {/* Our Principles Grid */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial">
                {ai.principlesTitle}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base font-sans font-medium">
                {ai.principlesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs hover:border-[#006643]/40 transition-colors space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {p.icon}
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 font-editorial">
                    {pickLang(currentLang, p.title)}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                    {pickLang(currentLang, p.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
