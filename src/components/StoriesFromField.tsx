import React, { useState } from 'react';
import { ArrowRight, X, Heart, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Language } from '../types';

interface StoriesFromFieldProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

interface FieldStoryItem {
  id: string;
  category: 'Field story' | 'News' | 'Press release';
  title: string;
  titleAm: string;
  excerpt: string;
  excerptAm: string;
  fullContent: string;
  photoDirection: string;
  image: string;
  location: string;
  date: string;
}

export const StoriesFromField: React.FC<StoriesFromFieldProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedStory, setSelectedStory] = useState<FieldStoryItem | null>(null);

  const stories: FieldStoryItem[] = [
    {
      id: 'water-story',
      category: 'Field story',
      title: 'A new water point changes the morning routine in Oromia',
      titleAm: 'በኦሮሚያ የተተከለው አዲስ የውሃ ነጥብ የንጋት ጉዞን ቀየረ',
      excerpt: 'How a solar-powered community water point shortened the 4-hour daily walk for women and girls, and what the local water management committee does to maintain zero-downtime reliability.',
      excerptAm: 'የሶላር ውሃ መታጠቢያ ጣቢያ ከመሰራቱ በፊት ሴቶችና ልጆች በየቀኑ አራት ሰዓት ውሃ ፍለጋ ይጓዙ ነበር። ዛሬ ንጹህ ውሃ በደጃቸው ደርሷል።',
      fullContent: 'In rural East Hararghe, water collection historically occupied up to four hours of a girl’s day. After ADRA Ethiopia drilled a 180-meter solar borehole, over 6,500 villagers gained reliable potable water. The community water committee (WASHCo), led by 50% women, collects nominal monthly tariffs that fund maintenance spare parts and routine sanitation testing.',
      photoDirection: 'Photo direction: community members at a solar water point, documented with informed consent.',
      image: '/assets/images/adra_wash_water_1792612496655.jpg',
      location: 'East Hararghe, Oromia',
      date: 'March 2026'
    },
    {
      id: 'farming-story',
      category: 'News',
      title: 'Farmers adopt climate-smart practices across highland basins',
      titleAm: 'በደጋማ አካባቢዎች አርሶ አደሮች የአየር ንብረት ተስማሚ ቴክኖሎጂን ተቀበሉ',
      excerpt: 'Smallholder farming cooperatives in North Shewa transition to drip micro-irrigation and drought-resistant seed varieties, securing reliable harvest yields despite shifting rainfall patterns.',
      excerptAm: 'በሰሜን ሸዋ የሚገኙ አርሶ አደሮች የጠብታ መስኖ እና ድርቅን የሚቋቋሙ ዘሮችን በመጠቀም አስተማማኝ ምርት ማግኘት ጀመሩ።',
      fullContent: 'Through ADRA Ethiopia’s food security interventions, over 1,200 hectares of farmland have been equipped with river-lift solar pump systems. Farmers received certified rust-resistant wheat and teff seeds, accompanied by training on biological composting, soil moisture retention, and direct market linkage.',
      photoDirection: 'Photo direction: smallholder farmers inspecting flourishing produce in field.',
      image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
      location: 'North Shewa & Gambela',
      date: 'February 2026'
    },
    {
      id: 'health-story',
      category: 'Press release',
      title: 'Strengthening maternal and child health services in Somali Region',
      titleAm: 'በሶማሌ ክልል የእናቶችና ህጻናት ጤና አገልገሎት ተጠናከረ',
      excerpt: 'In partnership with USAID and Regional Health Bureaus, ADRA scales Community Therapeutic Care (CTC) to treat severe acute malnutrition across remote woredas.',
      excerptAm: 'አድራ ኢትዮጵያ ከዩኤስኤአይዲ (USAID) ጋር በመተባበር ከባድ የተመጣጠነ ምግብ እጥረትን በመንደር ደረጃ የማከም ስራውን አስፋፋ።',
      fullContent: 'Pioneered in Ethiopia by ADRA in 2006, Community Therapeutic Care decentralizes the treatment of severe acute childhood malnutrition, delivering Ready-to-Use Therapeutic Food (RUTF) directly into homes. Recent regional audits confirm a 94.2% recovery cure rate among treated children under five.',
      photoDirection: 'Photo direction: health extension worker with mother and child, with documented consent.',
      image: '/assets/images/adra_emergency_health_1792612497133.jpg',
      location: 'Kelafo & Gode, Somali Region',
      date: 'January 2026'
    },
    {
      id: 'girls-education-story',
      category: 'Field story',
      title: 'A girl’s dream of civil engineering begins in a solar-lit Sidama classroom',
      titleAm: 'በሲዳማ በሶላር መብራት የተሟላለት የመማሪያ ክፍል የሴት ተማሪዎችን ህልም አሳካ',
      excerpt: 'Marta Girma, 14, was on the brink of dropping out before ADRA’s SEAQE II project built gender-segregated sanitation blocks and a digital library at Bensa Primary School.',
      excerptAm: 'በቤንሳ አንደኛ ደረጃ ት/ቤት የሴቶች የክብር መጠበቂያ ክፍልና የዲጂታል ቤተ-መጻሕፍት በመገንባቱ የማርታ የትምህርት ህይወት ታደገ።',
      fullContent: 'At Bensa primary school in Sidama, girls absenteeism dropped by 64% after ADRA constructed gender-responsive sanitation facilities with running water, alongside distributing dignity hygiene packs and textbooks. Today, Marta is president of the school science club and maintains top honors in mathematics.',
      photoDirection: 'Photo direction: adolescent girl student reading textbook in solar classroom.',
      image: '/assets/images/adra_education_girls_1792612496863.jpg',
      location: 'Bensa Woreda, Sidama',
      date: 'April 2026'
    },
    {
      id: 'youth-tvet-story',
      category: 'News',
      title: 'From job seeking to solar enterprise: Youth technicians electrifying rural health clinics',
      titleAm: 'ወጣት የቴክኒክና ሙያ ተመራቂዎች የገጠር ጤና ኬላዎችን በሶላር ኃይል እያበሩ ነው',
      excerpt: 'How Dawit and his 4-person certified solar technician cooperative launched their enterprise in Kirkos and have already wired 22 remote clinics and water stations across Oromia.',
      excerptAm: 'በአዲስ አበባ በአድራ አረንጓዴ ኃይል ማዕከል የሰለጠኑ ወጣቶች የራሳቸውን ማህበር በማቋቋም በገጠር ክልሎች የሶላር ተከላ ስራዎችን እያከናወኑ ይገኛሉ።',
      fullContent: 'After graduating from ADRA’s Green Energy TVET II Coordination Hub with national Level III accreditation, Dawit received a catalytic toolkit grant. His youth-led cooperative now holds maintenance contracts with regional water and health bureaus, maintaining zero down-time for rural vaccine refrigerators.',
      photoDirection: 'Photo direction: certified young solar technician calibrating photovoltaic panel.',
      image: '/assets/images/adra_hero_community_1792612495148.jpg',
      location: 'Addis Ababa & North Shewa',
      date: 'March 2026'
    },
    {
      id: 'emergency-cash-story',
      category: 'Press release',
      title: 'Dignity in disaster: How mobile TeleBirr cash helped a flood-hit family rebuild',
      titleAm: 'በአደጋ ጊዜ የተደረገ ፈጣን የሞባይል ገንዘብ ድጋፍ የጎርፍ ተጎጂዎችን መልሶ አቋቋመ',
      excerpt: 'When seasonal flash floods struck the Awash river basin, ADRA delivered Multi-Purpose Cash Assistance (MPCA) directly into displaced mothers’ mobile accounts within 48 hours.',
      excerptAm: 'በአዋሽ ወንዝ ዳርቻ በተከሰተው የጎርፍ አደጋ ለተፈናቀሉ ቤተሰቦች በቴሌብር አማካኝነት በ48 ሰዓት ውስጥ ቀጥታ የገንዘብ እርዳታ ደረሰ።',
      fullContent: 'Partnering with the Ethiopian Disaster Risk Management Commission (EDRMC), ADRA disbursed unconditional digital cash transfers of 12,000 ETB to each affected family. Beneficiaries chose how to spend their funds—purchasing staple food, replacing lost livestock, and procuring timber for dryland shelter reconstruction.',
      photoDirection: 'Photo direction: mother receiving digital SMS transfer notification with relief staff.',
      image: '/assets/images/solar_water_desert_1792618997738.jpg',
      location: 'Awash Fentale & Afar Basin',
      date: 'February 2026'
    }
  ];

  return (
    <section id="stories" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Banner matching screenshot 8 & style of Where We Work and AI for Good */}
      <div className="bg-[#073826] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_education_girls_1792612496863.jpg"
            alt="Stories from the field"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073826] via-[#073826]/90 to-[#073826]/75" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans">
            Home &gt; Stories
          </div>
          
          <div className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
            VOICES FROM THE FIELD
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-editorial leading-tight text-white max-w-2xl">
            {currentLang === 'en' 
              ? 'Real Lives, Resilient Journeys' 
              : currentLang === 'am' 
              ? 'እውነተኛ ህይወት፣ የጽናት ጉዞዎች' 
              : 'Jireenya Qabatamaa, Imala Dandamannaa'}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-sans">
            {currentLang === 'en'
              ? 'First-person dispatches, community portraits, and eyewitness perspectives documented directly from program sites across Ethiopia.'
              : currentLang === 'am'
              ? 'በመላው ኢትዮጵያ ከሚገኙ የልማት ጣቢያዎች በቀጥታ የተሰነዱ የመጀመሪያ ሰው ታሪኮች፣ የማህበረሰብ ገጽታዎችና የመስክ ምስክርነቶች።'
              : "Iddoowwan pirojektii Itoophiyaa guutuu irraa kallattiin kan qindaa'an seenaawwan qabatamaa, suuraa hawaasaa fi ragaalee ijaan argaa."}
          </p>

          <div className="pt-2">
            <a
              href="#featured-field-stories"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('featured-field-stories')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Read Field Dispatches' : 'የመስክ ዘገባዎችን ያንብቡ'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="featured-field-stories" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header matching screenshot 3 */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#006643] uppercase mb-2">
                FEATURED DISPATCHES
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-editorial">
                {currentLang === 'en' ? 'Latest from the field' : 'ወቅታዊ የመስክ ታሪኮች'}
              </h3>
            </div>

            <button 
              onClick={() => setSelectedStory(stories[0])}
              className="text-sm font-semibold text-[#006643] hover:text-[#073826] flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>{currentLang === 'en' ? 'All stories' : 'ሁሉንም ታሪኮች ይመልከቱ'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* 3 Cards Grid matching screenshot 3 layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  {/* Category Pill matching screenshot 3 */}
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-[#006643] text-xs font-semibold rounded-full border border-emerald-100">
                    {story.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-stone-900 font-editorial leading-snug group-hover:text-[#006643] transition-colors">
                    {currentLang === 'en' ? story.title : story.titleAm}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans line-clamp-3">
                    {currentLang === 'en' ? story.excerpt : story.excerptAm}
                  </p>
                </div>
              </div>

              {/* Photo direction footnote matching screenshot 3 */}
              <div className="px-6 pb-6 pt-0">
                <p className="text-[11px] text-stone-400 italic font-sans border-t border-stone-100 pt-3">
                  {story.photoDirection}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>

      {/* Story Reading Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="px-3 py-1 bg-emerald-50 text-[#006643] text-xs font-semibold rounded-full">
                {selectedStory.category}
              </span>
              <button
                onClick={() => setSelectedStory(null)}
                className="p-1.5 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-stone-500 font-sans">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{selectedStory.location}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedStory.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-stone-900 font-editorial">
                {currentLang === 'en' ? selectedStory.title : selectedStory.titleAm}
              </h3>

              <p className="text-stone-700 text-sm leading-relaxed font-sans">
                {selectedStory.fullContent}
              </p>

              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-500 italic">
                {selectedStory.photoDirection}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => {
                  setSelectedStory(null);
                  onOpenDonate();
                }}
                className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5"
              >
                <Heart className="w-4 h-4" />
                <span>Support Community Resilience</span>
              </button>

              <button
                onClick={() => setSelectedStory(null)}
                className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-lg"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
