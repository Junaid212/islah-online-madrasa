import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Award,
  GraduationCap,
  Globe,
  Clock,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Eye,
  ArrowRight,
  MessageCircle,
  Calendar,
  Layers,
  Check,
  Sparkles
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { TEACHERS } from '../data/madrasaData';
import { useNavigate } from '../router';

interface AboutPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();

  // Set SEO document title
  useEffect(() => {
    document.title = "About Islah Online Madrasa | Our Story, Vision & Mission";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const CORE_VALUES = [
    {
      number: "01",
      arabic: "العلم النافع",
      title: "Authentic Knowledge",
      desc: "Firmly grounded in the Holy Qur'an, authentic Hadith, and sound classical scholarship—free from cultural additions or modern confusion.",
      icon: BookOpen,
      color: "#082D7B",
    },
    {
      number: "02",
      arabic: "الإخلاص",
      title: "Sincerity",
      desc: "Pure devotion seeking only Allah's pleasure, viewing every enrolled student as a sacred Amanah (trust) entrusted to us by parents.",
      icon: Heart,
      color: "#0D2D72",
    },
    {
      number: "03",
      arabic: "حسن الخلق",
      title: "Good Character",
      desc: "Education must reflect in behavior. We cultivate honesty, modesty (Haya'), humility, and kindness to parents, taking the Prophet ﷺ as our hero.",
      icon: Award,
      color: "#0568BD",
    },
    {
      number: "04",
      arabic: "الاستقامة",
      title: "Consistency",
      desc: "Steady, gentle daily habits that nurture lifelong faith without burnout, following the Sunnah principle of consistent, beloved deeds.",
      icon: Clock,
      color: "#082D7B",
    },
    {
      number: "05",
      arabic: "العمل بالعلم",
      title: "Practical Learning",
      desc: "Knowledge is actively lived—from verifying Salah postures and memorizing daily Duas to practical Islamic clinics and moral decision-making.",
      icon: Layers,
      color: "#0D2D72",
    },
  ];

  const [selectedMilestone, setSelectedMilestone] = useState<number>(3);

  const JOURNEY_MILESTONES = [
    {
      phase: "01",
      period: "2016 – 2018",
      yearShort: "'16",
      title: "Foundational Inception",
      highlight: "Dedicated Vision for Expat Families",
      summary:
        "Founded by Islamic educators to provide busy expat children authentic Tajweed without evening commute stress.",
      icon: Compass,
      metrics: ["40 First Students", "GCC Launch"],
      isCurrent: false,
    },
    {
      phase: "02",
      period: "2019 – 2021",
      yearShort: "'19",
      title: "8-Core Curriculum",
      highlight: "Holistic Islamic Syllabus",
      summary:
        "Standardized beyond recitation into 8 core areas covering Aqeedah, Seerah, daily Sunnah Duas, and Arabic.",
      icon: Layers,
      metrics: ["8 Core Subjects", "Milestone Tracking"],
      isCurrent: false,
    },
    {
      phase: "03",
      period: "2022 – 2024",
      yearShort: "'22",
      title: "Faculty Rigor",
      highlight: "Formally Degreed & Child-Trained",
      summary:
        "Instituted 100% university degree criteria, certified Ijazahs, and empathy-first pedagogical coaching.",
      icon: GraduationCap,
      metrics: ["100% Degreed Faculty", "Child Psychology Trained"],
      isCurrent: false,
    },
    {
      phase: "04",
      period: "2025 – Present",
      yearShort: "'25",
      title: "9th Academic Year",
      highlight: "Global Sanctuary for Confident Youth",
      summary:
        "Celebrating 9 years of trusted online learning, guiding hundreds of confident Muslim children across 12+ nations.",
      icon: Award,
      metrics: ["12+ Countries", "98% Retention"],
      isCurrent: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* ============================================================== */}
      {/* 1. HERO INNER BANNER                                           */}
      {/* ============================================================== */}
      <InnerBanner
        title="About Us"
        breadcrumb="About Us"
        subtitle="Nurturing a generation connected to Allah’s Book, grounded in the authentic Sunnah, and distinguished by noble prophetic character."
      />

      {/* ============================================================== */}
      {/* 2. SECTION 1: OUR STORY                                        */}
      {/* ============================================================== */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Story Column (Arch + Content) - 7 cols on lg */}
            <div className="lg:col-span-7 flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 lg:gap-8 xl:gap-10">
              
              {/* Mobile Only: Horizontal Decorative Arch & Horizontal Animated "OUR STORY" */}
              <div className="flex md:hidden items-center justify-start w-full mb-3 select-none">
                <div className="relative inline-flex items-center h-[52px] sm:h-[60px] pl-3 pr-4">
                  {/* Soft Slate-Blue Horizontal Arch Shape (covers "STORY" on the right) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-0 bottom-0 w-[62%] bg-[#9FB2CC] rounded-r-full rounded-l-2xl shadow-xs"
                  />

                  {/* Horizontal "OUR STORY" Text */}
                  <div 
                    aria-label="OUR STORY"
                    className="relative z-10 flex items-center font-sans font-black text-2xl sm:text-3xl tracking-[0.2em] uppercase select-none"
                  >
                    {[
                      { char: 'O', inArch: false },
                      { char: 'U', inArch: false },
                      { char: 'R', inArch: false },
                      { char: ' ', inArch: false },
                      { char: 'S', inArch: true },
                      { char: 'T', inArch: true },
                      { char: 'O', inArch: true },
                      { char: 'R', inArch: true },
                      { char: 'Y', inArch: true },
                    ].map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, y: 12, filter: 'blur(4px)', scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.15 + idx * 0.06,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`inline-block transition-colors ${
                          item.inArch ? 'text-white drop-shadow-xs' : 'text-[#BAC7D6]'
                        }`}
                      >
                        {item.char === ' ' ? '\u00A0' : item.char}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Only: Decorative Arch & Vertical Animated "OUR STORY" */}
              <div className="hidden md:flex relative shrink-0 items-center justify-center w-[170px] sm:w-[210px] xl:w-[230px] h-[390px] sm:h-[450px] md:my-0 select-none">
                {/* Soft Slate-Blue Arch Shape */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-2 left-0 w-[160px] sm:w-[195px] xl:w-[215px] h-[260px] sm:h-[310px] bg-[#9FB2CC] rounded-t-full rounded-b-3xl shadow-xs"
                />

                {/* Vertical "OUR STORY" Text with One-by-One Letter Animation */}
                <div 
                  aria-label="OUR STORY"
                  className="relative z-10 -rotate-90 whitespace-nowrap flex items-center select-none font-sans font-black text-4xl sm:text-5xl lg:text-[52px] tracking-[0.24em] uppercase"
                >
                  {[
                    { char: 'O', inArch: false },
                    { char: 'U', inArch: false },
                    { char: 'R', inArch: false },
                    { char: ' ', inArch: false },
                    { char: 'S', inArch: true },
                    { char: 'T', inArch: true },
                    { char: 'O', inArch: true },
                    { char: 'R', inArch: true },
                    { char: 'Y', inArch: true },
                  ].map((item, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 18, filter: 'blur(5px)', scale: 0.75 }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.18 + idx * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`inline-block transition-colors ${
                        item.inArch ? 'text-white drop-shadow-xs' : 'text-[#BAC7D6]'
                      }`}
                    >
                      {item.char === ' ' ? '\u00A0' : item.char}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Main Story Content */}
              <div className="flex-1 min-w-0">
                {/* Badge: About Islah */}
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0FC] border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-[#082D7B]" />
                  <span className="font-sans font-medium text-xs tracking-wide">About Islah</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="font-sans font-bold text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] text-[#082D7B] leading-[1.22] tracking-tight mb-5"
                >
                  Why Islah Online Madrasa Was Established
                </motion.h2>

                {/* Paragraphs with Staggered Entrance */}
                <div className="space-y-3.5 text-xs sm:text-[13px] lg:text-[13.5px] text-[#4A5568] leading-[1.68] font-sans">
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Islah Online Madrasa was founded with a singular, urgent mission:{" "}
                    <strong className="text-[#082D7B] font-bold">
                      to provide children with an authentic, structured, and joyful Islamic education that harmonizes with their modern academic lives.
                    </strong>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Muslim families across the Gulf and Western communities often struggle to balance busy academic schedules with traditional madrasa education.
                  </motion.p>

                  {/* <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Families often turn to casual home tutors who lack formal pedagogy, or crowded community classes where individual Tajweed is overlooked and children feel disengaged. We recognized that Muslim children deserve better—they deserve inspiring scholars who understand their psychology, connect with their language, and guide them with patient affection.
                  </motion.p> */}

                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Islah makes Islamic learning accessible through secure online classes led by qualified educators, with flexible timings that fit your family’s routine—without the need to commute.
                  </motion.p>
                </div>

                {/* 3 Pillars in a Horizontal Row */}
                <div className="grid grid-cols-3 sm:grid-cols-3 gap-3.5 lg:gap-4 mt-6 pt-2">
                  {[
                    {
                      icon: Globe,
                      title: "GCC & Global Reach",
                      desc: "Tailored for busy expat & diaspora routines.",
                    },
                    {
                      icon: Clock,
                      title: "Zero Commute Stress",
                      desc: "Evening and weekend sessions from home.",
                    },
                    {
                      icon: Heart,
                      title: "Loving Mentorship",
                      desc: "Teachers who inspire genuine love for Allah.",
                    },
                  ].map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.58 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-7 h-7 rounded-full bg-[#EAF0FC] text-[#C9A45C] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Icon className="w-3.5 h-3.5 text-[#C9A45C]" />
                        </div>
                        <div>
                          <h4 className="text-[12px] font-bold text-[#082D7B] leading-tight">
                            {pillar.title}
                          </h4>
                          {/* <p className="text-[10.5px] text-[#637381] mt-0.5 leading-snug">
                            {pillar.desc}
                          </p> */}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Story Column: Bookshelf Alcove Image with Slide-from-Left Animation */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden shadow-2xl bg-[#F0EDE6] border border-black/5"
              >
                <img
                  src="/assets/img/about-story.webp"
                  alt="Classical Islamic books in traditional arched alcove at Islah Online Madrasa"
                  className="w-full h-auto object-cover object-center block"
                  loading="eager"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================== */}
      {/* 3. SECTION 2: OUR JOURNEY (ENTERING THE 9th YEAR)              */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#FAF8F5] border-y border-[#082D7B]/10 overflow-hidden">
        <HeroBgPattern opacity={0.025} />

        {/* Ambient atmospheric lighting */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-r from-[#082D7B]/5 via-[#C9A45C]/10 to-[#082D7B]/5 rounded-full blur-3xl pointer-events-none" 
          aria-hidden="true"
        />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0FC] border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">
                Our 9-Year Milestone Journey
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-4"
            >
              Entering Our 9th Academic Year
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm sm:text-base text-[#151918]/70 leading-relaxed max-w-2xl mx-auto"
            >
              From a handful of expat families in 2016 to an internationally trusted online sanctuary—witness nine years of continuous dedication to authentic Islamic education.
            </motion.p>
          </div>

          {/* Interactive Journey Roadmap UI */}
          <div className="relative">
            
            {/* Desktop Horizontal Connecting Rail */}
            <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-[#082D7B]/15 via-[#C9A45C]/40 to-[#082D7B]/20 rounded-full z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#082D7B] via-[#C9A45C] to-[#082D7B] origin-left rounded-full shadow-xs"
              />
            </div>

            {/* 4 Connected Milestone Stations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
              {JOURNEY_MILESTONES.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isSelected = selectedMilestone === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + idx * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => setSelectedMilestone(idx)}
                    className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                      milestone.isCurrent
                        ? "bg-gradient-to-b from-white via-white to-[#FDFBF7] border-2 border-[#C9A45C] shadow-xl hover:shadow-2xl hover:-translate-y-2"
                        : isSelected
                        ? "bg-white border-2 border-[#082D7B] shadow-xl hover:-translate-y-2"
                        : "bg-white/95 backdrop-blur-xs border border-[#082D7B]/12 hover:border-[#C9A45C]/60 hover:shadow-xl hover:-translate-y-2"
                    }`}
                  >
                    {/* Watermark of the Era year in corner */}
                    <span className="absolute top-4 right-5 font-sans font-black text-4xl sm:text-5xl text-[#082D7B]/5 select-none pointer-events-none group-hover:text-[#C9A45C]/15 transition-colors">
                      {milestone.yearShort}
                    </span>

                    <div>
                      {/* Milestone Station Header */}
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          {/* Station Medal Pin */}
                          <div
                            className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs ${
                              milestone.isCurrent
                                ? "bg-[#082D7B] text-[#C9A45C] ring-4 ring-[#C9A45C]/25"
                                : isSelected
                                ? "bg-[#082D7B] text-white ring-4 ring-[#082D7B]/15"
                                : "bg-[#EAF0FC] text-[#082D7B] group-hover:bg-[#082D7B] group-hover:text-white"
                            }`}
                          >
                            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                          </div>

                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#082D7B]/60">
                              Phase {milestone.phase}
                            </span>
                            <span className="text-xs font-bold text-[#082D7B]">
                              {milestone.period}
                            </span>
                          </div>
                        </div>

                        {/* Current Era Pulse Badge */}
                        {/* {milestone.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C9A45C]/15 text-[#9E7728] border border-[#C9A45C]/30 shadow-2xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-ping" />
                            <span>Current</span>
                          </span>
                        )} */}
                      </div>

                      {/* Milestone Title */}
                      <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1 leading-snug group-hover:text-[#0568BD] transition-colors">
                        {milestone.title}
                      </h3>

                      {/* Subtitle / Highlight */}
                      <p className="text-[11px] font-semibold text-[#C9A45C] mb-3">
                        {milestone.highlight}
                      </p>

                      {/* Minimal 1-Sentence Summary */}
                      <p className="font-sans text-xs text-[#151918]/70 leading-relaxed mb-6">
                        {milestone.summary}
                      </p>
                    </div>

                    {/* Minimal Metric Tags at bottom */}
                    {/* <div className="pt-4 border-t border-[#082D7B]/8 flex flex-wrap items-center gap-2">
                      {milestone.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10.5px] font-medium bg-[#082D7B]/5 text-[#082D7B] group-hover:bg-[#082D7B]/10 transition-colors"
                        >
                          <Check className="w-3 h-3 text-[#C9A45C]" />
                          <span>{metric}</span>
                        </span>
                      ))}
                    </div> */}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Journey Trust & Action Bar */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 rounded-3xl bg-gradient-to-r from-[#082D7B] via-[#0B3388] to-[#082D7B] text-white p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden"
          >
            <HeroBgPattern isDark opacity={0.06} />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8"> */}
              
              {/* Left stats counter */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-auto text-center sm:text-left">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA74]">
                    9th Year
                  </div>
                  <div className="text-[11px] text-white/75 mt-0.5 font-sans">
                    Academic Cycle Live
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA74]">
                    12+
                  </div>
                  <div className="text-[11px] text-white/75 mt-0.5 font-sans">
                    Countries Enrolled
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA74]">
                    98%
                  </div>
                  <div className="text-[11px] text-white/75 mt-0.5 font-sans">
                    Parent Retention
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#DFBA74]">
                    100%
                  </div>
                  <div className="text-[11px] text-white/75 mt-0.5 font-sans">
                    Degreed Faculty
                  </div>
                </div>
              </div> */}

              {/* Right CTA Button */}
              {/* <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-center">
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white hover:text-[#082D7B] transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Begin Your Child's Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div> */}

            {/* </div>
          </motion.div> */}

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 3: OUR VISION & SECTION 4: OUR MISSION              */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#072464] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Subtle Section Header */}
          {/* <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#BACCE8] font-semibold mb-3 shadow-2xs"
            >
              <Compass className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">
                Our Purpose & Foundation
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Our Mission & Vision
            </motion.h2>
          </div> */}

          {/* Two-Card Outer Frame matching reference image */}
          <div className="rounded-[32px] sm:rounded-[44px] p-2.5 sm:p-4 bg-[#051C4D]/70 border border-white/12 shadow-2xl backdrop-blur-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 items-stretch">
              
              {/* 1. MISSION CARD (Left, Deep Navy) */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[26px] sm:rounded-[34px] bg-[#0A2663] border border-white/10 p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                {/* Inner Inset Border Frame */}
                <div className="relative rounded-[20px] sm:rounded-[26px] border border-[#BACCE8]/20 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] h-full overflow-hidden">
                  
                  {/* Mission Paragraph */}
                  <p className="relative z-10 font-sans text-xs sm:text-[13.5px] lg:text-[15px] text-[#BACCE8] leading-[1.75] max-w-md select-text">
                    We envision young Muslim generations who hold the Holy Qur'an deeply in their hearts, follow the authentic Sunnah with conviction, and embody noble prophetic character that protects their moral compass wherever life takes them.
                  </p>

                  {/* Bottom Row: MISSION Wordmark */}
                  <div className="relative z-10 flex items-end justify-between mt-auto pt-8 sm:pt-12">
                    <h3 className="font-sans font-black tracking-wider text-4xl sm:text-5xl lg:text-[56px] text-[#BACCE8] uppercase select-none leading-none">
                      MISSION
                    </h3>
                  </div>

                  {/* Target with Arrow Image (10.png) attached directly to the bottom right of card */}
                  <div className="absolute right-0 bottom-0 select-none pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/img/10.png"
                      alt="Mission Target"
                      className="w-36 h-36 sm:w-48 sm:h-48 lg:w-66 lg:h-66 object-contain object-bottom-right"
                    />
                  </div>

                </div>
              </motion.div>

              {/* 2. VISION CARD (Right, Soft Pastel Blue) */}
              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[26px] sm:rounded-[34px] bg-[#BACCE8] p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between group shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Inner Inset Border Frame */}
                <div className="relative rounded-[20px] sm:rounded-[26px] border border-[#0A2663]/25 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] h-full overflow-hidden">
                  
                  {/* Vision Paragraph */}
                  <p className="relative z-10 font-sans text-xs sm:text-[13.5px] lg:text-[15px] text-[#0A2663] leading-[1.75] max-w-md font-medium select-text">
                    Our vision is to nurture confident Muslim children through authentic Islamic education, strong Aqeedah, practical daily Islamic habits, and engaging online classrooms that make learning meaningful, joyful, and impactful.
                  </p>

                  {/* Bottom Row: VISION Wordmark */}
                  <div className="relative z-10 flex items-end justify-between mt-auto pt-8 sm:pt-12">
                    <h3 className="font-sans font-black tracking-wider text-4xl sm:text-5xl lg:text-[56px] text-[#0A2663] uppercase select-none leading-none">
                      VISION
                    </h3>
                  </div>

                  {/* Stylized Eye Image (11.png) attached directly to the bottom right of card */}
                  <div className="absolute right-0 bottom-0 select-none pointer-events-none group-hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/img/11.png"
                      alt="Vision Eye"
                      className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain object-bottom-right"
                    />
                  </div>

                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>


      {/* ============================================================== */}
      {/* 5. SECTION 5: OUR CORE VALUES                                  */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Section 5 • Our Core Values</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-4">
              The Principles That Guide Our Teaching
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#151918]/75 leading-relaxed">
              Every lesson, teacher interaction, and curriculum milestone at Islah is governed by five foundational values derived from the Prophetic tradition.
            </p>
          </div>

          {/* 5 Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  style={{ backgroundColor: val.color }}
                  className="rounded-2xl p-6 text-white border border-white/20 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl font-bold text-[#C9A45C] tabular-nums">
                        {val.number}.
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-[#C9A45C] group-hover:text-[#082D7B] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="font-arabic text-sm text-[#C9A45C] mb-1 font-semibold">
                      {val.arabic}
                    </div>

                    <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                      {val.title}
                    </h3>

                    <p className="text-xs text-white/85 leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-semibold">
                      Core Value
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. SECTION 6: MEET OUR TEACHERS                                */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* 6. SECTION 6: MEET OUR TEACHERS                                */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10 overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
              <Users className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Faculty & Academic Standards</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-4">
              Meet Our Professional & Trained Teaching Team
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#151918]/75 leading-relaxed">
              Our educators are not casual tutors. Each teacher holds authentic Quranic Ijazahs, certified university degrees in Islamic Studies, and continuous training in child psychology.
            </p>
          </div>

          {/* Arched Faculty Cards Grid (Exact reference style: arched top, photo, name, designation) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-4.5">
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.id}
                onClick={() => onOpenTrialModal(teacher.designation || teacher.title)}
                className="group relative cursor-pointer overflow-hidden rounded-t-full rounded-b-2xl sm:rounded-b-3xl h-[240px] sm:h-[290px] md:h-[430px] lg:h-[350px] bg-[#082D7B]/10 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-end"
              >
                {/* Full Bleed Portrait Image */}
                {teacher.image ? (
                  <img
                    src={teacher.image}
                    alt={`${teacher.name} - ${teacher.designation || teacher.title}`}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#082D7B] text-[#C9A45C]">
                    <span className="font-serif text-4xl font-bold">{teacher.name.charAt(0)}</span>
                  </div>
                )}

                {/* Dark Vignette / Gradient Overlay (concentrated at bottom for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-35% to-transparent pointer-events-none" />

                {/* Subtle Hover Glow Arch Border */}
                <div className="absolute inset-0 rounded-t-full rounded-b-2xl sm:rounded-b-3xl border border-black/10 group-hover:border-[#C9A45C]/40 transition-colors pointer-events-none" />

                {/* Teacher Name & Designation Overlay */}
                <div className="relative z-10 p-3.5 sm:p-4.5 text-left">
                  <h3 className="font-serif text-sm sm:text-base lg:text-[15px] xl:text-base font-bold text-white tracking-tight leading-snug drop-shadow-xs">
                    {teacher.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/75 font-normal mt-0.5 sm:mt-1 leading-tight">
                    {teacher.designation || teacher.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Trust & Action Banner */}
          {/* <div className="mt-12 sm:mt-14 p-4 sm:p-5 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <ShieldCheck className="w-5 h-5 text-[#082D7B] shrink-0" />
              <p className="text-xs text-[#151918]/75 font-sans">
                <strong>Faculty Policy:</strong> All educators undergo verified Tajweed assessment and background safeguarding checks. Male and female instructors available.
              </p>
            </div>

            <button
              onClick={() => onOpenTrialModal('General Inquiry')}
              className="px-5 py-2.5 rounded-xl bg-[#082D7B] text-white hover:bg-[#0A2663] font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-xs whitespace-nowrap"
            >
              Book Free Trial With Faculty
            </button>
          </div> */}
        </div>
      </section>
      

    </div>
  );
};
