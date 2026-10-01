import React, { useEffect, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Clock,
  Compass,
  GraduationCap,
  Heart,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { useNavigate } from '../router';

interface CurriculumPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'foundational' | 'intermediate' | 'advanced'>('all');

  useEffect(() => {
    document.title = "Online Islamic Studies Curriculum for Kids | Islah Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const SUBJECTS = [
    {
      id: "quran",
      title: "Qur'an Reading & Memorisation",
      arabicTitle: "تلاوة القرآن وحفظه",
      category: "foundational",
      color: "#082D7B",
      accentBg: "bg-[#082D7B]/10",
      accentText: "text-[#082D7B]",
      borderAccent: "border-[#082D7B]/20",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
      description:
        "Learning Qur'an reading, recitation and memorisation according to each student's current level—from Arabic letter articulation to measured Tajweed rules and continuous Hifz.",
      highlights: [
        "Noorani Qaida foundation with precise Makharij (letter exit points)",
        "Step-by-step Tajweed: Ghunnah, Ikhfa, Idgham, Qalqalah, and Madd",
        "Individualised Hifz pace with structured daily revision (Muraja'ah)",
        "Proper reverent etiquette (Adab) of holding and reciting the Holy Qur'an"
      ],
      idealFor: "All ages (5 – 16 years) • Complete Beginners to Advanced Hifz",
      frequency: "2 to 5 sessions / week"
    },
    {
      id: "aqeedah",
      title: "Aqeedah (Islamic Creed & Beliefs)",
      arabicTitle: "العقيدة الإسلامية",
      category: "foundational",
      color: "#0D2D72",
      accentBg: "bg-[#0D2D72]/10",
      accentText: "text-[#0D2D72]",
      borderAccent: "border-[#0D2D72]/20",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
      description:
        "Understanding Islamic beliefs and the unshakeable foundations of faith. We teach children Tawheed (the Oneness of Allah), His Beautiful Names and Attributes, and the 6 Articles of Faith with clarity.",
      highlights: [
        "Tawheed in Lordship, Worship, and the Beautiful Names of Allah (Asma wa Sifat)",
        "The Six Pillars of Iman taught through age-appropriate rational reflections",
        "Building a natural love, awe, and awareness of Allah (Taqwa & Muraqabah)",
        "Guarding young minds against contemporary doubts and cultural confusion"
      ],
      idealFor: "Ages 7 – 16 years",
      frequency: "Integrated weekly module"
    },
    {
      id: "fiqh",
      title: "Fiqh (Practical Acts of Worship)",
      arabicTitle: "الفقه الإسلامي العملي",
      category: "intermediate",
      color: "#0568BD",
      accentBg: "bg-[#0568BD]/10",
      accentText: "text-[#0568BD]",
      borderAccent: "border-[#0568BD]/20",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      description:
        "Learning authentic Islamic rulings and the practical aspects of daily worship. Students master the steps of Taharah (cleanliness), perfect Wudu, practical Salah, fasting in Ramadan, and Halal living.",
      highlights: [
        "Hands-on demonstration and error correction of Wudu and five daily Salah",
        "Understanding conditions (Shuroot), pillars (Arkan), and Sunnahs of prayer",
        "Fiqh of Fasting in Ramadan and understanding Zakat & Sadaqah",
        "Discerning Halal vs Haram in food, daily dealings, and digital media"
      ],
      idealFor: "Ages 7 – 16 years",
      frequency: "Core practical module"
    },
    {
      id: "hadith",
      title: "Hadith & Seerah (Prophetic Life)",
      arabicTitle: "الحديث الشريف والسيرة النبوية",
      category: "intermediate",
      color: "#082D7B",
      accentBg: "bg-[#082D7B]/10",
      accentText: "text-[#082D7B]",
      borderAccent: "border-[#082D7B]/20",
      image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
      description:
        "Learning directly from the teachings, life, and noble example of Prophet Muhammad ﷺ. Children explore the chronological Seerah, stories of the Sahabah, and memorable authentic Hadith sayings.",
      highlights: [
        "Memorable 40 Hadith of Imam Nawawi adapted with child-friendly lessons",
        "The Makkan & Madinan phases of the Seerah focusing on mercy and resilience",
        "Inspiring stories of the Sahabah (Companions) as timeless real-life role models",
        "Extracting daily ethical conduct from the Sunnah for home, school, and friendships"
      ],
      idealFor: "Ages 6 – 16 years",
      frequency: "Weekly storytelling & analysis"
    },
    {
      id: "arabic",
      title: "Arabic Conversation & Vocabulary",
      arabicTitle: "المحادثة والمفردات العربية",
      category: "advanced",
      color: "#0D2D72",
      accentBg: "bg-[#0D2D72]/10",
      accentText: "text-[#0D2D72]",
      borderAccent: "border-[#0D2D72]/20",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=800&q=80",
      description:
        "Building practical vocabulary, comprehension of Qur'anic phrasing, and genuine spoken confidence in everyday Arabic conversation through immersive dialogue and vocabulary drills.",
      highlights: [
        "High-frequency Qur'anic vocabulary to make listening in Salah meaningful",
        "Everyday spoken dialogues: greetings, family, school, food, and feelings",
        "Interactive speaking games and sentence-construction exercises",
        "Natural phonetic pronunciation with native Arabic-speaking teachers"
      ],
      idealFor: "Ages 8 – 16 years",
      frequency: "Conversational tracks"
    },
    {
      id: "duas",
      title: "Duas, Adhkar & Islamic Manners",
      arabicTitle: "الأدعية والأذكار والآداب",
      category: "foundational",
      color: "#0568BD",
      accentBg: "bg-[#0568BD]/10",
      accentText: "text-[#0568BD]",
      borderAccent: "border-[#0568BD]/20",
      image: "https://images.unsplash.com/photo-1590076212450-482d790479fb?auto=format&fit=crop&w=800&q=80",
      description:
        "Learning daily supplications, constant remembrance of Allah (Dhikr), and beautiful Islamic conduct (Akhlaaq & Adab) so Islamic values become second nature in their daily routine.",
      highlights: [
        "Daily Masnoon Duas: waking up, eating, entering the house, travelling, and sleeping",
        "Morning and evening Adhkar for spiritual protection and peace of mind",
        "Islamic etiquette: honoring parents, table manners, truthfulness, and modesty",
        "Dua memorisation cards and practical habit tracker checkpoints"
      ],
      idealFor: "All ages (5 – 16 years)",
      frequency: "Daily integration in every class"
    }
  ];

  const AGE_LEVELS = [
    {
      tier: "Stage 1",
      ageRange: "Ages 5 – 7 Years",
      title: "Foundations & Joyful Discovery",
      tagline: "Building a heartfelt love for Allah & the Arabic Alphabet",
      color: "#082D7B",
      features: [
        "Noorani Qaida with sound phonetic recognition and letter tracing",
        "Short Surahs of Juz Amma (Al-Fatihah, An-Nas, Al-Falaq, Al-Ikhlas)",
        "Daily basic Duas for sleeping, eating, and entering the home",
        "Gentle prophetic bedtime stories emphasizing kindness and honesty",
        "Interactive games, illustrated slides, and sticker praise rewards"
      ]
    },
    {
      tier: "Stage 2",
      ageRange: "Ages 8 – 11 Years",
      title: "Understanding & Practical Worship",
      tagline: "Mastering Salah, essential Tajweed, and core beliefs",
      color: "#0D2D72",
      features: [
        "Tajweed rules applied directly to Qur'an recitation with teacher oversight",
        "Complete step-by-step Fiqh of Wudu and Salah with meaning of recitations",
        "Aqeedah: The 6 Pillars of Iman and understanding Tawheed in daily life",
        "Selections from 40 Hadith of Imam Nawawi on good manners and truthfulness",
        "Weekly interactive quizzes, speech practice, and classroom participation"
      ]
    },
    {
      tier: "Stage 3",
      ageRange: "Ages 12 – 16 Years",
      title: "Application, Reflection & Leadership",
      tagline: "Confident Muslim identity, thematic Tafseer & contemporary ethics",
      color: "#0568BD",
      features: [
        "Fluent Qur'anic recitation with advanced Tajweed rules and Tafseer insights",
        "Fiqh of Fasting, Halal & Haram, and navigating modern teenage challenges",
        "Deep-dive Seerah: The Prophet's leadership, treaty of Hudaybiyyah, and Sahabah",
        "Spoken Arabic conversation tracks and deeper Qur'anic vocabulary",
        "Critical thinking, Q&A discussions on youth faith issues, and mentorship"
      ]
    }
  ];

  const FAQS = [
    {
      q: "What subjects are included in the curriculum?",
      a: "Our core curriculum comprehensively covers six essential pillars: Qur'an Reading & Memorisation (with Tajweed), Aqeedah (Islamic Creed), Fiqh (Practical Worship & Daily Living), Hadith & Seerah (Life of Prophet Muhammad ﷺ), Arabic Conversation & Vocabulary, and Duas, Adhkar & Islamic Manners (Akhlaaq)."
    },
    {
      q: "How are students grouped and assessed?",
      a: "Every student begins with a complimentary 1-on-1 placement assessment with a senior educator. We evaluate their reading fluency, prior knowledge, age, and comfort level. Students are then placed either in dedicated 1-on-1 classes or matched with micro-groups of similar age and capability (maximum 4 students) to ensure optimal focus."
    },
    {
      q: "Is Qur'an memorisation (Hifz) included in the program?",
      a: "Yes! Qur'an memorisation is tailored to the student's personal goals. For general madrasa students, we integrate steady memorisation of Juz Amma and Surahs recited in daily Salah. For dedicated students desiring complete Qur'an memorisation, we offer an intensive Hifz Track with specialized Huffaz and daily revision (Muraja'ah)."
    },
    {
      q: "Are classes suitable for complete beginners who do not know Arabic?",
      a: "Absolutely. Many of our students join with zero prior Arabic or Islamic knowledge. Our experienced, English-fluent teachers begin gently with the Noorani Qaida method, using visual aids, letter phonetics, and patient positive reinforcement until the child reads independently and confidently."
    },
    {
      q: "Can parents customize or request focus on specific subjects?",
      a: "Yes. While our complete curriculum offers a balanced foundation across all 6 areas, parents can opt for subject-focused tracks—such as pure Quran Recitation with Tajweed, intensive Arabic conversation, or specialized Islamic Studies sessions."
    }
  ];

  const filteredSubjects = activeTab === 'all'
    ? SUBJECTS
    : SUBJECTS.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Our Islamic Studies Curriculum"
        breadcrumb="Curriculum"
        subtitle="A structured, authentic Islamic education roadmap for children—nurturing correct Quranic recitation, firm Islamic beliefs, and noble prophetic character."
      />

      {/* 2. SECTION 1: CURRICULUM INTRODUCTION */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Curriculum Overview</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Structured Islamic Education Designed Around Your Child
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
                At Islah Online Madrasa, our curriculum is not a collection of random lectures. It is a carefully structured, progressive educational framework developed over eight years of global teaching experience.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                We believe that Islamic education must be age-appropriate, spiritually uplifting, and pedagogically sound. Every lesson combines correct text-based knowledge with practical demonstrations so students build a strong, lifelong foundation in essential Islamic knowledge without feeling overwhelmed.
              </p>

              {/* Three Foundation Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B] mb-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#082D7B] mb-1">Structured Syllabus</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Clear milestones from beginner phonetics to advanced classical Islamic concepts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-[#0D2D72]/10 flex items-center justify-center text-[#0D2D72] mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0D2D72] mb-1">Age & Ability Based</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Customized placement matching your child's pace, age group, and cognitive readiness.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-9 h-9 rounded-lg bg-[#0568BD]/10 flex items-center justify-center text-[#0568BD] mb-3">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0568BD] mb-1">Living Character</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    Prioritizing Akhlaaq, empathy, and devotion over mere memorisation scores.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenTrialModal()}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Enquire About Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#082D7B] bg-white hover:bg-[#082D7B]/5 border border-[#082D7B]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Illustration Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#082D7B]/15 to-[#C9A45C]/20 rounded-3xl blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/80 bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=900&q=80"
                    alt="Islamic Studies Curriculum learning materials and Quran"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 bg-gradient-to-b from-white to-[#F8F6F0]">
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                      <span>GLOBAL SYLLABUS</span>
                      <span className="text-[#C9A45C] font-semibold">GRADES K – 10</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">
                      A Balance of Deen & Academic Lifestyle
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Designed to seamlessly complement standard school curriculums across the UAE, Saudi Arabia, Qatar, UK, and worldwide.
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 rounded-xl shadow-lg border border-[#082D7B]/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#082D7B] flex items-center justify-center text-[#C9A45C]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#082D7B]">8+ Years of Refinement</div>
                    <div className="text-[11px] text-[#64748B]">Structured & Proven System</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: OUR SUBJECTS (DETAILED CARDS) */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Core Subjects</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Comprehensive Subjects Covering Every Pillar of Islamic Life
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Every subject has tailored milestone objectives and child-friendly workbooks ensuring steady, visible progress week after week.
            </p>
          </div>

          {/* Subject Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All Subjects' },
              { id: 'foundational', label: 'Foundational' },
              { id: 'intermediate', label: 'Intermediate' },
              { id: 'advanced', label: 'Advanced' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#082D7B] text-white shadow-sm'
                    : 'bg-[#F1EFEA] text-[#475569] hover:bg-[#E5E0D5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((sub, idx) => (
              <div
                key={sub.id}
                className="group relative rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 hover:border-[#082D7B]/30 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Image Header with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={sub.image}
                    alt={sub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Arabic Calligraphy Label */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="font-serif text-sm font-semibold tracking-wide">
                      {sub.arabicTitle}
                    </span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 font-mono">
                      0{idx + 1}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#082D7B] mb-2.5 group-hover:text-[#0568BD] transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                      {sub.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#C9A45C]">
                        What Students Master:
                      </div>
                      {sub.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#082D7B] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className="pt-4 border-t border-[#082D7B]/10 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] text-[#64748B]">
                      <span className="font-medium text-[#082D7B]">Target:</span>
                      <span>{sub.idealFor}</span>
                    </div>

                    <button
                      onClick={() => onOpenTrialModal(sub.title)}
                      className="mt-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#082D7B] bg-white border border-[#082D7B]/20 hover:bg-[#082D7B] hover:text-white transition-all text-center cursor-pointer shadow-sm"
                    >
                      Enquire For This Subject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: AGE-APPROPRIATE LEARNING & PROGRESSION */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Roadmap</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Age-Appropriate Learning & Defined Progression
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We never take a one-size-fits-all approach. Children evolve rapidly in comprehension, emotional maturity, and attention spans, so our syllabus is divided into three distinct stages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {AGE_LEVELS.map((stage, idx) => (
              <div
                key={stage.tier}
                className="relative rounded-2xl bg-white border border-[#082D7B]/10 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#082D7B]/10 text-[#082D7B]">
                      {stage.tier}
                    </span>
                    <span className="text-xs font-bold text-[#C9A45C]">
                      {stage.ageRange}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#082D7B] mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs text-[#0568BD] font-medium mb-6">
                    {stage.tagline}
                  </p>

                  <div className="space-y-3 mb-8">
                    {stage.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#082D7B]/10">
                  <div className="text-[11px] text-[#64748B] flex items-center justify-between">
                    <span>Monthly assessments</span>
                    <span className="text-[#082D7B] font-semibold">Teacher Voice Logs</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: LEARNING OUTCOMES */}
      <section className="relative py-16 sm:py-24 bg-[#082D7B] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Measurable Transformation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Real Learning Outcomes for Every Enrolled Child
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              When your child completes each milestone, they carry away practical skills, deep-rooted conviction, and a profound reverence for Allah's religion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A45C]/20 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] mb-5">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                Strong Islamic Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Firm grounding in Tawheed, Seerah, and authentic Hadith. Children learn the 'why' behind religious obligations, anchoring their faith against skepticism.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A45C]/20 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                Practise Essential Worship
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Independent, error-free performance of daily Salah with correct Wudu, recitations, and genuine mindfulness (Khushoo) rather than hurried mechanical motions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/25 transition-all text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A45C]/20 border border-[#C9A45C]/40 flex items-center justify-center text-[#C9A45C] mb-5">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                Confident Daily Application
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Polite speech, honoring parents, making Masnoon Duas naturally, and holding pride in their Muslim identity in multicultural classrooms and peer environments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Curriculum FAQ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#082D7B] tracking-tight">
              Frequently Asked Curriculum Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#082D7B]/10 bg-[#FBF9F5] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#082D7B]/5 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#082D7B]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#082D7B] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C9A45C]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#082D7B]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. MAJOR CALL TO ACTION: ENQUIRE ABOUT COURSES */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Start With Confidence</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Ready to Start Your Child's Structured Islamic Journey?
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Begin with a free 1-on-1 placement assessment. Our senior educators will evaluate your child's current reading ability and recommend the ideal curriculum level.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <span>Enquire About Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat With Admissions on WhatsApp</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            Free 30-minute trial session • Tailored level placement • No credit card required
          </div>
        </div>
      </section>

    </div>
  );
};
