import React from 'react';
import { ArrowRight, MessageCircle, CalendarCheck, ShieldCheck, Heart } from 'lucide-react';
import { MADRASA_CONFIG } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

interface AdmissionSectionProps {
  onOpenTrialModal: () => void;
  onOpenWhatsApp: () => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#082D7B] text-white overflow-hidden">
      {/* Hero background pattern with dark theme */}
      <HeroBgPattern isDark />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Top Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9A45C]/40 text-xs text-[#C9A45C] font-semibold mb-6">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Simple 2-Minute Admission</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight mb-6 text-balance">
            Give Your Child <br />
            <span className="italic text-[#F6F1E7]">a Stronger Foundation.</span>
          </h2>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            Start with a conversation. Discover the right learning path for your child in an obligation-free, one-on-one trial class with our qualified teachers.
          </p>

          {/* Major Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onOpenTrialModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#001E3C] bg-[#C9A45C] hover:bg-[#dfba74] active:scale-[0.98] rounded-md transition-all shadow-lg cursor-pointer"
            >
              <span>Book a Free Trial</span>
              <ArrowRight className="w-4 h-4 text-[#001E3C]" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 rounded-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* 3 Reassurance Badges */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A45C] text-sm">✓</span>
              <span>100% Free Initial Diagnostic</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A45C] text-sm">✓</span>
              <span>Flexible Timezone Slots</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#C9A45C] text-sm">✓</span>
              <span>Safe Home Environment</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
