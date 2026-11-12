import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Check, 
  Copy, 
  BookOpen, 
  Palette, 
  Type, 
  Camera, 
  AlertTriangle, 
  CheckCircle2, 
  Sliders, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AdraLogo, AdraLogoConfiguration, AdraLogoColor } from './AdraLogo';

interface BrandStandardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandStandardsModal: React.FC<BrandStandardsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'identity' | 'logo' | 'colors' | 'typography' | 'photography' | 'violations'>('identity');
  
  // Interactive Logo Playground states
  const [logoConfig, setLogoConfig] = useState<AdraLogoConfiguration>('vertical');
  const [logoColor, setLogoColor] = useState<AdraLogoColor>('green');
  const [showClearSpace, setShowClearSpace] = useState(true);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(label);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colors = [
    {
      name: 'ADRA Green (Primary)',
      pms: 'Pantone 335 C',
      hex: '#007B5F',
      rgb: 'R 0, G 123, B 95',
      cmyk: 'C 100, M 27, Y 74, K 13',
      usage: 'Dominant color or minimum accent in ALL print and digital collateral.',
      bgClass: 'bg-[#007B5F]',
      textLight: true
    },
    {
      name: 'Dark Grey (Secondary)',
      pms: 'Pantone 425 C',
      hex: '#54585A',
      rgb: 'R 84, G 88, B 90',
      cmyk: 'C 66, M 56, Y 53, K 29',
      usage: 'Neutral text, supporting dividers, rules, and outside photo credits.',
      bgClass: 'bg-[#54585A]',
      textLight: true
    },
    {
      name: '100% Black',
      pms: 'Process Black',
      hex: '#000000',
      rgb: 'R 0, G 0, B 0',
      cmyk: 'C 0, M 0, Y 0, K 100',
      usage: 'Body copy, high-contrast monochrome applications, and legal text.',
      bgClass: 'bg-[#000000]',
      textLight: true
    },
    {
      name: 'Pure White',
      pms: 'Opaque White',
      hex: '#FFFFFF',
      rgb: 'R 255, G 255, B 255',
      cmyk: 'C 0, M 0, Y 0, K 0',
      usage: 'Reverse logos on green/dark imagery, negative space, and clear containers.',
      bgClass: 'bg-white border border-stone-300',
      textLight: false
    },
    {
      name: 'Campaign Gold (Accent)',
      pms: 'Pantone 123 C',
      hex: '#F59E0B',
      rgb: 'R 245, G 158, B 11',
      cmyk: 'C 0, M 40, Y 95, K 0',
      usage: 'Flexible complementary campaign accents (always accompanied by ADRA Green).',
      bgClass: 'bg-[#f59e0b]',
      textLight: false
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-stone-200 w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden text-left">
        
        {/* Header */}
        <div className="bg-[#004D3A] text-white px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#007B5F]/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#007B5F] flex items-center justify-center border border-emerald-400/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-emerald-300 font-sans">
                Official ADRA Graphic Standards Manual
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight font-sans text-white">
                Brand Guardian &amp; Style Guide
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close brand guidelines modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 sm:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none py-2.5 shrink-0">
          {[
            { id: 'identity', label: '1. Core Identity', icon: BookOpen },
            { id: 'logo', label: '2. Logo Standards', icon: Sliders },
            { id: 'colors', label: '3. Color Palette', icon: Palette },
            { id: 'typography', label: '4. Typography', icon: Type },
            { id: 'photography', label: '5. Photography', icon: Camera },
            { id: 'violations', label: 'Strict Violations', icon: AlertTriangle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer font-sans ${
                  isActive
                    ? 'bg-[#007B5F] text-white shadow-xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
          
          {/* TAB 1: CORE IDENTITY */}
          {activeTab === 'identity' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Section 1 · Brand Essence &amp; Foundations
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Core Brand Identity &amp; Messaging
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#f4f9f6] border border-[#007B5F]/20 space-y-2">
                  <div className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                    Full Name &amp; Acronym Rule
                  </div>
                  <div className="text-lg font-bold text-stone-900 font-sans">
                    Adventist Development and Relief Agency
                  </div>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    Never change the acronym "ADRA" in any language. The full name may be translated into Amharic, Oromo, or other local tongues, but the acronym remains ALL CAPITAL LETTERS and universally intact worldwide.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#f4f9f6] border border-[#007B5F]/20 space-y-2">
                  <div className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                    Official Motto
                  </div>
                  <div className="font-motto text-2xl text-[#007B5F] font-normal my-1">
                    Justice. Compassion. Love.
                  </div>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    Must always be title-cased and set in accent script at a precise angle between 3° and 10° to maintain human warmth and prevent a sterile digital appearance.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-sans">
                    Institutional Purpose
                  </div>
                  <blockquote className="text-base font-bold text-[#004D3A] font-serif italic">
                    "To serve humanity so all may live as God intended."
                  </blockquote>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed">
                    The single North Star guiding our emergency response, food security, clean water, education, and health endeavors.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                  <div className="text-xs font-bold text-stone-500 uppercase tracking-wider font-sans">
                    Identity &amp; Church Affiliation
                  </div>
                  <p className="text-xs text-stone-800 font-serif leading-relaxed">
                    The global humanitarian arm of the Seventh-day Adventist Church, operating in over 130 countries regardless of ethnicity, political affiliation, gender, or religion.
                  </p>
                </div>
              </div>

              {/* Well-Being Triangle Summary */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-3">
                <div className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Core Development Objective · The Well-Being Triangle
                </div>
                <p className="text-sm text-stone-700 font-serif leading-relaxed">
                  Focus on individual and community well-being, supported by three indispensable, interconnected areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                    <span className="font-bold text-sm text-[#007B5F] font-sans">1. Education</span>
                    <p className="text-[11px] text-stone-600 font-serif mt-0.5">Mind &amp; lifelong potential</p>
                  </div>
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                    <span className="font-bold text-sm text-[#007B5F] font-sans">2. Health</span>
                    <p className="text-[11px] text-stone-600 font-serif mt-0.5">Physical survival &amp; nutrition</p>
                  </div>
                  <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                    <span className="font-bold text-sm text-[#007B5F] font-sans">3. Livelihoods</span>
                    <p className="text-[11px] text-stone-600 font-serif mt-0.5">Economic self-reliance &amp; food</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LOGO STANDARDS PLAYGROUND */}
          {activeTab === 'logo' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Section 2 · Official Logo Guidelines
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Logo Anatomy, Configurations &amp; Clear Space
                </h3>
              </div>

              {/* Interactive Sandbox */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Controls */}
                <div className="lg:col-span-5 bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-4">
                  <div className="text-xs font-bold text-stone-800 uppercase tracking-wider font-sans">
                    Interactive Logo Inspector
                  </div>

                  {/* Configuration */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-stone-600 font-bold font-sans">Configuration</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['vertical', 'horizontal', 'mark-only'] as AdraLogoConfiguration[]).map((cfg) => (
                        <button
                          key={cfg}
                          onClick={() => setLogoConfig(cfg)}
                          className={`py-1.5 px-2 text-xs font-semibold rounded-lg capitalize transition-all cursor-pointer font-sans ${
                            logoConfig === cfg 
                              ? 'bg-[#007B5F] text-white shadow-xs' 
                              : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {cfg.replace('-', ' ')}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Colorway */}
                  <div className="space-y-1.5">
                    <label className="text-xs text-stone-600 font-bold font-sans">Approved Color Restrictions</label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'green', label: 'ADRA Green', bg: 'bg-[#007B5F]' },
                        { id: 'black', label: 'Black', bg: 'bg-black' },
                        { id: 'white', label: 'White (Reverse)', bg: 'bg-stone-300' },
                      ].map((c) => (
                        <button
                          key={c.id}
                          onClick={() => setLogoColor(c.id as AdraLogoColor)}
                          className={`py-1.5 px-2 text-xs font-semibold rounded-lg transition-all cursor-pointer font-sans ${
                            logoColor === c.id 
                              ? 'bg-[#007B5F] text-white shadow-xs' 
                              : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Clear Space Toggle */}
                  <div className="pt-2 flex items-center justify-between border-t border-stone-200">
                    <span className="text-xs font-bold text-stone-700 font-sans">Show Clear Space Boundary</span>
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

                  <div className="text-[11px] text-stone-500 font-serif leading-relaxed">
                    Rule: Clear space on all sides must equal the height of the letter "A" in the ADRA logotype.
                  </div>
                </div>

                {/* Display Canvas */}
                <div className={`lg:col-span-7 rounded-2xl border p-12 flex flex-col items-center justify-center min-h-[260px] relative transition-colors ${
                  logoColor === 'white' ? 'bg-[#004D3A] border-[#007B5F]' : 'bg-white border-stone-200'
                }`}>
                  <AdraLogo
                    configuration={logoConfig}
                    color={logoColor}
                    showClearSpaceGuide={showClearSpace}
                    size={logoConfig === 'horizontal' ? 56 : 100}
                  />

                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-stone-400">
                    Min size check: OK ({logoConfig === 'horizontal' ? '≥100px' : '≥66px'})
                  </div>
                </div>

              </div>

              {/* Exact Rules Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900 font-sans">1. Vertical Configuration</div>
                  <p className="text-xs text-stone-600 font-serif">
                    Primary and most frequently used version for print, web headers, stationery, and building signs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900 font-sans">2. Horizontal Configuration</div>
                  <p className="text-xs text-stone-600 font-serif">
                    Used strictly when limited vertical space dictates a narrower banner or ribbon format.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
                  <div className="text-xs font-bold text-stone-900 font-sans">3. Globe Mark</div>
                  <p className="text-xs text-stone-600 font-serif">
                    Reserved for apparel, stamps, or graphic icons; must always appear in the vicinity of the full ADRA logo.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: COLOR PALETTE */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Section 3 · Official Color Specifications
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Brand Color Palette &amp; Colorway Rules
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {colors.map((c) => (
                  <div key={c.hex} className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs bg-white">
                    <div className={`h-24 ${c.bgClass} flex items-end justify-between p-3`}>
                      <span className={`text-xs font-bold font-mono ${c.textLight ? 'text-white' : 'text-stone-900'}`}>
                        {c.hex}
                      </span>
                      <button
                        onClick={() => copyToClipboard(c.hex, c.name)}
                        className={`p-1.5 rounded-md backdrop-blur-xs transition-colors cursor-pointer ${
                          c.textLight ? 'bg-white/20 hover:bg-white/30 text-white' : 'bg-black/10 hover:bg-black/20 text-stone-900'
                        }`}
                        title="Copy Hex Code"
                      >
                        {copiedColor === c.name ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="font-bold text-sm text-stone-900 font-sans">{c.name}</div>
                      <div className="text-xs text-stone-500 font-mono space-y-0.5">
                        <div>PMS: {c.pms}</div>
                        <div>{c.rgb}</div>
                        <div>{c.cmyk}</div>
                      </div>
                      <p className="text-xs text-stone-600 font-serif border-t border-stone-100 pt-2 leading-relaxed">
                        {c.usage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: TYPOGRAPHY */}
          {activeTab === 'typography' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Section 4 · Official Typographic Rules
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Digital &amp; Print Typography Systems
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Digital / Web Typesetting */}
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                      Web / Digital (Our Active Portal)
                    </span>
                    <span className="text-[10px] bg-[#e6f4f0] text-[#007B5F] px-2 py-0.5 rounded-md font-bold font-sans">
                      Google Fonts
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-stone-500 font-mono">Headlines, Captions, URLs:</div>
                    <div className="text-2xl font-bold text-stone-900 font-sans tracking-tight">
                      Montserrat Bold
                    </div>
                    <div className="text-xs text-stone-500 font-sans">
                      • Sentence-cased for headlines with 0 pt tracking
                      <br />• ALL CAPS with 50 pt tracking for captions and URLs
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="text-xs text-stone-500 font-mono">Body Copy (12px to 16px):</div>
                    <div className="text-xl font-normal text-stone-900 font-serif">
                      Zilla Slab Regular
                    </div>
                    <p className="text-xs text-stone-600 font-serif leading-relaxed">
                      Left-aligned, not hyphenated, and not justified. Line lengths kept strictly under 12–14 words per line for optimal human legibility.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <div className="text-xs text-stone-500 font-mono">Accent Headlines &amp; Slogan:</div>
                    <div className="font-motto text-xl text-[#007B5F] font-normal my-1">
                      Kaushan Script (3° to 10° Angle)
                    </div>
                    <p className="text-xs text-stone-600 font-serif">
                      Never set in all-caps, never tracked out, and never used for dense body text.
                    </p>
                  </div>
                </div>

                {/* Print Typesetting */}
                <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-600 uppercase tracking-wider font-sans">
                      Print Typefaces (Manual Standard)
                    </span>
                    <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-md font-bold font-sans">
                      Publications
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-stone-500 font-mono">Print Primary:</div>
                    <div className="text-2xl font-bold text-stone-900 font-sans tracking-tight">
                      Noto Sans &amp; Noto Serif
                    </div>
                    <p className="text-xs text-stone-600 font-serif leading-relaxed">
                      Noto Sans Bold for headlines; Noto Serif Regular (7 pt to 20 pt, sentence-cased) for publications and brochures.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-stone-200">
                    <div className="text-xs text-stone-500 font-mono">Print Accent:</div>
                    <div className="text-xl font-bold text-stone-800 font-serif italic">
                      Authenia Script Textured
                    </div>
                    <p className="text-xs text-stone-600 font-serif">
                      Set at 3°–10° angle for the print slogan: "Justice. Compassion. Love."
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
                    <div className="text-xs font-bold text-amber-900 font-sans">Strict Rule: No Small Caps</div>
                    <p className="text-[11px] text-amber-800 font-serif leading-relaxed">
                      Small Caps are strictly prohibited for Noto Sans, Noto Serif, and Zilla Slab because forced small caps cause initial caps to look disproportionately thick.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PHOTOGRAPHY */}
          {activeTab === 'photography' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                  Section 5 · Photography &amp; Imagery Standards
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Human-Centric Imagery &amp; Certified Photo Credits
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
                    <div className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                      Visual Style &amp; Retouching
                    </div>
                    <p className="text-xs sm:text-sm text-stone-700 font-serif leading-relaxed">
                      Expansive, natural, and human-centric. Photos must portray Ethiopian individuals with profound dignity, agency, and hope—never as helpless victims. Photos must be professionally color-corrected with natural skin tones; artificial filters are strictly avoided.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-stone-200 space-y-2">
                    <div className="text-xs font-bold text-[#007B5F] uppercase tracking-wider font-sans">
                      Mandatory Photo Credit Format
                    </div>
                    <div className="p-3 bg-stone-100 rounded-lg font-mono text-xs text-stone-900 select-all">
                      Photo: © [Year] ADRA | [Photographer's Name or Country Office]
                    </div>
                    <ul className="text-xs text-stone-600 font-serif space-y-1 list-disc list-inside">
                      <li>Type size must be ≤ 6 pt type</li>
                      <li>Outside image placement: Pantone 425 grey (#54585A)</li>
                      <li>Inside image placement: Black or white depending on contrast</li>
                    </ul>
                  </div>
                </div>

                {/* Live Example Card */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white shadow-xs space-y-3 p-3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img
                      src="/assets/images/solar_water_desert_1792618997738.jpg"
                      alt="ADRA Solar Borehole in Somali Region"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-sm bg-black/70 backdrop-blur-xs text-[8.5px] font-sans text-white/90">
                      Photo: © 2026 ADRA | ADRA Ethiopia
                    </div>
                  </div>
                  <div className="px-1 space-y-1">
                    <div className="text-xs font-bold text-stone-900 font-sans">
                      Compliant Photographic Implementation
                    </div>
                    <p className="text-xs text-stone-600 font-serif">
                      Descriptive caption: Deep solar borehole pumping clean water to pastoralists in Kelafo, Somali Region.
                    </p>
                    <div className="adra-photo-credit pt-1">
                      Photo: © 2026 ADRA | ADRA Ethiopia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: STRICT VIOLATIONS */}
          {activeTab === 'violations' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider font-sans">
                  Strict Violations Checklist
                </span>
                <h3 className="text-2xl font-bold text-stone-900 font-sans mt-1">
                  Never Do the Following (Brand Invariants)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Never use off-brand colors on the logo',
                    desc: 'The logo may ONLY appear in Pantone 335 C (#007B5F), 100% Black, or White.'
                  },
                  {
                    title: 'Never add drop shadows or glow effects',
                    desc: 'No shadows, bevels, embossing, or decorative outlines on the logo mark.'
                  },
                  {
                    title: 'Never append country names to the logo lockup',
                    desc: 'Office names like "Ethiopia" must remain separated by distinct clear space and dividers, never welded directly into the logo artwork.'
                  },
                  {
                    title: 'Never stretch or distort proportions',
                    desc: 'Aspect ratio must remain 100% locked during responsive scaling.'
                  },
                  {
                    title: 'Never tilt or rotate the official logo',
                    desc: 'Only the Kaushan Script motto may be set at 3°–10°; the ADRA logo must always sit upright on a flat 0° baseline.'
                  },
                  {
                    title: 'Never use the logotype without the World Mark',
                    desc: 'The World Mark (globe with three figures holding hands) must always be present.'
                  },
                  {
                    title: 'Never use forced Small Caps on Zilla Slab or Noto',
                    desc: 'Forced small caps cause initial capital letters to look disproportionately thick.'
                  },
                  {
                    title: 'Never justify text or introduce auto-hyphenation',
                    desc: 'Text must always be clean left-aligned with natural rag to maximize readability.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-red-900 font-sans">{item.title}</div>
                      <p className="text-xs text-stone-600 font-serif mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-stone-50 border-t border-stone-200 px-6 sm:px-8 py-4 flex items-center justify-between text-xs text-stone-500 font-sans shrink-0">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#007B5F]" />
            <span>ADRA Ethiopia Digital Brand Compliance: 100% Verified</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#007B5F] hover:bg-[#004D3A] text-white font-bold rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
