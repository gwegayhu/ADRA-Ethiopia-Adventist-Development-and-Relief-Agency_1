import React from 'react';
import { 
  Users, 
  UserCheck, 
  ShieldCheck, 
  Scale, 
  Eye, 
  Languages, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';

interface AIForGoodSectionProps {
  currentLang: Language;
  onOpenChatbot: () => void;
}

export const AIForGoodSection: React.FC<AIForGoodSectionProps> = ({ currentLang, onOpenChatbot }) => {
  const principles = [
    {
      id: 'people-first',
      icon: <Users className="w-5 h-5 text-[#006643]" />,
      title: 'People first',
      titleAm: 'ሰው ቅድሚያ ይሰጠዋል',
      text: 'Technology supports communities and staff. It never replaces the relationships and judgement at the heart of humanitarian work.',
      textAm: 'ቴክኖሎጂ ማህበረሰቡንና ሰራተኞችን ይደግፋል። በሰብአዊ ስራ እምብርት የሚገኘውን ግንኙነትና ፍርድ ፈጽሞ አይተካም።'
    },
    {
      id: 'human-oversight',
      icon: <UserCheck className="w-5 h-5 text-[#006643]" />,
      title: 'Human oversight',
      titleAm: 'የሰው ቁጥጥርና ክትትል',
      text: 'A trained person reviews any AI output before it informs a decision that affects someone\'s life, aid or safety.',
      textAm: 'የሰውን ህይወት፣ እርዳታ ወይም ደህንነት የሚነካ ማንኛውም ውሳኔ ከመወሰኑ በፊት የሰለጠነ ባለሙያ ይመረምረዋል።'
    },
    {
      id: 'privacy-consent',
      icon: <ShieldCheck className="w-5 h-5 text-[#006643]" />,
      title: 'Privacy and consent',
      titleAm: 'ግላዊነት እና ፈቃድ',
      text: 'We collect only what we need, ask for informed consent, and protect personal data, especially about children and people at risk.',
      textAm: 'የሚያስፈልገንን ብቻ እንሰበስባለን፤ ሙሉ ፈቃድ እንጠይቃለን፤ በተለይም የህጻናትንና ተጋላጭ ወገኖችን መረጃ በጥብቅ እንጠብቃለን።'
    },
    {
      id: 'fairness',
      icon: <Scale className="w-5 h-5 text-[#006643]" />,
      title: 'Fairness',
      titleAm: 'ፍትሃዊነት',
      text: 'We check tools for bias so that no group, language, gender or disability status is left out or treated unfairly.',
      textAm: 'የትኛውም ቡድን፣ ቋንቋ፣ ፆታ ወይም አካል ጉዳተኝነት እንዳይገለል ወይም ፍትሃዊ ያልሆነ አያያዝ እንዳይደርስበት መሳሪያዎቹን እንመረምራለን።'
    },
    {
      id: 'transparency',
      icon: <Eye className="w-5 h-5 text-[#006643]" />,
      title: 'Transparency',
      titleAm: 'ግልጽነት',
      text: 'We are open about when and why we use AI, and who is accountable for the results.',
      textAm: 'መቼና ለምን አርቴፊሻል ኢንተለጀንስ እንደምንጠቀም እና ለውጤቱም ማን ተጠያቂ እንደሆነ ሁሌም ግልጽ ነን።'
    },
    {
      id: 'local-languages',
      icon: <Languages className="w-5 h-5 text-[#006643]" />,
      title: 'Local languages',
      titleAm: 'የሀገር ውስጥ ቋንቋዎች',
      text: 'Tools should work for people in the languages they speak, including Amharic, and not only in English.',
      textAm: 'ቴክኖሎጂዎች አማርኛን ጨምሮ ሰዎች በሚናገሩባቸው ቋንቋዎች መስራት አለባቸው፤ በእንግሊዝኛ ብቻ መሆን የለበትም።'
    }
  ];

  return (
    <section id="ai-for-good" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Banner matching screenshot 8 */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo overlay without baked-in text */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/humanitarian_tech_dignity_1792616605305.jpg"
            alt="AI for Good"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            Home &gt; AI for Good
          </div>
          
          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            AI FOR GOOD
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {currentLang === 'en' ? 'Technology that serves people with dignity' : 'ሰዎችን በክብር የሚያገለግል ቴክኖሎጂ'}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'How ADRA Ethiopia approaches artificial intelligence and data: carefully, openly and always with communities at the centre.'
              : 'አድራ ኢትዮጵያ አርቴፊሻል ኢንተለጀንስንና መረጃዎችን በጥንቃቄ፣ በግልጽነት እና ሁልጊዜም ማህበረሰቡን ማዕከል ባደረገ መልኩ ተግባራዊ ያደርጋል።'}
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenChatbot}
              className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Chat with ADRA Ethiopia AI Assistant' : 'ከአድራ ኢትዮጵያ AI ረዳት ጋር ይወያዩ'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area matching screenshot 8 & 9 */}
      <div className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Our Approach Narrative */}
          <div className="max-w-3xl space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial">
              {currentLang === 'en' ? 'Our approach' : 'አካሄዳችን'}
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans">
              {currentLang === 'en'
                ? 'Artificial intelligence (AI) can help humanitarian teams understand needs sooner, share information more clearly and use resources well. It also brings real risks, especially to privacy and fairness. ADRA Ethiopia will only use these tools where they help the people we serve and where the risks are understood and managed.'
                : 'አርቴፊሻል ኢንተለጀንስ (AI) የሰብአዊ እርዳታ ቡድኖች ፍላጎቶችን በፍጥነት እንዲረዱ፣ መረጃዎችን በግልጽ እንዲያጋሩ እና ሀብትን በአግባቡ እንዲጠቀሙ ሊረዳ ይችላል። ነገር ግን በተለይም በግላዊነትና በፍትሃዊነት ላይ እውነተኛ ስጋቶችን ያመጣል። አድራ ኢትዮጵያ እነዚህን መሳሪያዎች የሚጠቀመው የምናገለግላቸውን ሰዎች በሚጠቅሙበትና ስጋቶቹ ታውቀው መቆጣጠር ሲቻሉ ብቻ ነው።'}
            </p>
          </div>

          {/* Our Principles Grid matching screenshot 9 */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial">
                {currentLang === 'en' ? 'Our principles' : 'መርሆዎቻችን'}
              </h3>
              <p className="text-stone-700 text-sm sm:text-base font-sans font-medium">
                {currentLang === 'en' ? 'Six rules guide every decision about technology.' : 'ስድስት ህጎች ስለ ቴክኖሎጂ የሚደረጉ ውሳኔዎችን ሁሉ ይመራሉ።'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs hover:border-[#006643]/40 transition-colors space-y-4"
                >
                  {/* Icon in subtle pill container matching screenshot 9 */}
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {p.icon}
                  </div>

                  <h4 className="text-lg font-bold text-stone-900 font-editorial">
                    {currentLang === 'en' ? p.title : p.titleAm}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                    {currentLang === 'en' ? p.text : p.textAm}
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
