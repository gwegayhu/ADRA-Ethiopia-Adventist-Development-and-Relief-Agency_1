import { Language } from '../types';

export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  titleAm: string;
  titleOm?: string;
  titleTi?: string;
  category: string;
  categoryAm: string;
  categoryOm?: string;
  categoryTi?: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    roleAm: string;
    roleOm?: string;
    roleTi?: string;
  };
  summary: string;
  summaryAm: string;
  summaryOm?: string;
  summaryTi?: string;
  content: string[];
  contentAm: string[];
  contentOm?: string[];
  contentTi?: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  quote?: {
    text: string;
    textAm: string;
    textOm?: string;
    textTi?: string;
    author: string;
  };
}

export const SAMPLE_BLOGS: BlogItem[] = [
  {
    id: 'solar-water-somali-desert',
    slug: 'solar-energy-clean-water-somali-desert',
    title: 'Harnessing Solar Energy to Bring Year-Round Clean Water to Somali Region',
    titleAm: 'በሶማሌ ክልል በረሃማ አካባቢዎች በሶላር ኃይል የሚሰሩ የንጹህ ውሃ ፕሮጀክቶች',
    titleOm: 'Anniisaa Aduun Bishaan Qulqulluu Naannoo Somaaleetti Dhiyeessuu',
    titleTi: 'ኣብ ክልል ሶማሌ ብጸሓያዊ ጸዓት ጽሩይ ማይ ምቕራብ',
    category: 'Water, Sanitation & Hygiene',
    categoryAm: 'ውሃ፣ ሳኒቴሽን እና ንጽህና',
    categoryOm: 'Bishaan fi Qulqullina',
    categoryTi: 'ማይ፣ ሳኒቴሽንን ጽሬትን',
    date: 'October 14, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Yohannes Berhanu',
      role: 'WASH Technical Lead, ADRA Ethiopia',
      roleAm: 'የውሃ እና ሳኒቴሽን ከፍተኛ ባለሙያ',
      roleOm: 'Hogganaa Teeknikaa WASH, ADRA Itoophiyaa',
      roleTi: 'ላዕለዋይ ክኢላ ማይን ጽሬትን፣ ኣድራ ኢትዮጵያ'
    },
    summary: 'In the arid pastoral expanses of Warder and Kebribeyah, recurring droughts have dried traditional shallow wells. Discover how ADRA installed 24-kilowatt ground-mounted solar pumping stations that pull pure groundwater from 210 meters deep, serving over 18,000 pastoralists with zero fuel costs.',
    summaryAm: 'በሶማሌ ክልል በተከሰተው ድርቅ ምክንያት ባህላዊ ጉድጓዶች በደረቁበት ወቅት አድራ ኢትዮጵያ በሶላር ኃይል የሚሰሩ የጥልቅ ጉድጓድ የውሃ መሳቢያዎችን በመትከል ከ18,000 በላይ አርብቶ አደሮች ያለማቋረጥ ንጹህ ውሃ እንዲያገኙ አስችሏል።',
    summaryOm: 'Gammoojjii Warder fi Qabribayaah keessatti hongeen boolla bishaanii gogseera. ADRAn paampii anniisaa aduu 24kW meetira 210 gadi fagaatu dhaabuun horsiisee bultoota 18,000+f bishaan qulqulluu baasii boba’aa malee dhiyeesseera.',
    summaryTi: 'ኣብ ደርቂ ዝተጠቕዐ ከባቢታት ዋርደርን ቀብሪበያህን ባህላዊ ዒላታት ምስ ነቐጹ፣ ኣድራ 24 ኪሎዋት ብጸሓይ ዝሰርሑ መሳሓብ ማይ ኣብ 210 ሜትሮ ዕምቆት ብምትካል ልዕሊ 18,000 ሰብ-ከብቲ ብዘይ ነዳዲ ጽሩይ ማይ ረኺቦም።',
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
    contentOm: [
      'Naannoo Somaaleetti hanqinni bishaanii jireenya, barumsaa fi fayyaa hawaasaa murteessa. Maatiiwwan bishaan argachuuf sa’aatii shan hanga ta’u deemuun dhukkubaaf saaxilamu turan.',
      'ADRAn Biiroo Bishaanii Naannoo waliin boolla meetira 210 gadi fagaatu qotee sirna paampii anniisaa aduu 24kW cimaa dhaabuun bishaan itti-fufiinsa qabu dhiyeesseera.',
      'Abbummaan hawaasaaf kennamuun koreen WASHCo dubartoota %50 hirmaachise hundeeffamee namoota 18,000+ fi beeladoota tajaajilaa jira.'
    ],
    contentTi: [
      'ኣብ ክልል ሶማሌ ሕጽረት ማይ ናብራ፣ ትምህርትን ጥዕናን ሕብረተሰብ ዝውስን ቀንዲ ብድሆ ነይሩ። ኣዴታትን ህጻናትን ንነዊሕ ሰዓታት ብምጉዓዝ ዘይጽሩይ ማይ ይቐድሑ ነይሮም።',
      'ኣድራ ኢትዮጵያ ምስ ቢሮ ማይ ክልል ብምትሕብባር 210 ሜትሮ ዕምቆት ዘለዎም ዒላታት ኩዒቱ ብ24 ኪሎዋት ጸሓያዊ ጸዓት ዝሰርሑ ዘመናዊ ፓምፕታት ተኺሉ።',
      'ዋንነት ናብ ሕብረተሰብ ብምስግጋር 50% ደቂ-ኣንስትዮ ዝሓቖፉ ኮሚቴታት WASHCo ተመስሪቶም ልዕሊ 18,000 ሰባትን 40,000 እንስሳትን ብቐዋምነት የገልግሉ ኣለዉ።'
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
      textOm: 'Buufanni bishaan aduu kun ijaaramuu dura dubartoonni keenya jaarkaanii lamaaf hanga waaree deemu turan. Har’a garuu bishaan manaa keenya bira jira; shamarran keenya yeroon gara daree seenu.',
      textTi: 'እዚ ናይ ጸሓይ ማይ ቅድሚ ምህናጹ ኣዋልድና ክልተ ጀሪካን ማይ ንምቕዳሕ ክሳብ ቀትሪ ይኸዳ ነይረን። ሎሚ ማይ ኣብ ቀጽርና ስለ ዝቐረበ ብግዜ ናብ ትምህርተን ይኸዳ።',
      author: 'Amina Farah, Kebribeyah WASHCo Chairperson'
    }
  },
  {
    id: 'girls-stem-education-oromia',
    slug: 'empowering-girls-through-stem-education-oromia',
    title: 'Breaking Barriers: STEM Laboratories and Digital Classrooms for Girls in West Oromia',
    titleAm: 'በምዕራብ ኦሮሚያ የሴት ተማሪዎችን የሳይንስና የቴክኖሎጂ (STEM) ትምህርት ማጎልበት',
    titleOm: 'Mana Barumsaa Dijitaalaa fi Laabii STEM Shamarran Oromiyaa Lixaaf',
    titleTi: 'ቤት-ፈተነ STEMን ዲጂታል ክፍልታትን ንደቂ-ኣንስትዮ ምዕራብ ኦሮሚያ',
    category: 'Education & Protection',
    categoryAm: 'ትምህርት እና ጥበቃ',
    categoryOm: 'Barnoota fi Eegumsa',
    categoryTi: 'ትምህርትን ሓለዋን',
    date: 'September 28, 2026',
    readTime: '4 min read',
    author: {
      name: 'Aster Tolessa',
      role: 'Senior Education Specialist, ADRA Ethiopia',
      roleAm: 'ከፍተኛ የትምህርት ባለሙያ',
      roleOm: 'Ogeessa Barnootaa Olaanaa, ADRA Itoophiyaa',
      roleTi: 'ላዕለዋይ ክኢላ ትምህርቲ፣ ኣድራ ኢትዮጵያ'
    },
    summary: 'How solar-powered digital tablets, dedicated science kits, and gender-segregated WASH facilities in 14 rural primary schools across Gimbi and Nekemte reversed adolescent dropout rates and ignited a passion for mathematics and science.',
    summaryAm: 'በጊምቢ እና ነቀምቴ በ14 ገጠር ትምህርት ቤቶች ውስጥ በሶላር የሚሰሩ ዲጂታል ታብሌቶችን፣ የሳይንስ ላቦራቶሪ ቁሳቁሶችን እና የተሟሉ የሴቶች ንጽህና ማዕከላትን በማቋቋም የተማሪዎችን ውጤትና ተሳትፎ ያሳደገ ፕሮጀክት።',
    summaryOm: 'Manneen barumsaa baadiyyaa Gimbii fi Naqamtee 14 keessatti taableetii anniisaa aduu, meeshaalee saayinsii fi kutaa qulqullinaa ijaaruun harcaatii shamarranii hir’isee fedhii STEM cimseera.',
    summaryTi: 'ኣብ ጊምቢን ነቀምቴን ኣብ 14 ገጠር ኣብያተ-ትምህርቲ ብጸሓይ ዝሰርሑ ታብሌታት፣ መሳርሒ ሳይንስን ክፍልታት ጽሬትን ብምምላእ ምቁራጽ ትምህርቲ ደቂ-ኣንስትዮ ብምንካይ ውጽኢት STEM ኣዕብዩ።',
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
    contentOm: [
      'Manneen barumsaa Oromiyaa Lixaa keessatti hanqinni meeshaalee saayinsii fi iddoo qulqullinaa harcaatii barnootaa shamarranii gara %42tti ol kaase ture.',
      'ADRAn manneen barumsaa 14 keessatti anniisaa aduu, taableetota STEM qabanii fi manneen fincaanii adda bahan bishaan qaban ijaareera.',
      'Bu’aan isaas harcaatiin shamarranii %4 gadi bu’uun, barattoonni %92 qormaata naannoo irratti qabxii olaanaa galmeessisaniiru.'
    ],
    contentTi: [
      'ኣብ ገጠራት ምዕራብ ኦሮሚያ ሕጽረት መሳርሒ ሳይንስን ክፍልታት ጽሬትን ምቁራጽ ትምህርቲ ደቂ-ኣንስትዮ ናብ 42% ክብ ኣቢልዎ ነይሩ።',
      'ኣድራ ኣብ 14 ኣብያተ-ትምህርቲ ብጸሓይ ዝሰርሑ ታብሌታት STEMን ብማይ ዝተማልኡ ናይ ጽሬት ክፍልታትን ሃኒጹ።',
      'ብሳላዚ ምቁራጽ ትምህርቲ ኣዋልድ ትሕቲ 4% ወሪዱ፣ 92% ድማ ኣብ ክልላዊ ፈተና ዝለዓለ ውጽኢት ኣመዝጊበን።'
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
      textOm: 'Yeroo jalqabaaf taableetii fi maayikirooskooppii tuquun, saayinsiin barruu qofa osoo hin taane ogummaa gara fuulduraa isaanii akka ta’e barattoota keenyatti agarsiiseera.',
      textTi: 'ተምሃሮና ንፈለማ እዋን ዲጂታል ታብሌትን ማይክሮስኮፕን ምጥቃሞም፣ ሳይንስ ናይ መጽሓፍ ጥራይ ዘይኮነ ናይ መጻኢ ሞያኦም ምዃኑ ኣርእይዎም።',
      author: 'Diriba Mengesha, Principal at Bikilal Primary School'
    }
  },
  {
    id: 'climate-smart-agriculture-sidama',
    slug: 'climate-smart-agriculture-sidama-smallholders',
    title: 'Transforming Harvests: Climate-Smart Teff and Micro-Irrigation in Sidama',
    titleAm: 'በሲዳማ የአየር ንብረት ተስማሚ የጤፍና የጓሮ አትክልት ምርትን ማሳደግ',
    titleOm: 'Qonna Qilleensaaf Mijaawaa Xaaffii fi Jallisii Xiqqaa Sidaamaatti',
    titleTi: 'ንክሊማ ዝምችእ ምህርቲ ጣፍን ንኡስ መስኖን ኣብ ሲዳማ',
    category: 'Food Security & Livelihoods',
    categoryAm: 'ምግብ ዋስትና እና ኑሮ',
    categoryOm: 'Wabii Nyaataa fi Jireenya',
    categoryTi: 'ውሕስነት መግብን ናብራን',
    date: 'September 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Alemayehu Mengistu',
      role: 'Agronomist & Livelihoods Lead',
      roleAm: 'የግብርና እና ኑሮ ማሻሻል ባለሙያ',
      roleOm: 'Ogeessa Qonnaa fi Jireenyaa',
      roleTi: 'ክኢላ ሕርሻን መነባብሮን'
    },
    summary: 'With seasonal rains increasingly erratic, ADRA partnered with 4,200 smallholder farming households in Sidama and Southern Ethiopia to introduce drought-resilient teff seeds, biological composting, and gravity drip irrigation.',
    summaryAm: 'የዝናብ መዛባትን ለመቋቋም በሲዳማ ክልል 4,200 አርሶ አደሮችን በድርቅ ተቋቋሚ የተሻሻሉ ዘሮች፣ በኦርጋኒክ ማዳበሪያ ዝግጅት እና በጠብታ መስኖ ስራዎች በማሰልጠን የምርት ውጤታማነትን በእጥፍ ያሳደገ ተሞክሮ።',
    summaryOm: 'Haala roobaa jijjiiramaa jiru dandamachuuf ADRAn Sidaamaatti qonnaan bultoota 4,200 waliin sanyii hongee dandamatu, kompoostii fi jallisii cophaa diriirsuun oomisha guddisuu danda’eera.',
    summaryTi: 'ዘይርጉእ ኩነታት ዝናብ ንምጽዋር ኣብ ሲዳማ ምስ 4,200 ሓረስቶት ብምትሕብባር ደርቂ ዝጻወር ዘርኢ ጣፍ፣ ተፈጥሮኣዊ ድኹዕን መስኖ ነጠብጣብን ብምትእትታው ምህርቲ ዕጽፊ ኮይኑ።',
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
    contentOm: [
      'Naannoo Sidaamaatti jijjiiramni roobaa fi hir’inni gabbina biyyoo oomisha qonnaan bultootaa miidhaa ture.',
      'ADRAn Manneen Barumsaa Dirree Qonnaan Bulaa 35 hundeessuun mala oomisha xaaffii ammayyaa (STI) sanyii %80 qusatuun oomisha dachaa argamsiisu barsiiseera.',
      'Jallisii cophaa bishaan roobaa kuufameen walqabsiisuun maatiiwwan waggaatti marsaa kuduraa lama dabalataan oomishaniiru.'
    ],
    contentTi: [
      'ኣብ ሲዳማ ዘይርጉእ ዝናብን ምጉዳል ፍርያምነት ሓመድን ኣብ ናይ ሓረስቶት እቶት ጸቕጢ ፈጢሩ ነይሩ።',
      'ኣድራ 35 መሰልጠኒ ማእከላት ሓረስቶት (FFS) ብምኽፋት 80% ዘርኢ ዝቑጥብን ብሉጽ ምህርቲ ዝህብን ዘመናዊ ኣሰራርሓ ጣፍ ኣሰልጢኑ።',
      'ብመስኖ ነጠብጣብ ኣቢሎም ኣብ ዓመት ክልተ ተወሳኺ እዋናት ኣሕምልቲ ብምፍራይ ብ28 ማሕበራት ኣቢሎም ተወሳኺ እቶት ይረኽቡ ኣለዉ።'
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
      textOm: 'Bona keessa ijoolleen keenya guyyaatti nyaata tokko argachuu isaanii yaadda’uu irraa gara torbanitti kuduraa gabaa naannoof dhiyeessuutti ceeneerra.',
      textTi: 'ኣብ ሓጋይ ደቅና ኣብ መዓልቲ ሓንቲ እምባኣር እንተረኸቡ ካብ ምጭናቕ ናብ ሰሙናዊ ንዕዳጋ ክልል ሓደሽቲ ኣሕምልቲ ምቕራብ በጺሕና።',
      author: 'Tadelech Shiferaw, Farmer Field School Coordinator'
    }
  },
  {
    id: 'mobile-nutrition-clinics-afar',
    slug: 'mobile-health-nutrition-clinics-afar-nomads',
    title: 'Lifeline in the Dunes: Mobile Health and Nutrition Units in Afar’s Pastoral Zones',
    titleAm: 'በአፋር ክልል በርቀት ለሚገኙ አርብቶ አደሮች ህይወት አድን የተንቀሳቃሽ ጤና አገልግሎት',
    titleOm: 'Tajaajila Fayyaa fi Nyaataa Sochoo’aa Horsiisee Bulaa Affaarf',
    titleTi: 'ተንቀሳቃሲ ኣሃዱታት ጥዕናን ኣመጋግባን ንሰብ-ከብቲ ዓፋር',
    category: 'Emergency Response & Health',
    categoryAm: 'አደጋ ምላሽ እና ጤና',
    categoryOm: 'Deebii Balaa fi Fayyaa',
    categoryTi: 'ምላሽ ሓደጋን ጥዕናን',
    date: 'August 22, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Fatuma Ali',
      role: 'Emergency Health & Nutrition Coordinator',
      roleAm: 'የአደጋ ጊዜ ጤና እና ስነ-ምግብ አስተባባሪ',
      roleOm: 'Qindeessaa Fayyaa fi Nyaataa Yeroo Balaa',
      roleTi: 'ኣተሓባባሪት ህጹጽ ጥዕናን ኣመጋግባን'
    },
    summary: 'Traversing extreme temperatures and isolated volcanic valleys, ADRA’s all-terrain mobile clinics deliver therapeutic nutrition, prenatal screenings, and immunizations directly to nomadic settlements in Zone 2 and Zone 4 of Afar.',
    summaryAm: 'አድራ ኢትዮጵያ በአፋር ክልል ተንቀሳቃሽ የህክምና ቡድኖችን በማሰማራት ከባድ የተመጣጠነ ምግብ እጥረት ያጋጠማቸውን ህፃናት እና ነፍሰ ጡር እናቶችን በቦታው ድረስ ሄዶ በማከም በርካታ ህይወትን ታድጓል።',
    summaryOm: 'Ho’a cimaa fi lafa fagoo keessa qaxxaamuruun gareen yaalaa sochoo’aan ADRA Zoonii 2 fi 4 Affaar keessatti nyaata yaalaa, qorannoo da’umsaa fi talaallii kallattiin hawaasaaf kennu.',
    summaryTi: 'ኣብ ከቢድ ዋዒን ርሑቕ ስንጭሮታት ዓፋርን ተንቀሳቃሲ ክሊኒካት ኣድራ ሕክምናዊ መግቢ፣ ምርመራ ነፍሰ-ጾራትን ክታበትን ብቐጥታ ናብ ጎደቦ ሰብ-ከብቲ የብጽሑ።',
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
    contentOm: [
      'Gammoojjii Affaar ho’i 45°C caalu keessatti buufanni fayyaa dhaabbataan hawaasa godaanu hunda qaqqabuu hin danda’u.',
      'Gareen fayyaa sochoo’aan ADRA firijii talaallii aduu, meeshaalee qorannoo fi nyaata yaalaa (RUTF) qabatanii daa’imman 6,800+ qorachuun lubbuu baraaraniiru.'
    ],
    contentTi: [
      'ኣብ ሙቐቱ ልዕሊ 45°C ዝበጽሕ ዓፋር፣ ቀወምቲ ማእከላት ጥዕና ናብ ኩሉ ሰብ-ከብቲ ክበጽሑ ኣይክእሉን።',
      'ተንቀሳቃሲ ጉጅለታት ኣድራ ብጸሓይ ዝሰርሑ መዝሓሊ ክታበትን ሕክምናዊ መግብን (RUTF) ሒዞም ልዕሊ 6,800 ህጻናት መርሚሮም ህይወት ኣድሒኖም።'
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
      textOm: 'Yeroo lakkuuwwan koo hoo’a qaamaa fi dadhabbii cimaan dhukkubsatanitti, kiliniikiin sochoo’aan yeroodhaan nu bira gahee qorichaa fi nyaataan lubbuu isaanii baraare.',
      textTi: 'ማንታ ደቀይ ብብርቱዕ ረስንን ድኻምን ምስ ሓመሙ፣ እቲ ተንቀሳቃሲ ክሊኒክ ብእዋኑ በጺሑ ብመድሓኒትን ሕክምናዊ መግብን ህይወቶም ኣድሒንዎም።',
      author: 'Medina Humed, Pastoralist Mother in Teru Woreda'
    }
  },
  {
    id: 'women-micro-enterprise-amhara',
    slug: 'resilience-micro-enterprises-women-amhara',
    title: 'From Survival to Prosperity: Women’s Village Savings and Micro-Enterprises in Amhara',
    titleAm: 'በአማራ ክልል የሴቶች የቁጠባና ብድር ማህበራት እና አነስተኛ ንግድ ስራዎች',
    titleOm: 'Qusannaa Ganda Dubartootaa fi Daldala Xiqqaa Naannoo Amaaraatti',
    titleTi: 'ማሕበራት ዕቋርን ንኣሽቱ ንግድታትን ደቂ-ኣንስትዮ ኣብ ኣምሓራ',
    category: 'Economic Growth & Enterprise',
    categoryAm: 'ኢኮኖሚ እና ስራ ፈጠራ',
    categoryOm: 'Guddina Diinagdee fi Daldala',
    categoryTi: 'ቁጠባዊ ዕቤትን ንግድን',
    date: 'July 30, 2026',
    readTime: '4 min read',
    author: {
      name: 'Meseret Kebede',
      role: 'Micro-Finance & Livelihoods Officer',
      roleAm: 'የማይክሮ ፋይናንስ እና የሴቶች አቅም ግንባታ ባለሙያ',
      roleOm: 'Ogeettii Maayikiroo-Faayinaansii fi Jireenyaa',
      roleTi: 'ክኢላ ማይክሮ-ፋይናንስን መነባብሮን'
    },
    summary: 'Empowering 1,280 widowed and displaced female heads of households in South Gondar through financial literacy training, catalytic seed grants, and Village Savings and Loan Associations (VSLAs) producing honey, poultry, and textiles.',
    summaryAm: 'በደቡብ ጎንደር ለሚገኙ 1,280 የቤተሰብ አስተዳዳሪ ሴቶች የገንዘብ ቁጠባ ስልጠና፣ የመነሻ ካፒታል ድጋፍ እና በዶሮ እርባታ፣ በንብ ማነብ እና በሽመና ስራዎች ላይ የተሰማሩ ህብረት ስራ ማህበራትን በማቋቋም ዘላቂ ገቢ እንዲያገኙ ያስቻለ ስራ።',
    summaryOm: 'Gondar Kibbaatti dubartoota bulchitoota maatii 1,280f leenjii maallaqaa, gargaarsa ka’umsaa fi waldaalee VSLA damma, lukkuu fi shammaa oomishan hundeessuun galii itti-fufiinsa qabu uumameera.',
    summaryTi: 'ኣብ ደቡብ ጎንደር ን1,280 ኣመሓደርቲ ስድራ ደቂ-ኣንስትዮ ስልጠና ቁጠባ፣ መበገሲ ካፒታልን ማሕበራት VSLA መዓር፣ ደርሆን ኣለባብን ብምምስራት ዘላቒ እቶት ተረጋጊጹ።',
    content: [
      'Protracted regional shocks and internal displacement often fall hardest on female-headed households, who face limited collateral to access formal banking or commercial credit in regional towns.',
      'ADRA Ethiopia launched the Women’s Economic Empowerment and Village Banking program across six woredas in South Gondar. We facilitated the creation of 64 Village Savings and Loan Associations (VSLAs), supplying sturdy lockboxes, passbooks, and 12-week financial management coaching.',
      'Upon graduating from the business simulation modules, each member received matching seed grants. Beneficiaries launched thriving collective enterprises, including modern top-bar beekeeping for white honey, bio-secure poultry production, and traditional woven textile manufacturing with direct buyers in regional markets.',
      'Every single VSLA group maintains a 99% loan repayment rate, with profits reinvested into children’s secondary school fees, household nutrition, and emergency health funds.'
    ],
    contentAm: [
      'ሴት የቤተሰብ አስተዳዳሪዎች መደበኛ ባንኮችን ለመጠቀም ዋስትና በማጣታቸው ለችግር ይጋለጡ ነበር።',
      'አድራ 64 የሴቶች የቁጠባና ብድር ማህበራትን በማደራጀት የመነሻ ካፒታል ድጋፍ እና የቢዝነስ ስልጠና ሰጥቷል።',
      'ዛሬ እነዚህ ሴቶች በንብ ማነብ፣ በዶሮ እርባታ እና በሽመና ውጤቶች ገበያውን በመቆጣጠር ቤተሰቦቻቸውን በክብር እያስተዳደሩ ይገኛሉ።'
    ],
    contentOm: [
      'Maatiiwwan dubartoonni bulchan wabii liqii baankii dhabuun rakkoo diinagdeef saaxilamu turan.',
      'ADRAn aanaalee Gondar Kibbaa ja’a keessatti gareewwan VSLA 64 hundeessuun leenjii fi kaappitaala jalqabaa kenneera.',
      'Har’a damma adii, lukkuu fi huccuu aadaa oomishuun kaffaltii liqii %99.2 galmeessisaniiru.'
    ],
    contentTi: [
      'ብደቂ-ኣንስትዮ ዝመሓደራ ስድራታት ዋሕስ ባንኪ ብምስኣን ንቁጠባዊ ጸገም ይቃለዓ ነይረን።',
      'ኣድራ ኣብ ሽዱሽተ ወረዳታት ደቡብ ጎንደር 64 ማሕበራት VSLA ብምውዳብ ስልጠና ንግድን መበገሲ ገንዘብን ሂቡ።',
      'ሎሚ ብምርባሕ ንህቢ፣ ደርሆን ሽመናን 99.2% ምምላስ ልቓሕ ኣመዝጊበን ስድራአን ብኽብሪ ይመርሓ ኣለዋ።'
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
      textOm: 'Garee qusannaatti makamuun kabaja naaf kenneera. Gargaarsa jalqabaan lukkuu 50 bitee amma kaffaltii koollejjii shamarran koo lamaanii ofumaan kaffala.',
      textTi: 'ኣብ ማሕበር ዕቋር ምጽንባረይ ክብረይ መሊሱለይ። በቲ ቀዳማይ ሓገዝ 50 ደርሆ ዓዲገ ሎሚ ናይ ክልተ ኣዋልደይ ወጻኢ ኮሌጅ ብርእሰይ ይሽፍን።',
      author: 'Almaz Tefera, VSLA Chairlady, Dera Woreda'
    }
  },
  {
    id: 'malnutrition-ctc-afar',
    slug: 'mobile-clinical-units-ctc-malnutrition-afar',
    title: 'Mobile Clinical Units & Community Therapeutic Care: Stamping Out Malnutrition in Afar Salt Basins',
    titleAm: 'በአፋር ክልል ተንቀሳቃሽ የህክምና ቡድኖች እና የማህበረሰብ የተመጣጠነ ምግብ እጥረት ማከሚያ ስራዎች',
    titleOm: 'Yaala Fayyaa Sochoo’aa fi Kununsa Hawaasaa Hanqina Nyaataa Affaariif',
    titleTi: 'ተንቀሳቃሲ ክሊኒካትን ሕክምና ሕጽረት መግብን ኣብ ጎላጉል ጨው ዓፋር',
    category: 'Emergency Response & Health',
    categoryAm: 'አደጋ ምላሽ እና ጤና',
    categoryOm: 'Deebii Balaa fi Fayyaa',
    categoryTi: 'ምላሽ ሓደጋን ጥዕናን',
    date: 'June 18, 2026',
    readTime: '6 min read',
    author: {
      name: 'Dr. Mohammed Ahmed',
      role: 'Emergency Health Coordinator, Afar Field Hub',
      roleAm: 'የአደጋ ጊዜ ጤና እና ስነ-ምግብ አስተባባሪ',
      roleOm: 'Qindeessaa Fayyaa Yeroo Balaa, Affaar',
      roleTi: 'ኣተሓባባሪ ህጹጽ ጥዕና፣ ማእከል ዓፋር'
    },
    summary: 'Traversing the hyper-arid plains of Berhale and Dalol where temperatures exceed 46°C, ADRA’s four-wheel-drive mobile clinics deliver ready-to-use therapeutic food (RUTF), maternal ultrasounds, and childhood immunizations directly to nomadic settlements.',
    summaryAm: 'በአፋር በርሃማ አካባቢዎች አድራ ኢትዮጵያ በአስቸጋሪ የአየር ጠባይ ውስጥ የሚገኙ አርብቶ አደሮች ድረስ በመጓዝ ህይወት አድን የህክምና እና የተመጣጠነ ምግብ እርዳታን በማድረስ የህጻናትን ሞት መከላከል ችሏል።',
    summaryOm: 'Dirreewwan ho’a 46°C ol qaban Barhaalee fi Daallol keessatti kiliniikonni sochoo’an ADRA nyaata yaalaa RUTF, altiraasawundii haadholii fi talaallii kallattiin kennu.',
    summaryTi: 'ኣብ ዋዒኦም ልዕሊ 46°C ዝበጽሕ በርሃለን ዳሎልን ተንቀሳቃሲ ክሊኒካት ኣድራ ሕክምናዊ መግቢ (RUTF)፣ ኣልትራሳውንድ ኣዴታትን ክታበትን ናብ ሰብ-ከብቲ የብጽሑ።',
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
    contentOm: [
      'Aanaalee Barhaalee fi Daallol keessatti horsiisee bultoonni hospitaalota irraa baay’ee fagaatanii jiraatu.',
      'ADRAn garee yaalaa sochoo’aa 4 bobbaasuun iddoowwan OTP gandaa 42 keessatti RUTF fi hordoffii MUAC torbaniitti kenna.',
      'Daa’imman hanqina nyaataa cimaa qaban %95.8 fayyisuun sadarkaa idil-addunyaa caaleera.'
    ],
    contentTi: [
      'ኣብ ወረዳታት በርሃለን ዳሎልን ሰብ-ከብቲ ካብ ሆስፒታላት ኣዝዮም ርሒቖም ይነብሩ።',
      'ኣድራ 4 ተንቀሳቃሲ ጉጅለታት ብምውፋር ኣብ 42 ነቑጣታት OTP ገጠር ሕክምና RUTFን ምርመራ MUACን ይህብ።',
      'ኣብ ዝሓለፈ ሽዱሽተ ወርሒ መጠን ምሕዋይ ህጻናት 95.8% በጺሑ ኣሎ።'
    ],
    metrics: [
      { label: 'Children Screened & Treated', value: '42,500+' },
      { label: 'SAM Cure Rate Achieved', value: '95.8%' },
      { label: 'Remote Kebeles Served', value: '42 Sites' }
    ],
    tags: ['Afar Region', 'Health & Nutrition', 'CTC', 'Emergency Outreach'],
    image: '/assets/images/adra_emergency_health_1792612497133.jpg',
    quote: {
      text: 'When the mobile clinic arrived in our settlement, my infant daughter was unconscious from fever and weakness. Within minutes, the doctor gave her electrolytes and treatment. She is alive today because ADRA came to our doorstep.',
      textAm: 'ተንቀሳቃሽ ክሊኒኩ ወደ መንደራችን ሲመጣ ልጄ በከፍተኛ ትኩሳትና ድካም ራሷን ስታ ነበር፤ የህክምና እርዳታው ህይወቷን ታድጎልኛል።',
      textOm: 'Yeroo kiliniikiin sochoo’aan ganda keenya gahe intalli koo hoo’aan of wallaaltee turte. Daqiiqaa muraasa keessatti qoricha argattee har’a lubbuun jirti.',
      textTi: 'ተንቀሳቃሲ ክሊኒክ ናብ ዓድና ምስ መጸ ጓለይ ብረስኒ ሃለዋታ ስሒታ ነይራ። ኣብ ውሽጢ ደቓይቕ ሕክምና ረኺባ ሎሚ ብህይወት ኣላ።',
      author: 'Fatuma Ali, Pastoral Mother in Afar Region'
    }
  },
  {
    id: 'agroforestry-beekeeping-benishangul',
    slug: 'modern-apiculture-forest-conservation-benishangul',
    title: 'Sweet Harvests, Preserved Forests: Modern Apiculture & Forest Conservation in Benishangul-Gumuz',
    titleAm: 'በቤኒሻንጉል ጉሙዝ ዘመናዊ የንብ ማነብ እና የተፈጥሮ ደን ጥበቃ ፕሮጀክት',
    titleOm: 'Horsiisa Kanniisaa Ammayyaa fi Eegumsa Bosonaa Beenishaangul-Gumuzitti',
    titleTi: 'ዘመናዊ ምርባሕ ንህብን ሓለዋ ዱርን ኣብ ቤኒሻንጉል-ጉሙዝ',
    category: 'Food Security & Livelihoods',
    categoryAm: 'ምግብ ዋስትና እና ኑሮ',
    categoryOm: 'Wabii Nyaataa fi Jireenya',
    categoryTi: 'ውሕስነት መግብን ናብራን',
    date: 'May 12, 2026',
    readTime: '5 min read',
    author: {
      name: 'Tsegaye Hailu',
      role: 'Agroforestry and Natural Resource Specialist',
      roleAm: 'የደን እና የተፈጥሮ ሀብት ልማት ከፍተኛ ባለሙያ',
      roleOm: 'Ogeessa Bosonaa fi Qabeenya Uumamaa',
      roleTi: 'ክኢላ ዱርን ተፈጥሮኣዊ ሃብትን'
    },
    summary: 'Transforming rural livelihoods around Metekel and Bambasi through 850 modern transitional beehives, solar honey processing centrifuges, and certified forest honey cooperatives that preserve indigenous bamboo forests while doubling farmer earnings.',
    summaryAm: 'በቤኒሻንጉል ጉሙዝ 850 ዘመናዊ የንብ ቀፎዎችን እና የሶላር ማር ማጣሪያ መሳሪያዎችን ለአርሶ አደሮች በማቅረብ የተፈጥሮ ደንን በመጠበቅ የገበሬዎችን ገቢ በከፍተኛ ሁኔታ ያሳደገ ፕሮጀክት።',
    summaryOm: 'Matakkal fi Bambaasii keessatti gaagura ammayyaa 850 fi meeshaa damma aduun calalu kennuun bosona uumamaa osoo eeganii galii qonnaan bulaa dachaa taasiseera.',
    summaryTi: 'ኣብ መተከልን ባምባሲን 850 ዘመናዊ ቆፎ ንህብን ብጸሓይ ዝሰርሕ መጻረዪ መዓርን ብምሃብ ዱር ከይተተንከፈ እቶት ሓረስቶት ዕጽፊ ኮይኑ።',
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
    contentOm: [
      'Bosonni Beenishaangul-Gumuz biqiltoota kanniisaa badhaadhaa qabaatus, mukti muramu bosona miidhaa ture.',
      'ADRAn gaagura ammayyaa 850 fi calaltuu dammaa aduu kennuun waldaaleen damma orgaanikii qulqullina olaanaa qabu gatii dachaa sadiin gurguruu danda’aniiru.',
      'Hektaarri bosonaa 2,400 ol seera eegumsa hawaasaatiin eegamaa jira.'
    ],
    contentTi: [
      'ኣብ ቤኒሻንጉል-ጉሙዝ ዘለዉ ዱራት ንምርባሕ ንህቢ ምቹኣት እኳ እንተኾኑ፣ ምቑራጽ ኣግራብ ጉድኣት የስዕብ ነይሩ።',
      'ኣድራ 850 ዘመናዊ ቆፎን ብጸሓይ ዝሰርሕ መጻረዪ መዓርን ብምቕራብ ኦርጋኒክ መዓር ብሰለስተ ዕጽፊ ዋጋ ክሽየጥ ኣኽኢሉ።',
      'ልዕሊ 2,400 ሄክታር ዱር ብሕጊ ሕብረተሰብ ኣብ ሓለዋ ኣትዩ ኣሎ።'
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
      textOm: 'Muka qoraaniif muruu dhiisnee kanniisota keenyaaf jennee bosona eegna. Bu’aa dammaatiin mana qorqorroo ijaaree ilmaan koo yuunivarsiitii ergeera.',
      textTi: 'ኣግራብ ንዕንጨይቲ ካብ ምቑራጽ ንንህብና መግቢ ስለ ዝኾኑ ንከናኸኖም። ብመሸጣ መዓር ናይ ቆርቆሮ ገዛ ሰሪሐ ደቀይ ናብ ዩኒቨርሲቲ ሰዲደ።',
      author: 'Ato Girma Belay, Bambasi Honey Cooperative President'
    }
  },
  {
    id: 'school-wash-dignity-sidama',
    slug: 'dignity-in-schools-menstrual-hygiene-sidama',
    title: 'Dignity in Every Classroom: Dedicated Menstrual Hygiene Rooms & Solar Gravity Water in Sidama',
    titleAm: 'በሲዳማ ትምህርት ቤቶች የሴት ተማሪዎች የንጽህና መጠበቂያ ክፍሎችና የሶላር ውሃ ዝርጋታ',
    titleOm: 'Kutaa Qulqullina Shamarranii fi Bishaan Aduu Manneen Barumsaa Sidaamaatti',
    titleTi: 'ክብሪ ኣብ ነፍሲ-ወከፍ ክፍሊ፡ ጽሬት ደቂ-ኣንስትዮን ማይ ጸሓይን ኣብ ሲዳማ',
    category: 'Education & Protection',
    categoryAm: 'ትምህርት እና ጥበቃ',
    categoryOm: 'Barnoota fi Eegumsa',
    categoryTi: 'ትምህርትን ሓለዋን',
    date: 'April 22, 2026',
    readTime: '4 min read',
    author: {
      name: 'Selamawit Desta',
      role: 'Gender and Social Inclusion Lead',
      roleAm: 'የስርዓተ-ፆታ እና ማህበራዊ ማካተት አስተባባሪ',
      roleOm: 'Hogganaa Koorniyaa fi Hirmaannaa Hawaasaa',
      roleTi: 'መራሒት ስርዓተ-ጾታን ማሕበራዊ ምሕቋፍን'
    },
    summary: 'How constructing solar-pumped clean water networks and private menstrual hygiene management rooms across 36 rural primary and secondary schools in Bensa and Aroresa reduced female student dropout rates by 68%.',
    summaryAm: 'በሲዳማ ክልል በ36 የገጠር ት/ቤቶች ውስጥ የሶላር ውሃ እና የሴቶች የክብር መጠበቂያ ክፍሎችን በመገንባት የሴት ተማሪዎችን የትምህርት ማቋረጥ በ68 በመቶ የቀነሰ ውጤታማ ስራ።',
    summaryOm: 'Bansaa fi Arrooreessaa keessatti manneen barumsaa baadiyyaa 36tti bishaan anniisaa aduu fi kutaa qulqullina shamarranii ijaaruun harcaatii shamarranii %68 hir’iseera.',
    summaryTi: 'ኣብ ቤንሳን ኣሮሬሳን ኣብ 36 ገጠር ኣብያተ-ትምህርቲ ብጸሓይ ዝሰርሕ ማይን ክፍልታት ጽሬት ኣዋልድን ብምህናጽ ምቁራጽ ትምህርቲ ደቂ-ኣንስትዮ ብ68% ነኪዩ።',
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
    contentOm: [
      'Manneen barumsaa baadiyyaa keessatti hanqinni kutaa qulqullinaa ji’a ji’aan barattoota dubaraa barnoota irraa hambisa ture.',
      'Sagantaa SEAQE II jalatti ADRAn manneen barumsaa 36tti kutaa qulqullinaa bishaan aduu fi paadii irra deebi’amuun guutaman ijaareera.',
      'Harcaatiin shamarranii %68 hir’atee, qabxiin qormaata isaanii dhiira waliin wal qixxaateera.'
    ],
    contentTi: [
      'ኣብ ገጠር ኣብያተ-ትምህርቲ ሕጽረት ክፍልታት ጽሬት ደቂ-ኣንስትዮ ኣብ ወርሒ ንመዓልታት ካብ ትምህርቲ የትርፈን ነይሩ።',
      'ኣብ ትሕቲ መደብ SEAQE II ኣድራ ኣብ 36 ኣብያተ-ትምህርቲ ብማይ ጸሓይ ዝተማልኡ ክፍልታት ጽሬትን ናውትን ኣዳልዩ።',
      'ምቁራጽ ትምህርቲ ኣዋልድ ብ68% ብምንካይ ውጽኢት ፈተናአን ምስ ኣወዳት ማዕረ በጺሑ።'
    ],
    metrics: [
      { label: 'Schools Equipped', value: '36 Schools' },
      { label: 'Female Dropout Reduction', value: '68%' },
      { label: 'Girls Provided Dignity Kits', value: '14,200+' }
    ],
    tags: ['Sidama Region', 'Education', 'WASH', 'Gender Equity'],
    image: '/src/assets/images/adra_education_girls_1792612496863.jpg',
    quote: {
      text: 'Having a safe, clean place with running water at school changed everything. We no longer feel ashamed or stay at home. We come to school with our heads held high.',
      textAm: 'በትምህርት ቤታችን ንጹህ ውሃ እና ምቹ የክብር መጠበቂያ ክፍል መኖሩ ትልቅ በረከት ነው፤ አሁን ምንም ሳንሸማቀቅ በሙሉ ልብ እንማራለን።',
      textOm: 'Mana barumsaatti bishaan qulqulluu fi bakka nagaa qabaachuun waan hunda jijjiire. Hin saalfannu, hin hafnu; ol jennee baranna.',
      textTi: 'ኣብ ቤት-ትምህርትና ውሑስ ቦታን ዝፈስስ ማይን ምርካብና ንኹሉ ቀዪርዎ። ሕጂ ከይሓፈርና ብምሉእ ርእሰ-ምትእምማን ንመሃር ኣለና።',
      author: 'Genet Tariku (Age 15), Grade 8, Sidama Region'
    }
  },
  {
    id: 'ai-drought-early-warning',
    slug: 'ai-predictive-early-warning-ethiopia',
    title: 'Forecasting Water Scarcity 90 Days Ahead: Predictive Geo-Data Grounded in Local Community Action',
    titleAm: 'የአየር ንብረት ድርቅን አስቀድሞ በቴክኖሎጂ እና አርቴፊሻል ኢንተለጀንስ መተንበይ',
    titleOm: 'Hanqina Bishaanii Guyyaa 90 Dura Tilmaamuu: Daataa Ji’oo fi Tarkaanfii Hawaasaa',
    titleTi: '90 መዓልቲ ኣቐዲሙ ትንበያ ዋሕዲ ማይ ብጂኦ-ዳታን ስጉምቲ ሕብረተሰብን',
    category: 'Water, Sanitation & Hygiene',
    categoryAm: 'ውሃ፣ ሳኒቴሽን እና ንጽህና',
    categoryOm: 'Bishaan fi Qulqullina',
    categoryTi: 'ማይ፣ ሳኒቴሽንን ጽሬትን',
    date: 'March 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Eng. Solomon Worku',
      role: 'GIS & Hydrological Systems Lead',
      roleAm: 'የጂአይኤስ እና ሃይድሮሎጂ ቴክኖሎጂ መሪ',
      roleOm: 'Hogganaa Sirna GIS fi Haayidrooloojii',
      roleTi: 'መራሒ ስርዓታት GISን ሃይድሮሎጂን'
    },
    summary: 'Deploying low-power IoT telemetry sensors on deep boreholes coupled with satellite soil-moisture algorithms to give pastoralist water committees a 90-day predictive drought warning window before aquifers dip.',
    summaryAm: 'በጥልቅ የውሃ ጉድጓዶች ላይ በተገጠሙ ዲጂታል ሴንሰሮች እና የሳተላይት መረጃዎች በመታገዝ የከርሰ ምድር ውሃ መጠን ከመቀነሱ በፊት 90 ቀናት አስቀድሞ የማስጠንቀቂያ መረጃ የሚሰጥ ቴክኖሎጂ።',
    summaryOm: 'Seensaroota IoT boolla gadi fagaatanii fi daataa saatalaayitii walitti hidhuun, koreen bishaanii dhumuu isaa dura akeekkachiisa guyyaa 90 akka argatu taasisa.',
    summaryTi: 'ኣብ ዓሚቝ ዒላታት ማይ ብዝተተኽሉ ሰንሰራት IoTን ዳታ ሳተላይትን ኣቢሉ ኮሚቴታት ማይ 90 መዓልታት ኣቐዲሞም መጠንቀቕታ ደርቂ ክረኽቡ የኽእል።',
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
    contentOm: [
      'Gammoojjii keessatti erga hongeen dhufee booda tarkaanfii fudhachuun boodatti harkifataadha; of-eeggannoo dursaa barbaachisa.',
      'ADRAn Somaalee fi Affaar keessatti boolla aduu 24 irratti seensaroota teelemeetirii dhaabuun daataa saatalaayitii Sentinel-2 waliin qindeessa.',
      'Kunis hanqinni bishaanii osoo hin uumamin guyyaa 90 dura suphaa dursaa raawwachuuf gargaara.'
    ],
    contentTi: [
      'ኣብ በረኻታት ደርቂ ምስ መጸ ስጉምቲ ምውሳድ ድንጉይ እዩ፤ ኣቐዲምካ ምፍላጥ ወሳኒ እዩ።',
      'ኣድራ ኣብ ሶማሌን ዓፋርን ኣብ 24 ብጸሓይ ዝሰርሑ ዒላታት ሰንሰራት ብምትካል ምስ ዳታ ሳተላይት Sentinel-2 የራኽቦም።',
      'እዚ ቴክኖሎጂ ዋሕዲ ማይ ቅድሚ ምፍጣሩ 90 መዓልታት ኣቐዲሙ ብምሕባር ኣቐዲሙ ጽገና ክግበር የኽእል።'
    ],
    metrics: [
      { label: 'IoT Boreholes Connected', value: '24 Stations' },
      { label: 'Early Warning Lead Time', value: '90 Days' },
      { label: 'Prevented Water Outages', value: '100% Zero' }
    ],
    tags: ['AI for Good', 'WASH', 'Early Warning', 'GIS Innovation'],
    image: '/src/assets/images/solar_water_desert_1792618997738.jpg',
    quote: {
      text: 'For the first time in our history, we don’t have to wait for the pump to sputter dry before seeking help. We know months in advance when to conserve and how to manage our aquifer.',
      textAm: 'በታሪካችን ለመጀመሪያ ጊዜ ፓምፑ ተበላሽቶ ውሃ እስኪያልቅ አንጠብቅም፤ ወራት አስቀድመን መረጃው ስለሚደርሰን የውሃ አጠቃቀማችንን እናስተካክላለን።',
      textOm: 'Seenaa keenya keessatti yeroo jalqabaaf paampiin gogee bishaan dhumuu hin eegnu. Ji’oota dura beeknee bishaan keenya qusanna.',
      textTi: 'ኣብ ታሪኽና ንፈለማ እዋን ፓምፕ ነቒጹ ማይ ክሳብ ዝውዳእ ኣይንጽበን፤ ኣዋርሕ ኣቐዲምና ፈሊጥና ማይና ንቑጥብ።',
      author: 'Sheikh Abdiwahid, Elder & WASHCo Secretary, Warder'
    }
  },
  {
    id: 'maternal-waiting-homes-south-ethiopia',
    slug: 'zero-maternal-deaths-solar-maternal-waiting-homes',
    title: 'Zero Preventable Maternal Deaths: Solar-Powered Maternal Waiting Homes in Mountain Communities',
    titleAm: 'በደቡብ ኢትዮጵያ ተራራማ አካባቢዎች በሶላር ኃይል የሚሰሩ የእናቶች ማረፊያ ማዕከላት',
    titleOm: 'Du’a Haadholii Hir’isuu: Mana Eeggannoo Haadholii Anniisaa Aduun Hojetu',
    titleTi: 'ዜሮ ዝክልከል ሞት ኣዴታት፡ ብጸሓይ ዝሰርሕ መጽንሒ ኣዴታት ኣብ ጎቦታት',
    category: 'Emergency Response & Health',
    categoryAm: 'አደጋ ምላሽ እና ጤና',
    categoryOm: 'Deebii Balaa fi Fayyaa',
    categoryTi: 'ምላሽ ሓደጋን ጥዕናን',
    date: 'February 10, 2026',
    readTime: '5 min read',
    author: {
      name: 'Sister Rahel Assefa',
      role: 'Senior Maternal & Child Health Nurse Specialist',
      roleAm: 'የእናቶችና ህጻናት ጤና ከፍተኛ ባለሙያ',
      roleOm: 'Ogeettii Fayyaa Haadholii fi Daa’immanii',
      roleTi: 'ላዕለወይቲ ክኢላ ጥዕና ኣዴታትን ህጻናትን'
    },
    summary: 'Constructing solar-electrified, dignified maternal waiting homes adjacent to remote rural health centers in South Ethiopia, providing nutritious hot meals and 24/7 skilled midwife care for over 4,800 expectant mothers.',
    summaryAm: 'በደቡብ ኢትዮጵያ ተራራማ አካባቢዎች ለሚኖሩ ነፍሰ ጡር እናቶች በጤና ጣቢያዎች አቅራቢያ ምቹና በሶላር ኃይል የሚሰሩ ማረፊያዎችን በመገንባት የእናቶችንና የህጻናትን ሞት ዜሮ ያደረገ ፕሮጀክት።',
    summaryOm: 'Itoophiyaa Kibbaa keessatti buufataalee fayyaa biratti mana eeggannoo haadholii anniisaa aduu qabu ijaaruun haadholii 4,800+f nyaataa fi kunuunsa deessistootaa 24/7 kenneera.',
    summaryTi: 'ኣብ ደቡብ ኢትዮጵያ ጥቓ ማእከላት ጥዕና ብጸሓይ ዝሰርሑ ምቹኣት መጽንሒ ኣዴታት ብምህናጽ ንልዕሊ 4,800 ነፍሰ-ጾራት መግብን ናይ 24 ሰዓት መዋለድትን የቕርብ።',
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
    contentOm: [
      'Zooniiwwan Goofaa fi Aarii gaaraa keessatti haadholiin buufata fayyaa gahuuf sa’aatii 8 deemuun balaaf saaxilamu turan.',
      'ADRAn mooraa kiliniikaa keessatti Mana Eeggannoo Haadholii (MWH) 8 anniisaa aduu fi nyaata madaalawaa qabu ijaareera.',
      'Buufataalee kana keessatti waggoota lamaan darbanitti duuti haadholii zeeroo (%0.0) galmaa’eera.'
    ],
    contentTi: [
      'ኣብ ኣኽራናት ዞባታት ጎፋን ኣርን ነፍሰ-ጾራት ናብ ማእከል ጥዕና ንምብጻሕ ክሳብ 8 ሰዓት ብምጉዓዝ ንሓደጋ ይቃለዓ ነይረን።',
      'ኣድራ ኣብ ቀጽሪ ማእከላት ጥዕና 8 ዘመናዊ መጽንሒ ኣዴታት (MWH) ብጸሓያዊ መብራህትን ምግብን ሃኒጹ።',
      'ኣብ ዝሓለፉ ክልተ ዓመታት ኣብዘን ማእከላት ሞት ኣዴታት 0.0% ኮይኑ፣ ውሕስ ሕርሲ 98.4% በጺሑ።'
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
      textOm: 'Haati koo halkan dukkanaa keessatti lafa irratti na deesse. Ani garuu siree ho’aa, ibsaa aduu fi kunuunsa narsootaan ilma koo nagaan deesse.',
      textTi: 'ኣደይ ብጸልማት ኣብ መሬት ወሊዳትኒ። ኣነ ግን ኣብ ጽሩይ ዓራት፣ ብርሃንን ፍቕሪ ዘለወን ኣዋለድትን ወደይ ብሰላም ተገላጊለ።',
      author: 'Woyneshet Kassa (Age 22), First-time Mother, Gofa'
    }
  }
];

