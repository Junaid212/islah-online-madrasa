import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { ArrowRight, BookOpen, Clock, Users, Sparkles, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { COURSES, Course } from '../data/madrasaData';
import CircularCarousel from './CircularCarousel';
import { HeroBgPattern } from './IslamicPattern';

interface CoursesSectionProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp?: () => void;
}

const COURSE_IMAGES: Record<string, string> = {
  'noorani-qaida': 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&q=80&auto=format&fit=crop',
  'quran-reading': 'https://images.unsplash.com/photo-1585036156171-384164a8c675?w=900&q=80&auto=format&fit=crop',
  'quran-memorisation': 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=900&q=80&auto=format&fit=crop',
  'tajweed-mastery': 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=900&q=80&auto=format&fit=crop',
  'islamic-studies': 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=900&q=80&auto=format&fit=crop',
  'daily-duas': 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=900&q=80&auto=format&fit=crop',
  'salah-manners': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=900&q=80&auto=format&fit=crop',
  'arabic-basics': 'https://i.pinimg.com/736x/b2/fe/51/b2fe51fc8b9698d4574d720d35b09471.jpg',
  };

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  // Responsive carousel dimensions: bigger card size and reduced gap on mobile, expanded size on desktop
  const [carouselConfig, setCarouselConfig] = useState(() => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth;
      if (w < 640) {
        // Mobile: card width (~265px), reduced tight gap (10px)
        return { cardWidth: Math.min(270, Math.max(240, w - 80)), gap: 10, height: 380 };
      } else if (w < 1024) {
        // Tablet
        return { cardWidth: 240, gap: 18, height: 390 };
      }
    }
    // Desktop: bigger card size (290px wide x 315px high), height (440px), gap (26px)
    return { cardWidth: 290, gap: 26, height: 440 };
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCarouselConfig({
          cardWidth: Math.min(270, Math.max(240, w - 80)),
          gap: 10,
          height: 380,
        });
      } else if (w < 1024) {
        setCarouselConfig({ cardWidth: 240, gap: 18, height: 390 });
      } else {
        setCarouselConfig({ cardWidth: 290, gap: 26, height: 440 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCarouselChange = useCallback((idx: number) => {
    setActiveCourseIndex(idx);
  }, []);

  const carouselItems = useMemo(() => {
    return COURSES.map(course => ({
      src: COURSE_IMAGES[course.id] || 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=900&q=80&auto=format&fit=crop',
      alt: course.name,
      title: course.name,
      subtitle: `${course.level} · ${course.ageGroup}`,
      arabicName: course.arabicName,
      level: course.level,
      courseId: course.id,
      course,
    }));
  }, []);

  const activeCourse = COURSES[activeCourseIndex] || COURSES[0];

  return (
    <section id="courses" className="relative py-6 lg:py-10 bg-[#0D2D72] text-white overflow-hidden">
      {/* Background gradient (grid pattern removed) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#092258] via-[#0D2D72] to-[#081F4D] opacity-90 pointer-events-none" />
<HeroBgPattern isDark opacity={0.06} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#C9A45C] font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Curriculum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl">
            Learning Paths Designed to{' '}
            <span className=" text-[#E5A83B]">Grow With Your Child</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-white/75 mt-3 max-w-xl">
            Drag or click cards to explore our 8 structured courses.
          </p>
        </div>

        {/* Circular 3D Cylinder Carousel */}
        <div className="w-full relative">
          <div style={{ width: '100%', height: `${carouselConfig.height}px`, position: 'relative' }}>
            <CircularCarousel
              items={carouselItems}
              preset="cylinder"
              intro="rise"
              cardWidth={carouselConfig.cardWidth}
              aspectRatio={0.92}
              speed={14}
              captions={false}
              gap={carouselConfig.gap}
              fitMode="height"
              tilt={-5}
              curve={0}
              perspective={2500}
              autoplay="drift"
              interval={3}
              direction="left"
              momentum={0.6}
              snap
              pauseOnHover
              focusOnClick
              draggable
              parallax={0.3}
              stretch={0.5}
              fadeColor="#0D2D72"
              depthFade={0.55}
              innerShade={0.6}
              cornerRadius={14}
              onChange={handleCarouselChange}
              onItemClick={(item) => {
                if (item.course) {
                  setSelectedCourse(item.course);
                }
              }}
            />
          </div>

          {/* Active Course Spotlight & Quick Actions Card */}
          {/* {activeCourse && (
            <div className="mt-6 max-w-4xl mx-auto rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 p-6 sm:p-7 shadow-2xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#C9A45C] text-[#061838]">
                      {activeCourse.level}
                    </span>
                    <span className="text-xs text-white/70">
                      {activeCourse.ageGroup}
                    </span>
                  </div>
                  <h3 className=" text-2xl font-bold text-white flex items-center gap-2.5">
                    <span>{activeCourse.name}</span>
                    {activeCourse.arabicName && (
                      <span className="text-base text-[#E5A83B] opacity-90">
                        {activeCourse.arabicName}
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                {activeCourse.shortDescription}
              </p>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <Users className="w-4 h-4 text-[#C9A45C]" />
                  <span>{activeCourse.format}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCourse(activeCourse)}
                    className="px-4 py-2 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/15 rounded-full transition-colors cursor-pointer"
                  >
                    Syllabus Details
                  </button>

                  <button
                    onClick={() => onOpenTrialModal(activeCourse.name)}
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#061838] bg-[#C9A45C] hover:bg-white rounded-full transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Book Trial</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#061838]" />
                  </button>
                </div>
              </div>
            </div>
          )} */}
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
              <h3 className=" text-2xl sm:text-3xl font-bold text-white">
                {selectedCourse.name}
              </h3>
              {selectedCourse.arabicName && (
                <span className=" text-lg text-[#E5A83B] mt-1 block">
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
