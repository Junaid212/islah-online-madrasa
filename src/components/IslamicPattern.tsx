import React from 'react';

interface IslamicPatternProps {
  className?: string;
  variant?: 'rosette' | 'girih' | 'stars' | 'arch-border';
  opacity?: number;
  strokeColor?: string;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({
  className = '',
  variant = 'rosette',
  opacity = 0.05,
  strokeColor = '#C9A45C',
}) => {
  const reactId = React.useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const patternId = `islamic-geom-${variant}-${reactId}`;

  if (variant === 'arch-border') {
    return (
      <svg
        className={`w-full h-8 ${className}`}
        viewBox="0 0 1200 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        <path
          d="M0 32 C 50 8, 70 8, 120 32 C 170 8, 190 8, 240 32 C 290 8, 310 8, 360 32 C 410 8, 430 8, 480 32 C 530 8, 550 8, 600 32 C 650 8, 670 8, 720 32 C 770 8, 790 8, 840 32 C 890 8, 910 8, 960 32 C 1010 8, 1030 8, 1080 32 C 1130 8, 1150 8, 1200 32"
          stroke={strokeColor}
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    );
  }

  // Authentic 8-pointed star & Girih geometric pattern tile
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id={patternId}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed Islamic Star Tile */}
            <g stroke={strokeColor} strokeWidth="1" fill="none">
              {/* Outer square */}
              <rect x="0" y="0" width="80" height="80" strokeWidth="0.5" opacity="0.3" />
              {/* 45-degree rotated squares forming Khatam / 8-pointed star */}
              <polygon points="40,10 70,40 40,70 10,40" strokeWidth="1.2" />
              <polygon points="18.8,18.8 61.2,18.8 61.2,61.2 18.8,61.2" strokeWidth="1.2" />
              {/* Inner rosette diagonals */}
              <line x1="0" y1="0" x2="80" y2="80" strokeWidth="0.6" strokeDasharray="3 3" />
              <line x1="80" y1="0" x2="0" y2="80" strokeWidth="0.6" strokeDasharray="3 3" />
              {/* Central petal node */}
              <circle cx="40" cy="40" r="10" strokeWidth="0.8" />
              {/* Corner connector nodes */}
              <circle cx="0" cy="0" r="6" strokeWidth="0.8" />
              <circle cx="80" cy="0" r="6" strokeWidth="0.8" />
              <circle cx="0" cy="80" r="6" strokeWidth="0.8" />
              <circle cx="80" cy="80" r="6" strokeWidth="0.8" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

// Subtle ambient particle & light glow canvas (Unicorn Studio style atmosphere)
export const AmbientLightCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {/* Soft warm light bloom in top center */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C9A45C]/12 via-[#082D7B]/5 to-transparent rounded-full blur-3xl" />
      {/* Side emerald mist */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[#082D7B]/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-20 w-[400px] h-[400px] bg-[#C9A45C]/8 rounded-full blur-3xl" />
    </div>
  );
};

// Unified Hero Background Pattern component matching the Hero Section atmosphere
export interface HeroBgPatternProps {
  className?: string;
  isDark?: boolean;
  opacity?: number;
  strokeColor?: string;
  withAmbient?: boolean;
}

export const HeroBgPattern: React.FC<HeroBgPatternProps> = ({
  className = '',
  isDark = false,
  opacity,
  strokeColor,
  withAmbient = true,
}) => {
  const resolvedOpacity = opacity ?? (isDark ? 0.06 : 0.035);
  const resolvedStroke = strokeColor ?? (isDark ? '#C9A45C' : '#082D7B');

  return (
    <>
      {withAmbient && <AmbientLightCanvas className={className} />}
      <IslamicPattern
        opacity={resolvedOpacity}
        strokeColor={resolvedStroke}
        variant="rosette"
        className={className}
      />
    </>
  );
};

