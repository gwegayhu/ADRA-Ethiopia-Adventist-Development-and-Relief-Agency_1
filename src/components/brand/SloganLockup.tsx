import React from 'react';
import { BrandFrame } from './BrandFrame';
import { Language } from '../../types';

export interface SloganLockupProps {
  currentLang?: Language;
  borderTone?: 'green' | 'white' | 'gray';
  className?: string;
  showUrlTab?: boolean;
}

/**
 * Signature Brand Device 2: <SloganLockup>
 * "Justice. Compassion. Love." in Kaushan Script (rotated 4°),
 * stacked on three lines, enclosed in a BrandFrame.
 * Ethiopic Rule: In am/ti languages, set in Noto Sans Ethiopic Bold with NO rotation or tracking.
 */
export const SloganLockup: React.FC<SloganLockupProps> = ({
  currentLang = 'en',
  borderTone = 'green',
  className = '',
  showUrlTab = true
}) => {
  const isEthiopic = currentLang === 'am' || currentLang === 'ti';

  // Slogan Translations
  const slogans = {
    en: ['Justice.', 'Compassion.', 'Love.'],
    om: ['Haqa.', 'Gara-laafina.', 'Jaalala.'], // Approved Oromo translation
    am: ['ፍትህ።', 'ርህራሄ።', 'ፍቅር።'], // Amharic
    ti: ['ፍትሒ።', 'ርሕራሐ።', 'ፍቕሪ።'] // Tigrinya
  };

  const lines = slogans[currentLang] || slogans.en;
  const textColor = borderTone === 'white' ? 'text-white' : 'text-[#007B5F]';

  return (
    <BrandFrame 
      borderTone={borderTone} 
      showUrlTab={showUrlTab} 
      showLogoTab={true}
      className={`inline-block text-left ${className}`}
      padding="p-6 sm:p-8"
    >
      <div className="space-y-1">
        {lines.map((line, idx) => (
          <div key={idx}>
            {isEthiopic ? (
              // Ethiopic Rule: Noto Sans Ethiopic Bold, NO rotation, NO tracking
              <span className={`text-2xl sm:text-3xl font-bold font-sans ${textColor} leading-tight block`}>
                {line}
              </span>
            ) : (
              // Latin Script Rule: Kaushan Script, rotated 4°, title-case, no uppercase
              <span className={`adra-script-slogan text-3xl sm:text-4xl ${textColor} leading-tight block origin-bottom-left`}>
                {line}
              </span>
            )}
          </div>
        ))}
      </div>
      
      {/* Ethiopic Translation Status Marker if applicable */}
      {isEthiopic && (
        <div className="text-[10px] text-stone-400 font-sans mt-2 pt-1 border-t border-stone-200/40">
          Official Ethiopic Translation
        </div>
      )}
    </BrandFrame>
  );
};
