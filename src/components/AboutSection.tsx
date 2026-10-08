import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Award, 
  Globe, 
  Home, 
  GraduationCap, 
  ArrowRight, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { IslamicPattern, HeroBgPattern } from './IslamicPattern';
import { useNavigate } from '../router';

interface AboutSectionProps {
  onOpenTrialModal?: () => void;
  onOpenWhatsApp?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll-linked expand animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'start 25%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Minimal scaling from 0.94 to 1.0
  const scale = useTransform(smoothProgress, [-0.01, 1], [-0.01, 1]);
  const borderRadius = useTransform(smoothProgress, [0, 1], [28, 20]);
  const opacity = useTransform(smoothProgress, [0, 0.4], [0.9, 1]);

  const HIGHLIGHTS = [
    {
      icon: Award,
      title: "9th Academic Year",
      desc: "Nearly a decade of consistent, trusted Islamic learning.",
    },
    {
      icon: Globe,
      title: "GCC & Global Families",
      desc: "Designed around the lifestyles and schedules of expat families.",
    },
    {
      icon: Home,
      title: "From Home, Alongside School",
      desc: "A structured, accessible system alongside regular schooling.",
    },
    {
      icon: GraduationCap,
      title: "Formal Islamic Studies",
      desc: "Vetted teachers with formal Islamic degrees and subject training.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-10 sm:py-14 bg-[#FBF9F5] overflow-hidden"
    >
      <HeroBgPattern />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Animated Expanding Minimal Card */}
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity,
          }}
          className="relative bg-gradient-to-br from-[#061E52] via-[#082D7B] to-[#0A3282] text-white overflow-hidden shadow-xl border border-[#C9A45C]/25 will-change-transform"
        >
          {/* Subtle Islamic Rosette Backdrop */}
          <IslamicPattern opacity={0.05} strokeColor="#C9A45C" variant="rosette" />

          {/* Gentle Gold Ambient Light Glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 bg-[#C9A45C]/12 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            
            {/* Top Pill & Calligraphy */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-[#C9A45C]/40 text-[#DFBA74] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
                <span className="uppercase tracking-[0.18em] text-[8px] sm:text-xs">9th Successful Academic Year</span>
                <Sparkles className="w-3 h-3 text-[#C9A45C]" />
              </div>

              <div className="text-right hidden sm:block">
                <span className="font-arabic text-base sm:text-lg text-[#C9A45C] font-semibold">
                  رَّبِّ زِدْنِي عِلْمًا
                </span>
              </div>
            </div>

            {/* Split Minimal Content Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Narrative (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block mb-2">
                  About Islah Online Madrasa
                </span>

                <h2 className="text-2xl sm:text-2xl lg:text-3xl text-white font-bold leading-snug mb-4">
                  Quality Islamic Education,{' '}
                  <span className=" text-[#DFBA74]">Structured for Modern Families.</span>
                </h2>

                <div className="space-y-3 text-sm sm:text-base text-white/85 leading-relaxed font-sans font-light mb-6">
                  <p>
                    <strong className="text-white font-medium">Islah Online Madrasa is now entering its 9th successful academic year.</strong> Started with the intention of providing quality Islamic education to children living in GCC countries and other parts of the world, we understand the lifestyle, academic schedules, and circumstances of families.
                  </p>
                  <p>
                    We developed an accessible online madrasa where children receive systematic learning alongside regular schooling—right from the comfort of their homes, mentored by professional teachers who have completed <span className="text-[#DFBA74] font-normal">formal Islamic studies</span> and subject training.
                  </p>
                </div>

                {/* Concise Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/about');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#C9A45C] hover:bg-[#DFBA74] text-[#082D7B] font-semibold text-xs sm:text-sm transition-all shadow cursor-pointer active:scale-98"
                    >
                      <span>About Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#082D7B]" />
                    </button>
                  
                </div>
              </div>

              {/* Right Column: 4 Minimal Micro-Cards (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {/* {HIGHLIGHTS.map((item, index) => {
                  const Icon = item.icon; */}
                  {/* return (
                    // <div */}
                    {/* //   key={index}
                    //   className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 hover:border-[#C9A45C]/40 transition-colors"
                    // >
                    //   <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/15 border border-[#C9A45C]/25 text-[#DFBA74] flex items-center justify-center shrink-0 mt-0.5">
                    //     <Icon className="w-4 h-4 text-[#DFBA74]" />
                    //   </div>
                    //   <div>
                    //     <h3 className="text-sm font-semibold text-white mb-0.5">
                    //       {item.title}
                    //     </h3>
                    //     <p className="text-xs text-white/75 leading-relaxed">
                    //       {item.desc}
                    //     </p>
                    //   </div>
                    // </div> */}
                    <div className='rounded-xl overflow-hidden'>
                      <img src="/assets/img/about-s.webp" alt="" />
                    </div>
                  {/* ); */}
                {/* // })} */}
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
