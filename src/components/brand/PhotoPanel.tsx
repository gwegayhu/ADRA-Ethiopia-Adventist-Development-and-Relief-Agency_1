import React from 'react';

export interface PhotoPanelProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  body: string;
  caption?: string;
  photoCredit?: string;
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/9]' or 'min-h-[480px]'
  ctaText?: string;
  onCtaClick?: () => void;
}

/**
 * Signature Brand Device 3: <PhotoPanel>
 * Full-bleed photo with a translucent green text panel (rgba(0,123,95,0.88)),
 * white Montserrat Bold headline and white Zilla Slab body at bottom-left.
 * Includes official photo credit standard in bottom-right.
 */
export const PhotoPanel: React.FC<PhotoPanelProps> = ({
  imageSrc,
  imageAlt,
  headline,
  body,
  caption,
  photoCredit = 'Photo: © 2026 ADRA | ADRA Ethiopia',
  className = '',
  aspectRatio = 'min-h-[480px] lg:min-h-[560px]',
  ctaText,
  onCtaClick
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${aspectRatio} flex items-end ${className}`}>
      {/* Background Full-Bleed Photograph */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Subtle darkening gradient across image */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Translucent Green Text Panel at Bottom-Left: rgba(0, 123, 95, 0.88) */}
      <div 
        className="relative z-10 m-4 sm:m-8 lg:m-10 max-w-xl p-6 sm:p-8 rounded-xl backdrop-blur-xs text-left space-y-3"
        style={{ backgroundColor: 'rgba(0, 123, 95, 0.90)' }}
      >
        {caption && (
          <div className="adra-caption text-[11px] text-emerald-200">
            {caption}
          </div>
        )}

        {/* White Montserrat Bold Headline */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans tracking-tight leading-tight">
          {headline}
        </h3>

        {/* White Zilla Slab Body */}
        <p className="text-sm sm:text-base text-white/95 font-serif leading-relaxed">
          {body}
        </p>

        {ctaText && (
          <div className="pt-2">
            <button
              onClick={onCtaClick}
              className="px-5 py-2.5 bg-white hover:bg-stone-100 text-[#007B5F] font-bold text-xs sm:text-sm rounded-lg font-sans transition-all cursor-pointer shadow-sm hover:shadow"
            >
              {ctaText}
            </button>
          </div>
        )}
      </div>

      {/* Exact Photo Credit Standard (Section 5): inside image placement in white text with contrast backing */}
      <div className="absolute bottom-3 right-4 z-10 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[11px] font-sans text-white/90 select-none">
        {photoCredit}
      </div>
    </div>
  );
};
