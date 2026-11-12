import React from 'react';

interface IconProps {
  className?: string;
}

/**
 * Minimalist ADRA Green (#007B5F) SVG line-art icons matching the official ADRA Web Template:
 * 1. Health (medical cross)
 * 2. Education (open book)
 * 3. Livelihoods (coin with dollar symbol)
 * 4. Emergency (cyclone / storm eye symbol)
 */

export const HealthPillarIcon: React.FC<IconProps> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M31 12H49V31H68V49H49V68H31V49H12V31H31V12Z"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinejoin="miter"
    />
  </svg>
);

export const EducationPillarIcon: React.FC<IconProps> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M40 24L13 14V57L40 67M40 24L67 14V57L40 67M40 24V67"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LivelihoodsPillarIcon: React.FC<IconProps> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle
      cx="40"
      cy="40"
      r="28"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    <path
      d="M40 19V24M40 56V61M47.5 29.5C47.5 26 44.2 24 40 24C35.5 24 32 26.5 32 30.2C32 34.5 36.2 36 40.5 37.5C45.2 39.2 48.5 41.2 48.5 45.8C48.5 50 44.8 53 40 53C35 53 31.5 50.2 31.5 46.5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EmergencyPillarIcon: React.FC<IconProps> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Cyclone / Storm eye symbol matching ADRA web template */}
    <circle
      cx="40"
      cy="40"
      r="11.5"
      stroke="currentColor"
      strokeWidth="2.4"
    />
    <path
      d="M19 15C21 31 19 42 21 51C24 62 36 67 48 64C55 62 60 64 62 67"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M61 65C59 49 61 38 59 29C56 18 44 13 32 16C25 18 20 16 18 13"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
