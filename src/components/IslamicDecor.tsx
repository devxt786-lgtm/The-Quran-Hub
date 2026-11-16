import React from 'react';

/**
 * 8-Point Rub el Hizb / Islamic Star SVG
 */
export function IslamicStar({ className = "w-6 h-6 text-[#C6A15B]" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M50 0 L64 36 L100 50 L64 64 L50 100 L36 64 L0 50 L36 36 Z" />
      <circle cx="50" cy="50" r="16" fill="currentColor" fillOpacity="0.25" />
      <circle cx="50" cy="50" r="6" fill="currentColor" />
    </svg>
  );
}

/**
 * The Quran Hub Logo: Illuminated Open Holy Quran resting on a traditional Rehal stand,
 * framed by an 8-point Rub el Hizb Islamic star seal and crescent moon.
 */
export function QuranHubLogo({ className = "w-11 h-11" }: { className?: string }) {
  const gradId = React.useId();
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${gradId}-gold`} x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0D898" />
          <stop offset="50%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#9A7634" />
        </linearGradient>
        <linearGradient id={`${gradId}-pages`} x1="16" y1="24" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFDF7" />
          <stop offset="100%" stopColor="#EADBB8" />
        </linearGradient>
      </defs>

      {/* Outer 8-Point Islamic Star (Rub el Hizb) Medallion */}
      <rect
        x="11"
        y="11"
        width="42"
        height="42"
        rx="3"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />
      <rect
        x="11"
        y="11"
        width="42"
        height="42"
        rx="3"
        transform="rotate(45 32 32)"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.5"
        strokeOpacity="0.85"
      />

      {/* Inner Dark Emerald Seal Backdrop */}
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="#0B271F"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.2"
      />

      {/* Delicate Pointed Mihrab Arch */}
      <path
        d="M32 14.5C25.5 18 20.5 23 20.5 31V44.5H43.5V31C43.5 23 38.5 18 32 14.5Z"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="0.9"
        strokeOpacity="0.45"
        strokeDasharray="1.8 1.8"
      />

      {/* Crescent & Guiding Star above the Quran */}
      <path
        d="M33.8 18.2C32.2 18.2 30.8 19.4 30.8 21C30.8 22.6 32.2 23.8 33.8 23.8C34.4 23.8 35 23.6 35.5 23.2C34.6 23.4 33.5 22.6 33.5 21C33.5 19.4 34.6 18.6 35.5 18.8C35 18.4 34.4 18.2 33.8 18.2Z"
        fill={`url(#${gradId}-gold)`}
      />
      <path
        d="M36.5 19.2L37 20.3L38.1 20.8L37 21.3L36.5 22.4L36 21.3L34.9 20.8L36 20.3L36.5 19.2Z"
        fill="#F0D898"
      />

      {/* Crossed Wooden Rehal (Quran Stand) Legs */}
      <path
        d="M21 48L44 33.5M43 48L20 33.5"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M25.5 47.5H38.5"
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Open Holy Quran (Mushaf) Pages */}
      {/* Left Cover & Page */}
      <path
        d="M32 30.5C28 28 22.5 27.5 17.5 29V40.5C22.5 39 28 39.5 32 42V30.5Z"
        fill={`url(#${gradId}-pages)`}
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Right Cover & Page */}
      <path
        d="M32 30.5C36 28 41.5 27.5 46.5 29V40.5C41.5 39 36 39.5 32 42V30.5Z"
        fill={`url(#${gradId}-pages)`}
        stroke={`url(#${gradId}-gold)`}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Subtle Script Lines on Left & Right Mushaf Pages */}
      <path
        d="M20.5 32.3C23.5 31.5 26.8 31.8 29.4 33M20.5 34.8C23.5 34 26.8 34.3 29.4 35.5M20.5 37.3C23.5 36.5 26.8 36.8 29.4 38"
        stroke="#123F32"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      <path
        d="M43.5 32.3C40.5 31.5 37.2 31.8 34.6 33M43.5 34.8C40.5 34 37.2 34.3 34.6 35.5M43.5 37.3C40.5 36.5 37.2 36.8 34.6 38"
        stroke="#123F32"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />

      {/* Center Spine Binding Accent */}
      <path
        d="M32 30.5V42.5"
        stroke="#9A7634"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Elegant Islamic Ornamental Divider
 */
export function IslamicDivider({ className = "my-6" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#C6A15B]/50 to-[#C6A15B]" />
      <IslamicStar className="w-4 h-4 text-[#C6A15B]" />
      <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#C6A15B]/50 to-[#C6A15B]" />
    </div>
  );
}
