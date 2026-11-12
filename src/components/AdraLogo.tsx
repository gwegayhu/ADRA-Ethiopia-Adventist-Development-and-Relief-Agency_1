import React from 'react';

export type AdraLogoConfiguration = 'vertical' | 'horizontal' | 'mark-only';
export type AdraLogoColor = 'green' | 'white' | 'black';

export interface AdraLogoProps {
  configuration?: AdraLogoConfiguration;
  color?: AdraLogoColor;
  className?: string;
  showClearSpaceGuide?: boolean;
  alt?: string;
  size?: number; // Height in px
  surface?: 'none' | 'white-badge';
  compact?: boolean;
}

/**
 * Official ADRA Logo Component
 * Uses the official attached ADRA logo directly (/assets/aistudio/17943458034881586714568978738653_a6364af5.png)
 * Strictly conforms to the official ADRA Graphic Standards Manual & Branding Guide.
 */
export const AdraLogo: React.FC<AdraLogoProps> = ({
  configuration = 'vertical',
  color = 'green',
  className = '',
  showClearSpaceGuide = false,
  alt = 'ADRA - Adventist Development and Relief Agency',
  size = 48,
}) => {
  const masterVertical = '/assets/aistudio/17943458034881586714568978738653_a6364af5.png';
  const logoSrc =
    configuration === 'horizontal'
      ? `/brand/adra-horizontal-${color}.svg`
      : configuration === 'mark-only'
      ? `/brand/adra-globe-${color}.svg`
      : masterVertical;

  const filterStyle =
    configuration === 'vertical'
      ? color === 'white'
        ? 'brightness(0) invert(1)'
        : color === 'black'
        ? 'brightness(0)'
        : 'none'
      : 'none';

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Visual Clear Space Inspection Boundary */}
      {showClearSpaceGuide && (
        <div className="absolute inset-[-8px] border border-dashed border-amber-400 pointer-events-none rounded flex items-start justify-end p-0.5 z-10">
          <span className="text-[9px] font-mono text-amber-600 font-bold bg-white/95 px-1 rounded-xs leading-none shadow-2xs">
            Clear Space
          </span>
        </div>
      )}

      <img
        src={logoSrc}
        alt={alt}
        style={{
          height: `${size}px`,
          width: 'auto',
          filter: filterStyle,
        }}
        className="block select-none pointer-events-none object-contain"
      />
    </div>
  );
};
