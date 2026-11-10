import React from 'react';

export interface BrandFrameProps {
  children: React.ReactNode;
  className?: string;
  showLogoTab?: boolean;
  showUrlTab?: boolean;
  borderTone?: 'green' | 'white' | 'gray';
  padding?: string;
}

/**
 * Signature Brand Device 1: <BrandFrame>
 * A 1.5–2px outline square/rectangle with an optional top-left logo tab
 * and a bottom-right "URL tab" (ADRA.ORG in Montserrat Bold caps, 0.05em tracking).
 */
export const BrandFrame: React.FC<BrandFrameProps> = ({
  children,
  className = '',
  showLogoTab = false,
  showUrlTab = true,
  borderTone = 'green',
  padding = 'p-6 sm:p-8'
}) => {
  const borderColor = borderTone === 'white' 
    ? 'border-white' 
    : borderTone === 'gray' 
    ? 'border-[#54585A]' 
    : 'border-[#007B5F]';

  const tabColor = borderTone === 'white'
    ? 'border-white text-white bg-transparent'
    : borderTone === 'gray'
    ? 'border-[#54585A] text-[#54585A] bg-white'
    : 'border-[#007B5F] text-[#007B5F] bg-white';

  return (
    <div className={`relative border-2 ${borderColor} ${padding} ${className}`}>
      {/* Optional Top-Left Logo Tab */}
      {showLogoTab && (
        <div className={`absolute -top-3.5 left-4 px-2.5 py-0.5 border border-current ${tabColor} rounded text-[10px] font-bold tracking-wider uppercase font-sans flex items-center gap-1.5 shadow-2xs`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span>ADRA</span>
        </div>
      )}

      {/* Frame Content */}
      <div className="relative z-1">
        {children}
      </div>

      {/* Optional Bottom-Right URL Tab: ADRA.ORG in Montserrat Bold caps, 0.05em tracking */}
      {showUrlTab && (
        <div className={`absolute -bottom-3 right-4 px-3 py-0.5 border border-current ${tabColor} rounded text-[10.5px] font-bold uppercase tracking-[0.05em] font-sans shadow-2xs select-none`}>
          ADRA.ORG
        </div>
      )}
    </div>
  );
};
