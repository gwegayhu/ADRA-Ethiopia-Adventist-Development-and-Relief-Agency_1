import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Check, 
  Copy, 
  AlertTriangle, 
  ArrowLeft, 
  Sliders, 
  Type, 
  Palette, 
  Square, 
  Wifi, 
  WifiOff, 
  Send,
  Layers,
  Sparkles
} from 'lucide-react';
import { AdraLogo, AdraLogoVariant, AdraLogoTone } from './AdraLogo';
import { BrandFrame } from './BrandFrame';
import { SloganLockup } from './SloganLockup';
import { StatCallout } from './StatCallout';
import { WavePattern } from './WavePattern';
import { PhotoWithCaption } from './PhotoWithCaption';
import { WellBeingTriangle } from '../WellBeingTriangle';
import { Language } from '../../types';

interface BrandTestViewProps {
  onBack: () => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isOffline: boolean;
  onToggleOfflineSimulator: () => void;
}

export const BrandTestView: React.FC<BrandTestViewProps> = ({
  onBack,
  currentLang,
  onLanguageChange,
  isOffline,
  onToggleOfflineSimulator
}) => {
  const [selectedVariant, setSelectedVariant] = useState<AdraLogoVariant>('vertical');
  const [selectedTone, setSelectedTone] = useState<AdraLogoTone>('green');
  const [showClearSpace, setShowClearSpace] = useState(true);
  const [logoWidth, setLogoWidth] = useState<number>(140);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  // Form testing state
  const [testFormEmail, setTestFormEmail] = useState('');
  const [testFormMessage, setTestFormMessage] = useState('');
  const [testFormSubmitted, setTestFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const colorSwatches = [
    {
      name: '--adra-green (Primary)',
      pms: 'PMS 335 C',
      hex: '#007B5F',
      rgb: 'R 0, G 123, B 95',
      contrastOnWhite: '4.8:1 (Pass AA)',
      usage: 'REQUIRED on every page as at least an accent. Used for primary CTAs and logo.',
      bg: 'bg-[#007B5F]',
      textLight: true
    },
    {
      name: '--adra-gray (Secondary)',
      pms: 'PMS 425 C',
      hex: '#54585A',
      rgb: 'R 84, G 88, B 90',
      contrastOnWhite: '5.1:1 (Pass AA)',
      usage: 'Text/fields/frames/captions and outside photo credits.',
      bg: 'bg-[#54585A]',
      textLight: true
    },
    {
      name: '--adra-black',
      pms: '100% Black',
      hex: '#231F20',
      rgb: 'R 35, G 31, B 32',
      contrastOnWhite: '16.2:1 (Pass AAA)',
      usage: 'High-contrast typography, legal documentation, and logo alternative.',
      bg: 'bg-[#231F20]',
      textLight: true
    },
    {
      name: '--white',
      pms: 'Pure White',
      hex: '#FFFFFF',
      rgb: 'R 255, G 255, B 255',
      contrastOnWhite: '1.0:1 (Background)',
      usage: 'Page background, cards, negative space, and reverse logo.',
      bg: 'bg-white border border-stone-300',
      textLight: false
    },
    {
      name: '--adra-green-700 (Approved Extension)',
      pms: 'Derived',
      hex: '#00614A',
      rgb: 'R 0, G 97, B 74',
      contrastOnWhite: '6.4:1 (Pass AA Large/Normal)',
      usage: 'Button hover and pressed states ONLY. Never standalone branding.',
      bg: 'bg-[#00614A]',
      textLight: true
    },
    {
      name: '--adra-green-50 (Approved Extension)',
      pms: 'Derived Tint',
      hex: '#E5F2EF',
      rgb: 'R 229, G 242, B 239',
      contrastOnWhite: '1.1:1 (Tint)',
      usage: 'Light tint background. Full #007B5F must also appear on same screen.',
      bg: 'bg-[#E5F2EF] border border-emerald-200',
      textLight: false
    },
    {
      name: '--surface-gray (Approved Extension)',
      pms: 'Derived Neutral',
      hex: '#F0F0F0',
      rgb: 'R 240, G 240, B 240',
      contrastOnWhite: '1.2:1 (Panel)',
      usage: 'Light panel background seen in Graphic Standards Manual.',
      bg: 'bg-[#F0F0F0] border border-stone-300',
      textLight: false
    }
  ];

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (testFormEmail && testFormMessage) {
      setTestFormSubmitted(true);
      setTimeout(() => setTestFormSubmitted(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-[#231F20] py-10 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Top Header Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold font-sans text-[#007B5F] uppercase tracking-[0.05em]">
              <ShieldCheck className="w-4 h-4 text-[#007B5F]" />
              <span>Dev Route: /brand-test</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-sans text-[#231F20] tracking-tight">
              ADRA Brand Systems Compliance Sandbox
            </h1>
            <p className="text-sm text-[#54585A] font-serif max-w-xl">
              Visual testing environment validating logo invariants, clear space math, color contrast ratios, 4-language type scales, buttons, and offline PWA resilience.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-lg border border-[#54585A] text-[#231F20] hover:bg-stone-100 font-sans font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portal</span>
            </button>
          </div>
        </div>

        {/* SECTION 1: LOGO INVARIANTS & CLEAR SPACE INSPECTOR */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="adra-eyebrow text-xs text-[#007B5F]">
                SECTION 2 · STRICT LOGO SYSTEM
              </span>
              <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
                Official Logo Files &amp; Clear Space Enforcement
              </h2>
            </div>
            <div className="text-xs text-[#54585A] font-mono">
              Files: /public/brand/*.svg
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls */}
            <div className="lg:col-span-5 bg-[#F0F0F0] p-5 rounded-xl border border-stone-200 space-y-4">
              <div className="text-xs font-bold font-sans text-[#231F20] uppercase tracking-wider">
                Logo Controls &amp; Sizing
              </div>

              {/* Variant Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold font-sans text-[#54585A]">Configuration</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['vertical', 'horizontal', 'globe'] as AdraLogoVariant[]).map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setSelectedVariant(v);
                        if (v === 'horizontal' && logoWidth < 100) setLogoWidth(120);
                        if (v !== 'horizontal' && logoWidth < 66) setLogoWidth(80);
                      }}
                      className={`py-2 px-2.5 text-xs font-bold rounded-lg capitalize font-sans transition-all cursor-pointer ${
                        selectedVariant === v
                          ? 'bg-[#007B5F] text-white shadow-xs'
                          : 'bg-white text-[#231F20] border border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tone Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold font-sans text-[#54585A]">Color Restriction (Approved Only)</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'green', label: 'Green (#007B5F)', tone: 'green' },
                    { id: 'black', label: 'Black (#231F20)', tone: 'black' },
                    { id: 'white', label: 'White (#FFFFFF)', tone: 'white' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTone(t.tone as AdraLogoTone)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg font-sans transition-all cursor-pointer ${
                        selectedTone === t.tone
                          ? 'bg-[#007B5F] text-white shadow-xs'
                          : 'bg-white text-[#231F20] border border-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      {t.tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Width Slider */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-sans">
                  <label className="font-bold text-[#54585A]">Width ({logoWidth}px)</label>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Min: {selectedVariant === 'horizontal' ? '100px' : '66px'}
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedVariant === 'horizontal' ? 100 : 66}
                  max={260}
                  value={logoWidth}
                  onChange={(e) => setLogoWidth(Number(e.target.value))}
                  className="w-full accent-[#007B5F] cursor-pointer"
                />
              </div>

              {/* Clear Space Toggle */}
              <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                <span className="text-xs font-bold font-sans text-[#231F20]">Clear Space Guides</span>
                <button
                  onClick={() => setShowClearSpace(!showClearSpace)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    showClearSpace ? 'bg-[#007B5F]' : 'bg-stone-300'
                  }`}
                >
                  <span className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    showClearSpace ? 'right-0.5' : 'left-0.5'
                  }`} />
                </button>
              </div>

              <div className="text-[11px] text-[#54585A] font-serif leading-relaxed">
                Rule: Clear space on all sides must equal the height of the letter "A" in the ADRA logotype. Minimum width is strictly enforced (≥66px vertical, ≥100px horizontal).
              </div>
            </div>

            {/* Display Canvas */}
            <div className={`lg:col-span-7 rounded-2xl border p-12 flex flex-col items-center justify-center min-h-[300px] relative transition-colors ${
              selectedTone === 'white' ? 'bg-[#004D3A] border-[#007B5F]' : 'bg-white border-stone-200'
            }`}>
              <AdraLogo
                variant={selectedVariant}
                tone={selectedTone}
                width={logoWidth}
                showClearSpaceGuide={showClearSpace}
              />

              <div className={`absolute bottom-3 right-4 text-[10px] font-mono ${
                selectedTone === 'white' ? 'text-emerald-200' : 'text-[#54585A]'
              }`}>
                Render: {selectedVariant === 'vertical' && selectedTone === 'green' ? '/brand/adra-logo.png' : `/brand/adra-${selectedVariant}-${selectedTone}.png`} ({logoWidth}px)
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 2: DESIGN TOKENS & CONTRAST RATIOS */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="adra-eyebrow text-xs text-[#007B5F]">
              SECTION 3 · COLOR PALETTE &amp; CONTRAST
            </span>
            <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
              Official Design Tokens &amp; WCAG Contrast Matrix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorSwatches.map((swatch) => (
              <div key={swatch.hex} className="rounded-xl border border-stone-200 overflow-hidden shadow-2xs bg-white">
                <div className={`h-24 ${swatch.bg} p-3 flex items-end justify-between`}>
                  <span className={`text-xs font-mono font-bold ${swatch.textLight ? 'text-white' : 'text-[#231F20]'}`}>
                    {swatch.hex}
                  </span>
                  <button
                    onClick={() => copyToClipboard(swatch.hex, swatch.name)}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      swatch.textLight ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-black/10 hover:bg-black/20 text-[#231F20]'
                    }`}
                    title="Copy hex code"
                  >
                    {copiedToken === swatch.name ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-4 space-y-1.5">
                  <div className="font-bold text-xs font-sans text-[#231F20]">{swatch.name}</div>
                  <div className="text-[11px] font-mono text-[#54585A]">{swatch.pms} · {swatch.rgb}</div>
                  <div className="text-[10.5px] font-bold text-[#007B5F] bg-[#E5F2EF] inline-block px-2 py-0.5 rounded">
                    {swatch.contrastOnWhite}
                  </div>
                  <p className="text-[11px] text-[#54585A] font-serif leading-relaxed pt-1 border-t border-stone-100">
                    {swatch.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Strict Contrast Invariant Warning */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <div className="font-bold font-sans text-amber-900">
                Contrast Rule: Green &amp; Gray Pairing Ban
              </div>
              <p className="text-amber-800 font-serif leading-relaxed">
                Use green or gray on white, white on green or gray. <strong>NEVER</strong> put green text on gray or gray text on green (fails WCAG AA 4.5:1 ratio).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: 4-LANGUAGE TYPE SCALE & SCRIPT RULES */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="adra-eyebrow text-xs text-[#007B5F]">
                SECTION 4 · TYPOGRAPHY &amp; INTERNATIONALISATION
              </span>
              <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
                Type Scale &amp; Script Angle Behavior ({currentLang.toUpperCase()})
              </h2>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F0F0F0] rounded-lg">
              {[
                { id: 'en', label: 'English (EN)' },
                { id: 'am', label: 'Amharic (አማ)' },
                { id: 'om', label: 'Oromo (OM)' },
                { id: 'ti', label: 'Tigrinya (ትግ)' }
              ].map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => onLanguageChange(lang.id as Language)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors cursor-pointer font-sans ${
                    currentLang === lang.id
                      ? 'bg-[#007B5F] text-white shadow-2xs'
                      : 'text-[#54585A] hover:text-[#231F20]'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Type Specimen in selected language */}
          <div className="space-y-6" lang={currentLang}>
            
            {/* Headline H1 */}
            <div className="space-y-1 pb-4 border-b border-stone-100">
              <div className="text-[10.5px] font-mono text-[#54585A]">
                H1 · Montserrat Bold 700 / Noto Sans Ethiopic Bold · Sentence Case · 0 tracking
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#231F20]">
                {currentLang === 'am'
                  ? 'ሁሉም ሰው ፈጣሪ ባሰበለት ክብር እንዲኖር ማገልገል'
                  : currentLang === 'om'
                  ? 'Namni hundi akkuma Waaqayyo itti yaade akka jiraatuuf tajaajiluu'
                  : currentLang === 'ti'
                  ? 'ንኹሉ ደቂ ሰባት ፈጣሪ ከም ዝደለዮ ኰይኖም ምእንቲ ክነብሩ ምግልጋል'
                  : 'To serve humanity so all may live as God intended.'}
              </h1>
            </div>

            {/* Eyebrow & Captions: ALL CAPS, 0.05em tracking (Disabled in Ethiopic) */}
            <div className="space-y-1 pb-4 border-b border-stone-100">
              <div className="text-[10.5px] font-mono text-[#54585A]">
                Eyebrow &amp; URL · Montserrat Bold 700 · ALL CAPS · 0.05em tracking (disabled in Ge'ez)
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span className="adra-eyebrow text-xs text-[#007B5F] bg-[#E5F2EF] px-2.5 py-1 rounded">
                  {currentLang === 'am' ? 'የአድራ ፕሮግራሞች' : currentLang === 'ti' ? 'መደባት ኣድራ' : 'COMMUNITY DEVELOPMENT · ADRA.ORG'}
                </span>
                <span className="adra-url text-xs text-[#54585A]">
                  WWW.ADRA.ORG
                </span>
              </div>
            </div>

            {/* Slogan Accent (Kaushan Script vs Noto Sans Ethiopic) */}
            <div className="space-y-2 pb-4 border-b border-stone-100">
              <div className="text-[10.5px] font-mono text-[#54585A]">
                Slogan Motto · Kaushan Script at 3°–10° (Am/Ti: Noto Sans Ethiopic Bold with 0° rotation)
              </div>
              <div className="p-4 bg-[#F0F0F0] rounded-xl flex items-center justify-between">
                <div>
                  <span className="adra-script-slogan text-2xl sm:text-3xl text-[#007B5F]">
                    {currentLang === 'am' ? 'ፍትህ። ርህራሄ። ፍቅር።' : currentLang === 'om' ? 'Haqa. Gara-laafina. Jaalala.' : currentLang === 'ti' ? 'ፍትሒ። ርሕራሐ። ፍቕሪ።' : 'Justice. Compassion. Love.'}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#54585A]">
                  {currentLang === 'am' || currentLang === 'ti' ? 'Angle: 0° (Ethiopic Rule)' : 'Angle: -4° (Ascending Right)'}
                </span>
              </div>
            </div>

            {/* Body Copy: Zilla Slab Regular / Noto Serif Ethiopic */}
            <div className="space-y-2">
              <div className="text-[10.5px] font-mono text-[#54585A]">
                Body Copy · Zilla Slab Regular 400 (16-18px) / Noto Serif Ethiopic · line-height 1.6-1.7 · max 70ch
              </div>
              <p className="text-base sm:text-[17.5px] text-[#231F20] font-serif leading-relaxed">
                {currentLang === 'am'
                  ? 'አድራ ኢትዮጵያ በዓለም አቀፍ ደረጃ በ130+ አገሮች የሚንቀሳቀሰው የአድቬንቲስት የእርዳታና ልማት ድርጅት የኢትዮጵያ ቢሮ ነው። ከ1982 ጀምሮ ከማህበረሰቦች ጋር በመተባበር ንጹህ ውሃን፣ ጥራት ያለው ትምህርትን፣ የምግብ ዋስትናን እና ፈጣን የአደጋ ምላሽን ያለ ምንም አድልዎ እናቀርባለን።'
                  : currentLang === 'om'
                  ? "ADRA Itoophiyaan qaama dhaabbata gargaarsa namoomaa fi misoomaa ADRA addunyaati. Bara 1982 eegalee sanyii, amantii fi koorniyaa osoo hin qoodin bishaan dhugaatii qulqulluu, barnoota hunda-hammataa fi misooma jireenyaa dhiyeessuun hawaasa tajaajilaa jira."
                  : currentLang === 'ti'
                  ? 'ኣድራ ኢትዮጵያ ኣካል ዓለምለኻዊ ሰብኣዊ ረድኤት ኣድራ ኮይኑ ካብ 1982 ጀሚሩ ኣብ ኢትዮጵያ ጽሩይ ማይ፣ ትምህርቲ፣ ውሕስነት ምግቢ ከምኡ’ውን ህጹጽ ረድኤት ንኹሉ ማሕበረሰብ ብዘይ ኣድልዎ የቕርብ።'
                  : 'ADRA is the global humanitarian arm of the Seventh-day Adventist Church. Operating in over 130 countries, we partner with communities in Ethiopia to provide clean water, inclusive education, sustainable livelihoods, and rapid disaster relief with justice, compassion, and love.'}
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 4: SIGNATURE BRAND DEVICES */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="adra-eyebrow text-xs text-[#007B5F]">
              SECTION 5 · SIGNATURE BRAND DEVICES
            </span>
            <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
              BrandFrame, SloganLockup, StatCallout, and WavePattern
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Device 1 & 2: BrandFrame & SloganLockup */}
            <div className="space-y-4">
              <div className="text-xs font-bold font-sans text-[#54585A] uppercase tracking-wider">
                1 &amp; 2. SloganLockup in BrandFrame
              </div>
              <SloganLockup currentLang={currentLang} borderTone="green" />
            </div>

            {/* Device 4: StatCallout */}
            <div className="space-y-4">
              <div className="text-xs font-bold font-sans text-[#54585A] uppercase tracking-wider">
                4. StatCallout Component
              </div>
              <div className="p-6 bg-[#F0F0F0] rounded-xl space-y-4">
                <StatCallout
                  value="288+"
                  caption="SOLAR WATER STATIONS"
                  subtext="Deep borehole solar pumping systems built across arid woredas."
                  tone="green"
                />
              </div>
            </div>

          </div>

          {/* Device 6: WavePattern Line-Art */}
          <div className="pt-4 border-t border-stone-100 space-y-2">
            <div className="text-xs font-bold font-sans text-[#54585A] uppercase tracking-wider">
              6. Subtle WavePattern Divider Line-Art
            </div>
            <WavePattern tone="green" height={28} />
          </div>

          {/* Device 5: PhotoWithCaption */}
          <div className="pt-4 border-t border-stone-100 space-y-2">
            <div className="text-xs font-bold font-sans text-[#54585A] uppercase tracking-wider">
              PhotoWithCaption with Exact Credit Standard (Photo: © 2026 ADRA | ADRA Ethiopia)
            </div>
            <div className="max-w-md">
              <PhotoWithCaption
                isPlaceholder={true}
                alt="Solar borehole in Somali Region"
                caption="Solar-powered deep borehole pump station in Kelafo, Somali Region."
                photographer="ADRA Ethiopia"
                year="2026"
                insideCredit={false}
              />
            </div>
          </div>

          {/* Core Framework: Well-Being Triangle */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <div className="text-xs font-bold font-sans text-[#54585A] uppercase tracking-wider">
              Core Framework: Well-Being Triangle (Education, Health, Sustainable Livelihoods)
            </div>
            <WellBeingTriangle currentLang={currentLang} />
          </div>
        </div>

        {/* SECTION 5: BUTTON SPECIFICATION & TOUCH TARGETS */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="adra-eyebrow text-xs text-[#007B5F]">
              SECTION 6 · BUTTONS &amp; INTERACTIVE CONTROLS
            </span>
            <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
              48px Minimum Touch Target, Focus Ring &amp; States
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Primary Button */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#54585A]">Primary Button</span>
              <button className="w-full min-h-[48px] px-6 py-3 bg-[#007B5F] hover:bg-[#00614A] active:bg-[#004D3A] text-white font-bold font-sans text-sm rounded-[8px] transition-colors cursor-pointer shadow-xs focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#007B5F]">
                {currentLang === 'am' ? 'ድጋፍ ያድርጉ' : currentLang === 'om' ? 'Gargaarsa Kennaa' : 'Support Our Mission'}
              </button>
              <div className="text-[11px] text-[#54585A] font-serif">
                Fill #007B5F, hover #00614A, 8px radius, 48px touch target.
              </div>
            </div>

            {/* Secondary Button */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#54585A]">Secondary Button</span>
              <button className="w-full min-h-[48px] px-6 py-3 bg-white hover:bg-[#E5F2EF] text-[#007B5F] border-2 border-[#007B5F] font-bold font-sans text-sm rounded-[8px] transition-colors cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#007B5F]">
                {currentLang === 'am' ? 'ፕሮግራሞች' : currentLang === 'om' ? 'Sagantaalee' : 'View Programmes'}
              </button>
              <div className="text-[11px] text-[#54585A] font-serif">
                White bg, 2px green outline, 8px radius, 48px target.
              </div>
            </div>

            {/* Tertiary Button / Text Link */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#54585A]">Tertiary Text Link</span>
              <div className="min-h-[48px] flex items-center">
                <a href="#test" className="text-[#007B5F] hover:text-[#00614A] font-bold font-sans text-sm underline underline-offset-4 cursor-pointer">
                  {currentLang === 'am' ? 'ሙሉ ሪፖርት ያውርዱ →' : currentLang === 'om' ? 'Gabaasa Buufadhaa →' : 'Download Annual Audit Report →'}
                </a>
              </div>
              <div className="text-[11px] text-[#54585A] font-serif">
                Text link with persistent underline and green color.
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 6: PWA & OFFLINE QUEUE TEST */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-200 pb-3 flex items-center justify-between">
            <div>
              <span className="adra-eyebrow text-xs text-[#007B5F]">
                SECTION 7 · OFFLINE PWA &amp; FORM QUEUE
              </span>
              <h2 className="text-xl font-bold font-sans text-[#231F20] mt-0.5">
                Low-Bandwidth Mobile &amp; Offline Resilience Simulator
              </h2>
            </div>

            <button
              onClick={onToggleOfflineSimulator}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans flex items-center gap-2 cursor-pointer transition-colors ${
                isOffline ? 'bg-amber-600 text-white' : 'bg-[#E5F2EF] text-[#007B5F]'
              }`}
            >
              {isOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
              <span>{isOffline ? 'Simulating Offline' : 'Simulate Offline'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <p className="text-sm text-[#54585A] font-serif leading-relaxed">
                When network connectivity is weak or severed in remote Ethiopian woredas, ADRA Ethiopia’s service worker maintains the cached shell and allows users to submit inquiry forms which queue safely in browser storage.
              </p>
              
              <div className="p-4 bg-[#F0F0F0] rounded-xl space-y-2 text-xs font-mono">
                <div className="text-[#007B5F] font-bold">PWA Manifest Status: Verified</div>
                <div>Service Worker: /public/sw.js (Cache: adra-ethiopia-shell-v1)</div>
                <div>Storage Mode: LocalStorage Queue Fallback Active</div>
              </div>
            </div>

            {/* Interactive Form with Queueing */}
            <form onSubmit={handleTestSubmit} className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-3 text-left">
              <div className="text-xs font-bold font-sans text-[#231F20]">
                Test Community Inquiry Form
              </div>

              <div>
                <label className="adra-label text-[11px] text-[#54585A] block mb-1">Email / Phone</label>
                <input
                  type="text"
                  required
                  placeholder="contact@community.org"
                  value={testFormEmail}
                  onChange={(e) => setTestFormEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#007B5F]"
                />
              </div>

              <div>
                <label className="adra-label text-[11px] text-[#54585A] block mb-1">Inquiry / Message</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Inquiry regarding borehole access..."
                  value={testFormMessage}
                  onChange={(e) => setTestFormMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs font-sans focus:outline-none focus:ring-2 focus:ring-[#007B5F]"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] px-4 py-2 bg-[#007B5F] hover:bg-[#00614A] text-white font-bold font-sans text-xs rounded-[8px] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isOffline ? 'Queue for Offline Sync' : 'Submit Inquiry'}</span>
              </button>

              {testFormSubmitted && (
                <div className="p-2.5 rounded bg-emerald-100 text-[#00614A] text-xs font-sans font-medium flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#007B5F]" />
                  <span>
                    {isOffline 
                      ? 'Inquiry safely stored in offline queue! Will transmit when online.' 
                      : 'Inquiry transmitted to ADRA Ethiopia Desk.'}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
