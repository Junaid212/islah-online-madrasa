import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Heart,
  ShieldCheck,
  Award,
  Users,
  Lightbulb,
  Gamepad2,
  Mic,
  Smile,
  Compass,
  Check,
  LayoutGrid,
  TrendingUp,
  Layers
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { useNavigate } from '../router';

interface TeachingApproachPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const TeachingApproachPage: React.FC<TeachingApproachPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();
  const [activeTrajectory, setActiveTrajectory] = useState<number>(2);

  useEffect(() => {
    document.title = "Our Online Islamic Teaching Approach | Islah Online Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const TRAJECTORY_STAGES = [
    {
      step: "01",
      name: "Knowledge",
      arabic: "العلم",
      tagline: "Authentic Text Foundation",
      desc: "Sound classical knowledge rooted directly in the Holy Qur'an and verified Sunnah, taught with precision by formally certified scholars.",
      appliedFocus: "Structured Tajweed phonetics, verified Hadith readings & foundational Aqeedah."
    },
    {
      step: "02",
      name: "Understanding",
      arabic: "الفهم",
      tagline: "Grasping Divine Wisdom",
      desc: "Moving beyond rote repetition to unpack the context, translation, and wisdom (Hikmah) behind every commandment.",
      appliedFocus: "Socratic reflection, interactive Seerah discussions & open question-and-answer."
    },
    {
      step: "03",
      name: "Practice",
      arabic: "العمل",
      tagline: "Living Daily Rituals",
      desc: "Translating sacred knowledge into daily life through live demonstrations, correct Wudu postures, and independent five daily prayers.",
      appliedFocus: "Hands-on Wudu checks, Salah posture corrections & daily Dua habit tracking."
    },
    {
      step: "04",
      name: "Character",
      arabic: "الخُلق",
      tagline: "Upright Prophetic Manners",
      desc: "Cultivating heartfelt Islamic character: truthfulness (Sidq), modesty (Haya'), honoring parents, and resilience against peer pressure.",
      appliedFocus: "Real-world ethical scenarios, kindness at home & personal accountability."
    },
    {
      step: "05",
      name: "Success",
      arabic: "الفلاح",
      tagline: "Enduring Spiritual Peace",
      desc: "A grounded young Muslim who carries unshakeable love for Allah, moral confidence, and lasting success in Dunya and Akhirah.",
      appliedFocus: "Autonomous prayer, lifelong love for the Qur'an & confident Muslim identity."
    }
  ];

  const PHILOSOPHY_STEPS = [
    {
      number: "01",
      title: "Learn",
      arabic: "تعلّم",
      tagline: "Gain authentic Islamic knowledge.",
      color: "#082D7B",
      bgGradient: "from-[#082D7B] to-[#0A3B9C]",
      description:
        "Every lesson begins with authentic Islamic knowledge rooted in the Holy Qur'an and verified Sunnah. Qualified, formally degreed teachers guide students through structured concepts step-by-step.",
      deliverables: [
        "Pure knowledge from authentic classical sources without confusion",
        "Clear phonetics, correct articulation (Makharij), and Tajweed",
        "Gradual, bite-sized lessons suited to child cognitive attention spans"
      ]
    },
    {
      number: "02",
      title: "Understand",
      arabic: "تفهّم",
      tagline: "Understand the meaning and importance of what is learned.",
      color: "#0D2D72",
      bgGradient: "from-[#0D2D72] to-[#123E99]",
      description:
        "We never treat children like tape recorders. We unpack the meaning, the context, and the wisdom (Hikmah) behind commandments so children understand *why* we pray, fast, and speak truth.",
      deliverables: [
        "Unpacking the translation and background of Surahs and Hadith",
        "Encouraging students to ask questions freely in a warm, welcoming space",
        "Cultivating an inner emotional bond with Allah and Prophet Muhammad ﷺ"
      ]
    },
    {
      number: "03",
      title: "Implement",
      arabic: "طبّق",
      tagline: "Apply Islamic teachings in everyday life.",
      color: "#0568BD",
      bgGradient: "from-[#0568BD] to-[#0680E5]",
      description:
        "Education is only complete when it visibly shapes behavior. We provide practical habit trackers and real-world challenges so what is learned in class shines at home, school, and social interactions.",
      deliverables: [
        "Daily Sunnah habit challenges (e.g. smiling, thanking parents, making Duas)",
        "Live practical demonstrations of Wudu, Salah, and modest table manners",
        "Developing strong moral conscience (Taqwa) that guides their choices"
      ]
    }
  ];

  const INTERACTIVE_METHODS = [
    {
      icon: Users,
      title: "Live Discussions",
      color: "#082D7B",
      desc: "No boring one-way monologues. Students engage in vibrant dialogues, share their reflections, and participate in lively Socratic discussions with teachers.",
      badge: "Active Voice"
    },
    {
      icon: Gamepad2,
      title: "Quizzes & Educational Games",
      color: "#0D2D72",
      desc: "Gamified learning modules, interactive flashcards, Kahoot-style quiz bowls, and rapid-fire vocabulary challenges that keep students eager and alert.",
      badge: "Gamified"
    },
    {
      icon: Mic,
      title: "Student Presentations",
      color: "#0568BD",
      desc: "Children regularly deliver short presentations on Seerah stories, explain a Hadith, or demonstrate a Dua—building remarkable public speaking confidence.",
      badge: "Confidence Building"
    },
    {
      icon: Lightbulb,
      title: "Interactive Activities",
      color: "#C9A45C",
      desc: "Digital whiteboards, visual Arabic word-building puzzles, and paired peer recitations that ensure 100% active engagement throughout the class duration.",
      badge: "Hands-on"
    }
  ];

  const CHARACTER_TRAITS = [
    {
      trait: "Good Manners (Akhlaaq & Adab)",
      desc: "Gentle speech, patience, modesty (Haya'), clean presentation, and controlling anger, emulating Prophet Muhammad ﷺ as their ultimate personal hero.",
      badge: "Sunnah Adab"
    },
    {
      trait: "Respect for Parents & Teachers (Birr al-Walidayn)",
      desc: "Cultivating heartfelt gratitude, polite listening, helping at home, and honoring educators who invest in their spiritual upbringing.",
      badge: "Core Duty"
    },
    {
      trait: "Honesty & Personal Responsibility (Amanah)",
      desc: "Teaching truthfulness (Sidq) even when difficult, keeping promises, acknowledging mistakes, and taking ownership of their daily prayers.",
      badge: "Integrity"
    },
    {
      trait: "Applying Islamic Values Daily",
      desc: "Living as proud, respectful young Muslims who bring kindness and upright moral character to their school friends, sports teams, and digital interactions.",
      badge: "Living Islam"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">

      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Learn, Understand & Implement"
        breadcrumb="Teaching Approach"
        subtitle="Islamic education is more than completing a syllabus—our goal is to turn sacred knowledge into living faith, everyday practice, and noble prophetic character."
      />

      {/* 2. SECTION 1: SIMPLE, EASY & ENGAGING LEARNING (AS REQUESTED) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="relative py-12 sm:py-20 bg-[#FAF8F5] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Top Banner Card with warm illuminated manuscript background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl sm:rounded-[2.25rem] overflow-hidden  min-h-[280px] sm:min-h-[350px] md:min-h-[380px] flex flex-col items-center justify-center text-center p-6 sm:p-12 md:p-16"
          >
            {/* Background Image: illuminated warm open pages */}
            <img
              src="/assets/img/Midnight Blue Library Study.png"
              alt="Illuminated Quran manuscript background"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.1]"
              loading="lazy"
            />

            {/* Warm terracotta/amber gradient overlay matching the reference image */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#052049]/92 via-[#123E7A]/88 to-[#6E2606]/94 mix-blend-multiply" /> */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(80, 138, 255, 0.18)_0%,rgba(0,0,0,0.45)_100%)]" /> */}

            {/* Small Brand Title on Top */}
            <div className="relative z-10 text-white font-bold text-xs sm:text-sm tracking-wide lowercase mb-3 sm:mb-4 drop-shadow-xs select-none">
              islah<span className="font-semibold text-white/90">online</span>madrasa
            </div>

            {/* Big Headline */}
            <h2 className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-2xl text-balance drop-shadow-md">
              Islamic learning made simple,<br className="hidden sm:inline" /> easy and interesting<br className="hidden sm:inline" /> for everyone.
            </h2>
          </motion.div>

          {/* Centered Statement below the banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center max-w-3xl mx-auto mt-10 sm:mt-14 mb-8 sm:mb-10 px-2"
          >
            <p className="text-base sm:text-lg md:text-xl text-[#334155] leading-relaxed font-normal">
              <strong className="font-bold text-[#0F172A]">Learn Islamic Studies</strong> in a way that avoids the usual maze of rigid memorisation and takes you on a <span className="font-bold text-[#123E7A]">straight path</span> to understanding the Quran, the Sunnah, and everyday Islamic values with confidence.
            </p>
          </motion.div>

          {/* 2x2 Capsule Pills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 max-w-3xl mx-auto px-2"
          >
            {[
              {
                icon: LayoutGrid,
                text: "Start from the basics without feeling lost"
              },
              {
                icon: TrendingUp,
                text: "Progress at a steady pace that feels natural"
              },
              {
                icon: Layers,
                text: "Build clarity through short, focused lessons"
              },
              {
                icon: BookOpen,
                text: "Move from letters to real comprehension"
              }
            ].map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-5 py-3 sm:py-3.5 rounded-full bg-white/95 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#123E7A]/35 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-[#123E7A]/10 text-[#123E7A] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-slate-800 text-left">
                    {pill.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

        </div>
      </motion.section>

      {/* 3. SECTION 2: THREE-STEP LEARNING PHILOSOPHY */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Core Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-3">
              Our Three-Step Learning Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every single concept, Surah, and Hadith moves through these three intentional phases to ensure true retention and lifelong transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 lg:gap-0 items-stretch">
            {PHILOSOPHY_STEPS.map((step, idx) => {
              const isDarkNavy = idx === 0;
              const isMediumBlue = idx === 1;
              const isLightBlue = idx === 2;

              const cardBg = isDarkNavy
                ? "bg-[#0B2A68]"
                : isMediumBlue
                ? "bg-[#0E6AD8]"
                : "bg-[#ADC6EB]";

              const innerBorder = isLightBlue
                ? "border-[#0B2A68]/30"
                : "border-white/35";

              const textColor = isLightBlue ? "text-[#0B2A68]" : "text-white";
              const subtitleColor = isLightBlue ? "text-[#0B2A68]/85" : "text-white/90";
              const numberColor = isLightBlue ? "text-[#0B2A68]/20" : "text-white/20";
              const bulletColor = isLightBlue ? "text-[#0B2A68]" : "text-white/95";
              const numChar = String(idx + 1);

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`rounded-[1.75rem] p-3 sm:p-3.5 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${cardBg}`}
                >
                  <div
                    className={`relative rounded-[1.35rem] border ${innerBorder} p-6 sm:p-7 flex flex-col justify-between h-full min-h-[380px] sm:min-h-[420px] overflow-hidden`}
                  >
                    {/* Top Header: Big Numeral & Title/Tagline */}
                    <div>
                      <div className="flex items-start gap-4 sm:gap-5 mb-6">
                        <span
                          className={`font-sans text-6xl sm:text-7xl font-bold leading-none select-none shrink-0 ${numberColor}`}
                        >
                          0{numChar}
                        </span>
                        <div className="pt-0.5">
                          <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-1.5 ${textColor}`}>
                            {step.title}
                          </h3>
                          <p className={`text-xs sm:text-[13px] leading-snug font-normal ${subtitleColor}`}>
                            {step.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Bullet points list */}
                      <ul className="space-y-3 sm:space-y-3.5 text-xs sm:text-[13px] leading-relaxed relative z-10 mt-6 sm:mt-8">
                        {step.deliverables.map((d, i) => (
                          <li key={i} className={`flex items-start gap-2.5 ${bulletColor}`}>
                            <span className="text-base leading-none select-none mt-0.5">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Right Watermark Images (13.png, 14.png, 15.png) */}
                    {isDarkNavy && (
                      <img
                        src="/assets/img/13.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-44 h-44 sm:w-72 sm:h-72 object-contain pointer-events-none brightness-0 invert opacity-20 select-none"
                      />
                    )}
                    {isMediumBlue && (
                      <img
                        src="/assets/img/14.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-44 h-44 sm:w-72 sm:h-72 object-contain pointer-events-none brightness-0 invert opacity-20 select-none"
                      />
                    )}
                    {isLightBlue && (
                      <img
                        src="/assets/img/15.png"
                        alt=""
                        className="absolute bottom-0 right-0 w-44 h-44 sm:w-72 sm:h-72 object-contain pointer-events-none opacity-25 select-none"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: INTERACTIVE ONLINE LEARNING */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Gamepad2 className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Engagement</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Interactive Online Learning That Children Love
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We leverage modern pedagogical methods to ensure our digital classrooms feel lively, collaborative, and full of positive energy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERACTIVE_METHODS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full bg-[#F1EFEA] text-[#64748B]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 5. ALTERNATIVE MINIMAL SECTION: THE LIVING ISLAM ROADMAP */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#082D7B] via-[#093282] to-[#051C4E] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Minimal Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-[#DFBA74] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">The Transformation Pathway</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
              From Sacred Knowledge to Living Character
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              A progressive 5-stage trajectory bridging classical texts directly into daily rituals and lifelong prophetic character.
            </p>
          </motion.div>

          {/* ALTERNATIVE: Interactive Horizontal Progress Ribbon (No Boxed Cards) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-8 sm:mb-10 max-w-4xl mx-auto px-2"
          >
            {/* Connecting Track Line */}
            <div className="absolute top-5 sm:top-6 left-8 right-8 h-0.5 bg-white/15 rounded-full" />
            {/* Active Progress Fill */}
            <motion.div
              className="absolute top-5 sm:top-6 left-8 h-0.5 bg-gradient-to-r from-[#DFBA74] to-[#DFBA74] rounded-full"
              initial={false}
              animate={{ width: `${(activeTrajectory / (TRAJECTORY_STAGES.length - 1)) * 88}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            {/* 5 Milestone Nodes */}
            <div className="relative z-10 flex items-center justify-between">
              {TRAJECTORY_STAGES.map((stage, idx) => {
                const isActive = activeTrajectory === idx;
                const isPast = activeTrajectory >= idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setActiveTrajectory(idx)}
                    className="group flex flex-col items-center cursor-pointer focus:outline-none transition-transform"
                  >
                    <motion.div
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono text-xs sm:text-sm font-bold transition-all duration-300 ${
                        isActive
                          ? "bg-[#DFBA74] text-[#082D7B] shadow-lg shadow-[#DFBA74]/30 ring-4 ring-[#DFBA74]/25 scale-110"
                          : isPast
                          ? "bg-white text-[#082D7B] shadow-sm"
                          : "bg-[#0A2F7D] border border-white/20 text-white/60 hover:border-white/50"
                      }`}
                    >
                      {stage.step}
                    </motion.div>
                    <span className={`text-xs font-arabic mt-2 transition-colors ${isActive ? "text-[#DFBA74] font-bold" : "text-white/60"}`}>
                      {stage.arabic}
                    </span>
                    <span className={`text-[11px] sm:text-xs font-medium mt-0.5 transition-colors hidden sm:block ${isActive ? "text-white font-bold" : "text-white/70"}`}>
                      {stage.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Dynamic Active Milestone Showcase Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrajectory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="max-w-4xl mx-auto p-5 sm:p-7 rounded-2xl bg-white/7 backdrop-blur-md border border-white/12 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 mb-12 sm:mb-14"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#DFBA74] px-2 py-0.5 rounded-full bg-[#DFBA74]/15">
                    Stage {TRAJECTORY_STAGES[activeTrajectory].step}
                  </span>
                  <span className="text-xs sm:text-sm font-arabic text-[#DFBA74]">
                    {TRAJECTORY_STAGES[activeTrajectory].arabic}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {TRAJECTORY_STAGES[activeTrajectory].name} — {TRAJECTORY_STAGES[activeTrajectory].tagline}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal max-w-2xl">
                  {TRAJECTORY_STAGES[activeTrajectory].desc}
                </p>
              </div>

              <div className="w-full md:w-auto md:min-w-[280px] p-3.5 sm:p-4 rounded-xl bg-white/6 border border-white/10 shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFBA74] block mb-1">
                  Living Implementation:
                </span>
                <p className="text-xs text-white/90 leading-relaxed font-normal">
                  {TRAJECTORY_STAGES[activeTrajectory].appliedFocus}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ALTERNATIVE: Borderless 4-Point Applied Pedagogy Ribbon */}
          <div className="max-w-5xl mx-auto pt-8 sm:pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#DFBA74] shrink-0 mt-0.5">
                <Smile className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Hands-On Practice</h4>
                <p className="text-[11px] text-white/70 leading-relaxed font-normal">
                  Live Wudu posture corrections, Salah alignment & daily Dua habit tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#DFBA74] shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Thematic Workshops</h4>
                <p className="text-[11px] text-white/70 leading-relaxed font-normal">
                  Interactive Seerah deep-dives, Ramadan bootcamps & digital ethics.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#DFBA74] shrink-0 mt-0.5">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Real-Life Scenarios</h4>
                <p className="text-[11px] text-white/70 leading-relaxed font-normal">
                  Overcoming peer pressure, standing up for truth & empathetic manners.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#DFBA74] shrink-0 mt-0.5">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">Reflective Voice</h4>
                <p className="text-[11px] text-white/70 leading-relaxed font-normal">
                  Encouraging children to express questions with confident Islamic identity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
