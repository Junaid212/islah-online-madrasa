import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  Calendar,
  Users,
  Award,
  Video,
  Play,
  ArrowRight,
  MessageCircle,
  Trophy,
  CheckCircle2,
  Gamepad2,
  Mic,
  Camera,
  Heart
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { useNavigate } from '../router';

interface WorkshopsPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'all' | 'workshops' | 'competitions' | 'presentations'>('all');

  useEffect(() => {
    document.title = "Islamic Workshops & Student Activities | Islah Online Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const WORKSHOPS = [
    {
      id: "ramadan-prep",
      title: "Ramadan Prep & Fasting Bootcamp",
      arabic: "استقبال شهر رمضان",
      category: "workshops",
      badge: "Seasonal Intensive",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
      description: "An inspiring interactive weekend workshop teaching children the spiritual secrets of Ramadan, practical fasting tips for beginners, and setting Quranic goals.",
      keyTopics: ["Spiritual purpose of fasting", "Dua lists for Iftar & Suhoor", "Lailatul Qadr reflections"]
    },
    {
      id: "character-building",
      title: "Noble Akhlaaq: Kindness & Empathy",
      arabic: "بر الوالدين وحسن الخلق",
      category: "workshops",
      badge: "Character Special",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      description: "Focusing on honoring parents (Birr al-Walidayn), controlling anger, speaking politely, and behaving as an upright ambassador of Islam at school and home.",
      keyTopics: ["Overcoming sibling rivalry", "Speaking with patience & gentle words", "Gratitude journal exercises"]
    },
    {
      id: "quran-stories",
      title: "Stories of the Prophets in High Definition",
      arabic: "قصص الأنبياء عليهم السلام",
      category: "workshops",
      badge: "Storytelling & Seerah",
      image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
      description: "Chronological immersive journeys following Prophet Ibrahim, Musa, Yusuf, and Muhammad ﷺ, extracting timeless resilience and courage lessons for modern kids.",
      keyTopics: ["Courage in standing for truth", "Trusting in Allah’s plan", "Interactive timeline maps"]
    },
    {
      id: "digital-ethics",
      title: "Digital Manners & Online Ethics for Youth",
      arabic: "أخلاقيات العصر الرقمي",
      category: "workshops",
      badge: "Youth Specialized",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      description: "Addressing screen time, digital modesty, avoiding online toxicity, and using modern technology responsibly while maintaining constant consciousness of Allah.",
      keyTopics: ["Guarding speech in chats & gaming", "Managing screen time with Salah", "Social media mindfulness"]
    }
  ];

  const PRESENTATIONS = [
    {
      title: "Student-Led Seerah Lectures",
      desc: "Students prepare 5-minute illustrated talks about pivotal moments in the life of Prophet Muhammad ﷺ, building public speaking mastery and deep knowledge.",
      tag: "Seerah"
    },
    {
      title: "Hadith Explanation Showcases",
      desc: "Young learners select a Hadith from the 40 Hadith of Imam Nawawi, explaining its historical context and presenting a contemporary real-world example.",
      tag: "Hadith"
    },
    {
      title: "Dua & Adhkar Etiquette Demonstrations",
      desc: "Live roleplay sessions demonstrating the Sunnah manners of waking up, dining, greeting elders, and entering the masjid with proper supplications.",
      tag: "Daily Adab"
    },
    {
      title: "Spoken Arabic Dialogues",
      desc: "Pairs of students conduct spontaneous dialogues in Arabic, covering greetings, shopping, describing their family, and discussing their daily hobbies.",
      tag: "Arabic"
    }
  ];

  const COMPETITIONS = [
    {
      title: "Annual Qur'an Recitation Cup",
      format: "Quarterly & Annual",
      metric: "Tajweed & Tone Accuracy",
      desc: "A celebrated event encouraging students to recite with measured Tajweed, beautiful vocal pacing (Tarteel), and reverence. Every participant receives encouraging feedback."
    },
    {
      title: "Live Islamic Knowledge Trivia Bowl",
      format: "Monthly Weekend Challenge",
      metric: "Speed & Deep Retention",
      desc: "Interactive Kahoot and buzzer games testing knowledge on Prophets, Sahabah, Fiqh of prayer, and Islamic history in a fun, friendly team tournament."
    },
    {
      title: "30-Day Sunnah Habit Streak",
      format: "Seasonal Tracker",
      metric: "Consistency & Character",
      desc: "A structured printable and digital tracker where students check off daily acts: praying on time, smiling, helping parents, and reciting morning/evening Adhkar."
    }
  ];

  const GALLERY_ITEMS = [
    {
      title: "Annual Quran Recitation Finale",
      subtitle: "Over 80 students participated across GCC & UK",
      tag: "Recitation Event",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interactive Kahoot Trivia Championship",
      subtitle: "Live team competition with exciting quiz rounds",
      tag: "Quiz Bowl",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Practical Salah & Wudu Live Workshop",
      subtitle: "Hands-on correction of posture and recitation",
      tag: "Workshop",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Student Seerah Presentation Highlights",
      subtitle: "Confident young speakers presenting prophetic lessons",
      tag: "Presentation",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tajweed Rules Mastery Celebration",
      subtitle: "Certificates awarded for Noorani Qaida completions",
      tag: "Achievement",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Ramadan Kids Dua Booklets Showcase",
      subtitle: "Handmade supplication journals and daily trackers",
      tag: "Creative",
      image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Learning Beyond the Classroom"
        breadcrumb="Workshops & Activities"
        subtitle="Enriching Islamic education with dynamic weekend workshops, engaging student presentations, knowledge quizzes, and practical challenges."
      />

      {/* 2. SECTION 1: INTRODUCTION */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Enrichment & Activities</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Making Islamic Learning Enjoyable, Memorable & Engaging
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
                Children learn best when they are active participants rather than silent listeners. While regular classes establish systematic study, our workshops and extracurricular activities create high-energy moments of excitement and healthy camaraderie.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                Through interactive quiz bowls, peer speech presentations, creative habit challenges, and seasonal intensives, students develop pride in their Islamic heritage and look forward to every event with genuine enthusiasm.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B] mb-2 font-bold font-mono">
                    50+
                  </div>
                  <h4 className="font-bold text-xs text-[#082D7B] mb-1">Interactive Events</h4>
                  <p className="text-[11px] text-[#64748B]">Conducted across the academic year</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#0D2D72]/10 flex items-center justify-center text-[#0D2D72] mb-2 font-bold font-mono">
                    100%
                  </div>
                  <h4 className="font-bold text-xs text-[#0D2D72] mb-1">Active Participation</h4>
                  <p className="text-[11px] text-[#64748B]">Every child gets a stage to shine</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#0568BD]/10 flex items-center justify-center text-[#0568BD] mb-2 font-bold font-mono">
                    12+
                  </div>
                  <h4 className="font-bold text-xs text-[#0568BD] mb-1">Global Countries</h4>
                  <p className="text-[11px] text-[#64748B]">Students collaborating worldwide</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('/student-achievements')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Explore Student Achievements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#082D7B] bg-white hover:bg-[#082D7B]/5 border border-[#082D7B]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire About Upcoming Workshops</span>
                </button>
              </div>
            </div>

            {/* Right Image Graphic (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#082D7B]/15 to-[#C9A45C]/20 rounded-3xl blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80"
                    alt="Students actively participating in online Islamic quiz challenge"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 bg-gradient-to-b from-white to-[#F8F6F0]">
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                      <span>WEEKEND INTENSIVE</span>
                      <span className="text-[#C9A45C] font-semibold">ALL LEVELS</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">
                      Collaborative Learning Without Borders
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Children connect with fellow Muslim peers from Dubai, Riyadh, London, Toronto, and Doha—sharing their love for the Qur'an.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: ISLAMIC WORKSHOPS */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Special Programmes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Featured Islamic Workshops
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Targeted modules addressing character development, spiritual preparation, and historical inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WORKSHOPS.map((ws) => (
              <div
                key={ws.id}
                className="rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="sm:w-5/12 h-52 sm:h-auto relative overflow-hidden bg-slate-100">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white font-mono">
                    {ws.badge}
                  </div>
                </div>

                <div className="p-6 sm:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-serif text-[#C9A45C] font-bold mb-1">
                      {ws.arabic}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#082D7B] mb-2.5">
                      {ws.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed mb-4">
                      {ws.description}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {ws.keyTopics.map((t, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#082D7B] shrink-0" />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenTrialModal(ws.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#082D7B] hover:text-[#C9A45C] transition-colors cursor-pointer"
                  >
                    <span>Register Interest</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: STUDENT PRESENTATIONS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Mic className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Public Speaking & Voice</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Student-Led Presentations
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              When children articulate what they learn in their own words, their comprehension deepens and their confidence soars.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRESENTATIONS.map((pres, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B] uppercase mb-4 inline-block">
                    {pres.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-2">
                    {pres.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {pres.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 text-[11px] text-[#C9A45C] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Recorded for Parents</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: COMPETITIONS & QUIZZES */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Friendly Challenges</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Competitions & Knowledge Quizzes
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Cultivating healthy motivation through positive reinforcement, celebrating effort and personal growth above all else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPETITIONS.map((comp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B] mb-5">
                    <Trophy className="w-6 h-6 text-[#C9A45C]" />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                    <span>{comp.format}</span>
                    <span className="text-[#082D7B] font-semibold">{comp.metric}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#082D7B] mb-3">
                    {comp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#082D7B]/10 text-xs font-semibold text-[#082D7B]">
                  Certificates & Medals for All Participants
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: PRACTICAL LEARNING */}
      <section className="relative py-16 sm:py-24 bg-[#082D7B] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Practical Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Participation-Based Practical Learning
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              We guide students to turn theory into direct muscle memory through guided prayer checks, charity challenges, and daily Sunnah checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Live Virtual Salah Checks</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                One-on-one camera sessions where teachers observe the student performing Wudu and Salah step-by-step, gently correcting posture and pronunciations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Family Charity Initiatives</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Encouraging young learners to create homemade Sadaqah jars, help pack food for the needy, and participate in community goodwill projects with parents.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Sunnah Deeds Trackers</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Interactive weekly activity sheets rewarding simple Sunnah acts: saying Bismillah before meals, greeting with Salam, and showing respect to siblings.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. SECTION 6: PHOTO & VIDEO HIGHLIGHTS GALLERY */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Camera className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Visual Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Moments From Our Workshops & Events
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Snapshots of vibrant classes, recitation competitions, certificates, and student projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 w-fit mb-2">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CTA SECTION: EXPLORE STUDENT ACHIEVEMENTS */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Trophy className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Celebrate Success</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            See How Our Students Excel in Recitation & Islamic Knowledge
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover student video highlights, Tajweed progress recordings, and heartwarming reviews from parents across GCC countries and worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/student-achievements')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Explore Student Achievements</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <span>Book a Free Trial Class</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