export const BLOG_CATEGORY_MAP: Record<string, { en: string; am: string; om: string; ti: string }> = {
  All: { en: 'All', am: 'ሁሉም', om: 'Hunda', ti: 'ኩሉ' },
  'Water, Sanitation & Hygiene': {
    en: 'Water, Sanitation & Hygiene',
    am: 'ውሃ፣ ሳኒቴሽን እና ንጽህና',
    om: 'Bishaan fi Qulqullina',
    ti: 'ማይ፣ ሳኒቴሽንን ጽሬትን'
  },
  'Education & Protection': {
    en: 'Education & Protection',
    am: 'ትምህርት እና ጥበቃ',
    om: 'Barnoota fi Eegumsa',
    ti: 'ትምህርትን ሓለዋን'
  },
  'Food Security & Livelihoods': {
    en: 'Food Security & Livelihoods',
    am: 'ምግብ ዋስትና እና ኑሮ',
    om: 'Wabii Nyaataa fi Jireenya',
    ti: 'ውሕስነት መግብን ናብራን'
  },
  'Emergency Response & Health': {
    en: 'Emergency Response & Health',
    am: 'አደጋ ምላሽ እና ጤና',
    om: 'Deebii Balaa fi Fayyaa',
    ti: 'ምላሽ ሓደጋን ጥዕናን'
  },
  'Economic Growth & Enterprise': {
    en: 'Economic Growth & Enterprise',
    am: 'ኢኮኖሚ እና ስራ ፈጠራ',
    om: 'Guddina Diinagdee fi Daldala',
    ti: 'ቁጠባዊ ዕቤትን ንግድን'
  }
};

