import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle, Calendar, Clock, BookOpen, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COURSES, MADRASA_CONFIG } from '../data/madrasaData';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCourse?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  preSelectedCourse,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedCourse, setSelectedCourse] = useState(preSelectedCourse || COURSES[0].name);
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState('7');
  const [parentName, setParentName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [preferredTiming, setPreferredTiming] = useState('Evening (After School)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#082D7B', '#C9A45C', '#25D366', '#DFBA74'],
    });
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    triggerConfetti();
  };

  const openDirectWhatsAppBooking = () => {
    const message = encodeURIComponent(
      `As-salamu alaykum Islah Online Madrasa,\n\nI would like to book a Free Trial Class for my child:\n- Child Name: ${childName || 'Not specified'}\n- Age: ${childAge} years old\n- Desired Course: ${selectedCourse}\n- Preferred Time: ${preferredTiming}\n- Parent Name: ${parentName || 'Parent'}\n\nPlease share available slots. Jazakum Allahu Khayran!`
    );
    window.open(`https://wa.me/${MADRASA_CONFIG.phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#082D7B]/20 overflow-hidden flex flex-col max-h-[92vh]">

        {/* Header Ribbon */}
        <div className="bg-[#082D7B] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[11px] uppercase tracking-widest text-[#C9A45C] font-semibold block mb-1">
            Complimentary Assessment
          </span>
          <h3 className="font-serif text-2xl text-white font-medium">
            Book a Free Trial Class
          </h3>
          <p className="text-xs text-white/75 mt-1 font-sans">
            Meet a qualified teacher online with no financial commitment.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-grow">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-serif text-2xl text-[#082D7B] font-semibold mb-2">
                Trial Request Received!
              </h4>

              <p className="text-sm text-[#151918]/75 max-w-sm mb-6 leading-relaxed">
                Jazakum Allahu Khayran! We have reserved your diagnostic inquiry for{' '}
                <strong>{childName || 'your child'}</strong> in <strong>{selectedCourse}</strong>.
              </p>

              <div className="w-full p-4 rounded-xl bg-[#F6F1E7]/80 border border-[#082D7B]/10 mb-6 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#151918]/60">Student:</span>
                  <span className="font-semibold text-[#082D7B]">{childName || 'Student'} (Age {childAge})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#151918]/60">Course:</span>
                  <span className="font-semibold text-[#082D7B]">{selectedCourse}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#151918]/60">Preferred Time:</span>
                  <span className="font-semibold text-[#082D7B]">{preferredTiming}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={openDirectWhatsAppBooking}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-md font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Details via WhatsApp for Instant Slot Confirmation</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 text-xs font-medium text-[#151918]/70 hover:text-[#082D7B] cursor-pointer"
                >
                  Done & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookNow} className="space-y-4">

              {/* Step 1: Course Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#082D7B] mb-1.5">
                  Select Course Track
                </label>
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                >
                  {COURSES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name} ({c.level})
                    </option>
                  ))}
                </select>
              </div>

              {/* Child Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#082D7B] mb-1">
                    Child's First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Zayd or Maryam"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#082D7B] mb-1">
                    Child's Age
                  </label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                  >
                    {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((age) => (
                      <option key={age} value={age}>
                        {age} years old
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timing Preference */}
              <div>
                <label className="block text-xs font-semibold text-[#082D7B] mb-1">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTiming}
                  onChange={(e) => setPreferredTiming(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                >
                  <option value="Weekday Evenings (After School)">Weekday Evenings (After School)</option>
                  <option value="Weekday Mornings / Early Afternoons">Weekday Mornings / Early Afternoons</option>
                  <option value="Weekend Mornings">Weekend Mornings (Sat/Sun)</option>
                  <option value="Weekend Afternoons">Weekend Afternoons (Sat/Sun)</option>
                </select>
              </div>

              {/* Parent Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#082D7B]/10">
                <div>
                  <label className="block text-xs font-semibold text-[#082D7B] mb-1">
                    Parent's Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fatima Rahman"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#082D7B] mb-1">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+44 7000 000000"
                    value={whatsappNumber}
                    onChange={(e) => setWhatsappNumber(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm border border-[#082D7B]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#082D7B]/20"
                  />
                </div>
              </div>

              {/* Quick WhatsApp Sync Callout */}
              <div className="p-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-lg flex items-center justify-between text-xs text-[#075E54]">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Prefer booking directly via WhatsApp chat?</span>
                </div>
                <button
                  type="button"
                  onClick={openDirectWhatsAppBooking}
                  className="font-semibold underline cursor-pointer hover:text-black"
                >
                  Click Here
                </button>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#082D7B] hover:bg-[#001E3C] text-white rounded-md font-semibold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Free Trial Booking</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                </button>
                <p className="text-[11px] text-center text-[#151918]/50 mt-2">
                  No payment required · 100% Free 30-minute diagnostic session
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
