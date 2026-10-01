import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, Volume2, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';

interface HeroSectionProps {
  onOpenTrialModal: () => void;
  onExploreCourses: () => void;
  onOpenWhatsApp: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenTrialModal,
  onExploreCourses,
  onOpenWhatsApp,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Playful simulated respectful audio feedback for Bismillah / Iqra verse
  const handleToggleRecitation = () => {
    setIsPlayingAudio(prev => !prev);
    if (!isPlayingAudio) {
      setTimeout(() => setIsPlayingAudio(false), 5500);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:py-32 flex items-center justify-center overflow-hidden bg-[#FBF9F5]"
    >
      {/* Hero background: ambient lighting canvas + subtle Islamic 8-point star geometric backdrop */}
      <HeroBgPattern />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Typography & Conversion Story (7 cols) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center sm:items-start text-left">

            {/* Arabic Calligraphy Header - Iqra: The First Divine Command */}
            <div className="inline-flex items-center gap-3 mb-5 py-1 text-sm text-[#082D7B]/80">
              <span className="font-arabic text-md sm:text-2xl text-[#082D7B] font-bold tracking-wide">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span className="h-4 w-px bg-[#082D7B]/20" aria-hidden="true" />
              <span className="text-[9px] sm:text-sm uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                Islah Online Madrasa
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-center sm:text-left text-4xl sm:text-5xl lg:text-6xl text-[#082D7B] font-bold tracking-tight leading-[1.12] mb-6 text-balance">
              Nurturing a Stronger <span className="italic font-normal text-[#082822]">Muslim Generation</span>{' '}
              <br className="hidden sm:inline" />
              {/* One Lesson at a Time. */}
            </h1>

            {/* Supporting Value Proposition */}
            <p className="font-sans text-center sm:text-left text-base sm:text-lg lg:text-xl text-[#151918]/80 font-normal leading-relaxed max-w-2xl mb-8">
              Quality Online Islamic Education for Children — Learn, Understand & Live Islam.
            </p>

            {/* Primary & Secondary CTAs - 2 in a row across all devices */}
            <div className="flex flex-row items-center gap-2.5 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenTrialModal}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#082D7B] hover:bg-[#001E3C] active:scale-[0.98] rounded-md transition-all shadow-sm hover:shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#082D7B] whitespace-nowrap"
              >
                <span>Book a Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A45C] shrink-0" />
              </button>

              <button
                onClick={onExploreCourses}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-[#082D7B] bg-white hover:bg-[#F6F1E7] border border-[#082D7B]/20 rounded-md transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Explore Courses</span>
              </button>
            </div>

            {/* Trust statement: "Qur'an • Sunnah • Character • Confidence" */}
            <div className="pt-6 border-t border-[#082D7B]/10 w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#082D7B]/85 font-medium">
                <span className="text-[#C9A45C] font-serif text-base">✦</span>
                <span className="tracking-wide">Qur'an</span>
                <span className="text-[#082D7B]/30">·</span>
                <span className="tracking-wide">Sunnah</span>
                <span className="text-[#082D7B]/30">·</span>
                <span className="tracking-wide">Character</span>
                <span className="text-[#082D7B]/30">·</span>
                <span className="tracking-wide">Confidence</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Visual Composition (5 cols) */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative w-full flex justify-center">

            {/* Architectural Arch Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">

              {/* Decorative Arch Backdrop with subtle gold border */}
              <div className="relative rounded-t-[180px] sm:rounded-t-[230px] rounded-b-2xl p-3 bg-gradient-to-b from-[#F6F1E7] via-white to-[#F6F1E7] border border-[#C9A45C]/30 shadow-[0_20px_50px_-15px_rgba(11,61,53,0.12)] overflow-hidden">

                {/* Visual Media Canvas: Child Learning Online with Teacher */}
                <div className="relative rounded-t-[170px] sm:rounded-t-[230px] rounded-b-xl overflow-hidden aspect-[4/5] bg-[#001E3C]">

                  {/* Subtle Quranic calligraphy overlay in background */}
                  <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
                    <IslamicPattern variant="girih" strokeColor="#F6F1E7" opacity={0.6} />
                  </div>

                  {/* High fidelity composed illustration / editorial visual */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white z-10">

                    {/* Top Islamic Arch Ribbon */}
                    <div className="flex items-center justify-between ">
                      {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#082D7B]/80 backdrop-blur-md border border-[#C9A45C]/40 text-[11px] text-[#F6F1E7] ">
                        <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
                        <span>Interactive 1-on-1 Class</span>
                      </div> */}

                      {/* <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                        <Sparkles className="w-4 h-4 text-[#C9A45C]" />
                      </div> */}
                    </div>

                    {/* Central Learning Scene Graphic */}
                    <div className="my-auto py-4 flex flex-col items-center text-center">
                      {/* Stylized Rehal / Quran Stand & Screen Illustration */}
                      <div className="relative w-44 h-36 mx-auto mb-4 flex items-center justify-center">
                        {/* Glow halo */}
                        <div className="absolute inset-0 bg-[#C9A45C]/20 rounded-full blur-xl" />

                        {/* Stylized Tablet screen with Quran verse */}
                        <div className="relative w-36 h-26 rounded-lg bg-[#082D7B] border border-[#C9A45C]/50 p-2.5 flex flex-col justify-between shadow-2xl">
                          <div className="flex items-center justify-between text-[9px] text-[#C9A45C]/80 border-b border-[#C9A45C]/20 pb-1">
                            <span>Live Lesson</span>
                            <span className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          </div>

                          <div className="text-center py-1">
                            <span className="font-arabic text-lg text-[#F6F1E7] block leading-tight">
                              اقْرَأْ بِاسْمِ رَبِّكَ
                            </span>
                            <span className="text-[9px] text-[#F6F1E7]/70 font-sans block mt-0.5">
                              Surah Al-Alaq · Verse 1
                            </span>
                          </div>

                          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-[#C9A45C] w-3/4 rounded-full" />
                          </div>
                        </div>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#F6F1E7] font-normal leading-snug">
                        "The best among you are those who learn the Qur'an and teach it."
                      </h3>
                      <p className="text-[11px] text-[#C9A45C] uppercase tracking-widest mt-1">
                        Sahih al-Bukhari 5027
                      </p>
                    </div>

                    {/* Bottom Audio Recitation Control Strip */}
                    {/* <div className="rounded-lg bg-black/40 backdrop-blur-md border border-white/10 p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-[#082D7B]/8 text-[#082D7B] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#082D7B]" />
                    </div>
                    <div className="justify-center items-center">
                      <p className="text-xs font-semibold  leading-tight">
                        Safe Home Learning
                      </p>
                      <p className="text-[11px] text-white/70 mt-0.5 leading-snug ">
                        Private 1-on-1 sessions monitored directly by parents.
                      </p>
                    </div>
                      </div>
                    </div> */}

                  </div>
                </div>

                {/* Floating parent reassurance card */}
                {/* <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-xl border border-[#082D7B]/10 max-w-[210px] sm:max-w-[240px]">
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-[#082D7B]/8 text-[#082D7B] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-[#082D7B]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#082D7B] leading-tight">
                        Safe Home Learning
                      </p>
                      <p className="text-[11px] text-[#151918]/70 mt-0.5 leading-snug">
                        Private 1-on-1 sessions monitored directly by parents.
                      </p>
                    </div>
                  </div>
                </div> */}

                {/* Floating teacher pairing card */}
                {/* <div className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 backdrop-blur-md rounded-lg py-2 px-3 shadow-lg border border-[#082D7B]/10 hidden sm:flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-medium text-[#082D7B]">
                    Vetted Ustadhs & Ustadhas
                  </span>
                </div> */}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