const READ_TIME_MAP: Record<string, Record<Language, string>> = {
  '4 min read': { en: '4 min read', am: '4 ደቂቃ ንባብ', om: 'Daq. 4 dub.', ti: '4 ደቒቕ ንባብ' },
  '5 min read': { en: '5 min read', am: '5 ደቂቃ ንባብ', om: 'Daq. 5 dub.', ti: '5 ደቒቕ ንባብ' },
  '6 min read': { en: '6 min read', am: '6 ደቂቃ ንባብ', om: 'Daq. 6 dub.', ti: '6 ደቒቕ ንባብ' }
};

const DATE_MAP: Record<string, Record<Language, string>> = {
  'October 14, 2026': { en: 'October 14, 2026', am: 'ጥቅምት 14, 2026', om: 'Onk. 14, 2026', ti: 'ጥቅምቲ 14, 2026' },
  'September 28, 2026': { en: 'September 28, 2026', am: 'መስከረም 28, 2026', om: 'Ful. 28, 2026', ti: 'መስከረም 28, 2026' },
  'September 10, 2026': { en: 'September 10, 2026', am: 'መስከረም 10, 2026', om: 'Ful. 10, 2026', ti: 'መስከረም 10, 2026' },
  'August 22, 2026': { en: 'August 22, 2026', am: 'ነሐሴ 22, 2026', om: 'Hag. 22, 2026', ti: 'ነሓሰ 22, 2026' },
  'July 30, 2026': { en: 'July 30, 2026', am: 'ሐምሌ 30, 2026', om: 'Ado 30, 2026', ti: 'ሓምለ 30, 2026' },
  'June 18, 2026': { en: 'June 18, 2026', am: 'ሰኔ 18, 2026', om: 'Wax 18, 2026', ti: 'ሰነ 18, 2026' },
  'May 12, 2026': { en: 'May 12, 2026', am: 'ግንቦት 12, 2026', om: 'Cam 12, 2026', ti: 'ግንቦት 12, 2026' },
  'April 22, 2026': { en: 'April 22, 2026', am: 'ሚያዝያ 22, 2026', om: 'Eb 22, 2026', ti: 'ሚያዝያ 22, 2026' },
  'March 15, 2026': { en: 'March 15, 2026', am: 'መጋቢት 15, 2026', om: 'Bit 15, 2026', ti: 'መጋቢት 15, 2026' },
  'February 10, 2026': { en: 'February 10, 2026', am: 'የካቲት 10, 2026', om: 'Gur 10, 2026', ti: 'ለካቲት 10, 2026' }
};

