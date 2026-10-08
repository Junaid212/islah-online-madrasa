export interface Course {
  id: string;
  name: string;
  arabicName?: string;
  shortDescription: string;
  fullDescription: string;
  ageGroup: string;
  level: string;
  format: string;
  duration: string;
  keyTopics: string[];
  outcomes: string;
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  qualification: string;
  specialisation: string;
  bio: string;
  experiencePlaceholder: string;
  languages: string[];
}

export interface StudentPerformanceItem {
  id: string;
  title: string;
  category: 'Quran Recitation' | 'Hifz' | 'Tajweed' | 'Islamic Activities' | 'Student Reflections';
  studentName: string;
  ageLevel: string;
  description: string;
  duration: string;
  surahOrTopic: string;
  reflectionQuote?: string;
}

export interface Testimonial {
  id: string;
  type: 'text' | 'video';
  parentName: string;
  childInfo: string;
  location: string;
  content: string;
  videoDuration?: string;
  keyHighlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const MADRASA_CONFIG = {
  name: "Islah Online Madrasa",
  domain: "www.islahonlinemadrasa.com",
  phoneDisplay: "[CLIENT PHONE NUMBER]",
  phoneNumber: "447000000000", // Placeholder for wa.me link
  emailDisplay: "admissions@islahonlinemadrasa.com",
  whatsappBaseUrl: "https://wa.me/447000000000",
  instagramPlaceholder: "[INSTAGRAM URL - @islahonlinemadrasa]",
  youtubePlaceholder: "[YOUTUBE URL - Islah Online Madrasa]",
  establishedYear: "[ESTABLISHED YEAR]",
  studentsCount: "[NUMBER OF STUDENTS]",
  teachersCount: "[NUMBER OF TEACHERS]",
};

export const TRUST_POINTS = [
  {
    title: "Qualified Teachers",
    description: "Vetted instructors trained in Tajweed, pedagogy, and patient child mentorship.",
  },
  {
    title: "Structured Curriculum",
    description: "Step-by-step milestones rooted firmly in the Qur'an and authentic Sunnah.",
  },
  {
    title: "Personal Attention",
    description: "Dedicated 1-on-1 and small group settings tailored to your child's pace.",
  },
  {
    title: "Safe Online Learning",
    description: "Secure virtual classrooms with respectful, family-monitored environments.",
  },
  {
    title: "Parent Progress Updates",
    description: "Regular feedback, recitation milestone recordings, and teacher check-ins.",
  },
];

export const WHY_ISLAH_PRINCIPLES = [
  {
    id: "quran",
    title: "Qur'an at the Center",
    tagline: "Correct recitation and daily bonding",
    description:
      "Beyond mere phonetic reading, we nurture a living relationship with Allah's words—teaching accurate Makharij, measured Tajweed, and deep reverent listening.",
  },
  {
    id: "knowledge",
    title: "Authentic Islamic Knowledge",
    tagline: "Firmly grounded in Qur'an & Sunnah",
    description:
      "Children learn clear Aqeedah, the loving life of Prophet Muhammad (ﷺ), and essential Fiqh of worship presented with purity and balance.",
  },
  {
    id: "character",
    title: "Character & Akhlaaq",
    tagline: "Nurturing beautiful prophetic conduct",
    description:
      "Islamic education is incomplete without manners. We emphasize honesty, kindness to parents, humility, and graceful speech in every interaction.",
  },
  {
    id: "discipline",
    title: "Discipline & Consistency",
    tagline: "Gentle routine that builds lifelong habits",
    description:
      "Small, consistent daily steps create lasting mastery. Our teachers instill steady dedication without undue stress or exhaustion.",
  },
  {
    id: "confidence",
    title: "Confident Muslim Identity",
    tagline: "Standing proud and clear in faith",
    description:
      "Living in a modern, fast-paced world, Muslim children need a safe space where their faith is understood, celebrated, and deeply appreciated.",
  },
  {
    id: "understanding",
    title: "Understanding & Meaning",
    tagline: "Knowing what they recite and pray",
    description:
      "Children understand the foundational meanings of their daily Surahs, Salah prayers, and morning/evening Adhkar so their worship is felt in the heart.",
  },
  {
    id: "love",
    title: "Love for the Deen",
    tagline: "Learning inspired by warmth and encouragement",
    description:
      "We replace intimidation with affectionate guidance. Children look forward to their classes because our teachers listen, encourage, and care.",
  },
];

export const COURSES: Course[] = [
  {
    id: "noorani-qaida",
    name: "Noorani Qaida",
    arabicName: "القاعدة النورانية",
    shortDescription: "Foundational Arabic phonetics, alphabet recognition, and letter joining for beginners.",
    fullDescription: "The essential starting point for every young learner. Children master the 29 Arabic letter shapes, correct articulation points (Makharij), short and long vowels (Harakāt, Madd), and compound letter synthesis through proven pedagogical methods.",
    ageGroup: "Ages 4–8 & Beginners",
    level: "Beginner",
    format: "1-on-1 or Small Group (Max 3)",
    duration: "30 mins / 3–5 days weekly",
    keyTopics: ["Arabic Alphabet & Shapes", "Short Vowels (Fatha, Kasra, Damma)", "Tanween & Sukoon", "Madd & Shaddah rules", "Joining words accurately"],
    outcomes: "Ability to independently read any Arabic word from the Mushaf with correct basic pronunciation."
  },
  {
    id: "quran-reading",
    name: "Quran Reading (Nazirah)",
    arabicName: "تلاوة القرآن الكريم",
    shortDescription: "Fluent reading directly from the Mushaf with continuous teacher guidance.",
    fullDescription: "Designed for children who have completed Noorani Qaida. Focuses on building reading stamina, fluency, smooth pacing, and adhering to Quranic stop signs (Waqf) while reading directly from the Uthmani script.",
    ageGroup: "Ages 6–15",
    level: "Elementary to Intermediate",
    format: "1-on-1 Individual Attention",
    duration: "30–45 mins / 3–4 days weekly",
    keyTopics: ["Smooth word connection", "Breath control & pauses (Waqf)", "Common reading pitfalls", "Daily continuous reading milestones", "Reverent recitation etiquette"],
    outcomes: "Complete independent recitation of the Holy Quran from cover to cover with clear rhythm."
  },
  {
    id: "quran-memorisation",
    name: "Quran Memorisation (Hifz)",
    arabicName: "حفظ القرآن الكريم",
    shortDescription: "Structured memorisation paths with strict retention and daily revision routines.",
    fullDescription: "A disciplined, loving Hifz program tailored for students wishing to memorize Juz Amma, selected Surahs, or complete the entire Qur'an. Emphasizes the classical tripartite system: Sabaq (new lesson), Sabqi (recent revision), and Manzil (cumulative retention).",
    ageGroup: "Ages 7–16",
    level: "Intermediate to Advanced",
    format: "1-on-1 Dedicated Ustadh/Ustadha",
    duration: "45–60 mins / 4–5 days weekly",
    keyTopics: ["Juz Amma & Tabarak foundations", "Systematic Sabqi & Manzil cycles", "Retention techniques for young minds", "Tarteel pacing and melodious tone", "Spiritual discipline of Hifz"],
    outcomes: "Solid, unshakeable memorisation with retention verified through regular milestone assessments."
  },
  {
    id: "tajweed-mastery",
    name: "Tajweed Mastery",
    arabicName: "أحكام التجويد",
    shortDescription: "In-depth study of recitation rules, articulation points, and vocal characteristics.",
    fullDescription: "Elevates recitation from correct to beautiful. Students systematically study Makharij al-Huroof (articulation points), Sifat (characteristics), Noon Sakinah & Tanween rules, Meem Sakinah, and Madd categories with both practical drill and theoretical understanding.",
    ageGroup: "Ages 8–17",
    level: "Intermediate to Advanced",
    format: "1-on-1 or Guided Pairs",
    duration: "40 mins / 2–4 days weekly",
    keyTopics: ["Makharij & Sifat al-Huroof", "Idgham, Ikhfa, Izhar, Iqlab", "Ghunnah and Qalqalah precision", "Rules of Raa and Laam", "Advanced Waqf & Ibtida (Stopping/Starting)"],
    outcomes: "Reciting with precision following the rules of Hafs 'an 'Asim, certified upon completion."
  },
  {
    id: "islamic-studies",
    name: "Islamic Studies & Aqeedah",
    arabicName: "الدراسات الإسلامية والعقيدة",
    shortDescription: "Essential pillars of Iman, Seerah of the Prophet (ﷺ), and moral worldview.",
    fullDescription: "Nurturing minds with the knowledge of Allah, His Angels, His Books, and His Messengers. Lessons cover the inspirational biography (Seerah) of Prophet Muhammad (ﷺ), stories of the noble Companions, and foundational Fiqh of daily life.",
    ageGroup: "Ages 6–16",
    level: "All Levels (Graded curriculum)",
    format: "Interactive Small Group or 1-on-1",
    duration: "40 mins / 2 days weekly",
    keyTopics: ["Six Pillars of Iman & Five Pillars of Islam", "Life of Prophet Muhammad (ﷺ)", "Stories of the Prophets for young minds", "Islamic manners in modern society", "Halal & Haram basics"],
    outcomes: "A solid, rational, and heartwarming Islamic worldview that protects against modern confusion."
  },
  {
    id: "daily-duas",
    name: "Daily Duas & Supplications",
    arabicName: "الأدعية والأذكار اليومية",
    shortDescription: "Sunnah prayers for morning, evening, food, travel, and sleep with meanings.",
    fullDescription: "Connecting everyday moments with remembrance of Allah (Dhikr). Children memorize the authentic morning and evening supplications, prayers before sleeping, waking, entering the home, and before eating, accompanied by their English meanings.",
    ageGroup: "Ages 5–14",
    level: "Beginner to Intermediate",
    format: "1-on-1 or Integrated with Quran",
    duration: "25–30 mins / 2 days weekly",
    keyTopics: ["Morning & Evening Athkar", "Protection Duas from the Sunnah", "Duas for parents & family", "Situational supplications (travel, illness, rain)", "Etiquette and virtues of Dua"],
    outcomes: "Daily living enriched by spontaneous remembrance of Allah from memory."
  },
  {
    id: "salah-manners",
    name: "Salah & Islamic Manners (Adab)",
    arabicName: "تعليم الصلاة والآداب",
    shortDescription: "Practical guide to Wudu, five daily prayers, humility in Salah, and moral conduct.",
    fullDescription: "A hands-on practical course covering the correct physical posture and verbal recitations of Wudu and Salah. Teaches children why we pray, how to focus (Khushu'), and the essential Islamic manners of honoring parents, respecting elders, and speaking truthfully.",
    ageGroup: "Ages 6–14",
    level: "Beginner to Intermediate",
    format: "1-on-1 or Interactive Workshop",
    duration: "35 mins / 2–3 days weekly",
    keyTopics: ["Step-by-step Wudu verification", "Positions and recitations of Salah", "Understanding the Surahs recited in prayer", "Kindness to parents (Birr al-Walidayn)", "Sunnah etiquette of eating, greeting, and speaking"],
    outcomes: "Confident, independent performance of the five daily prayers with joy and reverence."
  },
  {
    id: "arabic-basics",
    name: "Arabic Language Basics",
    arabicName: "أساسيات اللغة العربية",
    shortDescription: "Everyday vocabulary, Quranic root words, and sentence comprehension.",
    fullDescription: "An engaging introduction to Quranic and conversational Arabic. Young learners acquire foundational vocabulary, colors, numbers, family terms, and simple sentence structures, bridging the gap between reciting the Quran and understanding its vocabulary.",
    ageGroup: "Ages 7–16",
    level: "Beginner to Intermediate",
    format: "Small Group or 1-on-1",
    duration: "40 mins / 2–3 days weekly",
    keyTopics: ["Common Quranic vocabulary", "Family, numbers, objects & colors", "Simple pronouns and verb patterns", "Greetings and conversational phrases", "Writing exercises and short dialogues"],
    outcomes: "Understanding key words recurring across the Holy Qur'an and daily Salah."
  }
];

export const LEARNING_JOURNEY_STEPS = [
  {
    step: "01",
    title: "Assessment",
    subtitle: "Personalized Diagnostic",
    description: "A patient diagnostic session to identify your child's exact reading speed, pronunciation habits, and ideal learning style."
  },
  {
    step: "02",
    title: "Personalised Learning",
    subtitle: "Customized Pace & Goals",
    description: "Every child is unique. Whether your child needs extra patience on tricky letters or is ready for accelerated Hifz, we adapt the roadmap."
  },
  {
    step: "03",
    title: "1-on-1 or Small Groups",
    subtitle: "Undivided Attention",
    description: "No crowded virtual rooms where children get lost. The teacher listens intently to every single letter and breath."
  },
  {
    step: "04",
    title: "Regular Practice",
    subtitle: "Habit-Forming Routine",
    description: "Consistent 30 to 45-minute sessions scheduled around your family's timezone, ensuring steady progress without homework fatigue."
  },
  {
    step: "05",
    title: "Progress Feedback",
    subtitle: "Transparent Parent Partnership",
    description: "Voice notes, attendance records, and direct WhatsApp updates after lessons so you are always connected to their growth."
  }
];

export const TEACHING_METHOD_STEPS = [
  {
    number: "01",
    name: "Assessment",
    summary: "Personalized Diagnostic",
    details: "A patient diagnostic session to identify your child's exact reading speed, pronunciation habits, and ideal learning style."
  },
  {
    number: "02",
    name: "Personalised Learning",
    summary: "Customized Pace & Goals",
    details: "Every child is unique. Whether your child needs extra patience on tricky letters or is ready for accelerated Hifz, we adapt the roadmap."
  },
  {
    number: "03",
    name: "1-on-1 or Small Groups",
    summary: "Undivided Attention",
    details: "No crowded virtual rooms where children get lost. The teacher listens intently to every single letter and breath."
  },
  {
    number: "04",
    name: "Regular Practice",
    summary: "Habit-Forming Routine",
    details: "Consistent 30 to 45-minute sessions scheduled around your family's timezone, ensuring steady progress without homework fatigue."
  },
  {
    number: "05",
    name: "Progress Feedback",
    summary: "Transparent Parent Partnership",
    details: "Voice notes, attendance records, and direct WhatsApp updates after lessons so you are always connected to their growth."
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "teacher-1",
    name: "[SENIOR QARI & USTADH]",
    title: "Head of Tajweed & Recitation",
    qualification: "[CERTIFIED IJAZAH IN QURANIC RECITATION]",
    specialisation: "Tajweed Mastery, Hafs 'an 'Asim, Child Pedagogy",
    bio: "Dedicated Quran teacher with extensive experience mentoring young English-speaking students across the UK, North America, and Europe. Known for patient encouragement and precision in Makharij.",
    experiencePlaceholder: "[YEARS OF TEACHING EXPERIENCE]",
    languages: ["English", "Arabic", "Urdu"]
  },
  {
    id: "teacher-2",
    name: "[CERTIFIED USTADHA]",
    title: "Senior Female Quran & Hifz Educator",
    qualification: "[IJAZAH IN RECITATION & ARABIC STUDIES]",
    specialisation: "Noorani Qaida, Girls Hifz, Islamic Studies for Children",
    bio: "Passionate educator specializing in early childhood Arabic phonetics and gentle memorization techniques. Helps young girls build strong, affectionate attachments to the Holy Quran.",
    experiencePlaceholder: "[YEARS OF TEACHING EXPERIENCE]",
    languages: ["English", "Arabic"]
  },
  {
    id: "teacher-3",
    name: "[USTADH & ISLAMIC STUDIES MENTOR]",
    title: "Instructor of Seerah, Aqeedah & Adab",
    qualification: "[DEGREE IN ISLAMIC JURISPRUDENCE & HADITH STUDIES]",
    specialisation: "Prophetic Biography, Youth Character Development, Daily Duas",
    bio: "Engaging storyteller and Islamic mentor who translates classical knowledge into relatable, practical moral lessons for modern Muslim children and teenagers.",
    experiencePlaceholder: "[YEARS OF TEACHING EXPERIENCE]",
    languages: ["English", "Arabic"]
  }
];

export const STUDENT_PERFORMANCE_ITEMS: StudentPerformanceItem[] = [
  {
    id: "perf-1",
    title: "Surah Ad-Duha with Measured Tajweed",
    category: "Quran Recitation",
    studentName: "[STUDENT - AGE 9]",
    ageLevel: "Level 3 - Tajweed Course",
    description: "Demonstrating clear articulation of difficult letters (Daad and Haa) and smooth melodic pacing during online review.",
    duration: "1:45",
    surahOrTopic: "Surah Ad-Duha (93)",
    reflectionQuote: "Alhamdulillah, I used to struggle with joining the letters, but my teacher practiced with me every day until it became easy."
  },
  {
    id: "perf-2",
    title: "Juz Amma Completion Milestone",
    category: "Hifz",
    studentName: "[STUDENT - AGE 11]",
    ageLevel: "Hifz Track - Stage 1",
    description: "Reciting consecutive Surahs from memory during the quarterly oral retention examination without hesitation.",
    duration: "2:30",
    surahOrTopic: "Surah Al-Alaq & Al-Qadr",
    reflectionQuote: "The Manzil revision cycle helped me keep all my Surahs fresh in my mind."
  },
  {
    id: "perf-3",
    title: "Makharij & Noon Sakinah Precision Drill",
    category: "Tajweed",
    studentName: "[STUDENT - AGE 8]",
    ageLevel: "Noorani Qaida Graduate",
    description: "Clear practical differentiation between Idgham with Ghunnah and Izhar during live oral recitation.",
    duration: "1:15",
    surahOrTopic: "Surah Al-Balad Excerpt"
  },
  {
    id: "perf-4",
    title: "Sunnah Morning & Evening Athkar Presentation",
    category: "Islamic Activities",
    studentName: "[STUDENT - AGE 7]",
    ageLevel: "Daily Duas & Manners",
    description: "Reciting protective supplications with their clear English meanings and reflection on thanking Allah.",
    duration: "1:50",
    surahOrTopic: "Sayyid al-Istighfar & Protection Duas"
  },
  {
    id: "perf-5",
    title: "Why I Love My Quran Class",
    category: "Student Reflections",
    studentName: "[STUDENT - AGE 10]",
    ageLevel: "Quran & Islamic Studies",
    description: "Sharing how learning online with Islah helped build confidence at school and love for Salah.",
    duration: "1:20",
    surahOrTopic: "Student Voice Reflection"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    type: "text",
    parentName: "Sister Amina K.",
    childInfo: "Mother of 2 students (Ages 7 and 10)",
    location: "London, United Kingdom",
    content: "Finding an online madrasa where teachers are both academically qualified and genuinely kind was difficult until we found Islah. My 7-year-old was shy and hesitant to read Arabic; now she eagerly sits at her desk before the lesson starts. The progress reports on WhatsApp give us complete peace of mind.",
    keyHighlight: "Patience and gentle encouragement transformed our daughter's confidence."
  },
  {
    id: "test-2",
    type: "video",
    parentName: "Brother Tariq M.",
    childInfo: "Father of a 9-year-old Hifz student",
    location: "Ontario, Canada",
    content: "The one-on-one attention is unmatched. The teacher focuses on correct Makharij from day one, not just rushing through pages. Having flexible scheduling that fits our school routine made all the difference for our family.",
    videoDuration: "1:35",
    keyHighlight: "True one-on-one attention without rushing pages."
  },
  {
    id: "test-3",
    type: "text",
    parentName: "Sister Fatima R.",
    childInfo: "Mother of a 6-year-old beginner",
    location: "Texas, United States",
    content: "As parents living in the West, establishing a strong Islamic foundation for our children is our highest priority. Islah Online Madrasa provided that safe, respectful, and structured environment. The admission process over WhatsApp was refreshingly simple.",
    keyHighlight: "Safe, respectful environment that fits modern family schedules."
  },
  {
    id: "test-4",
    type: "video",
    parentName: "Brother Yusuf A.",
    childInfo: "Father of two students (Ages 8 and 12)",
    location: "Sydney, Australia",
    content: "We appreciate the balance between Qur'an memorisation and character building. The teacher doesn't just teach the words; he explains the moral lessons behind the verses in a way that resonates with our boys.",
    videoDuration: "2:05",
    keyHighlight: "Harmonious balance of Quran recitation and Islamic manners."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What age groups do you teach?",
    answer: "We primarily teach children from age 4 onwards, as well as teenagers and youth. Course difficulty and lesson pacing are carefully tailored to each student's developmental age."
  },
  {
    question: "Are classes one-to-one or group classes?",
    answer: "Our primary offering is dedicated 1-on-1 private classes to ensure your child receives the teacher's full, undivided attention. We also offer very small interactive sibling or peer groups (maximum 2 to 3 students) upon request."
  },
  {
    question: "How are classes conducted?",
    answer: "Classes are held live online through secure video meeting software. Students and teachers interact in real time with digital Quran copies, interactive phonetics boards, and live vocal feedback."
  },
  {
    question: "How long is each class?",
    answer: "Standard class durations are typically 30 minutes for young beginners (to maintain peak focus and enthusiasm) or 45 to 60 minutes for older children and intensive Hifz students."
  },
  {
    question: "What courses are available?",
    answer: "We offer Noorani Qaida, Quran Reading (Nazirah), Quran Memorisation (Hifz), Tajweed Mastery, Islamic Studies & Aqeedah, Daily Duas & Supplications, Salah & Manners (Adab), and Arabic Language Basics."
  },
  {
    question: "Can parents track their child's progress?",
    answer: "Yes, absolutely. Teachers provide regular feedback via WhatsApp after lessons, along with monthly progress overviews and audio clips of recitation milestones."
  },
  {
    question: "Do you offer trial classes?",
    answer: "Yes! We offer a completely free, no-obligation trial class. This allows your child to meet the teacher, experience the online classroom, and receive a friendly initial assessment."
  },
  {
    question: "What are the class timings?",
    answer: "Because we serve Muslim families globally (UK, Europe, USA, Canada, Australia, and the Middle East), our classes operate on flexible scheduling across multiple time zones throughout weekdays and weekends."
  },
  {
    question: "What happens after admission?",
    answer: "After you confirm your schedule and trial assessment, we pair your child with their designated Ustadh or Ustadha, provide your custom student timetable, and you begin your regular learning journey with direct WhatsApp teacher support."
  }
];
