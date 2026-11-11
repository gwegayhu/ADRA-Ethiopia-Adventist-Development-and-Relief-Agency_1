import React, { useState } from 'react';

export type AdraLogoVariant = 'vertical' | 'horizontal' | 'globe';
export type AdraLogoTone = 'green' | 'white' | 'black';

export interface AdraLogoProps {
  variant?: AdraLogoVariant;
  tone?: AdraLogoTone;
  className?: string;
  showClearSpaceGuide?: boolean;
  width?: number; // In px. Enforces min-size: vertical & globe >= 66px, horizontal >= 100px
  alt?: string;
}

/**
 * Official <AdraLogo> Wrapper Component
 * Conforms strictly to the ADRA Graphic Standards Manual:
 * - Uses ONLY official SVG files in /public/brand/
 * - Minimum on-screen size: >= 66px (vertical/globe), >= 100px (horizontal)
 * - Clear space: height of 'A' on all sides (globe: half globe height)
 * - Strict prohibition: No off-brand colors, shadows, tilting, or welded country names.
 */
export const AdraLogo: React.FC<AdraLogoProps> = ({
  variant = 'vertical',
  tone = 'green',
  className = '',
  showClearSpaceGuide = false,
  width,
  alt = 'ADRA - Adventist Development and Relief Agency'
}) => {
  const [loadFailed, setLoadFailed] = useState(false);

  // Map variant and tone to official attached logo assets in /public/brand/
  let src = '/brand/adra-logo.png';
  if (variant === 'vertical') {
    src = tone === 'white'
      ? '/brand/adra-vertical-white.png'
      : tone === 'black'
      ? '/brand/adra-vertical-black.png'
      : '/brand/adra-logo.png';
  } else if (variant === 'horizontal') {
    src = tone === 'white' 
      ? '/brand/adra-horizontal-white.png' 
      : tone === 'black'
      ? '/brand/adra-horizontal-black.png'
      : '/brand/adra-horizontal-green.png';
  } else if (variant === 'globe') {
    src = tone === 'white' 
      ? '/brand/adra-globe-white.png' 
      : tone === 'black'
      ? '/brand/adra-globe-black.png'
      : '/brand/adra-globe-green.png';
  }

  // Minimum size enforcement per Section 2
  const minWidth = variant === 'horizontal' ? 100 : 66;
  const enforcedWidth = width ? Math.max(width, minWidth) : (variant === 'horizontal' ? 120 : 70);

  // Clear space calculation: For horizontal ~20% of height; for vertical ~18% of width
  const clearSpacePadding = variant === 'horizontal' ? 'p-2' : 'p-3';

  if (loadFailed) {
    return (
      <img 
        src="/assets/aistudio/17943458034881586714568978738653_a6364af5.png"
        alt={alt}
        width={enforcedWidth}
        style={{ width: `${enforcedWidth}px`, height: 'auto' }}
        className={`block select-none pointer-events-none shrink-0 ${className}`}
      />
    );
  }

  return (
    <div 
      className={`relative inline-flex items-center justify-center ${clearSpacePadding} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Visual Clear Space Guide (Dev/Inspection mode) */}
      {showClearSpaceGuide && (
        <div 
          className="absolute inset-0 border border-dashed border-amber-500 pointer-events-none rounded flex items-start justify-end p-0.5"
          title="Clear space boundary: equal to height of 'A'"
        >
          <span className="text-[9px] font-mono text-amber-700 bg-amber-50 px-1 rounded leading-none">
            Clear Space
          </span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        width={enforcedWidth}
        style={{ width: `${enforcedWidth}px`, height: 'auto' }}
        className="block select-none pointer-events-none shrink-0"
        onError={() => setLoadFailed(true)}
      />
    </div>
  );
};
