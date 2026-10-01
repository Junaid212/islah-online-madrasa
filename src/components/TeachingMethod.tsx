import React, { useState } from 'react';
import { TEACHING_METHOD_STEPS } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';
import { Check, ClipboardList, Target, UserCheck, CalendarCheck, MessageSquare } from 'lucide-react';

export const TeachingMethod: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    ClipboardList,
    Target,
    UserCheck,
    CalendarCheck,
    MessageSquare,
  ];

  return (
    <section id="methodology" className="relative py-20 lg:py-28 bg-[#FBF9F5] overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
            Pedagogical Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
            How Your Child Learns: <br />
            <span className="italic">A Thoughtful 5-Step Method</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
            Designed to eliminate the frustration of rigid, overcrowded classes and replace it with individualized support.
          </p>
        </div>

        {/* 5 Steps Interactive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TEACHING_METHOD_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            const isHighlighted = idx === activeStep;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col justify-between p-6 rounded-xl border transition-all duration-300 cursor-pointer ${isHighlighted
                    ? 'bg-[#082D7B] text-white border-[#C9A45C]/40 shadow-lg -translate-y-1'
                    : 'bg-white hover:bg-[#F6F1E7]/50 text-[#151918] border-[#082D7B]/10 hover:border-[#082D7B]/25'
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-serif text-lg font-bold tabular-nums ${isHighlighted ? 'text-[#C9A45C]' : 'text-[#082D7B]'
                        }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center ${isHighlighted ? 'bg-white/10 text-[#C9A45C]' : 'bg-[#082D7B]/8 text-[#082D7B]'
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3
                    className={`font-serif text-lg font-semibold mb-1 ${isHighlighted ? 'text-white' : 'text-[#082D7B]'
                      }`}
                  >
                    {step.name}
                  </h3>

                  <p
                    className={`text-xs font-medium tracking-wide mb-3 ${isHighlighted ? 'text-[#C9A45C]' : 'text-[#082D7B]/70'
                      }`}
                  >
                    {step.summary}
                  </p>

                  <p
                    className={`text-xs leading-relaxed ${isHighlighted ? 'text-white/80' : 'text-[#151918]/70'
                      }`}
                  >
                    {step.details}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-current/10 flex items-center justify-between text-[11px]">
                  <span className={isHighlighted ? 'text-white/60' : 'text-[#151918]/50'}>
                    Stage {step.number}
                  </span>
                  <span
                    className={`font-semibold ${isHighlighted ? 'text-[#C9A45C]' : 'text-[#082D7B]'
                      }`}
                  >
                    {isHighlighted ? 'Active Focus' : 'Learn more'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
