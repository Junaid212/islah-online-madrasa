import React from 'react';

interface IslahLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'horizontal' | 'badge';
  theme?: 'dark' | 'light' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  asImage?: boolean;
}

export const IslahLogo: React.FC<IslahLogoProps> = ({
  className = '',
  variant = 'horizontal',
  theme = 'emerald',
  size = 'md',
  asImage = false,
}) => {
  // Primary brand colors from the official identity
  const primaryColor = theme === 'dark' ? '#F6F1E7' : '#082D7B';
  const blueColor = '#1A4D8F';
  const cyanColor = '#29B6F6';
  const goldColor = '#C9A45C';
  const subtextColor = theme === 'dark' ? '#C9A45C' : '#082D7B';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  const badgeSizes = {
    sm: 'w-16 h-16',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };

  const textSizes = {
    sm: { title: 'text-sm', sub: 'text-[9px] tracking-[0.25em]' },
    md: { title: 'text-base', sub: 'text-[10px] tracking-[0.28em]' },
    lg: { title: 'text-xl', sub: 'text-xs tracking-[0.3em]' },
    xl: { title: 'text-3xl', sub: 'text-sm tracking-[0.35em]' },
  };

  // If badge variant is requested, render the 8-pointed star badge image
  if (variant === 'badge' || asImage) {
    return (
      <div className={`inline-flex items-center justify-center select-none ${className}`}>
        <img
          src="/logo-badge.svg"
          alt="Islah Online Madrasa"
          className={`${badgeSizes[size]} object-contain drop-shadow-[0_4px_12px_rgba(8,45,123,0.12)] transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    );
  }

  // Re-creation of the official Islah Online Madrasa icon:
  // Open book + pen nib + graduation cap
  const emblemSvg = (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      aria-label="Islah Online Madrasa Emblem"
    >
      {/* Graduation Cap atop the fountain pen */}
      <path
        d="M100 24L138 38L100 52L62 38L100 24Z"
        fill={theme === 'dark' ? goldColor : blueColor}
      />
      <path
        d="M80 45V55C80 62 120 62 120 55V45"
        stroke={theme === 'dark' ? goldColor : blueColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Tassel */}
      <path
        d="M130 39V52C130 55 133 57 135 57"
        stroke={theme === 'dark' ? goldColor : blueColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Central Fountain Pen Nib (Al-Qalam) */}
      <path
        d="M100 56L122 88L108 126L100 134L92 126L78 88L100 56Z"
        fill={theme === 'dark' ? '#E2D7C3' : blueColor}
      />
      {/* Pen nib center slit & breather hole */}
      <circle cx="100" cy="94" r="3" fill="#FFFFFF" />
      <line x1="100" y1="94" x2="100" y2="132" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Book Center Spine and Base Curves */}
      <path
        d="M100 132C118 140 148 145 174 136C152 147 122 148 100 142C78 148 48 147 26 136C52 145 82 140 100 132Z"
        fill={theme === 'dark' ? goldColor : blueColor}
      />

      {/* Right Book Pages (Layered Knowledge) */}
      <path
        d="M104 126C120 105 146 88 178 80V124C148 131 122 138 104 133V126Z"
        fill={theme === 'dark' ? '#FFFFFF' : blueColor}
      />
      <path
        d="M108 122C124 100 148 88 174 84"
        stroke={cyanColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M112 130C128 120 152 114 172 112"
        stroke={cyanColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M104 136C124 140 152 136 178 126"
        stroke={theme === 'dark' ? goldColor : blueColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left Book Pages (Symmetrical Harmony) */}
      <path
        d="M96 126C80 105 54 88 22 80V124C52 131 78 138 96 133V126Z"
        fill={theme === 'dark' ? '#FFFFFF' : blueColor}
      />
      <path
        d="M92 122C76 100 52 88 26 84"
        stroke={cyanColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M88 130C72 120 48 114 28 112"
        stroke={cyanColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M96 136C76 140 48 136 22 126"
        stroke={theme === 'dark' ? goldColor : blueColor}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Foundation Arc Line */}
      <path
        d="M32 148C74 162 126 162 168 148"
        stroke={theme === 'dark' ? goldColor : blueColor}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{emblemSvg}</div>;
  }

  if (variant === 'full') {
    return (
      <div className={`items-center text-center ${className}`}>
        {emblemSvg}
        <div className="mt-2 items-center">
          <span
            className={`font-sans font-extrabold uppercase tracking-[0.24em] ${textSizes[size].title}`}
            style={{ color: primaryColor }}
          >
            ISLAH 
          </span>
          <span
            className={`font-sans font-bold uppercase ${textSizes[size].sub}`}
            style={{ color: subtextColor }}
          >
            ONLINE MADRASA
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal' variant for modern clean top navbar and footers
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {emblemSvg}
      <div className="flex flex-col leading-none">
        <span
          className={`font-sans font-extrabold uppercase tracking-[0.2em] text-[#082D7B] ${textSizes[size].title}`}
          style={{ color: primaryColor }}
        >
          ISLAH
        </span>
        <span
          className={`font-sans font-bold uppercase mt-1 ${textSizes[size].sub}`}
          style={{ color: subtextColor }}
        >
          ONLINE MADRASA
        </span>
      </div>
    </div>
  );
};
