import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BookCheck, 
  UserCheck, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight,
  Star
} from 'lucide-react';
import { TRUST_POINTS } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

const CARD_CONFIGS = [
  {
    bg: '#0D2D72', // Dark navy matching site colors
    isCoral: false,
    starsColor: '#E25C4B', // Coral red stars matching reference screenshot
    accentPill: 'bg-white/10 text-white/90 border border-white/15',
    iconBg: 'bg-[#0B7EE2]/20 text-white',
    rotation: -7,
    mobileRotation: -1, // Almost straight at top
    yOffset: 16,
    subtext: 'Tajweed Specialists',
    location: 'GCC & Global Mentors',
  },
  {
    bg: '#0B7EE2', // Vibrant blue matching site colors
    isCoral: true,
    starsColor: '#061838', // Dark stars matching reference screenshot
    accentPill: 'bg-black/15 text-white/95 border border-black/10',
    iconBg: 'bg-white/20 text-white',
    rotation: 5,
    mobileRotation: -6, // Tilted left matching reference screenshot
    yOffset: -12,
    subtext: 'Milestone Framework',
    location: 'Qur\'an & Sunnah Aligned',
  },
  {
    bg: '#0D2D72', // Dark navy
    isCoral: false,
    starsColor: '#E25C4B',
    accentPill: 'bg-white/10 text-white/90 border border-white/15',
    iconBg: 'bg-[#0B7EE2]/20 text-white',
    rotation: -4,
    mobileRotation: 5, // Tilted right matching reference screenshot
    yOffset: 8,
    subtext: '1-on-1 Focus',
    location: 'Individual Pace & Care',
  },
  {
    bg: '#0B7EE2', // Vibrant blue
    isCoral: true,
    starsColor: '#061838',
    accentPill: 'bg-black/15 text-white/95 border border-black/10',
    iconBg: 'bg-white/20 text-white',
    rotation: 6,
    mobileRotation: -5, // Tilted left matching reference screenshot
    yOffset: -8,
    subtext: 'Safeguarded Classes',
    location: 'Parent Monitored Environment',
  },
  {
    bg: '#0D2D72', // Dark navy
    isCoral: false,
    starsColor: '#E25C4B',
    accentPill: 'bg-white/10 text-white/90 border border-white/15',
    iconBg: 'bg-[#0B7EE2]/20 text-white',
    rotation: -5,
    mobileRotation: 4, // Tilted right matching reference screenshot
    yOffset: 14,
    subtext: 'Weekly Milestones',
    location: 'Voice Notes & Progress Reports',
  },
];

