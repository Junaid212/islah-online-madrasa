import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Users, Sparkles, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { COURSES, Course } from '../data/madrasaData';
import { HeroBgPattern } from './IslamicPattern';

interface CoursesSectionProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp?: () => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'quran' | 'islamic-studies'>('all');

  const filteredCourses = COURSES.filter((course) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'quran') {
      return ['noorani-qaida', 'quran-reading', 'quran-memorisation', 'tajweed-mastery'].includes(course.id);
    }
    if (activeFilter === 'islamic-studies') {
      return ['islamic-studies', 'daily-duas', 'salah-manners', 'arabic-basics'].includes(course.id);
    }
    return true;
  });

  return (
    <section id="courses" className="relative py-16 lg:py-18 bg-[#0D2D72] text-white overflow-hidden">
      {/* Subtle Islamic Geometric watermark for depth */}
      <HeroBgPattern isDark opacity={0.06} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header & Segmented Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#C9A45C] font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Structured Curriculum</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Learning Paths Designed to{' '}
              <span className="italic font-serif text-[#E5A83B]">Grow With Your Child</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-white/80 mt-3 leading-relaxed max-w-xl font-normal">
              From foundational letter articulation to measured Tajweed and deep Islamic character—discover structured milestones tailored to every child's age and ability.
            </p>
          </div>

          {/* Minimal Pill Segmented Filter */}
          <div className="inline-flex p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shrink-0 self-start lg:self-auto shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C9A45C] text-[#082D7B] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              All Programs ({COURSES.length})
            </button>
            <button
              onClick={() => setActiveFilter('quran')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeFilter === 'quran'
                  ? 'bg-[#C9A45C] text-[#082D7B] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Qur'an & Tajweed
            </button>
            <button
              onClick={() => setActiveFilter('islamic-studies')}
              className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
                activeFilter === 'islamic-studies'
                  ? 'bg-[#C9A45C] text-[#082D7B] shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Studies & Manners
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="group relative rounded-2xl bg-white/[0.06] hover:bg-white/[0.10] backdrop-blur-md border border-white/12 hover:border-[#C9A45C]/50 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
            >
              {/* Subtle top gold accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Level & Age Header Badge */}
                {/* <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#C9A45C]/15 text-[#E5A83B] border border-[#C9A45C]/25">
                    {course.level}
                  </span>
                  <span className="text-xs text-white/60 font-medium">
                    {course.ageGroup}
                  </span>
                </div> */}

                {/* Course Title & Arabic Subtitle */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-[#F3D797] transition-colors leading-snug">
                  {course.name}
                </h3>

                {course.arabicName && (
                  <p className="font-serif text-xs text-[#C9A45C]/80 mb-3 tracking-wide">
                    {course.arabicName}
                  </p>
                )}

                {/* Short Description */}
                <p className="font-sans text-xs sm:text-sm text-white/75 leading-relaxed mb-6 font-normal">
                  {course.shortDescription}
                </p>

                {/* Parameter Details: Format and Duration */}
                <div className="pt-4 border-t border-white/10 space-y-2 mb-6 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span className="truncate">{course.format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="text-xs font-semibold text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Syllabus Details
                </button>

                <button
                  onClick={() => onOpenTrialModal(course.name)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white rounded-full transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  <span>Book Trial</span>
                  <ArrowRight className="w-3 h-3 text-[#082D7B]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Minimal Helper Banner */}
        {/* <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
              Unsure which program is right for your child?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
              Book a complimentary 1-on-1 assessment. Our senior academic educators will evaluate their current reading level and recommend the best starting point.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={() => onOpenTrialModal()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Book Free Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {onOpenWhatsApp && (
              <button
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ask on WhatsApp</span>
              </button>
            )}
          </div>
        </div> */}

      </div>

      {/* Course Detail Modal / Syllabus Drawer */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0D2D72] text-white rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">

            {/* Close Button */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Course Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header */}
            <div className="mb-6 pr-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C9A45C] block mb-1">
                Course Syllabus Overview
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {selectedCourse.name}
              </h3>
              {selectedCourse.arabicName && (
                <span className="font-serif text-lg text-[#E5A83B] mt-1 block">
                  {selectedCourse.arabicName}
                </span>
              )}
            </div>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-white/80 pb-6 border-b border-white/15 font-medium">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Level: {selectedCourse.level}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Target: {selectedCourse.ageGroup}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Format: {selectedCourse.format}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">
                Sessions: {selectedCourse.duration}
              </span>
            </div>

            {/* Description & Milestones */}
            <div className="py-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A45C] mb-2">
                  Program Overview
                </h4>
                <p className="text-sm text-white/85 leading-relaxed font-sans font-normal">
                  {selectedCourse.fullDescription}
                </p>
              </div>

              {/* Key Milestones */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A45C] mb-3">
                  Key Curriculum Milestones
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCourse.keyTopics.map((topic) => (
                    <div key={topic} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Learning Outcomes */}
              {/* <div className="p-4 rounded-xl bg-white/5 border border-white/15">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A45C] mb-1">
                  Expected Learning Outcome
                </h4>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  {selectedCourse.outcomes}
                </p>
              </div> */}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/60">
                100% Free Trial Class · Zero Obligation
              </span>
              <button
                onClick={() => {
                  const courseName = selectedCourse.name;
                  setSelectedCourse(null);
                  onOpenTrialModal(courseName);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white rounded-full transition-all shadow-md cursor-pointer active:scale-95"
              >
                <span>Book Free Trial for this Course</span>
                <ArrowRight className="w-4 h-4 text-[#082D7B]" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
