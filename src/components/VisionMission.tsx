import React, { useState } from 'react';
import { Eye, Compass, Sparkles, BookOpen } from 'lucide-react';
import { HeroBgPattern } from './IslamicPattern';

export const VisionMission: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'vision' | 'mission'>('both');

  return (
    <section className="relative py-20 lg:py-28 bg-[#082D7B] text-white overflow-hidden">
      {/* Hero background pattern with dark theme */}
      <HeroBgPattern isDark />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-[#C9A45C]/30 text-xs text-[#C9A45C] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            Vision & Mission
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/70 mt-3">
            Anchored in divine purpose, serving Muslim families with dedication and excellence.
          </p>
        </div>

        {/* Immersive Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* VISION CARD */}
          <div className="relative group rounded-2xl bg-[#082923] border border-[#C9A45C]/25 p-8 sm:p-12 shadow-xl hover:border-[#C9A45C]/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#C9A45C]/15 border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C]">
                <Eye className="w-6 h-6 text-[#C9A45C]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                Our Vision
              </span>
            </div>

            <div className="font-arabic text-2xl text-[#C9A45C] mb-4">
              رُؤْيَتُنَا
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug mb-6 text-balance">
              "To nurture a generation connected to the Qur'an, grounded in authentic Islamic knowledge and confident in living their faith."
            </h3>

            <p className="text-sm text-white/75 leading-relaxed font-sans pt-6 border-t border-white/10">
              We envision Muslim youth who carry the words of Allah in their chests with clarity and joy, equipped with righteous character to thrive in modern society while remaining steadfast in their religion.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="relative group rounded-2xl bg-[#082923] border border-[#C9A45C]/25 p-8 sm:p-12 shadow-xl hover:border-[#C9A45C]/50 transition-all duration-300">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#C9A45C]/15 border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C]">
                <Compass className="w-6 h-6 text-[#C9A45C]" />
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                Our Mission
              </span>
            </div>

            <div className="font-arabic text-2xl text-[#C9A45C] mb-4">
              رِسَالَتُنَا
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug mb-6 text-balance">
              "To make quality Islamic education accessible, structured and engaging for children and families through trusted online learning."
            </h3>

            <p className="text-sm text-white/75 leading-relaxed font-sans pt-6 border-t border-white/10">
              Our mission is realized through structured syllabi, compassionate teachers, flexible one-on-one sessions, and transparent parent partnerships that turn every home into a sanctuary of Islamic learning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
