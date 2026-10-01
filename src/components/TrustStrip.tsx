import React from 'react';
import { Award, BookCheck, UserCheck, ShieldCheck, TrendingUp } from 'lucide-react';
import { TRUST_POINTS } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

export const TrustStrip: React.FC = () => {
  const icons = [
    Award,
    BookCheck,
    UserCheck,
    ShieldCheck,
    TrendingUp,
  ];

  return (
    <section className="relative py-12 bg-[#F6F1E7]/80 border-y border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Lead Text */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-1">
            Our Foundation
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#082D7B] font-normal">
            Learning with purpose. Growing with confidence.
          </h2>
        </div>

        {/* 5 Trust Points Grid - 2 cards in a row on mobile and tablet, 5 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-6 lg:gap-8 ">
          {TRUST_POINTS.map((point, index) => {
            const Icon = icons[index % icons.length];
            const isLastOdd = index === TRUST_POINTS.length - 1;
            return (
              <div
                key={point.title}
                className={`flex flex-col items-center text-center p-3.5 sm:p-5 rounded-xl bg-white/60 hover:bg-white/90 border border-[#082D7B]/50 transition-all duration-200 ${
                  isLastOdd ? 'col-span-2 lg:col-span-1 max-w-sm sm:max-w-md mx-auto w-full' : ''
                }`}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#082D7B]/8 text-[#082D7B] flex items-center justify-center mb-2.5 sm:mb-3">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#082D7B]" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-[#082D7B] mb-1">
                  {point.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#151918]/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
