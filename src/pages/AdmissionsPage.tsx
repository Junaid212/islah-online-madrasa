import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Instagram,
  Youtube,
  Send,
  Calendar,
  Layers,
  Users
} from 'lucide-react';
import { InnerBanner } from '../components/InnerBanner';
import { HeroBgPattern } from '../components/IslamicPattern';
import { MADRASA_CONFIG } from '../data/madrasaData';

interface AdmissionsPageProps {
  onOpenTrialModal: (courseName?: string) => void;
  onOpenWhatsApp: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onOpenTrialModal,
  onOpenWhatsApp,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Form State
  const [parentName, setParentName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [country, setCountry] = useState('');
  const [childAge, setChildAge] = useState('');
  const [course, setCourse] = useState('Quran with Tajweed');
  const [preferredTiming, setPreferredTiming] = useState('Evening (After School)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Online Madrasa Admission for Kids | Islah Online Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const ENQUIRY_STEPS = [
    {
      step: "01",
      title: "Contact Us via WhatsApp",
      desc: "Reach out via our simple enquiry form or message us directly on WhatsApp with your child's age and learning goals.",
      actionText: "Send Quick Message"
    },
    {
      step: "02",
      title: "Complimentary Assessment",
      desc: "Our senior educator conducts a friendly 15-minute 1-on-1 assessment to understand your child's current reading level.",
      actionText: "No Preparation Needed"
    },
    {
      step: "03",
      title: "Choose Schedule & Teacher",
      desc: "We confirm convenient days, class timings around regular school hours, and match a vetted teacher suited to your child.",
      actionText: "Flexible Time Slots"
    },
    {
      step: "04",
      title: "Attend Free Trial Session",
      desc: "Your child experiences a full complimentary lesson. If both you and your child are delighted, enrollment is finalized.",
      actionText: "Zero Obligation"
    }
  ];

  const COURSE_SPECS = [
    {
      name: "Noorani Qaida (Foundational)",
      ages: "Ages 5 – 7 Years",
      format: "1-on-1 or Micro-Group (max 3)",
      timings: "30 mins / session • 2-4 days weekly",
      focus: "Arabic alphabet, correct Makharij phonetics, letter joining, early word reading."
    },
    {
      name: "Qur'an Recitation with Tajweed",
      ages: "Ages 6 – 16 Years",
      format: "1-on-1 Personalized Coaching",
      timings: "30 or 45 mins • 2-5 days weekly",
      focus: "Fluency from Mushaf, comprehensive Tajweed rules (Ghunnah, Ikhfa, Madd, Waqf), reverent recitation."
    },
    {
      name: "Hifz (Qur'an Memorisation)",
      ages: "Ages 7 – 16 Years",
      format: "Dedicated 1-on-1 Hafiz Mentor",
      timings: "45 or 60 mins • 3-5 days weekly",
      focus: "Structured new memorisation (Sabaq), recent revision (Sabqi), and cumulative revision (Manzil)."
    },
    {
      name: "Comprehensive Islamic Studies",
      ages: "Ages 7 – 16 Years",
      format: "1-on-1 or Interactive Cohort",
      timings: "45 mins • 2 days weekly",
      focus: "Aqeedah, Fiqh of Salah & Taharah, Seerah of Prophet ﷺ, authentic Hadith, and Akhlaaq."
    },
    {
      name: "Conversational Arabic for Kids",
      ages: "Ages 8 – 16 Years",
      format: "Native Arabic Educator (1-on-1)",
      timings: "30 or 45 mins • 2-3 days weekly",
      focus: "Qur'anic vocabulary, everyday spoken dialogues, listening comprehension, sentence building."
    }
  ];

  const FAQS = [
    {
      q: "How are online classes conducted?",
      a: "Classes take place via high-definition, secure video classrooms (Zoom / Google Meet). Teachers share digital interactive Mushafs, phonetic slides, and virtual whiteboards. Classes are fully interactive with live audio and video to ensure continuous eye-contact, empathy, and active participation."
    },
    {
      q: "Which countries can students join from?",
      a: "Students join from anywhere across the globe! We specialize in supporting families living in GCC countries (United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain), as well as the United Kingdom, United States, Canada, Australia, and Europe. Our schedules are flexible across all time zones."
    },
    {
      q: "What are the class timings and days?",
      a: "We operate 7 days a week, from morning to late evening across multiple time zones. Classes can be scheduled on weekdays after regular school hours or during weekends, making it effortless to balance with your child's academic school homework and family life."
    },
    {
      q: "What are the tuition fees?",
      a: "We maintain affordable, highly competitive monthly tuition plans starting with zero registration fees. Fees vary depending on whether you choose 1-on-1 private tuition or a micro-group, and the number of weekly sessions (2, 3, or 5 days per week). We also provide generous sibling discounts. Contact us on WhatsApp for exact fee packages."
    },
    {
      q: "How can parents communicate with teachers?",
      a: "Parents receive a dedicated WhatsApp communication thread with our academic administration and teachers. You will receive regular vocal feedback, monthly progress reports, and can request a check-in call with your child's teacher at any point."
    },
    {
      q: "How do I enrol my child?",
      a: "Enrolment is simple and risk-free: 1) Fill out our admission form or send a WhatsApp message. 2) Attend a complimentary 1-on-1 placement assessment. 3) Experience your free trial lesson. 4) Select your schedule and confirm enrollment."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `As-salamu alaykum. I would like to enquire about admission at Islah Online Madrasa:\n` +
      `• Parent Name: ${parentName || 'Parent'}\n` +
      `• WhatsApp Number: ${whatsappNumber}\n` +
      `• Country/City: ${country || 'Not specified'}\n` +
      `• Child Age: ${childAge || 'Not specified'}\n` +
      `• Course of Interest: ${course}\n` +
      `• Preferred Timing: ${preferredTiming}\n\n` +
      `Please provide details on schedule availability and complimentary trial booking.`
    );
    window.open(`https://wa.me/${MADRASA_CONFIG.phoneNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Admissions & Enquiries"
        breadcrumb="Admissions"
        subtitle="Join hundreds of happy families across the GCC and around the world. Begin with a complimentary 1-on-1 assessment and free trial session."
      />

      {/* 2. SECTION 1: ADMISSION INTRODUCTION */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-4">
                <Globe className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Welcoming Global Families</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-6">
                Online Islamic Education Tailored For Your Family's Lifestyle
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#334155] leading-relaxed mb-6 font-normal">
                Islah Online Madrasa warmly welcomes children aged 5 to 16. Whether you are living in Dubai, Abu Dhabi, Riyadh, Doha, Kuwait, London, or New York, we provide your child with a structured, authentic spiritual sanctuary right from the comfort and safety of your home.
              </p>

              <p className="font-sans text-sm sm:text-base text-[#475569] leading-relaxed mb-8">
                We understand the demanding academic calendars and traffic commutes parents face daily. Our flexible scheduling ensures your child receives dedicated Islamic mentorship without exhaustion or timetable conflicts.
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#082D7B]/10 flex items-center justify-center text-[#082D7B] mb-2 font-bold font-mono">
                    GCC
                  </div>
                  <h4 className="font-bold text-xs text-[#082D7B] mb-1">Timezone Aligned</h4>
                  <p className="text-[11px] text-[#64748B]">Perfect evening & weekend slots</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0D2D72]/10 flex items-center justify-center text-[#0D2D72] mb-2 font-bold font-mono">
                    1-on-1
                  </div>
                  <h4 className="font-bold text-xs text-[#0D2D72] mb-1">Personalized Focus</h4>
                  <p className="text-[11px] text-[#64748B]">Tailored to child's personal pace</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#082D7B]/10 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#0568BD]/10 flex items-center justify-center text-[#0568BD] mb-2 font-bold font-mono">
                    100%
                  </div>
                  <h4 className="font-bold text-xs text-[#0568BD] mb-1">Vetted Faculty</h4>
                  <p className="text-[11px] text-[#64748B]">Certified scholars & child experts</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Fill Admission Form</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-[#082D7B] bg-white hover:bg-[#082D7B]/5 border border-[#082D7B]/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Admission Helpdesk</span>
                </button>
              </div>
            </div>

            {/* Right Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#082D7B]/15 to-[#C9A45C]/20 rounded-3xl blur-xl" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                    alt="Teacher assisting young student online with genuine care"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 bg-gradient-to-b from-white to-[#F8F6F0]">
                    <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                      <span>ADMISSION WINDOW OPEN</span>
                      <span className="text-[#C9A45C] font-semibold">9TH ACADEMIC YEAR</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">
                      Rolling Year-Round Enrolment
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Begin any week of the month. Your child's individualized learning plan starts immediately after the free assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION 2: HOW TO ENQUIRE (4 SIMPLE STEPS) */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Simple Enrolment Process</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              How to Enquire & Get Started
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We make the admissions journey smooth, welcoming, and transparent for parents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENQUIRY_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 hover:border-[#082D7B]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#082D7B] text-[#C9A45C] font-mono text-lg font-bold flex items-center justify-center mb-4">
                    {step.step}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#082D7B]/10 text-[11px] font-semibold text-[#082D7B] flex items-center justify-between">
                  <span>{step.actionText}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION 3: COURSE DETAILS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Layers className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Academic Programs</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Course Details & Class Formats
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Tailored tracks built around age requirements, prior experience, and student stamina.
            </p>
          </div>

          <div className="space-y-4">
            {COURSE_SPECS.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#082D7B]/10 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="md:w-5/12">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#C9A45C]">0{idx + 1}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#082D7B]/10 text-[#082D7B]">
                      {c.ages}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#082D7B]">
                    {c.name}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                    {c.focus}
                  </p>
                </div>

                <div className="md:w-4/12 border-l-0 md:border-l border-[#082D7B]/10 md:pl-6 text-xs text-[#475569] space-y-1">
                  <div><strong className="text-[#082D7B]">Format:</strong> {c.format}</div>
                  <div><strong className="text-[#082D7B]">Schedule:</strong> {c.timings}</div>
                </div>

                <div className="md:w-3/12 flex md:justify-end">
                  <button
                    onClick={() => onOpenTrialModal(c.name)}
                    className="w-full md:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all cursor-pointer shadow-sm"
                  >
                    Select Course
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SECTION 4: ADMISSION ENQUIRY FORM */}
      <section id="enquiry-form" className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Send className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Enquiry Form</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Send Your Admission Enquiry
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl mx-auto">
              Fill in your details below. You will be connected instantly to our admissions helpdesk with your preferences pre-filled.
            </p>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-[#FBF9F5] border border-[#082D7B]/15 shadow-xl space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Parent Name */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Fatima Al-Zahra"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  WhatsApp Number (with country code) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                />
              </div>

              {/* Country / City */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  Country & City of Residence *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. UAE (Dubai) / Saudi Arabia / UK"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                />
              </div>

              {/* Child's Age */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  Child's Age (or Ages if siblings) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 7 years old (or 7 & 10)"
                  value={childAge}
                  onChange={(e) => setChildAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                />
              </div>

              {/* Course of Interest */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  Course of Interest *
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                >
                  <option value="Noorani Qaida (Beginners)">Noorani Qaida (Beginners)</option>
                  <option value="Quran with Tajweed">Quran with Tajweed</option>
                  <option value="Hifz (Quran Memorisation)">Hifz (Quran Memorisation)</option>
                  <option value="Comprehensive Islamic Studies">Comprehensive Islamic Studies</option>
                  <option value="Arabic Conversation">Arabic Conversation</option>
                  <option value="Unsure / Need Assessment Recommendation">Unsure / Need Assessment Recommendation</option>
                </select>
              </div>

              {/* Preferred Timing */}
              <div>
                <label className="block text-xs font-bold text-[#082D7B] uppercase tracking-wider mb-2">
                  Preferred Class Timing *
                </label>
                <select
                  value={preferredTiming}
                  onChange={(e) => setPreferredTiming(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#082D7B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#082D7B] text-[#151918]"
                >
                  <option value="Evening (After School)">Evening (After School)</option>
                  <option value="Late Afternoon">Late Afternoon</option>
                  <option value="Weekend Mornings">Weekend Mornings</option>
                  <option value="Weekend Afternoons">Weekend Afternoons</option>
                  <option value="Flexible / Any Available Slot">Flexible / Any Available Slot</option>
                </select>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#082D7B]/10">
              <div className="text-xs text-[#64748B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#082D7B]" />
                <span>Your contact details are strictly private & confidential.</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-[#082D7B] hover:bg-[#062360] transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Send WhatsApp Admission Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

        </div>
      </section>

      {/* 6. SECTION 5: FREQUENTLY ASKED ADMISSION QUESTIONS */}
      <section className="relative py-16 sm:py-24 bg-[#FBF9F5] overflow-hidden">
        <HeroBgPattern opacity={0.03} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#082D7B]/8 border border-[#082D7B]/15 text-xs text-[#082D7B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="uppercase tracking-widest text-[10px] sm:text-[11px]">Admissions FAQ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#082D7B] tracking-tight">
              Frequently Asked Admissions Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#082D7B]/10 bg-white overflow-hidden transition-all shadow-sm"
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

      {/* 7. SECTION 6: CONTACT DIRECTORY & SOCIAL MEDIA */}
      <section className="relative py-16 sm:py-24 bg-white border-t border-[#082D7B]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082D7B] leading-tight tracking-tight mb-4">
              Get in Touch Directly
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Our academic advisors are available throughout the day to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">WhatsApp Desk</h3>
                <p className="text-xs text-[#64748B] mb-4">Instant answers & booking</p>
              </div>
              <button
                onClick={onOpenWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors cursor-pointer"
              >
                Chat on WhatsApp
              </button>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#082D7B]/10 text-[#082D7B] flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">Email Enquiries</h3>
                <p className="text-xs text-[#64748B] mb-4">{MADRASA_CONFIG.emailDisplay}</p>
              </div>
              <a
                href=""
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#082D7B] bg-white border border-[#082D7B]/20 hover:bg-[#082D7B] hover:text-white transition-all text-center"
              >
                Send Email
              </a>
            </div>

            {/* Instagram */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center mb-4">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">Instagram</h3>
                <p className="text-xs text-[#64748B] mb-4">Student tips & updates</p>
              </div>
              <button
                onClick={() => alert(`Instagram: ${MADRASA_CONFIG.instagramPlaceholder}`)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#E1306C] bg-white border border-[#E1306C]/30 hover:bg-[#E1306C] hover:text-white transition-all cursor-pointer"
              >
                Follow on Instagram
              </button>
            </div>

            {/* YouTube */}
            <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#082D7B]/10 text-center flex flex-col items-center justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Youtube className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#082D7B] mb-1">YouTube Channel</h3>
                <p className="text-xs text-[#64748B] mb-4">Recitation clips & lectures</p>
              </div>
              <button
                onClick={() => alert(`YouTube: ${MADRASA_CONFIG.youtubePlaceholder}`)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-red-600 bg-white border border-red-300 hover:bg-red-600 hover:text-white transition-all cursor-pointer"
              >
                Watch on YouTube
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 8. MAJOR CTA: SEND A WHATSAPP ADMISSION ENQUIRY */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-br from-[#082D7B] via-[#0D2D72] to-[#0568BD] text-white text-center overflow-hidden">
        <HeroBgPattern isDark opacity={0.07} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs text-[#C9A45C] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest text-[10px] sm:text-xs">Take the First Step</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Send a WhatsApp Admission Enquiry Today
          </h2>

          <p className="font-sans text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our friendly academic advisors are ready to answer your questions, schedule your child's free assessment, and assist with custom class timings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-[#082D7B] bg-[#C9A45C] hover:bg-white transition-all shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#082D7B]" />
              <span>Send a WhatsApp Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenTrialModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all cursor-pointer"
            >
              <span>Book Complimentary Trial</span>
            </button>
          </div>

          <div className="mt-8 text-xs text-white/60">
            Complimentary 1-on-1 trial class • No credit card required • Dedicated academic support
          </div>
        </div>
      </section>

    </div>
  );
};
