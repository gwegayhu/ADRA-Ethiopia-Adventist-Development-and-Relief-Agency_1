import React from 'react';

export interface StatCalloutProps {
  value: string;
  caption: string;
  subtext?: string;
  tone?: 'green' | 'white' | 'gray';
  className?: string;
}

/**
 * Signature Brand Device 4: <StatCallout>
 * Large white or green Montserrat Bold number with uppercase tracked caption
 * and a thin 1px rule. Numbers sourced from editable data file.
 */
export const StatCallout: React.FC<StatCalloutProps> = ({
  value,
  caption,
  subtext,
  tone = 'green',
  className = ''
}) => {
  const valueColor = tone === 'white' ? 'text-white' : tone === 'gray' ? 'text-[#54585A]' : 'text-[#007B5F]';
  const ruleColor = tone === 'white' ? 'bg-white/30' : 'bg-[#007B5F]/30';
  const captionColor = tone === 'white' ? 'text-white/90' : 'text-[#54585A]';

  return (
    <div className={`text-left space-y-2 ${className}`}>
      {/* Large Montserrat Bold Number */}
      <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight ${valueColor}`}>
        {value}
      </div>

      {/* Thin Rule */}
      <div className={`h-[1.5px] w-12 ${ruleColor}`} />

      {/* Uppercase Tracked Caption: Montserrat Bold, 0.05em tracking */}
      <div className={`adra-caption text-xs font-bold font-sans ${captionColor} uppercase tracking-[0.05em]`}>
        {caption}
      </div>

      {subtext && (
        <p className="text-xs text-stone-500 font-serif leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
};
