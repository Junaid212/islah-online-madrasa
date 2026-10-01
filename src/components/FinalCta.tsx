import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { HeroBgPattern } from './IslamicPattern';

interface FinalCtaProps {
  onOpenTrialModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#001E3C] text-white overflow-hidden flex items-center justify-center">
      <HeroBgPattern isDark opacity={0.08} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        {/* Subtle decorative Islamic arch element */}
        <div className="w-16 h-1 bg-[#C9A45C] mx-auto mb-8 rounded-full" />

        <div className="font-arabic text-2xl sm:text-3xl text-[#C9A45C] mb-6">
          وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.15] mb-8 text-balance">
          Begin the Journey. <br />
          Build the Foundation. <br />
          <span className="italic text-[#DFBA74]">Grow With the Qur'an.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
          Give your child the gift of authentic knowledge, graceful character, and a heart illuminated by the divine words.
        </p>

        <button
          onClick={onOpenTrialModal}
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-[#001E3C] bg-[#C9A45C] hover:bg-[#dfba74] active:scale-[0.98] rounded-md transition-all shadow-xl hover:shadow-2xl cursor-pointer"
        >
          <span>Book a Free Trial</span>
          <ArrowRight className="w-4 h-4 text-[#001E3C]" />
        </button>

        <p className="text-xs text-white/40 mt-6 tracking-wide">
          No credit card required · Free consultation & friendly assessment
        </p>

      </div>
    </section>
  );
};
