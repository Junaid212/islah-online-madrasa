import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Sparkles, GraduationCap, BookOpen, Users, Heart, Award, Clock } from 'lucide-react';
import { HeroBgPattern } from './IslamicPattern';

interface WhyIslahProps {
  onOpenTrialModal: () => void;
}

interface PrincipleCard {
  id: number;
  number: string;
  angle: number;
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  bgColor: string;
}

const PRINCIPLE_CARDS: PrincipleCard[] = [
  {
    id: 1,
    number: "01.",
    angle: -56,
    icon: GraduationCap,
    title: "Completed formal Islamic studies with subject expertise",
    description:
      "Our teachers are not casual tutors. They have completed formal Islamic degrees, have subject-matter mastery, and receive pedagogical training in student interaction and child psychology.",
    tag: "Formal Degrees",
    bgColor: "#0b7ee2ff",
  },
  {
    id: 2,
    number: "02.",
    angle: -34,
    icon: BookOpen,
    title: "Comprehensive Islamic studies covering 8 essential areas",
    description:
      "From Aqeedah and Fiqh to Seerah, Hadith, Duas, and Arabic conversation. Every lesson has clear milestones so parents see constant, meaningful progress.",
    tag: "8 Essential Areas",
    bgColor: "#063aacff",
  },
  {
    id: 3,
    number: "03.",
    angle: -11,
    icon: Users,
    title: "Active participation rather than passive lecture",
    description:
      "Children learn better when they actively participate. Our teachers incorporate interactive discussions, quizzes, games, and presentations so students look forward to their classes rather than seeing them as a burden.",
    tag: "Active Learning",
    bgColor: "#0D2D72",
  },
  {
    id: 4,
    number: "04.",
    angle: 11,
    icon: Heart,
    title: "Akhlaaq, manners, and daily dealings with others",
    description:
      "For us, education must reflect in behaviour. We cultivate honesty, kindness to parents, modesty (Haya'), and controlling anger, taking Prophet Muhammad ﷺ as our hero.",
    tag: "Prophetic Conduct",
    bgColor: "#0D2D72",
  },
  {
    id: 5,
    number: "05.",
    angle: 34,
    icon: Award,
    title: "Workshops, presentations, competitions & practical clinics",
    description:
      "We don't want Islamic studies to feel like 'just another school subject'. We hold character workshops, speech days, Qur'an competitions, and live Salah verification clinics.",
    tag: "Practical Clinics",
    bgColor: "#063aacff",
  },
  {
    id: 6,
    number: "06.",
    angle: 56,
    icon: Clock,
    title: "Convenient evening and weekend classes from home",
    description:
      "Entering our 9th year, we understand the school workloads in the UAE, Saudi Arabia, Qatar, and Gulf. Classes fit seamlessly into your evening routine with direct WhatsApp teacher communication.",
    tag: "Flexible Scheduling",
    bgColor: "#0b7ee2ff",
  },
];

