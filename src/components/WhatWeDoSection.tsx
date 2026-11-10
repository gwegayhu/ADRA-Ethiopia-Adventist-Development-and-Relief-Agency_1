import React, { useState, useEffect } from 'react';
import { 
  LifeBuoy, 
  Wheat, 
  Droplets, 
  HeartPulse, 
  GraduationCap, 
  TrendingUp, 
  ArrowUpRight, 
  X, 
  CheckCircle, 
  Heart, 
  Compass,
  MapPin,
  Users,
  Award,
  Sparkles,
  Quote,
  ShieldCheck,
  Building,
  Leaf,
  Sun
} from 'lucide-react';
import { Language } from '../types';

interface WhatWeDoSectionProps {
  currentLang: Language;
  onOpenDonate: (presetSector?: string) => void;
}

export interface AreaItem {
  id: string;
  icon: React.ReactNode;
  tagline: string;
  taglineAm: string;
  title: string;
  titleAm: string;
  description: string;
  descriptionAm: string;
  fullNarrative: string;
  fullNarrativeAm: string;
  image: string;
  secondaryImage?: string;
  metrics: string;
  stats: { value: string; label: string; labelAm: string }[];
  details: string[];
  spotlightStory?: {
    quote: string;
    quoteAm: string;
    author: string;
    location: string;
  };
  activeWoredas: string;
  partners: string[];
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ currentLang, onOpenDonate }) => {
  const [selectedArea, setSelectedArea] = useState<AreaItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalTab, setModalTab] = useState<'overview' | 'impact' | 'story'>('overview');

  const areas: AreaItem[] = [
    {
      id: 'education',
      icon: <GraduationCap className="w-5 h-5 text-[#007B5F]" />,
      tagline: 'SEAQE II, Inclusive Schools & Green Energy TVET',
      taglineAm: 'ፍትሃዊና አካታች ጥራት ያለው ትምህርት እና የሙያ ስልጠና',
      title: 'Education & Green Energy TVET',
      titleAm: 'ትምህርት እና ታዳሽ ኃይል ቴክኒክና ሙያ',
      description: 'Inclusive access to quality schooling, complete secondary/preparatory school construction, solar PV training, and national curriculum handover with the Ministry of Water & Energy.',
      descriptionAm: 'ለሁሉም ተደራሽ የሆነ ጥራት ያለው ትምህርት፣ የትምህርት ቤት ግንባታ፣ የሶላር ቴክኖሎጂ ስልጠና እና ከውሃና ኢነርጂ ሚኒስቴር ጋር የተደረገ የካሪኩለም ርክክብ።',
      fullNarrative: 'Through ADRA Ethiopia’s flagship SEAQE II (Strengthening Equity, Access and Quality in Education) initiative and vocational programs, we construct complete secondary and preparatory schools, expand classroom blocks, supply braille and sign learning aids, and construct private dignity washrooms. In renewable energy TVET, we pioneer solar PV technician qualifications and handed over accredited green energy curricula in formal collaboration with the Ministry of Water & Energy (MoWE).',
      fullNarrativeAm: 'አድራ ኢትዮጵያ በSEAQE II ፕሮጀክት እና በቴክኒክና ሙያ ዘርፍ ሙሉ ሁለተኛና መሰናዶ ትምህርት ቤቶችን ይገነባል፤ ለሴት ተማሪዎች የክብር መጠበቂያዎችን ያቀርባል፤ ከውሃና ኢነርጂ ሚኒስቴር ጋር በመተባበር የፀሐይ ኃይል ቴክኖሎጂ ስልጠና ካሪኩለምን በማዘጋጀት አስረክቧል።',
      image: '/assets/images/adra_education_girls_1792612496863.jpg',
      secondaryImage: '/assets/images/adra_hero_community_1792612495148.jpg',
      metrics: '85,000+ students & TVET trainees enrolled',
      stats: [
        { value: '85,000+', label: 'Students & Trainees Supported', labelAm: 'ተማሪዎችና ሰልጣኞች ተጠቃሚ ሆነዋል' },
        { value: '182', label: 'Classrooms & Labs Constructed', labelAm: 'የመማሪያ ክፍሎችና ላቦራቶሪዎች' },
        { value: '2 Complete', label: 'Full Secondary/Prep Schools Built', labelAm: 'ሙሉ ትምህርት ቤቶች (ነገሌ አርሲ እና አዳሚ ቱሉ)' },
        { value: 'MoWE', label: 'Curriculum Handover Partner', labelAm: 'ከውሃና ኢነርጂ ሚኒስቴር ጋር አጋርነት' }
      ],
      details: [
        'SEAQE II: 1 Complete Preparatory School (Negelle Arsi) and 1 Complete Secondary School (Adami Tulu Jido Kombolcha - ATJK)',
        'Classroom expansion blocks constructed across Modjo, Bora, Meki, and Bulbula towns in Oromia',
        'Accredited Solar PV Technician curriculum developed and officially handed over to the Ministry of Water & Energy (MoWE)',
        'Vocational Qualification & Employment Perspectives (VQEP) in Dire Dawa, Afar Zone 3, Arba Minch, and Wolkite',
        'Gender-responsive classrooms and adolescent menstrual hygiene facilities ensuring girls retention through graduation',
        'Braille textbooks, wheelchair access ramps, and inclusive teacher training in 32 cluster schools'
      ],
      spotlightStory: {
        quote: 'Before ADRA built the complete secondary school in our woreda, children had to walk miles or discontinue schooling after grade 8. Today we have science laboratories, solar power, and girls are excelling in national examinations.',
        quoteAm: 'አድራ በወረዳችን ሙሉ ሁለተኛ ደረጃ ትምህርት ቤት ከመገንባቱ በፊት ልጆች ረጅም ርቀት ይጓዙ ነበር። ዛሬ ግን ዘመናዊ የሳይንስ ላቦራቶሪና የሶላር መብራት አግኝተን ልጆቻችን በብቃት እየተማሩ ነው።',
        author: 'Dibaba, Parent-Teacher Association Chair',
        location: 'Adami Tulu Jido Kombolcha (ATJK), Oromia'
      },
      activeWoredas: 'Negelle Arsi, ATJK, Modjo, Bora, Meki, Bulbula, Dire Dawa, Wolkite',
      partners: ['Ministry of Water & Energy', 'Ministry of Education', 'NORAD', 'ADRA Norway', 'GIZ']
    },
    {
      id: 'health',
      icon: <HeartPulse className="w-5 h-5 text-[#007B5F]" />,
      tagline: 'CMAM, TSFP, Maternal Care & Yirgalem Medical College',
      taglineAm: 'የማህበረሰብ ጤና፣ ስነ-ምግብ፣ የእናቶች ክብካቤ እና የይርጋለም ሜዲካል ኮሌጅ ድጋፍ',
      title: 'Health & Nutrition',
      titleAm: 'ጤና እና ስነ-ምግብ',
      description: 'Life-saving CMAM/TSFP malnutrition treatment, pregnant goat transfers for child protein, HIV/AIDS & family planning, and landmark support to Yirgalem Medical College (65-seater bus & microbiology lab).',
      descriptionAm: 'የተመጣጠነ ምግብ እጥረት ህክምና (CMAM/TSFP)፣ ለእናቶች የሚደረግ የእርጉዝ ፍየሎች ድጋፍ፣ እና ለይርጋለም ሜዲካል ኮሌጅ የተበረከተ የ65 መቀመጫ አውቶቡስና የላቦራቶሪ እቃዎች።',
      fullNarrative: 'ADRA Ethiopia leads community-based public health interventions across pastoralist and conflict-affected zones. We deploy Community-based Management of Acute Malnutrition (CMAM) and Targeted Supplementary Feeding Programs (TSFP), supply Ready-to-Use Therapeutic Food (RUTF), and distribute pregnant goats to vulnerable and lactating mothers for household dairy protein. In institutional health strengthening, ADRA equipped Yirgalem Medical College with a 65-seater student clinical transport bus and advanced microbiology laboratory apparatus.',
      fullNarrativeAm: 'አድራ ኢትዮጵያ በCMAM እና TSFP አማካኝነት አጣዳፊ የተመጣጠነ ምግብ እጥረትን ያክማል፤ ለሚያጠቡ እናቶች እርጉዝ ፍየሎችን በማከፋፈል የልጆችን የወተትና ፕሮቲን ፍላጎት ያሟላል። በጤና ተቋማት ግንባታ ዘርፍ ለይርጋለም ሜዲካል ኮሌጅ የ65 መቀመጫ አውቶቡስ እና ዘመናዊ የማይክሮባዮሎጂ ላቦራቶሪ እቃዎችን አስረክቧል።',
      image: '/assets/images/adra_emergency_health_1792612497133.jpg',
      secondaryImage: '/assets/images/humanitarian_tech_dignity_1792616605305.jpg',
      metrics: '310,000+ mothers, infants & students supported',
      stats: [
        { value: '310,000+', label: 'Mothers & Children Reached', labelAm: 'እናቶችና ህፃናት ተክበክበዋል' },
        { value: '65-Seater', label: 'Medical Bus Donated to Yirgalem', labelAm: 'ለይርጋለም ሜዲካል ኮሌጅ የተሰጠ አውቶቡስ' },
        { value: '94.2%', label: 'CMAM Recovery Rate', labelAm: 'የCMAM የማዳን ምጣኔ' },
        { value: '1,500+', label: 'Pregnant Goats Distributed', labelAm: 'የተከፋፈሉ እርጉዝ ፍየሎች' }
      ],
      details: [
        'Community-based Management of Acute Malnutrition (CMAM) and Targeted Supplementary Feeding Programs (TSFP) for SAM and MAM cases',
        'Distribution of certified healthy pregnant goats to lactating and vulnerable mothers for family milk, nutrition, and asset building',
        'Comprehensive institutional donation to Yirgalem Medical College: 65-seater clinical outreach bus and high-precision microbiology laboratory equipment',
        'Maternal & Child Health (MCH), antenatal/postnatal care, and family planning counseling across pastoral kebeles',
        'Integrated HIV/AIDS awareness, stigmatization reduction, voluntary testing, and psychosocial support (PSSEO in Tigray)'
      ],
      spotlightStory: {
        quote: 'The microbiology equipment and the 65-seater bus provided by ADRA enabled our medical students and faculty to conduct decentralized rural clinical rotations and diagnose infectious diseases in remote communities where diagnostic labs previously did not exist.',
        quoteAm: 'አድራ ለይርጋለም ሜዲካል ኮሌጅ የሰጠን የ65 መቀመጫ አውቶቡስና የላቦራቶሪ መሣሪያዎች ተማሪዎቻችን ወደ ገጠር በመሄድ ፈጣን ምርመራ እንዲያደርጉና ህይወት እንዲያድኑ ትልቅ አቅም ፈጥሮልናል።',
        author: 'Faculty Member & Clinical Director',
        location: 'Yirgalem Medical College, Sidama Region'
      },
      activeWoredas: 'Yirgalem, Adadle, Mekelle, Shire, Dollo Ado, Kelafo, Berhale',
      partners: ['Ministry of Health', 'Yirgalem Medical College', 'USAID / BHA', 'WFP', 'SDC']
    },
    {
      id: 'livelihood',
      icon: <Wheat className="w-5 h-5 text-[#007B5F]" />,
      tagline: 'PSNP Synergy, Beekeeping, Poultry & Agri-Tech',
      taglineAm: 'የሴፍቲኔት (PSNP) ማሟያ፣ ንብ ማነብ፣ የዶሮ እርባታ እና ዘመናዊ ግብርና',
      title: 'Food Security & Livelihoods',
      titleAm: 'የምግብ ዋስትና እና ኑሮ ማሻሻል',
      description: 'Strengthening community resilience through PSNP complementary activities, demonstration plots, modern beekeeping, poultry, and funding from Spain, USA, Germany, and Denmark.',
      descriptionAm: 'የምርታማ ሴፍቲኔት (PSNP) ማሟያ ስራዎች፣ የማሳያ ማሳዎች፣ ዘመናዊ ንብ ማነብ፣ የዶሮ እርባታ እና ከአድራ ስፔን፣ አሜሪካ፣ ጀርመን እና ዴንማርክ የተገኘ የገንዘብ ድጋፍ።',
      fullNarrative: 'To break cycles of chronic drought and dependency, ADRA Ethiopia aligns with the national Productive Safety Net Program (PSNP). We establish hands-on agricultural demonstration plots, distribute modern transitional beehives for apiculture, provide commercial poultry starter kits, and install solar-powered river-lift pumps. These initiatives are co-financed by long-standing bilateral partnerships with ADRA Spain, ADRA USA, ADRA Germany, and ADRA Denmark.',
      fullNarrativeAm: 'አድራ ኢትዮጵያ ከብሔራዊ የሴፍቲኔት ፕሮግራም (PSNP) ጋር በመቀናጀት የአርሶ አደሩን ኑሮ ይለውጣል። ዘመናዊ የንብ ቀፎዎችን፣ የዶሮ እርባታ ፓኬጆችንና የማሳያ እርሻዎችን ያቋቁማል። ይህ ስራ በአድራ ስፔን፣ አድራ አሜሪካ፣ አድራ ጀርመንና አድራ ዴንማርክ ድጋፍ የሚከናወን ነው።',
      image: '/assets/images/adra_agriculture_food_1792612497905.jpg',
      secondaryImage: '/assets/images/hero_ethiopia_market_1792616573603.jpg',
      metrics: '68,000+ farming & agro-pastoral households',
      stats: [
        { value: '68,000+', label: 'Households Reached', labelAm: 'የተደገፉ አባወራዎች' },
        { value: '4 Donors', label: 'Spain, USA, Germany & Denmark Funds', labelAm: 'አድራ ስፔን፣ አሜሪካ፣ ጀርመንና ዴንማርክ' },
        { value: '450+', label: 'Modern Apiary & Poultry Units', labelAm: 'የንብ ማነብና የዶሮ ክፍሎች' },
        { value: '1,200+', label: 'Hectares Irrigated by Solar', labelAm: 'በሶላር የለማ መሬት (ሄክታር)' }
      ],
      details: [
        'Complementary livelihood graduation programs aligned with Ethiopia’s Productive Safety Net Program (PSNP)',
        'Agricultural demonstration plots showcasing climate-resilient teff, sorghum, and rust-resistant wheat varieties',
        'Modern beekeeping (apiculture) training and transitional Kenyan top-bar and Langstroth hive distributions',
        'Poultry production starter packages (vaccinated pullets, dual-purpose breeds, feed, and housing) for women heads of household',
        'Bilateral project co-financing and technical alignment with ADRA Spain, ADRA USA, ADRA Germany, and ADRA Denmark',
        'Village Savings and Loan Associations (VSLA) providing zero-interest community revolving micro-finance'
      ],
      spotlightStory: {
        quote: 'With the modern beehives and training received through the ADRA Spain & Germany supported project, our women’s cooperative harvested pure white acacia honey. We earned enough to pay school fees, buy oxen, and invest in our children’s future.',
        quoteAm: 'በአድራ ስፔን እና ጀርመን ድጋፍ በተሰጠን ዘመናዊ የንብ ቀፎ ንጹህ ማር አምርተን ለገበያ አቅርበናል። ባገኘነው ገቢ በሬ ገዝተን የልጆቻችንን የትምህርት ቤት ወጪ ሙሉ በሙሉ መሸፈን ችለናል።',
        author: 'Fatuma, Beekeeping Cooperative Leader',
        location: 'Somali Region'
      },
      activeWoredas: 'Mustahil, Fer-Fer, Higloley, Shebelle Zone, Bule Hora, Efrata Gidim',
      partners: ['ADRA Spain', 'ADRA USA', 'ADRA Germany', 'ADRA Denmark', 'Ministry of Agriculture', 'FAO']
    },
    {
      id: 'disaster-response',
      icon: <LifeBuoy className="w-5 h-5 text-[#007B5F]" />,
      tagline: '72-Hour Rapid Contingency & Refugee Camp Assistance',
      taglineAm: 'የ72 ሰዓታት ፈጣን ምላሽ እና የስደተኞች ካምፕ ድጋፍ',
      title: 'Emergency Response & Preparedness',
      titleAm: 'የአደጋ ጊዜ ምላሽ እና ዝግጁነት',
      description: 'Rapid contingency deployment within 72 hours for floods and drought, Multi-Purpose Cash Assistance, and vital support to refugees in Kule Camp (Gambella) and Kelafo.',
      descriptionAm: 'በጎርፍ እና በድርቅ አደጋዎች ወቅት በ72 ሰዓታት ውስጥ የሚሰጥ ፈጣን ምላሽ፣ የሞባይል ገንዘብ ድጋፍ እና በኩሌ (ጋምቤላ) እና በኬላፎ ለሚገኙ ስደተኞችና ተፈናቃዮች የሚደረግ ድጋፍ።',
      fullNarrative: 'When severe natural disasters or civil conflicts disrupt vulnerable lives, ADRA Ethiopia deploys within 72 hours. We specialize in emergency water trucking, non-food item kits, emergency distance-learning radios, and digital cash transfers. We maintain field-proven presence in major humanitarian theatres, including comprehensive WASH and hygiene operations in Kule Refugee Camp (Gambella) for South Sudanese refugees and flood-drought relief in Kelafo (Somali Region).',
      fullNarrativeAm: 'አድራ ኢትዮጵያ በጎርፍና ድርቅ አደጋዎች ወቅት በ72 ሰዓታት ውስጥ ፈጣን የነፍስ አድን እርዳታ ያደርሳል። በጋምቤላ ክልል በኩሌ የስደተኞች ካምፕ ለደቡብ ሱዳን ስደተኞች እንዲሁም በሶማሌ ክልል በኬላፎ ወረዳ ለተጎዱ ወገኖች የንጹህ ውሃ፣ የመጠለያ እና የገንዘብ እርዳታ ያቀርባል።',
      image: '/assets/images/solar_water_desert_1792618997738.jpg',
      secondaryImage: '/assets/images/adra_hero_community_1792612495148.jpg',
      metrics: '550,000+ crisis-affected persons & refugees supported',
      stats: [
        { value: '550,000+', label: 'Crisis-Affected & Refugees Reached', labelAm: 'ተጎጂዎችና ስደተኞች ተደግፈዋል' },
        { value: '< 72 hrs', label: 'Emergency Deployment Protocol', labelAm: 'የፈጣን ምላሽ ሰዓት' },
        { value: '37,000', label: 'Refugees in Kule Camp Gambella', labelAm: 'በኩሌ ስደተኞች ካምፕ ተጠቃሚዎች' },
        { value: '48,000+', label: 'Mobile Cash Assistance Transfers', labelAm: 'የሞባይል ባንኪንግ እርዳታ' }
      ],
      details: [
        'Immediate mobilization within 72 hours of sudden-onset drought, flash flooding, or communal displacement',
        'Refugee support at Kule Camp (Gambella) providing water purification, VIP communal latrines, and hygiene kits for 37,000 South Sudanese refugees',
        'Flood and drought emergency response in Kelafo and Shebelle Zone with emergency water trucking and sanitation',
        'Multi-Purpose Cash Assistance (MPCA) delivered through TeleBirr and CBE Birr restoring household autonomy and dignity',
        'Distance-learning support for conflict-displaced students through solar-powered radio distribution in Tigray',
        'Close cluster coordination with Ethiopian Disaster Risk Management Commission (EDRMC) and UN-OCHA'
      ],
      spotlightStory: {
        quote: 'In Kule camp, clean running water and sanitary facilities provided by ADRA stopped disease outbreaks when thousands of new arrivals crossed the border. ADRA’s team was there day and night.',
        quoteAm: 'በኩሌ ስደተኞች ካምፕ አድራ የዘረጋው የንጹህ ውሃ መስመር እና የንፅህና መጠበቂያዎች ድንበር ተሻግረው የመጡ ወገኖቻችን ከተላላፊ በሽታዎች እንዲጠበቁ አድርጓል።',
        author: 'Refugee Community Committee Elder',
        location: 'Kule Refugee Camp, Gambella'
      },
      activeWoredas: 'Kule Camp (Gambella), Kelafo, Mustahil, Adadle, Mekelle, Shire, Ada’ar',
      partners: ['EDRMC Ethiopia', 'UN-OCHA / EHF', 'UNHCR', 'USAID / BHA', 'ADRA International']
    },
    {
      id: 'wash',
      icon: <Droplets className="w-5 h-5 text-[#007B5F]" />,
      tagline: '20+ Years Expertise, Deep Solar Boreholes & WASHCos',
      taglineAm: 'ከ20 ዓመታት በላይ የካበተ ልምድ፣ ጥልቅ የሶላር ቦርሆሎች እና የWASHCo ኮሚቴዎች',
      title: 'Water, Sanitation & Hygiene (WASH)',
      titleAm: 'ውሃ፣ ንፅህናና ሳኒቴሽን (WASH)',
      description: 'Over 20 years of sector-leading engineering: emergency water trucking, deep solar-powered boreholes, institutional VIP latrines, and gender-balanced WASHCos.',
      descriptionAm: 'ከ20 ዓመታት በላይ ልምድ፣ የአስቸኳይ ጊዜ ውሃ ማመላለስ (water trucking)፣ በሶላር የሚሰሩ ጥልቅ የውሃ ጉድጓዶች፣ የላትሪን ግንባታ እና በሴቶች የሚመሩ የውሃ ኮሚቴዎች።',
      fullNarrative: 'With more than 20 years of continuous water and sanitation engineering across the most arid zones of Ethiopia, ADRA Ethiopia transforms fragile communities. We drill and solarize deep boreholes up to 200 meters, replace carbon-heavy diesel generators with solar arrays, execute rapid emergency water trucking during life-threatening droughts, build ventilated improved pit (VIP) latrines in schools and health posts, and train Community Water Management Committees (WASHCos) with mandatory 50%+ female leadership.',
      fullNarrativeAm: 'አድራ ኢትዮጵያ በውሃና ሳኒቴሽን ዘርፍ ከ20 ዓመታት በላይ በሰራው ስራ በድርቅ የተጠቁ አካባቢዎችን ለውጧል። እስከ 200 ሜትር ጥልቅ የሆኑ ጉድጓዶችን በመቆፈር በፀሐይ ኃይል እንዲሰሩ ያደርጋል፤ በድርቅ ጊዜ በቦቴ ውሃ ያደርሳል፤ የላትሪን ግንባታዎችን ያከናውናል እንዲሁም 50% ሴቶች የሚመሩትን የውሃ ኮሚቴዎች (WASHCos) ያሰለጥናል።',
      image: '/assets/images/adra_wash_water_1792612496655.jpg',
      metrics: '420,000+ people gained clean water · 20+ Yrs Track Record',
      stats: [
        { value: '20+ Yrs', label: 'Technical Water Engineering Experience', labelAm: 'የካበተ የውሃ ምህንድስና ልምድ' },
        { value: '420,000+', label: 'Citizens with Potable Water Access', labelAm: 'ንጹህ ውሃ ያገኙ ዜጎች' },
        { value: '288+', label: 'Solar Wells & Water Points Built', labelAm: 'የተገነቡ የሶላር የውሃ ጣቢያዎች' },
        { value: '50%+', label: 'Women in WASHCo Leadership', labelAm: 'የሴቶች አመራር በWASHCo' }
      ],
      details: [
        'Over 20 years of continuous groundwater engineering, geo-physical surveys, and deep borehole drilling across Ethiopia',
        'Rapid emergency water trucking operations providing millions of liters during acute droughts in Somali and Afar',
        'Replacement of polluting, high-maintenance diesel generator pumps with turnkey zero-emission solar pumping stations',
        'Construction of ventilated improved pit (VIP) institutional latrines and handwashing kiosks at schools and health centers',
        'Community Water, Sanitation and Hygiene Committees (WASHCos) trained in spare-parts management and tariff collection with 50%+ female leadership',
        'Rehabilitation of conflict-damaged municipal and rural water supply schemes in North Wollo, Tigray, and Afar'
      ],
      spotlightStory: {
        quote: 'Before ADRA drilled our 180-meter solar borehole, women walked 6 hours every day to fetch turbid river water. Today clean water flows right in our village square with zero fuel costs. Our daughters now attend school every single day.',
        quoteAm: 'አድራ በፀሐይ ኃይል የሚሰራውን የ180 ሜትር ጥልቅ የውሃ ጉድጓድ ከመቆፈሩ በፊት ሴቶች ለ6 ሰዓታት በእግር ተጉዘው የተበከለ ውሃ ይቀዱ ነበር። አሁን ንጹህ ውሃ መንደራችን ደርሷል፤ ሴት ልጆቻችንም በየቀኑ ትምህርት ቤት ይሄዳሉ።',
        author: 'Amina, WASHCo Chairwoman',
        location: 'Shebelle Zone, Somali Region'
      },
      activeWoredas: 'Adadle, Gode, Mustahil, Kelafo, North Wollo, Ada’ar, Chinaksen, Kule',
      partners: ['Charity: Water', 'ADRA Austria', 'Regional Water Bureaus', 'UNICEF']
    },
    {
      id: 'economic-growth',
      icon: <TrendingUp className="w-5 h-5 text-[#007B5F]" />,
      tagline: 'Green Energy TVET Hub & Renewable Micro-Enterprises',
      taglineAm: 'የታዳሽ ኃይል ቴክኒክና ሙያ ማዕከል እና የሶላር ኢንተርፕራይዞች',
      title: 'Renewable Energy & Economic Growth',
      titleAm: 'ታዳሽ ኃይል እና ኢኮኖሚ እድገት',
      description: 'Accredited Level I–IV solar certifications, technical curriculum transfer with the Ministry of Water & Energy, and green youth entrepreneurship.',
      descriptionAm: 'ከደረጃ I እስከ IV የታዳሽ ኃይል ሙያ ሰርተፍኬት፣ ከውሃና ኢነርጂ ሚኒስቴር ጋር የተደረገ የካሪኩለም ዝውውር እና የወጣቶች የስራ እድል ፈጠራ።',
      fullNarrative: 'At the National Green Energy TVET Coordination Hub in Kirkos, Addis Ababa, and regional vocational centers, ADRA equips unemployed youth and women with accredited Level I–IV certifications in solar photovoltaic installation, pumping mechanics, and maintenance. Developed in conjunction with the Ministry of Water & Energy and Ministry of Labor & Skills, the program supplies youth graduates with startup toolkits and seed capital to launch independent green repair businesses.',
      fullNarrativeAm: 'በአዲስ አበባ ቂርቆስ በሚገኘው የታዳሽ ኃይል ቴክኒክና ሙያ ማዕከል ወጣቶችን እና ሴቶችን በሶላር ቴክኖሎጂ ተከላና ጥገና ከደረጃ I እስከ IV በማሰልጠን የስራ እድል እንፈጥራለን። ሰልጣኞች ከመንግስት እውቅና ያለው ሰርተፍኬት እና የመነሻ መሣሪያዎችን ያገኛሉ።',
      image: '/assets/images/adra_hero_community_1792612495148.jpg',
      metrics: '4,500+ youth certified in renewable energy',
      stats: [
        { value: '4,500+', label: 'Youth Certified in Solar Tech', labelAm: 'በሶላር የሰለጠኑ ወጣቶች' },
        { value: 'Level I-IV', label: 'National TVET Accreditation', labelAm: 'ብሔራዊ የሙያ ደረጃ' },
        { value: '68%', label: 'Certified Job Placement Rate', labelAm: 'የስራ ቅጥር ምጣኔ' },
        { value: '120+', label: 'Solar Maintenance Enterprises', labelAm: 'የተቋቋሙ የሶላር ድርጅቶች' }
      ],
      details: [
        'National Green Energy TVET II Coordination Hub operational in Kirkos Sub-City, Addis Ababa',
        'Official TVET curriculum developed and handed over in collaboration with the Ministry of Water & Energy (MoWE)',
        'Comprehensive practical training in solar PV sizing, inverter configuration, and deep well submersible solar pumping',
        'Accreditation pathways for women technicians to overcome gender stereotyping in electrical and mechanical trades',
        'Provision of professional toolkits and seed enterprise matching funds for youth-owned cooperatives'
      ],
      spotlightStory: {
        quote: 'Completing the Level III solar qualification changed my trajectory. Today, our 4-person youth cooperative maintains and repairs solar water pumps across 12 rural kebeles, earning sustainable livelihoods while keeping water flowing for thousands.',
        quoteAm: 'የደረጃ III የሶላር ሙያ ሰርተፍኬት ማግኘቴ ህይወቴን ቀይሮታል። ዛሬ በአራት ወጣቶች የተቋቋመው ማህበራችን በ12 የገጠር ቀበሌዎች የሶላር ፓምፖችን በመጠገን ጥሩ ገቢ እያገኘ ህዝቡንም እያገለገለ ይገኛል።',
        author: 'Ephrem, Certified Solar Energy Technician',
        location: 'Addis Ababa / Wolkite Hub'
      },
      activeWoredas: 'Kirkos (Addis Ababa), Dire Dawa, Afar Zone 3, Arba Minch, Wolkite',
      partners: ['Ministry of Water & Energy', 'Ministry of Labor and Skills', 'ADRA Germany', 'GIZ']
    }
  ];

  // Listen for navigation triggers to open specific program directly
  useEffect(() => {
    const handleOpenAreaEvent = (e: CustomEvent) => {
      const areaId = e.detail;
      const target = areas.find((a) => a.id === areaId);
      if (target) {
        setSelectedArea(target);
        document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    window.addEventListener('adra-open-area' as any, handleOpenAreaEvent);
    return () => window.removeEventListener('adra-open-area' as any, handleOpenAreaEvent);
  }, [areas]);

  const filteredAreas = activeFilter === 'all' 
    ? areas 
    : areas.filter(a => a.id === activeFilter);

  return (
    <section id="what-we-do" className="border-b border-stone-200 scroll-mt-20">
      
      {/* Top Emerald Banner */}
      <div className="bg-[#004D3A] text-white py-16 sm:py-20 relative overflow-hidden text-left">
        {/* Background photo overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/adra_hero_community_1792612495148.jpg"
            alt="What We Do"
            className="w-full h-full object-cover object-center opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004D3A] via-[#004D3A]/90 to-[#004D3A]/75" />
          
          {/* Certified photo credit per Section 5 */}
          <div className="absolute bottom-2 right-4 text-[9px] font-sans text-white/70 select-none">
            Photo: © 2026 ADRA | ADRA Ethiopia
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs text-stone-300 font-sans flex items-center gap-2">
            <span>Home</span>
            <span>&gt;</span>
            <span className="text-white font-semibold">{currentLang === 'am' ? 'ምን እንሰራለን' : 'What We Do'}</span>
            <span>·</span>
            <span className="font-motto text-sm text-emerald-200">Justice. Compassion. Love.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
            <span className="text-xs font-bold tracking-widest text-[#f59e0b] uppercase font-sans">
              CORE DEVELOPMENT &amp; RELIEF · WHAT WE DO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-sans leading-tight text-white max-w-3xl">
            {currentLang === 'en' 
              ? 'Serving Humanity so All May Live as God Intended' 
              : currentLang === 'am' 
              ? 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር የሰውን ልጅ በቅንነት ማገልገል' 
              : 'Namni hundi akkuma Waaqayyo itti yaade akka jiraatuuf namooma tajaajiluu'}
          </h2>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl leading-relaxed font-serif">
            {currentLang === 'en'
              ? 'Delivering individual and community well-being across education, healthcare, and sustainable livelihoods, backed by rapid emergency relief.'
              : currentLang === 'am'
              ? 'በትምህርት፣ በጤና፣ በዘላቂ ኑሮ እና በአደጋ ምላሽ ዘርፎች ከአካባቢው ማህበረሰቦች ጋር በመሆን ዘላቂ ጥንካሬንና ክብርን መገንባት።'
              : "Barnoota, fayyaa, qonna ammayyaa fi qophii balaa keessatti hawaasa waliin hojjechuun bu'aa qabatamaa galmeessisuu."}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#focus-areas-grid"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('focus-areas-grid')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-full shadow-xs cursor-pointer transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>{currentLang === 'en' ? 'Explore Core Programs' : 'ዋና ፕሮግራሞቻችንን ይመልከቱ'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Focus Areas Content */}
      <div id="focus-areas-grid" className="py-16 sm:py-20 bg-[#f4f7f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Filter Pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="text-xs font-bold tracking-widest text-[#007B5F] uppercase mb-2">
                CORE HUMANITARIAN &amp; DEVELOPMENT PILLARS
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 tracking-tight font-editorial leading-tight">
                {currentLang === 'en' 
                  ? 'Six Technical Pillars, One Commitment to Dignity' 
                  : 'ስድስት ቴክኒካዊ ምሰሶዎች፣ አንድ የክብር ቁርጠኝነት'}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {currentLang === 'en'
                  ? 'Explore our 42-year portfolio of life-saving interventions, verified engineering milestones, and independently audited impact metrics.'
                  : 'የ42 ዓመታት የነፍስ አድን ስራዎቻችንን፣ የተረጋገጡ የምህንድስና ስኬቶችን እና ኦዲት የተደረጉ መረጃዎችን የያዙ ሰነዶችን ይመልከቱ።'}
              </p>
            </div>

            {/* Program Quick Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: 'all', label: 'All Pillars', labelAm: 'ሁሉም' },
                { id: 'wash', label: 'WASH (20+ Yrs)', labelAm: 'ውሃና ሳኒቴሽን' },
                { id: 'health', label: 'Health & Nutrition', labelAm: 'ጤናና ስነ-ምግብ' },
                { id: 'livelihood', label: 'Livelihoods & Agri', labelAm: 'የኑሮ ማሻሻል' },
                { id: 'education', label: 'Education & TVET', labelAm: 'ትምህርትና ቴክኒክ' },
                { id: 'disaster-response', label: 'Disaster Relief', labelAm: 'የአደጋ ምላሽ' },
                { id: 'economic-growth', label: 'Renewable Energy', labelAm: 'ታዳሽ ኃይል' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#007B5F] text-white shadow-xs'
                      : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
                  }`}
                >
                  {currentLang === 'am' ? tab.labelAm : tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAreas.map((area) => (
              <div
                key={area.id}
                onClick={() => {
                  setModalTab('overview');
                  setSelectedArea(area);
                }}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-xs hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with circular icon badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating Circular Icon Badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs border border-stone-200">
                      {area.icon}
                    </div>

                    <div className="absolute bottom-3 left-3 bg-[#073826]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                      {currentLang === 'am' ? area.taglineAm : area.tagline}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-stone-900 font-editorial group-hover:text-[#007B5F] transition-colors flex items-center gap-1.5">
                        <span>{currentLang === 'en' ? area.title : area.titleAm}</span>
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-stone-400 group-hover:text-[#007B5F] transition-colors shrink-0" />
                    </div>

                    <p className="text-sm text-stone-700 leading-relaxed font-sans line-clamp-3">
                      {currentLang === 'en' ? area.description : area.descriptionAm}
                    </p>
                  </div>
                </div>

                {/* Bottom Proof Tag + Read Dossier CTA */}
                <div className="px-6 pb-5 pt-1 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div className="font-semibold text-[#007B5F] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate max-w-[190px]">{area.metrics}</span>
                  </div>
                  <span className="font-bold text-amber-600 group-hover:underline">Explore &rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-Cutting Themes Panel */}
          <div className="mt-16 bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-xs space-y-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007B5F] mb-2 font-sans">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>CROSS-CUTTING THEMES &amp; INSTITUTIONAL SAFEGUARDS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight font-editorial">
                {currentLang === 'en' 
                  ? 'Environmental Action & Gender Equity Embedded in Every Project' 
                  : 'በእያንዳንዱ ፕሮጀክት ውስጥ የተካተተ የአካባቢ ጥበቃ እና የስርዓተ-ፆታ እኩልነት'}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {currentLang === 'en'
                  ? 'All 15 active humanitarian and development projects adhere to strict institutional cross-cutting standards, ensuring ecological regeneration and women-led community governance.'
                  : 'ሁሉም የልማትና እርዳታ ስራዎቻችን የአካባቢ ጥበቃን፣ የተፈጥሮ ሀብት እንክብካቤን እና የሴቶችን አመራር ማረጋገጥን እንደ ቁልፍ መርህ ይከተላሉ።'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Theme 1: Environmental Awareness & Climate Action */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-stone-50 to-white border border-emerald-100/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-editorial">
                      {currentLang === 'en' ? 'Environmental Awareness & Climate Action' : 'የአካባቢ ጥበቃ እና የአየር ንብረት እርምጃ'}
                    </h4>
                    <div className="text-xs text-emerald-800 font-semibold">Ecological Regeneration & Clean Energy</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {currentLang === 'en'
                    ? 'ADRA combats land degradation and deforestation across fragile Ethiopian ecosystems through community-driven environmental practices:'
                    : 'አድራ የአፈር መሸርሸርንና የደን መመናመንን ለመከላከል ከህብረተሰቡ ጋር በመሆን ዘላቂ የአካባቢ ጥበቃ ስራዎችን ያከናውናል:'}
                </p>

                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Organic Composting:</strong> Training smallholder farmer cooperatives and school agriculture clubs in composting organic waste to restore depleted soils without synthetic chemicals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Energy-Efficient Stoves:</strong> Fabricating and distributing fuel-saving cooking stoves (Mirt / Tikikil) that cut household firewood consumption by over 60%, reducing indoor smoke hazards and deforestation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>Tree Planting & Watershed Conservation:</strong> Planting native acacia, moringa, and agro-forestry seedlings around community solar water points to protect water tables from erosion.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span><strong>100% Zero-Emission Solar Transition:</strong> Eliminating polluting diesel generators across 288+ deep community boreholes and river-lift irrigation networks.</span>
                  </li>
                </ul>
              </div>

              {/* Theme 2: Gender Mainstreaming & Disability Inclusion */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 via-stone-50 to-white border border-amber-100/90 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-editorial">
                      {currentLang === 'en' ? 'Gender Mainstreaming & Inclusion' : 'የስርዓተ-ፆታ እኩልነት እና አካታችነት'}
                    </h4>
                    <div className="text-xs text-amber-800 font-semibold">Women Leadership & Disability Access</div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                  {currentLang === 'en'
                    ? 'Transforming gender equity from policy to grassroots reality across all project governance and resource allocation:'
                    : 'በሁሉም የፕሮጀክት አመራርና ሀብት ድልድል ውስጥ የሴቶችን እኩል ተሳትፎና ውሳኔ ሰጪነት ማረጋገጥ:'}
                </p>

                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Mandatory 50%+ Female WASHCo Leadership:</strong> Women hold key positions as treasurers and maintenance coordinators on local water management boards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Targeted Female Asset Transfers:</strong> Distributing pregnant goats and commercial poultry kits specifically to single mothers and female-headed pastoral households.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Menstrual Dignity & Retention:</strong> Equipping 85+ schools with segregated latrines, water supply, and reusable hygiene materials to prevent adolescent girls from dropping out.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Disability Inclusion (TOFI):</strong> Incorporating wheelchair ramps, braille educational materials, and inclusive teaching aids in cluster schools and TVET hubs.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Rich Program Dossier Modal */}
      {selectedArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 space-y-6 max-h-[92vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-stone-200">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  {selectedArea.icon}
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider">
                    ADRA Ethiopia · Flagship Pillar
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-editorial mt-0.5">
                    {currentLang === 'en' ? selectedArea.title : selectedArea.titleAm}
                  </h3>
                  <div className="text-xs text-amber-600 font-semibold mt-0.5">
                    {currentLang === 'am' ? selectedArea.taglineAm : selectedArea.tagline}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="p-2 text-stone-400 hover:text-stone-700 rounded-lg hover:bg-stone-100 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Sub-Tabs */}
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <button
                type="button"
                onClick={() => setModalTab('overview')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  modalTab === 'overview'
                    ? 'bg-[#007B5F] text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                Overview &amp; Strategy
              </button>
              <button
                type="button"
                onClick={() => setModalTab('impact')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  modalTab === 'impact'
                    ? 'bg-[#007B5F] text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                Key Interventions &amp; Stats
              </button>
              {selectedArea.spotlightStory && (
                <button
                  type="button"
                  onClick={() => setModalTab('story')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    modalTab === 'story'
                      ? 'bg-[#007B5F] text-white'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  Eyewitness Testimony
                </button>
              )}
            </div>

            {/* Modal Body Tab 1: Overview */}
            {modalTab === 'overview' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                    <img
                      src={selectedArea.image}
                      alt={selectedArea.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {selectedArea.secondaryImage && (
                    <div className="aspect-[16/10] rounded-xl overflow-hidden bg-stone-100 border border-stone-200 hidden sm:block">
                      <img
                        src={selectedArea.secondaryImage}
                        alt={selectedArea.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Programmatic Narrative
                  </div>
                  <p className="text-stone-800 text-sm leading-relaxed font-sans">
                    {currentLang === 'am' ? selectedArea.fullNarrativeAm : selectedArea.fullNarrative}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {selectedArea.stats.map((s, idx) => (
                    <div key={idx} className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                      <div className="text-lg sm:text-xl font-bold text-[#007B5F] font-editorial">{s.value}</div>
                      <div className="text-[11px] text-stone-600 font-medium leading-tight mt-0.5">
                        {currentLang === 'am' ? s.labelAm : s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Body Tab 2: Key Interventions */}
            {modalTab === 'impact' && (
              <div className="space-y-5">
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Verified Strategic Interventions
                  </div>
                  <div className="space-y-2.5">
                    {selectedArea.details.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-stone-800">
                        <CheckCircle className="w-4 h-4 text-[#007B5F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 bg-emerald-50/60 rounded-xl border border-emerald-200/80">
                    <div className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#007B5F]" />
                      <span>Active Operating Woredas</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {selectedArea.activeWoredas}
                    </p>
                  </div>

                  <div className="p-3.5 bg-amber-50/60 rounded-xl border border-amber-200/80">
                    <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                      <Building className="w-3.5 h-3.5 text-amber-700" />
                      <span>Co-Executing Donors &amp; Partners</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {selectedArea.partners.join(' · ')}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Body Tab 3: Spotlight Story */}
            {modalTab === 'story' && selectedArea.spotlightStory && (
              <div className="space-y-5">
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={selectedArea.image}
                    alt="Beneficiary Story"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <div className="text-xs font-bold text-amber-300">{selectedArea.spotlightStory.location}</div>
                      <div className="text-sm font-semibold">{selectedArea.spotlightStory.author}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
                  <Quote className="w-6 h-6 text-[#007B5F] opacity-60" />
                  <p className="text-sm sm:text-base text-stone-800 italic leading-relaxed font-editorial">
                    "{currentLang === 'am' ? selectedArea.spotlightStory.quoteAm : selectedArea.spotlightStory.quote}"
                  </p>
                  <div className="text-xs font-bold text-[#007B5F] pt-1 border-t border-stone-200">
                    — {selectedArea.spotlightStory.author} · {selectedArea.spotlightStory.location}
                  </div>
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  const secId = selectedArea.id;
                  setSelectedArea(null);
                  onOpenDonate(secId);
                }}
                className="px-5 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-stone-950 font-bold text-xs sm:text-sm rounded-lg flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                <span>Support This Program via TeleBirr or CBE</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs sm:text-sm font-semibold rounded-lg cursor-pointer"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