const METRIC_LABEL_MAP: Record<string, Record<Language, string>> = {
  'Continuous Water Access': { en: 'Continuous Water Access', am: 'ቋሚ የውሃ ተጠቃሚዎች', om: 'Bishaan Itti Fufaa', ti: 'ቀዋሚ ኣገልግሎት ማይ' },
  'Fuel Costs Eliminated': { en: 'Fuel Costs Eliminated', am: 'የዳነ የነዳጅ ወጪ', om: 'Baasii Boba’aa Hafe', ti: 'ዝተረፈ ወጻኢ ነዳዲ' },
  'Solar Boreholes Live': { en: 'Solar Boreholes Live', am: 'የሶላር ጉድጓዶች', om: 'Boolla Aduu Hojjetu', ti: 'ዝሰርሑ ዒላታት ጸሓይ' },
  'Girls Retained in School': { en: 'Girls Retained in School', am: 'በትምህርት የቆዩ ሴቶች', om: 'Shamarran Baratan', ti: 'ኣብ ትምህርቲ ዝጸንሓ' },
  'Pass Rate in Regional Exams': { en: 'Pass Rate in Regional Exams', am: 'የክልል ፈተና ማለፊያ', om: 'Qormaata Kan Darban', ti: 'መጠን ምሕላፍ ፈተና' },
  'STEM Classrooms Built': { en: 'STEM Classrooms Built', am: 'የተገነቡ STEM ክፍሎች', om: 'Kutaa STEM Ijaarame', ti: 'ዝተሃንጹ ክፍልታት STEM' },
  'Yield Increase Recorded': { en: 'Yield Increase Recorded', am: 'የምርት ጭማሪ መጠን', om: 'Daballii Oomishaa', ti: 'ዝተመዝገበ ወሰኽ ምህርቲ' },
  'Smallholder Farmers Trained': { en: 'Smallholder Farmers Trained', am: 'የሰለጠኑ አርሶ አደሮች', om: 'Qonnaan Bultoota', ti: 'ዝሰልጠኑ ሓረስቶት' },
  'Cooperative Revenue': { en: 'Cooperative Revenue', am: 'የማህበራት ገቢ', om: 'Galii Waldaa', ti: 'እቶት ማሕበራት' },
  'Children Screened': { en: 'Children Screened', am: 'የተመረመሩ ህጻናት', om: 'Daa’imman Qoraman', ti: 'ዝተመርመሩ ህጻናት' },
  'Cure Recovery Rate': { en: 'Cure Recovery Rate', am: 'የማዳን ውጤት', om: 'Fayyina Daa’immanii', ti: 'መጠን ምሕዋይ' },
  'Nomadic Settlements Visited': { en: 'Nomadic Settlements Visited', am: 'የተደረሱ መንደሮች', om: 'Gandoota Qaqqabaman', ti: 'ዝተበጽሑ ዓድታት' },
  'Women Entrepreneurs': { en: 'Women Entrepreneurs', am: 'ሴት ስራ ፈጣሪዎች', om: 'Dubartoota Daldalaa', ti: 'ነጋዶ ደቂ-ኣንስትዮ' },
  'Loan Repayment Rate': { en: 'Loan Repayment Rate', am: 'የብድር መመለሻ መጠን', om: 'Kaffaltii Liqii', ti: 'መጠን ምምላስ ልቓሕ' },
  'VSLAs Established': { en: 'VSLAs Established', am: 'የተቋቋሙ ማህበራት', om: 'Garee VSLA Hundaa’e', ti: 'ዝተመስረቱ ማሕበራት' },
  'Children Screened & Treated': { en: 'Children Screened & Treated', am: 'የታከሙ ህጻናት', om: 'Daa’imman Yaalaman', ti: 'ዝተሓከሙ ህጻናት' },
  'SAM Cure Rate Achieved': { en: 'SAM Cure Rate Achieved', am: 'የSAM ማዳን መጠን', om: 'Fayyina SAM Argamte', ti: 'መጠን ምሕዋይ SAM' },
  'Remote Kebeles Served': { en: 'Remote Kebeles Served', am: 'የተደረሱ ቀበሌዎች', om: 'Gandoota Tajaajilaman', ti: 'ዝተገልገላ ጣብያታት' },
  'Organic Honey Harvested': { en: 'Organic Honey Harvested', am: 'የተመረተ ኦርጋኒክ ማር', om: 'Damma Orgaanikii', ti: 'ዝተመርተ ኦርጋኒክ መዓር' },
  'Hectares Forest Protected': { en: 'Hectares Forest Protected', am: 'የተጠበቀ ደን ሄክታር', om: 'Bosona Eegame (Ha)', ti: 'ዝተሓለወ ዱር (ሄክታር)' },
  'Cooperative Income Boost': { en: 'Cooperative Income Boost', am: 'የገቢ እድገት መጠን', om: 'Guddina Galii Waldaa', ti: 'ዕቤት እቶት ማሕበራት' },
  'Schools Equipped': { en: 'Schools Equipped', am: 'የተደራጁ ት/ቤቶች', om: 'Manneen Barumsaa', ti: 'ዝተማልኣ ኣብያተ-ትምህርቲ' },
  'Female Dropout Reduction': { en: 'Female Dropout Reduction', am: 'የሴቶች ማቋረጥ ቅናሽ', om: 'Hir’ina Harcaatii', ti: 'ምንካይ ምቁራጽ ኣዋልድ' },
  'Girls Provided Dignity Kits': { en: 'Girls Provided Dignity Kits', am: 'ፓድ ያገኙ ተማሪዎች', om: 'Qulqullina Shamarran', ti: 'ናውቲ ጽሬት ዝረኸባ' },
  'IoT Boreholes Connected': { en: 'IoT Boreholes Connected', am: 'የIoT የውሃ ጉድጓዶች', om: 'Boolla IoT Walqabate', ti: 'ብIoT ዝተራኸቡ ዒላታት' },
  'Early Warning Lead Time': { en: 'Early Warning Lead Time', am: 'ቅድመ ማስጠንቀቂያ ጊዜ', om: 'Yeroo Akeekkachiisaa', ti: 'ግዜ ኣቐዲሙ መጠንቀቕታ' },
  'Prevented Water Outages': { en: 'Prevented Water Outages', am: 'የዳኑ የውሃ መቆራረጦች', om: 'Citiinsa Bishaan Hafe', ti: 'ዝተኸላኸለ ምቁራጽ ማይ' },
  'Safe Deliveries Supported': { en: 'Safe Deliveries Supported', am: 'የተደገፉ ሰላማዊ ወሊዶች', om: 'Da’umsa Nagaa', ti: 'ውሑስ ሕርሲ ዝተደገፈ' },
  'Maternal Mortality in Facility': { en: 'Maternal Mortality in Facility', am: 'በማዕከሉ የእናቶች ሞት', om: 'Du’a Haadholii', ti: 'ሞት ኣዴታት ኣብ ማእከል' },
  'Institutional Birth Rate': { en: 'Institutional Birth Rate', am: 'በጤና ተቋም የወለዱ', om: 'Da’umsa Kiliniikaa', ti: 'ኣብ ትካል ጥዕና ምውላድ' }
};

