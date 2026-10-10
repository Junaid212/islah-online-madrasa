import React from 'react';
import { Home } from 'lucide-react';
import { Link } from '../router';
import { HeroBgPattern } from './IslamicPattern';

interface InnerBannerProps {
  title: string;
  breadcrumb?: string;
  subtitle?: string;
}

export const InnerBanner: React.FC<InnerBannerProps> = ({
  title,
  breadcrumb = title,
  subtitle,
}) => {
  return (
    <section
      className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 bg-[#0D2D72] text-white text-center overflow-hidden"
      style={{
        borderBottomLeftRadius: '50% clamp(65px, 8vw, 110px)',
        borderBottomRightRadius: '50% clamp(65px, 8vw, 110px)',
      }}
    >
      {/* Subtle Islamic Geometric watermark in the background */}
      <HeroBgPattern isDark opacity={0.06} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Breadcrumb Capsule Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-sm mb-4 sm:mb-5">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 opacity-90" />
            <span className="font-normal">Home</span>
          </Link>
          <span className="text-white/40 text-[10px] select-none">&gt;</span>
          <span className="text-[#E5A83B] font-semibold">{breadcrumb}</span>
        </div>

        {/* Inner Page Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4 text-balance">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>
        )}

      </div>
    </section>
  );
};
