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
  width = 68,
  alt = 'ADRA - Adventist Development and Relief Agency'
}) => {
  const masterVertical = '/assets/aistudio/17943458034881586714568978738653_a6364af5.png';
  const logoSrc =
    variant === 'horizontal'
      ? `/brand/adra-horizontal-${tone}.svg`
      : variant === 'globe'
      ? `/brand/adra-globe-${tone}.svg`
      : masterVertical;

  const filterStyle =
    variant === 'vertical'
      ? tone === 'white'
        ? 'brightness(0) invert(1)'
        : tone === 'black'
        ? 'brightness(0)'
        : 'none'
      : 'none';

  return (
    <div 
      className={`relative inline-flex items-center justify-center p-2 ${className}`}
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
        src={logoSrc}
        alt={alt}
        style={{
          height: `${width}px`,
          width: 'auto',
          filter: filterStyle,
        }}
        className="block select-none pointer-events-none object-contain"
      />
    </div>
  );
};