const TAG_MAP: Record<string, Record<Language, string>> = {
  'Solar Energy': { en: 'Solar Energy', am: 'የሶላር ኃይል', om: 'Anniisaa Aduu', ti: 'ጸሓያዊ ጸዓት' },
  'Somali Region': { en: 'Somali Region', am: 'ሶማሌ ክልል', om: 'Naannoo Somaalee', ti: 'ክልል ሶማሌ' },
  'WASH': { en: 'WASH', am: 'WASH', om: 'WASH', ti: 'WASH' },
  'Climate Adaptation': { en: 'Climate Adaptation', am: 'የአየር ንብረት', om: 'Qilleensaaf Mijaawaa', ti: 'ምጽዋር ክሊማ' },
  'Girls Education': { en: 'Girls Education', am: 'የሴቶች ትምህርት', om: 'Barnoota Shamarranii', ti: 'ትምህርቲ ኣዋልድ' },
  'Oromia': { en: 'Oromia', am: 'ኦሮሚያ', om: 'Oromiyaa', ti: 'ኦሮሚያ' },
  'STEM': { en: 'STEM', am: 'STEM', om: 'STEM', ti: 'STEM' },
  'Child Protection': { en: 'Child Protection', am: 'የህጻናት ጥበቃ', om: 'Eegumsa Daa’immanii', ti: 'ሓለዋ ህጻናት' },
  'Food Security': { en: 'Food Security', am: 'የምግብ ዋስትና', om: 'Wabii Nyaataa', ti: 'ውሕስነት መግቢ' },
  'Sidama': { en: 'Sidama', am: 'ሲዳማ', om: 'Sidaamaa', ti: 'ሲዳማ' },
  'Micro-Irrigation': { en: 'Micro-Irrigation', am: 'አነስተኛ መስኖ', om: 'Jallisii Xiqqaa', ti: 'ንኡስ መስኖ' },
  'Resilience': { en: 'Resilience', am: 'ጽናት', om: 'Dandamachuu', ti: 'ጽንዓት' },
  'Emergency Health': { en: 'Emergency Health', am: 'አስቸኳይ ጤና', om: 'Fayyaa Balaa', ti: 'ህጹጽ ጥዕና' },
  'Afar': { en: 'Afar', am: 'አፋር', om: 'Affaar', ti: 'ዓፋር' },
  'Nutrition': { en: 'Nutrition', am: 'ስነ-ምግብ', om: 'Nyaata Madaalawaa', ti: 'ኣመጋግባ' },
  'Mobile Clinics': { en: 'Mobile Clinics', am: 'ተንቀሳቃሽ ክሊኒክ', om: 'Kiliniika Sochoo’aa', ti: 'ተንቀሳቃሲ ክሊኒክ' },
  'Women Empowerment': { en: 'Women Empowerment', am: 'የሴቶች ማብቃት', om: 'Humna Dubartootaa', ti: 'ምብቃዕ ኣንስቲ' },
  'Amhara': { en: 'Amhara', am: 'አማራ', om: 'Amaaraa', ti: 'ኣምሓራ' },
  'VSLA': { en: 'VSLA', am: 'VSLA', om: 'VSLA', ti: 'VSLA' },
  'Micro-Finance': { en: 'Micro-Finance', am: 'ማይክሮ ፋይናንስ', om: 'Faayinaansii', ti: 'ማይክሮ ፋይናንስ' },
  'Afar Region': { en: 'Afar Region', am: 'አፋር ክልል', om: 'Naannoo Affaar', ti: 'ክልል ዓፋር' },
  'Health & Nutrition': { en: 'Health & Nutrition', am: 'ጤና እና ስነ-ምግብ', om: 'Fayyaa fi Nyaata', ti: 'ጥዕናን ኣመጋግባን' },
  'CTC': { en: 'CTC', am: 'CTC', om: 'CTC', ti: 'CTC' },
  'Emergency Outreach': { en: 'Emergency Outreach', am: 'አስቸኳይ ድጋፍ', om: 'Deeggarsa Balaa', ti: 'ህጹጽ ረድኤት' },
  'Benishangul': { en: 'Benishangul', am: 'ቤኒሻንጉል', om: 'Beenishaangul', ti: 'ቤኒሻንጉል' },
  'Beekeeping': { en: 'Beekeeping', am: 'ንብ ማነብ', om: 'Horsiisa Kanniisaa', ti: 'ምርባሕ ንህቢ' },
  'Livelihoods': { en: 'Livelihoods', am: 'ኑሮ ማሻሻል', om: 'Jireenya', ti: 'መነባብሮ' },
  'Agroforestry': { en: 'Agroforestry', am: 'የደን ግብርና', om: 'Qonna Bosonaa', ti: 'ሕርሻን ዱርን' },
  'Sidama Region': { en: 'Sidama Region', am: 'ሲዳማ ክልል', om: 'Sidaamaa', ti: 'ክልል ሲዳማ' },
  'Education': { en: 'Education', am: 'ትምህርት', om: 'Barnoota', ti: 'ትምህርቲ' },
  'Gender Equity': { en: 'Gender Equity', am: 'የስርዓተ-ፆታ እኩልነት', om: 'Walqixxummaa', ti: 'ማዕርነት ጾታ' },
  'AI for Good': { en: 'AI for Good', am: 'AI ለበጎ', om: 'AI Gaariif', ti: 'AI ንሰናይ' },
  'Early Warning': { en: 'Early Warning', am: 'ቅድመ ማስጠንቀቂያ', om: 'Akeekkachiisa', ti: 'ኣቐዲሙ መጠንቀቕታ' },
  'GIS Innovation': { en: 'GIS Innovation', am: 'የGIS ፈጠራ', om: 'Kalaqa GIS', ti: 'ምህዞ GIS' },
  'South Ethiopia': { en: 'South Ethiopia', am: 'ደቡብ ኢትዮጵያ', om: 'Itoophiyaa Kibbaa', ti: 'ደቡብ ኢትዮጵያ' },
  'Health': { en: 'Health', am: 'ጤና', om: 'Fayyaa', ti: 'ጥዕና' },
  'Maternal Survival': { en: 'Maternal Survival', am: 'የእናቶች ህይወት', om: 'Lubbuu Haadholii', ti: 'ድሕነት ኣዴታት' }
};

