import React, { useEffect, useState } from 'react';
import {
  Trophy,
  Award,
  Play,
  Volume2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
  Quote,
  Users,
  ShieldCheck,
  Heart,
  Video,
  BookOpen
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { useNavigate } from '../router';

interface StudentAchievementsPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
  onSelectPerformance?: (item: any) => void;
  onSelectTestimonial?: (item: any) => void;
}

export const StudentAchievementsPage: React.FC<StudentAchievementsPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
  onSelectPerformance,
  onSelectTestimonial,
}) => {
  const navigate = useNavigate();
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Student Qur'an Recitation & Islamic Learning Achievements | Islah";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const RECITATIONS = [
    {
      id: "rec-1",
      studentName: "Zayd M.",
      age: "Age 8 • Dubai, UAE",
      surah: "Surah Al-Mulk (Verses 1–12)",
      level: "Quran with Tajweed",
      duration: "2:45",
      note: "Flawless Madd (elongation) and accurate Makhraj of letters Qaf and 'Ayn.",
      category: "Recitation"
    },
    {
      id: "rec-2",
      studentName: "Maryam A.",
      age: "Age 10 • Riyadh, Saudi Arabia",
      surah: "Surah An-Naba' (Complete)",
      level: "Juz Amma Hifz",
      duration: "3:10",
      note: "Steady rhythm, beautiful Tarteel, and natural pause points (Waqf).",
      category: "Hifz"
    },
    {
      id: "rec-3",
      studentName: "Hamza K.",
      age: "Age 6 • London, UK",
      surah: "Surah Al-Balad & Ash-Shams",
      level: "Noorani Qaida Graduate",
      duration: "1:55",
      note: "Progressed from Arabic alphabet recognition to fluent recitation in 7 months.",
      category: "Early Reader"
    },
    {
      id: "rec-4",
      studentName: "Amina S.",
      age: "Age 12 • Doha, Qatar",
      surah: "Surah Ar-Rahman (Verses 1–30)",
      level: "Advanced Tajweed",
      duration: "3:40",
      note: "Exquisite Ghunnah and Ikhfa control with soulful recitation tone.",
      category: "Tajweed"
    }
  ];

  const PRESENTATIONS = [
    {
      id: "pres-1",
      title: "Lessons From the Migration (Hijrah)",
      student: "Omar T. (Age 11 • Abu Dhabi)",
      topic: "Seerah Summary",
      desc: "Delivered a vivid presentation on the loyalty of Abu Bakr (RA) and the lessons of trust in Allah during difficult times.",
      badge: "Seerah Presentation"
    },
    {
      id: "pres-2",
      title: "Hadith: 'Actions Are By Intentions'",
      student: "Fatima R. (Age 9 • Jeddah)",
      topic: "Hadith Explanation",
      desc: "Explained the profound wisdom of Hadith 1 of Nawawi with relatable examples on doing chores to please Allah and parents.",
      badge: "Hadith Showcase"
    },
    {
      id: "pres-3",
      title: "The Five Pillars of Islam in Daily Life",
      student: "Ibrahim H. (Age 7 • Kuwait)",
      topic: "Islamic Studies Topic",
      desc: "An illustrated talk demonstrating what each pillar represents and why Salah acts as our direct conversation with Allah.",
      badge: "Core Beliefs"
    }
  ];

  const DUAS_ARABIC = [
    {
      title: "Masnoon Duas of the Day",
      student: "Ayaan & Bilal (Ages 7 & 9 • Sharjah)",
      format: "Dua Recitation & Meaning",
      desc: "Reciting the Duas before sleeping, waking up, leaving the house, and after meals with clear English translations and pronunciation.",
      badge: "Dua Mastery"
    },
    {
      title: "At the Arabic Market: Spoken Dialogue",
      student: "Sarah & Layla (Ages 11 • Bahrain)",
      format: "Conversational Arabic",
      desc: "An unscripted conversational performance in Fusha Arabic between customer and shopkeeper, demonstrating confident conversational fluency.",
      badge: "Spoken Arabic"
    }
  ];

  const MILESTONE_AWARDS = [
    {
      title: "Noorani Qaida Completion",
      student: "Yusuf N. (Age 6 • Muscat)",
      achievement: "Graduated to reading directly from the Mushaf after mastering all phonetic rules.",
      award: "Gold Certificate of Completion"
    },
    {
      title: "Juz 30 (Juz Amma) Hifz Milestone",
      student: "Hafsah B. (Age 10 • UK)",
      achievement: "Memorised all 37 Surahs of Juz Amma with verified Tajweed examination.",
      award: "Hifz Milestone Plaque"
    },
    {
      title: "100-Day Consistent Attendance & Akhlaaq",
      student: "Rayyan M. (Age 8 • Dammam)",
      achievement: "Never missed a single online class, always punctual with camera on and glowing Adab.",
      award: "Exemplary Student Award"
    },
    {
      title: "Prophetic Manners in Practice",
      student: "Zahra K. (Age 12 • Canada)",
      achievement: "Honored for daily kindness journal tracking and outstanding empathy towards peers.",
      award: "Akhlaaq Excellence"
    }
  ];

  const TESTIMONIALS = [
    {
      parent: "Umm Zayd",
      location: "Dubai, United Arab Emirates",
      quote:
        "My son used to dread weekend Arabic classes at local centers. Since joining Islah, he reminds me 15 minutes before class starts. His teacher Ustadh Ahmad is remarkably gentle, patient, and knowledgeable.",
      highlight: "Enthusiastic Learner"
    },
    {
      parent: "Dr. Tariq Al-Mansoor",
      location: "Riyadh, Saudi Arabia",
      quote:
        "The structured curriculum is what won us over. Every month we receive an audio report and teacher comments. Seeing our 8-year-old recite Surah Al-Mulk with proper Makharij brings tears of gratitude to our eyes.",
      highlight: "Structured Monthly Reports"
    },
    {
      parent: "Sister Amina & Brother Farooq",
      location: "London, United Kingdom",
      quote:
        "Living in the West, finding authentic Islamic education with teachers who communicate warmly in English was our greatest worry. Islah has been an absolute blessing for both of our daughters.",
      highlight: "Strong Islamic Identity in the West"
    }
  ];

  const toggleAudio = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Inspiring Student Achievements"
        breadcrumb="Student Achievements"
        subtitle="Celebrating the dedication, beautiful recitations, and inspiring character transformations of our young learners worldwide."
      />

      {/* 2. SECTION 1: INTRODUCTION & ETHICAL COMMITMENT */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <Trophy className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Milestones of Dedication</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Celebrating Personal Growth, Reverence & Confidence
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
                At Islah Online Madrasa, achievements are not measured simply by trophies or test percentages. We celebrate every child who overcomes a stutter to articulate a difficult Arabic letter, every student who memorises their first Surah, and every young Muslim who begins praying five times daily with devotion.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                Here we share selected highlights of our students' recitations, presentations, and character milestones. Every child moves at their own pace, supported by constant encouragement and positive reinforcement.
              </p>

              {/* Dignity & Privacy Notice Card */}
              <div className="p-4 rounded-xl bg-white border border-[#082D7B]/15 shadow-sm flex items-start gap-3.5 mb-8">
                <ShieldCheck className="w-5 h-5 text-[#082D7B] shrink-0 mt-0.5" />
                <div className="text-xs text-[#64748B] leading-relaxed">
                  <strong className="text-[#082D7B]">Parental Privacy & Dignity Commitment:</strong> All student performances and recordings are published strictly with verified parental consent. We safeguard our students' dignity and modesty at all times.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenTrialModal()}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Start Your Child's Learning Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#082D7B] bg-white hover:bg-[#082D7B]/5 border border-[#082D7B]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire With Admissions</span>
                </button>
              </div>
            </div>

            {/* Right Side Trophy Showcase Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#082D7B]/15 to-[#C9A45C]/20 rounded-3xl blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80"
                    alt="Student holding Quran graduation certificate with pride"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 bg-gradient-to-b from-white to-[#F8F6F0]">
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                      <span>GLOBAL MADRASA ALUMNI</span>
                      <span className="text-[#C9A45C] font-semibold">OVER 500+ STUDENTS</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">
                      Inspiring the Next Generation of Huffaz & Scholars
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Equipping children with fluent recitation and sincere devotion that stays with them throughout their adult lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: QUR'AN RECITATION HIGHLIGHTS */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Volume2 className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Vocal Excellence</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Qur'an Recitation & Tajweed Performances
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Listen to the measured, melodious recitations of our young learners practicing correct Tajweed under the guidance of certified teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RECITATIONS.map((rec) => {
              const isPlaying = playingAudioId === rec.id;
              return (
                <div
                  key={rec.id}
                  className="rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] font-bold">
                        {rec.category}
                      </span>
                      <span className="text-xs text-[#C9A45C] font-semibold">
                        {rec.level}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082D7B] mb-1">
                      {rec.surah}
                    </h3>

                    <div className="text-xs text-[#64748B] mb-4">
                      {rec.studentName} • {rec.age}
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed mb-6 italic bg-white p-3 rounded-xl border border-[#082D7B]/5">
                      Teacher Feedback: "{rec.note}"
                    </p>
                  </div>

                  {/* Audio Player Bar Simulation */}
                  <div className="pt-4 border-t border-[#082D7B]/10 flex items-center justify-between gap-4">
                    <button
                      onClick={() => toggleAudio(rec.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-[#C9A45C] text-[#082D7B]'
                          : 'bg-[#082D7B] text-white hover:bg-[#062360]'
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-4 h-4 animate-pulse" />
                          <span>Playing Audio...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Listen Sample ({rec.duration})</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onOpenTrialModal(rec.surah)}
                      className="text-xs font-semibold text-[#082D7B] hover:text-[#C9A45C] transition-colors cursor-pointer"
                    >
                      Book Trial For This Level →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: ISLAMIC KNOWLEDGE PRESENTATIONS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Scholarly Expression</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Islamic Knowledge Presentations
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Students demonstrate comprehension of Seerah, Hadith, and Islamic topics through structured oral presentations and visual slides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRESENTATIONS.map((pres) => (
              <div
                key={pres.id}
                className="p-8 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] uppercase mb-4 inline-block">
                    {pres.badge}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#082D7B] mb-2">
                    {pres.title}
                  </h3>

                  <div className="text-xs text-[#C9A45C] font-semibold mb-4">
                    {pres.student}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pres.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 text-[11px] text-[#64748B] flex items-center justify-between">
                  <span>Topic: {pres.topic}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#082D7B]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: DUAS & ARABIC CONVERSATION */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Daily Adab & Language</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Duas & Spoken Arabic Showcases
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Showcasing practical fluency: everyday supplications and spontaneous dialogues between young students and native Arabic teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DUAS_ARABIC.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] uppercase">
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#C9A45C] font-semibold">{item.format}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#082D7B] mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs text-[#64748B] mb-4">
                    {item.student}
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#082D7B]">Parental Feedback Score: 5.0 / 5.0</span>
                  <div className="flex items-center gap-1 text-[#C9A45C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: STUDENT HIGHLIGHTS & AWARDS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Award className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Certificates & Honors</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Student Highlights & Milestone Awards
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every milestone reached represents months of dedication, patient teacher guidance, and loving parental encouragement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MILESTONE_AWARDS.map((aw, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#C9A45C]/15 text-[#C9A45C] flex items-center justify-center mb-4">
                    <Trophy className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] text-[#082D7B] font-bold uppercase tracking-wider block mb-1">
                    {aw.award}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">
                    {aw.title}
                  </h3>

                  <div className="text-xs text-[#64748B] mb-3">
                    {aw.student}
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {aw.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: PARENT TESTIMONIALS */}
      <section className="relative py-16 sm:py-24 bg-[#082D7B] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-3">
              <Quote className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Verified Parent Feedback</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Real Experiences From Families Worldwide
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Read how Islah Online Madrasa is helping families across the GCC and around the world nurture strong faith at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C9A45C] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="font-bold text-sm text-white">{t.parent}</div>
                  <div className="text-xs text-[#C9A45C]">{t.location}</div>
                  <div className="text-[11px] text-white/60 mt-1">{t.highlight}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. MAJOR CTA: START YOUR CHILD'S LEARNING JOURNEY */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Your Child's Turn to Shine</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Start Your Child's Learning Journey Today
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every great journey begins with a single step. Book a complimentary trial session and see the Islah difference in your child's very first class.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Start Your Child's Learning Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Talk to Admissions on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            Free 1-on-1 assessment • Tailored pace • Certified Islamic scholars
          </div>
        </div>
      </section>

    </div>
  );
};
