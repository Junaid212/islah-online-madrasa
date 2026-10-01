import React, { useRef } from 'react';
import { Quote, Play, ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/madrasaData';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

interface TestimonialsSectionProps {
  onPlayVideoTestimonial: (item: Testimonial) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onPlayVideoTestimonial }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-[#F6F1E7]/70 border-t border-[#082D7B]/10 overflow-hidden">
      <HeroBgPattern />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-2">
              Parent Confidence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#082D7B] font-normal tracking-tight text-balance">
              What Parents Say <br />
              <span className="italic">About Islah Online Madrasa</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#151918]/70 mt-3">
              Real reflections from families who entrust their children's Qur'an journey to our instructors.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="flex items-center gap-3 self-end">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-[#082D7B]/20 bg-white hover:bg-[#082D7B] hover:text-white text-[#082D7B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll testimonials left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-[#082D7B]/20 bg-white hover:bg-[#082D7B] hover:text-white text-[#082D7B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              aria-label="Scroll testimonials right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[300px] sm:w-[380px] rounded-2xl bg-white p-7 border border-[#082D7B]/10 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              {/* Type Indicator: Video or Text */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#C9A45C]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xs">★</span>
                  ))}
                </div>

                {item.type === 'video' ? (
                  <button
                    onClick={() => onPlayVideoTestimonial(item)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#082D7B] text-[#F6F1E7] text-[11px] font-medium hover:bg-[#001E3C] transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current text-[#C9A45C]" />
                    <span>Watch Video ({item.videoDuration})</span>
                  </button>
                ) : (
                  <Quote className="w-6 h-6 text-[#C9A45C]/50" />
                )}
              </div>

              {/* Highlight Quote */}
              <p className="font-serif text-base sm:text-lg text-[#082D7B] font-semibold mb-3 leading-snug">
                "{item.keyHighlight}"
              </p>

              {/* Full Content */}
              <p className="text-xs sm:text-sm text-[#151918]/75 leading-relaxed font-sans mb-6">
                "{item.content}"
              </p>

              {/* Parent Info Footnote */}
              <div className="pt-4 border-t border-[#082D7B]/8 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#082D7B]">
                    {item.parentName}
                  </h4>
                  <p className="text-[11px] text-[#151918]/60 mt-0.5">
                    {item.childInfo}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#151918]/50">
                  <MapPin className="w-3 h-3 text-[#C9A45C]" />
                  <span>{item.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verification transparency note */}
        <div className="mt-8 text-center text-xs text-[#151918]/50">
          * Representative parent experiences. Client testimonials will be verified upon formal onboarding updates.
        </div>

      </div>
    </section>
  );
};