export function getLocalizedBlogCategory(category: string, lang: Language): string {
  return BLOG_CATEGORY_MAP[category]?.[lang] ?? category;
}

export function getLocalizedBlog(blog: BlogItem, lang: Language) {
  const title =
    lang === 'am' ? blog.titleAm :
    lang === 'om' ? (blog.titleOm || blog.title) :
    lang === 'ti' ? (blog.titleTi || blog.title) :
    blog.title;

  const category =
    lang === 'am' ? blog.categoryAm :
    lang === 'om' ? (blog.categoryOm || blog.category) :
    lang === 'ti' ? (blog.categoryTi || blog.category) :
    blog.category;

  const authorRole =
    lang === 'am' ? blog.author.roleAm :
    lang === 'om' ? (blog.author.roleOm || blog.author.role) :
    lang === 'ti' ? (blog.author.roleTi || blog.author.role) :
    blog.author.role;

  const summary =
    lang === 'am' ? blog.summaryAm :
    lang === 'om' ? (blog.summaryOm || blog.summary) :
    lang === 'ti' ? (blog.summaryTi || blog.summary) :
    blog.summary;

  const content =
    lang === 'am' ? blog.contentAm :
    lang === 'om' ? (blog.contentOm || blog.content) :
    lang === 'ti' ? (blog.contentTi || blog.content) :
    blog.content;

  const quoteText = blog.quote
    ? lang === 'am'
      ? blog.quote.textAm
      : lang === 'om'
      ? (blog.quote.textOm || blog.quote.text)
      : lang === 'ti'
      ? (blog.quote.textTi || blog.quote.text)
      : blog.quote.text
    : '';

  const readTime = READ_TIME_MAP[blog.readTime]?.[lang] ?? blog.readTime;
  const date = DATE_MAP[blog.date]?.[lang] ?? blog.date;
  const metrics = blog.metrics.map((m) => ({
    label: METRIC_LABEL_MAP[m.label]?.[lang] ?? m.label,
    value: m.value
  }));
  const tags = blog.tags.map((t) => TAG_MAP[t]?.[lang] ?? t);

  return {
    title,
    category,
    authorRole,
    summary,
    content,
    quoteText,
    readTime,
    date,
    metrics,
    tags
  };
}
