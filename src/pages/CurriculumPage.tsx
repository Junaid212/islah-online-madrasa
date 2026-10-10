import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Users,
  Check,
  ChevronRight,
  X,
  Calendar,
  Eye,
  Star
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';

interface CurriculumPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const CurriculumPage: React.FC<CurriculumPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'quran-aqeedah' | 'fiqh-sunnah' | 'language-adab'>('all');
  const [activeStage, setActiveStage] = useState<number>(0);
  const [selectedSubjectModal, setSelectedSubjectModal] = useState<any | null>(null);

  useEffect(() => {
    document.title = "Online Islamic Studies Curriculum for Kids | Islah Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 6 Core Disciplines (Minimal & scannable)
  const SUBJECTS = [
    {
      id: "quran",
      title: "Qur'an & Tajweed",
      arabicTitle: "تلاوة القرآن وحفظه",
      category: "quran-aqeedah",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=900&q=80",
      tagline: "From Noorani Qaida phonetics to fluent Tajweed & Hifz",
      summary: "Personalized reading pace based on letter articulation (Makharij), measured Tajweed rules, and structured daily revision.",
      tags: ["Makharij Precision", "Step-by-Step Tajweed", "Structured Hifz"],
      targetAge: "Ages 5 – 16",
      pace: "2 to 5 sessions / week",
      details: [
        "Phonetic letter exit points (Makharij) and articulation",
        "Essential Tajweed: Ghunnah, Ikhfa, Idgham, Qalqalah, and Madd",
        "Individualized Hifz goals with Muraja'ah (revision) checkpoints",
        "Reverent etiquette (Adab) of holding and reciting the Qur'an"
      ]
    },
    {
      id: "aqeedah",
      title: "Aqeedah (Islamic Creed)",
      arabicTitle: "العقيدة الإسلامية",
      category: "quran-aqeedah",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=900&q=80",
      tagline: "Unshakeable conviction in Tawheed & the 6 Articles of Faith",
      summary: "Anchoring children's understanding of Allah's Names and Attributes with rational clarity, shielding against modern skepticism.",
      tags: ["Tawheed & Iman", "Names of Allah", "Guarding Faith"],
      targetAge: "Ages 7 – 16",
      pace: "Integrated weekly module",
      details: [
        "Tawheed in Lordship, Worship, and Beautiful Names (Asma wa Sifat)",
        "The Six Pillars of Iman explained through thoughtful reflection",
        "Fostering love, awe, and awareness of Allah (Taqwa & Muraqabah)",
        "Addressing contemporary questions and cultural confusion with gentle logic"
      ]
    },
    {
      id: "fiqh",
      title: "Practical Fiqh & Taharah",
      arabicTitle: "الفقه الإسلامي العملي",
      category: "fiqh-sunnah",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80",
      tagline: "Hands-on demonstration of Wudu, Salah & daily living",
      summary: "Students master correct Wudu postures, independent five daily prayers with meaning, Ramadan fasting, and Halal living.",
      tags: ["Independent Salah", "Wudu Mastery", "Halal Living"],
      targetAge: "Ages 7 – 16",
      pace: "Core practical module",
      details: [
        "Hands-on practice and teacher correction of Wudu and five daily prayers",
        "Understanding conditions (Shuroot), pillars (Arkan), and Sunnahs of Salah",
        "Practical Fiqh of fasting in Ramadan and the purpose of Zakat",
        "Discerning Halal vs Haram in food, daily dealings, and digital habits"
      ]
    },
    {
      id: "hadith",
      title: "Hadith & Prophetic Seerah",
      arabicTitle: "الحديث الشريف والسيرة",
      category: "fiqh-sunnah",
      image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=900&q=80",
      tagline: "Mercy, resilience, and timeless role models",
      summary: "Chronological exploration of Prophet Muhammad's ﷺ life, 40 Hadith of Imam Nawawi, and inspiring stories of the Sahabah.",
      tags: ["Prophetic Seerah", "40 Hadith Ethics", "Sahabah Heroes"],
      targetAge: "Ages 6 – 16",
      pace: "Weekly narrative session",
      details: [
        "Selected 40 Hadith of Imam Nawawi adapted with child-friendly lessons",
        "The Makkan and Madinan phases of the Seerah focusing on mercy and resilience",
        "Stories of the Sahabah (Companions) as timeless real-life heroes",
        "Extracting daily ethical conduct from the Sunnah for school and home life"
      ]
    },
    {
      id: "arabic",
      title: "Qur'anic & Spoken Arabic",
      arabicTitle: "المحادثة واللغة العربية",
      category: "language-adab",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=900&q=80",
      tagline: "Understanding prayer recitations and conversational basics",
      summary: "Building high-frequency vocabulary, Quranic comprehension, and natural conversational confidence with native Arabic speakers.",
      tags: ["Qur'anic Vocabulary", "Conversational Drills", "Native Educators"],
      targetAge: "Ages 8 – 16",
      pace: "Conversational tracks",
      details: [
        "High-frequency Qur'anic vocabulary to make listening in Salah meaningful",
        "Everyday spoken dialogues: greetings, family, school, and feelings",
        "Sentence construction drills and interactive speaking games",
        "Authentic phonetics taught by native Arabic-speaking educators"
      ]
    },
    {
      id: "duas",
      title: "Duas, Adhkar & Akhlaaq",
      arabicTitle: "الأدعية والأذكار والآداب",
      category: "language-adab",
      image: "https://images.unsplash.com/photo-1590076212450-482d790479fb?auto=format&fit=crop&w=900&q=80",
      tagline: "Daily Masnoon supplications & noble character",
      summary: "Instilling daily morning/evening Adhkar, polite speech, modesty (Haya'), and deep respect for parents so Deen becomes second nature.",
      tags: ["Masnoon Duas", "Etiquette (Adab)", "Habit Checklists"],
      targetAge: "All Ages (5 – 16)",
      pace: "Daily integration in each class",
      details: [
        "Essential Masnoon Duas: waking, eating, leaving home, travelling, and sleeping",
        "Morning and evening Adhkar for spiritual protection and peace of mind",
        "Prophetic manners: honoring parents, truthfulness, humility, and modesty",
        "Dua memorisation flashcards and practical weekly habit tracker"
      ]
    }
  ];

  // Scrolling Gallery Items (Images Scrolling Section Animation)
  const SCROLLING_IMAGES_ROW_1 = [
    {
      title: "Tajweed Precision",
      arabic: "أحكام التجويد",
      tag: "Qur'an Lab",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80",
      caption: "Measured articulation, Ghunnah & Makharij rules"
    },
    {
      title: "Young Reciters",
      arabic: "جيل القرآن",
      tag: "Ages 5–7",
      image: "https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&w=800&q=80",
      caption: "Gentle phonetics and Noorani Qaida foundational joy"
    },
    {
      title: "Sacred Classical Roots",
      arabic: "التراث الأصيل",
      tag: "Heritage",
      image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=800&q=80",
      caption: "Authentic text study rooted in sound scholarship"
    },
    {
      title: "Daily Masnoon Adhkar",
      arabic: "أذكار الصباح",
      tag: "Daily Duas",
      image: "https://images.unsplash.com/photo-1590076212450-482d790479fb?auto=format&fit=crop&w=800&q=80",
      caption: "Connecting waking, eating, and resting routines to Allah"
    },
    {
      title: "Prophetic Seerah",
      arabic: "السيرة العطرة",
      tag: "Role Models",
      image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
      caption: "Living the mercy and resilience of Rasulullah ﷺ"
    },
    {
      title: "Qur'anic Arabic Phrasing",
      arabic: "لغة القرآن",
      tag: "Vocabulary",
      image: "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?auto=format&fit=crop&w=800&q=80",
      caption: "Understanding high-frequency words recited in Salah"
    }
  ];

  const SCROLLING_IMAGES_ROW_2 = [
    {
      title: "Practical Salah Clinic",
      arabic: "إقامة الصلاة",
      tag: "Fiqh Demo",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
      caption: "Step-by-step posture check, Wudu, and mindful presence"
    },
    {
      title: "Aqeedah Foundations",
      arabic: "عقيدة التوحيد",
      tag: "Firm Belief",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      caption: "Anchoring the 6 Pillars of Iman against modern doubts"
    },
    {
      title: "Sanad-Certified Faculty",
      arabic: "شيوخ الإجازة",
      tag: "1-on-1 Care",
      image: "https://images.unsplash.com/photo-1532012164546-f432f2e3777f?auto=format&fit=crop&w=800&q=80",
      caption: "100% University degreed teachers with child empathy"
    },
    {
      title: "Living Noble Character",
      arabic: "مكارم الأخلاق",
      tag: "Akhlaaq",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
      caption: "Modesty, honoring parents, and truthfulness in life"
    },
    {
      title: "Structured Hifz Muraja'ah",
      arabic: "حفظ ومراجعة",
      tag: "Memorisation",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      caption: "Steady pace with daily revision preventing memory loss"
    },
    {
      title: "Focused Micro-Classes",
      arabic: "بيئة هادئة",
      tag: "Online Sanctuary",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
      caption: "Private 1-on-1 lessons designed around family routines"
    }
  ];

  // 3 Age Stages
  const AGE_STAGES = [
    {
      stage: "Stage 01",
      ageRange: "Ages 5 – 7",
      title: "Foundations & Joyful Discovery",
      arabic: "البدايات المبهجة",
      tagline: "Instilling love for Allah & the Arabic Alphabet",
      color: "#082D7B",
      milestones: [
        "Noorani Qaida with correct phonetic letter exit points (Makharij)",
        "Short Surahs of Juz Amma (Al-Fatihah, An-Nas, Al-Falaq, Al-Ikhlas)",
        "Daily Masnoon bedtime, waking, and mealtime supplications",
        "Gentle prophetic stories highlighting kindness and honesty"
      ]
    },
    {
      stage: "Stage 02",
      ageRange: "Ages 8 – 11",
      title: "Practical Worship & Understanding",
      arabic: "الفهم والعبادة",
      tagline: "Mastering independent Salah, Tajweed rules, and essential creed",
      color: "#0B3388",
      milestones: [
        "Applied Tajweed rules with continuous teacher recitation oversight",
        "Complete step-by-step Fiqh of Wudu and Salah with meaning of recitations",
        "Aqeedah: The 6 Pillars of Iman and recognizing Tawheed in nature",
        "Selections from 40 Hadith of Imam Nawawi on good character"
      ]
    },
    {
      stage: "Stage 03",
      ageRange: "Ages 12 – 16",
      title: "Conviction & Youth Mentorship",
      arabic: "اليقين والريادة",
      tagline: "Thematic Tafseer, contemporary ethics, and spoken Arabic",
      color: "#082D7B",
      milestones: [
        "Fluent Qur'anic recitation with advanced Tajweed rules and Tafseer insights",
        "Fiqh of Fasting, Halal living, and addressing modern youth faith challenges",
        "Deep-dive Seerah: The Prophet's leadership, ethics, and Sahabah role models",
        "Spoken Arabic conversation tracks and deeper Qur'anic vocabulary"
      ]
    }
  ];

  // FAQs
  const FAQS = [
    {
      q: "What subjects are included in the curriculum?",
      a: "Our core curriculum comprehensively covers six essential pillars: Qur'an Reading & Memorisation (with Tajweed), Aqeedah (Islamic Creed), Fiqh (Practical Worship & Daily Living), Hadith & Seerah (Life of Prophet Muhammad ﷺ), Arabic Conversation & Vocabulary, and Duas, Adhkar & Islamic Manners (Akhlaaq)."
    },
    {
      q: "How are students evaluated and placed?",
      a: "Every child begins with a complimentary 1-on-1 placement assessment with a senior educator. We evaluate their reading fluency, prior knowledge, age, and comfort level, tailoring a custom roadmap before regular classes begin."
    },
    {
      q: "Is Qur'an memorisation (Hifz) included?",
      a: "Yes. General students memorize Juz Amma and Surahs recited in daily Salah. For students aspiring to memorize the entire Qur'an, we provide a dedicated Hifz Track with daily revision (Muraja'ah)."
    },
    {
      q: "Can complete beginners join without prior Arabic?",
      a: "Absolutely. Many students join with zero prior Arabic background. Our patient, English-fluent teachers start gently with the Noorani Qaida method until independent reading is mastered."
    },
    {
      q: "Can parents customize their child's focus?",
      a: "Yes. Parents can opt for subject-specific tracks—such as pure Quran Recitation with Tajweed, intensive Arabic conversation, or specialized Islamic Studies sessions."
    }
  ];

  const filteredSubjects = activeTab === 'all'
    ? SUBJECTS
    : SUBJECTS.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#151918] selection:bg-[#C9A45C]/25">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Structured Islamic Curriculum"
        breadcrumb="Curriculum"
        subtitle="A progressive, 6-pillar Islamic education crafted for modern diaspora children—balancing correct Qur'anic articulation with living Sunnah character."
      />

      {/* 2. STATS & ARCHITECTURAL SUMMARY STRIP (Minimal & scannable) */}
      <section className="relative -mt-6 sm:-mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl sm:rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-6 shadow-[0_16px_36px_rgba(8,45,123,0.08)] border border-[#082D7B]/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#082D7B]/8 text-center">
          <div className="pt-2 sm:pt-0">
            <span className=" text-2xl sm:text-3xl font-bold text-[#082D7B]">6 Pillars</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Comprehensive Deen</p>
          </div>
          <div className="pt-2 sm:pt-0">
            <span className=" text-2xl sm:text-3xl font-bold text-[#082D7B]">3 Stages</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Ages 5 to 16</p>
          </div>
          <div className="pt-2 sm:pt-0">
            <span className=" text-2xl sm:text-3xl font-bold text-[#082D7B]">100% 1-on-1</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Sanad Mentorship</p>
          </div>
          <div className="pt-2 sm:pt-0">
            <span className=" text-2xl sm:text-3xl font-bold text-[#082D7B]">Bi-Weekly</span>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Parent Reports</p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. IMAGES SCROLLING SECTION ANIMATIONS (Continuous Marquee)     */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/6 border border-[#082D7B]/12 text-xs text-[#082D7B] font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Living Classroom Journey</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-3"
          >
            A Sanctuary of Authentic Islamic Learning
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto"
          >
            Step into our study moments—from gentle Noorani Qaida phonetics to fluent Tajweed recitations and daily living Akhlaaq.
          </motion.p>
        </div>

        {/* Dual-Track Flowing Image Marquee */}
        <div className="space-y-4 sm:space-y-5 relative">
          
          {/* Subtle edge vignette fades */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Flow */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee flex gap-4 sm:gap-5">
              {[...SCROLLING_IMAGES_ROW_1, ...SCROLLING_IMAGES_ROW_1].map((item, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-[270px] sm:w-[310px] h-[180px] sm:h-[195px] rounded-2xl overflow-hidden relative group shrink-0 shadow-sm hover:shadow-md border border-[#082D7B]/10 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061C48]/90 via-[#061C48]/30 to-transparent" />
                  
                  {/* Arabic Badge Top Right */}
                  <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10.5px] font-arabic text-white">
                    {item.arabic}
                  </div>

                  {/* Caption Bottom */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#DFBA74] block mb-0.5">
                      {item.tag}
                    </span>
                    <h4 className=" text-sm sm:text-base font-bold leading-tight drop-shadow-xs">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Reverse Flow */}
          <div className="overflow-hidden flex">
            <div className="animate-marquee-reverse flex gap-4 sm:gap-5">
              {[...SCROLLING_IMAGES_ROW_2, ...SCROLLING_IMAGES_ROW_2].map((item, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-[270px] sm:w-[310px] h-[180px] sm:h-[195px] rounded-2xl overflow-hidden relative group shrink-0 shadow-sm hover:shadow-md border border-[#082D7B]/10 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061C48]/90 via-[#061C48]/30 to-transparent" />
                  
                  {/* Arabic Badge Top Right */}
                  <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[10.5px] font-arabic text-white">
                    {item.arabic}
                  </div>

                  {/* Caption Bottom */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#DFBA74] block mb-0.5">
                      {item.tag}
                    </span>
                    <h4 className=" text-sm sm:text-base font-bold leading-tight drop-shadow-xs">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. THE 6 CORE DISCIPLINE PILLARS (Minimalist Bento Layout)       */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/6 border border-[#082D7B]/12 text-xs text-[#082D7B] font-semibold mb-3">
                <Layers className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Syllabus Breakdown</span>
              </div>
              <h2 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight">
                Six Pillars of Islamic Excellence
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F5F2EB] rounded-full self-start md:self-auto overflow-x-auto scrollbar-none">
              {[
                { id: 'all', label: 'All Pillars' },
                { id: 'quran-aqeedah', label: "Qur'an & Creed" },
                { id: 'fiqh-sunnah', label: 'Fiqh & Seerah' },
                { id: 'language-adab', label: 'Arabic & Adab' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#082D7B] text-white shadow-xs'
                      : 'text-slate-600 hover:text-[#082D7B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Disciplines Grid (Sleek, minimal, scannable) */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence>
              {filteredSubjects.map((sub, idx) => (
                <motion.div
                  layout
                  key={sub.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedSubjectModal(sub)}
                  className="group relative rounded-2xl bg-[#FAF8F5] border border-[#082D7B]/10 hover:border-[#082D7B]/30 hover:shadow-xl transition-all duration-300 p-5 sm:p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Top Row: Arabic title + Serial */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-arabic text-sm text-[#082D7B]/80 font-medium">
                        {sub.arabicTitle}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-500 border border-slate-200">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Subject Title & Tagline */}
                    <h3 className=" text-xl font-bold text-[#082D7B] mb-1 group-hover:text-[#0568BD] transition-colors flex items-center justify-between">
                      <span>{sub.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#082D7B] group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-[11px] font-medium text-[#C9A45C] mb-3">
                      {sub.tagline}
                    </p>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {sub.summary}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {sub.tags.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[10.5px] px-2.5 py-1 rounded-lg bg-white border border-[#082D7B]/8 text-[#082D7B]"
                        >
                          <Check className="w-2.5 h-2.5 text-[#C9A45C]" />
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-3.5 border-t border-[#082D7B]/8 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-medium text-[#082D7B]">{sub.targetAge}</span>
                    <span className="text-xs font-semibold text-[#082D7B] group-hover:underline flex items-center gap-1">
                      Explore Syllabus <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. AGE PROGRESSION ROADMAP (Interactive 3-Stage Stepper)       */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-[#FAF8F5] overflow-hidden">
        <HeroBgPattern opacity={0.02} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082D7B]/6 border border-[#082D7B]/12 text-xs text-[#082D7B] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Defined Progression</span>
            </div>
            <h2 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] tracking-tight mb-2">
              Three Distinct Age Progression Stages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Children develop differently. Our curriculum gently evolves from phonetics to worship autonomy and youthful conviction.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {AGE_STAGES.map((stg, idx) => {
              const isActive = activeStage === idx;
              return (
                <button
                  key={stg.stage}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 rounded-2xl text-left transition-all border cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-[#082D7B] text-white border-[#082D7B] shadow-xl -translate-y-1"
                      : "bg-white text-slate-700 border-[#082D7B]/10 hover:border-[#082D7B]/25 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-white/20 text-[#DFBA74]" : "bg-[#082D7B]/8 text-[#082D7B]"
                    }`}>
                      {stg.stage}
                    </span>
                    <span className={`text-xs font-bold ${isActive ? "text-[#DFBA74]" : "text-[#C9A45C]"}`}>
                      {stg.ageRange}
                    </span>
                  </div>
                  <h3 className={` text-lg font-bold ${isActive ? "text-white" : "text-[#082D7B]"}`}>
                    {stg.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Panel */}
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-[#082D7B]/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C9A45C] uppercase tracking-wider mb-1">
                <span>{AGE_STAGES[activeStage].stage} Milestone Focus</span>
                <span>•</span>
                <span className="font-arabic font-normal text-sm">{AGE_STAGES[activeStage].arabic}</span>
              </div>
              <h3 className=" text-2xl sm:text-3xl font-bold text-[#082D7B] mb-2">
                {AGE_STAGES[activeStage].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#0568BD] font-medium mb-5">
                {AGE_STAGES[activeStage].tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {AGE_STAGES[activeStage].milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenTrialModal(AGE_STAGES[activeStage].title)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-white bg-[#082D7B] hover:bg-[#051C4E] transition-all shadow-md active:scale-95 text-center cursor-pointer"
              >
                Enroll for {AGE_STAGES[activeStage].stage}
              </button>
              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold text-[#082D7B] bg-[#082D7B]/5 hover:bg-[#082D7B]/10 transition-all text-center cursor-pointer"
              >
                Discuss Placement on WhatsApp
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. MEASURABLE TRANSFORMATION (Dark Royal Navy Sanctuary)        */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-[#051C4E] text-white overflow-hidden">
        <HeroBgPattern isDark opacity={0.06} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-[#DFBA74] font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Measurable Transformation</span>
            </div>
            <h2 className=" text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
              Real Outcomes for Your Child
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Beyond scores and memorization badges—what every enrolled student actually takes away into daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#DFBA74] block mb-2">01</span>
                <h3 className=" text-xl font-bold text-white mb-2">Cognitive Clarity</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Deeply understanding the 'why' behind Tawheed and religious obligations, building an internal fortress against contemporary youth skepticism.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#DFBA74] font-semibold">
                Shielding Faith & Conviction
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#DFBA74] block mb-2">02</span>
                <h3 className=" text-xl font-bold text-white mb-2">Autonomous Salah</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Independent, timely prayer with correct Wudu postures, meaningful recitations, and genuine mindfulness (Khushoo) rather than mechanical motions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#DFBA74] font-semibold">
                Daily Living Devotion
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-2xl font-bold text-[#DFBA74] block mb-2">03</span>
                <h3 className=" text-xl font-bold text-white mb-2">Radiant Akhlaaq</h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  Polite speech, honoring parents, natural recitation of daily Masnoon Duas, and holding quiet confidence in their Muslim identity anywhere.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[11px] text-[#DFBA74] font-semibold">
                Prophetic Etiquette & Adab
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. FREQUENTLY ASKED QUESTIONS (Minimalist Accordion)           */}
      {/* ============================================================== */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 sm:mb-12">
            <h2 className=" text-2xl sm:text-4xl font-bold text-[#082D7B] tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Common parent queries regarding curriculum placement, grouping, and flexibility.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#082D7B]/10 bg-[#FAF8F5] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#082D7B]/4 transition-colors"
                  >
                    <span className=" text-base sm:text-lg font-bold text-[#082D7B]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#082D7B] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C9A45C]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#082D7B]/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ============================================================== */}
      {/* 9. MODAL: DETAILED SYLLABUS INSPECTION                         */}
      {/* ============================================================== */}
      <AnimatePresence>
        {selectedSubjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubjectModal(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#082D7B]/10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-44 w-full shrink-0">
                <img
                  src={selectedSubjectModal.image}
                  alt={selectedSubjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061C48]/90 via-[#061C48]/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedSubjectModal(null)}
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-5 right-5 text-white">
                  <div className="flex items-center justify-between text-xs mb-0.5">
                    <span className="text-[#DFBA74] font-semibold">{selectedSubjectModal.targetAge}</span>
                    <span className="font-arabic font-normal text-sm">{selectedSubjectModal.arabicTitle}</span>
                  </div>
                  <h3 className=" text-2xl font-bold">
                    {selectedSubjectModal.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto">
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {selectedSubjectModal.summary}
                </p>

                <h4 className="text-xs font-bold uppercase tracking-wider text-[#082D7B] mb-2.5">
                  Core Learning Highlights:
                </h4>
                <div className="space-y-2 mb-6">
                  {selectedSubjectModal.details.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      const title = selectedSubjectModal.title;
                      setSelectedSubjectModal(null);
                      onOpenTrialModal(title);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#082D7B] hover:bg-[#051C4E] transition-all text-center cursor-pointer shadow-sm"
                  >
                    Enquire for this Subject
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSubjectModal(null);
                      onOpenWhatsApp();
                    }}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-[#082D7B] bg-[#082D7B]/8 hover:bg-[#082D7B]/15 transition-all text-center cursor-pointer"
                  >
                    Ask on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
