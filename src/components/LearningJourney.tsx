import React, { useState } from 'react';
import { LEARNING_JOURNEY_STEPS } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';
import { Sparkles, ArrowRight } from 'lucide-react';

interface LearningJourneyProps {
  onOpenTrialModal: () => void;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({ onOpenTrialModal }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="relative py-20 lg:py-28 bg-[#F6F1E7]/40 border-y border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            The Student Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
            From First Letter to <br />
            <span className="italic">Lifelong Connection</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            A continuous, nurturing pathway engineered to build solid mastery and warm confidence at every milestone.
          </p>
        </div>

        {/* Desktop View: Horizontal Timeline & Journey Cards */}
        <div className="hidden lg:block">

          {/* Step Connective Line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#082D7B]/15 -translate-y-1/2 z-0" />

            <div className="relative z-10 grid grid-cols-5 gap-4">
              {LEARNING_JOURNEY_STEPS.map((item, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer text-center focus-visible:outline-none"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-semibold transition-all duration-300 border-2 ${isActive
                        ? 'bg-[#082D7B] text-white border-[#C9A45C] shadow-md scale-110'
                        : isPast
                          ? 'bg-[#F6F1E7] text-[#082D7B] border-[#082D7B]/40'
                          : 'bg-white text-[#151918]/40 border-[#082D7B]/20 group-hover:border-[#082D7B]'
                        }`}
                    >
                      {item.step}
                    </div>
                    <span
                      className={`mt-3 text-sm font-semibold tracking-wide transition-colors ${isActive ? 'text-[#082D7B]' : 'text-[#151918]/60 group-hover:text-[#082D7B]'
                        }`}
                    >
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#151918]/50 mt-0.5 max-w-[130px] leading-tight">
                      {item.subtitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Feature Box */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#082D7B]/15 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#082D7B]/6 text-xs text-[#082D7B] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Phase {LEARNING_JOURNEY_STEPS[activeStepIndex].step} in Depth</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#082D7B] font-semibold mb-2">
                {LEARNING_JOURNEY_STEPS[activeStepIndex].title} — {LEARNING_JOURNEY_STEPS[activeStepIndex].subtitle}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#151918]/80 leading-relaxed">
                {LEARNING_JOURNEY_STEPS[activeStepIndex].description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-3">
              <button
                onClick={onOpenTrialModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-medium text-white bg-[#082D7B] hover:bg-[#001E3C] rounded-md transition-all shadow-xs cursor-pointer whitespace-nowrap"
              >
                <span>Start Phase 01 Free</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
              </button>
              <span className="text-[11px] text-[#151918]/50">
                1-on-1 trial class with teacher
              </span>
            </div>
          </div>

        </div>

        {/* Mobile View: Clean Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l-2 border-[#082D7B]/20 space-y-8 ml-3">
          {LEARNING_JOURNEY_STEPS.map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[33px] top-0 w-8 h-8 rounded-full bg-[#082D7B] text-white flex items-center justify-center font-serif text-xs font-semibold border-2 border-[#FBF9F5]">
                {item.step}
              </div>

              <div className="bg-white rounded-xl p-5 border border-[#082D7B]/10 shadow-2xs">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-serif text-lg text-[#082D7B] font-semibold">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#C9A45C] font-medium">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-xs text-[#151918]/75 leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
