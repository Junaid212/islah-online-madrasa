import React, { useEffect } from 'react';
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
  Check
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

  useEffect(() => {
    document.title = "Our Online Islamic Teaching Approach | Islah Online Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

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

      {/* 2. SECTION 1: INTRODUCTION & COMPARISON */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <Compass className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Our Pedagogy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Beyond Completing a Syllabus: Turning Knowledge into Practice
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed mb-6">
                Too often, traditional Quran classes reduce Islamic learning to hurried recitation without comprehension or rote memorisation that fades quickly. At Islah Online Madrasa, our approach is fundamentally different.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                We believe that authentic education must engage the child's mind, touch their heart, and guide their actions. Every lesson is crafted to connect sacred teachings with the real-life situations modern children navigate every day.
              </p>

              {/* Side-by-Side Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Traditional Rote */}
                <div className="p-5 rounded-2xl bg-white/70 border border-red-100 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Traditional Passive Rote
                  </div>
                  <ul className="space-y-2 text-xs text-[#64748B]">
                    <li>• Passive listening with little student voice</li>
                    <li>• Memorising texts without understanding meanings</li>
                    <li>• Strict pressure causing anxiety and burnout</li>
                    <li>• Disconnected from the child's daily challenges</li>
                  </ul>
                </div>

                {/* The Islah Way */}
                <div className="p-5 rounded-2xl bg-white border border-[#082D7B]/20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#082D7B]/5 rounded-bl-full" />
                  <div className="text-xs font-bold uppercase tracking-wider text-[#082D7B] mb-2 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#082D7B]" />
                    The Islah Holistic Way
                  </div>
                  <ul className="space-y-2 text-xs text-[#334155]">
                    <li>• Interactive live discussion & active participation</li>
                    <li>• Clear explanations of wisdom, meanings & Duas</li>
                    <li>• Patient positive reinforcement & joyful encouragement</li>
                    <li>• Direct practical habit tracking for everyday life</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => onOpenTrialModal()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Experience the Islah Learning Approach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Side Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#082D7B]/20 via-[#C9A45C]/20 to-transparent rounded-3xl blur-xl" />

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                    alt="Teacher engaging interactively with young Islamic student online"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="lazy"
                  />

                  <div className="p-6 bg-gradient-to-b from-white to-[#F8F6F0]">
                    <div className="flex items-center gap-2 text-xs text-[#C9A45C] font-bold mb-1">
                      <Sparkles className="w-4 h-4" />
                      <span>CHILD-CENTERED PEDAGOGY</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#082D7B]">
                      Safe, Nurturing & Encouraging Classrooms
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed mt-1">
                      Our teachers are trained in child psychology, empathy, and positive reinforcement to make every session something your child genuinely looks forward to.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: THREE-STEP LEARNING PHILOSOPHY */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Core Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Our Three-Step Learning Philosophy
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every single concept, Surah, and Hadith moves through these three intentional phases to ensure true retention and lifelong transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/15 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Subtle Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-4xl font-extrabold text-[#082D7B]/20 group-hover:text-[#082D7B] transition-colors">
                    {step.number}
                  </span>
                  <span className="font-serif text-xl font-bold text-[#082D7B]/40 group-hover:text-[#C9A45C] transition-colors">
                    {step.arabic}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl font-bold text-[#082D7B] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#0568BD] uppercase tracking-wider mb-4">
                    {step.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {step.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#082D7B] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#082D7B]/10 flex items-center justify-between text-xs text-[#082D7B] font-semibold">
                  <span>Phase {step.number} of Mastery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
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

      {/* 5. SECTION 4: CHARACTER DEVELOPMENT (AKHLAAQ & TARBIYAH) */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Image Showcase (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white">
                <img
                  src="https://i.pinimg.com/736x/2e/ef/dc/2eefdc096c3bfce17ef597be49b5fbbd.jpg"
                  alt="Young student showing good manners and attentive listening"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082D7B]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="font-serif text-xl font-bold mb-1">Tarbiyah (Character Cultivation)</div>
                    <p className="text-xs text-white/80">
                      "I was sent only to perfect noble character." — Prophet Muhammad ﷺ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Character Principles (7 cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <Heart className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Character Development</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Cultivating Noble Manners in Every Daily Encounter
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                Islamic education is not merely an intellectual pursuit; it is a transformation of the soul. Our curriculum explicitly builds character traits that prepare students to be compassionate, responsible, and upright members of society.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CHARACTER_TRAITS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#FBF9F5] border border-[#082D7B]/10 hover:border-[#082D7B]/25 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-serif text-base font-bold text-[#082D7B]">
                        {item.trait}
                      </h4>
                      <span className="text-[10px] text-[#C9A45C] font-semibold">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECTION 5: LEARNING BEYOND TEXTBOOKS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Lightbulb className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Real-World Application</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Learning Beyond Textbooks
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We bring Islamic studies alive through hands-on activities, practical workshops, real-life situational challenges, and reflective communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B] mb-4">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-2">Practical Activities</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Step-by-step Wudu checks, live Salah correction, and Dua memorisation cards integrated directly into daily routines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#0D2D72]/10 flex items-center justify-center text-[#0D2D72] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0D2D72] mb-2">Interactive Workshops</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Thematic weekend deep-dives on Seerah lessons, Ramadan prep bootcamps, and digital ethics for modern students.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#0568BD]/10 flex items-center justify-center text-[#0568BD] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0568BD] mb-2">Real-Life Scenarios</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Analyzing ethical dilemmas: how to handle peer pressure, standing up for honesty, and showing empathy to friends.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#C9A45C]/15 flex items-center justify-center text-[#C9A45C] mb-4">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-2">Reflection & Voice</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Encouraging children to express their feelings, speak respectfully, and form thoughtful Islamic perspectives.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: OUR EDUCATIONAL GOAL (THE PIPELINE) */}
      <section className="relative py-16 sm:py-24 bg-[#082D7B] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">The Roadmap of Transformation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Our Educational Goal
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Every stage of learning naturally unlocks the next—creating a continuous upward trajectory from early knowledge to enduring success.
            </p>
          </div>

          {/* Transformation Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
            {[
              { step: "01", name: "Knowledge", arabic: "العلم", desc: "Authentic text from Quran & Sunnah" },
              { step: "02", name: "Understanding", arabic: "الفهم", desc: "Comprehending context & wisdom" },
              { step: "03", name: "Practice", arabic: "العمل", desc: "Daily acts of worship & Sunnah" },
              { step: "04", name: "Character", arabic: "الخُلق", desc: "Exemplary Akhlaaq & honesty" },
              { step: "05", name: "Success", arabic: "الفلاح", desc: "Joy & peace in Dunya and Akhirah" },
            ].map((p, idx) => (
              <div
                key={p.step}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center flex flex-col items-center justify-between hover:bg-white/15 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] font-mono text-sm font-bold flex items-center justify-center mb-3">
                    {p.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs text-[#C9A45C] font-serif mb-2">
                    {p.arabic}
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. MAJOR CTA: EXPERIENCE THE ISLAH LEARNING APPROACH */}
      {/* <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Book a Free Session</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Experience the Islah Learning Approach First-Hand
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Witness how our qualified teachers interact patiently with your child in a complimentary 1-on-1 trial class. No pressure, no obligations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Experience the Islah Learning Approach</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Ask Our Academic Team on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            Free 30-minute interactive trial • Tailored pace assessment • Worldwide availability
          </div>
        </div>
      </section> */}

    </div>
  );
};
