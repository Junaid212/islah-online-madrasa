import React, { useState } from 'react';
import { Play, Volume2, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { STUDENT_PERFORMANCE_ITEMS, StudentPerformanceItem } from '../data/madrasaData';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

interface StudentPerformanceProps {
  onSelectPerformance: (item: StudentPerformanceItem) => void;
}

export const StudentPerformance: React.FC<StudentPerformanceProps> = ({ onSelectPerformance }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Quran Recitation', 'Hifz', 'Tajweed', 'Islamic Activities', 'Student Reflections'];

  const filteredItems = selectedCategory === 'All'
    ? STUDENT_PERFORMANCE_ITEMS
    : STUDENT_PERFORMANCE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="student-progress-gallery" className="relative py-20 lg:py-28 bg-[#FBF9F5] overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
              Authentic Student Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-bold tracking-tight text-balance">
              Watch Their Learning <br className="hidden sm:inline" />
              <span className="">Come to Life</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
              Listen to real students reciting with measured Tajweed, completing Hifz milestones, and sharing reflections.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          {/* <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${selectedCategory === cat
                  ? 'bg-[#082D7B] text-white shadow-xs'
                  : 'bg-white text-[#151918]/70 hover:text-[#082D7B] border border-[#082D7B]/10'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div> */}
        </div>

        {/* Vertical Video Cards Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPerformance(item)}
              className="group relative flex flex-col justify-between rounded-xl overflow-hidden bg-[#001E3C] border border-[#082D7B]/20 hover:border-[#C9A45C]/80 shadow-md hover:shadow-xl transition-all duration-300 aspect-[9/15] cursor-pointer"
            >
              {/* Background Islamic Pattern & Atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-10" />
              <IslamicPattern opacity={0.12} strokeColor="#C9A45C" variant="stars" />

              {/* Top Card Bar */}
              <div className="relative z-20 p-4 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-white/20 backdrop-blur-md text-[10px] font-semibold text-white">
                  {item.category}
                </span>
                {/* <span className="text-[11px] font-mono text-[#C9A45C] tabular-nums">
                  {item.duration}
                </span> */}
              </div>

              {/* Central Play Button */}
              <div className="relative z-20 my-auto flex flex-col items-center justify-center p-4">
                <div className="w-14 h-14 rounded-full bg-[#C9A45C] text-[#001E3C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
                {/* <span className="text-[11px] text-white/80 mt-2 font-medium">
                  Watch Recitation
                </span> */}
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-20 p-4 text-left">
                <p className="text-[11px] text-[#C9A45C] font-semibold tracking-wide uppercase">
                  {item.surahOrTopic}
                </p>
                <h4 className="text-base text-white font-medium line-clamp-2 mt-0.5">
                  {item.title}
                </h4>
                {/* <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white/60">
                  <span>{item.studentName}</span>
                  <span>{item.ageLevel}</span>
                </div> */}
              </div>

            </div>
          ))}
        </div>

        {/* Note on Student Privacy */}
        {/* <div className="mt-8 text-center text-xs text-[#151918]/60">
          * Student names and identifying details are respectfully protected according to our strict safeguarding and parental consent policies.
        </div> */}

      </div>
    </section>
  );
};
