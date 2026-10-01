import React, { useEffect, useState } from 'react';
import {
  MessageCircle,
  Mail,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Instagram,
  Youtube,
  Facebook,
  Twitter
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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [contactNumber, setContactNumber] = useState('');
  const [childAge, setChildAge] = useState('');
  const [course, setCourse] = useState('Quran with Tajweed');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Online Madrasa Admission for Kids | Islah Online Madrasa";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || 'Parent';
    const fullContact = `${countryCode} ${contactNumber}`.trim();
    const formattedMsg = encodeURIComponent(
      `As-salamu alaykum. I would like to enquire about admission at Islah Online Madrasa:\n` +
      `• Parent Name: ${fullName}\n` +
      `• Email: ${email || 'Not provided'}\n` +
      `• Contact: ${fullContact}\n` +
      `• Child Age: ${childAge || 'Not specified'}\n` +
      `• Course of Interest: ${course}\n` +
      `• Message / Inquiry: ${message || 'I would like to book a free trial session.'}\n\n` +
      `Please provide details on schedule availability and complimentary trial booking.`
    );
    window.open(`https://wa.me/${MADRASA_CONFIG.phoneNumber}?text=${formattedMsg}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#151918]">
      
      {/* 1. HERO INNER BANNER */}
      <InnerBanner
        title="Contact Us & Admissions"
        breadcrumb="Admissions & Contact"
        subtitle="Join hundreds of happy families across the GCC and around the world. We are always here to help you choose the ideal course for your child."
      />

      {/* 2. CENTERPIECE: CONTACT & ADMISSION ENQUIRY CARD (MATCHING REFERENCE UI) */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 z-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Container Card */}
          <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_10px_40px_rgba(8,45,123,0.08)] border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#0D254C] tracking-tight mb-2">
                    Send us a message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8">
                    Do you have a question? Need admissions guidance? Or need any help to choose the right Islamic course from Islah? Feel free to contact us.
                  </p>

                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    {/* Row 1: First Name & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your first name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your last name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Contact Details with Country Code */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          Contact Details
                        </label>
                        <div className="flex rounded-full border border-gray-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-[#0D254C]/20 focus-within:border-[#0D254C] transition-all">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            aria-label="Country Code"
                            className="px-3.5 py-3 bg-gray-50 border-r border-gray-200 text-xs sm:text-sm font-medium text-gray-700 focus:outline-none cursor-pointer select-none"
                          >
                            <option value="+971">+971 (UAE)</option>
                            <option value="+966">+966 (KSA)</option>
                            <option value="+974">+974 (Qatar)</option>
                            <option value="+965">+965 (Kuwait)</option>
                            <option value="+968">+968 (Oman)</option>
                            <option value="+973">+973 (Bahrain)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+1">+1 (USA/CAN)</option>
                            <option value="+61">+61 (AUS)</option>
                            <option value="+91">+91 (IN)</option>
                          </select>
                          <input
                            type="tel"
                            required
                            placeholder="Enter your contact number"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="w-full px-4 py-3 text-xs sm:text-sm placeholder-gray-400 focus:outline-none bg-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Child's Age & Course of Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          Child's Age
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 7 years old"
                          value={childAge}
                          onChange={(e) => setChildAge(e.target.value)}
                          className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                          Course of Interest
                        </label>
                        <div className="relative">
                          <select
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            className="w-full px-5 py-3 rounded-full border border-gray-200 bg-white text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all cursor-pointer appearance-none pr-10"
                          >
                            <option value="Noorani Qaida (Beginners)">Noorani Qaida (Beginners)</option>
                            <option value="Quran with Tajweed">Quran with Tajweed</option>
                            <option value="Hifz (Quran Memorisation)">Hifz (Quran Memorisation)</option>
                            <option value="Comprehensive Islamic Studies">Comprehensive Islamic Studies</option>
                            <option value="Arabic Conversation">Arabic Conversation</option>
                            <option value="Complimentary Assessment / Unsure">Complimentary Assessment / Unsure</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter your message or preferred class schedule..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-4 rounded-2xl border border-gray-200 bg-white text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0D254C]/20 focus:border-[#0D254C] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button Row */}
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0D254C] hover:bg-[#061A36] text-white rounded-full font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Send a Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {isSubmitted && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Enquiry opened in WhatsApp. Our admissions coordinator will respond shortly!</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Right Column: Dark Navy Info Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#0D254C] rounded-3xl sm:rounded-[28px] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
                {/* Subtle pattern watermark */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <HeroBgPattern isDark opacity={0.15} />
                </div>

                <div className="relative z-10">
                  {/* Top Greeting */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-snug">
                    Hi! We are always here <br className="hidden sm:inline" />
                    to help you.
                  </h3>

                  {/* 3 Info Cards Stack */}
                  <div className="space-y-3.5 mb-8">
                    
                    {/* 1. Hotlines */}
                    <a
                      href={`tel:${MADRASA_CONFIG.phoneNumber}`}
                      className="group p-4 rounded-2xl bg-[#1C365C] hover:bg-[#224270] border border-white/10 flex items-center gap-4 transition-all block cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                        <Headphones className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                          Hotlines
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                          +971 56 490 1466
                        </div>
                      </div>
                    </a>

                    {/* 2. SMS / WhatsApp */}
                    <button
                      type="button"
                      onClick={onOpenWhatsApp}
                      className="w-full text-left group p-4 rounded-2xl bg-[#1C365C] hover:bg-[#224270] border border-white/10 flex items-center gap-4 transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                          SMS / Whatsapp
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                          +971 56 343 6433
                        </div>
                      </div>
                    </button>

                    {/* 3. Email */}
                    <a
                      href={`mailto:${MADRASA_CONFIG.emailDisplay}`}
                      className="group p-4 rounded-2xl bg-[#1C365C] hover:bg-[#224270] border border-white/10 flex items-center gap-4 transition-all block cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[11px] text-white/60 font-medium uppercase tracking-wider">
                          Email:
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white truncate">
                          {MADRASA_CONFIG.emailDisplay}
                        </div>
                      </div>
                    </a>

                  </div>
                </div>

                {/* Bottom Social Media Bar */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <div className="text-xs text-white/70 font-medium mb-3">
                    Connect with us
                  </div>

                  <div className="flex items-center gap-4 text-white">
                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert("Facebook: @islahonlinemadrasa"); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert(`Instagram: ${MADRASA_CONFIG.instagramPlaceholder}`); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert("Twitter / X: @islahonlinemadrasa"); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      title="Twitter / X"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>

                    <a
                      href="#"
                      onClick={(e) => { e.preventDefault(); alert(`YouTube: ${MADRASA_CONFIG.youtubePlaceholder}`); }}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                      title="YouTube"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

     

    </div>
  );
};
