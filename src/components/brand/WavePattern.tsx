import React from 'react';

export interface WavePatternProps {
  className?: string;
  tone?: 'green' | 'white' | 'gray';
  height?: number;
}

/**
 * Signature Brand Device 6: Subtle Green Wave Pattern Line-Art
 * Decorative divider line-art in ADRA Green (#007B5F).
 * Brand Rule: Never behind text; never over the logo's clear space.
 */
export const WavePattern: React.FC<WavePatternProps> = ({
  className = '',
  tone = 'green',
  height = 24
}) => {
  const strokeColor = tone === 'white' ? '#FFFFFF' : tone === 'gray' ? '#54585A' : '#007B5F';

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none py-2 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        style={{ height: `${height}px` }}
      >
        <path
          d="M0 20 C150 5, 300 35, 450 20 C600 5, 750 35, 900 20 C1050 5, 1200 35, 1350 20"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeOpacity="0.45"
          fill="none"
        />
        <path
          d="M0 25 C150 12, 300 38, 450 25 C600 12, 750 38, 900 25 C1050 12, 1200 38, 1350 25"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity="0.25"
          fill="none"
        />
      </svg>
    </div>
  );
};
