import React, { useState } from 'react';
import { Camera, ShieldCheck } from 'lucide-react';

export interface PhotoWithCaptionProps {
  src?: string;
  alt: string;
  caption: string;
  photographer?: string;
  year?: number | string;
  aspectRatio?: string; // e.g. 'aspect-[16/9]' or 'aspect-[4/3]'
  insideCredit?: boolean;
  isPlaceholder?: boolean;
  consentVerified?: boolean;
  className?: string;
}

/**
 * ADRA Dignity-First Photography Component
 * Adheres strictly to Section 5 Photography Standards:
 * - Neutral gradient placeholder if no photo or placeholder flag set
 * - Exact credit line: "Photo: © [YEAR] ADRA | [Photographer or Office]"
 * - Credit in --adra-gray (#54585A) outside, or black/white inside
 * - Content-governance consent note
 */
export const PhotoWithCaption: React.FC<PhotoWithCaptionProps> = ({
  src,
  alt,
  caption,
  photographer = 'ADRA Ethiopia',
  year = '2026',
  aspectRatio = 'aspect-[16/9]',
  insideCredit = false,
  isPlaceholder = false,
  consentVerified = true,
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);
  const creditText = `Photo: © ${year} ADRA | ${photographer}`;

  const renderPlaceholder = isPlaceholder || !src || imgError;

  return (
    <figure className={`space-y-2 text-left ${className}`}>
      {/* Image / Placeholder Container */}
      <div className={`relative w-full overflow-hidden rounded-xl bg-[#F0F0F0] ${aspectRatio} flex items-center justify-center border border-stone-200/80`}>
        {renderPlaceholder ? (
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5F2EF] to-[#F0F0F0] p-6 flex flex-col items-center justify-center text-center space-y-2 select-none">
            <Camera className="w-8 h-8 text-[#007B5F]/60" />
            <div className="text-xs font-bold font-sans text-[#007B5F] uppercase tracking-wider">
              Photo Placeholder · Replace with ADRA Photo
            </div>
            <p className="text-[11px] text-[#54585A] font-serif max-w-xs">
              ADRA brand policy: Dignity-first imagery. No stock or AI-generated people.
            </p>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        )}

        {/* Inside Credit Overlay */}
        {insideCredit && !renderPlaceholder && (
          <div className="absolute bottom-2 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[11px] font-sans text-white/90 select-none">
            {creditText}
          </div>
        )}

        {/* Consent Badge */}
        {consentVerified && (
          <div 
            className="absolute top-2 left-2 px-2 py-0.5 rounded-sm bg-black/40 backdrop-blur-xs text-[9.5px] font-mono text-emerald-200 flex items-center gap-1 select-none"
            title="Image Consent Verified per ADRA Safeguarding Policy"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-300" />
            <span className="hidden sm:inline">Consent Verified</span>
          </div>
        )}
      </div>

      {/* Caption & Outside Credit */}
      <figcaption className="space-y-1">
        <p className="text-xs sm:text-[13px] text-stone-700 font-serif leading-relaxed">
          {caption}
        </p>

        {!insideCredit && (
          <div className="adra-photo-credit text-[11px]">
            {creditText}
          </div>
        )}
      </figcaption>
    </figure>
  );
};
