import React, { useEffect } from 'react';
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

  const JOURNEY_MILESTONES = [
    {
      period: "2016 – 2018",
      title: "The Inception & Foundational Years",
      highlight: "A Dedicated Vision for Expat Families",
      description:
        "Established by qualified Islamic educators who recognized that Muslim families in the UAE, Saudi Arabia, Qatar, and Gulf countries faced heavy school workloads and lacked structured, home-based Quranic instruction with authentic Tajweed.",
      achievements: [
        "First cohort of 40 students across Dubai, Riyadh & Doha",
        "Pioneered 1-on-1 virtual Tajweed assessment protocols",
        "Developed custom phonetics drills for English-speaking diaspora youth",
      ],
    },
    {
      period: "2019 – 2021",
      title: "Curriculum Standardization & 8 Core Areas",
      highlight: "Beyond Lessons to Comprehensive Deen",
      description:
        "Transformed from Quran reading classes into a holistic 8-area Islamic studies syllabus—incorporating clear Aqeedah, loving Seerah, daily Sunnah Duas, and conversational Arabic.",
      achievements: [
        "Standardized milestone assessment framework for parent tracking",
        "Introduced small-group character workshops and Salah verification clinics",
        "Expanded direct WhatsApp teacher-parent communication channels",
      ],
    },
    {
      period: "2022 – 2024",
      title: "Pedagogical Excellence & Faculty Expansion",
      highlight: "Formally Degreed & Child-Trained Scholars",
      description:
        "Instituted rigorous faculty standards requiring formal university degrees in Islamic Studies and ongoing pedagogical training in child psychology, empathy, and positive reinforcement.",
      achievements: [
        "100% vetted faculty holding formal degrees and certified Ijazahs",
        "Gamified classroom tools, interactive quizzes, and speech competitions",
        "Over 98% parent retention rate across 12 countries",
      ],
    },
    {
      period: "2025 – Present",
      title: "Entering Our 9th Academic Year",
      highlight: "A Proven Foundation for Life",
      description:
        "Now celebrating our 9th academic year, Islah Online Madrasa stands as a trusted sanctuary of authentic Islamic education, empowering hundreds of confident Muslim children across the globe.",
      achievements: [
        "Over 8 years of proven instructional excellence",
        "Comprehensive student progress dashboard & vocal audio logs",
        "Global alumni excelling in public recitation and righteous character",
      ],
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
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Story Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Section 1 • Our Story</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Why Islah Online Madrasa Was Established
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#151918]/80 leading-relaxed font-sans">
                <p>
                  Islah Online Madrasa was founded with a singular, urgent mission: <strong className="text-[#082D7B] font-semibold">to provide children with an authentic, structured, and joyful Islamic education that harmonizes with their modern academic lives.</strong>
                </p>

                <p>
                  Living in the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and across western diaspora communities, Muslim parents strive tirelessly to give their children top-tier international schooling. Yet, many face a painful dilemma: heavy academic timetables, long commutes, and exhausting extracurricular schedules leave little room for traditional evening madrasa attendance.
                </p>

                <p>
                  Families often turn to casual home tutors who lack formal pedagogy, or crowded community classes where individual Tajweed is overlooked and children feel disengaged. We recognized that Muslim children deserve better—they deserve inspiring scholars who understand their psychology, connect with their language, and guide them with patient affection.
                </p>

                <p>
                  By harnessing secure, high-definition online classrooms, Islah bridges this gap completely. We bring vetted, formally degreed Islamic educators directly into your living room, seamlessly adapting to your family's timezone and routine without the stress of rush-hour travel.
                </p>
              </div>

              {/* 3 Key Pillars of Our Story */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#082D7B]/10">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#082D7B]/10 text-[#082D7B] flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#082D7B]">GCC & Global Reach</h4>
                    <p className="text-[11px] text-[#151918]/70 mt-0.5">Tailored for busy expat & diaspora routines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#082D7B]/10 text-[#082D7B] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#082D7B]">Zero Commute Stress</h4>
                    <p className="text-[11px] text-[#151918]/70 mt-0.5">Evening and weekend sessions from home.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#082D7B]/10 text-[#082D7B] flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#082D7B]">Loving Mentorship</h4>
                    <p className="text-[11px] text-[#151918]/70 mt-0.5">Teachers who inspire genuine love for Allah.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Feature Card Showcase (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] p-8 sm:p-10 text-white shadow-2xl border border-white/15 overflow-hidden">
                <HeroBgPattern isDark opacity={0.08} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C9A45C] mb-6 border border-white/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-widest text-[#C9A45C]">
                    The Need We Fulfill
                  </span>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-snug">
                    Balancing Rigorous Academics with Uncompromising Faith
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6 font-sans">
                    Modern schooling demands hours of focused study. Our structured, bite-sized sessions ensure that learning the Qur'an and Sunnah feels refreshing, joyful, and deeply rewarding—never an added burden.
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/15">
                    {[
                      "Flexible scheduling around school exams & sports",
                      "Direct WhatsApp voice notes & progress updates",
                      "Gentle vocal correction without criticism",
                      "1-on-1 and small interactive classes (max 4-5)",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/15">
                    <button
                      onClick={() => onOpenTrialModal()}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-md cursor-pointer"
                    >
                      <span>Experience a Free Trial Session</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION 2: OUR JOURNEY (ENTERING THE 9th YEAR)              */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-white border-y border-[#082D7B]/10 overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
              <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Section 2 • Our Journey</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-4">
              Entering Our 9th Academic Year
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#151918]/75 leading-relaxed">
              From our humble beginning with a handful of families in 2016 to a globally trusted online institution, explore the deliberate growth of our teaching team, curriculum, and educational standards.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {JOURNEY_MILESTONES.map((milestone, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/12 p-6 flex flex-col justify-between hover:shadow-xl hover:border-[#C9A45C] transition-all duration-300 group"
              >
                <div>
                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082D7B] text-white text-[11px] font-bold mb-4">
                    <Clock className="w-3 h-3 text-[#C9A45C]" />
                    <span>{milestone.period}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1.5 leading-snug group-hover:text-[#0568BD] transition-colors">
                    {milestone.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#C9A45C] mb-3">
                    {milestone.highlight}
                  </div>

                  <p className="text-xs text-[#151918]/75 leading-relaxed mb-5 font-sans">
                    {milestone.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#082D7B]/10 space-y-2">
                  {milestone.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-[11px] text-[#151918]/85">
                      <Check className="w-3.5 h-3.5 text-[#082D7B] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#082D7B]/6 via-[#C9A45C]/15 to-[#082D7B]/6 border border-[#082D7B]/12 p-6 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-serif text-base font-bold text-[#082D7B]">
                Nearly a Decade of Tested, Consistent Trust
              </h4>
              <p className="text-xs text-[#151918]/75 mt-0.5">
                Over 98% of parents recommend Islah to family and friends.
              </p>
            </div>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#082D7B] hover:bg-[#001E3C] transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#C9A45C]" />
              <span>Inquire About Admissions</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION 3: OUR VISION & SECTION 4: OUR MISSION              */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#082D7B] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#C9A45C]/30 text-xs text-[#C9A45C] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Section 3 & 4 • Vision & Mission</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Our Vision & Mission
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/75 mt-3">
              Anchored in divine purpose, serving Muslim families with uncompromised sincerity and educational rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* OUR VISION CARD (5 cols) */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#0D2D72] to-[#082923] border border-[#C9A45C]/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A45C]/15 border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C]">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                    Our Vision
                  </span>
                </div>

                <div className="font-arabic text-3xl text-[#C9A45C] mb-4">
                  رُؤْيَتُنَا
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-snug mb-6 text-balance">
                  "Nurturing children who understand, practise, and implement Islam in daily life."
                </h3>

                <p className="text-sm text-white/80 leading-relaxed font-sans mb-8">
                  We envision young Muslim generations who hold the Holy Qur'an deeply in their hearts, follow the authentic Sunnah with conviction, and embody noble prophetic character that protects their moral compass wherever life takes them.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-white/90">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Following the Qur'an & Authentic Sunnah strictly</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Developing beautiful character, manners & honesty</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  <span>Building confident Muslim identity in modern societies</span>
                </div>
              </div>
            </div>

            {/* OUR MISSION PILLARS (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A45C] font-bold mb-2">
                  <Compass className="w-4 h-4" />
                  <span>Our Four Mission Commitments</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                  How We Realize Our Vision Every Single Day
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                
                {/* Mission 1 */}
                <div className="rounded-2xl bg-white/5 border border-white/15 p-6 hover:bg-white/10 hover:border-[#C9A45C]/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center font-serif font-bold text-sm mb-3">
                    01
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    Structured & Authentic Islamic Education
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed font-sans">
                    Providing a graded, step-by-step syllabus with clear milestones so parents witness continuous, measurable growth in reading, Tajweed, and Islamic knowledge.
                  </p>
                </div>

                {/* Mission 2 */}
                <div className="rounded-2xl bg-white/5 border border-white/15 p-6 hover:bg-white/10 hover:border-[#C9A45C]/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center font-serif font-bold text-sm mb-3">
                    02
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    Developing Strong Islamic Beliefs
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed font-sans">
                    Instilling pure, unshakeable Aqeedah that gives children clear moral clarity, answers their natural questions with wisdom, and shields them against modern confusion.
                  </p>
                </div>

                {/* Mission 3 */}
                <div className="rounded-2xl bg-white/5 border border-white/15 p-6 hover:bg-white/10 hover:border-[#C9A45C]/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center font-serif font-bold text-sm mb-3">
                    03
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    Encouraging Practical Application
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed font-sans">
                    Ensuring knowledge translates into action: verified physical Salah postures, spontaneous daily Duas, respect for parents, and truthful, modest conduct.
                  </p>
                </div>

                {/* Mission 4 */}
                <div className="rounded-2xl bg-white/5 border border-white/15 p-6 hover:bg-white/10 hover:border-[#C9A45C]/50 transition-all">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center font-serif font-bold text-sm mb-3">
                    04
                  </div>
                  <h4 className="font-serif text-base font-bold text-white mb-2">
                    Engaging Learning Environment
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed font-sans">
                    Creating vibrant, interactive virtual classrooms featuring discussions, quizzes, presentations, and competitions where children actively look forward to each class.
                  </p>
                </div>

              </div>
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
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10 overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
              <Users className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Section 6 • Faculty & Standards</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-4">
              Meet Our Professional & Trained Teaching Team
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#151918]/75 leading-relaxed">
              Our educators are not casual tutors. They have completed formal Islamic degrees, have subject-matter mastery, and receive continuous pedagogical training in student interaction and child psychology.
            </p>
          </div>

          {/* Teacher Standards Feature Callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10">
              <GraduationCap className="w-8 h-8 text-[#082D7B] mb-3" />
              <h4 className="font-serif text-base font-bold text-[#082D7B] mb-1.5">
                Formal Islamic University Degrees
              </h4>
              <p className="text-xs text-[#151918]/75 leading-relaxed font-sans">
                Instructors hold accredited degrees in Shariah, Usul al-Din, or Hadith, alongside certified Ijazahs in Tajweed recitation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10">
              <Heart className="w-8 h-8 text-[#082D7B] mb-3" />
              <h4 className="font-serif text-base font-bold text-[#082D7B] mb-1.5">
                Child Pedagogy & Psychology
              </h4>
              <p className="text-xs text-[#151918]/75 leading-relaxed font-sans">
                Trained in patient encouragement, positive reinforcement, and engaging modern attention spans without harshness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10">
              <Globe className="w-8 h-8 text-[#082D7B] mb-3" />
              <h4 className="font-serif text-base font-bold text-[#082D7B] mb-1.5">
                Bilingual Fluency & Cultural Empathy
              </h4>
              <p className="text-xs text-[#151918]/75 leading-relaxed font-sans">
                Fluent in English and Arabic, understanding the daily realities and schooling pressures of GCC and global diaspora youth.
              </p>
            </div>
          </div>

          {/* Teacher Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEACHERS.map((teacher) => (
              <div
                key={teacher.id}
                className="rounded-2xl bg-white border border-[#082D7B]/15 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#082D7B]"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#082D7B]/10 text-[#082D7B] flex items-center justify-center font-serif text-lg font-bold">
                      {teacher.title.includes('Female') ? 'U' : 'Q'}
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#082D7B]">
                        {teacher.name}
                      </h4>
                      <p className="text-xs text-[#C9A45C] font-medium">
                        {teacher.title}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-xs font-sans">
                    <div className="bg-[#FBF9F5] p-2.5 rounded-lg border border-[#082D7B]/8">
                      <span className="font-semibold text-[#082D7B] block mb-0.5">Qualification:</span>
                      <span className="text-[#151918]/80">{teacher.qualification}</span>
                    </div>
                    <div className="bg-[#FBF9F5] p-2.5 rounded-lg border border-[#082D7B]/8">
                      <span className="font-semibold text-[#082D7B] block mb-0.5">Specialisation:</span>
                      <span className="text-[#151918]/80">{teacher.specialisation}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#151918]/75 leading-relaxed font-sans mb-4">
                    {teacher.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#082D7B]/10 flex items-center justify-between text-[11px] text-[#151918]/65">
                  <span>Languages: {teacher.languages.join(', ')}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#082D7B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C]" />
                    Verified Faculty
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. MAJOR CALL TO ACTION: DISCOVER OUR CURRICULUM               */}
      {/* ============================================================== */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#001E3C] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#C9A45C]/40 text-xs text-[#E3C37A] font-semibold mb-6">
            <Sparkles className="w-4 h-4 text-[#C9A45C]" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Take the Next Step</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Discover Our Comprehensive Islamic Curriculum
          </h2>

          <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            From foundational Arabic phonetics and measured Tajweed to clear Aqeedah, Seerah, daily Sunnah prayers, and character workshops. Explore what your child will learn at each milestone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA: Discover Our Curriculum */}
            <button
              onClick={() => navigate('/#courses')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Discover Our Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA: Book Free Trial */}
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <span>Book a Free Trial Session</span>
            </button>

            {/* Tertiary: WhatsApp */}
            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            No credit card required • Complimentary 1-on-1 assessment • Tailored placement
          </div>
        </div>
      </section>

    </div>
  );
};
