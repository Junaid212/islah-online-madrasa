import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroBgPattern } from './IslamicPattern';

interface HeroSectionProps {
  onOpenTrialModal: () => void;
  onExploreCourses: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTrialModal,
  onExploreCourses,
  onOpenWhatsApp: _onOpenWhatsApp,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[110vh] lg:min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 lg:py-42  flex items-center justify-center overflow-hidden bg-[#061838]"
    >
      {/* Background Image: hero-bg2.webp - On mobile focused to 78% right, on PC centered cover */}
      <img
        className="absolute top-0 left-0 right-0 h-full w-full object-cover object-[78%_center] sm:object-center select-none pointer-events-none"
        src="/assets/img/Golden Arch, Mosque Skyline, and Lanterns.png"
        alt="Islah Online Madrasa"
      />

      {/* Mobile-Only Contrast Gradient on Left (Desktop is untouched) */}
      <div
        className="sm:hidden absolute inset-0 bg-gradient-to-r from-[#061838]/95 via-[#061838]/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero background: ambient lighting canvas + subtle Islamic 8-point star geometric backdrop */}
      <HeroBgPattern opacity={0.04} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">

        {/* ========================================================= */}
        {/* 1. PC / DESKTOP STRUCTURE (Preserved exactly as it was)   */}
        {/* ========================================================= */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column (Desktop 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Arabic Calligraphy Header - Smooth Landing Badge */}
            <div className="animate-landing-badge inline-flex items-center gap-2 sm:gap-3 mb-4 py-1 text-sm text-[#082D7B]/80 mx-auto lg:mx-0">
              <span className="font-arabic text-xs sm:text-xl text-[#c9a45c] font-bold tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span className="h-3.5 w-px bg-[#c9a45c]/80" aria-hidden="true" />
              <span className="text-[8px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A45C] font-semibold">
                Islah Online Madrasa
              </span>
            </div>

            {/* Main Headline - Smooth Landing Headline */}
            <h1 className="animate-landing-headline text-4xl sm:text-5xl lg:text-6xl text-[#ffffff] font-black tracking-tight leading-[1.15] mb-5 sm:mb-6 text-balance">
              More Than Lessons. <br />
              <span className="text-[#c9a45c]">A Foundation for Life.</span>
            </h1>

            {/* Supporting Value Proposition - Smooth Landing Subtext */}
            <p className="animate-landing-subtext font-sans text-sm sm:text-base lg:text-xl text-[#E8EDF2]/80 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8 mt-2 lg:mt-0">
              Quality Online Islamic Education for Children — <br className="sm:hidden" />
              Learn, Understand & Live Islam.
            </p>

            {/* Primary & Secondary CTAs - Smooth Landing Actions */}
            <div className="animate-landing-actions flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenTrialModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-4 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#C9A45C] hover:bg-[#1B2CC1] active:scale-[0.98] rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#082D7B] whitespace-nowrap"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#082D7B] shrink-0" />
              </button>

              <button
                type="button"
                onClick={onExploreCourses}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-[#082D7B] bg-white hover:bg-[#F6F1E7] border border-[#082D7B]/20 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#082D7B] shrink-0" />
              </button>
            </div>

            {/* Trust statement: "Qur'an • Sunnah • Character • Confidence" - Smooth Landing Trust */}
            <div className="animate-landing-trust pt-5 sm:pt-6 border-t border-[#C9A45C]/80 w-full flex justify-center lg:justify-start">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-[#C9A45C]/85 font-medium">
                <span className="text-[#C9A45C] font-serif text-base">✦</span>
                <span className="tracking-wide">Qur'an</span>
                <span className="text-[#C9A45C]/30">·</span>
                <span className="tracking-wide">Sunnah</span>
                <span className="text-[#C9A45C]/30">·</span>
                <span className="tracking-wide">Character</span>
                <span className="text-[#C9A45C]/30">·</span>
                <span className="tracking-wide">Confidence</span>
              </div>
            </div>

          </div>

          {/* Spacer column (Desktop Only) to reserve space for the attached right image */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" aria-hidden="true" />

        </div>

        {/* ========================================================= */}
        {/* 2. MOBILE STRUCTURE (Matching mobile reference image)     */}
        {/* ========================================================= */}
        <div className="block sm:hidden flex flex-col items-start text-left">

          {/* Arabic Calligraphy Header - Smooth Landing Badge */}
          <div className="animate-landing-badge inline-flex items-center gap-2 mb-3 py-1 text-xs text-[#c9a45c] select-none">
            <span className="font-arabic text-xs font-bold tracking-wide">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
            <span className="h-3.5 w-px bg-[#c9a45c]/80" aria-hidden="true" />
            <span className=" text-[8px] uppercase tracking-[0.22em] text-[#C9A45C] font-semibold">
              Islah Online Madrasa
            </span>
          </div>

          {/* Mobile 4-line Headline - Smooth Landing Headline */}
          <h1 className="animate-landing-headline text-4xl font-extrabold tracking-tight leading-[1.12] mb-3 text-left">
            <span className="block text-white">More Than</span>
            <span className="block text-white">Lessons.</span>
            <span className="block text-[#C9A45C] mt-1">A Foundation</span>
            <span className="block text-[#C9A45C]">for Life.</span>
          </h1>

          {/* Mobile Narrow Subtitle - Smooth Landing Subtext */}
          <p className="animate-landing-subtext font-sans text-xs text-[#E8EDF2]/80 font-normal leading-relaxed max-w-[220px] mb-6 text-left">
            Quality Online Islamic Education for Children — Learn, Understand & Live Islam.
          </p>

          {/* Mobile Stacked Pill Buttons - Smooth Landing Actions */}
          <div className="animate-landing-actions flex flex-col items-start gap-2.5 mb-6 w-full">
            <button
              type="button"
              onClick={onOpenTrialModal}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-bold text-[#061838] bg-[#F3A867] hover:bg-white active:scale-[0.98] rounded-[10px] transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Book a Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#082D7B] shrink-0" />
            </button>

            <button
              type="button"
              onClick={onExploreCourses}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-bold text-[#061838] bg-white hover:bg-[#F3A867] active:scale-[0.98] rounded-[10px] transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore Courses</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#082D7B] shrink-0" />
            </button>
          </div>

          {/* Mobile Trust Line & Indicators - Smooth Landing Trust */}
          <div className="animate-landing-trust pt-4 border-t border-[#C9A45C]/35 w-full max-w-[260px]">
            <div className="flex items-center gap-2 text-[10px] text-[#C9A45C] font-medium tracking-wide">
              <span className="text-xs">✦</span>
              <span>Qur'an</span>
              <span className="opacity-40">·</span>
              <span>Sunnah</span>
              <span className="opacity-40">·</span>
              <span>Character</span>
              <span className="opacity-40">·</span>
              <span>Confidence</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