export const WhyIslah: React.FC<WhyIslahProps> = ({ onOpenTrialModal }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const dragStartXRef = useRef<number | null>(null);
  const totalDragDistanceRef = useRef<number>(0);
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const prevMobileCard = useCallback(() => {
    setMobileIndex((prev) => (prev === 0 ? PRINCIPLE_CARDS.length - 1 : prev - 1));
  }, []);

  const nextMobileCard = useCallback(() => {
    setMobileIndex((prev) => (prev === PRINCIPLE_CARDS.length - 1 ? 0 : prev + 1));
  }, []);

  // Subtle auto-advance every 5.5s when user is not actively interacting
  useEffect(() => {
    if (isInteracting) return;
    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev === PRINCIPLE_CARDS.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isInteracting]);

  const resetInteractionTimeout = useCallback(() => {
    setIsInteracting(true);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 8000);
  }, []);

  const handleDragStart = (clientX: number) => {
    dragStartXRef.current = clientX;
    totalDragDistanceRef.current = 0;
    setIsDragging(true);
    setDragOffset(0);
    resetInteractionTimeout();
  };

  const handleDragMove = (clientX: number) => {
    if (dragStartXRef.current === null) return;
    const delta = clientX - dragStartXRef.current;
    totalDragDistanceRef.current = Math.abs(delta);
    // Apply rubber-band friction for a tactile physical feel
    setDragOffset(delta * 0.85);
  };

  const handleDragEnd = () => {
    if (dragStartXRef.current === null) return;
    const delta = dragOffset;
    const threshold = 35; // 35px drag triggers slide

    if (delta < -threshold) {
      nextMobileCard();
    } else if (delta > threshold) {
      prevMobileCard();
    }

    dragStartXRef.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  // Geometric configuration for desktop circular arc
  const radius = 650; // Radius of circular arc in pixels
  const originY = 760; // Center Y of the arc circle in container

  return (
    <section
      id="why-islah"
      className="relative pt-10 pb-6 sm:pt-14 sm:pb-0 lg:pt-18 lg:pb-0 lg:min-h-[720px] bg-[#FBF9F5] overflow-hidden"
    >
      <HeroBgPattern />

      {/* ============================================================== */}
      {/* 1. DESKTOP CIRCULAR ARC CANOPY OF DETAIL CARDS (Width >= 1024px) */}
      {/* ============================================================== */}
      <div
        className="hidden lg:block absolute inset-x-0 top-20 h-[880px] pointer-events-none z-10 "
        aria-hidden="true"
      >
        <div className="relative w-full max-w-[1400px] mx-auto h-full">
          {PRINCIPLE_CARDS.map((card) => {
            const rad = (card.angle * Math.PI) / 180;
            const x = Math.sin(rad) * radius;
            const y = originY - Math.cos(rad) * radius;
            const Icon = card.icon;
            const isHovered = hoveredId === card.id;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%) rotate(${isHovered ? 0 : card.angle}deg) scale(${isHovered ? 1.08 : 1})`,
                  zIndex: isHovered ? 40 : 10,
                }}
                className="absolute pointer-events-auto transition-all duration-300 ease-out cursor-pointer group"
              >
                {/* Detail Card Container */}
                <div
                  style={{ backgroundColor: card.bgColor }}
                  className="w-[215px] h-[255px] xl:w-[230px] xl:h-[270px] rounded-2xl p-4 sm:p-5 border border-white/20 shadow-[0_12px_32px_-6px_rgba(8,45,123,0.22)] group-hover:shadow-[0_24px_50px_-8px_rgba(8,45,123,0.38)] group-hover:border-[#C9A45C]/90 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden select-none text-white"
                >
                  {/* Subtle top gold accent bar on hover */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Content Top */}
                  <div>
                    {/* Number Badge & Icon Header */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-serif text-xl sm:text-2xl text-[#C9A45C] font-bold tabular-nums">
                        {card.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#C9A45C] group-hover:text-[#082D7B] transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-3 mb-2">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[10.5px] sm:text-[11px] text-white/85 leading-relaxed line-clamp-4">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Footer Tag */}
                  <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                      {card.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] group-hover:scale-125 transition-all" />
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET CURVED CARD FAN SLIDER (< 1024px)           */}
      {/* ============================================================== */}
      <div className="lg:hidden relative z-20 w-full overflow-hidden select-none">
        {/* Curved Card Fan Stage matching reference arch screenshot */}
        <div
          className="relative w-full h-[320px] sm:h-[340px] touch-pan-y cursor-grab active:cursor-grabbing"
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onTouchCancel={handleDragEnd}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {PRINCIPLE_CARDS.map((card, i) => {
            const Icon = card.icon;
            const N = PRINCIPLE_CARDS.length;
            let diff = i - mobileIndex;
            if (diff > N / 2) diff -= N;
            if (diff < -N / 2) diff += N;

            // Clamped drag offset for real-time tactile finger tracking
            const currentDrag = isDragging ? Math.max(-120, Math.min(120, dragOffset)) : 0;

            let translateX = 0;
            let translateY = 6;
            let rotate = 0;
            let scale = 1;
            let opacity = 0;
            let zIndex = 0;
            let isVisible = false;

            if (diff === 0) {
              // Center active card: upright, prominent, highest
              translateX = currentDrag;
              translateY = 6 + Math.abs(currentDrag) * 0.08;
              rotate = currentDrag * 0.04;
              scale = 1 - Math.abs(currentDrag) * 0.0003;
              opacity = 1;
              zIndex = 25;
              isVisible = true;
            } else if (diff === -1) {
              // Left card: tilted counter-clockwise, dipped lower to frame badge
              translateX = -232 + currentDrag;
              translateY = 30 - currentDrag * 0.08;
              rotate = -10 + currentDrag * 0.04;
              scale = 0.96;
              opacity = 0.95;
              zIndex = 15;
              isVisible = true;
            } else if (diff === 1) {
              // Right card: tilted clockwise, dipped lower to frame badge
              translateX = 232 + currentDrag;
              translateY = 30 + currentDrag * 0.08;
              rotate = 10 + currentDrag * 0.04;
              scale = 0.96;
              opacity = 0.95;
              zIndex = 15;
              isVisible = true;
            } else if (diff === -2) {
              translateX = -390 + currentDrag;
              translateY = 75;
              rotate = -22;
              scale = 0.8;
              opacity = 0;
              zIndex = 5;
              isVisible = false;
            } else if (diff === 2) {
              translateX = 390 + currentDrag;
              translateY = 75;
              rotate = 22;
              scale = 0.8;
              opacity = 0;
              zIndex = 5;
              isVisible = false;
            } else {
              translateX = diff < 0 ? -420 : 420;
              translateY = 90;
              rotate = diff < 0 ? -25 : 25;
              scale = 0.75;
              opacity = 0;
              zIndex = 1;
              isVisible = false;
            }

            return (
              <div
                key={card.id}
                onClick={() => {
                  if (totalDragDistanceRef.current > 8) return;
                  if (diff === -1) {
                    prevMobileCard();
                    resetInteractionTimeout();
                  } else if (diff === 1) {
                    nextMobileCard();
                    resetInteractionTimeout();
                  }
                }}
                style={{
                  left: '50%',
                  transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  pointerEvents: isVisible ? 'auto' : 'none',
                  visibility: isVisible || Math.abs(diff) <= 2 ? 'visible' : 'hidden',
                  transition: isDragging
                    ? 'transform 0.06s linear, opacity 0.06s linear'
                    : 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease-out',
                  willChange: 'transform, opacity',
                }}
                className="absolute top-0 w-[215px] h-[275px] sm:w-[230px] sm:h-[290px] cursor-pointer"
              >
                <div
                  style={{ backgroundColor: card.bgColor }}
                  className="w-full h-full rounded-[24px] p-5 border border-white/20 shadow-[0_16px_36px_-8px_rgba(8,45,123,0.32)] flex flex-col justify-between text-left relative text-white select-none transition-shadow duration-300"
                >
                  {/* Subtle gold accent bar at top */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-60" />

                  <div>
                    {/* Header: Number and Icon */}
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-serif text-2xl font-bold text-[#C9A45C] tabular-nums tracking-tight">
                        {card.number}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-[13px] font-bold text-white leading-snug line-clamp-3 mb-2">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-white/90 leading-relaxed line-clamp-4 font-sans">
                      {card.description}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[9.5px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                      {card.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 3. CENTER HEADLINE, VALUE PROPOSITION & CTA (Inside the Arc)   */}
      {/* ============================================================== */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-20 text-center -mt-2 sm:-mt-3 lg:mt-76">
        
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          <span className="uppercase tracking-[0.2em] text-[8px] sm:text-[11px]">
            The Islah Philosophy
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#082D7B] font-bold tracking-tight leading-[1.12] mb-6 text-balance max-w-3xl mx-auto">
          More Than Lessons. <br />
          <span className="italic font-normal text-[#082822]">
            A Foundation for Life.
          </span>
        </h2>

        {/* Supporting Subtitle */}
        <p className="font-sans text-sm sm:text-base lg:text-lg text-[#151918]/75 font-normal leading-relaxed max-w-xl mx-auto mb-6">
          We cultivate lifelong love for Allah's Book, authentic Sunnah knowledge, and the noble prophetic character that guards a child's heart in any environment.
        </p>

        {/* Mobile Pagination Dots */}
        <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
          {PRINCIPLE_CARDS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMobileIndex(idx);
                resetInteractionTimeout();
              }}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                mobileIndex === idx
                  ? 'w-7 bg-gradient-to-r from-[#C9A45C] to-[#E3C37A] shadow-[0_2px_8px_rgba(201,164,92,0.4)]'
                  : 'w-2 bg-[#082D7B]/20 hover:bg-[#082D7B]/40'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Primary CTA Button */}
        {/* <div>
          <button
            onClick={onOpenTrialModal}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#082D7B] hover:bg-[#001E3C] shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Book a Free Trial</span>
            <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
          </button>
        </div> */}

      </div>
    </section>
  );
};