export const TrustStrip: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Default to card 2 (index 1) active on mobile matching the reference image where card 2 is elevated
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(1);

  const icons = [
    Award,
    BookCheck,
    UserCheck,
    ShieldCheck,
    TrendingUp,
  ];

  return (
    <section className="relative py-14 sm:py-20 lg:py-24 bg-[#F9F6EF]">
      {/* Background Islamic Pattern Tile */}
      <HeroBgPattern opacity={0.03} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Lead Text */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-1">
            Our Foundation
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#082D7B] font-bold tracking-tight">
            Learning with purpose. Growing with confidence.
          </h2>
        </div>

        {/* Mobile View: Vertical Cascading Overlapping Fanned Card Stack (Matching Reference Screenshot) */}
        <div className="lg:hidden w-full relative px-2 py-4">
          <div className="relative max-w-[340px] xs:max-w-[355px] mx-auto flex flex-col items-center">
            {TRUST_POINTS.map((point, index) => {
              const config = CARD_CONFIGS[index % CARD_CONFIGS.length];
              const isActive = activeCardIndex === index;
              // Stacking order: base top-down, but active card is promoted to top (z-50)
              const baseZ = 40 - index;
              const zIndex = isActive ? 50 : baseZ;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 35, rotate: config.mobileRotation }}
                  whileInView={{ opacity: 1, y: 0, rotate: config.mobileRotation }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                  style={{
                    backgroundColor: config.bg,
                    zIndex,
                    rotate: isActive ? 0 : config.mobileRotation,
                  }}
                  className={`relative w-full rounded-[26px] p-5 sm:p-6 text-white cursor-pointer transition-all duration-300 shadow-[0_14px_36px_rgba(0,0,0,0.28)] border border-white/15 select-none ${
                    index > 0 ? '-mt-14 xs:-mt-16' : ''
                  } ${isActive ? 'scale-[1.03] ring-2 ring-white/40 shadow-[0_22px_50px_rgba(0,0,0,0.45)]' : 'hover:scale-[1.01]'}`}
                >
                  {/* Top Header: 5 Stars + Brand Pill with Chevron Arrow */}
                  {/* <div className="flex items-center justify-between gap-2 mb-3"> */}
                    {/* 5 Filled Stars */}
                    {/* <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: config.starsColor }}
                        />
                      ))}
                    </div> */}

                    {/* Top Right Pill with Brand & Chevron Arrow */}
                    {/* <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${config.accentPill}`}
                    >
                      <span>ISLAH MADRASA</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                        <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    </div>
                  </div> */}

                  {/* Middle Content: Description Quote Text */}
                  <div className="my-auto py-1.5">
                    <p className="font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>

                  {/* Bottom Footer: Title (Author) & Location */}
                  <div className="pt-3 mt-2 border-t border-white/15">
                    <h4 className="font-sans text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                      {point.title}
                    </h4>
                    <p className="font-sans text-[11px] text-white/70 mt-0.5">
                      {config.location}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Overlapping Horizontal Fanned Card Deck (Preserved PC Structure) */}
        <div className="hidden lg:flex w-full justify-center overflow-visible py-10 px-6">
          <div className="relative flex items-center justify-center -space-x-20 xl:-space-x-24">
            {TRUST_POINTS.map((point, index) => {
              const Icon = icons[index % icons.length];
              const config = CARD_CONFIGS[index % CARD_CONFIGS.length];
              const isHovered = hoveredIndex === index;
              const hasHover = hoveredIndex !== null;

              return (
                <motion.div
                  key={point.title}
                  initial={{ x: -280, opacity: 0, rotate: config.rotation - 12 }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    rotate: config.rotation,
                    y: config.yOffset,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    scale: 1.08,
                    y: config.yOffset - 28,
                    rotate: 0,
                    zIndex: 50,
                    transition: { type: 'spring', stiffness: 350, damping: 25 },
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  style={{
                    backgroundColor: config.bg,
                    transformOrigin: 'bottom center',
                    zIndex: isHovered ? 50 : index + 10,
                  }}
                  className={`relative w-[245px] xl:w-[255px] h-[320px] rounded-3xl p-6 lg:p-7 flex flex-col justify-between text-white cursor-pointer transition-shadow duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)] border border-white/10 ${
                    hasHover && !isHovered ? 'opacity-90' : 'opacity-100'
                  }`}
                >
                  {/* Top Header: 5 Stars + Brand Pill with Chevron */}
                  {/* <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className="w-3.5 h-3.5 fill-current"
                          style={{ color: config.starsColor }}
                        />
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm ${config.accentPill}`}
                    >
                      <span>ISLAH</span>
                      <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                        <ChevronRight className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    </div>
                  </div> */}

                  {/* Middle Content: Icon + Title + Description */}
                  <div className="my-auto py-2">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md shadow-inner ${config.iconBg}`}
                    >
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold leading-snug mb-2.5 text-[#c9a45c] tracking-tight">
                      {point.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-[13px] text-white/85 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>

                  {/* Bottom Footer Metadata */}
                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[10px] sm:text-[11px] text-white/70">
                    <span className="font-medium text-[#c9a45c]/90 truncate mr-2">
                      {config.subtext}
                    </span>
                    <span className="text-[10px] text-[#c9a45c]/60 shrink-0">
                      {config.location}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
